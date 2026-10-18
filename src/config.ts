import { ResumeConfig, SectionName } from "./types";
import {
  DefaultPersonalInfo,
  GFXLabsWorkExperience,
  GFXLabsDragonflyWorkExperience,
  NakamotoWorkExperience,
  NakamotoEngineeringHighlights,
  NakamotoDragonflyWorkExperience,
  TholosWorkExperience,
  TholosDragonflyWorkExperience,
  CairoZedOpenSourceExperience,
  AISmartContractVulnerabilityProject,
  SuffixLabsWorkExperience,
  SuffixLabsDragonflyWorkExperience,
  StarknetPhoneOpenSourceExperience,
  ETHChiWorkExperience,
  ETHChiDragonflyWorkExperience,
  DefaultProfessionalSummary,
  UIowaEducation,
  GFXLabsSystemsWorkExperience,
  NakamotoSystemsWorkExperience,
  TholosSystemsWorkExperience,
  MSCSystemsWorkExperience,
  ArgosProject,
  NixInfrastructureProject,
  StarknetValidatorProject,
  ZKGenomicsProofsProject,
  SuffixLabsEngineeringWorkExperience,
  KakarotOpenSourceExperience,
  OpenCodeOpenSourceExperience,
} from "./experienceData";

const baseMetrics = [
  "$35 Million",
  "15+ contributors",
  "55,000+ downloads",
  "500+ attendees",
  "100% key recovery",
  "top 10% subnet performance",
];
const baseSectionOrder: SectionName[] = [
  "professionalSummary",
  "workExperience",
  "projects",
  "openSourceExperience",
];

export const sweConfig: ResumeConfig = {
  resumeType: "swe",
  title: "Senior Software Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [
    GFXLabsWorkExperience,
    NakamotoWorkExperience,
    TholosWorkExperience,
    ETHChiWorkExperience,
  ],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

