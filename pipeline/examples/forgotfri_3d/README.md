# forgotfri_3d: Forgot it Friday as a low-poly 3D AWARDS SHOW (2026-11-27 22:00)
Kit v2 on top of `ontime3d_3d`: `lib3d.js` (adds hair styles `pony` (with `tiec` scrunchie colour) and `slick`, `tux:1` tuxedo with bow tie) + NEW `stage3d.js` (concatenated by build3d.sh: `cat lib3d.js stage3d.js scenes3d.js`):
- set `stage` (x=400): velvet side curtains + centre curtains that slide open (`stageLife(t,open01)`), gold proscenium, marquee sign 'THE FORGETTING AWARDS' with blinking bulbs (change the label text for other shows), star backdrop, gold trophies, podium + mic, 3 rows of audience seats with a silhouette crowd; `spot(i,x,y,z,on)` aims 2 spotlights with visible additive beams.
- props: `TROPHY`, `POPCORN` (pin to a hand with `pinTo(obj,char,'R'|'L')`), washing machine in the flat (`WASHDOOR.rotation.y` opens it), parking `METER` (blinking EXPIRED) + parked purple car `PARKED` with a `TICKET` on the side window (street set).
- `orbitLabels(t,x,y,z,[...texts],rad)` = 3D sprite to-dos circling a head (the 'full head' metaphor), auto-hidden by begin3d.
- cast: `HOST` (tux, slick hair), `YOU` (ponytail woman, mustard jumper); `sitPose(c)` after `P()` seats anyone (use y:-.2 on audience seats).
Camera lesson: full body needs ~4.5-6 units distance at fov 38-40; 3 units = only the face. Render 33 s in ~4 min (4 chunks in parallel).
