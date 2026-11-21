#!/usr/bin/env python3
"""seturls.py <dir> — reads an export-design JSON blob on stdin, writes <dir>/urls.txt
as "pNN <url>" lines so dl.sh can fetch the set."""
import json, os, re, sys
d = sys.argv[1]
os.makedirs(d, exist_ok=True)
blob = sys.stdin.read()
try:
    urls = json.loads(blob)["job"]["urls"]
except Exception:
    urls = re.findall(r'https://export-download\.canva\.com/\S+?(?=["\s,\]])', blob)
with open(os.path.join(d, "urls.txt"), "w") as f:
    for i, u in enumerate(urls, 1):
        f.write(f"p{i:02d} {u}\n")
print(f"{len(urls)} urls -> {d}/urls.txt")
