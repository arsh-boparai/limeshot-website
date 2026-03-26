export const SERVICES = [
  {
    id: 1,
    slug: 'react-rn-development',
    icon: 'Code2',
    title: 'React & React Native Development',
    tagline: 'Production-grade web and mobile apps',
    description:
      'Our engineers build performant, scalable React web apps and React Native mobile apps — from architecture through deployment. Every codebase is TypeScript-first, maintainable, and built with real-world scale in mind.',
    bullets: [
      'Custom React component libraries and design systems',
      'React Native apps for iOS and Android (Expo & bare workflow)',
      'Real-time dashboards with AG Grid, WebSockets, SharedWorkers',
      'TypeScript-first codebases with strict type safety',
      'Performance optimization, bundle analysis, and code-splitting',
    ],
    idealFor: 'Startups and scale-ups that need a senior engineering team who can own the frontend end-to-end.',
    techs: ['React', 'React Native', 'TypeScript', 'Vite', 'AG Grid', 'Expo'],
  },
  {
    id: 2,
    slug: 'ai-agent-integration',
    icon: 'Cpu',
    title: 'AI & Agent Integration',
    tagline: 'Intelligent automation built into your product',
    description:
      'We integrate AI capabilities directly into your existing applications — LLM-powered features, autonomous agent workflows, and RAG pipelines — without the hype and without breaking your codebase.',
    bullets: [
      'LLM integration (OpenAI, Anthropic, Gemini)',
      'Autonomous agent workflows with Google ADK & MCP',
      'RAG pipelines for document-aware AI features',
      'A2A (Agent-to-Agent) communication architectures',
      'AI case management and triage systems',
    ],
    idealFor: 'Product teams that want to ship AI features that actually work in production.',
    techs: ['Google ADK', 'MCP', 'RAG', 'OpenAI', 'LangChain', 'Firebase'],
  },
  {
    id: 3,
    slug: 'web-mobile-dev',
    icon: 'Smartphone',
    title: 'Web & Mobile Development',
    tagline: 'Full-stack builds from idea to App Store',
    description:
      'End-to-end product development — from discovery and architecture through backend APIs, mobile apps, and cloud deployment. Our team works across the full stack when the project demands it.',
    bullets: [
      'Firebase and GCP backend architectures',
      'GraphQL APIs with Hasura',
      'Azure cloud infrastructure and CI/CD pipelines',
      'Warehouse and logistics mobile apps (barcode, GPS, offline-first)',
      'IoT dashboards and device management UIs',
    ],
    idealFor:
      'Companies that need a technical team who can make architectural decisions and own delivery end-to-end.',
    techs: ['Firebase', 'GCP', 'Azure', 'GraphQL', 'Hasura', 'Node.js'],
  },
];

export const CASE_STUDIES = [
  {
    id: 1,
    tag: 'Logistics / SaaS',
    title: 'Real-Time Dispatch Dashboard',
    brief:
      'Built a real-time logistics operations dashboard for a trucking SaaS company — live shipment tracking, driver assignment, and route optimization for 500+ daily active operators.',
    result: 'Reduced dispatcher workload by 40%',
    metric: '40%',
    metricLabel: 'Dispatcher Time Saved',
    techs: ['React', 'AG Grid', 'WebSockets', 'SharedWorker', 'Firebase'],
  },
  {
    id: 2,
    tag: 'Mobile / React Native',
    title: 'Driver & Warehouse Mobile App',
    brief:
      'End-to-end React Native app for warehouse staff and truck drivers — barcode scanning, offline-first sync, GPS check-ins, and real-time order updates across iOS and Android.',
    result: 'Shipped to 200+ field users across North America',
    metric: '200+',
    metricLabel: 'Field Users Shipped To',
    techs: ['React Native', 'Expo', 'Firebase', 'Offline-first', 'Barcode'],
  },
  {
    id: 3,
    tag: 'AI / Case Management',
    title: 'AI-Powered Intake Platform',
    brief:
      'Designed and built an AI case management platform with automated intake triage, document analysis via RAG, and agent-to-agent escalation workflows using Google ADK.',
    result: 'Cut manual review time by 60%',
    metric: '60%',
    metricLabel: 'Manual Review Reduced',
    techs: ['Google ADK', 'RAG', 'MCP', 'React', 'Firebase', 'OpenAI'],
  },
  {
    id: 4,
    tag: 'IoT / Dashboard',
    title: 'IoT Gate & Device Management UI',
    brief:
      'Real-time IoT device dashboard for automated gate and access control — live device status, event logs, alert management, and remote configuration for 100+ deployed units.',
    result: 'Single pane of glass for 100+ IoT devices',
    metric: '100+',
    metricLabel: 'IoT Devices Managed',
    techs: ['React', 'Azure', 'WebSockets', 'TypeScript', 'Real-time'],
  },
];

export const TECH_STACK = {
  Frontend: ['React', 'React Native', 'TypeScript', 'Vite', 'Tailwind CSS', 'AG Grid', 'Expo'],
  'State & Data': ['Redux', 'Zustand', 'React Query', 'GraphQL', 'Hasura', 'REST APIs'],
  'Backend & Cloud': ['Firebase', 'GCP', 'Azure', 'Node.js', 'Express', 'Firestore'],
  'AI & Agents': ['Google ADK', 'MCP', 'A2A', 'RAG', 'OpenAI', 'LangChain', 'Vertex AI'],
  DevOps: ['GitHub Actions', 'Docker', 'Vercel', 'CI/CD', 'Git', 'Sentry'],
};

export const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Enterprise Clients' },
  { value: '5', label: 'Industries Served' },
  { value: '3', label: 'Products Shipped' },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We align on goals, constraints, and success metrics before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Architecture',
    description:
      'We design the system — data models, API contracts, component structure — with scalability built in from day one.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Iterative delivery with weekly demos. No black boxes. You see progress every step of the way.',
  },
  {
    step: '04',
    title: 'Ship',
    description:
      "Deployment, monitoring, and handoff. We leave your team with docs, tests, and a codebase they can own.",
  },
];

export const COMPANY = {
  name: 'Limeshot Digital',
  email: 'contact@limeshotdigital.com',
  location: 'Ontario, Canada',
  availability: 'Accepting new client projects',
  social: {
    linkedin: 'https://www.linkedin.com/in/arshdeep-singh-a43496121/',
    github: 'https://github.com/arsh-boparai',
  },
};
