// Single source of truth for everything the site says. Edit copy here, not in components.

export const profile = {
  name: "Jinesh Vachhani",
  initials: "JV",
  title: "Software Development Engineer II",
  specialty: "Backend · Node.js · Distributed Systems",
  email: "jineshvachhani@gmail.com",
  phone: "+91 95370 94095",
  phoneHref: "tel:+919537094095",
  linkedin: "https://www.linkedin.com/in/jinesh-vachhani-19a0162ab/",
  location: "India · IST (UTC+05:30)",
  // Set to false to hide the "open to roles" badge.
  available: true,
  availability: "Open to backend & full-stack roles",
  // Drop the PDF at public/Jinesh-Vachhani-Resume.pdf to enable the download buttons.
  resumePath: "/Jinesh-Vachhani-Resume.pdf",
  headline: "Software engineer who designs, builds and owns production systems end to end.",
  summary: [
    "I'm a backend-focused Software Development Engineer with 4+ years of Node.js and 1.5+ years of React experience, building scalable multi-tenant SaaS, Web3 and real-time products.",
    "My core stack is NestJS, Express.js and TypeScript on PostgreSQL and MongoDB, with RabbitMQ, BullMQ, Redis and Socket.IO for event-driven and real-time workloads. I've been the sole backend developer on a Solana prediction market, the primary backend author (~65% of the code) on a Web3 music platform, and the architect of a microservice platform for a multi-tenant AI contact center.",
    "I work directly with clients, product, mobile and smart-contract teams — turning requirements into API contracts, setting module and API standards, and reviewing code — so the systems I ship are reliable, well-tested and easy for other teams to build on.",
  ],
};

export const glance: { label: string; value: string }[] = [
  { label: "Current", value: "SDE-2 at SoluLab" },
  { label: "Experience", value: "4+ yrs Node.js · 1.5+ yrs React" },
  { label: "Core stack", value: "NestJS, TypeScript, PostgreSQL, MongoDB" },
  { label: "Domains", value: "Web3 · Fintech · AI SaaS" },
  { label: "Education", value: "B.E., GTU (2021)" },
];

export const highlights = [
  { value: "~95%", label: "Fewer missed on-chain events after rebuilding a Solana indexer" },
  { value: "360+", label: "REST APIs shipped across 40+ NestJS modules on one platform" },
  { value: "~70%", label: "Faster dashboards — from 3–4 seconds to under 1 second" },
  { value: "10k+", label: "Users served by platforms whose backends I built" },
];

export const strengths = [
  {
    title: "Real-time & event-driven systems",
    body: "Blockchain indexers with streaming, gap backfill and failover; Socket.IO chat and notifications; RabbitMQ and BullMQ pipelines.",
  },
  {
    title: "Reliability at scale",
    body: "Idempotent processing, Idempotency-Key deduplication, per-order locks and PostgreSQL advisory-lock leader election across servers.",
  },
  {
    title: "Multi-tenant SaaS foundations",
    body: "Tenant onboarding, RBAC, OAuth, TOTP 2FA, feature flags, quotas, usage metering and audit logging.",
  },
  {
    title: "Payments & integrations",
    body: "Stripe, Razorpay, MoonPay and Transak, with verified webhooks, subscriptions, plan quotas and automated expiry workflows.",
  },
];

