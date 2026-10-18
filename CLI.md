# Resume Generator CLI Documentation

## Overview

The Resume Generator CLI is a TypeScript-based command-line tool for creating tailored resumes from structured data. It provides a modern, type-safe approach to resume generation with support for multiple output formats and development workflows.

## Installation

### Local Installation

```bash
# Clone or navigate to the project
cd resume

# Install dependencies
npm install

# Make CLI executable
chmod +x resume-gen
```

### Global Installation

```bash
# Install globally (optional)
npm run install-global

# Use from anywhere
resume-gen --help
```

## Basic Usage

```bash
# Show help
./resume-gen --help

# Generate a specific resume
./resume-gen generate <type>

# Generate all resumes
./resume-gen all

# List available types
./resume-gen list
```

## Commands

### `generate` / `gen`

Generate a specific resume type.

**Syntax:**
```bash
./resume-gen generate <type> [options]
./resume-gen gen <type> [options]
```

**Arguments:**
- `<type>` - Resume type to generate (required)

**Options:**
- `-o, --output <dir>` - Output directory (default: `resumes`)
- `--no-build` - Skip TypeScript build step
- `-f, --format <format>` - `html` (default) or `json`; JSON exports the selected config for the shared Typst renderer

**Examples:**
```bash
# Generate blockchain resume
./resume-gen generate blockchain

# Generate with custom output directory
./resume-gen generate ai-ml --output ./output

# Generate without building (use existing compiled files)
./resume-gen gen mobile --no-build

# Export the Anthropic selection for PDF generation
bun dist/src/cli.js generate anthropic --no-build --format json
```

### `all`

Generate all available resume types.

**Syntax:**
```bash
./resume-gen all [options]
```

**Options:**
- `-o, --output <dir>` - Output directory (default: `resumes`)
- `--no-build` - Skip TypeScript build step

**Examples:**
```bash
# Generate all resumes
./resume-gen all

# Generate all with custom output
./resume-gen all --output ./all-resumes

# Generate all without building
./resume-gen all --no-build
```

### `list` / `ls`

List all available resume types.

**Syntax:**
```bash
./resume-gen list
./resume-gen ls
```

**Example Output:**
```
📋 Available Resume Types:

● blockchain
● ai-ml
● mobile
● full-stack
● suffix-labs

Total: 5 resume types available
Usage: resume-gen generate <type>
```

### `dev`

Start development server with file watching and hot reloading.

**Syntax:**
```bash
./resume-gen dev [options]
```

**Options:**
- `-p, --port <port>` - Server port (default: `3000`)
- `--no-build` - Skip initial TypeScript build

**Examples:**
```bash
# Start development server
./resume-gen dev

# Start on custom port
./resume-gen dev --port 8080

# Start without initial build
./resume-gen dev --no-build
```

**Features:**
- Automatic TypeScript compilation watch mode
- Browser-sync integration
- Hot reloading for HTML, CSS, and JS changes
- File change detection

### `info`

Show project information and current status.

**Syntax:**
```bash
./resume-gen info
```

**Example Output:**
```
ℹ️  Resume Generator Information

Project: resume-generator
Version: 1.0.0
Description: TypeScript-based resume generator with configurable templates

Available Resume Types: 5
  - blockchain
  - ai-ml
  - mobile
  - full-stack
  - suffix-labs

Build Status: ✓ Built
Output Directory: ✓ Exists
Generated Resumes: 3
  - resume-blockchain.html
  - resume-ai-ml.html
  - resume-mobile.html
```

### `clean`

Clean generated files and build output.

**Syntax:**
```bash
./resume-gen clean [options]
```

**Options:**
- `--build` - Clean build output (`dist/` directory)
- `--resumes` - Clean generated resume files
- `--all` - Clean everything (build + resumes)

**Examples:**
```bash
# Clean everything
./resume-gen clean --all

# Clean only build output
./resume-gen clean --build

# Clean only generated resumes
./resume-gen clean --resumes
```

## Resume Types

The following resume types are available:

| Type | Description | Focus Areas |
|------|-------------|-------------|
| `blockchain` | Blockchain Engineer | Solidity, Cairo, Web3, DeFi |
| `ai-ml` | AI/ML Engineer | PyTorch, Machine Learning, Research |
| `mobile` | Mobile Developer | React Native, iOS, Android |
| `full-stack` | Full-Stack Engineer | Frontend, Backend, System Design |
| `suffix-labs` | Consultant/Founder | Entrepreneurship, Consulting |

## File Structure

