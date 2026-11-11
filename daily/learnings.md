# Memopai viral playbook — living document

Every run READS this first, then UPDATES it (sections 2–4) after checking the numbers. Keep it short and concrete: rules that change what the next video looks like. Delete rules that the data stops supporting.

## 1. Category rotation (fixed)
Rotate strictly, based on the last entry in `topics_log.md`: **STORY → FUN FACT → PRODUCTIVITY → STORY → …**
- **STORY**: a character with a problem, escalation, twist ending (Officer Gary comedy, "what if they had phones", mini-drama, mystery to solve). Emotion or laughter first.
- **FUN FACT**: one shocking, verified fact told as a cartoon (history, science, space, animals, myth-busting, psychology). Hook = the fact stated in its most absurd form.
- **PRODUCTIVITY**: a relatable everyday struggle or brain/psychology insight (forgetting, procrastination, Zeigarnik effect, 2-minute rule, why you forget why you walked into a room, the cost of a missed deadline), still told as a funny cartoon story with characters, never as advice bullet points. Memopai fits most naturally here, so keep it subtle.

## 2. Scoreboard (Instagram views; update each run with fresh numbers)
Snapshot 2026-11-11 00:20 Zagreb:
| Video | Category | IG views | Notes |
|---|---|---|---|
| Memopai.com (older reel) | — | 2,800 | avg watch 29 s, 49 likes, 4 shares |
| He arrested gravity, the sun AND the wind | story/Gary | 2,214 | avg watch 14 s |
| He arrested his shadow, his reflection | story/Gary | 2,180 | 41 likes |
| He arrested Karma | story/Gary | 1,866 | after ~4.5 h |
| He arrested the Big Bad Wolf, Pinocchio | story/Gary | 1,863 | |
| This cop arrested a goldfish | fact+Gary | 1,171 | after ~2.5 h |
| Napoleon lost to bunnies (v2) | fact/history | 605 | after ~2.5 h |
| The first strike in history | fact/history | 503 | |
| Pluto got fired | fact/space | 465 | after ~2.5 h |
| Napoleon vs 3,000 bunnies (v1) | fact/history | 274 | "TRUE STORY" cover |
| The army lost to emus | fact/history | 196 | "TRUE STORY" cover |
| Who stole the donut? | story/mystery | 190 | |
| This cop arrested Monday | story/Gary | 221 | avg watch 7 s (weak) |
| Autocorrect ruined Christmas (3 cases) | story/Dave | 2,165 | avg watch 19.8 s = best story retention |
| Officer Dave: Santa, GPS, sock | story/Dave | 306 | |
| Dave vs WiFi router, volcano | story/Dave | 305 | avg 13.9 s |
| Santa, Easter Bunny AND… | story/Gary | 264 | |
| Banana peel, tornado, bee | story | 212 | avg 9 s (weak) |

Snapshot 2026-11-11 08:27 Zagreb: the 2026-11-10 ~20:30 batch (Karma, donut, grandma, strike, emus, goldfish, Pluto, Napoleon v2) shows NO Instagram metrics in Buffer yet (null), TikTok 0 on all. Buffer IG metrics lag a lot; IG numbers above for those come from the 00:20 snapshot.
TikTok: stalker/shadow (Dave) got 118 views, the plain Memopai.com reel 825; everything else 0–80.
Snapshot 2026-11-11 09:25 Zagreb: still null IG metrics for the 2026-11-10 evening batch and the 09:00 Moon post (Buffer lag ~12 h+). New pattern spotted: on TikTok the older plain 'Memopai.com' product reels (Nov 8–9) got 700–950 views each, while every cartoon story since Nov 9 18:40 gets 0–120 → TikTok may be suppressing the account's newer uploads or the cartoon format; IG avg watch for winners 14–32 s.

Snapshot 2026-11-11 11:28 Zagreb: no change — IG metrics still null for every post since 2026-11-10 19:47 (Karma batch, Moon, Crow); TikTok 0 on all of them; FB 0. Nothing new to learn from numbers this run; the 3 morning winners (gravity 2,214 / shadow 2,180 / wolf 1,863, avg watch ~14–15 s) still define the playbook.

TikTok: almost no views on any post (0–32). Facebook: 0–3 impressions. Instagram is the only channel with reach so far.

