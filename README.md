# TypeScript Resume Generator

A modern, type-safe resume generation system built with TypeScript that allows you to easily customize your resume for different job types and requirements.

### Installation

```bash
# Install dependencies
bun install

# Build TypeScript files (automatically runs after install)
bun run build
```

### Generate Resumes

```bash
bun generate
```

### Anthropic / Frontier Red Team Resume

```bash
# Generate HTML, JSON, and a two-page PDF (requires Typst)
bun run generate:anthropic
```

Outputs:
- `resumes/resume-anthropic.html`
- `resumes/resume-anthropic.json`
- `typst/pdfs/resume-anthropic.pdf`

Resume content lives in TypeScript, not in the PDF template:

- `src/experienceData.ts`: reusable work experience, projects, contributions, and skills.
- `src/config.ts`: selections, ordering, and wording tailored to each opportunity.
- `typst/template.typ`: shared PDF layout, consuming the JSON config export.
- `typst/resume-anthropic.typ`: thin entry point loading the Anthropic JSON export.

### Reuse the Portfolio for Another Role

Import named entries from `src/experienceData.ts` into a new `ResumeConfig` in
`src/config.ts`, then register it in `configs`. Existing configurations demonstrate
selection and object-spread overrides for shorter, role-specific descriptions.

New reusable projects include:

| Area | Exports |
| --- | --- |
| Systems and developer tools | `ArgosProject`, `NixInfrastructureProject`, `IntentProject`, `WtmuxProject` |
| Infrastructure and APIs | `StarknetValidatorProject`, `AssetRegistryProject`, `TranscriptAPIProject` |
| AI and applied cryptography | `ZKGenomicsProofsProject`, `ZKGenomicsBackendProject`, `EternumDiplomatProject`, `NPCChatbotProject` |
| Smart contracts and security | `EthernautSecurityProject`, `ETHChicagoContractsProject`, `PolygonIDProject`, `PolygonArbitrageProject` |
| Additional prototypes and patches | `ZcashTransactionProject`, `SynpressCompatibilityProject`, `ChutesDeploymentProject`, `BahSheepleRustProject` |
| Upstream contributions | `KakarotOpenSourceExperience`, `MadaraOpenSourceExperience`, `OpenCodeOpenSourceExperience`, `ElizaOpenSourceExperience` |
| Systems-focused employment | `GFXLabsSystemsWorkExperience`, `NakamotoSystemsWorkExperience`, `TholosSystemsWorkExperience`, `SuffixLabsEngineeringWorkExperience`, `MSCSystemsWorkExperience` |

Prototype and unmerged-contribution labels are part of the shared records. Preserve
those qualifications when tailoring. Evidence links and review notes are in
`github-skills-audit.md`.

GFX Labs bullets can also be selected individually from
`GFXLabsEngineeringHighlights`. Backend, security, streaming, agent-tooling, and
simulation evidence is documented in `gfx-experience-audit.md`.

```bash
bun run build
bun dist/src/cli.js generate anthropic --no-build
bun dist/src/cli.js generate anthropic --no-build --format json
typst compile --root . typst/resume-anthropic.typ typst/pdfs/resume-anthropic.pdf
```

For another config, export its JSON and create a matching Typst entry point:

```typst
#import "template.typ": resume
#resume(json("../resumes/resume-your-role.json"))
```

Use `--root .` when compiling from the repository root so Typst can read the JSON
under `resumes/`. Optional `pageBreakBefore` in a config controls section breaks;
the template keeps individual entries together. Review the resulting page count
after selecting content for a new role.

Set `showEntryTools: false` to omit repeated per-entry tool lists in HTML and PDF
while retaining the selected skills summary.

The PDF template uses Liberation Sans. `nix develop` supplies its font path;
outside the Nix shell, install Liberation Sans or set `TYPST_FONT_PATHS` to its
font directory. Layout rationale and current ATS guidance are documented in
`resume-layout-notes.md`.
