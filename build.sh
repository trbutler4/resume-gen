#!/usr/bin/env bash
set -euo pipefail

root="$(dirname "${BASH_SOURCE[0]}")"
requested="${1:-}"
if [ "$#" -gt 1 ]; then
  printf 'Usage: %s [variant]\n' "$0" >&2
  exit 2
fi

mkdir -p "$root/gen/resumes"
matched=false
# Only entry points, never data/config/layout modules.
for f in "$root/typst/baseline.typ" "$root"/typst/resume-*.typ; do
  [ -f "$f" ] || continue
  name=$(basename "$f" .typ)
  if [ -n "$requested" ] && [ "$requested" != "$name" ] && [ "resume-$requested" != "$name" ]; then
    continue
  fi
  matched=true
  typst compile --root "$root" "$f" "$root/gen/resumes/$name.pdf"
  printf 'Generated: %s/gen/resumes/%s.pdf\n' "$root" "$name"
done

if [ "$matched" = false ]; then
  printf 'Unknown resume variant: %s\n' "$requested" >&2
  exit 2
fi
