import {
  WorkExperience,
  OpenSourceExperience,
  Project,
  PersonalInfo,
  Education,
  ProfessionalSummary,
  Skills,
} from "./types";

export const DefaultPersonalInfo: PersonalInfo = {
  name: "Thomas Robert Butler IV",
  title: "Senior Software Engineer",
  email: "trbiv@proton.me",
  github: "https://github.com/trbutler4",
  linkedin: "https://www.linkedin.com/in/thomas-butler-1a435018b/",
  onlydust: "https://app.onlydust.com/u/trbutler4",
};

export const UIowaEducation: Education = {
  id: "university-iowa",
  institution: "University of Iowa",
  degree: "BSE Computer Science and Engineering — Focus Area: Machine Learning",
};

export const AllSkills: Skills = {
  
 languages: [
    "Python",
    "C/C++",
    "Go",
    "Rust",
    "Java",
    "Kotlin",
    "Solidity",
    "Cairo",
    "Javascript/Typescript",
    "HTML",
    "Verilog",
    "x64 Assembly",
    "Bash",
    "SQL",
    "Nix",
  ],
  tools: [
    "Linux",
    "Git/Github",
    "AWS",
    "AWS Lambda",
    "AWS Step Functions",
    "AWS CloudFormation",
    "AWS CodePipeline",
    "React",
    "React Native",
    "Expo",
    "Native Wind",
    "NextJS",
    "Astro",
    "Hardhat",
    "Foundry",
    "Slither",
    "Postgres",
    "Firebase/Supabase",
    "Redis",
    "Docker",
    "Kubernetes",
    "PyTorch",
    "NumPy",
    "ThreeJS",
    "Starknet React",
    "Wagmi",
    "Chakra-UI",
    "TailwindCSS",
    "MaterialUI",
    "Tree-Sitter",
    "Language Server Protocol",
    "IPFS",
    "Android Studio",
    "NDK",
    "JNI",
    "Starkli",
    "Katana",
    "Dojo",
    "Cypress",
    "Synpress",
    "NixOS",
    "nix-darwin",
    "Home Manager",
    "K3s",
    "Prometheus",
    "Grafana",
    "FastAPI",
    "OpenAPI",
    "SQLite",
    "Playwright",
    "gnark",
    "Groth16",
    "CGO/FFI",
    "Anthropic API",
    "Temporal",
    "ConnectRPC",
    "Protocol Buffers",
    "Redis Streams",
    "WebSockets",
    "XState",
  ]
}

export const DefaultProfessionalSummary: ProfessionalSummary = {
  education: UIowaEducation,
  skills: AllSkills
};

// ---- Work Experience ----
// Select individual highlights when tailoring; evidence: gfx-experience-audit.md.
export const GFXLabsEngineeringHighlights = {
  tradingBackend: "Built Go services for Hyperliquid perpetuals trading with ConnectRPC APIs, Temporal order workflows, and Redis-backed market-data streaming.",
  transactionSafety: "Hardened signed transaction and withdrawal flows with replay protection, recovery handling, and on-chain settlement verification.",
  concurrency: "Resolved PostgreSQL advisory-lock deadlocks and authentication lifecycle races; added regression tests for execution isolation and session handling.",
  streaming: "Implemented WebSocket provider failover, priority-based routing, and subscription-capacity enforcement in a Go market-data proxy.",
  agentTooling: "Built runtime observability tooling for coding agents, exposing allowlisted diagnostics and bounded event snapshots through a local collector.",
  simulation: "Fixed EVM swap simulations for scaled-balance tokens and Arbitrum gas pricing, with state-override validation and regression tests.",
  accountAbstraction: "Added account-mode handling, typed-data signing and verification, and spot/perpetuals balance transfers to trading APIs.",
  agentDesignContext: "Built a Figma-to-code manifest generator that maps design nodes to components and Storybook stories for LLM consumption.",
  deliveryAutomation: "Updated miniapp release and preview workflows for automatic Kubernetes deployment and added Nix packaging for the trading CLI.",
  plasmaLaunch: "Built the trading interface for Plasma's $2.4B token launch, powered by Oku's DEX aggregator.",
  mentorship: "Established code review standards and mentored three junior engineers on architecture and implementation.",
  designSystem: "Led design system adoption across Oku products and integrated Storybook and visual review tooling into development workflows.",
};

export const GFXLabsWorkExperience: WorkExperience = {
  id: "gfx-senior",
  position: "Senior Software Engineer",
  company: "GFX Labs",
  duration: "September 2025 - Present",
  responsibilities: [
    GFXLabsEngineeringHighlights.tradingBackend,
    GFXLabsEngineeringHighlights.transactionSafety,
    GFXLabsEngineeringHighlights.streaming,
    GFXLabsEngineeringHighlights.agentTooling,
    GFXLabsEngineeringHighlights.plasmaLaunch,
    GFXLabsEngineeringHighlights.mentorship,
    GFXLabsEngineeringHighlights.designSystem,
  ],
  tools: [
    "Typescript",
    "React",
    "Vite",
    "Wagmi",
    "Viem",
    "Tanstack Router+Query",
    "Jotai",
    "Storybook",
    "Chromatic",
    "Golang",
    "Linux",
    "Kubernetes",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Git/Github",
    "Digital Ocean",
    "Temporal",
    "Nix",
    "ConnectRPC",
    "Protocol Buffers",
    "Redis Streams",
    "WebSockets",
    "React Native",
    "XState",
    "Prometheus",
    "Vitest",
  ],
};

