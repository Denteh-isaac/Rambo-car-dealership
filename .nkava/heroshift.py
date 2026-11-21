#!/usr/bin/env python3
"""heroshift.py <ATTR> <new-left> — one position_element per page, all 20 at once.

The italic display word is optically centred per attribute (the metric box is not
the ink box). Build the set at the default left, measure card 1 with measure.py,
then run this to slide every page's heading onto the true centre.
"""
import json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
MAP = json.load(open(os.path.join(HERE, "pagemap.json")))
attr, left = sys.argv[1].upper(), float(sys.argv[2])
ops = [{"type": "position_element",
        "locator_id": f'{p["page"]}-{p["hero"]}', "left": left, "top": 208.12}
       for p in MAP[attr]]
print(json.dumps(ops, separators=(",", ":")))

hl = json.load(open(os.path.join(HERE, "heroleft.json")))
hl[attr] = left
json.dump(hl, open(os.path.join(HERE, "heroleft.json"), "w"), indent=1)