export type Experience = {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "SoluLab Pvt Ltd",
    role: "Software Development Engineer II (SDE-2)",
    start: "2024-07",
    end: null,
    points: [
      "Own backend delivery for client products in Web3, fintech and AI SaaS, from requirements and API design through release.",
      "Sole backend developer on a Solana prediction market: built the real-time blockchain indexer, the order-matching engine integration and background workers that run safely across multiple servers, backed by 160+ Jest test files.",
      "Led the backend of a Web3 music platform as primary developer (~65% of the code), shipping 360+ APIs across 40+ NestJS modules, including token sales, staking and an NFT marketplace.",
      "Designed the microservice architecture for a multi-tenant AI contact center platform, led code reviews for the team, and built new feature modules in its React + TypeScript admin portals.",
      "Set module structure and API standards for frontend and mobile developers, and work directly with clients and smart contract teams on requirements and integrations.",
    ],
  },
  {
    company: "BitsShadow LLP",
    role: "Backend Developer",
    start: "2023-01",
    end: "2024-06",
    points: [
      "Built RabbitMQ-based microservices for a photographer and videographer marketplace app (~220 APIs), including real-time chat, location-based search and subscriptions with Stripe and Razorpay.",
      "Developed the backend for mydryfruit.com, an e-commerce platform for buying dry fruits, covering the product catalogue, cart, orders and online payments.",
      "Implemented secure sign-up (OTP, Google and Apple Sign-In), Firebase push notifications and direct media uploads to AWS S3 for mobile users.",
      "Worked with the mobile team on API design and integration to deliver features from backend to app release.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  kind: string;
  role: string;
  org: string;
  overview: string;
  scope: string[];
  impact: { value: string; label: string }[];
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "kindpredict",
    name: "KindPredict",
    kind: "Solana prediction market platform",
    role: "Sole Backend Developer",
    org: "SoluLab",
    overview:
      "Backend for a Solana prediction market where users trade outcome shares and claim winnings. As the only backend developer I owned the full system and worked with the smart-contract and matching-engine teams on integration contracts.",
    scope: ["14 NestJS modules", "46 database tables", "80+ migrations", "5 user roles", "160+ Jest test files"],
    impact: [
      { value: "~95%", label: "fewer missed on-chain events" },
      { value: "~2×", label: "background processing throughput" },
      { value: "~60%", label: "faster market-maker onboarding" },
      { value: "~80%", label: "less manual market resolution" },
    ],
    points: [
      "Built a fault-tolerant Solana indexer with real-time Yellowstone Geyser streaming, gap backfill and Helius failover.",
      "Enabled multi-server worker scaling with PostgreSQL advisory-lock leader election, eliminating duplicate background processing.",
      "Integrated the order-matching engine with signed orders, receipt verification, gap detection, per-order locks and Idempotency-Key deduplication.",
      "Automated market-maker onboarding from KYB through sandbox certification.",
      "Built role-based authentication with TOTP 2FA, Privy wallet login, custom permissions, forced logout and audit logs.",
      "Automated market resolution and payouts using Solana oracle and settlement data.",
    ],
    stack: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Solana web3.js", "Geyser gRPC", "Helius", "Socket.IO", "Privy", "AWS S3 / SES", "Jest"],
  },
  {
    id: "guild",
    name: "Guild",
    kind: "Web3 music platform for artists",
    role: "Senior Backend Developer · Primary Author",
    org: "SoluLab",
    overview:
      "A multi-tenant SaaS where music artists manage releases, grow their audience and earn through NFT drops, token sales, staking and fan rewards. I wrote roughly 65% of the backend.",
    scope: ["~65% of the backend", "40+ modules", "360+ REST APIs", "10,000+ artists & users"],
    impact: [
      { value: "360+", label: "REST APIs delivered" },
      { value: "40+", label: "NestJS modules" },
      { value: "~90%", label: "fewer missed blockchain events" },
      { value: "10k+", label: "artists & users supported" },
    ],
    points: [
      "Implemented multi-tenant access controls for feature flags, subscriptions, organization blocking and storage quotas.",
      "Built Web3 modules covering ICO, staking, vesting, airdrops and NFT marketplace integrations with Thirdweb and Ethers.js.",
      "Automated real-time blockchain event processing with webhook verification and automatic registration.",
      "Built fan-engagement features including token rewards, quests, contests, social publishing and artist analytics.",
      "Designed a media pipeline for audio/image validation, transcoding and resizing using FFmpeg, Sharp and music-metadata.",
    ],
    stack: ["Node.js", "NestJS", "TypeScript", "MongoDB", "Google Cloud Storage", "Thirdweb", "Ethers.js", "IPFS (Pinata)", "FFmpeg"],
  },
  {
    id: "conx",
    name: "ConX AI",
    kind: "Multi-tenant AI contact center",
    role: "Full Stack Developer · Backend-focused",
    org: "SoluLab",
    overview:
      "A multi-tenant SaaS that lets businesses run AI-driven customer conversations and campaigns across Email, SMS and WhatsApp. I designed its microservice architecture and built features across the backend and React admin portals.",
    scope: ["3 microservices", "Email · SMS · WhatsApp", "LLM / STT / TTS metering"],
    impact: [
      { value: "3", label: "microservices architected" },
      { value: "~70%", label: "faster dashboard loads" },
      { value: "<1s", label: "dashboard load, from 3–4s" },
    ],
    points: [
      "Architected Platform, Billing & Analytics and Notification microservices with clear boundaries and independent scaling.",
      "Built tenant onboarding, RBAC, OAuth integrations and BullMQ-powered bulk campaigns across Email, SMS and WhatsApp.",
      "Cut dashboard load time from 3–4 seconds to under 1 second with precomputed analytics and Redis caching.",
      "Implemented LLM, STT and TTS usage metering with tenant-level quotas, alerts and analytics.",
      "Built centralized notifications and audit logging using Socket.IO, FCM, SendGrid and AWS SES.",
      "Delivered React + TypeScript admin modules using TanStack Query, Zustand and Tailwind CSS.",
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Socket.IO", "AWS SES", "React", "TanStack Query", "Zustand", "Tailwind CSS"],
  },
  {
    id: "camroo",
    name: "Camroo Pro",
    kind: "Social & marketplace app for photographers",
    role: "Backend Developer",
    org: "BitsShadow",
    overview:
      "Backend for a mobile app where photographers and videographers showcase portfolios, find freelance work, rent or sell gear, chat in real time and take paid courses.",
    scope: ["20+ microservices", "~220 REST APIs", "30 MongoDB collections", "10,000+ users"],
    impact: [
      { value: "~220", label: "REST APIs delivered" },
      { value: "~150ms", label: "location search latency" },
      { value: "~70%", label: "less manual operations" },
    ],
    points: [
      "Built 20+ RabbitMQ-based microservices powering ~220 REST APIs and 30 MongoDB collections.",
      "Engineered real-time chat with Socket.IO, including typing indicators, delivery/read receipts and cross-device sync.",
      "Optimized location-based discovery with MongoDB geospatial queries, bringing search latency to ~150ms.",
      "Integrated Razorpay subscriptions with webhooks, plan-based quotas and automated expiry workflows.",
      "Delivered App Store-ready authentication: OTP, Google/Apple Sign-In, account linking and privacy controls.",
      "Automated gear rentals, referrals, course progress and PDF certificate generation.",
    ],
    stack: ["Node.js", "TypeScript", "Express.js", "MongoDB", "RabbitMQ", "Socket.IO", "Stripe", "Razorpay", "AWS S3 / SES", "Firebase Cloud Messaging", "Puppeteer"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Node.js", "NestJS", "Express.js", "TypeScript", "REST APIs", "Microservices", "RabbitMQ", "Socket.IO", "BullMQ"] },
  { group: "Databases", items: ["PostgreSQL (TypeORM)", "MongoDB (Mongoose, geospatial)", "Redis"] },
  { group: "Frontend", items: ["React", "TypeScript", "TanStack Query", "Zustand", "Tailwind CSS"] },
  { group: "Cloud", items: ["AWS S3", "AWS SES", "Google Cloud Storage"] },
  { group: "Auth & Security", items: ["JWT", "OAuth 2.0", "TOTP 2FA", "RBAC", "Webhook signature verification"] },
  { group: "Payments & Integrations", items: ["Stripe", "Razorpay", "MoonPay", "Transak", "Twilio", "SendGrid", "Firebase Cloud Messaging", "HubSpot", "Zendesk"] },
  { group: "Web3", items: ["Solana (web3.js, Geyser gRPC, Helius)", "Ethers.js", "Thirdweb", "IPFS"] },
];

export const education = {
  degree: "Bachelor of Engineering",
  school: "Gujarat Technological University",
  place: "Surat, Gujarat",
  start: "2017",
  end: "2021",
};

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
