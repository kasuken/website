export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  marketplaceUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  featured: boolean;
  category: 'web' | 'api' | 'extension' | 'vscode' | 'mobile' | 'desktop' | 'library' | 'tool' | 'other';
  status: 'completed' | 'in-progress' | 'archived';
  startDate?: string;
  endDate?: string;
}

// Descriptions and screenshots come from the linked Marketplace listings.
export const projects: Project[] = [
  {
    id: 'vscode-copilot-insights',
    title: 'Copilot Insights',
    description: 'See your GitHub Copilot plan, quotas, reset window, and AI credit usage trends directly inside VS Code.',
    technologies: ['TypeScript', 'VS Code Extension', 'GitHub API'],
    githubUrl: 'https://github.com/kasuken/vscode-copilot-insights',
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=emanuelebartolesi.vscode-copilot-insights',
    featured: true,
    category: 'vscode',
    status: 'in-progress',
    startDate: '2024-12',
    imageUrl: '/portfolio/copilot-insights.webp',
    imageAlt: 'Copilot Insights sidebar showing AI credit quotas, remaining allowance, and pacing guidance.',
    imageWidth: 652,
    imageHeight: 817
  },
  {
    id: 'taskdeck',
    title: 'TaskDeck',
    description: 'A control center to manage and launch VS Code tasks with an elegant side panel interface.',
    technologies: ['VS Code Extension'],
    githubUrl: 'https://github.com/kasuken/vscode-taskdeck',
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=emanuelebartolesi.taskdeck',
    featured: false,
    category: 'vscode',
    status: 'completed',
    imageUrl: '/portfolio/taskdeck.webp',
    imageAlt: 'TaskDeck demo showing workspace tasks, run buttons, and the favorite action in the VS Code sidebar.',
    imageWidth: 633,
    imageHeight: 664
  },
  {
    id: 'vscode-slidev-studio',
    title: 'Slidev Studio',
    description: 'Slidev Studio brings a presentation-first workflow to Slidev: choose a deck, browse its slides, edit Markdown, and present.',
    technologies: ['VS Code Extension', 'Slidev', 'Markdown'],
    githubUrl: 'https://github.com/kasuken/vscode-slidev-studio',
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=emanuelebartolesi.vscode-slidev-studio',
    featured: false,
    category: 'vscode',
    status: 'in-progress',
    imageUrl: '/portfolio/slidev-studio.webp',
    imageAlt: 'Slidev Studio running in VS Code with rendered slide thumbnails, Markdown source, and live preview.',
    imageWidth: 1600,
    imageHeight: 874
  },
  {
    id: 'vscode-carbonbit',
    title: 'CarbonBit',
    description: 'CarbonBit is a VS Code extension that turns your AI coding activity into understandable environmental impact estimates.',
    technologies: ['VS Code Extension', 'AI', 'Sustainability'],
    githubUrl: 'https://github.com/kasuken/vscode-carbonbit',
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=emanuelebartolesi.vscode-carbonbit',
    featured: false,
    category: 'vscode',
    status: 'completed',
    imageUrl: '/portfolio/carbonbit.webp',
    imageAlt: 'CarbonBit with a pixel planet, live AI activity, and estimated CO₂e and water impact using sample data.',
    imageWidth: 1600,
    imageHeight: 956
  },
  {
    id: 'vscode-aiquota',
    title: 'AI Quota',
    description: 'Track remaining quota and reset times for Claude, ChatGPT / Codex, Antigravity, GitHub Copilot, OpenCode Go, and Freebuff without leaving your editor.',
    technologies: ['VS Code Extension', 'AI', 'Usage Monitoring'],
    githubUrl: 'https://github.com/kasuken/vscode-aiquota',
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=emanuelebartolesi.vscode-aiquota',
    featured: false,
    category: 'vscode',
    status: 'completed',
    imageUrl: '/portfolio/aiquota.webp',
    imageAlt: 'AI Quota sidebar and dashboard showing provider allowances and reset times with clearly labeled sample accounts.',
    imageWidth: 1200,
    imageHeight: 900
  }
];

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(project => project.status === status);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export const categories = [
  { key: 'all', label: '📋 All Projects' },
  { key: 'web', label: '🌐 Web Applications' },
  { key: 'api', label: '🔌 APIs' },
  { key: 'extension', label: '🧩 Browser Extensions' },
  { key: 'vscode', label: '💻 VS Code Extensions' },
  { key: 'mobile', label: '📱 Mobile Apps' },
  { key: 'desktop', label: '🖥️ Desktop Applications' },
  { key: 'library', label: '📦 Libraries & Packages' },
  { key: 'tool', label: '🛠️ Tools & Utilities' },
  { key: 'other', label: '🎯 Other' }
] as const;
