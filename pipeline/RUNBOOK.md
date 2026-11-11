# Memopai daily video — runbook for each scheduled run

One run = ONE brand-new ~30 s vertical video (1080×1920, 30 fps), published to Memopai's TikTok, Instagram and Facebook.
Repo: `RoboNixer/jureglavas`, branch `memopai-media`. Everything you need is in `pipeline/`.

## 0. Setup (fresh session)
```bash
git clone -b memopai-media https://github.com/RoboNixer/jureglavas ~/jg   # or use the attached repo clone
bash ~/jg/pipeline/setup.sh                                               # Kokoro TTS + deps, prints SETUP_OK
mkdir -p ~/vid && cp -r ~/jg/pipeline/common ~/vid/common
```
Also load the `stickman-story-video` skill if it's available. It documents engine.html helpers (man/guy/face2/phoneUI/notif/tag/stampBig/cam/etc.). Section 7 covers the goofy toon comedy mode (Officer Gary), which is the default.
Read 2–3 examples in `pipeline/examples/*` (script.py / scenes.js / cues.py) before writing your own. They are the approved quality bar.

## 0b. Learn before you create (every run)
1. Read `daily/learnings.md` (the viral playbook). It sets the category for this run (STORY → FUN FACT → PRODUCTIVITY rotation) and the current rules.
2. Check performance: Buffer `list_posts` with organizationId `6af20c415819f36cb2c5beef`, `createdAt.start` = 3 days ago, `includeMetrics:true`, `first:100`. The output is large and gets saved to a file; parse it with python (edges[].node: channelService, text, sentAt, metrics[] with type/value: views, reach, reactions, comments, shares, saves, averageTimeWatched). Buffer's numbers can lag by hours; if a browser tool is available you may also read view counts from instagram.com/memopai_en/reels/ and tiktok.com/@memopai_en, but don't depend on it.
3. Update the scoreboard in `daily/learnings.md` (top 10 + worst 5 + anything new), compare winners vs losers (hook wording, category, cover, length, first 3 seconds, posting hour), and rewrite section 3 with what the data now says. Fill in results for earlier experiments in section 4.
4. Research what's viral right now (web search: viral AI animation shorts, viral story formats, trending topics today, hook formulas) and note new patterns.
5. Decide ONE deliberate improvement or experiment for this video (e.g. shorter length, new hook formula, different cover style, second hook at 8 s) and log it in section 4. Every video must apply the current best rules AND test one new thing.
Commit + push `daily/learnings.md` together with your topic claim.

## 0c. MEMOPAI IS THE STAR (owner, 2026-11-11, top priority, overrides older topic rules)
Owner: "Choose the stories so they make sense for Memopai. Don't use a story that doesn't fit Memopai and then try to put it in. Memopai has to be the star, so people say: what is this, I need to use it."
Before today, Memopai was a cameo inside unrelated jokes (a cop arrests the Moon; the Moon texts Memopai). That is now forbidden.

**What Memopai really does (memopai.com; show ONLY these, never invent features):**
- An AI reminder assistant that lives inside WhatsApp. No app, no account: you just message it.
- You write or SPEAK (voice message) the reminder the way you'd tell a friend: "Remind me tomorrow at 8 to call mom", "in 20 minutes", "every Monday at 9", "every first of the month".
- Recurring reminders (daily, weekly, weekdays, monthly) until you say stop. Reply "snooze" and it comes back in 10 minutes.
- **Reminds OTHER people:** "Remind Mom tomorrow at 9 to take her medicine" lands in HER WhatsApp. She taps Accept once and needs no account. Up to 10 people. This is the feature nobody expects; use it often.
- Works 24/7, even when your phone is off or silent. Understands English, Croatian, Bosnian and Serbian.
- It is a paid product (no free plan), so never say or show "free".

**Fit test (the topic must pass all four BEFORE you claim it):**
1. The problem in the story is forgetting something, or having to remind/nag someone else.
2. Take Memopai out and the story falls apart. If the joke still works without it, pick another story.
3. What Memopai does on screen is a real feature from the list above, used the way a real person would use it.
4. A viewer who has never heard of Memopai can say after one watch: "It's a WhatsApp contact you text, and it reminds you or someone else at the right time", and wants it for their own life.

