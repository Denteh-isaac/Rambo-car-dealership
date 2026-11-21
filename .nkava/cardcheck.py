#!/usr/bin/env python3
"""inspect.py <png...>  — ink-band + logo geometry report for a declaration card.

Prints, per page: the ink bands (hero / reference / label / declaration), each
band's ink centre, and the Nkava sun-mark box with the wordmark variant.
Ground truth for a correct card (from the client's compiled deck, 2026-10-05):
    reference ink  y 442-456    cx 540+-6
    label ink      y 659-672    cx 540+-6
    sun mark       x 466-511, y 1223-1268
"""
import sys, collections
from PIL import Image

INK = (0x1e, 0x4a, 0x3a)


def isink(p, tol=120):
    return abs(p[0] - INK[0]) + abs(p[1] - INK[1]) + abs(p[2] - INK[2]) < tol


def bands(px, W, H, y0=0, y1=None, x0=0, x1=None):
    y1 = y1 if y1 is not None else H
    x1 = x1 if x1 is not None else W
    out, cur = [], None
    for y in range(y0, y1):
        xs = [x for x in range(x0, x1) if isink(px[x, y])]
        if xs:
            if cur is None:
                cur = [y, y, list(xs)]
            else:
                cur[1] = y
                cur[2] += xs
        elif cur:
            out.append(cur)
            cur = None
    if cur:
        out.append(cur)
    return out


def report(f):
    im = Image.open(f).convert("RGB")
    W, H = im.size
    px = im.load()
    print(f"\n=== {f}  {W}x{H} ===")
    # type sits above the painting; 0-960 is always clean of scene ink
    for yy0, yy1, xs in bands(px, W, H, 0, 960):
        if yy1 - yy0 < 2:
            continue
        print(f"   y {yy0:>4}-{yy1:<4} h{yy1-yy0+1:<4} x {min(xs):>4}-{max(xs):<4} "
              f"cx {(min(xs)+max(xs))/2:7.1f}  n={len(xs)}")
    sx, sy = [], []
    for y in range(1150, min(H, 1330)):
        for x in range(400, 700):
            r, g, b = px[x, y]
            if r > 215 and g > 140 and b < 90 and (r - b) > 150:
                sx.append(x)
                sy.append(y)
    if not sx:
        print("   SUN  *** MISSING ***")
        return
    print(f"   SUN  x {min(sx)}-{max(sx)}  y {min(sy)}-{max(sy)}")
    cnt = collections.Counter()
    for y in range(min(sy), max(sy) + 1):
        for x in range(max(sx) + 8, min(W, max(sx) + 150)):
            p = px[x, y]
            if max(p) - min(p) < 40:
                if sum(p) < 300:
                    cnt["dark"] += 1
                elif sum(p) > 690:
                    cnt["white"] += 1
    print(f"   WORDMARK {dict(cnt)}  -> {'WHITE' if cnt['white'] > cnt['dark'] else 'dark'}")


if __name__ == "__main__":
    for f in sys.argv[1:]:
        report(f)
