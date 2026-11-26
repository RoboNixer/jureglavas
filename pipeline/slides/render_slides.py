#!/usr/bin/env python3
"""Render Memopai carousel / photo-mode / story slides to PNG.

usage: python3 render_slides.py deck.json OUTDIR [--size feed|tall|both]
  feed = 1080x1350 (Instagram + Facebook carousel, 4:5)
  tall = 1080x1920 (TikTok photo mode, Instagram/Facebook Stories)
deck.json = {"slides":[{...}, ...]}  slide types:
  cover : kicker, title (use *word* for the yellow highlight), sub, [mascot:true], [bg: purple|cream|green], [foot:true]
          (grid posts: covers rotate bg purple → cream → green so the profile grid reads as one brand system)
  tip   : n, title, me (your WhatsApp message), reply (Memopai's reply), [note]
  text  : title, body (list of lines), [mascot]
  cta   : title, lines (list), button (default "memopai.com")
  story : title, sub, [kicker], [button]  (tall only, for Stories / link sticker)
  vs    : title, without (list of lines), with (list of lines), [lw/rw custom headers]   -> life WITHOUT vs WITH Memopai
  fact  : big (e.g. "50 weeks"), title, sub, [src]                                          -> fun-fact stat card
  quote : quote, sub, [who]                                                                 -> bold relatable quote / meme card
  steps : title, steps (list of lines), [kicker]                                            -> "What is Memopai" 1-2-3
THEMES (deck "theme" or slide "theme"; owner 2026-11-26: "change the designs so the posts don't look the same"):
  classic (purple + cream, the original), night (navy + neon green), sunset (orange/pink + peach), paper (lined notebook),
  poster (yellow, black type, thick frames), mint (green + light mint), chat (WhatsApp wallpaper). Never reuse the theme
  of the previous grid post or the previous Story set; rotate through all of them. A slide "bg" still overrides.
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
.green{background:radial-gradient(circle at 30%% 20%%,#2fe07a 0,#16a352 60%%,#0d7a3c 100%%);color:#fff}
.green .kicker{background:#fff;color:#0d7a3c}
.cream .kicker{background:#2b1e74;color:#fff}
.cover .foot{opacity:.9}
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
.text .pad{justify-content:center;padding-bottom:220px}
.text .title{font-size:88px}
/* ---- THEMES v2 (2026-11-26) ---- */
.night{background:radial-gradient(circle at 70%% 10%%,#1f3a7a 0,#0d1633 60%%,#070b1c 100%%);color:#fff}
.night .kicker{background:#39ff88;color:#062b15}.night .hl{background:#39ff88;color:#062b15}.night .note{color:#cfe0ff;border-color:#39ff88}
.night .b{color:#111}.night .num{background:#39ff88;color:#062b15}
.sunset{background:linear-gradient(160deg,#ff9a3c 0,#ff5e7e 55%%,#a83ecf 100%%);color:#fff}.sunset .kicker{background:#fff;color:#c2185b}
.peach{background:#ffe9dc;color:#2a1a1a}.peach .num{background:#ff5e7e}.peach .kicker{background:#ff5e7e;color:#fff}.peach .hl{background:#ffb199}
.paper{background:#fffdf5;color:#1d2a44;background-image:repeating-linear-gradient(#fffdf5 0 58px,#b9d3f0 58px 61px);}
.paper:after{content:'';position:absolute;top:0;bottom:0;left:64px;width:4px;background:#f08a8a}
.paper .kicker{background:#1d2a44;color:#fff}.paper .hl{background:#fff27a}.paper .num{background:#f08a8a}
.poster{background:#ffd23f;color:#111}.poster .s,.poster{box-shadow:inset 0 0 0 26px #111}.poster .kicker{background:#111;color:#ffd23f}
.poster .hl{background:#111;color:#ffd23f}.poster .num{background:#111;color:#ffd23f}.poster .btn{background:#111;color:#ffd23f;box-shadow:0 10px 0 #444}
.mint{background:#e4fbee;color:#0b3d1f}.mint .num{background:#16a352}.mint .kicker{background:#16a352;color:#fff}
.chatbg{background:#efe7dc;color:#1b1b1f;background-image:radial-gradient(#d8cdbd 2px,transparent 2px),radial-gradient(#e2d8ca 6px,transparent 6px);background-size:38px 38px,110px 110px;background-position:0 0,20px 30px}
.chatbg .kicker{background:#128c7e;color:#fff}.chatbg .num{background:#128c7e}
.vs .title{font-size:76px;text-align:center}
.cols{margin-top:44px;display:flex;gap:26px;flex:1}
.col{flex:1;border-radius:34px;padding:34px 30px;display:flex;flex-direction:column;gap:22px}
.col h3{font-size:44px;font-weight:900}.col div{font-size:40px;line-height:1.25;font-weight:600}
.col.no{background:#ffe1e1;color:#7a1515}.col.yes{background:#dcf8e6;color:#0b5a2a}
.fact .big{font-size:230px;font-weight:900;letter-spacing:-.04em;line-height:.95;margin-top:60px}
.fact .title{font-size:76px;margin-top:30px}.src{margin-top:auto;font-size:30px;opacity:.7;font-weight:600}
.quote .q{font-size:104px;font-weight:900;line-height:1.05;letter-spacing:-.02em;margin-top:40px}
.quote .q:before{content:'“';display:block;font-size:220px;line-height:.6;opacity:.35}
.steps .title{font-size:84px}.stp{display:flex;gap:30px;align-items:center;margin-top:40px}.stp b{flex:none;display:flex;align-items:center;justify-content:center;width:100px;height:100px;border-radius:50%%;background:#25d366;color:#0b3d1f;font-size:50px}.stp span{font-size:52px;font-weight:700;line-height:1.2}
.body{margin-top:48px;display:flex;flex-direction:column;gap:30px}.body div{font-size:54px;line-height:1.3;font-weight:600}
"""