export const GFXLabsDragonflyWorkExperience: WorkExperience = {
  id: "gfx-senior-dragonfly",
  position: "Senior Software Engineer",
  company: "GFX Labs",
  duration: "September 2025 - Present",
  responsibilities: [
    "Built and shipped the trading interface for Plasma's $2.4B token launch, gaining deep domain expertise in DEX aggregation, token launch mechanics, and DeFi market structure through Oku's meta aggregator platform.",
    "Operated within GFX Labs' portfolio of DeFi products spanning Uniswap governance tooling, on-chain trading infrastructure, and protocol analytics, developing strong pattern recognition for crypto product-market fit.",
    "Drove cross-functional product decisions across frontend and backend systems, evaluating technical tradeoffs and scoping greenfield projects from concept to production -- directly translating technical due diligence into shipped products.",
    "Mentored three junior engineers and led design system adoption across multiple products, demonstrating project management and interpersonal skills in a fast-paced, autonomous crypto-native environment.",
  ],
  tools: [
    "DeFi",
    "DEX Aggregation",
    "Uniswap",
    "Token Launches",
    "Typescript",
    "React",
    "Golang",
    "PostgreSQL",
    "Kubernetes",
    "Docker",
  ],
};

export const NakamotoEngineeringHighlights = {
  evaluation: "Investigated subnet evaluation weaknesses and exploited scoring flaws to win Bittensor subnet competitions.",
  inference: "Unified datacenter and cloud servers in a Kubernetes cluster for autoscaled AI inference; used USB-to-PCIe GPU connections to work around server-rack space constraints.",
};

export const NakamotoWorkExperience: WorkExperience = {
  id: "nakamoto-senior",
  position: "Senior Software Engineer",
  company: "Nakamoto LLC",
  duration: "January 2025 - June 2025",
  responsibilities: [
    "Lead team of two engineers to compete in Bittensor subnets.",
    "Fine-tuned tool calling LLMs, beating SOTA models on Berkley Function Calling Leaderboard, and achieving top 10% subnet performance.",
    NakamotoEngineeringHighlights.evaluation,
    NakamotoEngineeringHighlights.inference,
    "Engineered an advanced concurrent microservice architecture in Python and Golang that efficiently harvested and processed massive datasets from Reddit, Twitter, and Youtube, providing competitive edge in Bittensor subnet 13 (Data Universe).",
  ],
  tools: [
    "Python",
    "Golang",
    "Rust",
    "Linux",
    "Kubernetes",
    "Postgres",
    "Redis",
    "Docker",
    "Git/Github",
    "Huggingface",
    "AWS",
    "PyTorch",
    "NumPy",
    "Sglang",
    "Vllm",
    "AI Agents",
    "ElizaOS",
    "Daydreams",
  ],
};

export const NakamotoDragonflyWorkExperience: WorkExperience = {
  id: "nakamoto-senior-dragonfly",
  position: "Senior Software Engineer",
  company: "Nakamoto LLC",
  duration: "January 2025 - June 2025",
  responsibilities: [
    "Led a team competing in Bittensor subnets, developing deep expertise in crypto incentive mechanisms, tokenomics, and decentralized AI network economics.",
    "Built large-scale data harvesting and processing pipelines across Reddit, Twitter, and Youtube, developing skills in sourcing and analyzing alternative data relevant to crypto market research.",
    "Achieved top 10% subnet performance by fine-tuning LLMs against state-of-the-art benchmarks, demonstrating strong analytical skills and data-driven decision making in competitive crypto-native environments.",
  ],
  tools: [
    "Bittensor",
    "Tokenomics",
    "AI/ML",
    "Data Analysis",
    "Python",
    "Golang",
    "Kubernetes",
    "AWS",
  ],
};

export const TholosWorkExperience: WorkExperience = {
  id: "tholos-mobile",
  position: "Mobile Software Engineer",
  company: "Tholos",
  duration: "October 2023 - January 2025",
  responsibilities: [
    "Full ownership of both iOS and Android mobile applications for Tholos MPC Crypto Wallet, implemented in React Native and securing over $35 Million worth of digital assets.",
    "Worked across the entire stack, implementing complex and critical code across a multitude of systems, including websocket and aws secure enclave.",
    "Worked in a blockchain agnostic stack, supporting key management, signing, and web3 integration across numerous networks including Ethereum, the most popular EVM compatible blockchains and L2s (Polygon, Arbitrum, etc.), Bitcoin, Solana, and Cosmos ecosystem.",
    "Implemented fault-tolerant key backup and recovery mechanisms across distributed mobile devices, with redundant safeguards ensuring 100% key recovery even during network failures, device disconnects, or interrupted operations, guaranteeing secure and reliable key access in any scenario.",
  ],
  tools: [
    "React Native",
    "Native Wind",
    "Expo",
    "JavaScript/Typescript",
    "Bash",
    "Python",
    "Go",
    "Rust",
    "Postgres",
    "Redis",
    "AWS",
    "Docker",
    "Git/Github",
    "FastAPI",
  ],
};

