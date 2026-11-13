#!/bin/bash
# usage: build.sh <projdir> [times...]  -> builds story.html and contact sheet of preview frames
D=$1; shift; cd $D; cp ../common/render.js ../common/frames.js .
python3 -c "import json;s=open('../common/engine.html').read();lib=open('../common/toonlib.js').read()+open('../common/look2.js').read()+(open('../common/look3.js').read() if __import__('os').path.exists('../common/look3.js') else '');open('story.html','w').write(s.replace('/*TL*/',open('timeline.json').read()).replace('/*SCENES*/',lib+open('scenes.js').read()))"
if [ $# -gt 0 ]; then rm -f prev_*.jpg; node frames.js "$@"; python3 - "$@" <<'PY'
import sys;from PIL import Image
ts=sys.argv[1:];ims=[Image.open(f'prev_{float(t):g}.jpg').resize((270,480)) for t in ts]
cols=min(8,len(ims));rows=(len(ims)+cols-1)//cols;S=Image.new('RGB',(cols*270,rows*480))
for i,im in enumerate(ims):S.paste(im,((i%cols)*270,(i//cols)*480))
S.save('sheet.jpg')
PY
fi
