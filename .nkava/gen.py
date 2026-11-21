#!/usr/bin/env python3
"""NKAVA declaration-card operation generator.

Rebuilt 2026-09-18 after the /tmp scratchpad was cleared. Lives in the project
on purpose — do not move it back to a temp directory.

  python3 gen.py <ATTRIBUTE> <card-number> [more numbers...]

prints one JSON operations array per card, ready to paste into edit-design.
Layout numbers are ground truth, read back off the delivered JOY set.
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
BANK = json.load(open(os.path.join(HERE, "bank-recovered.json")))
MAP = json.load(open(os.path.join(HERE, "pagemap.json")))
HEROLEFT = json.load(open(os.path.join(HERE, "heroleft.json")))
ROT = json.load(open(os.path.join(HERE, "rotations.json")))

INK = "#1e4a3a"

# Nkava logo lockup. Geometry is the client's own: left 465.71 / top 1223 on the
# 1080x1350 page, which renders the sun mark at x 466-511 / y 1223-1268.
LOGO = {"white": "MAHQ6TtFGfM", "dark": "MAHT8625FTc"}
LOGO_BOX = {"left": 465.71, "top": 1223, "width": 148.37, "height": 62.12}
SCENE_LOGO = json.load(open(os.path.join(HERE, "scene-logo.json")))

# What an UNBUILT shell page already contains (read off Purpose p5, 2026-10-05).
# Every shell was copied from one source, so all 20 pages start identical and
# anything matching this baseline needs no operation.
SHELL = {
    "sky": "MAHVK85AthQ",          # == scene A sky
    "band": "MAHVK6Yp6mg",         # == scene A band
    "band_box": (1080, 700, 0, 900),
    "hero_left": 40,
    "hairlines": (312, 684),
    "decl_top": 781.3,             # == decl_top(2)
}

# sky asset, band asset, band width/height/left/top
SCENES = {
    "A": ("MAHVK85AthQ", "MAHVK6Yp6mg", 1080, 700,  0,  900, "green ridges"),
    "B": ("MAHVK4vj9_M", "MAHVKwt_pio", 1080, 700,  0,  900, "sage ridges"),
    "C": ("MAHVK97sfE8", "MAHVKwI2EBk", 1080, 700,  0,  900, "green ridges 2"),
    "D": ("MAHVK7MiBeY", "MAHVK1tEG3w", 1080, 700,  0,  900, "sage mist"),
    "E": ("MAHVK4vj9_M", "MAHVK_CpaKI", 1080, 700,  0,  900, "golden hills"),
    "F": ("MAHVK85AthQ", "MAHVK0m-8q8", 1080, 700,  0,  900, "pale valley"),
    "G": ("MAHVLWnvigU", "MAHVLa1iUzA", 1080, 700,  0,  900, "ocean"),
    "H": ("MAHVLiNw8jM", "MAHVLlUPFx8",  956, 338, 62, 1012, "wildflowers"),
    "I": ("MAHVLjaC_EY", "MAHVLmtiLwE", 1080, 428,  0, 1046, "countryside"),
}


def decl_top(nlines):
    """42px / line-height 1.5, centre-anchored on y838."""
    h = 42 * 1.2 + (nlines - 1) * 42 * 1.5
    return round(838 - h / 2, 2)


def hairlines(ref):
    """Tier the hairlines so they never collide with a long reference."""
    n = len(ref)
    if n <= 13:
        return 312, 684
    if n <= 18:
        return 262, 734
    return 248, 748


def logo_op(attr, n, pid):
    """Only the dark-olive 'green ridges 2' scene needs the white wordmark."""
    variant = SCENE_LOGO[ROT[attr][n - 1]].lower()
    return {"type": "insert_fill", "page_id": pid, "asset_type": "image",
            "asset_id": LOGO[variant], "alt_text": "Nkava logo", **LOGO_BOX}


def card(attr, n, hero_left=None, full=False):
    """Operations to turn a pristine shell page into card `n` of `attr`.

    Every unbuilt shell page is an identical clone, so by default only the
    DELTAS from that baseline are emitted — roughly 10 operations instead of 23.
    Pass full=True for a page whose current state is unknown.
    """
    page = MAP[attr][n - 1]
    pid = page["page"]
    L = lambda k: pid + "-" + page[k]
    row = BANK[attr][n - 1]
    sky, band, bw, bh, bl, bt, _ = SCENES[ROT[attr][n - 1]]
    word = attr.title() if attr != "SELF-COMPASSION" else "Self-Compassion"
    left = HEROLEFT.get(attr, 40) if hero_left is None else hero_left
    hl, hr = hairlines(row["ref"])
    dtop = decl_top(len(row["lines"]))
    ops = []

    # --- painting -------------------------------------------------------
    if full or sky != SHELL["sky"]:
        ops.append({"type": "update_fill", "locator_id": pid, "asset_type": "image",
                    "asset_id": sky, "alt_text": "Soft watercolour painted sky wash"})
    moved = (bw, bh, bl, bt) != SHELL["band_box"]
    if full or moved:
        ops.append({"type": "resize_element", "locator_id": L("paint"),
                    "width": bw, "height": bh})
        ops.append({"type": "position_element", "locator_id": L("paint"),
                    "left": bl, "top": bt})
    # a resize leaves a stale crop, so the fill is re-applied whenever we moved it
    if full or moved or band != SHELL["band"]:
        ops.append({"type": "update_fill", "locator_id": L("paint"), "asset_type": "image",
                    "asset_id": band, "alt_text": "Watercolour painting along the lower edge"})

    # --- type -----------------------------------------------------------
    if full:   # the eyebrow is already empty on every shell page
        ops.append({"type": "replace_text", "locator_id": L("eyebrow"), "text": ""})
        ops.append({"type": "format_text", "locator_id": L("hero"), "formatting":
                    {"font_size": 150, "line_height": 1.2, "font_style": "italic"}})
        ops.append({"type": "resize_element", "locator_id": L("hero"), "width": 1000})
    ops.append({"type": "replace_text", "locator_id": L("hero"), "text": word})
    if full or left != SHELL["hero_left"]:
        ops.append({"type": "position_element", "locator_id": L("hero"),
                    "left": left, "top": 208.12})

    if full:
        ops.append({"type": "format_text", "locator_id": L("ref"),
                    "formatting": {"font_size": 21, "line_height": 1.4}})
    # always widened to 560 @ 260: a centred line looks identical and can never wrap
    ops.append({"type": "resize_element", "locator_id": L("ref"), "width": 560})
    ops.append({"type": "replace_text", "locator_id": L("ref"), "text": row["ref"]})
    ops.append({"type": "position_element", "locator_id": L("ref"), "left": 260, "top": 437.12})
    if full or (hl, hr) != SHELL["hairlines"]:
        ops.append({"type": "position_element", "locator_id": L("hl1"), "left": hl, "top": 448.12})
        ops.append({"type": "position_element", "locator_id": L("hl2"), "left": hr, "top": 448.12})

    if full:   # MY DECLARATION is already correct on every shell page
        ops.append({"type": "format_text", "locator_id": L("label"),
                    "formatting": {"font_size": 20, "line_height": 1.4}})
        ops.append({"type": "resize_element", "locator_id": L("label"), "width": 660})
        ops.append({"type": "replace_text", "locator_id": L("label"), "text": "MY DECLARATION"})
        ops.append({"type": "position_element", "locator_id": L("label"), "left": 210, "top": 655})
        ops.append({"type": "format_text", "locator_id": L("decl"),
                    "formatting": {"font_size": 42, "line_height": 1.5}})
        ops.append({"type": "resize_element", "locator_id": L("decl"), "width": 660})
    ops.append({"type": "replace_text", "locator_id": L("decl"),
                "text": "\n".join(row["lines"])})
    if full or dtop != SHELL["decl_top"]:
        ops.append({"type": "position_element", "locator_id": L("decl"),
                    "left": 210, "top": dtop})

    # the logo last: insert_fill is the only way to create an image element
    ops.append(logo_op(attr, n, pid))
    return ops


if __name__ == "__main__":
    args = sys.argv[1:]
    logo_only = "--logo" in args
    full = "--full" in args
    for f in ("--logo", "--full"):
        if f in args:
            args.remove(f)
    attr = args[0].upper()
    nums = [int(a) for a in args[1:]]
    if logo_only:
        # one array, one edit-design call: each op carries its own page_id
        print(json.dumps([logo_op(attr, n, MAP[attr][n - 1]["page"]) for n in nums],
                         ensure_ascii=False))
    else:
        for n in nums:
            print(f"### {attr} {n}  page_index={n}")
            print(json.dumps(card(attr, n, full=full), ensure_ascii=False))
