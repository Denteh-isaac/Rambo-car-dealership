import sys, glob, os
from PIL import Image
d=sys.argv[1]; out=sys.argv[2] if len(sys.argv)>2 else os.path.join(d,"sheet.png")
files=sorted(f for f in glob.glob(os.path.join(d,"*.png")) if "sheet" not in f)
cols=5; tw=380; th=int(tw*1350/1080); pad=10
rows=(len(files)+cols-1)//cols
sheet=Image.new("RGB",(cols*(tw+pad)+pad, rows*(th+pad)+pad),(250,249,245))
for i,fn in enumerate(files):
    im=Image.open(fn).convert("RGB").resize((tw,th))
    sheet.paste(im, (pad+(i%cols)*(tw+pad), pad+(i//cols)*(th+pad)))
sheet.save(out); print(out, sheet.size)
