#!/bin/bash
# 3D build: build.sh + three.min.js script tag + swiftshader WebGL flags for frames.js/render.js
P=$1; shift; cd $P && cat lib3d.js scenes3d.js > scenes.js && bash ../common/build.sh $P >/dev/null
sed -i 's#<script>\nconst TL#&#; 0,/<script>/s##<script src="three.min.js"></script><script>#' story.html
for f in frames.js render.js; do sed -i "s#chromium.launch()#chromium.launch({args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']})#" $f; done
[ $# -gt 0 ] && SAFE=${SAFE:-1} bash -c "cd $P; node frames.js $* && python3 - $* <<'PY'
import sys,os;from PIL import Image,ImageDraw
def safe(im):
    im=im.convert('RGBA');ov=Image.new('RGBA',im.size,(0,0,0,0));d=ImageDraw.Draw(ov)
    for b in [(0,0,1080,270),(0,1640,1080,1920),(0,270,100,1640),(980,270,1080,1640),(900,950,980,1640)]:d.rectangle(b,fill=(255,40,40,95))
    return Image.alpha_composite(im,ov).convert('RGB')
ts=sys.argv[1:];ims=[(safe(Image.open(f'prev_{float(t):g}.jpg')) if os.environ.get('SAFE','1')!='0' else Image.open(f'prev_{float(t):g}.jpg')).resize((270,480)) for t in ts]
cols=min(8,len(ims));rows=(len(ims)+cols-1)//cols;S=Image.new('RGB',(cols*270,rows*480))
for i,im in enumerate(ims):S.paste(im,((i%cols)*270,(i//cols)*480))
S.save('sheet.jpg')
PY"
