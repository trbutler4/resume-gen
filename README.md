# Resume Generator

Native Typst resume generation with reusable portfolio data and per-role selections.

## Build

Install Typst and Liberation Sans, or enter the reproducible Nix shell:

```bash
nix develop
./build.sh                # Build all resume variants
./build.sh anthropic      # Build only the Anthropic resume
./build.sh baseline       # Build the incoming general-purpose baseline
```

PDFs are generated under `gen/resumes/`:

- `gen/resumes/resume-anthropic.pdf` — current two-page fellowship resume
- `gen/resumes/baseline.pdf` — general-purpose baseline
- `gen/resumes/resume-<variant>.pdf` — other tailored resumes

Available tailored variants: `anthropic`, `swe`, `ai`, `blockchain`, `fullStack`,
`mobile`, `suffixLabs`, `sre`, and `dragonfly`.

Open the fellowship PDF in a browser:

```bash
firefox gen/resumes/resume-anthropic.pdf
```

Build from another directory by calling this repository's `build.sh` by path.
Outside the Nix shell, install Liberation Sans or set `TYPST_FONT_PATHS` to its
font directory. No TypeScript compilation, Bun, or generated JSON is required.

## Sources

- `typst/portfolio.typ` — complete reusable portfolio: work, projects, open source,
  education, skills, and named engineering highlights.
- `typst/configs.typ` — role-specific selections and wording, including Anthropic.
- `typst/template.typ` — readable PDF layout, selective emphasis, and section breaks.
- `typst/resume-*.typ` — thin entry points selecting a config.
- `typst/data.typ`, `typst/lib.typ`, `typst/baseline.typ` — incoming baseline data,
  layout, and selection, preserved as a separate baseline variant.

The merge migration preserves all 60 former TypeScript portfolio exports and all
nine tailored configurations as native Typst data. The existing CamelCase export
names remain available so previous tailoring references are easy to find.
The baseline retains its incoming descriptions and dates; the Anthropic selection
retains the latest application-specific edits. Treat these as explicit variants
when updating shared facts.

## Tailor Another Resume

Import a config and portfolio entries, then override only the fields needed for
the application. Save an entry point as `typst/resume-company-role.typ`:

```typst
#import "template.typ": resume
#import "configs.typ": anthropicConfig
#import "portfolio.typ": ArgosProject, IntentProject

#resume((
  ..anthropicConfig,
  title: "Senior Software Engineer",
  projects: (ArgosProject, IntentProject),
))
```

Run `./build.sh company-role`, or build directly:

```bash
typst compile --root . typst/resume-company-role.typ gen/resumes/resume-company-role.pdf
```

Use `pageBreakBefore` to control section breaks and `showEntryTools: false` to omit
repeated tool lists. `emphasize.keywords` and `emphasize.metrics` control literal,
case-insensitive bolding. Keep prototype and unmerged-contribution qualifications
when selecting entries.

### Reusable Portfolio

| Area | Selected exports |
| --- | --- |
| Systems and developer tools | `ArgosProject`, `NixInfrastructureProject`, `IntentProject`, `WtmuxProject` |
| Infrastructure and APIs | `StarknetValidatorProject`, `AssetRegistryProject`, `TranscriptAPIProject` |
| AI and cryptography | `ZKGenomicsProofsProject`, `ZKGenomicsBackendProject`, `EternumDiplomatProject`, `NPCChatbotProject`, `AISmartContractVulnerabilityProject` |
| Smart contracts and security | `EthernautSecurityProject`, `ETHChicagoContractsProject`, `PolygonIDProject`, `PolygonArbitrageProject` |
| Additional prototypes and patches | `ZcashTransactionProject`, `SynpressCompatibilityProject`, `ChutesDeploymentProject`, `BahSheepleRustProject` |
| Upstream contributions | `KakarotOpenSourceExperience`, `MadaraOpenSourceExperience`, `OpenCodeOpenSourceExperience`, `ElizaOpenSourceExperience` |
| Employment variants | `GFXLabsSystemsWorkExperience`, `NakamotoSystemsWorkExperience`, `TholosSystemsWorkExperience`, `SuffixLabsEngineeringWorkExperience`, `MSCSystemsWorkExperience` |

`GFXLabsEngineeringHighlights` and `NakamotoEngineeringHighlights` provide individual
bullets for more focused tailoring. Evidence and layout rationale are documented in
`github-skills-audit.md`, `gfx-experience-audit.md`, and `resume-layout-notes.md`.

Generated PDFs are ignored by Git. Historical audit references to TypeScript/HTML
describe the pre-migration implementation; current sources are the Typst files above.
