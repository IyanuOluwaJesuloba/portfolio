export type PortfolioProjectCategory = "web2" | "web3";

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
  features?: string[];
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

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Mighty Refuge Mission",
    description:
      "A full-stack website for a nonprofit organization, built to handle real-time data collection, secure form submissions, and scalable content management from day one.",
    longDescription:
      "Nonprofits often get underpowered websites that can't grow with them. This platform was built to last, with a real database, production-grade error handling, and a content structure that the team can manage without a developer.",
    challenge:
      "Delivering a production-ready, maintainable site for a nonprofit with limited technical resources, on a tight timeline.",
    solution:
      "Used Next.js for the full stack, integrated a real-time database for form submissions and data collection, and structured the codebase so non-technical staff could update content without touching code.",
    tags: ["Next.js", "TypeScript", "Database", "Tailwind CSS"],
    imageUrl: "/MRM.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/MRM",
    liveUrl: "https://mrm-liart.vercel.app/",
    status: "Live",
    year: "2026",
    team: "Solo",
    features: [
      "Real-time database integration for secure data collection",
      "Production-grade error handling and input validation",
      "Responsive layout optimised for low-bandwidth connections",
      "Structured content model for non-technical team management",
    ],
    category: "web2",
    featured: false,
  },
  {
    title: "FarmChain",
    description:
      "A blockchain application that gives farmers a transparent, tamper-proof way to record crop data and manage transactions on-chain.",
    longDescription:
      "Agricultural supply chains are opaque. FarmChain puts crop records and transactions on-chain so every stakeholder - farmer, buyer, regulator, can verify the data independently.",
    challenge: "Making blockchain data entry feel as simple as filling out a form, for users with no Web3 background.",
    solution: "Abstracted all contract interactions behind familiar form patterns. The user never sees a transaction hash until after it's confirmed, they just see their data saved.",
    tags: ["Next.js", "Solidity", "Ethers.js", "Tailwind CSS"],
    imageUrl: "/FarmChain.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/FarmChain",
    liveUrl: "https://farm-chain-tau.vercel.app/",
    status: "Live",
    year: "2026",
    team: "Solo",
    features: ["On-chain crop record management", "Transaction tracking with confirmation states", "Accessible form-based data entry"],
    category: "web3",
    featured: false,
  },
   {
    title: "Client Portfolio - Shopify Designer",
    description:
      "A bespoke portfolio site for a Shopify designer client, built to convert visitors into leads with a strong visual hierarchy, smooth animations, and a clear call to action flow.",
    longDescription:
      "A portfolio is a sales tool. This one was designed with that in mind, every section earns its place by moving the visitor closer to making contact.",
    challenge:
      "Translating a designer's visual identity into a web experience that feels premium without being slow or inaccessible.",
    solution:
      "Used Next.js for performance, Framer Motion for purposeful animations, and a tight component system that keeps the design consistent across every breakpoint.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/Portfolio.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/Ebube.Portfolio",
    liveUrl: "https://ebubeportfolio.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo",
    features: [
      "Conversion-focused layout with clear CTA hierarchy",
      "Purposeful Framer Motion animations with no gratuitous effects",
      "Fully responsive with mobile-first design decisions",
      "Fast load times with Next.js image optimisation",
    ],
    category: "web2",
    featured: false,
  },
  {
    title: "Delve",
    description:
      "A Web3 product workflow app demonstrating decentralised data flows and wallet-connected user experiences with a clean, minimal interface.",
    longDescription:
      "Delve explores what a Web3-native product workflow could look like, where user data is owned by the user, and every action is verifiable on-chain.",
    challenge: "Designing a product workflow UI that feels familiar to Web2 users while exposing the transparency benefits of Web3.",
    solution: "Used familiar SaaS UI patterns (kanban, dashboards, modals) as the foundation, then layered in wallet connection and on-chain state reads as progressive enhancements.",
    tags: ["Next.js", "Ethers.js", "Solidity", "Tailwind CSS"],
    imageUrl: "/Delve.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/delve-app",
    liveUrl: "https://delve-app-seven.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo",
    features: ["Wallet-connected product workflows", "On-chain state reads and writes", "Familiar SaaS UI patterns"],
    category: "web3",
    featured: false,
  },
  {
    title: "Luminary - Cyber Command Dashboard",
    description:
      "A data-dense SOC intelligence dashboard built for security operations teams. Designed to surface cluster health, telemetry, and skill-chain analytics without overwhelming the operator.",
    longDescription:
      "Security teams drown in data. Luminary solves that by organizing cluster intelligence, consistency scheduling, and telemetry into a single, navigable mission-control surface, built with the same care you'd expect from enterprise tooling.",
    challenge:
      "Translating a complex, multi-layer data model into a UI that feels fast and navigable, without hiding critical information behind too many clicks.",
    solution:
      "Built a persistent command rail for instant section jumps, modular card components for each data domain, and a Consistency Chain enrollment modal that handles the full signup flow in one focused overlay. Every interaction is animated with Framer Motion to feel responsive, not flashy.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/Luminary.png",
    githubUrl:
      "https://github.com/IyanuOluwaJesuloba/Iyanuoluwa-Test-Luminary-Cyber-Command-Dashboard-Clone",
    liveUrl: "https://luminary-two.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo",
    features: [
      "Persistent command rail with icon nav across 5 sections",
      "Consistency Chain modal - full enrollment flow in one overlay",
      "Cluster intel board with skill matrix tiles and execution metrics",
      "Career progression chart and study-time grid",
      "Fully responsive from mobile to ultrawide",
    ],
    category: "web2",
    featured: true,
  },
  {
    title: "Collective Investment Platform",
    description:
      "A Web3 fintech app that lets groups pool funds and invest collectively in Play-to-Earn blockchain games with wallet-connected flows, on-chain state reads, and automated ROI distribution.",
    longDescription:
      "Most DeFi UIs assume the user already understands blockchain. This one doesn't. The challenge was making wallet connection, group investment management, and on-chain returns feel as intuitive as a regular fintech app, without hiding the transparency that makes Web3 valuable.",
    challenge:
      "Bridging the UX gap between traditional finance expectations and blockchain complexity, for users who may be new to Web3.",
    solution:
      "Built an abstraction layer over the smart contracts so users interact with familiar fintech patterns - deposit, track, withdraw, while Ethers.js handles the on-chain calls underneath. Wallet connection is handled with a single prominent CTA, and all on-chain state is surfaced in real time.",
    tags: ["Next.js", "TypeScript", "Solidity", "Ethers.js", "Tailwind CSS"],
    imageUrl: "/Saving-app.jpg",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/saving_app",
    liveUrl: "https://saving-app-jet.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo",
    features: [
      "One-click wallet connection with clear onboarding state",
      "Group investment creation and management flows",
      "Real-time on-chain balance and ROI reads via Ethers.js",
      "Automated returns distribution UI with transaction history",
      "Solidity smart contract with ERC-20 integration",
    ],
    category: "web3",
    featured: true,
  },
  {
    title: "Brain-Wave - AI Content Platform UI",
    description:
      "A clean, component-driven UI for an AI-powered content creation platform covering video editing, image generation, and real-time preview in a single cohesive interface.",
    longDescription:
      "AI tools are powerful but often overwhelming. Brain-Wave's UI is designed around progressive disclosure — showing users only what they need at each step, with smooth transitions that make complex workflows feel simple.",
    challenge:
      "Designing an interface for multi-modal AI tooling (video, image, text) that doesn't overwhelm users who are new to AI-assisted creation.",
    solution:
      "Applied a progressive disclosure pattern — each tool surface reveals options contextually rather than all at once. Framer Motion transitions guide the user's attention between workflow steps.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    imageUrl: "/Brainwave.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/brain_wave",
    liveUrl: "https://brain-wave-zeta-six.vercel.app/",
    status: "In Progress",
    year: "2024",
    team: "Solo",
    features: [
      "Progressive disclosure UI for multi-modal AI tools",
      "Real-time preview panel with smooth state transitions",
      "Responsive across mobile, tablet, and desktop",
      "Component-driven architecture for easy feature extension",
    ],
    category: "web2",
    featured: false,
  },
  {
    title: "MentorMatch",
    description:
      "A mentorship platform that connects professionals with mentees through a structured matching flow; with profiles, session scheduling, and a clean communication interface.",
    longDescription:
      "Finding the right mentor is hard. MentorMatch reduces friction by guiding both sides through a structured onboarding and matching flow, then getting out of the way so the relationship can develop naturally.",
    challenge:
      "Designing a matching flow that feels personal and intentional, not algorithmic and cold.",
    solution:
      "Built a multi-step onboarding that collects goals and preferences before surfacing matches, so users feel like the platform understands them. The interface prioritises clarity over feature density.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/project2.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/mentorship-platform--3-",
    liveUrl: "https://mentorship-platform-3.vercel.app/",
    status: "In Progress",
    year: "2025",
    team: "Solo",
    features: [
      "Multi-step onboarding with goal and preference capture",
      "Structured mentor-mentee matching flow",
      "Clean profile and session management UI",
      "Analytics dashboard for tracking mentorship progress",
    ],
    category: "web2",
    featured: false,
  },
  {
    title: "DEX - Decentralised Exchange UI",
    description:
      "A decentralised exchange interface demonstrating token swap flows, liquidity concepts, and wallet-connected UX patterns on EVM chains.",
    longDescription:
      "DEX interfaces are notoriously confusing. It focuses on making the swap flow clear, showing the user exactly what they're getting, what it costs, and what happens next.",
    challenge: "Making token swap UX feel safe and transparent for users who may be unfamiliar with slippage, gas, and liquidity.",
    solution: "Designed a swap card that surfaces the most important information (rate, slippage, estimated gas) without burying it in settings. Wallet connection is handled with RainbowKit for a polished multi-wallet experience.",
    tags: ["Next.js", "Solidity", "Ethers.js", "Tailwind CSS"],
    imageUrl: "/Dex.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/DEX",
    liveUrl: "https://dex-l8dk.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo",
    features: ["Token swap UI with rate and slippage display", "Wallet connection flow", "Liquidity pool interface"],
    category: "web3",
    featured: false,
  },
  {
    title: "NFT Marketplace",
    description:
      "An NFT marketplace with listing, browsing, and wallet-connected purchase flows, built to demonstrate end-to-end Web3 commerce UX.",
    longDescription:
      "NFT marketplaces live or die on trust. The platform is designed to make every transaction feel safe with clear ownership states, transparent pricing, and a checkout flow that doesn't surprise the user.",
    challenge: "Building a marketplace UI that handles the complexity of on-chain ownership and transactions without losing the user.",
    solution: "Structured the UI around clear ownership states - listed, owned, sold and built a checkout flow that confirms every step before submitting a transaction.",
    tags: ["Next.js", "Solidity", "Ethers.js", "Tailwind CSS"],
    imageUrl: "/NFT_Marketplace.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/NFTMarketplace",
    liveUrl: "https://nftmarketplace-six-psi.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo",
    features: ["NFT listing and browsing flows", "Wallet-connected purchase flow", "Clear ownership state management"],
    category: "web3",
    featured: false,
  },
  {
    title: "L-Token",
    description:
      "A token interface demonstrating ERC-20 smart contract interaction - minting, transferring, and reading on-chain state through a clean frontend.",
    longDescription:
      "L-Token is a focused demonstration of ERC-20 contract interaction; built to show how a clean frontend can make token mechanics approachable for non-technical users.",
    challenge: "Making token contract interactions (mint, transfer, approve) feel safe and understandable to users unfamiliar with ERC-20 mechanics.",
    solution: "Built a step-by-step interaction flow with clear confirmation states and human-readable transaction summaries before any on-chain action is taken.",
    tags: ["Solidity", "Ethers.js", "EVM", "Next.js"],
    imageUrl: "/L_Token.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/NFT-Token",
    liveUrl: "https://l-token.vercel.app/",
    status: "Live",
    year: "2025",
    team: "Solo",
    features: ["ERC-20 mint and transfer flows", "On-chain balance reads", "Human-readable transaction confirmations"],
    category: "web3",
    featured: false,
  },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    title: "Soropad Launchpad",
    description:
      "Contributed UI improvements and bug fixes to the Soropad Launchpad - an open-source Web3 launchpad platform. PR #139 addressed a layout inconsistency in the project listing flow.",
    repoUrl: "https://github.com/soropad/launchpad",
    prUrl: "https://github.com/soropad/launchpad/pull/139",
    tags: ["Web3", "React", "Open Source"],
  },
  {
    title: "ChainLogistics",
    description:
      "Shipped frontend improvements to ChainLogistics - a blockchain-based supply chain platform. PR #198 improved the transaction history component's responsiveness and accessibility.",
    repoUrl: "https://github.com/ChianLojistics/ChainLogistics",
    prUrl: "https://github.com/ChianLojistics/ChainLogistics/pull/198",
    tags: ["Web3", "TypeScript", "Open Source"],
  },
  {
    title: "Bridge Watch",
    description:
      "Contributed to Bridge Watch — a cross-chain bridge monitoring tool. PR #426 added a new status indicator component and improved the real-time update flow in the bridge activity feed.",
    repoUrl: "https://github.com/StellaBridge/Bridge-Watch",
    prUrl: "https://github.com/StellaBridge/Bridge-Watch/pull/426",
    tags: ["Web3", "React", "Open Source"],
  },
];
