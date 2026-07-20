# Resume Generator

Typst-based resume generator. One data source, multiple tailored resumes.

## Prerequisites

- [Typst](https://github.com/typst/typst)
- [just](https://github.com/casey/just) (task runner)

Or use the Nix flake:

```bash
nix develop
```

## Usage

```bash
# Build baseline resume
just build baseline

# Build all resumes in resumes/
just all

# Clean generated PDFs
just clean
```

Per-application tailoring: copy `resumes/baseline.typ` to `resumes/company-role.typ`,
select/reorder jobs, and override specific bullets using the spread pattern:

```typst
(..gfx_labs, responsibilities: (
  gfx_labs.responsibilities.at(0),
  "Custom second bullet tailored for this role...",
  gfx_labs.responsibilities.at(3),
))
```

Output goes to `resumes/`.