## 3. What the data says so far (hypotheses, keep testing)
- "He/This cop arrested <impossible thing>" hooks win on Instagram (1.8k–2.2k) and beat plain history facts (200–600).
- A fact wrapped in a character story (goldfish, 1,171) beats the same kind of fact told as a history lesson.
- Covers with a bold absurd claim + character face beat "TRUE STORY" date-label covers.
- Average watch time is ~14 s on 30 s videos: the middle sags. Front-load, cut setup, put a second hook at ~8–10 s, and try 20–25 s lengths.
- Posting the same story twice (Napoleon) split views; never repeat.
- Winners (1.8k–2.2k) were all posted ~05:00 UTC (06:00 Zagreb) in one batch; same-format posts in other batches got 200–300. Posting hour/batch may matter as much as the hook. The new hourly slots will tell us.
- The two "single impossible arrest" hooks with a physical/natural target (gravity+sun, shadow) beat lists of holiday characters (Santa/Easter Bunny 264, Santa/GPS/sock 306). Prefer ONE iconic natural target over a list of three.
- Best avg watch among stories is 19.8 s (Autocorrect, multi-case) vs ~14 s typical: more mini-payoffs = better retention.
- TikTok: the plain product reels (700–950 views) beat every cartoon (0–120). Cartoon reach on TikTok collapsed right when batch-posting 5+ videos within minutes started (Nov 9 18:42) — spacing posts hourly may be what fixes it; watch the hourly slots.
- TikTok gets nothing: test TikTok-native elements (on-screen question in first frame, faster first cut, trending-topic hooks, 3–5 hashtags not 6) and note whether anything moves.

## 4. Experiments log (one line per run: what you changed on purpose, and later what happened)
- 2026-11-11 09:00 STORY "This cop arrested the Moon": EXPERIMENT = shorter cut (~23 s instead of 28–30) + explicit second hook at ~8 s ("Big mistake. The Moon got ONE phone call."), single iconic natural target (not a list). Craft ladder: added reusable `cruiser()` police car (toonlib.js) and `waves()` animated water (look2.js). Result: TBD (check IG views + avg watch vs ~14 s baseline).
- 2026-11-11 10:00 FUN FACT "This crow hated one cop for 17 years": EXPERIMENT = goldfish formula (real fact wrapped in a Gary story, best fact format so far) + an on-screen ESCALATING COUNTER as the spine (1 crow → 40 crows → 3 generations) to give a mini-payoff every ~5 s against the middle sag; 3–4 hashtags only + question-style TikTok title. Craft ladder: reusable `crow()` bird character in toonlib.js (flap with follow-through, scream/talk/squint/angry) + scene-level `cmask()`/`flock()`/`statue()`/`bakery()` in src_crow/scenes.js worth promoting later. Final length 29.5 s (fact needed the room; compare retention vs the 23.7 s Moon cut). Result: TBD.

- 2026-11-11 12:00 PRODUCTIVITY "This cop lost a fight to a door": EXPERIMENT = first PRODUCTIVITY video: a real psychology study (Notre Dame 'doorway effect', Radvansky 2011) wrapped in a Gary story with a SECOND-PERSON relatable hook ('…and science says you would too') + a loop-ish ending (the escaping raccoon walks through the door, forgets, and is back in custody: 'Doors. Undefeated.'). Planned a ~22 s cut but the fact explanation needed room: final 29.0 s (so length is NOT the variable here; the 2nd-person hook + productivity category is). Second hook at ~10 s (whispered 'It's real. Scientists call it the doorway effect.'). Craft ladder: reusable `door(x,y,s,{open,inside,sign,col,frame})` swinging-door prop in toonlib.js; scene-level `raccoon()` and `kitchen()` in src_door/scenes.js worth promoting. Result: TBD.

## 5. Standing rules for studying viral content
- 2026-11-11 12:00 research note: 2026 hook-engineering write-ups (dev.to 'Hook Engineering', opus.pro hook formulas) stress 'relatable pain in 2nd person' + 'pattern interrupt in frame 1' and payoffs every 3–5 s; the 'you've done this too' angle drives shares/sends, which is what PRODUCTIVITY videos should aim for.
- 2026-11-11 10:00 research note: 2026 hook guides (opus.pro 13.5M-clip study, revid, shortsintel) keep converging on: say the core keyword/claim in the first line, open on motion not a static title, curiosity gap resolved only at the end, and payoffs every few seconds; 'grudge/revenge' animal facts are an evergreen viral topic.
- 2026-11-11 research note: 2026 viral-shorts guides keep stressing loopable endings (last line points back to the first frame) to drive rewatches; the Moon video ends on "See you tonight, Gary" over the Moon to test this loosely.
- Each run, spend a few minutes on web search for what is going viral NOW: top AI-animated shorts, viral story formats, trending topics, hook formulas. Write down any new pattern in section 3.
- Borrow the *mechanics* (hook structure, pacing, twist shape, cover style, topic angle), then write an original script, original visuals and original jokes. Never copy another creator's script, characters, footage, audio or a copyrighted character; never use real people's likenesses.
- Every claim presented as fact must be verified on 2+ sources.
