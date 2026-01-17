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
export const GFXLabsWorkExperience: WorkExperience = {
  id: "gfx-senior",
  position: "Senior Software Engineer",
  company: "GFX Labs",
  duration: "September 2025 - Present",
  responsibilities: [
    "Led the overhaul of UI development practices to a design system-based approach, establishing consistent brand identity across Oku and other GFX Labs products while mentoring junior developers and designers on the new workflow.",
    "Took full ownership of a greenfield trading interface for Plasma's $2.4B token launch, building a crypto trading application powered by Oku's meta aggregator.",
    "Established code review standards and mentored three junior engineers on architecture and best practices, while integrating tooling to streamline designer participation in the review process.",
    "Worked across the full stack to deliver greenfield projects, owning both frontend and backend development.",
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
    "Nix"
  ],
};

export const NakamotoWorkExperience: WorkExperience = {
  id: "nakamoto-senior",
  position: "Senior Software Engineer",
  company: "Nakamoto LLC",
  duration: "January 2025 - June 2025",
  responsibilities: [
    "Lead team of two engineers to compete in Bittensor subnets.",
    "Fine-tuned tool calling LLMs, beating SOTA models on Berkley Function Calling Leaderboard, and achieving top 10% subnet performance.",
    "Built and maintained infrastructure combining physical datacenter and cloud servers into a unified kubernetes cluster, delivering high-performance auto-scaled AI inference.",
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

export const SuffixLabsWorkExperience: WorkExperience = {
  id: "suffix-labs-founder",
  position: "Founder and CEO",
  company: "Suffix Labs",
  duration: "July 2023 - Present",
  responsibilities: [
    "Founded Suffix Labs LLC to provide consulting and software development services.",
    "Consulted on and wrote software for various Web3/Smart Contract related projects.",
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
