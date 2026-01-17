// Resume - Thomas Robert Butler IV

#set document(title: "Thomas Robert Butler IV - Senior Software Engineer")
#set page(
  paper: "us-letter",
  margin: (top: 0.5in, bottom: 0.5in, left: 0.5in, right: 0.5in),
)

#set text(
  font: "New Computer Modern",
  size: 10pt,
)

#set par(justify: false, leading: 0.5em)
#set list(indent: 1em, spacing: 0.4em, marker: [•])

// Header
#align(center)[
  #text(size: 18pt, weight: "bold")[Thomas Robert Butler IV] \
  #text(size: 12pt)[Senior Software Engineer] \
  #v(0.3em)
  #text(size: 9pt)[
    #link("mailto:trbiv@proton.me")[trbiv\@proton.me] |
    #link("https://github.com/trbutler4")[Github: trbutler4] |
    #link("https://www.linkedin.com/in/thomas-butler-1a435018b/")[LinkedIn]
  ]
]

#v(0.5em)

// Summary
== Summary
#line(length: 100%, stroke: 0.5pt)

- *Education:* University of Iowa, BSE Computer Science and Engineering
- *Languages:* Python, C/C++, Go, Rust, Java, Kotlin, Solidity, Cairo, Javascript/Typescript, HTML, Verilog, x64 Assembly, Bash
- *Tools:* Linux, Git/Github, AWS, React, React Native, NextJS, Hardhat, Foundry, Postgres, Redis, Docker, Kubernetes, PyTorch, Starknet React, Wagmi, TailwindCSS

#v(0.5em)

// Work Experience
== Work Experience
#line(length: 100%, stroke: 0.5pt)

*Senior Software Engineer* -- _GFX Labs (September 2025 - Present)_

- Led the overhaul of UI development practices to a design system-based approach, establishing consistent brand identity across Oku and other GFX Labs products while mentoring junior developers and designers on the new workflow.
- Took full ownership of a greenfield trading interface for Plasma's \$2.4B token launch, building a crypto trading application powered by Oku's meta aggregator.
- Established code review standards and mentored three junior engineers on architecture and best practices, while integrating tooling to streamline designer participation in the review process.
- Worked across the full stack to deliver greenfield projects, owning both frontend and backend development.

*Tools:* Typescript, React, Vite, Wagmi, Viem, Tanstack Router+Query, Jotai, Storybook, Chromatic, Golang, Linux, Kubernetes, PostgreSQL, Redis, Docker, Git/Github, Digital Ocean, Temporal, Nix

#v(0.5em)

*Senior Software Engineer* -- _Nakamoto LLC (January 2025 - June 2025)_

- Lead team of two engineers to compete in Bittensor subnets.
- Fine-tuned tool calling LLMs, beating SOTA models on Berkley Function Calling Leaderboard, and achieving *top 10% subnet performance*.
- Built and maintained infrastructure combining physical datacenter and cloud servers into a unified kubernetes cluster, delivering high-performance auto-scaled AI inference.
- Engineered an advanced concurrent microservice architecture in Python and Golang that efficiently harvested and processed massive datasets from Reddit, Twitter, and Youtube, providing competitive edge in Bittensor subnet 13 (Data Universe).

*Tools:* Python, Golang, Rust, Linux, Kubernetes, Postgres, Redis, Docker, Git/Github, Huggingface, AWS, PyTorch, NumPy, Sglang, Vllm, AI Agents, ElizaOS, Daydreams

#v(0.5em)

*Mobile Software Engineer* -- _Tholos (October 2023 - January 2025)_

- Full ownership of both iOS and Android mobile applications for Tholos MPC Crypto Wallet, implemented in React Native and securing over *\$35 Million* worth of digital assets.
- Worked across the entire stack, implementing complex and critical code across a multitude of systems, including websocket and aws secure enclave.
- Worked in a blockchain agnostic stack, supporting key management, signing, and web3 integration across numerous networks including Ethereum, the most popular EVM compatible blockchains and L2s (Polygon, Arbitrum, etc.), Bitcoin, Solana, and Cosmos ecosystem.
- Implemented fault-tolerant key backup and recovery mechanisms across distributed mobile devices, with redundant safeguards ensuring *100% key recovery* even during network failures, device disconnects, or interrupted operations.

*Tools:* React Native, Native Wind, Expo, JavaScript/Typescript, Bash, Python, Go, Rust, Postgres, Redis, AWS, Docker, Git/Github, FastAPI

#v(0.5em)

*Co-Founder and Tech Lead* -- _ETHChicago (June 2023 - Present)_

- Co-Founder of ETHChicago, a community built by and for the Ethereum, and greater Web3 ecosystem in the Midwest.
- Led the development of ETHChicago's initial website, integrating NFT ticketing infrastructure for *500+ attendees*.
- Built NFT releases for the community, working with local Chicago artists and philanthropies to raise money for local charities.
- Launched and managed ETHChicago's Starknet validator, pioneering a sustainable funding model for the Chicago crypto community.

*Tools:* React, Wagmi, Typescript, Solidity, Foundry, Hardhat, Storybook, Polygon, Ethereum, Chakra-UI, TailwindCSS, MaterialUI, Git/Github

#v(0.5em)

*Founder and CEO* -- _Suffix Labs (July 2023 - Present)_

- Founded Suffix Labs LLC to provide consulting and software development services.
- Consulted on and wrote software for various Web3/Smart Contract related projects.
- Worked asynchronously with multiple fully remote teams to build frontends for crypto lending platforms, services, and communities.
- Run two Starknet validators with over *\$500k* in combined delegated stake.

*Tools:* React, Wagmi, Typescript, Solidity, Foundry, Hardhat, Slither, Storybook, Polygon, Ethereum, Chakra-UI, TailwindCSS, MaterialUI, Chromatic, Git/Github

#v(0.5em)

// Open Source Experience
== Open Source Experience
#line(length: 100%, stroke: 0.5pt)

*Maintainer* -- _Starknet Phone (September 2024 - Present)_ - #link("https://github.com/keep-starknet-strange/starknet-phone")[Github]

- Modified Starknet Light Client (Beerus) to compile to Android, and implemented Java bindings for the light client in Rust using Android NDK and JNI.
- Hold weekly community calls to support contributors, sync on progress, and share project updates.
- Driving development for a leading project on the OnlyDust platform, maintaining the repository and supporting *15+ contributors*.

*Tools:* Android Studio, Java, Kotlin, C, Rust, NDK, JNI, Git/Github

#v(0.5em)

*Maintainer* -- _Cairo Zed Extension (July 2024 - Present)_ - #link("https://github.com/trbutler4/zed-cairo")[Github]

- Developed and maintain the Cairo programming language extension for the Zed text editor, with *29,000+ users*.

*Tools:* Rust, Tree-Sitter, Language Server Protocol, Git/Github