**Story shapes that fit:**
- *Without / with:* the same day twice. First the thing is forgotten and it goes wrong; rewind; one WhatsApp message to Memopai; it goes right.
- *Remind someone else:* she stops nagging her husband / teenager / flatmate / team, because Memopai does it for her, at the exact minute.
- *The save:* the reminder lands at the last possible second (free trial ends tonight, parking runs out, the oven is on, the anniversary is today).
- *Escalation:* one person discovers it and starts using it for everything; a running gag of ever funnier reminders.
- *True "someone forgot" story:* a real, verified moment where one forgotten thing cost a fortune, then "same day, with one reminder".

**Idea bank (pick one that is NOT in topics_log.md, or invent a better one that passes the fit test):** free trial that renews tonight; bins day; wedding anniversary; mom's birthday; passport expires before the holiday; parking meter; kid waiting at school; "text me when you get home"; laundry left in the machine; oven left on; return window closes today; car inspection; water the plants while away; flatmate who never pays rent on time; boss's weekly report; group trip where everyone forgets their part; grandpa's doctor appointment; taking the bins out vs. the neighbour; concert tickets go on sale at 10:00; calling grandma every Sunday; the umbrella; library book fines; the gift you promised; defrosting dinner; "I'll do it in 5 minutes" (snooze); voice reminder while driving.

