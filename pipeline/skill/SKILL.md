---
name: "stickman-story-video"
description: "Make viral 9:16 Memopai reels, posts and Stories for TikTok/Instagram/Facebook: 10 rotating series (reminder of the day, fun facts, that's-me stories, what is Memopai, half-half with vs without, Officer Gary policeman comedy, life with vs without), moving camera, detailed sets, varied designs, end card + CTA."
---

# Stickman story video (Jure's style)

## 0. CONTENT SYSTEM v4 — READ FIRST (owner, 2026-11-26; overrides everything below where they disagree)
Owner: "You are uploading only the same videos. Make better stories, different characters, change designs, different formats. Do one about a fun fact, one viral reminder of the day, then the policeman. Move the camera, move the characters, the background should be perfect and detailed. Also do half-half videos, one if you used Memopai, one if you don't. Use all kinds of videos. 10 a day on Instagram and Facebook, 6 on TikTok. On Instagram also do posts with changing designs. Stories with changing designs and formats. Show what Memopai is, and life with vs without Memopai."
The working pipeline, runbook and examples live in the repo `RoboNixer/jureglavas`, branch `memopai-media` (`pipeline/RUNBOOK.md` section 0h is the source of truth; `pipeline/common/` holds engine.html, look2.js, look3.js, toonlib.js, vo_core.py, score_core.py, build.sh; `pipeline/finish.sh`, `pipeline/safecheck.py`, `pipeline/slides/render_slides.py`). Prefer those files over the older code copies further down this skill.

