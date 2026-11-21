#!/usr/bin/env python3
"""Pull the Nkava logo element ids out of a saved read-design result.

read-design responses are far too large to hold in context, so the harness
writes them to disk. This walks the JSON and prints, per page, the locator_id
of the logo rect — identified by its geometry (the 148.37-wide image rect that
insert_fill created), not by guessing element order.

  python3 logoids.py <saved-tool-result.txt>
"""
import json, re, sys

raw = open(sys.argv[1]).read()
start = raw.find('{"transaction"')
if start < 0:
    start = raw.find('{"design_metadata"')
if start < 0:
    start = raw.find('{')
doc = json.loads(raw[start:])

tx = doc.get("transaction", {}).get("transaction_id")
pages = doc["design_content"]["pages"]
idx = doc["design_content"].get("page_metadata", {}).get("returned_page_indices",
                 list(range(1, len(pages) + 1)))

out = []
for n, page in zip(idx, pages):
    logo = None
    for el in page["elements"]:
        if el.get("type") != "rect":
            continue
        if abs(el.get("width", 0) - 148.37) < 0.5 and abs(el.get("height", 0) - 62.12) < 0.5:
            logo = el
    if logo is None:
        print(f"  page {n}: NO LOGO FOUND", file=sys.stderr)
        continue
    out.append((n, logo["locator_id"], logo["top"], logo["fill"]["media"]["mediaId"]))

if tx:
    print("transaction:", tx)
for n, lid, top, media in out:
    print(f"{n:3}  top={top:<8}  {media}  {lid}")
print("\nops:", json.dumps([
    {"type": "position_element", "locator_id": lid, "left": 465.71, "top": 1223}
    for _, lid, _, _ in out]))