**The Memopai beat (the centre of every video):**
- Memopai is on screen by second 6–8 and for at least 6 seconds in total.
- Show the three steps clearly: (1) someone texts or speaks to Memopai in plain words, 12 words or fewer, readable for 2.5 s; (2) the reminder ARRIVES on a phone at the critical moment (theirs or the other person's WhatsApp, mascot avatar, name "Memopai"); (3) the consequence: disaster avoided or the win.
- **End card + spoken call to action (owner decision 2026-11-11; this replaces the old "never an ad, no CTA, no end card" rule here, in the skill and anywhere else):** every video ends with the Memopai end card. Make the LAST voice line the call to action, tagged `cta`, in the narrator's voice, e.g. `(0.35,'N',1.1,"Never forget again. Just text Memo Pie on WhatsApp.",'cta')` (vary the first sentence to echo the story: "Stop nagging. Just text Memo Pie on WhatsApp."), and make the last shot `sh(T('cta'),(t,r)=>endcard(t,r));` (`endcard()` in toonlib.js: mascot, "Memopai", tagline, green "memopai.com" pill). About 3 s, right after the payoff, with a `chime(T('cta'))`. The story itself stays 20–26 s; total up to ~29 s. Never say "free".
- Hooks are about the viewer's pain or the surprising ability, said as a claim: "She hasn't reminded her husband of anything in 30 days." / "Your free trial ends in one hour." / "This WhatsApp contact nags your flatmate so you don't have to."

**Want-it gate (mandatory, together with the clarity gate):** give only the script to a fresh subagent and ask: (a) retell the story in one sentence, (b) what is Memopai and what exactly did it do, (c) does the story work without it, (d) would a normal person want it after watching, and why. Rewrite until (b) is right, (c) is "no" and (d) is a clear yes.

## 1. Pick a topic that is NOT in `daily/topics_log.md`
- The category comes from the rotation in `daily/learnings.md`. Log entries must include it: `- <date> | <HH:00> | <CATEGORY> | <title> | <premise> | <file>`.
- `git pull` first, then read `daily/topics_log.md`. Never repeat a topic, fact, premise or punchline. Also avoid repeating the same *format* in back-to-back slots (alternate Officer Gary comedy / history fun fact / myth-buster / science-space / animal fact / "what if they had phones").
- Research with web search: what's trending/controversial right now, plus surprising, verifiable fun facts. Fact-check the core fact on 2+ sources. Phrase contested claims honestly ("allegedly", "according to…").
- The topic must pass the Memopai fit test in section 0c. The hook is a claim about the viewer's pain or Memopai's surprising ability (examples in 0c), in the first 2 s.
- No graphic violence, no real-person likenesses beyond generic toons, no copyrighted characters.

## 1b. Visual style per video (owner: "use different styles for different videos")
The `stickman-story-video` skill has two looks, and both are already in `engine.html` / `toonlib.js`. Do not make every video an Officer Gary toon.
- **STORY** → goofy toon comedy look (skill section 7): Gary or another original toon character.
- **FUN FACT** → stickman look (skill sections 1–6): `man()/guy()/dave()`, painted flat backgrounds, the fact's own characters, like `pipeline/examples/napo` and `pluto`. No Gary.
- **PRODUCTIVITY** → alternate: use the look the previous PRODUCTIVITY entry in `topics_log.md` did NOT use.
- Add `style: toon` or `style: stickman` to the topics_log line and compare the two looks in the scoreboard.
- Take the LOOK and the tooling from the skill. Its pacing rules ("something changes every 1–2 s", 22–25 lines, 35–55 s) are replaced by Story rules v2 below.

## 2. Story rules v2 (2026-11-11 evening, owner feedback: "too much is happening, hard to keep up, doesn't make sense")
These rules OVERRIDE anything older, including "something new on screen every 1–2 s" in the task prompt and in section 2b.
- **One idea per video.** Before writing, state the story in ONE sentence: "<character> wants X, but Y, so Z." If you need "and then… and then…", cut until you don't.
- **Three beats only:** setup (0–5 s), ONE escalation (5–15 s), payoff (last ~5 s). No subplot, no second twist, no science lecture bolted onto a story.
- **Cause and effect.** Each beat follows the previous one with "so" or "but", never "and then". Every action needs a reason the viewer can see (why does the character do this?).
- **Less of everything:** max 8 voice lines, 45–60 words, 20–26 s. Max 8 shots, each on screen at least 2.5 s. 0.4 s of silence after the punchline.
- **One text element at a time** besides the captions (a tag OR a stamp OR a bubble). Shake/flash only on the single biggest moment.
- **Max 2 speaking characters** (narrator + one voice is ideal). Shouting at most once.
- **Narrator is a man** (owner request): default narrator voice `N` = `am_michael`. Don't switch it back to a female voice.
- **Voice v3 (owner: "heard all the time, no whispering, real storyteller" and then "more dynamic and faster"):** NO whispers ever. Fast, energetic narrator with strong CONTRAST: setup lines at speed 1.18–1.28, the hook as a punchy `:s` line (about 3 dB louder, at most 2 per video), then a 0.25–0.4 s pause and the payoff line slower at 1.0–1.08 (or `:w`, which is now a slow dramatic full-voice line). Alternate long and very short sentences ("Big mistake."), use questions and exclamations so the pitch moves, and never run two lines in a row at the same speed. Sentences still have to make sense on their own; no word-by-word fragments. The owner found the plain voice monotone, so `vo_core.py` now stretches the narrator's pitch movement by default (`EXPR=1.55`, needs `pyworld`, installed by setup.sh) and gives each line its own register; set `REG={'tag':+2,...}` (semitones) in script.py to push a key line higher or lower. Keep the default on. `score_core.py` prints `ducked bed under <tag>` when music/SFX were too loud under a line; if you see many, remove SFX from under speech.
- **Memopai is the star** (section 0c): the story is about forgetting or reminding, and the Memopai beat is its centre. "Memo Pie" in TTS, "Memopai" in captions, mascot as avatar.
- **Clarity gate (mandatory, before building):** give ONLY the script to a fresh subagent (Agent tool) and ask it to retell the story in one sentence and name the joke. If it gets it wrong or is vague, rewrite and test again. After the preview sheet, check that 6 frames alone tell the story.
- Keep: claim hook in the first 2 s ("This cop arrested <one thing>" / "This crow hated one cop for 17 years"), payoff ending.
- Judge videos by **retention % = average watch ÷ length** (target 60%+), not just views.

## 2b. Look v2 (visual quality bar) and the craft ladder
The engine now applies this automatically to every shot: volume shading on round shapes and character bodies, contact shadows under toon()/man() characters, bloom, a warm key light with cool shadows, floating dust, a slow push-in camera with a punch + whip-blur on every cut, and karaoke captions (the spoken word pops in yellow). Set `NOFX=1` inside a shot to skip the light pass (e.g. full-screen phone UI), `VOL=0` to skip shading, `{noshadow:1}` on a floating/cropped character.
Use the helpers in `pipeline/common/look2.js` in EVERY video, at least 4 of them: `rays()` god rays, `glow()` light sources and the Memopai notification, `bokeh()` background lights, `hills()` parallax layers (2–3 per outdoor shot), `haze()` depth, `sparkles()`, `confetti()`, `impact()` frames on punchlines, `squash()` for landings and pops, `gshadow()` for props.
Composition rules: every shot has 3 depth layers (background, midground, characters) and one clear light source; no flat single-colour backgrounds; characters fill 35–60% of frame height; at least one close-up and one wide shot; keep faces and key action out of the caption zone (y 1400–1650).
**Craft ladder (every run):** add ONE reusable visual upgrade to `look2.js` or `toonlib.js` and use it in this video (a new character part, prop, background kit, transition, lighting trick, animation principle such as anticipation or follow-through). Check it in the preview sheet, and only after the full render succeeds commit it with the video so the next run inherits it. Never break existing function signatures. List what you added in `daily/learnings.md` section 4.

## 3. Build
```bash
P=~/vid/<slug>; mkdir -p $P && cp ~/jg/pipeline/assets/*.png $P/
# write $P/script.py (S list like examples), $P/scenes.js, $P/cues.py
cd $P && python3 ../common/vo_core.py         # -> vo.wav, timeline.json (check TOTAL 26–32 s)
bash ../common/build.sh $P 1 4 8 12 16 20 24   # -> story.html + sheet.jpg preview contact sheet. LOOK at it; fix and repeat
python3 ../common/score_core.py                # -> mix.wav (music + sfx, voice ducking)
node render.js                                 # -> s_a..s_d.mp4 (about 2 min)
bash ~/jg/pipeline/finish.sh $P <cover_t> "LINE ONE" "LINE TWO" "pill subtitle" "#ffd23f" $P/final.mp4
```
- Cover: pick `cover_t` at a clean, character-heavy frame. LINE ONE + LINE TWO is the hook (short, ALL CAPS). The cover becomes frame 1 of the video, which is the thumbnail.
- QA: `ffmpeg -i final.mp4 -vf "fps=2,scale=120:213,tile=12x9" -frames:v 1 qa.jpg`. Look at every tile for overlaps, cut-off text, faces under captions or blank shots. Fix before publishing.

## 4. Host + publish
```bash
D=daily/$(TZ=Europe/Zagreb date +%F); mkdir -p ~/jg/$D
cp $P/final.mp4 ~/jg/$D/<HHMM>_<Slug>.mp4
cd ~/jg && git add $D && git commit -m "Daily video <slot>: <title>" && git push   # rebase-pull and retry on conflict
curl -sI https://raw.githubusercontent.com/RoboNixer/jureglavas/memopai-media/$D/<file>.mp4 | head -1   # must be 200
```
Buffer (organization "Memopai", id `6af20c415819f36cb2c5beef`), one `create_post` per channel:
- TikTok `6af20f6d62b70b94b0d3b4c1`: metadata `{tiktok:{title:"<short hook + emoji>"}}`
- Instagram `6af20e7c62b70b94b0d3a965`: metadata `{instagram:{type:"reel", shouldShareToFeed:true}}`
- Facebook `6af20d1762b70b94b0d3928c`: metadata `{facebook:{type:"reel"}}`
- All three: `schedulingType:"automatic"`, asset `{video:{url:<raw URL>, metadata:{thumbnailOffset:0, title:"<title>"}}}`.
- Timing: if the slot time (e.g. 14:00 Europe/Zagreb) is still ≥3 min in the future, use `mode:"customScheduled"` with `dueAt` = slot time with the correct Zagreb offset (+01:00 in winter, +02:00 in summer). Otherwise use `mode:"shareNow"`.
- Caption: hook line + the fun fact in 1–2 lines + one natural Memopai line ("Memopai reminds you (and anyone you want) on WhatsApp 👉 memopai.com") + 4–6 relevant hashtags incl. #memopai #funfacts.

## 5. Log it (always, even if publishing partly failed)
Append to `daily/topics_log.md`: `- <date> | <HH:00> | <title> | <core fact/premise> | <file>` then commit + push.
Verify the posts with Buffer `list_posts` (status scheduled/sending/sent, error null). Report the title, the three post statuses and anything that failed.