export const TholosDragonflyWorkExperience: WorkExperience = {
  id: "tholos-mobile-dragonfly",
  position: "Software Engineer",
  company: "Tholos",
  duration: "October 2023 - January 2025",
  responsibilities: [
    "Owned the full product lifecycle for Tholos MPC Crypto Wallet securing over $35 Million in digital assets, gaining hands-on expertise in custody infrastructure, key management, and crypto security -- core due diligence areas for crypto venture investments.",
    "Developed deep cross-chain technical fluency across Ethereum, Bitcoin, Solana, Cosmos, and major L2s (Polygon, Arbitrum), building the breadth of protocol knowledge critical for evaluating multi-chain investment opportunities.",
    "Worked directly with founders in a small, fast-moving startup environment, autonomously driving product decisions and technical architecture across the full stack.",
  ],
  tools: [
    "MPC Wallets",
    "Key Management",
    "Ethereum",
    "Bitcoin",
    "Solana",
    "Cosmos",
    "L2s",
    "Crypto Security",
  ],
};

export const SuffixLabsClientEngineering = "Delivered client projects spanning Solidity smart contracts and React/TypeScript applications, collaborating with remote teams on implementation, testing, and integration.";

export const SuffixLabsWorkExperience: WorkExperience = {
  id: "suffix-labs-founder",
  position: "Founder",
  company: "Suffix Labs",
  duration: "July 2023 - Present",
  responsibilities: [
    "Founded Suffix Labs LLC to provide consulting and software development services.",
    "Consulted on and wrote software for various Web3/Smart Contract related projects.",
    SuffixLabsClientEngineering,
    "Worked asynchronously with multiple fully remote teams to build frontends for crypto lending platforms, services, and communities.",
    "Run two Starknet validators with over $500k in combined delegated stake.",
  ],
  tools: [
    "React",
    "Wagmi",
    "Typescript",
    "Solidity",
    "Foundry",
    "Hardhat",
    "Slither",
    "Storybook",
    "Polygon",
    "Ethereum",
    "Chakra-UI",
    "TailwindCSS",
    "MaterialUI",
    "Chromatic",
    "Git/Github",
  ],
  status: "optional",
};

export const SuffixLabsEngineeringWorkExperience: WorkExperience = {
  ...SuffixLabsWorkExperience,
  id: "suffix-labs-engineering",
  responsibilities: [
    "Founded and operate a software consultancy serving clients across Web3 and crypto lending.",
    SuffixLabsClientEngineering,
  ],
  tools: ["Solidity", "Foundry", "OpenZeppelin", "TypeScript", "React"],
};

export const SuffixLabsDragonflyWorkExperience: WorkExperience = {
  id: "suffix-labs-founder-dragonfly",
  position: "Founder",
  company: "Suffix Labs",
  duration: "July 2023 - Present",
  responsibilities: [
    "Founded and operate a crypto consulting firm, sourcing and evaluating Web3 projects across DeFi lending, smart contracts, and protocol development -- building a deal sourcing and technical evaluation skillset directly applicable to crypto venture.",
    "Operate two Starknet validators with over $500k in combined delegated stake, demonstrating personal conviction and skin-in-the-game across crypto infrastructure investments.",
    "Built software for crypto lending platforms and DeFi communities across multiple remote teams, developing cross-cultural collaboration skills and a strong network across the crypto ecosystem.",
  ],
  tools: [
    "DeFi",
    "Smart Contracts",
    "Starknet",
    "Validator Operations",
    "Solidity",
    "Ethereum",
    "Polygon",
  ],
};

export const ETHChiWorkExperience: WorkExperience = {
  id: "ethchi-cofounder",
  position: "Co-Founder and Tech Lead",
  company: "ETHChicago",
  duration: "June 2023 - Present",
  responsibilities: [
    "Co-Founder of ETHChicago, a community built by and for the Ethereum, and greater Web3 ecosystem in the Midwest.",
    "Led the development of ETHChicago's initial website (since changed), integrating NFT ticketing infrastructure for 500+ attendees.",
    "Built NFT releases for the community, working with local Chicago artists and philanthropies to raise money for local charities.",
    "Launched and managed ETHChicago's Starknet validator, pioneering a sustainable funding model for the Chicago crypto community.",
  ],
  tools: [
    "React",
    "Wagmi",
    "Typescript",
    "Solidity",
    "Foundry",
    "Hardhat",
    "Storybook",
    "Polygon",
    "Ethereum",
    "Chakra-UI",
    "TailwindCSS",
    "MaterialUI",
    "Chromatic",
    "Git/Github",
  ],
  status: "optional",
};

