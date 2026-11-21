import sys, glob, os
from PIL import Image
def lum(c):
    def f(v):
        v/=255
        return v/12.92 if v<=0.03928 else ((v+0.055)/1.055)**2.4
    r,g,b=c[:3]
    return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b)
INK=lum((0x1e,0x4a,0x3a))
BANDS=[("hero",200,400),("ref",430,470),("label",650,685),("decl",740,930)]
d=sys.argv[1]
files=sorted(f for f in glob.glob(os.path.join(d,"*.png")) if "sheet" not in f)
print(f"{'file':<10}{'topInk':>8}{'heroCx':>9}{'minContrast':>13}")
bad=0
for fn in files:
    im=Image.open(fn).convert("RGB"); W,H=im.size; px=im.load()
    sy=H/1350; sx=W/1080
    top=None
    for y in range(int(120*sy), int(430*sy)):
        if any(sum(px[x,y])/3 < 150 for x in range(0,W,3)):
            top=int(y/sy); break
    cols=[]
    for x in range(W):
        if any(sum(px[x,y])/3 < 150 for y in range(int(200*sy),int(400*sy),2)): cols.append(x)
    cx = (cols[0]+cols[-1])/2/sx if cols else float('nan')
    worst=99
    for _,y0,y1 in BANDS:
        dark=[]
        for y in range(int(y0*sy),int(y1*sy),2):
            for x in range(0,W,4):
                c=px[x,y]
                # skip the type itself: anything near the forest-green ink
                if abs(c[0]-0x1e)+abs(c[1]-0x4a)+abs(c[2]-0x3a) < 120: continue
                dark.append(lum(c))
        if not dark: continue
        dark.sort()
        bg=dark[max(0,int(len(dark)*0.05))]
        c=(max(bg,INK)+0.05)/(min(bg,INK)+0.05)
        worst=min(worst,c)
    flag=""
    if abs(cx-540)>6: flag+=" CENTRE!"
    if worst<3.0: flag+=" CONTRAST!"
    if flag: bad+=1
    print(f"{os.path.basename(fn):<10}{top:>8}{cx:>9.1f}{worst:>13.2f}{flag}")
print(f"cards with issues: {bad} of {len(files)}")
