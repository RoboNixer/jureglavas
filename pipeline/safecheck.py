#!/usr/bin/env python3
# usage: safecheck.py <final.mp4> [out.jpg]  -> 8 evenly spaced frames with the TikTok/Instagram unsafe zones painted red.
# Rule (owner, 2026-11-19): nothing readable or important may touch red. Fix and re-render before publishing.
import sys,subprocess,os,tempfile
from PIL import Image,ImageDraw
src=sys.argv[1];out=sys.argv[2] if len(sys.argv)>2 else os.path.join(os.path.dirname(os.path.abspath(src)),'safe.jpg')
dur=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',src]).decode())
tmp=tempfile.mkdtemp();ims=[]
for i in range(8):
    t=0.0 if i==0 else dur*(i+.5)/8.5;f=f'{tmp}/{i}.jpg'
    subprocess.run(['ffmpeg','-y','-loglevel','error','-ss',f'{t:.2f}','-i',src,'-frames:v','1',f],check=True)
    im=Image.open(f).convert('RGBA');ov=Image.new('RGBA',im.size,(0,0,0,0));d=ImageDraw.Draw(ov)
    for box in [(0,0,1080,270),(0,1640,1080,1920),(0,270,100,1640),(980,270,1080,1640),(900,950,980,1640)]:d.rectangle(box,fill=(255,40,40,95))
    d.rectangle((100,270,980,1640),outline=(255,255,255,200),width=5)
    ims.append(Image.alpha_composite(im,ov).convert('RGB').resize((405,720)))
S=Image.new('RGB',(405*4,720*2))
for i,im in enumerate(ims):S.paste(im,((i%4)*405,(i//4)*720))
S.save(out,quality=88);print(out)
