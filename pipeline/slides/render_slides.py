#!/usr/bin/env python3
"""Render Memopai carousel / photo-mode / story slides to PNG.

usage: python3 render_slides.py deck.json OUTDIR [--size feed|tall|both]
  feed = 1080x1350 (Instagram + Facebook carousel, 4:5)
  tall = 1080x1920 (TikTok photo mode, Instagram/Facebook Stories)
deck.json = {"slides":[{...}, ...]}  slide types:
  cover : kicker, title (use *word* for the yellow highlight), sub, [mascot:true]
  tip   : n, title, me (your WhatsApp message), reply (Memopai's reply), [note]
  text  : title, body (list of lines), [mascot]
  cta   : title, lines (list), button (default "memopai.com")
  story : title, sub, [kicker], [button]  (tall only, for Stories / link sticker)
Every slide gets the page dots + memopai.com footer (except story/cover).
Design rules: text inside x 90..990 on feed; on tall, content sits in y 260..1500 and x 80..900
(TikTok UI on the right and bottom). One idea per slide, max ~22 words.
"""
import json, sys, base64, html, re, pathlib
from playwright.sync_api import sync_playwright

HERE = pathlib.Path(__file__).resolve().parent
MASCOT = base64.b64encode((HERE.parent / 'assets' / 'mascot.png').read_bytes()).decode()

def esc(s): return html.escape(s or '')
def hl(s):  # *word* -> highlight
    return re.sub(r'\*(.+?)\*', r'<span class="hl">\1</span>', esc(s))

CSS = r"""
*{box-sizing:border-box;margin:0;padding:0}
body{width:%(W)dpx;height:%(H)dpx;overflow:hidden;font-family:'Inter Display',Inter,'Noto Color Emoji',sans-serif;}
.s{position:relative;width:%(W)dpx;height:%(H)dpx;overflow:hidden;display:flex;flex-direction:column;}
.purple{background:radial-gradient(circle at 30%% 20%%,#5b3fc4 0,#2b1e74 55%%,#1a1150 100%%);color:#fff}
.cream{background:#f3ece1;color:#1b1b1f}
.cream:before{content:'';position:absolute;inset:0;background-image:radial-gradient(#e2d6c4 3px,transparent 3px);background-size:46px 46px;opacity:.55}
.pad{position:relative;padding:%(PT)dpx %(PX)dpx %(PB)dpx %(PX)dpx;flex:1;display:flex;flex-direction:column}
.kicker{display:inline-block;align-self:flex-start;background:#25d366;color:#0b3d1f;font-weight:800;font-size:30px;letter-spacing:.06em;padding:12px 24px;border-radius:40px}
.title{font-weight:900;line-height:1.04;letter-spacing:-.02em}
.cover .title{font-size:%(CT)dpx;margin-top:44px}
.hl{background:#ffd23f;color:#1b1b1f;padding:0 14px;border-radius:14px;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.sub{font-size:54px;font-weight:600;line-height:1.25;margin-top:36px;opacity:.92}
.mascot{position:absolute;filter:drop-shadow(0 18px 30px rgba(0,0,0,.35))}
.num{display:inline-flex;align-items:center;justify-content:center;width:110px;height:110px;border-radius:50%%;background:#2b1e74;color:#fff;font-weight:900;font-size:52px}
.tip .title{font-size:84px;margin-top:34px}
.chat{margin-top:64px;display:flex;flex-direction:column;gap:26px}
.b{white-space:pre-line;max-width:88%%;font-size:50px;line-height:1.28;padding:26px 32px 22px;border-radius:30px;box-shadow:0 4px 0 rgba(0,0,0,.08);font-weight:600}
.me{align-self:flex-end;background:#d9fdd3;border-top-right-radius:8px}
.bot{align-self:flex-start;background:#fff;border-top-left-radius:8px}
.who{display:flex;align-items:center;gap:14px;font-size:32px;font-weight:800;color:#128c7e;margin-bottom:10px}
.who img{width:54px;height:54px}
.t{display:block;text-align:right;font-size:24px;color:#8a8f98;font-weight:600;margin-top:8px}
.note{margin-top:auto;font-size:44px;line-height:1.3;font-weight:600;color:#4a4f5a;border-left:10px solid #ffd23f;padding:6px 0 6px 28px}
.foot{position:absolute;left:%(PX)dpx;right:%(PX)dpx;bottom:%(FB)dpx;display:flex;justify-content:space-between;align-items:center;font-size:30px;font-weight:800}
.dots{display:flex;gap:12px}.dots i{width:16px;height:16px;border-radius:50%%;background:currentColor;opacity:.25}.dots i.on{opacity:1}
.cta .title{font-size:84px;text-align:center;margin-top:%(CTAM)dpx}
.lines{margin-top:40px;display:flex;flex-direction:column;gap:22px;align-items:center}
.lines div{font-size:52px;font-weight:600;text-align:center;line-height:1.25}
.btn{align-self:center;margin-top:48px;background:#25d366;color:#0b3d1f;font-weight:900;font-size:56px;padding:26px 64px;border-radius:80px;box-shadow:0 10px 0 #179b4a}
.text .title{font-size:72px}
.body{margin-top:40px;display:flex;flex-direction:column;gap:24px}.body div{font-size:44px;line-height:1.3;font-weight:600}
"""

