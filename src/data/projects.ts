// Portfolio data structure
// You can modify this file to add your own projects

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'library' | 'tool' | 'other';
  status: 'completed' | 'in-progress' | 'archived';
  startDate: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'DevTo Portfolio Integration',
    description: 'Astro-based portfolio website with automatic dev.to blog integration and infinite scroll.',
    longDescription: 'A modern portfolio website built with Astro that automatically fetches and displays blog posts from dev.to using their API. Features include infinite scroll, responsive grid layout, and optimized performance.',
    technologies: ['Astro', 'TypeScript', 'CSS Grid', 'REST API', 'dev.to API'],
    githubUrl: 'https://github.com/kasuken/portfolio',
    liveUrl: 'https://your-portfolio.com',
    imageUrl: '/assets/portfolio-preview.jpg',
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: '2025-08',
    endDate: '2025-08'
  },
  {
    id: 'project-2',
    title: 'PowerShell Utility Scripts',
    description: 'Collection of PowerShell scripts for Windows administration and automation.',
    longDescription: 'A comprehensive collection of PowerShell scripts designed to automate common Windows administration tasks, system maintenance, and development workflows.',
    technologies: ['PowerShell', 'Windows', 'Automation', 'System Administration'],
    githubUrl: 'https://github.com/kasuken/powershell-utils',
    featured: true,
    category: 'tool',
    status: 'in-progress',
    startDate: '2024-01'
  },
  {
    id: 'project-3',
    title: 'Azure Functions Templates',
    description: 'Ready-to-use Azure Functions templates for common scenarios.',
    longDescription: 'A collection of Azure Functions templates covering HTTP triggers, timer functions, blob storage processing, and more. Includes best practices and deployment guides.',
    technologies: ['Azure Functions', 'C#', '.NET', 'Azure', 'Serverless'],
    githubUrl: 'https://github.com/kasuken/azure-functions-templates',
    featured: false,
    category: 'library',
    status: 'completed',
    startDate: '2024-06',
    endDate: '2024-08'
  },
  {
    id: 'project-4',
    title: 'VS Code Extension Pack',
    description: 'Curated VS Code extension pack for .NET developers.',
    longDescription: 'A carefully curated extension pack for Visual Studio Code that includes essential extensions for .NET development, productivity tools, and code quality enhancements.',
    technologies: ['VS Code', 'Extensions', '.NET', 'Developer Tools'],
    githubUrl: 'https://github.com/kasuken/vscode-dotnet-pack',
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=kasuken.dotnet-pack',
    featured: false,
    category: 'tool',
    status: 'completed',
    startDate: '2023-12',
    endDate: '2024-01'
  },
  {
    id: 'project-5',
    title: 'GitHub Actions Workflows',
    description: 'Reusable GitHub Actions workflows for CI/CD pipelines.',
    longDescription: 'A collection of reusable GitHub Actions workflows for various scenarios including .NET applications, Docker containers, Azure deployments, and automated testing.',
    technologies: ['GitHub Actions', 'CI/CD', 'Docker', 'Azure', 'Automation'],
    githubUrl: 'https://github.com/kasuken/github-workflows',
    featured: false,
    category: 'tool',
    status: 'in-progress',
    startDate: '2024-03'
  },
  {
    id: 'project-6',
    title: 'Blazor Component Library',
    description: 'Reusable Blazor components for enterprise applications.',
    longDescription: 'A comprehensive library of reusable Blazor components designed for enterprise applications. Includes data grids, charts, forms, and navigation components.',
    technologies: ['Blazor', 'C#', '.NET', 'Component Library', 'Web Components'],
    githubUrl: 'https://github.com/kasuken/blazor-components',
    featured: false,
    category: 'library',
    status: 'archived',
    startDate: '2023-06',
    endDate: '2023-12'
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
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Applications' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'desktop', label: 'Desktop Applications' },
  { key: 'library', label: 'Libraries & Packages' },
  { key: 'tool', label: 'Tools & Utilities' },
  { key: 'other', label: 'Other' }
] as const;