```
resume/
├── cli.ts                   # Main CLI implementation
├── generate-resume.ts       # Resume generation logic
├── types.ts                 # TypeScript type definitions
├── experience-data.ts       # Experience data exports
├── configs/                 # Resume configuration files
│   ├── index.ts            # Config exports
│   ├── blockchain.ts       # Blockchain resume config
│   ├── ai-ml.ts           # AI/ML resume config
│   ├── mobile.ts          # Mobile resume config
│   ├── full-stack.ts      # Full-stack resume config
│   └── suffix-labs.ts     # Consulting resume config
├── resume-gen             # CLI wrapper script
├── package.json          # Project configuration
├── tsconfig.json        # TypeScript configuration
├── dist/               # Compiled output (generated)
└── resumes/           # Generated HTML files (generated)
```

## Output

Generated resumes are HTML files with embedded CSS styling. Each resume includes:

- Personal information header
- Work experience section
- Open source experience section
- Project highlights section
- Education section
- Emphasized keywords and metrics

**Output Location:**
- Default: `./resumes/resume-<type>.html`
- Custom: Specified via `--output` option

**File Naming:**
- Format: `resume-<type>.html`
- Examples: `resume-blockchain.html`, `resume-ai-ml.html`

## NPM Scripts

Alternative ways to run CLI commands:

```bash
# Using npm scripts
npm run generate          # Build and show CLI help
npm run generate:all      # Build and generate all resumes
npm run list             # Build and list resume types
npm run info             # Build and show project info
npm run serve            # Build and start dev server
npm run clean            # Build and clean everything
npm run clean:build      # Clean build output only
npm run clean:resumes    # Build and clean resumes only

# Development scripts
npm run build            # Build TypeScript to JavaScript
npm run dev              # Start TypeScript watch mode
npm run type-check       # Type checking without compilation
```

## Environment Requirements

- **Node.js**: 16.0.0 or higher
- **npm**: Comes with Node.js
- **TypeScript**: Installed as dev dependency
- **Browser-sync**: Installed as dependency for dev server

## Troubleshooting

### Command Not Found

```bash
# Make sure the script is executable
chmod +x resume-gen

# Check if Node.js is installed
node --version
npm --version
```

### Build Errors

```bash
# Check TypeScript errors
npm run type-check

# Clean and rebuild
./resume-gen clean --build
npm run build

# Check project status
./resume-gen info
```

### Missing Dependencies

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Use a different port
./resume-gen dev --port 8080
```

### Resume Generation Fails

```bash
# Check available types
./resume-gen list

# Verify TypeScript compilation
npm run type-check

# Check project status
./resume-gen info

# Clean and regenerate
./resume-gen clean --all
./resume-gen generate <type>
```

## Development Workflow

### Making Changes

1. **Edit experience data**: Modify `experience-data.ts`
2. **Edit configs**: Update files in `configs/` directory
3. **Type check**: Run `npm run type-check`
4. **Test**: Generate resumes with `./resume-gen generate <type>`
5. **Dev mode**: Use `./resume-gen dev` for live reloading

### Adding New Resume Types

1. **Create config**: Add new file in `configs/` directory
2. **Export config**: Update `configs/index.ts`
3. **Test**: Run `./resume-gen list` to verify
4. **Generate**: Test with `./resume-gen generate <new-type>`

### Debugging

```bash
# Enable verbose output (if available)
DEBUG=* ./resume-gen generate blockchain

# Check generated JavaScript
cat dist/cli.js

# Verify config loading
node -e "console.log(require('./dist/configs/index.js'))"
```

## Examples

### Common Workflows

```bash
# Quick resume generation
./resume-gen gen blockchain

# Full development setup
npm install
./resume-gen dev

# Batch generation for job applications
./resume-gen all --output ./job-applications

# Clean slate regeneration
./resume-gen clean --all
./resume-gen all
```

### Integration with Other Tools

```bash
# Open generated resume in browser (macOS)
./resume-gen gen mobile && open resumes/resume-mobile.html

# Open generated resume in browser (Linux)
./resume-gen gen mobile && xdg-open resumes/resume-mobile.html

# Copy to deployment directory
./resume-gen all --output /var/www/html/resumes
```

## Advanced Usage

### Custom Output Processing

```bash
# Generate and process with other tools
./resume-gen gen blockchain --output ./temp
# ... process temp/resume-blockchain.html with other tools
```

### Automation Scripts

```bash
#!/bin/bash
# Auto-generate all resumes and open in browser
./resume-gen all
for file in resumes/*.html; do
    echo "Generated: $file"
done
```

## Support

For issues, feature requests, or contributions:

1. Check this documentation
2. Run `./resume-gen info` to check project status  
3. Use `./resume-gen --help` for command-specific help
4. Check TypeScript compilation with `npm run type-check`
