# fleming_paper — first PAPER CUT-OUT stop-motion reel (2026-11-27 18:00 FUN FACT 2)
Kit: `pipeline/common/look6paper.js` (auto-loaded by build.sh). Pattern per shot:
`const q=pq(r),tq=pq(t);` → animate characters/props with q/tq (12 fps steps), keep `cam()` smooth,
wrap characters in `cutout(()=>sm(...),{d:10})`, add `tilt:pjit(r)` for hand-moved wobble, call `paperGrain()` last, then overlays (paperTag/label3/notif).
Sets: labBench() (1928 lab), kitchenP(t,{night}), paper stage (inline in scenes.js shot C). Props: petri, fridgeP, suitcase, medalP, dishStack/carton (scenes.js).
Note: 🥛 and 🧊 emoji render blank in Chromium here; avoid them in on-screen text.
Next paper run: new set (street, classroom, office) + a new character; never redo Fleming/penicillin.