export const aiMlConfig: ResumeConfig = {
  resumeType: "ai-ml",
  title: "Senior AI/ML Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [GFXLabsWorkExperience, NakamotoWorkExperience, TholosWorkExperience],
  openSourceExperience: [CairoZedOpenSourceExperience],
  projects: [AISmartContractVulnerabilityProject],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// blockchain engineer resume
export const blockchainConfig: ResumeConfig = {
  resumeType: "blockchain",
  title: "Blockchain Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [
    GFXLabsWorkExperience,
    NakamotoWorkExperience,
    TholosWorkExperience,
    ETHChiWorkExperience,
  ],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [], //[KakarotBridgeProject, StarkSproutsProject, ZkCreditProofsProject],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// full stack engineer resume
export const fullStackConfig: ResumeConfig = {
  resumeType: "full-stack",
  title: "Senior Full-Stack Software Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [GFXLabsWorkExperience, TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [], // [NFTicketProject, CurateProject, PeerioProject],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// mobile engineer resume
export const mobileConfig: ResumeConfig = {
  resumeType: "mobile",
  title: "Senior Mobile Software Engineer",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [GFXLabsWorkExperience, TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [], // [StarkSproutsProject, KakarotBridgeProject],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// Site Reliability Engineer resume
export const sreConfig: ResumeConfig = {
  resumeType: "sre",
  title: "Software Engineer - SRE",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [GFXLabsWorkExperience, TholosWorkExperience, NakamotoWorkExperience],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// Suffix Labs / contract work resume
export const suffixLabsConfig: ResumeConfig = {
  resumeType: "suffix-labs",
  title: "Founder & Blockchain Consultant",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [
    GFXLabsWorkExperience,
    SuffixLabsWorkExperience,
    TholosWorkExperience,
    NakamotoWorkExperience,
    ETHChiWorkExperience,
  ],
  openSourceExperience: [
    StarknetPhoneOpenSourceExperience,
    CairoZedOpenSourceExperience,
  ],
  projects: [],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: baseMetrics,
  },
};

// Dragonfly VC Analyst resume -- emphasizes crypto-native expertise, business impact, and analytical skills
export const dragonflyConfig: ResumeConfig = {
  resumeType: "dragonfly",
  title: "Crypto-Native Engineer & Founder",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: DefaultProfessionalSummary,
  workExperience: [
    GFXLabsDragonflyWorkExperience,
    SuffixLabsDragonflyWorkExperience,
    NakamotoDragonflyWorkExperience,
    TholosDragonflyWorkExperience,
    ETHChiDragonflyWorkExperience,
  ],
  openSourceExperience: [
    CairoZedOpenSourceExperience,
  ],
  projects: [],
  sectionsOrder: baseSectionOrder,
  emphasize: {
    keywords: [],
    metrics: [
      "$2.4B token launch",
      "$35 Million",
      "$500k delegated stake",
      "500+ attendees",
      "top 10% subnet performance",
      "55,000+ downloads",
    ],
  },
};

export const anthropicConfig: ResumeConfig = {
  resumeType: "anthropic",
  title: "Senior Software Engineer | AI Engineering & Blockchain",
  personalInfo: DefaultPersonalInfo,
  professionalSummary: {
    education: UIowaEducation,
    skills: {
      languages: ["Python", "Go", "Rust", "TypeScript", "Solidity", "Cairo", "SQL", "Nix", "Bash"],
      tools: ["PyTorch", "Hugging Face", "vLLM", "SGLang", "Kubernetes", "Docker", "AWS", "Linux/NixOS", "Temporal", "ConnectRPC", "PostgreSQL", "Redis", "Prometheus", "Grafana", "Foundry", "Tree-sitter", "React/React Native"],
    },
  },
  workExperience: [
    GFXLabsSystemsWorkExperience,
    {
      ...NakamotoSystemsWorkExperience,
      responsibilities: [
        "Led two engineers building AI and data infrastructure for Bittensor subnets.",
        "Fine-tuned tool-calling LLMs, evaluated against the Berkeley Function Calling Leaderboard benchmark, and achieved top 10% subnet performance.",
        NakamotoEngineeringHighlights.evaluation,
        NakamotoEngineeringHighlights.inference,
      ],
    },
    {
      ...TholosSystemsWorkExperience,
      responsibilities: [
        "Owned iOS/Android applications for an MPC wallet securing over $35 million in assets; implemented WebSocket and AWS secure enclave integrations.",
        "Built distributed key backup and recovery that handled network failures, device disconnects, and interrupted operations.",
        "Implemented key management, signing, and integrations across Ethereum, EVM L2s, Bitcoin, Solana, and Cosmos.",
      ],
    },
    SuffixLabsEngineeringWorkExperience,
    {
      ...MSCSystemsWorkExperience,
      responsibilities: [
        "Built an AWS resource-cleanup application in Python, Lambda, and Step Functions with projected initial savings of $14 million.",
        "Owned unit/integration tests, CI/CD, and documentation; contributed to an RDS tool used across cloud teams.",
      ],
    },
  ],
  projects: [
    {
      ...ArgosProject,
      description: "Built a Rust CLI/TUI for parallel LLM-assisted development with task-specific NixOS microVMs and local/remote tmux sessions over SSH.",
    },
    {
      ...AISmartContractVulnerabilityProject,
      name: "ML-Based Smart Contract Vulnerability Detection — University Project",
      description: "Applied Python/PyTorch to smart contract vulnerability detection, extracting opcode features and converting bytecode into RGB images for neural-network classification experiments.",
      additionalInfo: undefined,
    },
    {
      ...NixInfrastructureProject,
      description: "Maintain declarative configurations for 7 Linux/macOS hosts through Nix flakes, NixOS/nix-darwin, and shared Home Manager modules.",
      achievements: ["Built reproducible Python, Rust, Go, and TypeScript environments and declarative k3s configuration."],
    },
    {
      ...StarknetValidatorProject,
      description: "Built Kubernetes deployment tooling for a Pathfinder full node and two validators, with Prometheus alerts, Grafana dashboards, and automated operational reports.",
    },
    {
      ...ZKGenomicsProofsProject,
      name: "ZKGenomics — Proof Generation & AI Backend",
      description: "Built a Go prototype for gnark/Groth16 proof generation and verification, including VCF parsing, circuit/witness construction, and serialization.",
      achievements: ["Integrated an LLM API with proof-result context, user knowledge files, and PostgreSQL persistence."],
      tools: [...ZKGenomicsProofsProject.tools, "PostgreSQL", "LLM APIs"],
    },
  ],
  openSourceExperience: [
    {
      ...KakarotOpenSourceExperience,
      responsibilities: ["Implemented EVM SHL execution and checked/wrapping bit shifts in Cairo, with boundary-case tests; contributions merged upstream."],
    },
    {
      ...StarknetPhoneOpenSourceExperience,
      responsibilities: [
        "Ported the Beerus Starknet light client to Android and implemented Java bindings in Rust using Android NDK/JNI; maintained the repository and supported 15+ contributors.",
      ],
    },
    {
      ...CairoZedOpenSourceExperience,
      responsibilities: ["Developed and maintain Cairo support for Zed with 55,000+ downloads, using Rust, Tree-sitter, and LSP; updated grammar definitions and parser corpus tests."],
    },
    {
      ...OpenCodeOpenSourceExperience,
      responsibilities: ["Fixed a missing dependency breaking Nix builds; package, lockfile, and build-hash updates merged upstream."],
    },
  ],
  sectionsOrder: baseSectionOrder,
  pageBreakBefore: ["projects"],
  showEntryTools: false,
  emphasize: {
    keywords: [
      "Python",
      "PyTorch",
      "durable order execution",
      "replay protection",
      "regression tests",
      "structured runtime diagnostics",
      "tool-calling LLMs",
      "subnet evaluation weaknesses",
      "autoscaled AI inference",
      "distributed key backup and recovery",
      "parallel LLM-assisted development",
      "Python integration tests",
      "smart contract vulnerability detection",
      "boundary-case tests",
      "merged upstream",
      "Machine Learning",
    ],
    metrics: ["$35 million", "top 10% subnet performance", "15+ contributors", "55,000+ downloads", "7 Linux/macOS hosts", "3 junior engineers"],
  },
};

export const configs: Record<string, ResumeConfig> = {
  swe: sweConfig,
  ai: aiMlConfig,
  blockchain: blockchainConfig,
  fullStack: fullStackConfig,
  mobile: mobileConfig,
  suffixLabs: suffixLabsConfig,
  sre: sreConfig,
  dragonfly: dragonflyConfig,
  anthropic: anthropicConfig,
};

export const getConfig = (configType: string): ResumeConfig => {
  const config = configs[configType];
  if (!config) {
    throw new Error(
      `Config type '${configType}' not found. Available types: ${Object.keys(configs).join(", ")}`,
    );
  }
  return config;
};

export const getAvailableConfigTypes = (): string[] => {
  return Object.keys(configs);
};