**0.1 Ten series, one per slot (Europe/Zagreb).** 08 REMINDER OF THE DAY (10–15 s: date-aware reminder + the exact words to send Memopai; + the day's 3 Stories) · 10 FUN FACT (nature/science memory fact, documentary flat-vector look) · 12 STORY ("that's me" mirror, look3) · 13 WHAT IS MEMOPAI (one question answered, rotating explainer formats; + grid post) · 14 HALF-HALF (split screen: top without Memopai, bottom with, same person in sync, diverging at the reminder) · 16 POLICEMAN (Officer Gary absurd-logic comedy, cinematic) · 18 FUN FACT 2 (true "someone forgot" history/business story or human-memory science, different look) · 19 LIFE WITH vs WITHOUT (same day twice / week montage; + grid post) · 20 STORY 2 (different cast and setting) · 22 REMINDER FOR TOMORROW (Fri "Forgot it Friday", Sun "Set up your week"). TikTok only for 10, 12, 14, 16, 18, 20.

**0.2 Never the same.** Each reel differs from the previous one in look, cast, setting, colour mood and format; never repeat a premise, object or punchline. Rotate the cast (woman, man, teen, grandparent, flatmate, student, new parent, office worker; varied hair, skin tones, clothes, ages). Add one new character, set, prop or look kit to the shared libraries every video and use it.

**0.3 Look families.** look3 illustrated (stories, half-half) · documentary flat-vector (fun facts: dark cinematic gradient world with god rays and particles, one hero animal, small top-left context chip, 1–3-word ALL-CAPS kinetic captions with one orange keyword, stat bars/counters/stamps/✓ pills; myth → experiment → twist number → "So you…" → Memopai chat → callback punchline about the animal) · Officer Gary toon with detailed sets (policeman) · explainer card (framed scene on a textured backdrop, title plate, progress bar, location chips, word-art claims, mascot reveal with radar ring, chat demo, tagline) · kinetic type + phone (reminders) · history stickman / paper cut-out / map infographic (fun fact 2).

**0.4 Camera, motion, backgrounds.** Every shot has a real camera move (tracking pan following a walk, crane, drone top-down, over-the-shoulder, whip pan/match cut, push-in on the punchline, lock-on zoom gag), animate `cam()` cx/cy/zoom per shot. Characters walk/run in, cross, turn, react with anticipation and follow-through; no static shot over 2 s. Backgrounds: 3+ depth layers, real props and signage, background life (birds, passers-by, steam, rain, blinking lights), one light mood per shot.

**0.5 Policeman series.** Deadpan literal logic in short past-tense clauses, one clause per shot, escalation (siren chase, HUD lock-on, courtroom + gavel, absurd sentence), twist/callback ending. The plot hinges on forgetting or reminding and Memopai is the turn. Original characters only (never copy reference channels' box-head or triangle-head people), never jokes about race, ethnicity, religion or nationality, no graphic violence. Satire mechanic (2-3x a week): the police start from ONE wrong assumption about memory/punctuality/habits and bend every fact to keep it (normal person notices something 'terrifying' → 911, officer yells the obvious → chief declares an absurd emergency → squad storms in → rookie objects, chief shouts a dumber order → stamped-file reveal proves the opposite, chief blames the wrong party → 'promoted' ending). E.g. 'A man showed up on time. The police found this suspicious.' → they arrest his Memopai reminder → it ends up as the chief's assistant. Never bias jokes about race, ethnicity, religion, nationality, gender or disability.

**0.6 Memopai rules (all series).** Memopai is the star: the story is about forgetting/reminding and falls apart without it. Real features only: WhatsApp contact, text or voice note in plain words, recurring reminders, snooze, reminds other people (they tap Accept once, no app), 24/7, EN/HR/BS/SR. Paid: never say "free". It reminds; the person does the task. The viewer is "you". Every reel ENDS with the Memopai end card (`endcard()`) and a spoken call to action tagged `cta` ("… Just text Memo Pie on WhatsApp."); this replaces the old "never an ad ending" rule in section 1. "Memo Pie" in TTS, "Memopai" on screen.

**0.7 Posts and Stories.** `render_slides.py` themes: classic, night, sunset, paper, poster, mint, chat; slide types cover, tip, text, cta, story, vs (without vs with), fact (big stat), quote (meme line), steps (what is Memopai). Never reuse the previous post's theme or type. 2 grid posts a day (IG `{type:"post", shouldShareToFeed:true}`, FB `{type:"post"}`), 3 Stories a day (each frame a different theme and format: quiz → answer, this-or-that, tip, reel teaser, countdown, 3 steps; no link stickers; memopai.com button).

**0.8 Quality bar.** Hook in 1.5 s, pattern-interrupt at ~3 s, one stand-alone joke line, payoff reverses frame 1, 15–29 s (reminders 10–15 s). Safe zones: text inside x 150–900, y 300–1610; faces inside y 300–1380. Fresh-reader gate before building; look at preview, QA tile sheet and safe-zone sheet before publishing. Narrator: natural default narrator voice, never whispering, clearly above the music; separate captions per platform with one question or send-prompt.

> Older notes below: section 7 (Officer Gary) is now the POLICEMAN series look, not the default for everything; sections 1–6 still document the engine basics.

> **Default for Memopai comedy videos is section 7, the goofy toon comedy mode (Officer Gary series).** Jure called it "perfect". Use the stickman look (sections 1–6) for history stories. Sections 2–6 (setup, pipeline, render, QA) apply to both modes.

Output: 1080×1920, 30 fps MP4, 35–55 s. Round-headed stickmen with thick black outlines, painted flat backgrounds, a handheld-wobble camera that pans and zooms, a white flash on every cut, and big 1–3 word captions (white, red for characters, light-blue italic for echoes). There's a natural, dry female narrator (af_heart) with dynamic pacing, character voices, synthesized music and cartoon sound effects. Each shot is drawn from scratch in Canvas2D with a deterministic `render(t)`, screenshotted by Playwright and piped into ffmpeg.

## 1. Story rules (this is what makes it work)
- **Hook in the first 2–3 s.** Start with the most shocking or absurd claim plus a strong visual: "This cop arrested a canyon… and a black hole." / "The Titanic sank… and one forgotten key might be why."
- **Something changes every 1–2 s:** a new shot, a stamp ("ARRESTED", "TOO LATE"), a tag label, a speech bubble, shake or flash.
- **Voice dynamics:** setup lines fast (speed 1.12–1.18), punchlines slow (0.88–0.95) with a 0.12–0.3 s gap before them, character shouts in a male voice (am_michael, or bm_george for British/old officers). Keep pauses short.
- **Comedy style Jure likes:** absurd, deadpan logic taken literally. Example: an officer arrests a canyon for copyright because it echoes him; arrests a black hole for false imprisonment; "Hands where I can see them!" → "It doesn't have hands." Follow punchlines with crickets or silence. End on a new absurd escalation ("Next suspect? The Moon. It's been following my car for years.").
- **History stories:** fact-check with web search first. Phrase anything contested honestly ("might be why", "the key to the crow's-nest locker"). Put real quotes on a quote card. A surprising number at the end works well ("Sold in 2007… for £90,000").
- **Memopai placement (always):**
  - The story comes first. Memopai appears inside the story as a WhatsApp AI contact: a character messages it and it sends reminders.
  - Show BOTH uses: reminding yourself and **reminding other people**. Examples: a wife reminds her husband; Dave reminds the canyon and the black hole about court.
  - (Superseded 2026-11-11/2026-11-26) Every video ends with the Memopai end card and a spoken CTA, see 0.6.
  - Spell it "**Memopai**" on screen. In the TTS text write "Memo Pie" for pronunciation; vo.py auto-converts captions to "Memopai".
  - Use the mascot PNG as the WhatsApp avatar (mascot.png).
  - Good formats: "Now rewind. Same day. But with phones." (history what-if), or a character casually setting a reminder for someone, then a lock-screen or notification banner payoff.
- Avoid graphic violence (use "BANG!" text on a dark rooftop with birds flying off). No real-person likenesses beyond generic stickmen. Note that 🦤 is a dodo, not an emu.

## 2. One-time setup per session (~2 min)
The voice model comes from npm (Hugging Face and GitHub may be blocked):
```bash
mkdir -p ~/tts && cd ~/tts
for p in kokoro-fp32a-shards kokoro-fp32b-shards kokoro-fp32c-shards; do npm pack $p@1.0.0 >/dev/null && mkdir -p $p && tar xzf $p-1.0.0.tgz -C $p; done
cat $(for i in $(seq 0 18); do ls kokoro-fp32*-shards/package/kokoro-fp32.part$i.bin; done) > kokoro-fp32.onnx
ls -l kokoro-fp32.onnx   # must be 325532232 bytes (sha256 starts 8fbea51ea711f2af)
npm pack kokoro-js@1.2.1 >/dev/null && mkdir -p kjs && tar xzf kokoro-js-1.2.1.tgz -C kjs
python3 -c "import numpy as np,glob,os;np.savez('voices.npz',**{os.path.basename(f)[:-4]:np.fromfile(f,dtype=np.float32).reshape(-1,1,256) for f in glob.glob('kjs/package/voices/*.bin')})"
pip install kokoro-onnx==0.6.1 soundfile scipy --break-system-packages -q
```
- Use the **fp32** model, not q8. The voice chain in vo.py is approved. Never add reverb or pitch shift to the narrator (that made it "robotic and distant"). Comedy-mode character voices (Gary, Death, kid, fairy) are pitched on purpose; see section 7.
- Project folder: `mkdir -p ~/vid/<name>`. In it you need:
  - **mascot.png:** the Memopai mascot. Ask Jure to attach it if it's missing. The page waits for it to load, so a file must exist.
  - **grain.png:** create it with `python3 -c "import numpy as np;from PIL import Image;Image.fromarray(np.random.default_rng(1).integers(0,256,(512,512)).astype('uint8'),'L').save('grain.png')"`
- Playwright and Chromium are preinstalled (`require('playwright')`); don't reinstall them.

## 3. Pipeline
1. **Script → vo.py** (below): edit `S`, then run `python3 vo.py`. This writes vo.wav and timeline.json (each line gets t0/t1/tag/voice).
   - To show digits in captions, post-edit timeline.json texts, e.g. "nineteen fourteen" → "1914" or "ninety thousand pounds" → "£90,000".
2. **Scenes:** write `scenes.js` with one `sh(T('tag'), (t,r)=>{...})` per shot (cut on line tags; add mid-line cuts with `T('h1')+1.6`). Then build the page:
   `python3 -c "import json;s=open('engine.html').read();open('story.html','w').write(s.replace('/*TL*/',open('timeline.json').read()).replace('/*SCENES*/',open('scenes.js').read()))"`
3. **Preview:** run `node frames.js 1 4.5 9.2 ...` to get prev_<t>.jpg. Tile them into a contact sheet with PIL and Read it. Fix framing, overlaps and direction, then rebuild.
4. **Score:** copy score_core.py to score.py, write cues in the CUES section using `T('tag')`, then run `python3 score.py` to get mix.wav (voice ducking is automatic).
5. **Render:** `node render.js` renders 4 chunks in parallel, then:
   `printf "file 's_%s.mp4'\n" a b c d > list.txt && ffmpeg -y -loglevel error -f concat -safe 0 -i list.txt -c copy silent.mp4 && ffmpeg -y -loglevel error -i silent.mp4 -i mix.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart OUT.mp4`
   - To fix one part, re-render only that chunk (edit SC in render.js), then concat again.
6. **QA:** `ffmpeg -i OUT.mp4 -vf "fps=2,scale=120:213,tile=12x9" -frames:v 1 sheet.jpg` and look at every tile. You cannot hear audio, so say so to the user.
7. **Deliver:** SendUserFile the MP4. Summarize briefly (hook, beats, Memopai moment, sources for history).

## 4. Layout and gotchas
- **Canvas and camera:** the canvas is 1080×1920. `cam(cx,cy,zoom,t,wobble)` puts world point (cx,cy) at screen centre. The caption sits at screen y≈1400–1650, so keep faces and key action between y 250 and 1350.
- **Screen-space UI:** after the world drawing, call `X.setTransform(1,0,0,1,0,0)`, then use `tag()`, `stampBig()`, `notif()` or `bubbleTxt()`. Stamps use `stampFit` (the box auto-sizes).
- `man(x,y,s,{face:'happy|sad|angry|shock|smug|wink|neutral', talk:t, walk:t, armL/armR:deg, hat:'straw|slouch|cap|plume|lady|kepi|driver|flat|fez', hair:'#col', dress:1, coat, mustache, medal, blink, flip})`. `y` is the feet; height is about 404·s. `guy()` adds hat2 ('officer', 'beanie'). `dave()` is a police officer.
- `face2(x,y,s,{look,squint,angry,smug,shock,talk})` gives faces to objects (canyon, moon, black hole).
- Phone UI:
  - `phoneUI(540,960,1,r,{typing, list:[{a:secs,me:1|0,text,time}]})` draws a WhatsApp chat with the Memopai header and avatar.
  - `notif(170,progress,'Memopai','⏰ ...')` draws a notification banner.
  - Put the sender stickman small at the bottom-left of chat shots.
- **fillStyle leak:** `rr()`/`circ()` set fillStyle, so set `X.fillStyle` again before every raw `fillRect` in loops.
- **Facing:** characters and vehicles face +x. Use `flip:1` when they move left (ships, cars), and check that maps turn in the correct real direction.
- **Clip masks** (binocular view): fill black, then `X.save(); beginPath(); arc(); moveTo(); arc(); clip();` then draw the scene and `restore()`. Don't use evenodd.
- **Text with emoji:** use fonts `Inter, 'Noto Color Emoji'`. Avoid very long stamp words.
- **Echo effect:** use a vo.py line with voice `'ECHO:Hello!'` and pair it with `echoes(t,T('e1'),['hello…','hello…','hello…'],460,600)`.
- **History what-if rewind:** call `scan(t)` (VHS overlay) and play the previous action backwards, then show "YEAR + PHONES" with a sparkle phone.

## 5. Code

### vo.py
```python
import numpy as np, soundfile as sf, json
from scipy import signal
from kokoro_onnx import Kokoro
import os
TTS=os.path.expanduser('~/tts')
K=Kokoro(TTS+'/kokoro-fp32.onnx',TTS+'/voices.npz')
SR=24000; N='af_heart'; B='bm_george'; M='am_michael'
# (gap_before_s, voice, speed, text, tag). voice: N narrator, M/B character, or 'ECHO:<spoken text>' (3 decaying lowpassed repeats in M).
# Write brand as "Memo Pie" for pronunciation; captions auto-show "Memopai".
S=[
 (0.05,N,1.05,"Hook line that makes them stay.",'h1'),
 (0.25,N,1.15,"Fast setup line.",'s1'),
 (0.08,M,1.1,"Character shout!",'c1'),
 (0.12,N,0.92,"Slow punchline.",'s2'),
]
def trim(a,th=0.008):
    i=np.where(np.abs(a)>th)[0];return a[max(0,i[0]-int(.012*SR)):i[-1]+int(.06*SR)]
def peq(x,f0,g_db,q):
    A=10**(g_db/40);w=2*np.pi*f0/SR;al=np.sin(w)/(2*q)
    b=[1+al*A,-2*np.cos(w),1-al*A];a=[1+al/A,-2*np.cos(w),1-al/A];return signal.lfilter(np.array(b)/a[0],np.array(a)/a[0],x)
def polish(v):
    b,a=signal.butter(2,70/(SR/2),'high');v=signal.lfilter(b,a,v)
    v=peq(v,180,2.0,0.8); v=peq(v,3200,1.8,1.0); v=peq(v,7500,-1.5,1.2)
    lvl=np.sqrt(np.convolve(v**2,np.ones(int(.05*SR))/int(.05*SR),'same'))+1e-6
    g=np.where(lvl>0.08,(0.08/lvl)**0.5,1.0);k=int(.15*SR);g=np.convolve(g,np.ones(k)/k,'same')
    return v*g
out=[];tl=[];t=0.0
for gap,voice,sp,text,tag in S:
    if voice.startswith('ECHO:'):
        a0,_=K.create(voice[5:],voice=M,speed=sp,lang='en-us');a0=trim(a0)
        b_,a_=signal.butter(2,2600/(SR/2));a0=signal.lfilter(b_,a_,a0)
        step=int(len(a0)*0.85);a=np.zeros(step*2+len(a0))
        for k,g in enumerate([.62,.38,.2]): a[k*step:k*step+len(a0)]+=a0*g
        lab='echo'
    else:
        lab='him' if voice in (B,M) else 'her'
        a,_=K.create(text,voice=voice,speed=sp,lang='en-us');a=trim(a)
    t+=gap;tl.append(dict(t0=round(t,3),t1=round(t+len(a)/SR,3),text=text.replace('Memo Pie','Memopai'),tag=tag,voice=lab));out.append((t,a));t+=len(a)/SR
T=t+2.2
v=np.zeros(int(T*SR))
for st,a in out: i=int(st*SR);v[i:i+len(a)]+=a
v=polish(v);v=v/np.max(np.abs(v))*0.92
sf.write('vo.wav',v.astype(np.float32),SR);json.dump(dict(total=round(T,2),lines=tl),open('timeline.json','w'),indent=1)
for l in tl: print(l['t0'],l['t1'],l['tag'],l['text'])
print('TOTAL',round(T,2))
```

### engine.html (save exactly; scenes go in /*SCENES*/)
```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1920px;overflow:hidden;background:#000}
#cv{position:absolute;left:0;top:0}
#cap{position:absolute;left:30px;right:30px;top:1400px;text-align:center;font-family:'Inter Display',Inter,'Noto Color Emoji';font-weight:900;font-size:118px;line-height:1.02;letter-spacing:-.02em;color:#fff;-webkit-text-stroke:16px #111;paint-order:stroke fill;z-index:5}
#cap.q{color:#ff6b5a}
#cap.e{color:#9fd3ff;font-style:italic}
#grain{position:absolute;inset:0;background:url(grain.png);opacity:.06;mix-blend-mode:overlay;z-index:4}
#vig{position:absolute;inset:0;background:radial-gradient(110% 80% at 50% 45%,transparent 55%,rgba(0,0,0,.45));z-index:3}
#flash{position:absolute;inset:0;background:#fff;opacity:0;z-index:6}
</style></head><body>
<canvas id="cv" width="1080" height="1920"></canvas>
<div id="vig"></div><div id="grain"></div><div id="cap"></div><div id="flash"></div>
<script>
const TL=/*TL*/;
const cv=document.getElementById('cv'),X=cv.getContext('2d');
const C=(x,a=0,b=1)=>Math.max(a,Math.min(b,x)),lerp=(a,b,p)=>a+(b-a)*p;
const eo=x=>1-Math.pow(1-C(x),3),e5=x=>1-Math.pow(1-C(x),5),eio=x=>{x=C(x);return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2};
const sp=(x,k=14,z=.45)=>{if(x<=0)return 0;return 1-Math.exp(-z*k*x)*Math.cos(k*Math.sqrt(1-z*z)*x)};
const L=TL.lines,T=k=>L.find(l=>l.tag===k).t0,E=k=>L.find(l=>l.tag===k).t1;
const O='#151515';
function rnd(i){const x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function path(fn,fill,lw=8,stroke=O){X.beginPath();fn();if(fill){X.fillStyle=fill;X.fill()}if(lw){X.lineWidth=lw;X.strokeStyle=stroke;X.lineJoin='round';X.lineCap='round';X.stroke()}}
function circ(x,y,r,f,lw=8){path(()=>X.arc(x,y,r,0,Math.PI*2),f,lw)}
function ell(x,y,rx,ry,f,lw=8,rot=0){path(()=>X.ellipse(x,y,rx,ry,rot,0,Math.PI*2),f,lw)}
function line(pts,lw=10,col=O){X.beginPath();X.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)X.lineTo(pts[i][0],pts[i][1]);X.lineWidth=lw;X.strokeStyle=col;X.lineCap='round';X.lineJoin='round';X.stroke()}
function rr(x,y,w,h,r,f,lw=8){path(()=>{X.roundRect(x,y,w,h,r)},f,lw)}
function txt(s,x,y,size,col,stroke=14,font='900 ',align='center'){X.font=font+size+"px 'Inter Display',Inter,'Noto Color Emoji'";X.textAlign=align;X.textBaseline='middle';X.lineJoin='round';if(stroke){X.lineWidth=stroke;X.strokeStyle=O;X.strokeText(s,x,y)}X.fillStyle=col;X.fillText(s,x,y)}
function sky(top='#4fa8ec',bot='#cbe9ff'){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,top);g.addColorStop(1,bot);X.fillStyle=g;X.fillRect(-3000,-3000,8000,8000)}
function clouds(t,y=300,off=0){for(let i=0;i<6;i++){const x=((i*620+t*18+off)%4200)-1600;const yy=y+(i%3)*90;X.globalAlpha=.9;for(let k=0;k<4;k++)ell(x+k*70,yy+(k%2)*-24,80,52,'#fff',0);X.globalAlpha=1}}
function ground(y=1050,c1='#d9733a',c2='#9b3f1d',off=0){const g=X.createLinearGradient(0,y,0,y+1100);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(-3000,y,8000,3000);
 for(let i=0;i<160;i++){const x=((rnd(i)*4000+off)%4000)-1500,yy=y+30+rnd(i+9)*900;ell(x,yy,6+rnd(i+3)*10,4+rnd(i+5)*6,i%2?'#b5522a':'#e89060',0)}}
function burst(c1,c2,t){X.save();X.translate(540,900);X.rotate(t*.3);for(let i=0;i<24;i++){X.fillStyle=i%2?c1:c2;X.beginPath();X.moveTo(0,0);X.arc(0,0,2500,i*Math.PI/12,(i+1)*Math.PI/12);X.fill()}X.restore()}
function man(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);const w=o.walk;const ph=w!=null?Math.sin(w*9):0;
 const coat=o.coat||'#8f8a55';
 const hip=[0,-120];const lg=(d,ph2)=>{const fx=d*18+ph2*34,fy=0-(ph2>0?Math.abs(ph2)*14:0);line([hip,[d*10+ph2*14,-60],[fx,fy]],12)};lg(-1,w!=null?ph:0);lg(1,w!=null?-ph:0);
 line([[ -14,0],[-40,4]],12);line([[22,0],[48,4]],12);
 const sh=[0,-240];const arm=(d,a)=>{const ang=(a!=null?a:(d>0?20:-20)+(w!=null?Math.sin(w*9+(d>0?0:Math.PI))*25:0))*Math.PI/180;const ex=sh[0]+d*48+Math.sin(ang)*70*d,ey=sh[1]+20+Math.cos(ang)*70;const hx=ex+Math.sin(ang*1.4)*60*d,hy=ey+Math.cos(ang*1.4)*60;line([[d*42,-232],[ex,ey],[hx,hy]],12);circ(hx,hy,12,O,0)};
 arm(-1,o.armL);
 if(o.dress)path(()=>{X.moveTo(-52,-130);X.lineTo(-86,-40);X.quadraticCurveTo(0,-26,86,-40);X.lineTo(52,-130)},o.coat,8);
 path(()=>{X.moveTo(-58,-260);X.quadraticCurveTo(-74,-150,-50,-110);X.lineTo(50,-110);X.quadraticCurveTo(74,-150,58,-260);X.quadraticCurveTo(0,-280,-58,-260)},coat,8);
 if(o.buttons!==false){for(let k=0;k<3;k++)circ(0,-232+k*36,6,'#e8c35a',3)}
 if(o.belt)rr(-62,-160,124,20,6,'#5a3b22',5);
 if(o.medal){circ(-26,-220,10,'#f5c542',4)}
 arm(1,o.armR);
 const hy=-330;if(o.hair){circ(0,hy-78,36,o.hair,8);ell(0,hy+6,92,84,o.hair,8)}circ(0,hy,74,o.skin||'#f6f1e7',8);if(o.hair)path(()=>{X.moveTo(-74,hy-6);X.quadraticCurveTo(-70,hy-82,0,hy-78);X.quadraticCurveTo(70,hy-82,74,hy-6);X.quadraticCurveTo(30,hy-50,-10,hy-44);X.quadraticCurveTo(-50,hy-40,-74,hy-6)},o.hair,8);
 face(0,hy,o);
 hat(o.hat,0,hy);
 X.restore()}
function face(x,y,o){const f=o.face||'neutral',lx=o.look||0;const bl=o.blink?1:0;
 const brow=(d,ang,dy=0)=>line([[x+d*18,y-28+dy-ang*d*0],[x+d*50,y-36+dy+ang]],9);
 if(f=='angry'){line([[x-50,y-40],[x-14,y-24]],11);line([[x+50,y-40],[x+14,y-24]],11)}
 else if(f=='shock'){brow(-1,-8,-10);brow(1,-8,-10)}
 else if(f=='sad'){line([[x-50,y-26],[x-16,y-38]],9);line([[x+50,y-26],[x+16,y-38]],9)}
 else if(f=='smug'||f=='wink'){line([[x-50,y-32],[x-16,y-36]],9);line([[x+16,y-40],[x+50,y-30]],9)}
 else {brow(-1,0);brow(1,0)}
 if(bl||f=='happy'){line([[x-40,y-4],[x-30,y-12],[x-20,y-4]],7);line([[x+20,y-4],[x+30,y-12],[x+40,y-4]],7)}
 else if(f=='wink'){line([[x-42,y-6],[x-20,y-6]],8);ell(x+30+lx,y-4,10,14,O,0)}
 else{const ey=f=='shock'?18:13;ell(x-30+lx,y-4,f=='shock'?12:10,ey,O,0);ell(x+30+lx,y-4,f=='shock'?12:10,ey,O,0)}
 if(o.mustache){path(()=>{X.moveTo(x-46,y+26);X.quadraticCurveTo(x-20,y+8,x,y+20);X.quadraticCurveTo(x+20,y+8,x+46,y+26);X.quadraticCurveTo(x+20,y+30,x,y+26);X.quadraticCurveTo(x-20,y+30,x-46,y+26)},'#5a3b22',5)}
 const my=y+(o.mustache?44:34);
 if(f=='angry'){rr(x-30,my-12,60,28,6,'#fff',6);line([[x-10,my-12],[x-10,my+16]],4);line([[x+10,my-12],[x+10,my+16]],4);line([[x-30,my+2],[x+30,my+2]],4)}
 else if(f=='shock'||o.talk){ell(x,my,o.talk?14+Math.abs(Math.sin(o.talk*18))*10:20,o.talk?10+Math.abs(Math.sin(o.talk*18))*16:28,'#5a1a1a',6)}
 else if(f=='sad'){path(()=>{X.moveTo(x-22,my+8);X.quadraticCurveTo(x,my-10,x+22,my+8)},null,7)}
 else if(f=='happy'){path(()=>{X.moveTo(x-30,my-6);X.quadraticCurveTo(x,my+30,x+30,my-6);X.closePath()},'#5a1a1a',6)}
 else if(f=='smug'||f=='wink'){path(()=>{X.moveTo(x-14,my);X.quadraticCurveTo(x+10,my+14,x+28,my-6)},null,7)}
 else line([[x-16,my],[x+16,my]],7);
 if(o.tear){ell(x+38,y+14+((o.tear*80)%40),8,12,'#7fd1ff',3)}
 if(o.sweat){ell(x+70,y-50,10,16,'#7fd1ff',4)}}
function hat(h,x,y){if(!h)return;
 if(h=='plume'){path(()=>{X.moveTo(x-66,y-46);X.quadraticCurveTo(x-70,y-140,x,y-142);X.quadraticCurveTo(x+70,y-140,x+66,y-46);X.closePath()},'#2c4a35',8);rr(x-70,y-62,140,20,6,'#e8c35a',4);for(let k=0;k<7;k++){const a=-1.9+k*.28;path(()=>{X.moveTo(x,y-136);X.quadraticCurveTo(x+Math.cos(a)*90,y-150+Math.sin(a)*90,x+Math.cos(a)*150,y-110+Math.sin(a)*70)},null,13,'#3f9a55')}circ(x,y-140,12,'#e8c35a',4)}
 if(h=='lady'){ell(x,y-48,140,26,'#fbfbf7',7);path(()=>{X.moveTo(x-60,y-50);X.quadraticCurveTo(x-56,y-118,x,y-116);X.quadraticCurveTo(x+56,y-118,x+60,y-50)},'#fbfbf7',7);for(let k=0;k<3;k++)circ(x+30+k*22,y-70-(k%2)*14,14,['#e57373','#f8bbd0','#e57373'][k],4)}
 if(h=='kepi'){path(()=>{X.moveTo(x-62,y-48);X.lineTo(x-56,y-140);X.lineTo(x+56,y-140);X.lineTo(x+62,y-48);X.closePath()},'#34456b',8);rr(x-62,y-70,124,16,4,'#e8c35a',4);path(()=>{X.moveTo(x-62,y-48);X.quadraticCurveTo(x+40,y-20,x+110,y-44);X.lineTo(x+62,y-52)},'#151515',5);circ(x,y-104,12,'#e8c35a',4)}
 if(h=='driver'){path(()=>{X.moveTo(x-74,y-48);X.quadraticCurveTo(x-80,y-120,x,y-118);X.quadraticCurveTo(x+84,y-120,x+76,y-48);X.closePath()},'#4a3a2a',8);path(()=>{X.moveTo(x-40,y-46);X.quadraticCurveTo(x+60,y-24,x+120,y-48);X.lineTo(x+60,y-56)},'#2a2018',5)}
 if(h=='flat'){path(()=>{X.moveTo(x-72,y-46);X.quadraticCurveTo(x-60,y-120,x+10,y-114);X.quadraticCurveTo(x+90,y-108,x+104,y-56);X.closePath()},'#3a3a40',8)}
 if(h=='fez'){path(()=>{X.moveTo(x-50,y-50);X.lineTo(x-40,y-140);X.lineTo(x+40,y-140);X.lineTo(x+50,y-50);X.closePath()},'#c62828',8);line([[x,y-140],[x+30,y-120],[x+36,y-80]],5,'#151515')}
 if(h=='slouch'){ell(x,y-50,118,26,'#8b7a4e',8);path(()=>{X.moveTo(x-62,y-52);X.quadraticCurveTo(x-60,y-130,x,y-128);X.quadraticCurveTo(x+60,y-130,x+62,y-52)},'#9c8a5a',8);rr(x-62,y-74,124,18,4,'#5a3b22',4);path(()=>{X.moveTo(x-118,y-50);X.quadraticCurveTo(x-130,y-120,x-60,y-100)},'#8b7a4e',8)}
 if(h=='cap'){path(()=>{X.moveTo(x-80,y-48);X.quadraticCurveTo(x-90,y-128,x,y-130);X.quadraticCurveTo(x+100,y-128,x+86,y-48);X.closePath()},'#6e6a3a',8);rr(x-78,y-62,160,20,6,'#c0392b',4);path(()=>{X.moveTo(x-70,y-46);X.quadraticCurveTo(x+20,y-20,x+110,y-44);X.quadraticCurveTo(x+20,y-56,x-70,y-46)},'#2a2a1a',6);circ(x,y-96,10,'#f5c542',4)}
 if(h=='straw'){ell(x,y-52,130,28,'#e8c66a',8);path(()=>{X.moveTo(x-64,y-54);X.quadraticCurveTo(x-60,y-124,x,y-122);X.quadraticCurveTo(x+60,y-124,x+64,y-54)},'#f0d27a',8);rr(x-64,y-74,128,16,4,'#c0392b',4)}}
function speedlines(t,col='rgba(255,255,255,.6)'){for(let i=0;i<26;i++){const y=rnd(i)*1920,x=((rnd(i+3)*3000-t*3000)%2400+2400)%2400-600;line([[x,y],[x+300,y]],6,col)}}
let SHK=0;function cam(cx,cy,z,t,amp=1,rot=0){const hx=(Math.sin(t*1.7)*5+Math.sin(t*3.3)*3)*amp+(SHK?Math.sin(t*71)*SHK:0),hy=(Math.cos(t*1.4)*5+Math.sin(t*2.6)*3)*amp+(SHK?Math.cos(t*63)*SHK:0);
 X.setTransform(1,0,0,1,0,0);X.translate(540+hx,960+hy);X.rotate((rot+Math.sin(t*1.1)*.3*amp)*Math.PI/180);X.scale(z,z);X.translate(-cx,-cy)}
const MAS=new Image();MAS.src='mascot.png';window.MAS=MAS;
function avatar(x,y,r,lw=5){X.save();X.beginPath();X.arc(x,y,r,0,7);X.fillStyle='#fff7e8';X.fill();X.clip();if(MAS.complete&&MAS.naturalWidth){const k=2*r*1.08/Math.max(MAS.width,MAS.height);const w=MAS.width*k,h=MAS.height*k;X.drawImage(MAS,x-w/2,y-h/2+r*.06,w,h)}X.restore();if(lw){X.lineWidth=lw;X.strokeStyle=O;X.beginPath();X.arc(x,y,r,0,7);X.stroke()}}
function wrapT(s,maxW,font){X.font=font;const w=s.split(' ');const out=[];let cur='';w.forEach(x=>{const n=cur?cur+' '+x:x;if(X.measureText(n).width>maxW&&cur){out.push(cur);cur=x}else cur=n});if(cur)out.push(cur);return out}
const BF="600 38px Inter,'Noto Color Emoji'";
function bubble(edge,y,maxW,str,me,p,time){const lines=wrapT(str,maxW-64,BF);const lw=Math.max(...lines.map(l=>X.measureText(l).width))+64+(time?70:0);const w=Math.min(maxW,lw);const h=lines.length*48+42+(time?26:0);const bx=me?edge-w:edge;
 X.save();X.globalAlpha=C(p*1.6);const sc=lerp(.7,1,eo(p));X.translate(edge,y);X.scale(sc,sc);X.translate(-edge,-y);
 rr(bx,y,w,h,26,me?'#d9fdd3':'#ffffff',4);X.font=BF;X.fillStyle='#111';X.textAlign='left';X.textBaseline='top';lines.forEach((l,i)=>X.fillText(l,bx+30,y+22+i*48));
 if(time){X.font="500 24px Inter";X.fillStyle='#667781';X.textAlign='right';X.fillText(time+(me?'  ✓✓':''),bx+w-22,y+h-36)}X.restore();return h}
function phoneUI(x,y,s,t,msgs){X.save();X.translate(x,y);X.scale(s,s);
 rr(-320,-660,640,1320,92,'#1b1b1f',10);rr(-298,-638,596,1276,74,'#efe7dc',0);
 X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();
 for(let i=0;i<40;i++){X.globalAlpha=.5;circ(-280+rnd(i)*560,-600+rnd(i+7)*1220,6+rnd(i+3)*10,'#e0d3c2',0)}X.globalAlpha=1;
 X.fillStyle='#008069';X.fillRect(-300,-640,600,210);
 rr(-70,-618,140,40,20,'#000',0);
 X.font="600 26px Inter";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText('9:41',-240,-598);
 X.font="400 40px Inter";X.fillText('‹',-270,-488);avatar(-180,-488,44,0);
 X.font="800 40px Inter";X.fillStyle='#fff';X.fillText('Memopai',-118,-506);X.font="400 26px Inter";X.fillText(t%1.2<.6&&msgs.typing?'typing…':'online',-118,-466);
 let yy=-380;msgs.list.forEach(m=>{if(t<m.a)return;const p=C((t-m.a)/.22);yy+=bubble(m.me?270:-270,yy,470,m.text,m.me,p,m.time)+22});
 X.fillStyle='#f0f0f0';X.fillRect(-300,520,600,140);rr(-270,545,450,74,37,'#fff',0);X.font="400 30px Inter";X.fillStyle='#8696a0';X.fillText('Message',-230,582);circ(235,582,38,'#00a884',0);
 X.restore();X.restore()}
function notif(y,p,title,body){X.save();X.globalAlpha=C(p*2);X.translate(0,lerp(-260,0,eo(p)));rr(60,y,960,230,48,'rgba(250,250,252,.97)',6);
 X.save();X.beginPath();X.roundRect(100,y+40,84,84,20);X.fillStyle='#25d366';X.fill();X.restore();avatar(142,y+82,38,0);
 X.font="800 38px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(title,210,y+66);X.font="500 28px Inter";X.fillStyle='#888';X.textAlign='right';X.fillText('now',985,y+66);
 X.textAlign='left';X.font="600 36px Inter,'Noto Color Emoji'";X.fillStyle='#222';wrapT(body,760,X.font).forEach((l,i)=>X.fillText(l,210,y+122+i*46));X.restore()}
const S=[];const sh=(a,fn)=>S.push({a,fn});let FL=0;
let CROWDY=1192;function crowd(x0,x1,t,seed=0,skip){for(let x=x0,k=0;x<x1;x+=95,k++){if(skip&&skip(k))continue;const hs=['fez','straw','flat','fez','slouch',null];man(x,CROWDY,.42,{hat:hs[(k+seed)%6],face:k%3?'happy':'neutral',coat:['#6b5b8a','#4f7a5a','#8a5a4a','#5a6f8a'][k%4],buttons:false,armR:(k%2)?-160+Math.sin(t*10+k)*30:null})}}
function stampFit(label,col='#e53935',rot=-12){X.save();X.rotate(rot*Math.PI/180);X.font="900 104px 'Inter Display',Inter";const w=X.measureText(label).width+90;X.globalAlpha=.95;X.lineWidth=14;X.strokeStyle=col;X.strokeRect(-w/2,-90,w,180);txt(label,0,4,104,col,0);X.restore()}
function stampBig(label,col,rot,p,y=520){X.setTransform(1,0,0,1,0,0);X.save();X.translate(540,y);X.scale(lerp(2.2,1,p),lerp(2.2,1,p));X.globalAlpha=C(p*3);stampFit(label,col,rot);X.restore()}
function tag(x,y,label,col='#ffe14d',p=1){if(p<=0)return;X.save();X.translate(x,y);X.scale(eo(p),eo(p));X.font="900 44px Inter";const w=X.measureText(label).width+50;rr(-w/2,-40,w,72,18,'#151515',0);X.fillStyle=col;X.textAlign='center';X.textBaseline='middle';X.fillText(label,0,-3);path(()=>{X.moveTo(-16,30);X.lineTo(0,58);X.lineTo(16,30)},'#151515',0);X.restore()}
function bird(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);const f=Math.sin(t*30)*40;ell(0,0,40,22,'#9aa3ad',5);circ(34,-14,16,'#9aa3ad',5);line([[48,-14],[60,-10]],5,'#e8a33a');line([[-10,-6],[-40,-6-f]],10,'#7c858f');line([[10,-6],[-10,-6-f*.8]],10,'#7c858f');X.restore()}
function scan(t){X.setTransform(1,0,0,1,0,0);for(let y=0;y<1920;y+=8){X.fillStyle='rgba(0,0,0,.12)';X.fillRect(0,y,1080,3)}const gy=(t*1700)%1920;X.fillStyle='rgba(255,255,255,.18)';X.fillRect(0,gy,1080,40);txt('◀◀ REWIND',60,140,64,'#fff',10,'900 ','left')}
function boom(x,y,p){if(p<=0||p>=1.4)return;const r=lerp(40,260,eo(p));X.globalAlpha=C(1.4-p);for(let k=0;k<9;k++){const a=k*.7;ell(x+Math.cos(a)*r*.6,y+Math.sin(a)*r*.4,r*.45,r*.35,k%2?'#ffb300':'#ff7043',6)}circ(x,y,r*.45,'#fff3c4',6);txt('BOOM!',x,y-r*.9,110,'#ffe14d',14);X.globalAlpha=1}
function hat2(h,x,y){if(h=='officer'){rr(x-78,y-118,156,40,14,'#fafafa',7);rr(x-70,y-84,140,34,6,'#151a2e',7);path(()=>{X.moveTo(x-60,y-50);X.quadraticCurveTo(x+30,y-26,x+104,y-52);X.lineTo(x+60,y-58)},'#151515',5);circ(x,y-68,10,'#e8c35a',3)}
 if(h=='beanie'){path(()=>{X.moveTo(x-74,y-40);X.quadraticCurveTo(x-80,y-136,x,y-136);X.quadraticCurveTo(x+80,y-136,x+74,y-40);X.closePath()},'#3d4a5c',8);rr(x-78,y-62,156,26,10,'#526177',6);circ(x,y-140,18,'#526177',5)}
 if(h=='police'){rr(x-80,y-128,160,62,20,'#1b2a4a',7);rr(x-74,y-74,148,22,6,'#0f1626',6);path(()=>{X.moveTo(x-62,y-54);X.quadraticCurveTo(x+30,y-26,x+108,y-52);X.lineTo(x+62,y-60)},'#0f1626',5);path(()=>{X.moveTo(x,y-118);X.lineTo(x+16,y-100);X.lineTo(x,y-82);X.lineTo(x-16,y-100);X.closePath()},'#e8c35a',4)}
 if(h=='wig'){for(let k=0;k<7;k++){circ(x-80+k*27,y-70-Math.sin(k/6*Math.PI)*50,26,'#f2f2f2',5)}for(let k=0;k<3;k++){circ(x-86,y-30+k*40,22,'#f2f2f2',5);circ(x+86,y-30+k*40,22,'#f2f2f2',5)}}}
function guy(x,y,s,o){man(x,y,s,o);if(o.h2){X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);hat2(o.h2,0,-330);X.restore()}}
function dave(x,y,s,o={}){guy(x,y,s,Object.assign({mustache:1,coat:'#22355e',medal:1,buttons:true,h2:o.nohat?null:'police'},o))}
function nightSky(t){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#04060f');g.addColorStop(1,'#14284a');X.fillStyle=g;X.fillRect(-4000,-4000,10000,8000);for(let i=0;i<160;i++){const tw=.5+.5*Math.sin(t*3+i);X.globalAlpha=.4+.6*tw;circ(((i*397)%6000)-2500,-1500+rnd(i)*2600,2+rnd(i+1)*3,'#fff',0)}X.globalAlpha=1}
function face2(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s,s);const lk=o.look||0;
 ell(-60,0,40,o.squint?14:46,'#fff',7);ell(60,0,40,o.squint?14:46,'#fff',7);circ(-60+lk,o.squint?0:6,o.squint?9:15,O,0);circ(60+lk,o.squint?0:6,o.squint?9:15,O,0);
 if(o.angry){line([[-100,-56],[-24,-30]],12);line([[100,-56],[24,-30]],12)}else if(o.smug){line([[-100,-46],[-26,-50]],10);line([[24,-58],[100,-40]],10)}
 const m=o.talk!=null?Math.abs(Math.sin(o.talk*16)):0;if(o.talk!=null)ell(0,100,26+m*10,10+m*30,'#4a1a1a',7);else if(o.smug)path(()=>{X.moveTo(-50,96);X.quadraticCurveTo(10,126,60,84)},null,10);else if(o.shock)ell(0,100,26,34,'#4a1a1a',7);else line([[-30,100],[30,100]],10);X.restore()}
function cuffs(x,y,s,rot,p=1){X.save();X.translate(x,y);X.rotate(rot);X.scale(s*eo(C(p)),s*eo(C(p)));
 [[-110,0],[110,0]].forEach(([cx,cy])=>{X.beginPath();X.ellipse(cx,cy,70,90,0,0,7);X.lineWidth=34;X.strokeStyle=O;X.stroke();X.lineWidth=22;X.strokeStyle='#c9ced6';X.stroke()});
 for(let k=-1;k<=1;k++){X.beginPath();X.ellipse(k*24,-70,16,10,0,0,7);X.lineWidth=12;X.strokeStyle=O;X.stroke();X.lineWidth=6;X.strokeStyle='#c9ced6';X.stroke()}X.restore()}
function moon(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s,s);const g=X.createRadialGradient(0,0,20,0,0,400);g.addColorStop(0,'rgba(255,250,220,.35)');g.addColorStop(1,'rgba(255,250,220,0)');X.fillStyle=g;X.fillRect(-400,-400,800,800);
 circ(0,0,180,'#f3eccf',8);circ(-70,-60,30,'#ddd3ad',0);circ(80,70,40,'#ddd3ad',0);circ(40,-90,18,'#ddd3ad',0);face2(0,0,.8,o.face||{});if(o.wanted){X.save();X.translate(0,150);X.scale(.7,.7);stampFit('WANTED','#e53935',-10);X.restore()}X.restore()}
function bubbleTxt(x,y,label,col='#e53935',p=1,size=96){if(p<=0)return;X.save();X.translate(x,y);X.scale(eo(p),eo(p));X.font=`900 ${size}px 'Inter Display',Inter`;const w=X.measureText(label).width+90;path(()=>{X.roundRect(-w/2,-size*.95,w,size*1.9,40)},'#fff',9);path(()=>{X.moveTo(-30,size*.9);X.lineTo(-70,size*1.7);X.lineTo(30,size*.9)},'#fff',0);txt(label,0,0,size,col,0);X.restore()}
function echoes(t,a,words,x0,y0){words.forEach((w,i)=>{const s0=a+i*.5;if(t<s0)return;X.save();X.globalAlpha=Math.max(0,1-(t-s0)/2.2);txt(w,x0+i*120,y0-i*110,110-i*20,'#9fd3ff',14,'900 ');X.restore()})}
// ---------- SCENES: one sh(startTime,(t,r)=>{...}) per shot. t = global time, r = time since shot start.
/*SCENES*/
const CH=[];L.forEach(l=>{const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0,cur=[],ca=null;
 w.forEach((x,i)=>{const a=l.t0+(l.t1-l.t0)*acc/tot;acc+=wt[i];if(!cur.length)ca=a;cur.push(x);const brk=/[.,?:!]$/.test(x)||cur.length>=(cur.join(' ').length>9?2:3)||i==w.length-1;if(brk){CH.push({a:ca,text:cur.join(' '),q:l.voice});cur=[]}})});
CH.forEach((c,i)=>c.b=i+1<CH.length?Math.min(CH[i+1].a,c.a+1.4):c.a+1.2);
const CAP=document.getElementById('cap');let lastC=-1;
function render(t){SHK=0;FL=0;X.setTransform(1,0,0,1,0,0);X.fillStyle='#000';X.fillRect(0,0,1080,1920);
 let i=0;for(let k=0;k<S.length;k++)if(t>=S[k].a)i=k;const s=S[i];const r=t-s.a;X.save();s.fn(t,r);X.restore();X.setTransform(1,0,0,1,0,0);
 if(i>0&&r<.12){X.fillStyle=`rgba(255,255,255,${(1-r/.12)*.25})`;X.fillRect(0,0,1080,1920)}
 let ci=-1;CH.forEach((c,k)=>{if(t>=c.a-.03&&t<c.b)ci=k});if(ci!==lastC){lastC=ci;CAP.textContent=ci<0?'':CH[ci].text;CAP.className=ci<0?'':CH[ci].q=='him'?'q':CH[ci].q=='echo'?'e':''}
 if(ci>=0){const p=C((t-CH[ci].a)/.09);CAP.style.transform=`scale(${lerp(1.25,1,eo(p))})`;}
 document.getElementById('flash').style.opacity=FL;document.getElementById('grain').style.backgroundPosition=`${(t*977)%512}px ${(t*631)%512}px`}
window.render=render;document.fonts.ready.then(()=>render(0));render(0);
</script></body></html>
```

Example scene for the pattern (world, then screen-space UI):
```js
sh(0,(t,r)=>{cam(540,1150,lerp(1.15,1.0,eo(r/1.6)),t,.5);sky();clouds(t);ground(1050);
 dave(400,1750,1.0,{face:'shock',talk:t,armR:-160});
 X.setTransform(1,0,0,1,0,0);bubbleTxt(560,430,'HELLO!','#151515',C(sp(r,16,.45)),130);
 if(r>1.2)stampBig('ARRESTED ©','#e53935',-8,C(sp(r-1.2,14,.5)),440);SHK=r<.4?8:0});
sh(T('s8'),(t,r)=>{cam(540,960,1,t,.4);burst('#1b2a4a','#22355e',t*.3);
 phoneUI(540,960,1,r,{typing:r>1&&r<1.5,list:[{a:.2,me:1,text:'Remind Ana: dinner at 8 🍝',time:'18:04'},{a:1.5,me:0,text:'Done ✅ I’ll remind her at 19:30.',time:'18:04'}]});
 dave(150,2060,1.0,{face:'smug'})});
sh(T('s9'),(t,r)=>{cam(540,1150,1.2,t,.4);sky();ground(1050);man(540,1750,1.1,{hair:'#7a4a22',dress:1,coat:'#c8504a',buttons:false,face:r>.4?'shock':'neutral'});
 X.setTransform(1,0,0,1,0,0);notif(170,C((r-.05)/.3),'Memopai','⏰ Dinner with Dave at 8 🍝')});
```
Make new props (cars, ships, buildings, animals, maps) the same way: flat fills, 6–10 px #151515 outlines, `X.save/translate/scale/restore`.

### render.js
```js
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const DUR = JSON.parse(fs.readFileSync(__dirname+'/timeline.json')).total;
const SC = ['a','b','c','d'].map((n,i)=>[n,DUR*i/4,DUR*(i+1)/4]);  // edit to re-render single chunks
const FPS = 30;
(async () => {
  const b = await chromium.launch();
  await Promise.all(SC.map(async ([name, a, z]) => {
    const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
    await p.goto('file://'+__dirname+'/story.html');
    await p.evaluate(() => document.fonts.ready);
    await p.waitForFunction(() => window.MAS && window.MAS.complete && window.MAS.naturalWidth>0);
    const tmp = `${__dirname}/s_${name}.tmp.mp4`;
    const ff = spawn('ffmpeg', ['-y','-loglevel','error','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-',
      '-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-r',String(FPS),tmp]);
    const n0 = Math.round(a*FPS), n1 = Math.round(z*FPS);
    for (let f = n0; f < n1; f++) {
      await p.evaluate(t => render(t), f / FPS);
      const buf = await p.screenshot({ type: 'jpeg', quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    ff.stdin.end();
    const code = await new Promise(r => ff.on('close', r));
    if (code === 0) fs.renameSync(tmp, `${__dirname}/s_${name}.mp4`); else throw new Error(name + ' ffmpeg ' + code);
    await p.close();
  }));
  await b.close();
})();
```

### frames.js (previews: `node frames.js 1 4.5 9`)
```js
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('file://'+__dirname+'/story.html'); await p.evaluate(() => document.fonts.ready);
  await p.waitForFunction(() => window.MAS && window.MAS.complete && window.MAS.naturalWidth>0);
  for (const t of process.argv.slice(2).map(Number)) { await p.evaluate(t => render(t), t); await p.screenshot({ path: `${__dirname}/prev_${t}.jpg`, type: 'jpeg', quality: 80 }); }
  if (errs.length) console.log('ERR', errs.slice(0,5).join('\n')); await b.close();
})();
```

### score_core.py (copy to score.py, add cues)
```python
import numpy as np, soundfile as sf, json
from scipy import signal
TL=json.load(open('timeline.json'));L=TL['lines'];T=lambda k:[l for l in L if l['tag']==k][0]['t0'];E=lambda k:[l for l in L if l['tag']==k][0]['t1']
SR=44100;DUR=TL['total'];N=int(SR*DUR);mus=np.zeros(N);sfx=np.zeros(N);rng=np.random.default_rng(32)
def add(buf,s,t,g=1.0):
    i=int(t*SR);j=min(N,i+len(s))
    if 0<=i<N: buf[i:j]+=s[:j-i]*g
hz=lambda n:440*2**((n-69)/12)
def env(k,a,d): t=np.arange(k)/SR;return np.minimum(t/a,1)*np.exp(-t/d)
def tone(f,dur,d,h=(1,),a=.003): k=int(dur*SR);t=np.arange(k)/SR;return sum(np.sin(2*np.pi*f*m*t)/(i+1) for i,m in enumerate(h))*env(k,a,d)
lp=lambda x,fc:signal.lfilter(*signal.butter(2,fc/(SR/2)),x)
bp=lambda x,a,b:signal.lfilter(*signal.butter(2,[a/(SR/2),b/(SR/2)],'band'),x)
noise=lambda d:rng.standard_normal(int(d*SR))
def brass(n,dur,g=.25,vib=0):
    k=int(dur*SR);t=np.arange(k)/SR;f=hz(n)*(1+vib*np.sin(2*np.pi*5*t)*.01);ph=2*np.pi*np.cumsum(f)/SR
    s=sum(np.sin(ph*h)/h**.8 for h in range(1,8));e=np.minimum(t/.03,1)*np.minimum((dur-t)/.06,1)
    return lp(s,2400)*e*g
def snare(): x=noise(.18);return bp(x,1500,7000)*env(len(x),.001,.05)*.6+tone(190,.18,.05)*.4
def kick(): k=int(.3*SR);t=np.arange(k)/SR;return np.sin(2*np.pi*np.cumsum(50+120*np.exp(-t*30))/SR)*env(k,.001,.12)
def impact(g=1): k=int(1.2*SR);t=np.arange(k)/SR;return (np.sin(2*np.pi*np.cumsum(35+90*np.exp(-t*10))/SR)*np.exp(-t*2.4)+noise(1.2)*np.exp(-t*14)*.3)*g
def whoosh(d,g=.6): k=int(d*SR);return lp(noise(d),2500)*np.sin(np.linspace(0,np.pi,k))**2*g
def boing(): k=int(.35*SR);t=np.arange(k)/SR;f=220+300*(1-np.exp(-t*12))+40*np.sin(t*60)*np.exp(-t*6);return np.sin(2*np.pi*np.cumsum(f)/SR)*env(k,.003,.12)*.5
def scratch(): k=int(.35*SR);tt=np.arange(k)/SR;return np.sin(2*np.pi*np.cumsum(900-2400*tt)/SR)*np.exp(-tt*5)*.35+lp(noise(.35),3000)*.2*np.exp(-tt*8)
def trombone(notes,dur=.45): return np.concatenate([brass(n,dur if i<len(notes)-1 else dur*2.2,.3,vib=1 if i==len(notes)-1 else 0) for i,n in enumerate(notes)])
def waltz(a,z,key=0,g=1.0,minor=False,bpm=168):
    b=60/bpm;t=a;k=0;root=[0,7,5,7] if not minor else [0,3,8,7];ch=[4,7] if not minor else [3,7]
    while t<z-.05:
        bar=k//3;beat=k%3;r=48+key+root[bar%4]
        if beat==0: add(mus,tone(hz(r-12),.5,.25,(1,2,3))*.5,t,.5*g)
        else:
            for n in ch: add(mus,tone(hz(r+n),.25,.12,(1,2)),t,.12*g)
        if beat==0 and bar%2==0: add(mus,tone(hz(r+19+(bar%4)),.6,.3,(1,2,3)),t,.13*g)
        t+=b;k+=1
def drone(a,z,f=55,g=.08):
    k=int((z-a)*SR);tt=np.arange(k)/SR;add(mus,(np.sin(2*np.pi*f*tt)+.5*np.sin(2*np.pi*f*1.5*tt)+.3*np.sin(2*np.pi*f*2.01*tt))*np.minimum(tt/.4,1)*np.minimum((z-a-tt)/.3,1)*g,a)
def chord(t,notes,d=2.0,g=.12):
    for n in notes: add(mus,brass(n,d,g),t)
pop=lambda f=900:tone(f,.09,.03,(1,2))*.5
vib=lambda d:lp(np.sign(np.sin(2*np.pi*150*np.arange(int(d*SR))/SR))*np.sin(np.linspace(0,np.pi,int(d*SR))),400)*.5
def clack(): x=noise(.06);return bp(x,1500,6000)*env(len(x),.0005,.015)+tone(700,.06,.02)*.3
def musicbox(a,z,notes,step=.36,g=.16):
    t=a;i=0
    while t<z-.1: add(mus,tone(hz(notes[i%len(notes)]),.9,.5,(1,2,4)),t,g);t+=step;i+=1
def bell(): return tone(1250,.9,.35,(1,2.76,5.4))*.5
def horn(d=1.6): k=int(d*SR);tt=np.arange(k)/SR;s=sum(np.sin(2*np.pi*f*tt) for f in (98,123.5,147));return lp(np.sign(s)*.3+s*.2,900)*np.minimum(tt/.15,1)*np.minimum((d-tt)/.3,1)*.5
def pluck(n,d=.22,g=.3): return tone(hz(n),d,d*.35,(1,2,3,4))*g
def sneaky(a,z,key=0,g=1.0,bpm=132):
    b=60/bpm/2;t=a;k=0;line_=[0,None,7,None,3,5,None,7, 0,None,10,None,7,5,3,None]
    while t<z-.05:
        n=line_[k%16]
        if n is not None: add(mus,pluck(36+key+n,.2,.55),t,g)
        if k%4==2: add(mus,lp(noise(.05),5000)*env(int(.05*SR),.001,.02),t,.25*g)
        if k%8==0: add(mus,kick(),t,.35*g)
        if k%8==4: add(mus,snare(),t,.22*g)
        if k%16 in (1,5,9,13): add(mus,pluck(60+key+[12,15,19,15][(k//4)%4],.12,.18),t,g)
        t+=b;k+=1
def bounce(a,z,key=0,g=1.0,bpm=150):
    b=60/bpm;t=a;k=0;mel=[72,76,79,76,74,77,81,77]
    while t<z-.05:
        add(mus,pluck(48+key+[0,7][k%2],.25,.5),t,g);add(mus,pluck(64+key+[0,4,7][k%3],.12,.2),t+b/2,g)
        if k%2==0: add(mus,tone(hz(mel[(k//2)%8]+key),.3,.12,(1,)),t,.08*g)
        t+=b;k+=1
def siren(d=1.0): k=int(d*SR);tt=np.arange(k)/SR;f=700+400*np.sin(2*np.pi*1.6*tt);return np.sin(2*np.pi*np.cumsum(f)/SR)*.25*np.minimum(tt/.05,1)*np.minimum((d-tt)/.1,1)
def whoop(): k=int(.45*SR);tt=np.arange(k)/SR;return np.sin(2*np.pi*np.cumsum(500+900*tt/.45)/SR)*.3*np.sin(np.pi*tt/.45)
def clank(): x=noise(.25);return bp(x,2000,9000)*env(len(x),.001,.06)*.8+tone(2300,.25,.08,(1,2.4))*.4
def shutter(): x=noise(.08);return bp(x,1000,8000)*env(len(x),.001,.02)*.9
def crickets(a,d):
    t=a;c=tone(4200,.05,.015)*np.sin(np.arange(int(.05*SR))/SR*2*np.pi*60)
    while t<a+d: add(sfx,c,t,.25);add(sfx,c,t+.08,.25);t+=.55
def sting(t0,g=.15): chord(t0,[41,48,53],.25,g);chord(t0+.35,[42,49,54],.25,g);chord(t0+.75,[40,47,52,58],1.3,g*1.1);add(sfx,impact(.9),t0+.75)
def suction(a,d): k=int(d*SR);tt=np.arange(k)/SR;add(sfx,bp(noise(d),200,1800)*np.minimum(tt/.5,1)*np.minimum((d-tt)/.3,1)*(.5+.5*np.sin(tt*2*np.pi*1.5))*.45,a)
def rewind(t0,d=1.2): k=int(d*SR);tt=np.arange(k)/SR;add(sfx,(np.sin(2*np.pi*np.cumsum(300+2500*tt/d)/SR)*.15+bp(noise(d),2000,8000)*.15)*np.minimum(tt/.1,1),t0)
def chime(t0): add(sfx,tone(1320,.35,.15,(1,2)),t0,.35);add(sfx,tone(1760,.4,.18,(1,2)),t0+.12,.35)
def typing(t0):
    for i in range(9): add(sfx,lp(noise(.03),4000)*env(int(.03*SR),.001,.01),t0+i*.018,.25)

# ===== CUES (examples) =====
# add(sfx,impact(1.0),0.05); drone(0,3,41,.1)                  # hook hit
# bounce(T('s1'),T('s4'),0,.9)  /  sneaky(...)  /  waltz(...)  # music beds per section (stop for punchlines)
# sting(T('s2')-.05)  crickets(T('s4')+.2,1.3)  add(sfx,boing(),T('s4')+1.2,.5)
# typing(T('s8')); add(sfx,pop(1100),T('s8')+.2,.6); add(sfx,pop(1500),T('s8')+1.5,.6)   # chat
# add(sfx,vib(.4),T('s9')+.05,.8); chime(T('s9')+.08)                                   # notification

# ---- voice + duck + mix
v,vsr=sf.read('vo.wav');v=signal.resample_poly(v,SR,vsr);v=np.pad(v,(0,max(0,N-len(v))))[:N]
e=np.abs(v);a=int(.06*SR);e=np.convolve(e,np.ones(a)/a,'same');on=(e>0.02).astype(float)
g=np.zeros(N);x=0
for i in range(0,N,64):
    tg=on[i];c=1-np.exp(-64/((0.04 if tg>x else .3)*SR));x+=(tg-x)*c;g[i:i+64]=x
mix=v+mus*.6*(1-.6*g)+sfx*.75*(1-.3*g)+lp(noise(DUR),800)*.008
f=int(.5*SR);mix[-f:]*=np.linspace(1,0,f)
pk=np.percentile(np.abs(mix),99.95);mix=mix/pk*.9;mix=np.where(np.abs(mix)>.92,np.sign(mix)*(.92+.08*np.tanh((np.abs(mix)-.92)/.08)),mix)
sf.write('mix.wav',np.stack([mix,mix],1).astype(np.float32),SR);print('ok',DUR)
```

## 6. Quality bar before delivering
- Contact-sheet check: no text cut off at the edges, stamps don't cover faces, captions don't sit on faces, no empty or black frames, vehicles face their direction of travel, the Memopai name and mascot are visible in the chat and notification.
- The hook frame at t=0 must already be interesting (no fade-in from black).
- Tell the user you checked visuals frame by frame but can't hear audio. Offer quick tweaks (voice speed per line, music level).

## 7. Goofy toon comedy mode (Officer Gary series): preferred for Memopai

### 7.1 Look
Original cartoon characters in the style of the Bulbert-type TikToks:
- Big oval heads, sleepy half-lidded or uneven crazy eyes, a round shiny pink nose, blush cheeks, buck teeth and stubby bodies.
- Thick #151515 outlines and warm painted rooms.
- Never copy a known character (e.g. Donnie from The Wild Thornberrys). Invent originals.

### 7.2 Story recipe
Use the Kallaway "super addicting story" loop: Stakes → Big Question → Headfake → Rehook.

**Hero: Officer Gary**, the dumbest cop alive.
- 12 years on the force, 0 arrests, once gave himself a parking ticket.
- Episodes so far: ep.1 he arrested Death; ep.2 the Tooth Fairy.
- Do a callback early in each episode ("You might know him. He once arrested Death.").

**Arrest something non-human or mythical, with a literal legal charge:**
- Death → "trespassing" ("I don't need a door.")
- Tooth Fairy → breaks into kids' rooms, takes body parts, leaves cash = "MONEY LAUNDERING!"
- Next ideas:
  - Santa (B&E, stalking: "he sees you when you're sleeping")
  - The Sandman (drugging children)
  - Cupid (assault with a deadly weapon)
  - The Easter Bunny (smuggling)
  - Karma, Gravity, Time, Monday, the Boogeyman

**Beats** (about 55 s, 22–25 lines, something new every 1–2 s):
1. **Hook:** narrator SHOUT "This cop arrested X." plus a WHISPERED big question ("…and then Death got a reminder… with HIS name on it" / "the darkest case he's ever had").
2. **Stakes:** Gary intro with a funny credential, plus a short Gary line ("Rules are rules!").
3. **The incident:** a creepy line from the villain, then Gary SHOUTS the absurd charge.
4. **The arrest:** cuffs plus an ARRESTED stamp.
5. **Dark-humor consequences montage:** nobody dies → grandma (103) runs a marathon and the cemetery goes bankrupt; or no money under pillows → the economy collapses.
6. **Rehook** (whisper "But in his cell…"):
   - The villain uses **Memopai for their own appointments** (a chat with a funny list: "10:00 collect a goldfish", "Grandpa Joe — ALL of them").
   - Then a lock-screen reveal "⏰ … Officer Gary …" and Gary SCREAMS ("THAT'S ME?!").
7. **Reminding others:** Gary uses **Memopai to remind the villain** ("Remind Death: 15:00 is CANCELLED. Gary is busy. Forever."). Memopai replies "Done ✅ I'll remind him at 14:55 😇".
8. **Headfake ending:** a callback with a dark twist, then one last stupid Gary line ("…that's also me." / toothless "Worf it."). Leave the villain fading in behind Gary or a final Memopai notification. No ad ending.

**Pacing:** gaps of 0.25–0.4 s before reveals; the setup narration fast (1.14–1.18).

### 7.3 vo.py for comedy mode (replaces the section 5 vo.py)
Voice specs:
- `N` narrator, `N:w` whisper, `N:s` shout
- `G` Gary (nasal, high), `G:s` Gary shouting
- `D` Death (deep, slow)
- `K` kid, `F` fairy (sweet), `F:w` fairy whisper (creepy)

The caption label is the voice plus the mode (her_w, gary_s, …). Keep the per-line dynamics: there is no global compressor, so shouts stay about 7 dB louder and whispers about 8 dB quieter.
```python
import numpy as np, soundfile as sf, json, os
from scipy import signal
from kokoro_onnx import Kokoro
TTS=os.path.expanduser('~/tts')
K=Kokoro(TTS+'/kokoro-fp32.onnx',TTS+'/voices.npz')
SR=24000
S=[
 (0.05,'N:s',1.12,"This cop arrested the Tooth Fairy.",'h1'),
 (0.12,'N:w',1.0,"And it's the darkest case he's ever had.",'h2'),
 (0.30,'N',1.16,"Officer Gary. You might know him. He once arrested Death.",'s1'),
 (0.08,'K',1.05,"Someone was in my room... and took my TOOTH!",'k1'),
 (0.06,'G:s',1.05,"MONEY LAUNDERING!",'g1'),
 (0.08,'F',1.0,"Ooh. A big one.",'f1'),
 (0.10,'F:w',0.92,"I know where you sleep, Gary.",'f2'),
 (0.25,'N',1.14,"Turns out, she uses Memo Pie to remember every single house.",'s11'),
 (0.30,'G',0.9,"Worf it.",'g5'),
]
VO={'N':'af_heart','G':'am_puck','D':'am_onyx','K':'af_sky','F':'af_bella'}
PITCH={'G':1.22,'D':0.84,'K':1.3,'F':1.1}
def trim(a,th=0.008):
    i=np.where(np.abs(a)>th)[0];return a[max(0,i[0]-int(.012*SR)):i[-1]+int(.06*SR)]
def peq(x,f0,g_db,q):
    A=10**(g_db/40);w=2*np.pi*f0/SR;al=np.sin(w)/(2*q)
    b=[1+al*A,-2*np.cos(w),1-al*A];a=[1+al/A,-2*np.cos(w),1-al/A];return signal.lfilter(np.array(b)/a[0],np.array(a)/a[0],x)
def pitch(a,f):  # pitch*f, duration/f (generate at speed sp/f first to keep tempo)
    from fractions import Fraction
    fr=Fraction(1/f).limit_denominator(50);return signal.resample_poly(a,fr.numerator,fr.denominator)
def whisper(a):  # spectral-envelope noise vocoder
    f,t,Z=signal.stft(a,SR,nperseg=1024,noverlap=768)
    M=np.abs(Z);k=np.ones(9)/9;Ms=np.apply_along_axis(lambda c:np.convolve(c,k,'same'),0,M)
    ph=np.exp(1j*np.random.default_rng(7).uniform(0,2*np.pi,Z.shape))
    _,w=signal.istft(Ms*ph,SR,nperseg=1024,noverlap=768);w=w[:len(a)]
    b,aa=signal.butter(2,500/(SR/2),'high');w=signal.lfilter(b,aa,w)
    w=w/np.max(np.abs(w))*np.max(np.abs(a));o=.72*w+.28*a
    return peq(o,4500,3,0.8)
def shout(a):
    a=peq(a,2500,4,0.9);a=peq(a,250,-2,0.8);return np.tanh(a/np.max(np.abs(a))*2.2)/np.tanh(2.2)
def goofy(a): return peq(peq(a,1300,6,1.4),200,-4,0.7)  # nasal
out=[];tl=[];t=0.0
for gap,spec,sp,text,tag in S:
    v=spec.split(':')[0];mod=spec.split(':')[1] if ':' in spec else ''
    if v in PITCH:
        f=PITCH[v];a,_=K.create(text,voice=VO[v],speed=sp/f,lang='en-us');a=trim(a);a=pitch(a,f)
        if v=='G': a=goofy(a)
        if v=='D': a=peq(a,120,3,0.8)
        if v=='K': a=peq(a,1800,3,1.0)
        g=.8
    else:
        a,_=K.create(text,voice=VO['N'],speed=sp,lang='en-us');a=trim(a);g=.75
    a=a/np.max(np.abs(a))
    if mod=='w': a=whisper(a);g=.55
    if mod=='s': a=shout(a);g=1.0
    a=a*g
    lab={'N':'her','G':'gary','D':'death','K':'kid','F':'fairy'}[v]+(('_'+mod) if mod else '')
    t+=gap;tl.append(dict(t0=round(t,3),t1=round(t+len(a)/SR,3),text=text.replace('Memo Pie','Memopai'),tag=tag,voice=lab));out.append((t,a));t+=len(a)/SR
T=t+2.4
v=np.zeros(int(T*SR))
for st,a in out: i=int(st*SR);v[i:i+len(a)]+=a
b,a=signal.butter(2,70/(SR/2),'high');v=signal.lfilter(b,a,v)
v=peq(v,180,2.0,0.8); v=peq(v,3200,1.8,1.0); v=peq(v,7500,-1.5,1.2)
v=v/np.max(np.abs(v))*0.95
sf.write('vo.wav',v.astype(np.float32),SR);json.dump(dict(total=round(T,2),lines=tl),open('timeline.json','w'),indent=1)
for l in tl: print(l['t0'],l['t1'],l['tag'],l['voice'],l['text'])
print('TOTAL',round(T,2))
```

### 7.4 Engine edits for comedy captions
In engine.html:
1. Add these CSS classes after `#cap.e{...}`:
```css
#cap.w{color:#cfd6e2;font-style:italic;font-size:92px;-webkit-text-stroke:12px #111}
#cap.s{color:#ffe14d;font-size:140px}
#cap.g{color:#8ff07a}
#cap.gs{color:#8ff07a;font-size:146px}
#cap.d{color:#c4b2ff}
#cap.f{color:#ff9fd6}
#cap.fw{color:#ffc3e6;font-style:italic;font-size:92px;-webkit-text-stroke:12px #111}
#cap.k{color:#ffb74d}
```
2. Replace the className line with:
`CAP.className=ci<0?'':({him:'q',echo:'e',her_w:'w',her_s:'s',gary:'g',gary_s:'gs',death:'d',fairy:'f',fairy_w:'fw',kid:'k'})[CH[ci].q]||''`
3. Replace the caption transform so shouts shake. Keep the shout pop at 1.3 or less, or long words overflow:
``const sh_=/_s$/.test(CH[ci].q)?1:0;CAP.style.transform=`scale(${lerp(sh_?1.3:1.2,1,eo(p))}) rotate(${sh_?Math.sin(t*40)*2.5:0}deg) translate(${sh_?Math.sin(t*53)*6:0}px,0)`;``

### 7.5 Characters and backgrounds library
Prepend this to scenes.js. Build the page with `...replace('/*SCENES*/', open('toonlib.js').read()+open('scenes.js').read())`.

**`toon(x,y,s,o)`** (feet at y, total height about 530·s, head centre about y−420·s). Options:
- Face: `eyes:'sleepy|wide|crazy|angry|closed|happy'`, `mouth:'flat|buck|grin|o|scream|sad|smile|gums|creepy'`, `talk:t`, `teeth`, `look`.
- Hair and head: `hair:'comb|buzz|afro|bun|pinkbun|messy'`, `hat:'cop'`, `unibrow`, `hw`/`hh` (head size), `glasses`, `headband`.
- Body: `belly`, `badge`, `shirt`, `pants`, `shoes`, `cardigan`, `tie`.
- Effects: `sweat`, `tear`, `tape` (mouth taped), `glow` (eyes), `lightbulb` (0–1).
- Pose: `armL`/`armR` (degrees), `holdR`/`holdL:(hx,hy)=>{draw prop}`, `walk:t`, `tilt`, `flip`.

Presets:
- `gary()`
- `rose()`: grandma
- `death({bored,squint,talk,look,phone:'#25d366',shrug,cuffs,scythe:false})`
- `fairy({sparkle,cuffs,necklace:false,mouth,eyes,glow})`

Backgrounds and props:
- **Rooms and places:** `office`, `nightHouse`, `bushes(x,y,s,t,eyes)`, `jail(t,dim)`, `bars()`, `cellDim`, `cemetery`, `street2` (marathon), `parkingLot`.
- **Props:** `copcar2`, `ticket`, `calendar`, `crimeBoard`, `chart(t,p)`, `toothIcon`, `coin`.
- **Bedroom:** `kidRoom(t,dark)`, `bed`, `blanket`. Draw the character between bed and blanket so only the head shows.
- **Reveal:** `lockPhone(t,p,body,time)`. Show 'Collect: ██████' first, then the real name, with `FL=.5`.
```js
// ================= GOOFY TOON CHARACTERS =================
const SKIN='#f6c9a3';
function toon(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);const t=o.t||0;
 const w=o.walk;const ph=w!=null?Math.sin(w*10):0;const bob=w!=null?Math.abs(Math.sin(w*10))*8:0;X.translate(0,-bob);
 [-1,1].forEach((d,i)=>{const p=w!=null?(i?ph:-ph):0;line([[d*26,-150],[d*30+p*30,-30]],22,O);line([[d*26,-150],[d*30+p*30,-30]],12,o.pants||'#2f3b57');ell(d*34+p*30+d*10,-18,34,18,o.shoes||'#2a2a2a',7)});
 const arm=(d,a)=>{const ang=(a!=null?a:(d>0?18:-18)+(w!=null?Math.sin(w*10+(d>0?0:Math.PI))*30:0))*Math.PI/180;const sx=d*62,sy=-270;const ex=sx+Math.sin(ang)*d*70,ey=sy+Math.cos(ang)*70;const hx=ex+Math.sin(ang*1.3)*d*58,hy=ey+Math.cos(ang*1.3)*58;
  line([[sx,sy],[ex,ey],[hx,hy]],30,O);line([[sx,sy],[ex,ey],[hx,hy]],18,o.shirt||'#3c5a9a');circ(hx,hy,20,o.hand||SKIN,6);return [hx,hy]};
 const hl=arm(-1,o.armL);
 path(()=>{X.moveTo(-70,-300);X.quadraticCurveTo(-100,-210,-80,-140);X.quadraticCurveTo(0,-110,80,-140);X.quadraticCurveTo(100,-210,70,-300);X.quadraticCurveTo(0,-325,-70,-300)},o.shirt||'#3c5a9a',8);
 if(o.belly)ell(0,-185,62,48,o.shirt2||'#4a6ab0',6);
 if(o.badge){path(()=>{for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,r=k%2?11:24;X.lineTo(-34+Math.cos(a)*r,-250+Math.sin(a)*r)}X.closePath()},'#f2c94c',5)}
 if(o.tie)path(()=>{X.moveTo(-10,-300);X.lineTo(10,-300);X.lineTo(16,-220);X.lineTo(0,-200);X.lineTo(-16,-220);X.closePath()},'#c0392b',5);
 if(o.cardigan){line([[0,-300],[0,-130]],6);for(let k=0;k<3;k++)circ(-14,-270+k*40,7,'#f2e6c9',3)}
 const hr=arm(1,o.armR);
 if(o.holdR)o.holdR(hr[0],hr[1]);if(o.holdL)o.holdL(hl[0],hl[1]);
 const hw=o.hw||118,hh=o.hh||108,hy=-310-hh;X.save();X.translate(0,hy);X.rotate((o.tilt||0)*Math.PI/180);
 if(o.hair=='afro'){for(let k=0;k<11;k++){const a=Math.PI+k*Math.PI/10;circ(Math.cos(a)*hw*1.05,-20+Math.sin(a)*hh*1.1,48,'#5a3a22',7)}}
 if(o.hair=='pinkbun'){circ(0,-hh-34,50,'#ff8ccf',7);for(let k=-1;k<=1;k+=2)circ(k*hw*.95,-6,42,'#ff8ccf',7)}
 if(o.hair=='messy'){for(let k=0;k<9;k++){const a=Math.PI*1.05+k*Math.PI*.9/8;path(()=>{X.moveTo(Math.cos(a)*hw*.8,Math.sin(a)*hh*.8);X.lineTo(Math.cos(a)*hw*1.25,Math.sin(a)*hh*1.25-10);X.lineTo(Math.cos(a+.18)*hw*.9,Math.sin(a+.18)*hh*.9)},'#c9772e',6)}}
 if(o.hair=='bun'){circ(0,-hh-30,46,'#d9d9d9',7);for(let k=-1;k<=1;k+=2)circ(k*hw*.95,-10,40,'#d9d9d9',7)}
 circ(-hw+4,6,26,SKIN,7);circ(hw-4,6,26,SKIN,7);
 ell(0,0,hw,hh,o.skin||SKIN,8);
 if(o.hair=='comb'){for(let k=0;k<3;k++)path(()=>{X.moveTo(-80+k*14,-hh+18+k*4);X.quadraticCurveTo(10,-hh-30+k*6,90,-hh+30+k*8)},null,7,'#3a2a1a')}
 if(o.hair=='buzz'){path(()=>{X.ellipse(0,0,hw,hh,0,Math.PI*1.05,Math.PI*1.95)},'#3a2f2a',8);for(let k=0;k<14;k++)circ(-80+rnd(k)*160,-hh+30+rnd(k+5)*40,3,'#6a5a50',0)}
 if(o.hair=='bun'){path(()=>{X.ellipse(0,0,hw,hh,0,Math.PI*1.02,Math.PI*1.98)},'#d9d9d9',8)}
 if(o.hair=='pinkbun'){path(()=>{X.ellipse(0,0,hw,hh,0,Math.PI*1.02,Math.PI*1.98)},'#ff8ccf',8)}
 if(o.hair=='messy'){path(()=>{X.ellipse(0,0,hw,hh,0,Math.PI*1.05,Math.PI*1.95)},'#c9772e',8)}
 if(o.headband){rr(-hw+6,-hh*.62,hw*2-12,26,10,'#e53935',6)}
 const E=o.eyes||'sleepy',lk=o.look||0;const ey=-22;
 const eye=(ex,r,lid,pupil)=>{circ(ex,ey,r,'#fff',7);if(E!='closed'){circ(ex+lk*r/40,ey+(lid>0?r*.25:0),pupil,O,0);circ(ex+lk*r/40-pupil*.35,ey-pupil*.3+(lid>0?r*.25:0),pupil*.3,'#fff',0)}
  if(lid>0){X.save();X.beginPath();X.arc(ex,ey,r,0,7);X.clip();X.fillStyle=o.skin||SKIN;X.fillRect(ex-r-2,ey-r-2,2*r+4,(2*r+4)*lid);X.restore();line([[ex-r,ey-r+(2*r)*lid],[ex+r,ey-r+(2*r)*lid]],7);circ(ex,ey,r,null,7)}};
 const bl=o.blink?1:0;
 if(E=='closed'||E=='happy'||bl){line([[-62,ey],[-22,ey]],8);line([[22,ey],[62,ey]],8)}
 else if(E=='sleepy'){eye(-42,30,.5,11);eye(44,26,.55,10)}
 else if(E=='wide'){eye(-44,38,0,9);eye(46,30,0,8)}
 else if(E=='crazy'){eye(-46,40,0,8);X.save();X.translate(0,6);eye(46,24,0,12);X.restore()}
 else if(E=='angry'){eye(-42,30,.35,12);eye(44,28,.35,12);line([[-80,-62],[-16,-38]],12);line([[80,-62],[16,-38]],12)}
 if(o.unibrow&&E!='angry')line([[-74,-64],[-30,-70],[0,-62],[30,-70],[74,-64]],12,'#3a2a1a');
 if(o.glasses){circ(-42,ey,40,null,8);circ(44,ey,38,null,8);line([[-2,ey],[6,ey]],6);X.globalAlpha=.25;circ(-42,ey,36,'#bfe6ff',0);circ(44,ey,34,'#bfe6ff',0);X.globalAlpha=1}
 X.globalAlpha=.45;ell(-76,34,24,14,'#ff8a8a',0);ell(78,34,24,14,'#ff8a8a',0);X.globalAlpha=1;
 circ(0,22,o.nose||34,'#f59a8e',7);circ(-10,12,9,'#fff',0);
 const M=o.mouth||'flat';const my=70;const tk=o.talk!=null?Math.abs(Math.sin(o.talk*17)):0;
 if(o.talk!=null&&M!='scream'){ell(0,my,20+tk*10,8+tk*22,'#6b1d1d',7);if(o.teeth)rr(-14,my-8-tk*20,28,16,3,'#fff',4)}
 else if(M=='grin'){path(()=>{X.moveTo(-46,my-10);X.quadraticCurveTo(0,my+38,46,my-10);X.closePath()},'#6b1d1d',7);rr(-18,my-12,17,22,3,'#fff',4);rr(1,my-12,17,22,3,'#fff',4)}
 else if(M=='o')ell(0,my,16,20,'#6b1d1d',7);
 else if(M=='gums'){path(()=>{X.moveTo(-50,my-14);X.quadraticCurveTo(0,my+44,50,my-14);X.closePath()},'#6b1d1d',7);path(()=>{X.moveTo(-44,my-12);X.quadraticCurveTo(0,my-2,44,my-12);X.lineTo(44,my-4);X.quadraticCurveTo(0,my+8,-44,my-4);X.closePath()},'#ff8fa3',0)}
 else if(M=='creepy'){path(()=>{X.moveTo(-60,my-16);X.quadraticCurveTo(0,my+40,60,my-16);X.quadraticCurveTo(0,my+8,-60,my-16)},'#6b1d1d',7);for(let k=-4;k<=4;k++)rr(k*12-5,my-10+Math.abs(k)*-1,10,12,2,'#fff',2)}
 else if(M=='scream'){ell(0,my+6,40,46,'#6b1d1d',8);ell(0,my+30,22,12,'#ff7f8a',0)}
 else if(M=='sad')path(()=>{X.moveTo(-26,my+8);X.quadraticCurveTo(0,my-12,26,my+8)},null,8);
 else if(M=='smile')path(()=>{X.moveTo(-30,my-6);X.quadraticCurveTo(0,my+20,30,my-6)},null,8);
 else if(M=='buck'){line([[-24,my],[24,my]],8);rr(-14,my,13,18,3,'#fff',4);rr(1,my,13,18,3,'#fff',4)}
 else line([[-22,my],[22,my]],8);
 if(o.tape){X.save();X.translate(0,my);[-.35,.35].forEach(a=>{X.save();X.rotate(a);rr(-70,-16,140,32,4,'#cfcfcf',5);X.restore()});X.restore()}
 if(o.glow){[-42,44].forEach(ex=>{X.globalAlpha=.4;circ(ex,-22,40,'#ffe14d',0);X.globalAlpha=1})}
 if(o.mustache)path(()=>{X.moveTo(-40,my-18);X.quadraticCurveTo(0,my-36,40,my-18);X.quadraticCurveTo(0,my-6,-40,my-18)},'#3a2a1a',5);
 if(o.sweat){ell(hw-10,-60+((t*60)%30),10,16,'#7fd1ff',4)}
 if(o.tear){ell(-40,10+((t*70)%60),10,15,'#7fd1ff',4)}
 if(o.hat=='cop'){X.save();X.translate(10,-hh+20);X.rotate(-.18);path(()=>{X.moveTo(-hw-20,10);X.quadraticCurveTo(-hw,-70,0,-80);X.quadraticCurveTo(hw,-70,hw+20,10);X.closePath()},'#1d2b4f',8);rr(-hw-24,-6,2*hw+48,30,10,'#111a33',7);path(()=>{X.moveTo(-40,-60);X.lineTo(-20,-40);X.lineTo(-40,-20);X.lineTo(-60,-40);X.closePath()},'#f2c94c',5);path(()=>{X.moveTo(-hw-10,24);X.quadraticCurveTo(-hw*.3,70,hw*.6,30)},'#0b1222',7);X.restore()}
 if(o.lightbulb){const fl=o.lightbulb;X.save();X.translate(0,-hh-120);X.globalAlpha=fl;circ(0,0,70,'rgba(255,240,150,.35)',0);X.globalAlpha=1;circ(0,0,40,fl>.5?'#ffe866':'#888',7);rr(-18,34,36,26,4,'#999',5);X.restore()}
 X.restore();X.restore()}
function gary(x,y,s,o={}){toon(x,y,s,Object.assign({hair:'comb',hat:'cop',unibrow:1,belly:1,badge:1,shirt:'#3c5a9a',shirt2:'#4a6ab0',mouth:'buck',hw:122,hh:112,mustache:0},o))}
function rose(x,y,s,o={}){toon(x,y,s,Object.assign({hair:'bun',glasses:1,eyes:'wide',shirt:'#8e5aa8',cardigan:1,pants:'#5a4a6a',mouth:'smile',hw:112,hh:104,nose:30},o))}
function death(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);const t=o.t||0;
 if(o.scythe!==false){line([[150,-40],[120,-760]],22,O);line([[150,-40],[120,-760]],12,'#7a5a3a');path(()=>{X.moveTo(120,-760);X.quadraticCurveTo(-60,-860,-240,-700);X.quadraticCurveTo(-60,-780,118,-720);X.closePath()},'#cfd6df',8)}
 path(()=>{X.moveTo(-130,0);X.quadraticCurveTo(-150,-300,-110,-480);X.quadraticCurveTo(0,-640,110,-480);X.quadraticCurveTo(150,-300,130,0);X.quadraticCurveTo(60,-20,0,0);X.quadraticCurveTo(-60,-20,-130,0)},'#1a1a22',8);
 path(()=>{X.moveTo(-96,-450);X.quadraticCurveTo(0,-600,96,-450);X.quadraticCurveTo(80,-380,0,-370);X.quadraticCurveTo(-80,-380,-96,-450)},'#07070a',6);
 X.save();X.translate(0,-455);ell(0,0,72,66,'#f3efe4',7);
 const sq=o.squint?0.55:0;[-1,1].forEach(d=>{ell(d*28,-6,20,22-sq*10,'#151515',0);if(o.pupils!==false)circ(d*28+(o.look||0),-4,6,'#fff',0)});
 if(o.bored){line([[-50,-28],[-10,-24]],7);line([[50,-28],[10,-24]],7)}
 path(()=>{X.moveTo(0,10);X.lineTo(-8,26);X.lineTo(8,26);X.closePath()},'#151515',0);
 const tk=o.talk!=null?Math.abs(Math.sin(o.talk*15))*10:0;rr(-30,36,60,14+tk,4,'#fff',5);for(let k=-2;k<=2;k++)line([[k*10,36],[k*10,50+tk]],3);X.restore();
 const hand=(hx,hy)=>{circ(hx,hy,16,'#f3efe4',5);for(let k=-1;k<=1;k++)line([[hx+k*8,hy],[hx+k*10,hy-24]],6,'#f3efe4')};
 if(o.shrug){hand(-170,-420);hand(170,-420);line([[-110,-330],[-170,-410]],26,'#1a1a22');line([[110,-330],[170,-410]],26,'#1a1a22')}
 else{hand(120,-300);if(o.phone){X.save();X.translate(-60,-330);X.rotate(-.2);rr(-36,-64,72,128,12,'#1b1b1f',5);rr(-28,-54,56,108,8,o.phone,0);X.restore();X.globalAlpha=.18;circ(-60,-320,90,'#7ef0a0',0);X.globalAlpha=1;hand(-40,-300)}}
 if(o.cuffs){X.save();X.translate(0,-310);X.scale(.42,.42);cuffs(0,0,1,0,1);X.restore()}
 X.restore()}
function fairy(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y+Math.sin(t*4)*14);X.scale(s*(o.flip?-1:1),s);
 const fl=Math.sin(t*28)*.25;[-1,1].forEach(d=>{X.save();X.translate(d*40,-300);X.rotate(d*(.5+fl));X.globalAlpha=.6;ell(d*90,-60,95,55,'#bfe8ff',6);ell(d*70,30,60,36,'#d9f2ff',6);X.globalAlpha=1;X.restore()});
 X.restore();
 toon(x,y+Math.sin(t*4)*14,s,Object.assign({hair:'pinkbun',shirt:'#ff7cc4',pants:'#ff7cc4',shoes:'#ff4fa8',eyes:'sleepy',mouth:'creepy',hw:110,hh:100,nose:26,
  holdR:(hx,hy)=>{line([[hx,hy],[hx+30,hy-160]],10,'#d9b26a');path(()=>{for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,r=k%2?14:32;X.lineTo(hx+30+Math.cos(a)*r,hy-170+Math.sin(a)*r)}X.closePath()},'#ffe14d',5);if(o.sparkle)for(let k=0;k<5;k++){const a=t*3+k*1.3;txt('✦',hx+30+Math.cos(a)*70,hy-170+Math.sin(a)*70,30,'#fff7a0',0)}}},o));
 X.save();X.translate(x,y+Math.sin(t*4)*14);X.scale(s*(o.flip?-1:1),s);path(()=>{X.moveTo(-100,-150);for(let k=0;k<=10;k++)X.lineTo(-100+k*20,-150+(k%2?40:0));X.lineTo(100,-150);X.closePath()},'#ffc1e3',6);
 if(o.necklace!==false){for(let k=-4;k<=4;k++){const nx=Math.sin(k*.22)*70,ny=-270-Math.abs(k)*4;rr(nx-8,ny,16,20,4,'#fffdf4',3)}line([[-70,-282],[0,-262],[70,-282]],3,'#999')}
 if(o.cuffs){X.save();X.translate(0,-200);X.scale(.35,.35);cuffs(0,0,1,0,o.cuffs);X.restore()}X.restore()}
// ================= BACKGROUNDS & PROPS =================
function roomWall(c1='#f1dcc0',c2='#e7c9a6',tile='#6fa59a'){X.fillStyle=c1;X.fillRect(-3000,-3000,8000,4300);X.fillStyle=c2;X.fillRect(-3000,1300,8000,3000);
 X.fillStyle=tile;X.fillRect(-3000,1060,8000,40);for(let i=-20;i<40;i++){X.fillStyle=(i%2)?'#e9d6bd':'#dcc4a5';X.fillRect(i*120,1100,120,200)}}
function office(t){roomWall('#e8dcc8','#cdb796','#3c5a9a');rr(700,330,220,280,8,'#f7f0de',7);txt('WANTED',810,380,40,'#c0392b',0);txt('???',810,500,80,'#999',0);
 rr(120,350,230,170,8,'#fff8e8',7);txt('ARRESTS',235,400,34,'#333',0);txt('0',235,470,70,'#c0392b',0);
 rr(-200,1180,1500,60,10,'#8a5a30',8);rr(-150,1240,60,300,6,'#6a4422',6);rr(1140,1240,60,300,6,'#6a4422',6);rr(820,1100,120,80,8,'#d9d9d9',6);circ(880,1090,30,'#6b3e1f',5)}
function nightHouse(t){nightSky(t);circ(860,320,90,'#f6f0d2',6);X.fillStyle='#2b3a2e';X.fillRect(-3000,1250,8000,1500);
 rr(80,620,920,640,10,'#6b5a7a',8);path(()=>{X.moveTo(40,640);X.lineTo(540,300);X.lineTo(1040,640);X.closePath()},'#4a3a55',8);
 rr(160,760,220,200,10,'#ffd76a',7);line([[270,760],[270,960]],6);line([[160,860],[380,860]],6);rr(700,760,220,200,10,'#ffd76a',7);line([[810,760],[810,960]],6);line([[700,860],[920,860]],6);
 rr(450,880,180,380,12,'#7a4a2a',8);circ(600,1080,10,'#f2c94c',4);X.globalAlpha=.3;circ(540,840,160,'#ffe9a0',0);X.globalAlpha=1;circ(540,840,22,'#ffe9a0',6)}
function bushes(x,y,s,t,eyes){X.save();X.translate(x,y);X.scale(s,s);for(let k=0;k<6;k++)circ(-200+k*80,-60-(k%2)*40,90,k%2?'#3f7a3a':'#4d8f45',7);
 if(eyes){[-40,40].forEach(d=>{circ(d,-90,26,'#fff',6);circ(d+Math.sin(t*2)*8,-90,10,O,0)});}X.restore()}
function jail(t,dim){X.fillStyle=dim?'#3a3f4d':'#8b8f9a';X.fillRect(-3000,-3000,8000,8000);for(let r=0;r<30;r++)for(let c=-10;c<20;c++){X.fillStyle=((r+c)%3==0)?(dim?'#454a59':'#9aa0ac'):(dim?'#3f4453':'#939aa6');X.fillRect(c*140+(r%2)*70,r*70-200,134,64)}
 X.fillStyle=dim?'#2a2e38':'#6e737f';X.fillRect(-3000,1300,8000,2000);rr(150,1120,520,60,10,'#6a4a2a',7)}
function bars(){for(let k=0;k<9;k++)line([[60+k*125,-200],[60+k*125,2200]],26,O),line([[60+k*125,-200],[60+k*125,2200]],14,'#8c939e');rr(-40,250,1200,40,8,'#8c939e',8)}
function cellDim(t){jail(t,1);X.globalAlpha=.35;X.fillStyle='#000';X.fillRect(-3000,-3000,8000,8000);X.globalAlpha=1}
function cemetery(t){sky('#a9b6c9','#e8d9c8');X.fillStyle='#6f8f5a';X.fillRect(-3000,1150,8000,2000);
 for(let k=0;k<6;k++){const x=80+k*190,y=1200+(k%2)*80;path(()=>{X.moveTo(x-60,y);X.lineTo(x-60,y-150);X.quadraticCurveTo(x,y-220,x+60,y-150);X.lineTo(x+60,y);X.closePath()},'#b9bcc2',7);txt('RIP',x,y-110,30,'#666',0)}
 line([[300,1150],[300,700]],14,'#6a4a2a');rr(120,600,560,200,12,'#f7f0de',8);txt('CLOSED',400,660,64,'#c0392b',0);txt('BANKRUPT 💸',400,740,46,'#333',0)}
function street2(t){sky('#7cc3f0','#fde7c0');clouds(t,260);X.fillStyle='#8a8f99';X.fillRect(-3000,1150,8000,2000);for(let i=-20;i<40;i++)rr(i*220-(t*500)%220,1500,120,16,4,'#fff',0);
 line([[60,1150],[60,560]],14);line([[1020,1150],[1020,560]],14);rr(40,540,1000,110,10,'#e53935',8);txt('CITY MARATHON',540,595,60,'#fff',0)}
function parkingLot(t){sky('#8fc9f2','#e9f4ff');clouds(t,240);X.fillStyle='#7d828b';X.fillRect(-3000,1150,8000,2000);for(let k=-5;k<12;k++)line([[k*260,1180],[k*260-60,1500]],8,'#f2f2f2')}
function copcar2(x,y,s){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-320,-60);X.lineTo(-310,-160);X.lineTo(-160,-170);X.lineTo(-90,-260);X.lineTo(130,-260);X.lineTo(200,-170);X.lineTo(330,-160);X.lineTo(340,-60);X.closePath()},'#f4f4f4',8);rr(-320,-140,660,40,0,'#1d2b4f',0);txt('POLICE',10,-120,36,'#fff',0);rr(-70,-246,95,74,8,'#9fc6e0',5);rr(45,-246,75,74,8,'#9fc6e0',5);rr(-50,-292,50,30,8,'#ff3b3b',5);rr(0,-292,50,30,8,'#3b6bff',5);[-190,200].forEach(wx=>{circ(wx,-50,60,'#151515',8);circ(wx,-50,24,'#bbb',5)});X.restore()}
function ticket(x,y,s,rot,lines_){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);rr(-150,-200,300,400,10,'#fff6b8',7);txt('PARKING',0,-150,40,'#c0392b',0);txt('TICKET',0,-105,40,'#c0392b',0);lines_.forEach((l,i)=>txt(l,0,-30+i*60,32,'#333',0,'800 '));X.restore()}
function calendar(x,y,s,day){X.save();X.translate(x,y);X.scale(s,s);rr(-170,-200,340,400,22,'#fff',8);rr(-170,-200,340,100,22,'#e53935',8);txt('DAY',0,-150,50,'#fff',0);txt(String(day),0,40,190,'#151515',0);X.restore()}
function lockPhone(t,p,body,time='14:59'){X.setTransform(1,0,0,1,0,0);X.fillStyle='#07080c';X.fillRect(0,0,1080,1920);X.globalAlpha=.5;circ(540,820,520,'#123a26',0);X.globalAlpha=1;
 X.save();X.translate(540,860);const z=lerp(1,1.12,p);X.scale(z,z);X.rotate(-.03);rr(-330,-620,660,1240,90,'#1b1b1f',10);const g=X.createLinearGradient(0,-600,0,600);g.addColorStop(0,'#2a1240');g.addColorStop(1,'#0c2a1c');X.fillStyle=g;X.beginPath();X.roundRect(-306,-596,612,1192,70);X.fill();rr(-70,-580,140,40,20,'#000',0);
 txt('Sunday',0,-470,34,'#fff',0,'600 ');txt(time,0,-380,130,'#fff',0,'700 ');X.translate(0,-200);X.scale(.64,.64);X.translate(-540,0);notif(0,C(p*3),'Memopai',body);X.restore()}
function toothIcon(x,y,s,rot=0,glow=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);if(glow){X.globalAlpha=.35+.2*Math.sin(glow*6);circ(0,0,120,'#fff7c2',0);X.globalAlpha=1}
 path(()=>{X.moveTo(-50,-50);X.quadraticCurveTo(-60,-90,-25,-88);X.quadraticCurveTo(0,-80,25,-88);X.quadraticCurveTo(60,-90,50,-50);X.quadraticCurveTo(45,0,30,60);X.quadraticCurveTo(20,80,10,40);X.quadraticCurveTo(0,20,-10,40);X.quadraticCurveTo(-20,80,-30,60);X.quadraticCurveTo(-45,0,-50,-50)},'#fffdf4',7);circ(-22,-60,8,'#fff',0);X.restore()}
function coin(x,y,s,label='50¢'){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,60,'#f2c94c',7);circ(0,0,44,null,5,'#c79a22');txt(label,0,2,34,'#7a5a12',0);X.restore()}
function kidRoom(t,dark){X.fillStyle=dark?'#1d2440':'#a7c7e7';X.fillRect(-3000,-3000,8000,8000);for(let k=0;k<12;k++){X.globalAlpha=dark?.25:.5;txt('★',((k*230)%1300)-100,200+((k*170)%900),40,'#fff',0);X.globalAlpha=1}
 rr(640,330,300,360,14,dark?'#0c1230':'#cfe9ff',8);line([[790,330],[790,690]],8);line([[640,510],[940,510]],8);circ(860,420,34,'#f6f0d2',0);
 X.fillStyle=dark?'#2a2238':'#c79a6a';X.fillRect(-3000,1300,8000,2000)}
function bed(x,y,s){X.save();X.translate(x,y);X.scale(s,s);rr(-330,-120,660,140,16,'#8a5a30',8);rr(-350,-330,60,350,12,'#6a4422',8);rr(290,-260,60,280,12,'#6a4422',8);rr(-300,-170,600,70,20,'#f3f3f3',6);ell(-210,-190,90,46,'#fff',7);X.restore()}
function blanket(x,y,s,col='#5b8bd4'){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-130,-200);X.quadraticCurveTo(80,-240,320,-190);X.lineTo(330,-60);X.lineTo(-300,-60);X.lineTo(-300,-150);X.closePath()},col,8);for(let k=0;k<4;k++)line([[-80+k*110,-205],[-60+k*110,-80]],5,'rgba(0,0,0,.15)');X.restore()}
function crimeBoard(t,label='VICTIMS: 4,812,000'){roomWall('#3a3048','#2a2236','#5a3a6a');rr(90,250,900,700,16,'#c9a06a',10);
 const P=[[220,380],[520,330],[820,400],[300,700],[650,640],[860,780]];for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j+=2)line([P[i],P[j]],5,'#e53935');
 P.forEach(([x,y],i)=>{rr(x-70,y-60,140,120,6,'#fff',5);toothIcon(x,y,.45,i*.3);circ(x,y-62,12,'#e53935',4)});X.globalAlpha=.9;rr(340,830,400,80,10,'#151515',0);X.globalAlpha=1;txt(label,540,870,40,'#ff6b5a',0)}
function chart(t,p){X.fillStyle='#141824';X.fillRect(-3000,-3000,8000,8000);for(let k=0;k<8;k++)line([[80,300+k*120],[1000,300+k*120]],2,'#2a3042');
 const pts=[];for(let k=0;k<=20;k++){const x=80+k*46,y=420+Math.sin(k*1.7)*40+(k>8?(k-8)*55:0);pts.push([x,y])}const n=Math.max(2,Math.floor(pts.length*p));line(pts.slice(0,n),12,'#ff3b3b');txt('ECONOMY 📉',540,230,70,'#fff',12)}
```

### 7.6 Scene patterns (copy and adapt)
```js
// hook: arrested villain behind bars, Gary OUTSIDE (draw bars() before Gary)
sh(0,(t,r)=>{cam(540,1000,lerp(1.25,1.05,eo(r/1.2)),t,.5);jail(t);death(700,1240,.95,{t,cuffs:1,bored:1,scythe:false});bars();gary(300,1420,1.05,{t,eyes:'crazy',mouth:'grin',armR:-150});if(r<.1)FL=.9;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'ARRESTED: DEATH','#ffe14d',C((r-.2)/.25))});
// whispered big question
sh(T('h2'),(t,r)=>{lockPhone(t,C((r-.3)/2.4),'⏰ 15:00 — Collect: ██████ 💀');X.setTransform(1,0,0,1,0,0);if(r>1.9)tag(540,1260,'WHO?! 👀','#ffe14d',C((r-1.9)/.25))});
// Gary shout close-up
sh(T('g1'),(t,r)=>{cam(540,700,lerp(2.4,2.1,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1250,1.0,{t,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170});SHK=12});
// FREEZE with flashlight
sh(T('g2'),(t,r)=>{cam(540,980,lerp(1.25,1.05,eo(r/.3)),t,.6);nightHouse(t);gary(320,1420,.95,{t,eyes:'crazy',talk:t,teeth:1,armR:-95,holdR:(hx,hy)=>{rr(hx-10,hy-20,70,36,8,'#333',4);X.globalAlpha=.35;path(()=>{X.moveTo(hx+60,hy);X.lineTo(hx+500,hy-200);X.lineTo(hx+500,hy+140);X.closePath()},'#fff7b0',0);X.globalAlpha=1}});SHK=r<.6?10:0;X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'FREEZE!','#e53935',C(sp(r,16,.45)),130)});
// villain's own Memopai list (reminding themselves) → reveal → Gary reminds the villain (reminding others)
sh(T('s9'),(t,r)=>{cam(540,960,1,t,.4);burst('#1d1d27','#26263a',t*.3);phoneUI(540,960,1,r,{typing:r>1.3&&r<1.9,list:[{a:.15,me:1,text:'Remind me: 9:00 collect Mr. Jenkins. 10:00 collect a goldfish 🐟',time:'08:00'},{a:1.9,me:0,text:'Done ✅ Busy day! I’ll ping you before each one 💀',time:'08:00'}]});death(150,2080,.75,{t,bored:1,scythe:false})});
sh(T('s10'),(t,r)=>{lockPhone(t,C(r/1.2),r<.6?'⏰ 15:00 — Collect: ██████ 💀':'⏰ 15:00 — Collect: Officer Gary 💀');if(r>.6&&r<.68)FL=.5});
sh(T('g4'),(t,r)=>{cam(540,700,lerp(2.6,2.2,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1250,1.0,{t,eyes:'crazy',mouth:'scream',sweat:1,hat:r>.3?null:'cop'});SHK=14});
sh(T('s12'),(t,r)=>{cam(540,960,1,t,.4);burst('#1d2b4f','#22355e',t*.3);phoneUI(540,960,1,r,{typing:r>1.6&&r<2.2,list:[{a:.15,me:1,text:'Remind Death: 15:00 is CANCELLED. Gary is busy. Forever. 🙏',time:'14:41'},{a:2.2,me:0,text:'Done ✅ I’ll remind him at 14:55 😇',time:'14:41'}]});gary(150,2080,.75,{t,eyes:'sleepy',mouth:'grin'})});
// lightbulb idea (flickers, then on)
sh(T('s11'),(t,r)=>{cam(540,860,1.4,t,.4);office(t);gary(540,1420,1,{t,eyes:'sleepy',look:-20,lightbulb:r>.8?(r>1.4?1:(Math.sin(t*50)>0?1:.15)):0,armR:-130})});
```

### 7.7 Extra sound helpers (paste into score.py before the cues)
```python
def organ(t0,notes,d=1.6,g=.06):
    k=int(d*SR);tt=np.arange(k)/SR
    for n in notes:
        f=hz(n);add(mus,sum(np.sin(2*np.pi*f*m*tt)/m for m in (1,2,3,4,6))*np.minimum(tt/.05,1)*np.minimum((d-tt)/.3,1)*g,t0)
def knock(): x=noise(.12);return lp(x,700)*env(len(x),.001,.03)*2+tone(110,.12,.04)*.8
def heartbeat(a,z):
    t=a
    while t<z: add(sfx,tone(55,.16,.06)*1.3,t,.9);add(sfx,tone(50,.14,.05),t+.2,.8);t+=.8
def buzz(t0,d=.6): k=int(d*SR);tt=np.arange(k)/SR;add(sfx,np.sign(np.sin(2*np.pi*120*tt))*.08*(np.sin(tt*60)>0),t0)
def ding(t0): add(sfx,tone(2093,.6,.3,(1,2.4)),t0,.3)
def sparkle(t0):
    for k in range(6): add(sfx,tone(2000+k*300,.3,.12,(1,2)),t0+k*.05,.1)
def creak(t0,d=1.0): k=int(d*SR);tt=np.arange(k)/SR;add(sfx,bp(np.sign(np.sin(2*np.pi*np.cumsum(90+40*np.sin(tt*7))/SR))*.3,300,2000)*np.sin(np.pi*tt/d)*.5,t0)
```
Cue recipe:
- **Hook:** `shutter()` + `impact(1.0)` + `organ` (dark).
- **Whispered suspense:** `drone` + `musicbox` + `heartbeat`.
- **Gary sections:** `bounce` or `sneaky`.
- **Shouts:** `impact` + `siren` + `scratch`.
- **Arrests:** `clank` + `impact` + `sting`.
- **Consequences montage:** `bounce`, then a sad `trombone`.
- **Reveal:** `heartbeat` + `chime` + `sting`.
- **Lightbulb:** `buzz` + `ding`.
- **Doors and windows:** `knock` / `creak` + `sparkle`.
- **Ending:** sad trombone + `chime` (final notification) + `organ`.

### 7.8 Gotchas learned
- **Emoji:** some emoji don't render in this Chromium (🦤 and 🦷 come out blank). Use 😬 for teeth and ✨ instead of 🧚, and check any rare emoji in a preview.
- **Shout caption pop:** keep the scale at 1.3 or less.
- **Gary's eyes:** `eyes:'happy'` draws closed arcs (in toonlib).
- **lockPhone:** scales the notification to 0.64 so it fits inside the phone; don't use full-width `notif` inside a phone.
- **Death's phone glow:** keep it small (r 90, α 0.18) or it covers the skull.
- **Faces vs captions:** keep faces above y≈1350 on screen. For bed shots, use cam(560,1150,~1.2) with the character at y 1440 and scale 0.75.
- **score_core extras:** if `typing`/`chime`/`rewind` are missing, paste them from section 5.