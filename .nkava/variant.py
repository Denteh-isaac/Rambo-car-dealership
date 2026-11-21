#!/usr/bin/env python3
"""Decide the Nkava logo variant for each exported card.

Samples the painted background inside the logo lockup and picks the wordmark
with the better WCAG contrast. In practice only the dark-olive "green ridges 2"
scene comes out white; everything else takes the dark wordmark.

  python3 variant.py <dir-of-pNN.png>
"""
import glob, os, sys
from PIL import Image

# Sample the painting EITHER SIDE of the lockup, never inside it: a wordmark
# already placed there tints its own sample and flips the answer (hit 2026-10-05,
# where scene-C cards wrongly reported "dark" because of their own white logo).
BOX = (466, 1223, 614, 1284)
SIDES = (list(range(300, 460, 2)), list(range(620, 780, 2)))
WHITE_ID, DARK_ID = "MAHQ6TtFGfM", "MAHT8625FTc"


def lum(c):
    def f(v):
        v /= 255
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2])


def contrast(a, b):
    la, lb = lum(a), lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


out = []
for f in sorted(glob.glob(os.path.join(sys.argv[1], "p*.png"))):
    im = Image.open(f).convert("RGB")
    px = im.load()
    ps = [px[x, y] for y in range(BOX[1], BOX[3], 2) for x in SIDES[0] + SIDES[1]]
    k = len(ps)
    mean = (sum(p[0] for p in ps)//k, sum(p[1] for p in ps)//k, sum(p[2] for p in ps)//k)
    cd, cw = contrast(mean, (0x1c,)*3), contrast(mean, (0xff,)*3)
    v = "WHITE" if cw > cd else "dark"
    n = int(os.path.basename(f)[1:-4])
    out.append((n, v))
    print(f"card {n:2}  bg={str(mean):>16}  dark={cd:5.2f} white={cw:5.2f}  -> {v}")

print("\nwhite cards:", [n for n, v in out if v == "WHITE"])
print("asset ids  :", {n: (WHITE_ID if v == "WHITE" else DARK_ID) for n, v in out})
