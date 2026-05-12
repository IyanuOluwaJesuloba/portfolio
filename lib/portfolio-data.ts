export type PortfolioProjectCategory = "web2" | "web3";

export interface PortfolioProject {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  status?: string;
  year?: string;
  team?: string;
  features?: string[];
  category: PortfolioProjectCategory;
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
      "Architected and deployed a full-stack mission-driven website with real-time database synchronization, enabling secure data collection and management. Engineered responsive architecture supporting scalable information workflows.",
    tags: ["Next.js", "TypeScript", "Database", "Full-stack"],
    imageUrl: "/MRM.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/MRM",
    liveUrl: "https://mrm-liart.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: [
      "End-to-end architecture from concept to production",
      "Real-time database integration for information collection",
      "Optimized data management workflows",
      "Production-grade error handling and security",
    ],
    category: "web2",
  },
  {
    title: "Luminary",
    description:
      "A cinematic cyber-command dashboard that merges cluster intelligence, consistency scheduling, and telemetry-rich analytics into one mission control surface for SOC teams.",
    tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/Luminary.png",
    githubUrl:
      "https://github.com/IyanuOluwaJesuloba/Iyanuoluwa-Test-Luminary-Cyber-Command-Dashboard-Clone",
    liveUrl: "https://luminary-two.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: [
      "Command rail + icon nav for instant jumps between overview, nodes, labs, reports, and command rooms",
      "CTA flow: landing Consistency Chain button opens the enrollment modal immediately",
      "Consistency Chain modal handles cluster signup, education type, cadence, and start date",
      "Cluster intel board with discovery stats, skill matrix tiles, execution metrics",
      "Career skill progression chart, study-time grid, and skill-chain tracker",
    ],
    category: "web2",
  },
  {
    title: "Brain-Wave",
    description:
      "An AI-powered platform that revolutionizes content creation with advanced video editing, image generation, and editing capabilities. Built with modern React architecture and sleek UI design.",
    tags: ["React", "Tailwind CSS", "AI Integration", "Responsive Design"],
    imageUrl: "/Brainwave.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/brain_wave",
    liveUrl: "https://brain-wave-zeta-six.vercel.app/",
    status: "Work in Progress",
    year: "2025",
    team: "Solo",
    features: [
      "AI-powered video editing tools",
      "Advanced image generation",
      "Real-time preview capabilities",
      "Responsive design across devices",
    ],
    category: "web2",
  },
  {
    title: "MentorMatch",
    description:
      "A mentor matching application designed to connect experienced professionals with mentees seeking guidance and support. The application features a comprehensive matching algorithm, and a user-friendly interface for seamless communication.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    imageUrl: "/project2.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/mentorship-platform--3-",
    liveUrl: "https://mentorship-platform-3.vercel.app/",
    status: "Work in Progress",
    year: "2025",
    team: "Solo",
    features: [
      "Comprehensive matching algorithm for ideal mentor-mentee pairs",
      "Comprehensive analytics for data-driven decision making",
      "User-friendly interface for easy navigation and use",
    ],
    category: "web2",
  },
  {
    title: "Collective Investment Platform",
    description:
      "An innovative fintech solution that enables groups to collectively invest in Play-to-Earn blockchain games. Features secure investment tracking, automated returns distribution, and comprehensive analytics.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "/Saving-app.jpg",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/saving_app",
    liveUrl: "https://saving-app-jet.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: [
      "Secure group investment management",
      "Automated ROI distribution",
      "Real-time performance tracking",
      "Blockchain integration",
    ],
    category: "web3",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website for a client, showcasing their skills and experience as a shopify designer. Features a clean and minimalistic design, advanced animations, and a responsive layout across devices.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "/Portfolio.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/Ebube.Portfolio",
    liveUrl: "https://ebubeportfolio.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: [
      "Responsive design for optimal viewing on various devices",
      "Advanced animations for enhanced user experience",
      "Clean and minimalistic design for effective communication of skills and experience",
    ],
    category: "web2",
  },
  {
    title: "Delve",
    description:
      "A Web3 application showcasing decentralized product workflows and wallet-connected user experiences.",
    tags: ["Web3", "Ethers.js", "Solidity", "Next.js"],
    imageUrl: "/Delve.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/delve-app",
    liveUrl: "https://delve-app-seven.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: ["Wallet-connected flows", "Smart contract integration"],
    category: "web3",
  },
  {
    title: "L-Token",
    description:
      "A token-focused Web3 project demonstrating smart contract interaction and on-chain state.",
    tags: ["Web3", "Solidity", "EVM"],
    imageUrl: "/L_Token.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/NFT-Token",
    liveUrl: "https://l-token.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: ["Token contract integration", "On-chain reads/writes"],
    category: "web3",
  },
  {
    title: "DEX",
    description:
      "A decentralized exchange UI demonstrating swaps, liquidity concepts, and Web3 UX patterns.",
    tags: ["Web3", "DEX", "Solidity", "Next.js"],
    imageUrl: "/Dex.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/DEX",
    liveUrl: "https://dex-l8dk.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: ["Swap UX", "Wallet connect"],
    category: "web3",
  },
  {
    title: "NFT Marketplace",
    description:
      "An NFT marketplace experience with listing and browsing flows and wallet-connected actions.",
    tags: ["Web3", "NFT", "Solidity", "Next.js"],
    imageUrl: "/NFT_Marketplace.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/NFTMarketplace",
    liveUrl: "https://nftmarketplace-six-psi.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: ["NFT listings", "Marketplace UX"],
    category: "web3",
  },

  {
    title: "FarmChain",
    description:
      "A blockchain application for farmers to manage their crops and transactions.",
    tags: ["Web3", "Blockchain", "Solidity", "Next.js"],
    imageUrl: "/FarmChain.png",
    githubUrl: "https://github.com/IyanuOluwaJesuloba/FarmChain",
    liveUrl: "https://farm-chain-tau.vercel.app/",
    status: "Completed",
    year: "2025",
    team: "Solo",
    features: ["Crop management", "Transaction tracking"],
    category: "web3",
  },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    title: "Soropad Launchpad",
    description: "Open source contribution shipped via PR #139 to the Soropad Launchpad repository.",
    repoUrl: "https://github.com/soropad/launchpad",
    prUrl: "https://github.com/soropad/launchpad/pull/139",
    tags: ["Web3", "Open Source", "Pull Request"],
  },
  {
    title: "ChainLogistics",
    description: "Open source contribution shipped via PR #198 to the ChainLogistics repository.",
    repoUrl: "https://github.com/ChianLojistics/ChainLogistics",
    prUrl: "https://github.com/ChianLojistics/ChainLogistics/pull/198",
    tags: ["Web3", "Open Source", "Pull Request"],
  },
  {
    title: "Bridge Watch",
    description: "Open source contribution shipped via PR #426 to the Bridge Watch repository.",
    repoUrl: "https://github.com/StellaBridge/Bridge-Watch",
    prUrl: "https://github.com/StellaBridge/Bridge-Watch/pull/426",
    tags: ["Web3", "Open Source", "Pull Request"],
  },
];
