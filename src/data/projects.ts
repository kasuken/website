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
  category: 'web' | 'api' | 'extension' | 'vscode' | 'mobile' | 'desktop' | 'library' | 'tool' | 'other';
  status: 'completed' | 'in-progress' | 'archived';
  startDate: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: 'blocky',
    title: 'Blocky',
    description: 'A powerful and lightweight ad blocker browser extension for Chrome and Edge that blocks ads using multiple filter sources.',
    longDescription: `Features
✅ Multi-Source Filtering: Uses EasyList and uBlock Origin filter lists
🚀 High Performance: Built with Manifest V3 and declarative net request
🎯 Smart Blocking: Combines network-level and DOM-based blocking
📊 Statistics: Track blocked ads and protected sites
⚙️ Customizable: Whitelist sites, custom rules, and blocking levels
🔒 Privacy-Focused: No data collection, all processing happens locally`,
    technologies: ['TypeScript', 'Manifest V3', 'Chrome Extension', 'Edge Extension', 'EasyList', 'uBlock Origin'],
    githubUrl: 'https://github.com/kasuken/Blocky',
    featured: false,
    category: 'extension',
    status: 'in-progress',
    startDate: '2024-06'
  },
  {
    id: 'stone-css',
    title: 'stone.css',
    description: 'stone.css - a PoC with style in less than 30 seconds. CSS styles for HTML elements for your next Proof of Concept project.',
    longDescription: 'A lightweight CSS framework providing instant, clean styles for HTML elements. Perfect for rapid prototyping and proof of concept projects.',
    technologies: ['CSS'],
    githubUrl: 'https://github.com/kasuken/stone.css',
    featured: false,
    category: 'library',
    status: 'in-progress',
    startDate: '2024-06'
  },
  {
    id: 'green-software-indicator',
    title: 'Green Software Indicator',
    description: 'A Chrome/Edge browser extension that evaluates websites for green software development practices and displays colored badges indicating their environmental sustainability.',
    longDescription: `Features
- Real-time Analysis: Automatically analyzes websites when you visit them
- Visual Indicators: Color-coded badges (green = excellent, yellow = good, red = needs improvement)
- Detailed Breakdown: Shows specific green software practices being followed
- Performance Monitoring: Tracks website efficiency metrics`,
    technologies: ['TypeScript', 'Chrome Extension', 'Edge Extension', 'Web Performance'],
    githubUrl: 'https://github.com/kasuken/green-software-indicator',
    featured: false,
    category: 'extension',
    status: 'completed',
    startDate: '2024-06',
    imageUrl: 'https://private-user-images.githubusercontent.com/2757486/476085182-a50b619c-01d6-4903-a342-4036deb7105f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY1NjY0ODIsIm5iZiI6MTc1NjU2NjE4MiwicGF0aCI6Ii8yNzU3NDg2LzQ3NjA4NTE4Mi1hNTBiNjE5Yy0wMWQ2LTQ5MDMtYTM0Mi00MDM2ZGViNzEwNWYucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDgzMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA4MzBUMTUwMzAyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NTE2MjlkMDAwY2E4YzQyNjI4MDZjYThjN2NkMjJiMjYyZTc3MzRiNTMwZTExMmY3YzM4YjVhZjM0NTJiZTNjYiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.33KLspBK6UlehX9pCWENgjgyrThUWZub9mj3QJRwPBA'
  },
  {
    id: 'chrome-edge-extension-typescript-template',
    title: 'Chrome/Edge Extension TypeScript Template',
    description: 'A modern, well-structured template for building Chrome and Edge browser extensions using TypeScript and Vite.',
    longDescription: `Features
🚀 Fast Development - Powered by Vite for instant hot reload
📦 TypeScript - Full TypeScript support with strict typing
🎯 Manifest V3 - Uses the latest extension manifest version
🔧 Pre-configured - Ready-to-use setup with all necessary configurations
🎨 Modern UI - Clean popup interface with dark/light theme support
📱 Cross-browser - Compatible with both Chrome and Edge
🛠️ Developer Tools - Comprehensive build scripts and development workflow`,
    technologies: ['TypeScript', 'Vite', 'Manifest V3', 'Chrome Extension', 'Edge Extension'],
    githubUrl: 'https://github.com/kasuken/chrome-edge-extension-typescript-template',
    featured: false,
    category: 'extension',
    status: 'in-progress',
    startDate: '2024-06'
  },
  {
    id: 'copilotinstructions',
    title: 'Copilot Instructions',
    description: 'Instructions and best practices for GitHub Copilot.',
    technologies: [],
    githubUrl: 'https://github.com/kasuken/copilotinstructions',
    featured: false,
    category: 'other',
    status: 'in-progress',
    startDate: '2024-06'
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
  { key: 'api', label: 'APIs' },
  { key: 'extension', label: 'Browser Extensions' },
  { key: 'vscode', label: 'VS Code Extensions' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'desktop', label: 'Desktop Applications' },
  { key: 'library', label: 'Libraries & Packages' },
  { key: 'tool', label: 'Tools & Utilities' },
  { key: 'other', label: 'Other' }
] as const;