export const ETHChiDragonflyWorkExperience: WorkExperience = {
  id: "ethchi-cofounder-dragonfly",
  position: "Co-Founder",
  company: "ETHChicago",
  duration: "June 2023 - Present",
  responsibilities: [
    "Co-Founded ETHChicago, building and leading the Ethereum and Web3 community in the Midwest with 500+ attendees, developing a strong crypto network and community engagement skills.",
    "Pioneered a sustainable funding model for the community by launching and managing a Starknet validator, demonstrating entrepreneurial thinking and crypto-native financial innovation.",
    "Collaborated with artists, philanthropies, and crypto-native organizations on NFT fundraising initiatives, building cross-functional relationships across the crypto ecosystem.",
  ],
  tools: [
    "Ethereum",
    "Starknet",
    "NFTs",
    "Community Building",
    "Solidity",
  ],
};

export const MSCWorkExperience: WorkExperience = {
  id: "maverick-software-coop",
  position: "Cloud Software Engineer",
  company: "Maverick Software Consulting -- Thomson Reuters",
  duration: "June 2021 - May 2023",
  responsibilities: [
    "Responsible for all stages of the software development life cycle of an automated AWS orphaned asset cleanup application using Python and AWS lambda with step functions which is projected to save thomson reuters $14 million initially, and reduce cloud spend over time.",
    "Took ownership in all aspects of development process from ideation to production implementation, including unit and integration testing, ci/cd pipelines, and documentaion.",
    "Contributed to the development of an internal AWS RDS database tool that is used across all cloud teams at Thomson Reuters.",
    "Worked remotely with multipls teams across the globe.",
    "Continually followed best aws best practices, and guided team of 3 other engineers in software engineering best practices.",
  ],
  tools: [
    "git/github",
    "Python",
    "AWS",
    "AWS lambda",
    "AWS step functions",
    "AWS lambda layers",
    "AWS cloudformation",
    "AWS codepipeline",
    "Github actions",
  ],
  status: "optional",
};

// ---- Open Source Experience ----

export const StarknetPhoneOpenSourceExperience: OpenSourceExperience = {
  id: "starknet-phone",
  position: "Maintainer",
  project: "Starknet Phone",
  duration: "September 2024 - Present (development paused)",
  link: "https://github.com/keep-starknet-strange/starknet-phone",
  responsibilities: [
    //"Leading a Starkware Exploration Project that aims to drastically improve mobile UX and sovereignty on Starknet by implementing a fork of GrapheneOS with a light client built in, providing both trustless access to the Starknet network, and complete user control of the device, with GrapheneOS removing all 3rd party control and tracking.",
    "Modified Starknet Light Client (Beerus) to compile to Android, and implemented Java bindings for the light client in Rust using Android NDK and JNI.",
    "Hold weekly community calls to support contributors, sync on progress, and share project updates.",
    "Driving development for a leading project on the OnlyDust platform, maintaining the repository and supporting 15+ contributors.",
  ],
  tools: [
    "Android Studio",
    "Java",
    "Kotlin",
    "C",
    "Rust",
    "NDK",
    "JNI",
    "Git/Github",
  ],
};

export const CairoZedOpenSourceExperience: OpenSourceExperience = {
  id: "cairo-zed",
  position: "Maintainer",
  project: "Cairo Zed Extension",
  duration: "July 2024 - Present",
  link: "https://github.com/trbutler4/zed-cairo",
  responsibilities: [
    "Developed and maintain the Cairo programming language extension for Zed, with 55,000+ downloads.",
    "Updated Cairo Tree-sitter grammar definitions and parser corpus tests.",
  ],
  tools: ["Rust", "Tree-Sitter", "Language Server Protocol", "Git/Github"],
};

// ---- Project Experience ----

export const KakarotBridgeProject: Project = {
  id: "kakarot-bridge",
  name: "Kakarot Bridge",
  link: "https://github.com/trbutler4/kakarot-bridge",
  description:
    "A ERC20 token bridge enabling a 7 hour withdrawal window with almost no trust assumptions, enabled by Kakarot L2",
  achievements: ["Lambda ZK Week Hackathon (Brussels) Winner"],
  hackathonLink: "https://dorahacks.io/buidl/14125",
  tools: [
    "Solidity",
    "Hardhat",
    "Foundry",
    "Cairo",
    "Docker",
    "React",
    "Starknet React",
  ],
};

export const StarkSproutsProject: Project = {
  id: "starksprouts",
  name: "StarkSprouts",
  link: "https://github.com/StarkSprouts/StarkSprouts",
  description:
    "StarkSprouts is a fully on-chain game using the Dojo toolchain. The goal of the game is simply to grow a garden, which will slowly die, and must be watered to stay alive.",
  achievements: ["Top 10 at Starknet Hacker House Denver"],
  additionalInfo:
    "Gameplay implemented with ThreeJS, and the game was deployed on Starknet using Slot.",
  tools: ["Cairo", "Katana", "Starkli", "Dojo", "ThreeJS", "Slot"],
};