THEMES = {'classic': ('purple', 'cream'), 'night': ('night', 'night'), 'sunset': ('sunset', 'peach'), 'paper': ('paper', 'paper'),
          'poster': ('poster', 'poster'), 'mint': ('green', 'mint'), 'chat': ('chatbg', 'chatbg')}

def page(sl, i, n, tall, theme='classic'):
    th = THEMES.get(sl.get('theme', theme), THEMES['classic']); D, L = th
    return _page(sl, i, n, tall, D, L)

def _page(sl, i, n, tall, D, L):
    t = sl['type']; dots = ''.join(f'<i class="{"on" if k==i else ""}"></i>' for k in range(n))
    foot = f'<div class="foot"><span>memopai.com</span><div class="dots">{dots}</div></div>'
    if t == 'cover':
        m = f'<img class="mascot" src="data:image/png;base64,{MASCOT}" style="width:{460 if tall else 440}px;right:{80 if tall else 70}px;bottom:{440 if tall else 60}px;transform:rotate(8deg)">' if sl.get('mascot', True) else ''
        bg = sl.get('bg', D)
        cf = '<div class="foot"><span>memopai.com</span><span></span></div>' if sl.get('foot') else ''
        return f'<div class="s {bg} cover"><div class="pad"><span class="kicker">{esc(sl.get("kicker"))}</span><div class="title">{hl(sl["title"])}</div><div class="sub">{hl(sl.get("sub",""))}</div></div>{m}{cf}</div>'
    if t == 'tip':
        note = f'<div class="note">{hl(sl["note"])}</div>' if sl.get('note') else ''
        return (f'<div class="s {L} tip"><div class="pad"><span class="num">{esc(str(sl["n"]))}</span><div class="title">{hl(sl["title"])}</div>'
                f'<div class="chat"><div class="b me">{esc(sl["me"])}<span class="t">✓✓</span></div>'
                f'<div class="b bot"><div class="who"><img src="data:image/png;base64,{MASCOT}">Memopai</div>{esc(sl["reply"])}</div></div>{note}</div>{foot}</div>')
    if t == 'text':
        body = ''.join(f'<div>{hl(x)}</div>' for x in sl.get('body', []))
        return f'<div class="s {L} text"><div class="pad"><div class="title">{hl(sl["title"])}</div><div class="body">{body}</div></div>{foot}</div>'
    if t == 'cta':
        lines = ''.join(f'<div>{hl(x)}</div>' for x in sl.get('lines', []))
        return (f'<div class="s {D} cta"><div class="pad"><img src="data:image/png;base64,{MASCOT}" style="width:{360 if tall else 300}px;align-self:center;filter:drop-shadow(0 18px 30px rgba(0,0,0,.35))">'
                f'<div class="title">{hl(sl["title"])}</div><div class="lines">{lines}</div><div class="btn">{esc(sl.get("button","memopai.com"))}</div></div>{foot}</div>')
    if t == 'story':
        return (f'<div class="s {D} cta"><div class="pad"><span class="kicker" style="align-self:center">{esc(sl.get("kicker",""))}</span>'
                f'<img src="data:image/png;base64,{MASCOT}" style="width:440px;align-self:center;margin-top:40px;filter:drop-shadow(0 18px 30px rgba(0,0,0,.35))">'
                f'<div class="title" style="font-size:96px;text-align:center;margin-top:40px">{hl(sl["title"])}</div><div class="sub" style="text-align:center">{hl(sl.get("sub",""))}</div>'
                + (f'<div class="btn">{esc(sl["button"])}</div>' if sl.get('button') else '') + '</div></div>')
    if t == 'vs':
        no = ''.join(f'<div>❌ {hl(x)}</div>' for x in sl.get('without', [])); ys = ''.join(f'<div>✅ {hl(x)}</div>' for x in sl.get('with', []))
        return (f'<div class="s {L} vs"><div class="pad"><div class="title">{hl(sl["title"])}</div><div class="cols">'
                f'<div class="col no"><h3>{esc(sl.get("lw","Without Memopai 😩"))}</h3>{no}</div><div class="col yes"><h3>{esc(sl.get("rw","With Memopai 😌"))}</h3>{ys}</div></div></div>{foot}</div>')
    if t == 'fact':
        src = f'<div class="src">Source: {esc(sl["src"])}</div>' if sl.get('src') else ''
        return (f'<div class="s {D} fact"><div class="pad"><span class="kicker">{esc(sl.get("kicker","Fun fact"))}</span><div class="big">{hl(sl["big"])}</div>'
                f'<div class="title">{hl(sl["title"])}</div><div class="sub">{hl(sl.get("sub",""))}</div>{src}</div>{foot}</div>')
    if t == 'quote':
        who = f'<div class="sub">— {esc(sl["who"])}</div>' if sl.get('who') else ''
        return f'<div class="s {D} quote"><div class="pad"><div class="q">{hl(sl["quote"])}</div>{who}<div class="sub">{hl(sl.get("sub",""))}</div></div>{foot}</div>'
    if t == 'steps':
        st = ''.join(f'<div class="stp"><b>{k+1}</b><span>{hl(x)}</span></div>' for k, x in enumerate(sl.get('steps', [])))
        return f'<div class="s {L} steps"><div class="pad"><span class="kicker">{esc(sl.get("kicker","How it works"))}</span><div class="title" style="margin-top:30px">{hl(sl["title"])}</div>{st}</div>{foot}</div>'
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
                pg.set_content(f'<html><head><meta charset="utf-8"><style>{css}</style></head><body>{page(sl, i, len(slides), tall, deck.get('theme','classic'))}</body></html>')
                pg.wait_for_timeout(150)
                f = out / f'{sz}_{i+1:02d}.png'; pg.screenshot(path=str(f)); files.append(str(f))
        b.close()
    print('\n'.join(files))

if __name__ == '__main__':
    size = 'both'
    if '--size' in sys.argv: size = sys.argv[sys.argv.index('--size') + 1]
    render(json.load(open(sys.argv[1])), sys.argv[2], size)
