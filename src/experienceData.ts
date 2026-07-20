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
  degree: "BSE Computer Science and Engineering",
};

export const AllSkills: Skills = {
  
 languages: [
    "Javascript/Typescript",
    "Go",
    "Rust",
    "Java",
    "Kotlin",
    "Solidity",
    "Cairo",
    "Python",
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
  ]
}

export const DefaultProfessionalSummary: ProfessionalSummary = {
  education: UIowaEducation,
  skills: AllSkills
};

// ---- Work Experience ----

export const OkuTradeWorkExperience: WorkExperience = {
  id: "oku-trade",
  position: "Senior Software Engineer",
  company: "GFX Labs",
  duration: "October 2025 - Present",
  responsibilities: [
    "Led perps trading platform from ideation to release, delivering Hyperliquid integration with 100+ markets and isolated/cross margin.",
    "Built full-stack infrastructure across React/TypeScript frontend and Go backend, orchestrating signing flows and order submission with Temporal.",
    "Led World App miniapp from ideation to release, building end-to-end for token swaps on World Chain with Permit2 proxy, custom swap routing, and MiniKit v2.",
    "Headed creation and integration of design system component library across both main trading application and miniapp, using Storybook, Chromatic, and in-house visual regression testing.",
  ],
  tools: [
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
  ],
};

export const NakamotoWorkExperience: WorkExperience = {
  id: "nakamoto-senior",
  position: "Senior Software Engineer",
  company: "Nakamoto LLC",
  duration: "January 2025 - June 2025",
  responsibilities: [
    "Led team of two engineers building AI inference infrastructure and data pipelines for Bittensor subnets.",
    "Fine-tuned tool-calling LLMs, outperforming SOTA models on Berkeley Function Calling Leaderboard with top 10% subnet performance.",
    "Unified physical datacenter and cloud servers into a single Kubernetes cluster delivering auto-scaled AI inference.",
    "Built concurrent microservice architecture in Python and Go for large-scale dataset harvesting across Reddit, Twitter, and YouTube.",
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

export const TholosWorkExperience: WorkExperience = {
  id: "tholos-mobile",
  position: "Mobile Software Engineer",
  company: "Tholos",
  duration: "October 2023 - January 2025",
  responsibilities: [
    "Owned iOS and Android mobile applications for Tholos MPC Crypto Wallet in React Native, securing over $35 Million in digital assets.",
    "Built full-stack features spanning WebSocket connections, AWS secure enclave, and multi-chain key management across Ethereum, Bitcoin, Solana, and Cosmos.",
    "Implemented fault-tolerant key backup and recovery achieving 100% recovery rate across distributed mobile devices.",
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

export const SuffixLabsWorkExperience: WorkExperience = {
  id: "suffix-labs-founder",
  position: "Founder",
  company: "Suffix Labs",
  duration: "July 2023 - Present",
  responsibilities: [
    "Operate two Starknet validators with $1M+ delegated stake on Kubernetes, maintaining 99.99% uptime with Grafana observability and Telegram alerting.",
    "Provided blockchain consulting and full-stack development for DeFi protocols and Web3 communities.",
    "Built frontends for crypto lending platforms collaborating with fully remote teams.",
  ],
  tools: [
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
  ],
  status: "optional",
};

export const ETHChiWorkExperience: WorkExperience = {
  id: "ethchi-cofounder",
  position: "Co-Founder and Tech Lead",
  company: "ETHChicago",
  duration: "June 2023 - Present",
  responsibilities: [
    "Co-founded ETHChicago, building community for the Ethereum and Web3 ecosystem in the Midwest.",
    "Built event website in React with NFT ticketing infrastructure for 500+ attendees, deployed on IPFS via Fleek.",
    "Developed NFT releases with local Chicago artists to raise money for charities.",
  ],
  tools: [
    "React",
    "TypeScript",
    "Solidity",
    "Foundry",
    "Wagmi",
    "IPFS",
    "Fleek",
    "Polygon",
    "TailwindCSS",
    "Git/Github",
  ],
  status: "optional",
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
    "Developed and maintain the Cairo programming language extension for the Zed text editor, with 7000+ users.",
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
