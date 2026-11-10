import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
d, l1, l2, l3, col = sys.argv[1:6]
im = Image.open(f'{d}/cover_raw.png').convert('RGB')
ov = Image.new('RGBA', im.size, (0,0,0,0)); dr = ImageDraw.Draw(ov)
for y in range(0, 900):
    a = int(200 * (1 - y/900) ** 1.3); dr.line([(0,y),(1080,y)], fill=(0,0,0,a))
im = Image.alpha_composite(im.convert('RGBA'), ov)
D = ImageDraw.Draw(im); F = '/usr/share/fonts/opentype/inter/Inter-Black.otf'
def big(text, y, size, fill):
    f = ImageFont.truetype(F, size)
    while D.textlength(text, font=f) > 1000: size -= 4; f = ImageFont.truetype(F, size)
    w = D.textlength(text, font=f); D.text(((1080-w)/2, y), text, font=f, fill=fill, stroke_width=max(8,size//9), stroke_fill=(17,17,17))
    return y + size*1.08
y = big(l1, 300, 150, '#ffffff'); y = big(l2, y, 150, col)
f = ImageFont.truetype(F, 54); w = D.textlength(l3, font=f)
D.rounded_rectangle(((1080-w)/2-34, y+30, (1080+w)/2+34, y+30+90), 24, fill=(21,21,21))
D.text(((1080-w)/2, y+44), l3, font=f, fill='#ffe14d')
im.convert('RGB').save(f'{d}/cover.jpg', quality=93)
