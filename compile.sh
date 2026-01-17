#!/bin/bash
# Compile resume to PDF

set -e

if ! command -v typst &> /dev/null; then
    echo "Error: typst is not installed"
    exit 1
fi

mkdir -p typst/pdfs

echo "Compiling resume..."
typst compile typst/resume.typ typst/pdfs/resume.pdf

echo "Done: typst/pdfs/resume.pdf"