def page(sl, i, n, tall):
    t = sl['type']; dots = ''.join(f'<i class="{"on" if k==i else ""}"></i>' for k in range(n))
    foot = f'<div class="foot"><span>memopai.com</span><div class="dots">{dots}</div></div>'
    if t == 'cover':
        m = f'<img class="mascot" src="data:image/png;base64,{MASCOT}" style="width:{460 if tall else 440}px;right:{80 if tall else 70}px;bottom:{440 if tall else 60}px;transform:rotate(8deg)">' if sl.get('mascot', True) else ''
        return f'<div class="s purple cover"><div class="pad"><span class="kicker">{esc(sl.get("kicker"))}</span><div class="title">{hl(sl["title"])}</div><div class="sub">{hl(sl.get("sub",""))}</div></div>{m}</div>'
    if t == 'tip':
        note = f'<div class="note">{hl(sl["note"])}</div>' if sl.get('note') else ''
        return (f'<div class="s cream tip"><div class="pad"><span class="num">{esc(str(sl["n"]))}</span><div class="title">{hl(sl["title"])}</div>'
                f'<div class="chat"><div class="b me">{esc(sl["me"])}<span class="t">✓✓</span></div>'
                f'<div class="b bot"><div class="who"><img src="data:image/png;base64,{MASCOT}">Memopai</div>{esc(sl["reply"])}</div></div>{note}</div>{foot}</div>')
    if t == 'text':
        body = ''.join(f'<div>{hl(x)}</div>' for x in sl.get('body', []))
        return f'<div class="s cream text"><div class="pad"><div class="title">{hl(sl["title"])}</div><div class="body">{body}</div></div>{foot}</div>'
    if t == 'cta':
        lines = ''.join(f'<div>{hl(x)}</div>' for x in sl.get('lines', []))
        return (f'<div class="s purple cta"><div class="pad"><img src="data:image/png;base64,{MASCOT}" style="width:{360 if tall else 300}px;align-self:center;filter:drop-shadow(0 18px 30px rgba(0,0,0,.35))">'
                f'<div class="title">{hl(sl["title"])}</div><div class="lines">{lines}</div><div class="btn">{esc(sl.get("button","memopai.com"))}</div></div>{foot}</div>')
    if t == 'story':
        return (f'<div class="s purple cta"><div class="pad"><span class="kicker" style="align-self:center">{esc(sl.get("kicker",""))}</span>'
                f'<img src="data:image/png;base64,{MASCOT}" style="width:440px;align-self:center;margin-top:40px;filter:drop-shadow(0 18px 30px rgba(0,0,0,.35))">'
                f'<div class="title" style="font-size:96px;text-align:center;margin-top:40px">{hl(sl["title"])}</div><div class="sub" style="text-align:center">{hl(sl.get("sub",""))}</div>'
                + (f'<div class="btn">{esc(sl["button"])}</div>' if sl.get('button') else '') + '</div></div>')
    raise ValueError(t)

def render(deck, out, size):
    out = pathlib.Path(out); out.mkdir(parents=True, exist_ok=True)
    sizes = {'feed': (1080, 1350), 'tall': (1080, 1920)}
    todo = ['feed', 'tall'] if size == 'both' else [size]
    files = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        for sz in todo:
            W, H = sizes[sz]; tall = sz == 'tall'
            css = CSS % dict(W=W, H=H, PX=90 if not tall else 96, PT=110 if not tall else 300, PB=150 if not tall else 470,
                             FB=60 if not tall else 330, CT=132 if not tall else 128, CTAM=30 if not tall else 50)
            pg = b.new_page(viewport={'width': W, 'height': H})
            slides = [s for s in deck['slides'] if (s['type'] != 'story' or tall)]
            for i, sl in enumerate(slides):
                pg.set_content(f'<html><head><meta charset="utf-8"><style>{css}</style></head><body>{page(sl, i, len(slides), tall)}</body></html>')
                pg.wait_for_timeout(150)
                f = out / f'{sz}_{i+1:02d}.png'; pg.screenshot(path=str(f)); files.append(str(f))
        b.close()
    print('\n'.join(files))

if __name__ == '__main__':
    size = 'both'
    if '--size' in sys.argv: size = sys.argv[sys.argv.index('--size') + 1]
    render(json.load(open(sys.argv[1])), sys.argv[2], size)
