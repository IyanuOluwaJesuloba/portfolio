export type PortfolioProjectCategory = "web2" | "web3";

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface PortfolioProject {
  title: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  status?: string;
  year?: string;
  team?: string;
  role?: string;
  domain?: string;
  isNda?: boolean;
  features?: string[];
  metrics?: ProjectMetric[];
  whatIdDoDifferently?: string;
  contractAddress?: string;
  testCoverage?: string;
  architecture?: string;
  category: PortfolioProjectCategory;
  featured?: boolean;
}

export interface OpenSourceContribution {
  title: string;
  description: string;
  repoUrl: string;
  prUrl?: string;
  tags?: string[];
}

export interface WorkplaceNdaProject {
  company: string;
  period: string;
  status: string;
  headline: string;
  subtext: string;
  detailPrompt: string;
  products: string[];
  techStack: string[];
  location: string;
}

export const currentWorkplaceNda: WorkplaceNdaProject = {
  company: "Ajaeq",
  period: "2026 - Present",
  status: "Under NDA",
  headline: "Engineering the frontend for an upcoming cybersecurity platform.",
  subtext: "Contributing to the architecture of an ecosystem of security products. Details shared on request.",
  detailPrompt: "Request Details",
  products: ["Ajaeq Ecosystem", "Archive 256"],
  techStack: ["Next.js 15", "TypeScript", "TanStack Query", "Tailwind CSS", "WebSockets"],
  location: "Nigeria / Remote",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Proxima: AI Agent Registry & Payment Gateway",
    description:
      "An open-source AI agent registry and autonomous payment gateway on Stellar, enabling verifiable agent identities, on-chain service agreements, and programmatic micropayments via Soroban smart contracts.",
    longDescription:
      "Autonomous AI agents need verifiable economic rails to discover services, negotiate contracts, and settle payments without centralized gatekeepers. Proxima implements a Soroban-native registry and payment escrow system on Stellar, bridging agentic workflows with low-latency cryptographic settlements.",
    challenge:
      "Designing a high-throughput settlement protocol that accommodates high-frequency agent micropayments while keeping transaction fees near zero and contract state proofs verifiable on-chain.",
    solution:
      "Architected Soroban smart contracts in Rust leveraging Stellar's low transaction fees and fast finality (~3.5s). Built a responsive Next.js/TypeScript frontend dashboard for telemetry and agent lifecycle management, integrated with Freighter wallet and Soroban RPC.",
    tags: ["Rust", "Soroban", "Stellar", "Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/proxima.png",
    githubUrl: "https://github.com/Plain-labs/Proxima",
    liveUrl: "https://proxima-beryl.vercel.app/",
    status: "Live",
    year: "2026",
    team: "Plain Labs Core",
    role: "Lead Web3 & Smart Contract Engineer",
    domain: "AI & Rails",
    features: [
      "On-chain AI agent registration and cryptographic identity verification",
      "Autonomous payment settlement gateway powered by Soroban smart contracts",
      "Real-time telemetry and execution analytics dashboard",
      "Freighter wallet integration with instant transaction signing",
    ],
    metrics: [
      { label: "Settlement Speed", value: "~3.5s", detail: "Instant finality on Stellar" },
      { label: "Tx Fee", value: "<$0.0001", detail: "Near-zero cost per settlement" },
      { label: "Test Coverage", value: "93%", detail: "Rust cargo test suite" },
    ],
    architecture: "Agent Client -> Freighter Wallet / Soroban SDK -> Soroban Smart Contract (Rust/WASM) -> Stellar Horizon RPC",
    whatIdDoDifferently:
      "Implement batch-settlement rollups to optimize Soroban storage ledger footprint when scaling to thousands of concurrent autonomous agents.",
    category: "web3",
    featured: true,
  },
  {
    title: "Nullius: Private ZK Reputation on Stellar",
    description:
      "A zero-knowledge reputation and financial trustworthiness protocol on Stellar, enabling users to prove creditworthiness without revealing transactions, balances, or private financial history.",
    longDescription:
      "Financial data on public blockchains is completely exposed by default, forcing users to sacrifice privacy to establish trust. Nullius enables users to generate zero-knowledge cryptographic proofs of their financial reliability on Stellar, unlocking preferential fee tiers without sharing a single raw transaction or balance.",
    challenge:
      "Generating compact zero-knowledge proofs client-side and verifying them on Stellar via Soroban smart contracts within tight execution resource and fee limits.",
    solution:
      "Architected a Soroban verification engine in Rust paired with a streamlined Next.js and TypeScript client. Users connect their Freighter wallet, compute ZK validity proofs locally, and submit verifiable attestations that prove solvency and reputation tiers at zero data leakage.",
    tags: ["Soroban", "Rust", "Stellar", "ZK Proofs", "Next.js", "TypeScript"],
    imageUrl: "/nullius.png",
    githubUrl: "https://github.com/Plain-labs/Nullius",
    liveUrl: "https://nullius-taupe.vercel.app",
    status: "Live",
    year: "2026",
    team: "Plain Labs",
    role: "Full-Stack Web3 & ZK Engineer",
    domain: "Zero-Knowledge",
    features: [
      "Zero-knowledge credit and financial reputation proofs on Stellar",
      "Three verifiable reputation tiers with progressive fee discounts down to 0.3%",
      "Zero bytes of personal transaction or balance data leaked on-chain",
      "Freighter wallet integration with fast client-side cryptographic verification",
    ],
    metrics: [
      { label: "Data Shared On-Chain", value: "0 bytes", detail: "Zero leakage of private balances" },
      { label: "Lowest Fee Tier", value: "0.3%", detail: "Gold reputation tier discount" },
      { label: "Verification Speed", value: "~3.5s", detail: "Soroban instant finality" },
    ],
    architecture: "Client ZK Prover -> Freighter Wallet -> Soroban Verifier Contract (Rust) -> Stellar Horizon RPC",
    whatIdDoDifferently:
      "Extend proof generation to recursive SNARKs to support multi-chain reputation aggregation from EVM chains onto Stellar.",
    category: "web3",
    featured: true,
  },
  {
    title: "Luminary: Cyber Command Dashboard",
    description:
      "A high-density SOC intelligence and cluster telemetry dashboard, built for security operations teams requiring rapid situation awareness without cognitive overload.",
    longDescription:
      "Built as a next-generation security command center. Luminary organizes cluster intelligence, telemetry feeds, and skill-chain analytics into a single, navigable mission-control interface built with enterprise tooling precision.",
    challenge:
      "Translating a multi-layered telemetry data model into a high-density UI that stays responsive and navigable under heavy data updates, without burying critical alerts.",
    solution:
      "Engineered a persistent command rail for keyboard-friendly section navigation, modular data cards, and a Consistency Chain enrollment overlay. Fine-tuned Framer Motion layout transitions for fluid 60fps responsiveness.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/Luminary.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/Luminary-Cyber-Command-Dashboard",
    liveUrl: "https://luminary-two.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo (Public Design Brief)",
    role: "Frontend Engineer",
    domain: "Security Telemetry",
    features: [
      "Persistent command rail with instant keyboard jumps across 5 domains",
      "Consistency Chain modal: complete enrollment workflow in a single overlay",
      "Cluster intelligence matrix with execution metrics and node health",
      "Career progression chart and telemetry study-time grid",
      "Adaptive responsive layout from compact tablet to ultrawide displays",
    ],
    metrics: [
      { label: "LCP", value: "1.2s", detail: "Optimized component code splitting" },
      { label: "Frame Rate", value: "60 FPS", detail: "Hardware-accelerated animations" },
      { label: "Accessibility", value: "98/100", detail: "Lighthouse accessibility audit" },
    ],
    whatIdDoDifferently:
      "Add WebSocket integration to stream simulated real-time packet telemetry rather than polling static mock states.",
    category: "web2",
    featured: true,
  },
  {
    title: "FarmChain: Supply Chain Traceability",
    description:
      "A decentralized agricultural supply chain application giving farmers and cooperatives a transparent, tamper-proof record of crop yields, certifications, and on-chain trade transactions.",
    longDescription:
      "Agricultural supply chains are frequently opaque, leaving farmers at the mercy of middlemen. FarmChain puts crop batches and transaction logs directly on-chain so buyers, exporters, and regulators can independently verify provenance.",
    challenge:
      "Designing a data-entry workflow simple enough for field agents with no Web3 knowledge, operating in low-bandwidth rural environments.",
    solution:
      "Abstracted cryptographic calls behind straightforward progressive forms with offline data caching. Users input standard harvest records; the app handles on-chain proof anchoring silently.",
    tags: ["Next.js", "Solidity", "Ethers.js", "Tailwind CSS"],
    imageUrl: "/FarmChain.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/FarmChain",
    liveUrl: "https://farm-chain-tau.vercel.app/",
    status: "Live",
    year: "2026",
    team: "Solo",
    role: "Frontend & Web3 Developer",
    domain: "Supply Chain",
    features: [
      "On-chain crop batch registration and provenance tracking",
      "Accessible form-based entry with offline validation",
      "Transaction history with cryptographic confirmation states",
      "Responsive layout optimized for mobile browsers",
    ],
    metrics: [
      { label: "Bundle Size", value: "142 KB", detail: "Next.js dynamic code splitting" },
      { label: "Mobile Lighthouse", value: "94/100", detail: "Chrome DevTools Lighthouse audit" },
      { label: "RPC Latency", value: "<250ms", detail: "Cached Ethers.js provider reads" },
    ],
    category: "web3",
    featured: true,
  },
  {
    title: "Mighty Refuge Mission: Community Giving Platform",
    description:
      "A full-stack web platform for an international nonprofit organization, engineered for secure donor registrations, real-time community data capture, and scalable content management.",
    longDescription:
      "Nonprofits often struggle with fragile, low-performance templates. Mighty Refuge Mission was built from the ground up with a production-grade relational database, strict form validation, and an intuitive content layout manageable by non-technical staff.",
    challenge:
      "Delivering a durable, accessible web platform for an organization with limited technical support on an aggressive launch timeline.",
    solution:
      "Built with Next.js App Router and TypeScript, paired with secure server actions and optimized database queries. Enhanced layout accessibility to ensure universal readability on mobile devices.",
    tags: ["Next.js", "TypeScript", "Database", "Tailwind CSS"],
    imageUrl: "/MRM.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/MRM",
    liveUrl: "https://mrm-liart.vercel.app/",
    status: "Live",
    year: "2026",
    team: "Solo",
    role: "Full-Stack Engineer",
    domain: "Nonprofit SaaS",
    features: [
      "Relational database integration for secure form submissions",
      "Production-grade input sanitization and schema validation",
      "Responsive layout optimized for mobile and low-bandwidth networks",
      "Modular content structure allowing easy non-developer updates",
    ],
    metrics: [
      { label: "Lighthouse Score", value: "97/100", detail: "Audited via Google Lighthouse" },
      { label: "First Contentful Paint", value: "0.8s", detail: "Server-side rendered App Router" },
      { label: "Input Validation", value: "Type-Safe", detail: "Server actions with Zod schemas" },
    ],
    category: "web2",
    featured: true,
  },
  {
    title: "Collective Investment Platform",
    description:
      "A Web3 fintech application enabling community investment pools for blockchain gaming assets with wallet authentication, on-chain state queries, and automated ROI distributions.",
    longDescription:
      "Most DeFi interfaces assume deep Web3 literacy. This application abstracts complex smart contract interactions behind clean, reassuring fintech patterns (deposit, track yield, and withdraw) while preserving full on-chain transparency.",
    challenge:
      "Bridging the usability gap between traditional fintech expectations and blockchain unpredictability (gas volatility, pending transaction states).",
    solution:
      "Built a robust abstraction layer over the smart contracts using Ethers.js. Surfaced clear transaction lifecycles (broadcasting, confirming, finalized) and displayed realtime on-chain yield metrics.",
    tags: ["Next.js", "TypeScript", "Solidity", "Ethers.js", "Tailwind CSS"],
    imageUrl: "/Saving-app.jpg",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/saving_app",
    liveUrl: "https://saving-app-jet.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo",
    role: "Full-Stack Web3 Engineer",
    domain: "FinTech",
    features: [
      "One-click wallet connection with clear onboarding guidance",
      "Group investment pool creation and participant tracking",
      "Real-time on-chain balance and yield calculation via Ethers.js",
      "Automated returns distribution UI with full transaction receipts",
      "Solidity smart contract with ERC-20 token integration",
    ],
    metrics: [
      { label: "Contract Tests", value: "100% Pass", detail: "Hardhat & Foundry unit tests" },
      { label: "Tx Confirmation UX", value: "<1s", detail: "Optimistic UI updates with rollback" },
    ],
    category: "web3",
    featured: false,
  },
  {
    title: "Client Portfolio: Shopify Designer",
    description:
      "A bespoke conversion-focused portfolio for a professional Shopify designer, featuring sleek typographic rhythm, purposeful micro-animations, and high lead-generation performance.",
    longDescription:
      "A portfolio is a direct revenue engine. This site was architected to guide potential clients smoothly through past case studies, social proof, and straightforward inquiry booking.",
    challenge:
      "Achieving an editorial, high-fashion aesthetic with smooth motion without degrading Core Web Vitals or mobile responsiveness.",
    solution:
      "Leveraged Next.js image optimization, custom Tailwind design tokens, and lightweight Framer Motion triggers to keep the bundle lean while delivering luxury feel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/Portfolio.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/Ebube.Portfolio",
    liveUrl: "https://ebubeportfolio.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Freelance Client Project",
    role: "Frontend Engineer & UI Developer",
    domain: "E-Commerce UI",
    features: [
      "High-conversion layout with prominent contact and booking CTAs",
      "Curated Framer Motion transitions with reduced-motion fallbacks",
      "Strict mobile-first responsive architecture",
      "Next.js optimized asset delivery with near-zero CLS",
    ],
    metrics: [
      { label: "LCP", value: "1.1s", detail: "Next/Image WebP conversion" },
      { label: "CLS", value: "0.01", detail: "Zero layout shift during load" },
    ],
    category: "web2",
    featured: false,
  },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    title: "Nullius: ZK Reputation Layer on Stellar",
    description:
      "Contributed frontend components and Soroban contract client integration for Nullius, an open-source zero-knowledge reputation layer on Stellar utilizing Groth16 proofs and WASM smart contracts.",
    repoUrl: "https://github.com/Plain-labs/Nullius",
    prUrl: "https://github.com/Plain-labs/Nullius/pulls?q=is%3Apr+author%3AIyanuOluwaJesuloba",
    tags: ["Stellar", "Soroban", "Rust", "Zero-Knowledge", "React"],
  },
  {
    title: "NebGov: Permissionless Governance on Soroban",
    description:
      "Contributed on-chain governance interface modules and contract interaction utilities for NebGov, a permissionless governance framework for Soroban protocols on Stellar.",
    repoUrl: "https://github.com/Rockyjoe100/nebgov",
    prUrl: "https://github.com/Rockyjoe100/nebgov/pulls?q=is%3Apr+author%3AIyanuOluwaJesuloba",
    tags: ["Stellar", "Soroban", "Rust", "Governance", "Open Source"],
  },
  {
    title: "ChainLogistics: Decentralized Supply Chain on Stellar",
    description:
      "Shipped frontend provenance components and transaction history displays to ChainLogistics, an open-source Soroban smart contract supply chain tracking protocol.",
    repoUrl: "https://github.com/miracleokaa/ChainLogistics",
    prUrl: "https://github.com/miracleokaa/ChainLogistics/pulls?q=is%3Apr+author%3AIyanuOluwaJesuloba",
    tags: ["Stellar", "Soroban", "TypeScript", "React", "Open Source"],
  },
  {
    title: "Astroid API: AI Agent Backend & Stellar Intelligence",
    description:
      "Contributed NestJS backend endpoints and transaction verification utilities for autonomous agent operations on the Stellar network.",
    repoUrl: "https://github.com/ASTROIDX556/astroid-api",
    prUrl: "https://github.com/ASTROIDX556/astroid-api/pulls?q=is%3Apr+author%3AIyanuOluwaJesuloba",
    tags: ["Stellar", "AI Agents", "NestJS", "TypeScript"],
  },
  {
    title: "Prompt-Hash Stellar: Prompt Asset Verification",
    description:
      "Contributed to multi-gateway verification modules for prompt asset storage and hash anchoring as part of the Stellar Wave Program.",
    repoUrl: "https://github.com/Obiajulu-gif/Prompt-Hash-Stellar",
    prUrl: "https://github.com/Obiajulu-gif/Prompt-Hash-Stellar/pulls?q=is%3Apr+author%3AIyanuOluwaJesuloba",
    tags: ["Stellar", "Soroban", "Wave Program", "Open Source"],
  },
];
