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

## 1. Pick a topic that is NOT in `daily/topics_log.md`
- The category comes from the rotation in `daily/learnings.md`. Log entries must include it: `- <date> | <HH:00> | <CATEGORY> | <title> | <premise> | <file>`.
- `git pull` first, then read `daily/topics_log.md`. Never repeat a topic, fact, premise or punchline. Also avoid repeating the same *format* in back-to-back slots (alternate Officer Gary comedy / history fun fact / myth-buster / science-space / animal fact / "what if they had phones").
- Research with web search: what's trending/controversial right now, plus surprising, verifiable fun facts. Fact-check the core fact on 2+ sources. Phrase contested claims honestly ("allegedly", "according to…").
- The hook must be absurd or shocking in the first 2 s (e.g. "This cop arrested a goldfish." / "Napoleon lost… to bunnies.").
- No graphic violence, no real-person likenesses beyond generic toons, no copyrighted characters.

## 2. Story rules (what made the good ones work)
- 26–32 s total. Something changes every 1–2 s: new shot, stamp, tag, bubble, shake, flash.
- Voice: setup lines fast (speed 1.12–1.18), punchlines slower with a 0.1–0.3 s gap before them. Character voices (Gary `G`, kid/fish `K`, etc.), whisper `:w`, shout `:s` (see vo_core.py VO_D/LAB).
- Twist ending or new absurd escalation. No "follow for more", no CTA.
- **Memopai (every video, never an ad):** Memopai is a WhatsApp AI contact. A character messages it or gets a reminder from it. Show it reminding *yourself* or *someone else* (e.g. a wife reminds her husband; Gary sets a reminder for the suspect). Use the mascot (`pipeline/assets/mascot.png`) as the WhatsApp avatar. Write "Memo Pie" in TTS text; captions show "Memopai". No logo end card.

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
