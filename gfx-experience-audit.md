# GFX Labs / Oku engineering experience

**Generator migration:** The named experience exports and engineering highlights now live in `typst/portfolio.typ`; Anthropic selection lives in `typst/configs.typ`. Historical `src/experienceData.ts` references below refer to the pre-migration source.

Reviewed October 17, 2026 using authenticated `gh` access to `gfx-labs` and `oku-trade`.

## Scope and attribution

- Inventoried 72 accessible GFX Labs repositories and 36 accessible Oku repositories.
- Reviewed authored PR listings: 7 in `gfx-labs`, 451 in `oku-trade`.
- Checked account-attributed commits on default branches across both organizations to identify work outside PR titles.
- Inspected selected merged PR descriptions, changed-file lists, and implementation diffs for substantive backend, reliability, security, simulation, and agent-tooling work.
- PR and commit counts are discovery aids, not resume impact metrics. Merge commits do not establish authorship of every underlying change.
- Some evidence links require organization access. Resume entries use role-level engineering summaries, not private source excerpts or operational details.

## Verified areas

| Area | Evidence | Supported resume claim |
| --- | --- | --- |
| Go perpetuals backend | [account #11](https://github.com/oku-trade/account/pull/11): ConnectRPC/protobuf API, Redis stream producer/consumer, fanout, Temporal order and reconciliation workflows | Built Go trading services, workflow orchestration, and market-data streaming |
| Transaction safety and recovery | [account #374](https://github.com/oku-trade/account/pull/374): setup progression, withdrawal recovery, replay handling, canonical/finalized settlement verification, integration tests | Hardened signed transaction/withdrawal flows and verified on-chain settlement |
| Account abstraction/signing | [account #152](https://github.com/oku-trade/account/pull/152): account modes, typed-data signing/verification, spot/perps transfers and tests | Implemented account-mode and signing integrations |
| Database concurrency | [account #367](https://github.com/oku-trade/account/pull/367): separate PostgreSQL advisory-lock namespaces, shared lock helper, integration-test updates | Resolved execution/ledger deadlock and maintained execution isolation |
| Authentication lifecycle | [retail #182](https://github.com/oku-trade/retail/pull/182): stale-work fencing, cancellation, verification-state lifecycle and regression tests | Fixed authentication races and session-handling failures |
| WebSocket reliability | [hyperproxy #1](https://github.com/gfx-labs/hyperproxy/pull/1), [#3](https://github.com/gfx-labs/hyperproxy/pull/3): capacity enforcement, provider priority/fallback, routing and tests | Implemented capacity-aware routing and provider failover |
| Coding-agent runtime diagnostics | [retail #142](https://github.com/oku-trade/retail/pull/142): dev-only event capture, allowlisted diagnostic projection, bounded event store, local collector, schema and persistence tests | Built runtime observability tooling for coding agents |
| EVM simulation | [canoe #79](https://github.com/oku-trade/canoe/pull/79): scaled-token storage/funding probes and caching; [#52](https://github.com/oku-trade/canoe/pull/52): Arbitrum gas pricing and fallback tests | Corrected scaled-balance token simulation and network-specific fee estimation |
| LLM development context | [trade #1291](https://github.com/oku-trade/trade/pull/1291): Storybook/Figma mapping script emitting JSON for LLM consumption | Built a design-to-code manifest generator for coding workflows |
| Delivery tooling | [miniapp #88](https://github.com/oku-trade/miniapp/pull/88), [oku-cli #1](https://github.com/oku-trade/oku-cli/pull/1) | Updated release/preview integration for automatic Kubernetes deployments and packaged a Go CLI with Nix |

## Scope checks

- The agent diagnostics implementation uses an allowlisted projection; its final code is more restrictive than the initial PR summary's generic description of secret-key redaction. Wording follows implementation.
- OpenTelemetry PR [account #363](https://github.com/oku-trade/account/pull/363) is a small dependency-injection wiring fix. It does not establish ownership of the whole tracing stack.
- Miniapp #88 integrates with existing automatic deployment infrastructure; it does not establish authorship of the deployment controller.
- Keep Hyperliquid trading-agent approvals distinct from LLM-agent development tooling.
- Do not extrapolate individual simulation benchmarks into platform-wide latency or reliability improvements.
- Merged code and regression-test source establish implementation work. They do not independently establish deployment to production, live financial validation, or the absence of remaining defects.

## Reusable resume representation

`src/experienceData.ts` exports `GFXLabsEngineeringHighlights`, a named set of independently selectable bullets. It includes backend, signing/recovery, concurrency, streaming, agent diagnostics, simulation, account abstraction, design-to-code tooling, delivery automation, the existing Plasma launch, mentorship, and design-system work.

- `GFXLabsWorkExperience` gives a broader full-stack overview.
- `GFXLabsSystemsWorkExperience` synthesizes the evidence into four themes: trading-backend development, financial correctness and recovery, cross-layer reliability, and coding-agent tooling.
- `anthropicConfig` uses the systems variant directly, avoiding a stale frontend-focused override.

Existing launch and mentorship claims come from the user's earlier resume material. New engineering claims are tied to the reviewed work above.
