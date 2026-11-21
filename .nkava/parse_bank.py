#!/usr/bin/env python3
"""Parse the NKAVA Scripture Declaration Bank google doc into bank rows.

  python3 parse_bank.py <gdoc.txt> validate       # check against bank-recovered.json
  python3 parse_bank.py <gdoc.txt> emit ATTR...   # print bank rows as JSON

The doc is 23 headings ("1. HOPE", "15. CONFIDENCE / SELF-EFFICACY"), each
followed by 20 pairs of
  "N. <declaration sentence>"
  "<Book chapter:verse>"

Written 2026-09-23. The doc itself is a Google Doc that exports cleanly over
plain HTTP — see the id in nkava-remaining-sixteen-sets memory. That export is
how the content lost with the /tmp wipe was recovered; do not assume it is gone.
"""
import itertools, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))

ART  = set("a an the".split())
CONJ = set("and or but nor yet so".split())
PREP = set("of to in on at for with from by as than through into over under about without before after".split())
SUB  = set("that when while if because".split())
AUX  = set("is am are was were be been being will would can could may might shall should have has had must".split())
DO   = set("do does did".split())
POSS = set("my your his her its their our".split())
PRON = set("i me you he she it we they them him us".split())
WEAK = ART | CONJ | PREP | SUB | AUX | DO | POSS | PRON

MAXW, MINL, MAXL = 31, 2, 3


def parse(path):
    t = open(path, encoding="utf-8-sig").read().replace("\r\n", "\n")
    lines = [l.strip() for l in t.split("\n")]
    heads = [(i, l) for i, l in enumerate(lines)
             if re.fullmatch(r"\d+\.\s+[A-Z][A-Z \-&'/]+", l)]
    out = {}
    for k, (idx, head) in enumerate(heads):
        name = head.split(".", 1)[1].strip()
        end = heads[k + 1][0] if k + 1 < len(heads) else len(lines)
        seg = [x for x in lines[idx + 1:end] if x and x != "_" * 16]
        rows, j = [], 0
        while j < len(seg):
            m = re.match(r"^(\d+)\.\s+(.*)$", seg[j])
            if not m:
                j += 1
                continue
            rows.append({"n": int(m.group(1)), "text": m.group(2).strip(),
                         "ref": seg[j + 1].strip() if j + 1 < len(seg) else ""})
            j += 2
        out[name] = rows
    return out


def norm_ref(ref):
    """Upper-case, en-dash ranges — matches the already-built cards."""
    return ref.upper().replace("-", "–").replace("—", "–")


def _parts(words, n):
    L = len(words)
    if n == 1:
        yield [words]
        return
    for cuts in itertools.combinations(range(1, L), n - 1):
        prev, out = 0, []
        for c in list(cuts) + [L]:
            out.append(words[prev:c])
            prev = c
        yield out


def wrap(text):
    """Balanced 2-3 line break, <=31 chars, avoiding weak line endings.

    Fitted 2026-09-23 against the 160 already-built cards: reproduces 144 of
    them exactly. The rest are coin-flips between two defensible breaks, so
    every generated set still gets read by eye before it is built.
    Ranking: fewest weak endings, then fewest lines, then tightest spread.
    """
    words = text.split()
    best = None
    for n in range(MINL, MAXL + 1):
        if n > len(words):
            break
        for ps in _parts(words, n):
            s = [" ".join(p) for p in ps]
            if any(len(x) > MAXW or not x for x in s):
                continue
            lens = [len(x) for x in s]
            weak = sum(1 for x in s[:-1]
                       if x.rstrip(",;:").split()[-1].lower().strip(",;:") in WEAK)
            sc = (weak, n, max(lens) - min(lens))
            if best is None or sc < best[0]:
                best = (sc, s)
    return best[1] if best else [text]


def rows_for(doc, attr):
    src = doc["CONFIDENCE / SELF-EFFICACY"] if attr == "CONFIDENCE" else doc[attr]
    return [{"n": r["n"], "ref": norm_ref(r["ref"]), "lines": wrap(r["text"])}
            for r in src]


if __name__ == "__main__":
    doc = parse(sys.argv[1])
    if sys.argv[2] == "validate":
        bank = json.load(open(os.path.join(HERE, "bank-recovered.json")))
        ok = bad = 0
        for attr, want_rows in bank.items():
            got_rows = rows_for(doc, attr)
            for want, got in zip(want_rows, got_rows):
                if got["ref"] == want["ref"] and got["lines"] == want["lines"]:
                    ok += 1
                else:
                    bad += 1
        print(f"{ok}/{ok + bad} rows reproduced exactly ({bad} differ)")
    else:
        print(json.dumps({a: rows_for(doc, a) for a in sys.argv[3:]},
                         ensure_ascii=False, indent=1))
