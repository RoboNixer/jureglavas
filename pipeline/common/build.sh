#!/bin/bash
# usage: build.sh <projdir> [times...]  -> builds story.html and contact sheet of preview frames
D=$1; shift; cd $D; cp ../common/render.js ../common/frames.js .
python3 -c "import json;s=open('../common/engine.html').read();lib=open('../common/toonlib.js').read()+open('../common/look2.js').read()+(open('../common/look3.js').read() if __import__('os').path.exists('../common/look3.js') else '')+(open('../common/look4doc.js').read() if __import__('os').path.exists('../common/look4doc.js') else '')+(open('../common/look5ex.js').read() if __import__('os').path.exists('../common/look5ex.js') else '')+(open('../common/look6paper.js').read() if __import__('os').path.exists('../common/look6paper.js') else '');open('story.html','w').write(s.replace('/*TL*/',open('timeline.json').read()).replace('/*SCENES*/',lib+open('scenes.js').read()))"
if [ $# -gt 0 ]; then rm -f prev_*.jpg; node frames.js "$@"; python3 - "$@" <<'PY'
import sys;from PIL import Image
from PIL import ImageDraw
# SAFE ZONE overlay (owner 2026-11-19): red = covered or cropped by TikTok/Instagram. No text, face or key prop may sit in red.
def safe(im):
    im=im.convert('RGBA');ov=Image.new('RGBA',im.size,(0,0,0,0));d=ImageDraw.Draw(ov)
    for box in [(0,0,1080,270),(0,1640,1080,1920),(0,270,100,1640),(980,270,1080,1640),(900,950,980,1640)]:d.rectangle(box,fill=(255,40,40,95))
    d.rectangle((100,270,980,1640),outline=(255,255,255,200),width=5)
    return Image.alpha_composite(im,ov).convert('RGB')
import os
ts=sys.argv[1:];ims=[(safe(Image.open(f'prev_{float(t):g}.jpg')) if os.environ.get('SAFE','1')!='0' else Image.open(f'prev_{float(t):g}.jpg')).resize((270,480)) for t in ts]
cols=min(8,len(ims));rows=(len(ims)+cols-1)//cols;S=Image.new('RGB',(cols*270,rows*480))
for i,im in enumerate(ims):S.paste(im,((i%cols)*270,(i//cols)*480))
S.save('sheet.jpg')
PY
fi
