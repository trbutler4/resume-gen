# GitHub technical-skills audit

Reviewed October 17, 2026, for an engineering-focused Anthropic Fellows application with Frontier Red Team interest.

## Quantification update

- Zed's [Cairo marketplace page](https://zed.dev/extensions/cairo) reported **55,337 downloads** when checked on October 17, 2026. Resume uses **55,000+ downloads**. This replaces older conflicting user-count claims; downloads do not establish unique or active users.
- `~/nixos-config/flake.nix` defines seven distinct host configurations: air, yoga, desktop, lab, t14, gfxdesktop, and gfxmbp. The count excludes installer images, the alternate Air profile, and the commented-out VM. Resume says **7 Linux/macOS hosts** with declarative configurations, not seven independently verified running machines.
- **3 junior engineers mentored** comes from the existing GFX experience record. **15+ contributors**, **top 10% subnet performance**, and financial figures retain their original evidence basis; the Thomson Reuters savings figure remains explicitly projected.
- Selective emphasis follows the fellowship's Python, LLM/deep-learning, security-engineering, and open-source criteria. HTML and PDF use the same literal phrase/metric configuration.

## Second-pass discoveries: organization repos and non-default branches

**Employment attribution:** The user confirmed that BLTBY contract work was performed through Suffix Labs LLC. It is represented under `SuffixLabsEngineeringWorkExperience`, not as a standalone resume project. The repository links below remain evidence for that consulting work.

The second pass expanded beyond personal repository listings: public authored commit search across 2021–2026, public issues, branch enumeration across the 83 personal repositories, and the public repositories of Suffix Labs and ZKGenomics. Commit-search results include many copies of the same OpenCode/Eliza commits in downstream forks; those copies are not separate contributions. GitHub search is index-dependent and caps a query at 1,000 results (the December 2024 partition still exceeded that cap by two records). This review therefore does not assert complete coverage of every historical commit or unlinked author identity.

### New findings, ranked for this application

| Finding | Verified technical evidence | Resume value and scope |
| --- | --- | --- |
| ZKGenomics proof library | Account-authored Go work; gnark/Groth16 circuit compilation, witnesses, proof generation, serialization, and proof-data verification; VCF parsing | Strong new Go/applied-cryptography project. Describe as a prototype, not a validated privacy or biomedical system. |
| ZKGenomics backend | Account-authored agent-service changes; Go HTTP client for DigitalOcean's OpenAI-compatible chat endpoint, context cancellation/timeouts, proof-result context, PostgreSQL persistence and migrations | Additional AI/backend engineering beyond model fine-tuning. |
| Starknet validator manager | Kubernetes manifests for Pathfinder and two attestors, Prometheus alert expressions, Grafana dashboards, scheduled staking/Telegram reports | Strong infrastructure/observability evidence; Prometheus and Grafana were missing from skills. |
| BLTBY DAO contracts | Authored reentrancy fix moves membership state updates ahead of ERC721 `_safeMint`; checked-transfer changes; Foundry tests for upgrade state preservation and authorization | Stronger concrete smart-contract engineering than a generic CTF claim. No audit, CVE, bounty, or production-deployment claim established. |
| OpenCode | Merged PR #22851 adds `glob` dependency, updates Bun lockfile and Linux Nix dependency hash; related issue reports Nix build failure | Include a concise, accurately scoped upstream build-fix bullet. Other Prettier/Nix changes exist on personal branches; not established as merged upstream. |
| Synpress | Personal `fix/metamask-v13-onboarding` branch updates Playwright fixtures, MetaMask recovery-phrase flow, password selectors, and extension loading | Wallet E2E automation/debugging evidence. No matching merged upstream PR found. |
| Zcash transparent-to-Orchard tooling | Go PCZT/ZIP parsing and transaction code, CGO bridge to Rust Orchard APIs, test vectors and integration-test source | Interesting Go/Rust FFI prototype. README explicitly describes an experimental, AI-assisted hackathon project that may not work; do not market as a working production wallet library. |
| ETHChicago contracts | Solidity contract and deployment work, Foundry tests, NFT-owner scraping script, committed deployment artifacts | More contract engineering than the existing community/website summary conveyed. |
| Bah Sheeple Rust branch | `rust-rewrite` branch contains Actix Web/OAuth2 dependencies and account-authored authorization changes | Supporting Rust web/authentication prototype; inspect further before making detailed implementation claims. |
| Kakarot `mstore8_opcode` branch | Account-authored draft implementation work beyond the merged SHL changes | Additional exploratory VM work, but the merged SHL/bit-shift PRs remain stronger evidence. |

### Primary evidence links