export const AISmartContractVulnerabilityProject: Project = {
  id: "ai-smart-contract-vuln",
  name: "AI Smart Contract Vulnerability Detection",
  link: "https://github.com/trbutler4/AML_Project",
  description:
    "Supervised and Unsupervised methods to detect potential vulnerabilities in smart contracts.",
  additionalInfo:
    "Methods included analyzing bytecode directly by constructing a 'sliding window' of relevant opcodes, as well converting bytecode into RGB images, both of which were analyzed using neural networks.",
  tools: ["Python", "PyTorch", "Jupyter Notebook", "Solidity", "Slither"],
};

export const ZkCreditProofsProject: Project = {
  id: "zkcredit-proofs",
  name: "ZK Credit Proofs",
  link: "",
  description:
    "Uses Polygon ID to issue credentials for an individuals credit score, and submit a ZK proof that their credit score is above a certain threshold to prevent the need for sharing SSN with the leasing company.",
  tools: ["Go", "Polygon ID", "NGROK", "React"],
};

export const StarkfishProject: Project = {
  id: "starkfish",
  name: "Starkfish -- a Starknet Chess Engine",
  link: "",
  description: "Prveable chess engine implemented in Cairo.",
  achievements: [
    "Frontend created with starknet-react and NextJs to against the engine.",
  ],
  tools: ["Cairo", "Katana", "Starkli", "Starknet", "Starknet-react", "NextJs"],
};

export const MiscSMartContractProjects: Project = {
  id: "misc-smart-contract",
  name: "General Solidity and Cairo Projects",
  link: "",
  description: "Various Smart Contract projects in Solidity and Cairo",
  achievements: [
    "Various Solidity projects on Node Guardians with topics including gas optimization, security, storage, and more.",
    "Completed various Solidity CTFs on Ethernaut, fully testing all solutions and exploits in Solidity with Foundry.",
  ],
  tools: [
    "Solidity",
    "Cairo",
    "Hardhat",
    "Brownie",
    "Foundry",
    "Ethers",
    "Scarb",
  ],
};

export const NFTicketProject: Project = {
  id: "nfticket",
  name: "Full Stack App",
  link: "https://github.com/trbutler4/NFTicket",
  description:
    "NFT event ticketing platform which allows organizers to easily create events, sell tickets, and redeem tickets for events.",
  achievements: [
    "Lead team of 4 developers to follow software engineering best practices",
    "Fully tested metamask integration using Cypress and Synpress.",
  ],
  tools: [
    "Solidity",
    "Hardhat",
    "React",
    "Firebase",
    "Infura",
    "Cypress",
    "Synpress",
  ],
};

export const CurateProject: Project = {
  id: "curate",
  name: "Full Stack App",
  link: "https://github.com/sep-23/team_01/wiki",
  description:
    "Full stack web application that leverages Spotify and Apple music APIs to allow users to curate playlists, post them to the platform, like and comment on playlists, follow users, and upload/export playlists to and from Spotify and Apple Music.",
  achievements: [
    "Includes CI/CD pipelines, PR templates, and branch protections.",
    "Fully documented project wiki detailing all aspects of the project.",
  ],
  tools: ["React", "Firebase", "Node", "Cypress"],
};

export const PeerioProject: Project = {
  id: "peerio",
  name: "Full Stack App",
  link: "https://github.com/brandonsurh/peerio",
  description: "Decentralized peer review process on filecoin network.",
  achievements: [
    "Tokenized voting system, with rewards tied to a users reputation.",
  ],
  hackathonLink: "https://ethglobal.com/showcase/peerio-0bv55",
  tools: ["Solidity", "Hardhat", "React", "Firebase", "IPFS", "Web3.Storage"],
};

export const SISCComputerProject: Project = {
  id: "sisc-computer",
  name: "SISC Computer Processor",
  link: "",
  description:
    "Built and tested a SISC computer processor using Verilog and ModelSim",
  achievements: [
    "Implemented machine code that directly executes on the computer.",
  ],
  tools: ["Verilog", "ModelSim"],
};

export const EmbeddedCryptoDisplayProject: Project = {
  id: "embedded-display",
  name: "Embedded Crypto Price Display",
  link: "https://github.com/trbutler4/Project_ES_S21",
  description:
    "Embedded system that display the live prices of Bitcoin and Ethereum. Includes a push button to swap between the different cryptocurrencies, and an alarm if the price crashes.",
  achievements: [
    "Python script to interact with API to retrieve live prices for Bitcoin and Ethereum, then send serially to arduino via bluetooth.",
    "Arduino microcontroller with LED display module, bluetooth module, buzzer, and push button",
  ],
  tools: ["Python", "C", "Ardiuino", "Atmel Studio", "x64 Assembly", "Linux"],
};

export const DesktopVotingAppProject: Project = {
  id: "desktop-voting-app",
  name: "Java Voting App",
  link: "",
  description:
    "GUI desktop application implemented with Java and SQLite to allow for national voting.",
  achievements: [
    "Authentication for different user types, including voter, auditor, and media users.",
  ],
  tools: ["Java", "SQL", "SQLite"],
};

