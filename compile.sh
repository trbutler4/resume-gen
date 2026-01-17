#!/bin/bash
# Compile all Typst resume files to PDF

set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Check if typst is installed
if ! command -v typst &> /dev/null; then
    echo -e "${RED}Error: typst is not installed${NC}"
    echo "Add typst to your flake.nix or install it manually"
    exit 1
fi

# Directory containing Typst files
TYPST_DIR="typst"
OUTPUT_DIR="typst/pdfs"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Check if there are any .typ resume files
shopt -s nullglob
RESUME_FILES=("$TYPST_DIR"/resume-*.typ)
shopt -u nullglob

if [ ${#RESUME_FILES[@]} -eq 0 ]; then
    echo -e "${YELLOW}No resume files found in $TYPST_DIR${NC}"
    echo "Run 'bun run generate -- all --typst' first to generate Typst files"
    exit 1
fi

echo "Compiling Typst resumes..."
echo

SUCCESS_COUNT=0
FAIL_COUNT=0

# Compile each resume file
for INPUT in "${RESUME_FILES[@]}"; do
    BASENAME=$(basename "$INPUT" .typ)
    OUTPUT="$OUTPUT_DIR/${BASENAME}.pdf"

    echo "Compiling $BASENAME..."
    if typst compile "$INPUT" "$OUTPUT" 2>/dev/null; then
        echo -e "${GREEN}✓ Successfully compiled ${BASENAME}.pdf${NC}"
        ((SUCCESS_COUNT++))
    else
        echo -e "${RED}✗ Failed to compile ${BASENAME}.pdf${NC}"
        ((FAIL_COUNT++))
    fi
done

echo
echo -e "${GREEN}Compiled: $SUCCESS_COUNT${NC}"
if [ $FAIL_COUNT -gt 0 ]; then
    echo -e "${RED}Failed: $FAIL_COUNT${NC}"
fi
echo "Output directory: $OUTPUT_DIR"
