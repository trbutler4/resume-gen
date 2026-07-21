# Resume Generator

Typst-based resume generator. One data source, multiple tailored resumes.

## Prerequisites

- [Typst](https://github.com/typst/typst)

Or use the Nix flake:

```bash
nix develop
```

## Usage

```bash
# Build all resumes
./build.sh
```

Output goes to `gen/resumes/`.

## Per-Application Tailoring

Copy `gen/typst/baseline.typ` to `gen/typst/company-role.typ`,
select/reorder jobs, and override specific bullets:

```typst
(..gfx_labs, responsibilities: (
  gfx_labs.responsibilities.at(0),
  "Custom second bullet tailored for this role...",
  gfx_labs.responsibilities.at(3),
))
```

Run `./build.sh` to generate all PDFs.