// ---- Systems, AI, and security portfolio ----
// Evidence and prototype/merge-status notes: github-skills-audit.md.

export const ArgosProject: Project = {
  id: "argos",
  name: "Argos — LLM Development Infrastructure",
  link: "https://github.com/trbutler4/argos",
  description: "Built a Rust CLI/TUI for parallel LLM-assisted development, provisioning task-specific NixOS microVM workspaces and managing local and remote tmux sessions over SSH.",
  achievements: ["Built cancellable discovery and subprocess supervision with deadlines, output limits, and process-group cleanup; verified lifecycle behavior with Python integration tests."],
  tools: ["Rust", "NixOS", "microVMs", "SSH", "Unix process management", "Python", "GitHub Actions"],
};

export const NixInfrastructureProject: Project = {
  id: "nix-infrastructure",
  name: "Multi-Machine Nix Infrastructure",
  link: "",
  description: "Maintain declarative configurations for 7 Linux/macOS hosts through Nix flakes, NixOS, nix-darwin, and shared Home Manager modules.",
  achievements: ["Built reusable development shells for Python, Rust, Go, and TypeScript, a declarative k3s server configuration, and offline NixOS installers containing prebuilt system closures."],
  tools: ["Nix", "NixOS", "nix-darwin", "Home Manager", "K3s", "Linux"],
};

export const StarknetValidatorProject: Project = {
  id: "starknet-validator-manager",
  name: "Starknet Validator Deployment & Monitoring",
  link: "https://github.com/suffix-labs/sn-vali-manager",
  description: "Built Kubernetes deployment and monitoring tooling for a shared Pathfinder full node and two Starknet validator services, with Prometheus alerts, Grafana dashboards, and scheduled Telegram reports.",
  tools: ["Kubernetes", "Prometheus", "Grafana", "Docker", "Bash", "JavaScript", "Starknet"],
};

export const IntentProject: Project = {
  id: "intent",
  name: "Intent — Code Review Tool Prototype",
  link: "https://github.com/trbutler4/intent",
  description: "Built a Rust code-review prototype with Git diff inspection, a shared review engine, terminal/native interfaces, and SQLite-backed reviewed-file state.",
  achievements: ["Implemented Tree-sitter AST traversal and a prototype syntax-based graph view for exploring Rust code."],
  additionalInfo: "Model-backed review remains planned; the implemented tool focuses on local code inspection.",
  tools: ["Rust", "Tree-sitter", "SQLite", "Ratatui", "GPUI", "Nix"],
};

export const WtmuxProject: Project = {
  id: "wtmux",
  name: "wtmux — Git Worktree & Session Manager",
  link: "https://github.com/trbutler4/wtmux",
  description: "Built a Rust CLI/TUI for repository discovery, Git worktree creation and cleanup, and tmux session management, with JSONL profiling and GitHub PR-status integration.",
  tools: ["Rust", "Git", "tmux", "Ratatui", "Nix"],
};

export const ZKGenomicsProofsProject: Project = {
  id: "zkgenomics-proofs",
  name: "ZKGenomics — Genomic Proof Prototypes",
  link: "https://github.com/ZKGenomics/zkgenomics-proofs",
  description: "Built Go prototypes using gnark/Groth16 for VCF parsing, circuit and witness construction, proof generation, serialization, and proof-data verification.",
  tools: ["Go", "gnark", "Groth16", "BN254", "VCF"],
};

export const ZKGenomicsBackendProject: Project = {
  id: "zkgenomics-backend",
  name: "ZKGenomics — AI Backend",
  link: "https://github.com/suffix-labs/zkg-mvp-archive",
  description: "Built Go backend integrations with an OpenAI-compatible LLM endpoint, supplying contextual proof results and user knowledge files to chat requests.",
  achievements: ["Implemented HTTP timeouts and context cancellation, PostgreSQL persistence and migrations, and API/CLI integration for the prototype platform."],
  tools: ["Go", "REST APIs", "PostgreSQL", "DigitalOcean Gradient", "Docker", "GitHub Actions"],
};

export const EthernautSecurityProject: Project = {
  id: "ethernaut-security",
  name: "Ethernaut — Reproducible Exploit Tests",
  link: "https://github.com/trbutler4/ethernaut_lab",
  description: "Reproduced predictable-randomness and integer-underflow exploits using Foundry block manipulation, account impersonation, and assertions to verify attack outcomes.",
  tools: ["Solidity", "Foundry", "Exploit reproduction"],
};

export const EternumDiplomatProject: Project = {
  id: "eternum-diplomat",
  name: "Eternum Diplomat — LLM Agent Prototype",
  link: "https://github.com/trbutler4/realms-diplomat-archive",
  description: "Prototyped game diplomats using Daydreams and Anthropic's API, adding character/context integration, basic agent-to-agent greeting flows, and a mocked GraphQL game-state server.",
  tools: ["TypeScript", "Anthropic API", "Daydreams", "GraphQL", "Bun"],
};

