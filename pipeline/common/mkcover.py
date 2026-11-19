import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
# SAFE ZONE 2026-11-19: cover text stays inside x 150..930 and y 430..820, so it survives the 3:4 profile-grid crop and the in-feed UI
d, l1, l2, l3, col = sys.argv[1:6]
im = Image.open(f'{d}/cover_raw.png').convert('RGB')
ov = Image.new('RGBA', im.size, (0,0,0,0)); dr = ImageDraw.Draw(ov)
for y in range(0, 1050):
    a = int(190 * (1 - abs(y-560)/560) ** 1.1) if y < 1050 else 0; dr.line([(0,y),(1080,y)], fill=(0,0,0,max(0,a)))
im = Image.alpha_composite(im.convert('RGBA'), ov)
D = ImageDraw.Draw(im); F = '/usr/share/fonts/opentype/inter/Inter-Black.otf'; MAXW = 780
def big(text, y, size, fill):
    f = ImageFont.truetype(F, size)
    while D.textlength(text, font=f) > MAXW: size -= 4; f = ImageFont.truetype(F, size)
    w = D.textlength(text, font=f); D.text(((1080-w)/2, y), text, font=f, fill=fill, stroke_width=max(7,size//9), stroke_fill=(17,17,17))
    return y + size*1.12
y = big(l1, 440, 124, '#ffffff'); y = big(l2, y, 124, col)
size = 46; f = ImageFont.truetype(F, size)
while D.textlength(l3, font=f) > MAXW-70: size -= 2; f = ImageFont.truetype(F, size)
w = D.textlength(l3, font=f)
D.rounded_rectangle(((1080-w)/2-32, y+26, (1080+w)/2+32, y+26+size*1.7), 22, fill=(21,21,21))
D.text(((1080-w)/2, y+26+size*.22), l3, font=f, fill='#ffe14d')
im.convert('RGB').save(f'{d}/cover.jpg', quality=93)
