// Personal Info
#let personal = (
  name: "Thomas Robert Butler IV",
  email: "trbiv@proton.me",
  github: "https://github.com/trbutler4",
  linkedin: "https://www.linkedin.com/in/thomas-butler-1a435018b/",
)

// Education
#let education = (
  institution: "University of Iowa",
  degree: "BSE Computer Science and Engineering",
)

// Languages
#let languages = (
  "Javascript/Typescript",
  "Go",
  "Rust",
  "Java",
  "Kotlin",
  "Solidity",
  "Cairo",
  "Python",
)

// Work: GFX Labs
#let gfx_labs = (
  position: "Senior Software Engineer",
  company: "GFX Labs",
  duration: "October 2025 - Present",
  responsibilities: (
    "Led perps trading platform from ideation to release, delivering Hyperliquid integration with 100+ markets and isolated/cross margin.",
    "Built full-stack infrastructure across React/TypeScript frontend and Go backend, orchestrating signing flows and order submission with Temporal.",
    "Led World App miniapp from ideation to release, building end-to-end for token swaps on World Chain with Permit2 proxy, custom swap routing, and MiniKit v2.",
    "Headed creation and integration of design system component library across both main trading application and miniapp, using Storybook, Chromatic, and in-house visual regression testing.",
  ),
  tools: (
    "React",
    "TypeScript",
    "Go",
    "Temporal",
    "Viem",
    "Wagmi",
    "gRPC/Protobuf",
    "Grafana",
    "PostHog",
    "Kubernetes",
    "Storybook",
    "Playwright",
    "Chromatic",
  ),
)

// Work: Nakamoto
#let nakamoto = (
  position: "Senior Software Engineer",
  company: "Nakamoto LLC",
  duration: "January 2025 - June 2025",
  responsibilities: (
    "Led team of two engineers building AI inference infrastructure and data pipelines for Bittensor subnets.",
    "Fine-tuned tool-calling LLMs, outperforming SOTA models on Berkeley Function Calling Leaderboard with top 10% subnet performance.",
    "Unified physical datacenter and cloud servers into a single Kubernetes cluster delivering auto-scaled AI inference.",
    "Built concurrent microservice architecture in Python and Go for large-scale dataset harvesting across Reddit, Twitter, and YouTube.",
  ),
  tools: (
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
  ),
)

// Work: Tholos
#let tholos = (
  position: "Mobile Software Engineer",
  company: "Tholos",
  duration: "October 2023 - January 2025",
  responsibilities: (
    "Owned iOS and Android mobile applications for Tholos MPC Crypto Wallet in React Native, securing over $35 Million in digital assets.",
    "Built full-stack features spanning WebSocket connections, AWS secure enclave, and multi-chain key management across Ethereum, Bitcoin, Solana, and Cosmos.",
    "Implemented fault-tolerant key backup and recovery achieving 100% recovery rate across distributed mobile devices.",
  ),
  tools: (
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
  ),
)

// Work: Suffix Labs
#let suffix_labs = (
  position: "Founder",
  company: "Suffix Labs",
  duration: "July 2023 - Present",
  responsibilities: (
    "Operate two Starknet validators with $1M+ delegated stake on Kubernetes, maintaining 99.99% uptime with Grafana observability and Telegram alerting.",
    "Provided blockchain consulting and full-stack development for DeFi protocols and Web3 communities.",
    "Built frontends for crypto lending platforms collaborating with fully remote teams.",
  ),
  tools: (
    "Kubernetes",
    "Grafana",
    "Docker",
    "React",
    "TypeScript",
    "Solidity",
    "Foundry",
    "Hardhat",
    "Wagmi",
    "TailwindCSS",
    "Git/Github",
  ),
)

// Project: AI Smart Contract Vulnerability Detection
#let ai_smart_contract_project = (
  name: "AI Smart Contract Vulnerability Detection",
  achievements: (),
  description: "Supervised and Unsupervised methods to detect potential vulnerabilities in smart contracts.",
  additionalInfo: "Methods included analyzing bytecode directly by constructing a 'sliding window' of relevant opcodes, as well converting bytecode into RGB images, both of which were analyzed using neural networks.",
  tools: ("Python", "PyTorch", "Jupyter Notebook", "Solidity", "Slither"),
)