export const ZcashTransactionProject: Project = {
  id: "zcash-t2o",
  name: "Zcash Transparent-to-Orchard — Hackathon Prototype",
  link: "https://github.com/suffix-labs/zcash-t2o",
  description: "Explored Go/Rust interoperability for Zcash transaction construction, PCZT serialization, ZIP 244 signature hashing, and Orchard-library integration through CGO/FFI.",
  additionalInfo: "Experimental AI-assisted hackathon prototype; end-to-end functionality is not established.",
  tools: ["Go", "Rust", "CGO/FFI", "Zcash", "Nix"],
};

export const SynpressCompatibilityProject: Project = {
  id: "synpress-metamask-compatibility",
  name: "Synpress — MetaMask Compatibility Patch (Fork)",
  link: "https://github.com/trbutler4/synpress/commit/a2211ff4e5012fb18f6eb6b82c7bb8c4da7e7533",
  description: "Updated Playwright wallet fixtures for MetaMask v13 onboarding, including recovery-phrase import, password selectors, and extension loading.",
  additionalInfo: "Patch published on a personal fork; not established as merged upstream.",
  tools: ["TypeScript", "Playwright", "Synpress", "MetaMask"],
};

export const ChutesDeploymentProject: Project = {
  id: "chutes-deployment-management",
  name: "Chutes Miner — Deployment Management Proposal",
  link: "https://github.com/chutesai/chutes-miner/pull/18",
  description: "Proposed Python API routes and CLI commands for removing individual GPU deployments or deployments on a selected node, using asynchronous database and HTTP operations.",
  additionalInfo: "Contribution was not merged at the time of review.",
  tools: ["Python", "FastAPI", "asyncio", "SQLAlchemy", "aiohttp", "Typer"],
};

export const AssetRegistryProject: Project = {
  id: "asset-registry",
  name: "Multi-Network Asset Registry",
  link: "https://github.com/trbutler4/avalabs-takehome",
  description: "Built a Node.js/Express asset-registry API with REST/OpenAPI, raw PostgreSQL queries and migrations, blockchain RPC integration, and rate limiting, alongside a React client.",
  tools: ["TypeScript", "Node.js", "Express", "PostgreSQL", "OpenAPI", "Docker", "Nix"],
};

export const TranscriptAPIProject: Project = {
  id: "transcript-api",
  name: "YouTube Transcript API",
  link: "https://github.com/trbutler4/n8n-companion-api",
  description: "Built a FastAPI service with Pydantic request validation, asynchronous transcript retrieval, and downloadable transcript responses.",
  tools: ["Python", "FastAPI", "Pydantic", "yt-dlp"],
};

export const ETHChicagoContractsProject: Project = {
  id: "ethchicago-contracts",
  name: "ETHChicago — Community Smart Contracts",
  link: "https://github.com/ETHChicago/ethchi-contracts",
  description: "Built Solidity community contracts, Foundry tests and deployment scripts, and an NFT-owner scraping script for airdrop distribution.",
  tools: ["Solidity", "Foundry", "JavaScript", "Ethers"],
};

export const PolygonIDProject: Project = {
  id: "polygon-id-integration",
  name: "Polygon ID — Credential Issuance Integration",
  link: "https://github.com/trbutler4/humancore-zk-psychographics",
  description: "Prototyped credential issuance using Polygon ID/iden3, integrating an issuer application and on-chain identity contracts with a web interface.",
  tools: ["Go", "TypeScript", "Solidity", "Polygon ID", "Docker"],
};

export const PolygonArbitrageProject: Project = {
  id: "polygon-arbitrage",
  name: "Polygon Flash-Loan Arbitrage Prototype",
  link: "https://github.com/trbutler4/polygon_arbitrage",
  description: "Prototyped Solidity integrations with Aave flash loans and Uniswap/SushiSwap routers for token-swap arbitrage on Polygon.",
  additionalInfo: "Exploratory implementation with unfinished testing; no profitability or production-readiness claim.",
  tools: ["Solidity", "Aave", "Uniswap", "SushiSwap", "Hardhat"],
};

export const BahSheepleRustProject: Project = {
  id: "bah-sheeple-rust",
  name: "Bah Sheeple — Rust Authentication Prototype",
  link: "https://github.com/trbutler4/bah-sheeple/tree/rust-rewrite",
  description: "Explored Rust web authentication on a prototype branch using Actix Web and OAuth2, including authorization-flow changes.",
  tools: ["Rust", "Actix Web", "OAuth2"],
};

export const NPCChatbotProject: Project = {
  id: "npc-chatbot",
  name: "GPT-3 NPC Chatbot",
  link: "https://github.com/trbutler4/NPC",
  description: "Built a Python command-line chatbot using OpenAI's completion API, a character backstory, and accumulated conversation context.",
  tools: ["Python", "OpenAI API"],
};

