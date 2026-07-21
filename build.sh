#!/usr/bin/env bash
set -euo pipefail

mkdir -p gen/resumes

for f in typst/*.typ; do
  name=$(basename "$f" .typ)
  [ "$name" = "lib" ] || [ "$name" = "data" ] && continue
  typst compile --root . "$f" "gen/resumes/$name.pdf"
done
