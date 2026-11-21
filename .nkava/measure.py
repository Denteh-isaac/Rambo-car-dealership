import sys
from PIL import Image
im = Image.open(sys.argv[1]).convert("L")
W,H = im.size
top,bot = int(200*H/1350), int(400*H/1350)
px = im.load()
cols=[]
for x in range(W):
    ink=0
    for y in range(top,bot):
        if px[x,y] < 150: ink+=1
    cols.append(ink)
xs=[x for x,c in enumerate(cols) if c>0]
if not xs: print("no ink"); sys.exit()
l,r = xs[0], xs[-1]
centre = (l+r)/2 * 1080/W
print(f"image {W}x{H}  ink cols {l}..{r}  optical centre = {centre:.1f}  ->  new left = {40-(centre-540):.1f}")
