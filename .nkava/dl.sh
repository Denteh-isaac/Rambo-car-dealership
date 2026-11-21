#!/bin/bash
# dl.sh <dir>  — reads <dir>/urls.txt ("name<space>url" per line), downloads, md5 dupe check
d="$1"
cd "$d" || exit 1
while read -r name url; do
  [ -z "$name" ] && continue
  curl -sL -o "$name.png" "$url"
done < urls.txt
echo "--- md5 ---"
md5 -r *.png | sort | awk '{c[$1]++; n[$1]=n[$1]" "$2} END {for (k in c) if (c[k]>1) print "DUPLICATE:", n[k]}'
ls *.png | wc -l | xargs echo "files:"