export const KakarotOpenSourceExperience: OpenSourceExperience = {
  id: "kakarot-contributor",
  position: "Contributor",
  project: "Kakarot zkEVM",
  duration: "September 2023",
  link: "https://github.com/kkrt-labs/kakarot-ssj/pull/241",
  responsibilities: ["Contributed merged EVM opcode and arithmetic implementations in Cairo, including SHL execution, checked/wrapping bit shifts, and boundary-case tests."],
  tools: ["Cairo", "EVM", "Unit testing"],
};

export const MadaraOpenSourceExperience: OpenSourceExperience = {
  id: "madara-contributor",
  position: "Contributor",
  project: "Madara",
  duration: "October 2023",
  link: "https://github.com/AbdelStark/madara/pull/1139",
  responsibilities: ["Updated VM-resource fee constants and affected transaction tests in Madara's Rust codebase; change merged upstream."],
  tools: ["Rust", "Starknet", "Unit testing"],
};

export const OpenCodeOpenSourceExperience: OpenSourceExperience = {
  id: "opencode-contributor",
  position: "Contributor",
  project: "OpenCode",
  duration: "April 2026",
  link: "https://github.com/anomalyco/opencode/pull/22851",
  responsibilities: ["Contributed a merged dependency fix for Nix builds, updating the package manifest, Bun lockfile, and Linux Nix dependency hash."],
  tools: ["Bun", "Nix", "Dependency management"],
};

export const ElizaOpenSourceExperience: OpenSourceExperience = {
  id: "eliza-contributor",
  position: "Documentation Contributor",
  project: "Eliza",
  duration: "December 2024",
  link: "https://github.com/elizaOS/eliza/pull/1350",
  responsibilities: ["Contributed merged setup documentation clarifying pnpm/Node.js version configuration."],
  tools: ["pnpm", "Node.js", "Documentation"],
};

// Reusable systems-focused descriptions for engineering-oriented resumes.
export const GFXLabsSystemsWorkExperience: WorkExperience = {
  ...GFXLabsWorkExperience,
  id: "gfx-senior-systems",
  responsibilities: [
    "Developed Oku's perpetuals trading backend in Go, connecting real-time market data to durable order execution through ConnectRPC, Redis Streams, and Temporal.",
    "Engineered financial workflows for safe retries and recovery, combining signed-action validation, replay protection, and on-chain settlement checks with regression testing.",
    "Traced failures across database, authentication, and blockchain boundaries; resolved concurrency and transaction-simulation bugs and added regression tests to prevent recurrence.",
    "Equipped coding agents with structured runtime diagnostics for inspecting application state and failures, using bounded event capture and allowlisted data exposure.",
    "Delivered React/TypeScript trading interfaces, including Plasma's $2.4B token launch; established shared UI and review practices and mentored 3 junior engineers.",
  ],
  tools: ["Go", "TypeScript", "React", "React Native", "ConnectRPC", "Protocol Buffers", "Temporal", "PostgreSQL", "Redis Streams", "WebSockets", "Kubernetes", "Docker", "Nix", "XState"],
};

export const NakamotoSystemsWorkExperience: WorkExperience = {
  ...NakamotoWorkExperience,
  id: "nakamoto-senior-systems",
  responsibilities: [
    "Led a team of two engineers competing in Bittensor subnets, building AI and data infrastructure.",
    "Fine-tuned tool-calling LLMs and evaluated them using the Berkeley Function Calling Leaderboard benchmark; achieved top 10% subnet performance.",
    "Built concurrent Python and Go microservices to harvest and process data from Reddit, Twitter, and YouTube for Bittensor subnet 13 (Data Universe).",
    NakamotoEngineeringHighlights.evaluation,
    NakamotoEngineeringHighlights.inference,
  ],
  tools: ["Python", "Go", "Rust", "PyTorch", "Hugging Face", "vLLM", "SGLang", "Kubernetes", "AWS", "PostgreSQL", "Redis"],
};

export const TholosSystemsWorkExperience: WorkExperience = {
  ...TholosWorkExperience,
  id: "tholos-systems",
  responsibilities: [
    "Owned iOS and Android applications for an MPC crypto wallet securing over $35 million in digital assets; contributed across the stack, including WebSocket and AWS secure enclave systems.",
    "Implemented fault-tolerant key backup and recovery across distributed mobile devices, handling network failures, disconnects, and interrupted operations.",
    "Supported key management, signing, and blockchain integration across Ethereum, EVM L2s, Bitcoin, Solana, and Cosmos.",
  ],
  tools: ["TypeScript", "React Native", "Python", "Go", "Rust", "AWS", "FastAPI", "PostgreSQL", "Redis"],
};

export const MSCSystemsWorkExperience: WorkExperience = {
  ...MSCWorkExperience,
  id: "maverick-cloud-systems",
  responsibilities: [
    "Owned development of an AWS orphaned-resource cleanup application in Python, Lambda, and Step Functions, with projected initial savings of $14 million.",
    "Delivered unit and integration tests, CI/CD pipelines, and documentation; contributed to an internal AWS RDS tool used across cloud teams.",
  ],
  tools: ["Python", "AWS Lambda", "AWS Step Functions", "CloudFormation", "CI/CD"],
};