- **ZKGenomics:** [proof library](https://github.com/ZKGenomics/zkgenomics-proofs), [dynamic proof implementation](https://github.com/ZKGenomics/zkgenomics-proofs/blob/main/proofs/dynamic_proof.go), [VCF prototype](https://github.com/ZKGenomics/vcf-proof-mvp), [Go agent service](https://github.com/suffix-labs/zkg-mvp-archive/blob/main/apps/api/internal/service/agent_service.go), [HTTP client](https://github.com/suffix-labs/zkg-mvp-archive/blob/main/apps/api/internal/service/digitalocean_client.go).
- **Validator operations:** [repository](https://github.com/suffix-labs/sn-vali-manager), [Prometheus alert rules](https://github.com/suffix-labs/sn-vali-manager/blob/main/k8s/prometheus-rules.yaml), [scheduled reporting](https://github.com/suffix-labs/sn-vali-manager/blob/main/k8s/telegram-daily-summary.yaml).
- **BLTBY:** [reentrancy fix](https://github.com/suffix-labs/bltby-contracts/commit/6ebdb7775b7c5eb467247f5185a28b582f9eca9e), [upgrade integration tests](https://github.com/suffix-labs/bltby-contracts/blob/main/test/UpgradeIntegration.t.sol).
- **OpenCode:** [merged PR #22851](https://github.com/anomalyco/opencode/pull/22851), [Nix build issue #22854](https://github.com/anomalyco/opencode/issues/22854), [personal Prettier branch](https://github.com/trbutler4/opencode/tree/fix/prettier).
- **Synpress:** [MetaMask v13 compatibility commit](https://github.com/trbutler4/synpress/commit/a2211ff4e5012fb18f6eb6b82c7bb8c4da7e7533).
- **Zcash:** [README and project status](https://github.com/suffix-labs/zcash-t2o), [Rust FFI](https://github.com/suffix-labs/zcash-t2o/blob/master/pkg/ffi/rust/src/lib.rs).
- **ETHChicago:** [contracts](https://github.com/ETHChicago/ethchi-contracts).
- **Other branches:** [Bah Sheeple Rust prototype](https://github.com/trbutler4/bah-sheeple/tree/rust-rewrite), [Kakarot MSTORE8 draft](https://github.com/trbutler4/kakarot-ssj/tree/mstore8_opcode), [Beerus Android port](https://github.com/suffix-labs/snphone-beerus/tree/android).

### Important scope distinctions from implementation review

- ZKGenomics' `DynamicCircuit` constrains equality of claimed and supplied values. It does not establish provenance of the underlying genome or bind a complete authenticated dataset. The file-based `Verify` method is simulated, while `VerifyProofData` calls `groth16.Verify`. This supports circuit/proof integration experience, not broad claims of proven genomic authenticity or clinical validity.
- The VCF prototype's repository description says homomorphic encryption; inspected code uses gnark/Groth16 zero-knowledge proofs. Prefer the technology demonstrated by source.
- OpenCode and Eliza contributions are small maintenance/documentation changes. Forking their code does not establish authorship of their agent harnesses.
- A closed issue is not proof that its author implemented the requested feature. Starknet Phone's issue history supports coordination/maintenance; use source and PRs for implementation claims.
- No account-attributed commits were found on the inspected branches of `suffix-labs/snphone-helios` or `ZKGenomics/appchain-lf-write-poc`; those projects are not credited as personal implementation work.

### Suggested additions for a future project-section revision

> Built Go prototypes for genomic-data proof generation with gnark/Groth16, including VCF parsing, circuit/witness construction, proof serialization, and proof-data verification; integrated a backend LLM API using contextual proof results.

> Built Kubernetes deployment and monitoring tooling for a Starknet full node and two validator services, with Prometheus alerts, Grafana dashboards, and scheduled operational reporting.

> Developed upgradeable Solidity contracts and Foundry tests for state preservation and access control; corrected a membership-minting reentrancy issue by updating state before external callbacks.

Prioritize these over the small Zcash experiment or additional UI projects. Argos and multi-machine Nix remain prominent. The shared-data Anthropic config now includes ZKGenomics, BLTBY, the small merged OpenCode fix, and validator monitoring evidence. Other audited projects and contributions are exported from `src/experienceData.ts` for future tailoring. HTML, JSON, and PDF are generated from the same config rather than separately maintained resume prose.

## Scope

- Inventoried all 83 public repositories returned for `trbutler4`, the account linked from the resume. `trbutler` is a different person.
- Scanned default-branch file trees for non-fork projects and checked account-attributed commit history in forks.
- Reviewed 135 public authored pull-request records, then inspected selected implementation files, manifests, notebooks, and PR diffs relevant to systems, AI, and blockchain engineering.
- This is a skills-evidence review, not an exhaustive review of every source line or a runtime validation. A fork or dependency alone does not establish authorship or proficiency.

## Highest-priority additions

### 1. Argos — LLM development infrastructure and Rust systems engineering

The user confirmed that Argos was built to work with LLMs. Its public implementation provides concrete evidence for the underlying engineering:

- Rust CLI/TUI development, with a shared session and VM model.
- Local NixOS microVM lifecycle management, task-specific repository workspaces, and per-VM port allocation.
- SSH session discovery and supervised interactive connections.
- Bounded concurrent discovery, cancellation, deadlines, and worker cleanup.
- Unix process groups, signals, nonblocking output capture, output limits, and child reaping.
- Nix packaging, GitHub Actions releases, and Python integration/acceptance test harnesses.

**Suggested resume bullets:**

> Built Argos, a Rust CLI/TUI for parallel LLM-assisted development, provisioning task-specific NixOS microVM workspaces and managing local and remote tmux sessions over SSH.

> Implemented cancellable concurrent discovery and subprocess supervision with deadlines, bounded output, and process-group cleanup; added Python integration tests and Nix-based packaging.

Position as development-environment orchestration. The public design shares host SSH credentials into guests; it does not establish a hardened sandbox for adversarial agents. Remote VM provisioning and cloud provisioning are explicitly unimplemented.

Evidence: [README](https://github.com/trbutler4/argos), [process supervision](https://github.com/trbutler4/argos/blob/main/src/process.rs), [concurrent discovery](https://github.com/trbutler4/argos/blob/main/src/discovery.rs), [tests](https://github.com/trbutler4/argos/tree/main/tests).

### 2. Kakarot contributions — EVM implementation, not only dApps

Two merged contributions are missing from the resume:

- Implemented the EVM `SHL` opcode in Cairo, including stack handling and tests for wrapping behavior and shifts of 256 bits.
- Split checked and wrapping bit-shift traits and added `felt252` wrapping-right-shift behavior and tests.

**Suggested bullet:**

> Contributed EVM opcode and arithmetic implementations to Kakarot's Cairo zkEVM, including SHL execution, checked/wrapping bit shifts, and boundary-case tests.

Evidence: [SHL implementation, merged PR #241](https://github.com/kkrt-labs/kakarot-ssj/pull/241), [bit-shift semantics, merged PR #344](https://github.com/kkrt-labs/kakarot-ssj/pull/344).

A smaller merged [Madara contribution](https://github.com/AbdelStark/madara/pull/1139) replaced placeholder VM-resource fee constants and updated affected tests. This supports protocol-code familiarity, but should not be presented as building the fee engine.

### 3. Intent and Cairo tooling — parsing and developer-tool architecture

- Intent implements Git diff inspection, a shared review engine, SQLite-backed reviewed-file state, and Rust AST traversal using Tree-sitter.
- The analysis code constructs a prototype graph from syntax nodes. Name resolution is approximate; describe it as AST-based code analysis or graph visualization, not a complete semantic/data-flow analyzer.
- Cairo grammar changes and corpus-test updates provide additional evidence beyond the existing Zed extension bullet.
- Intent's README lists a real model backend as future work. Its current implementation should be described as a code-review prototype, not a working AI reviewer.

**Skills to surface:** AST parsing, Tree-sitter grammar work, SQLite, developer-tool architecture, Rust CLI/TUI engineering.

Evidence: [Intent](https://github.com/trbutler4/intent), [AST implementation](https://github.com/trbutler4/intent/blob/main/src/analysis/ast.rs), [Cairo grammar/test change](https://github.com/trbutler4/tree-sitter-cairo/commit/fe76a8af).

### 4. Eternum Diplomat — LLM-agent integration and mock environments

The archived project uses Daydreams, Anthropic's API, and a mocked GraphQL game-state server. Account-attributed commits establish work on the diplomat context, character integration, basic agent-to-agent communication, and the mock server.

**Suggested bullet:**

> Prototyped LLM-driven game diplomats using Daydreams and Anthropic's API, with agent-to-agent greeting flows and a mocked GraphQL environment representing game state.

The repository includes Chroma/OpenAI embedding and agent-core code inherited from its framework base. Confirm personal implementation work before claiming authorship of the vector-memory system or agent framework. The inspected diplomat entry point demonstrates basic greetings, not autonomous negotiation or validated on-chain execution.

Evidence: [repository](https://github.com/trbutler4/realms-diplomat-archive), [diplomat entry point](https://github.com/trbutler4/realms-diplomat-archive/blob/main/src/diplomat/main.ts), [authored history](https://github.com/trbutler4/realms-diplomat-archive/commits/main/?author=trbutler4).

### 5. Security testing — make the existing claim concrete

`ethernaut_lab` contains reproducible Foundry tests for predictable block-based randomness and pre-Solidity-0.8 integer underflow. Tests use block advancement, account impersonation, and balance assertions.

**Suggested bullet:**

> Reproduced predictable-randomness and integer-underflow exploits in Ethernaut, using Foundry cheatcodes and assertions to verify attack outcomes.

Evidence: [CoinFlip test](https://github.com/trbutler4/ethernaut_lab/blob/main/coinFlip/test/CoinFlipAttack.t.sol), [Token test](https://github.com/trbutler4/ethernaut_lab/blob/main/token/test/Token.t.sol).

### 6. Backend engineering — API design and SQL

- `avalabs-takehome`: Node.js/Express backend, REST/OpenAPI, raw PostgreSQL queries, migrations, RPC integration, and rate limiting. Its README explicitly says tests and server-side caching are future work.
- `n8n-companion-api`: FastAPI, Pydantic request validation, async transcript retrieval, and downloadable responses.
- Chutes miner PR #18 proposes Python API/CLI deployment-management changes using async database access and HTTP calls. It was not merged when reviewed; label it a proposed contribution if included.

**Skills to surface:** SQL, REST API design, FastAPI, OpenAPI, asynchronous Python, database migrations.

Evidence: [Ava Labs project](https://github.com/trbutler4/avalabs-takehome), [FastAPI route](https://github.com/trbutler4/n8n-companion-api/blob/main/src/routes/transcript.py), [Chutes PR](https://github.com/chutesai/chutes-miner/pull/18).

## Secondary breadth

- **Android key storage:** a merged Starknet Phone PR implements key generation and AndroidX encrypted preferences with AES-GCM/SIV library APIs. Supports applied key-storage integration, not cryptographic primitive design. [PR #96](https://github.com/keep-starknet-strange/starknet-phone/pull/96).
- **Worktree orchestration and profiling:** `wtmux` implements Git worktree/tmux management and JSONL profiling. Useful supporting evidence; Argos is the stronger resume entry. [Repository](https://github.com/trbutler4/wtmux).
- **DeFi integrations:** `polygon_arbitrage` contains Aave flash-loan and DEX-router code, with unfinished/testing TODOs. Describe as a prototype. [Contract](https://github.com/trbutler4/polygon_arbitrage/blob/main/contracts/FlashLoanArbitrage.sol).
- **ZK identity integration:** HumanCore/Polygon ID and bit-benders work support credential-issuance integration. Vendored iden3 code does not establish original circuit implementation. [Project](https://github.com/trbutler4/humancore-zk-psychographics), [merged issuer PR](https://github.com/bit-benders/bit-benders-dashboard/pull/4).
- **Embedded programming:** AVR/C, serial communication, and microcontroller coursework support breadth, but rank below recent Rust systems projects for this application. [Project](https://github.com/trbutler4/Project_ES_S21).
- **ML coursework:** notebooks show Hugging Face Datasets, PyTorch/torchvision, bytecode feature engineering, and scikit-learn KMeans. The phase-two notebook has incomplete training/evaluation code, including commented-out backpropagation. Use coursework/prototype framing rather than claims of validated detection performance. [Notebook](https://github.com/trbutler4/AML_Project/blob/main/src/phase_2/main.ipynb).
- **Small upstream maintenance:** merged OpenCode dependency fix and Eliza documentation fix establish participation, but are weaker technical evidence than Kakarot and Argos. [OpenCode PR](https://github.com/anomalyco/opencode/pull/22851), [Eliza PR](https://github.com/elizaOS/eliza/pull/1350).

## Recommended resume changes

### Additional local evidence: Nix infrastructure

At the user's request, inspected `~/nixos-config/flake.nix`, host configuration, shared modules, development shells, and offline-installer definitions. These support multi-machine NixOS/nix-darwin management, shared Home Manager modules, reproducible development shells, a declarative k3s server, and custom offline installers containing prebuilt system closures. This is local configuration evidence; no public repository URL was established.

Argos's LLM-workflow purpose was confirmed directly by the user. Added Argos and multi-machine Nix infrastructure to the tailored resume, alongside Kakarot/Madara contributions and concrete Foundry exploit testing. Reframed the ML project as coursework/prototyping to match its public implementation.

### Prioritized findings

1. Give Argos a prominent project entry with two implementation-focused bullets.
2. Add Kakarot protocol contributions to open source, separate from the Kakarot Bridge hackathon project.
3. Replace the generic Ethernaut description with specific exploit/test evidence.
4. Add a compact developer-tools entry for Intent if space permits; otherwise expand the Cairo tooling bullet to include parsing/grammar work.
5. Add agent-integration experience through Eternum Diplomat, with prototype scope explicit.
6. Surface SQL, FastAPI/REST, NixOS microVMs, Unix process supervision, and AST parsing. Most missing signal is in engineering capabilities, not additional languages.
7. Make room by shortening additional community/consulting content and repeated per-role tool lists.

The tiny `evm` Go repository currently prints `Hello EVM`; it is not evidence of an implemented Go EVM. Use the merged Kakarot contributions as the stronger, verifiable VM evidence.
