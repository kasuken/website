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
    description: '🛡️🚫✨ A powerful and lightweight ad blocker browser extension for Chrome and Edge that blocks ads using multiple filter sources. 🖥️🌐',
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
    startDate: '2024-06',
    imageUrl: 'https://github.com/kasuken/Blocky/blob/main/assets/screenshots/02.png?raw=true'

  },
  {
    id: 'stone-css',
    title: 'stone.css',
    description: '🎨🪨 stone.css - a PoC with style in less than 30 seconds. CSS styles for HTML elements for your next Proof of Concept project. ⚡️💡',
    longDescription: `⚙️ Core Coverage
- 📄 Typography scale + vertical rhythm
- 🧾 Lists / tables / forms / buttons / code / blockquotes
- 🌓 Auto light & dark (prefers-color-scheme)
- ♿ Contrast targets aiming WCAG AA
- 📐 Fluid readable line lengths
- 🖨️ Print-friendly defaults

🧭 Design Principles
- Element-first: minimal custom classes 🧱
- Zero config: drop in & go 🚀
- Tasteful restraint: no utility explosion 🚫
- Predictable spacing + scale rhythm 📊
- Progressive enhancement friendly 🌿

✅ Perfect For
Spikes ⚡ · Hackathons 🧪 · Early product demos 🛠️ · Internal tools 🗂️ · Docs / README site placeholders 📘`,
    technologies: ['CSS'],
    githubUrl: 'https://github.com/kasuken/stone.css',
    featured: false,
    category: 'library',
    status: 'in-progress',
    startDate: '2024-06',
    imageUrl: 'https://user-images.githubusercontent.com/2757486/156436683-2378256d-8943-426e-9546-fa83ad297009.png'
  },
  {
    id: 'green-software-indicator',
    title: 'Green Software Indicator',
    description: '🌱💚🟢 A Chrome/Edge browser extension that evaluates websites for green software development practices and displays colored badges indicating their environmental sustainability. 🌍🔋',
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
    imageUrl: 'https://private-user-images.githubusercontent.com/2757486/476085182-a50b619c-01d6-4903-a342-4036deb7105f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgyMjU2NjAsIm5iZiI6MTc1ODIyNTM2MCwicGF0aCI6Ii8yNzU3NDg2LzQ3NjA4NTE4Mi1hNTBiNjE5Yy0wMWQ2LTQ5MDMtYTM0Mi00MDM2ZGViNzEwNWYucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDkxOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA5MThUMTk1NjAwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MWIyM2NiZTE4MjlmMGMxOGI1MmM0NGIzOWNiMmUxNDBkMDZkNDlkZmE3YjY1ZmMxMGM5YzUzNmVkNTQ1ODFhNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.uUi85AnIqglk9Hy8KpDv9XaWI7HF15SkNKAGdxvhmtQ'
  },
  {
    id: 'chrome-edge-extension-typescript-template',
    title: 'Chrome/Edge Extension TypeScript Template',
    description: '🧩⚡️🛠️ A modern, well-structured template for building Chrome and Edge browser extensions using TypeScript and Vite. 🚀🖥️',
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
    startDate: '2024-06',
    imageUrl: 'https://i.imgur.com/2JydhiK.png'
  },
  {
    id: 'copilotinstructions',
    title: 'Copilot Instructions',
    description: '🤖📋✨ Instructions and best practices for GitHub Copilot. 💡📝',
    longDescription: `🤖 Copilot Instructions — curated guidance for getting high‑quality, secure, and efficient output from GitHub Copilot.

📌 Includes
- 🧠 Prompt patterns (scaffolding, refactor, test gen, explain)
- 🚫 Anti‑patterns (over-broad asks, vague intent, leaking secrets)
- 🧪 Testing prompts (unit, property, edge cases)
- 🛡️ Secure coding reminders (inputs, secrets, dependency scrutiny)
- 🔄 Iteration workflow (spec → draft → refine → validate)
- 🧩 Pairing styles (directive vs exploratory prompting)

💡 Prompt Building Tips
- State intent + constraints + style.
- Provide examples (few-shot) when format matters.
- Ask for diff-friendly output when patching code.`,
    technologies: [],
    githubUrl: 'https://github.com/kasuken/copilotinstructions',
    featured: false,
    category: 'other',
    status: 'in-progress',
    startDate: '2024-06',
    imageUrl: 'https://i.imgur.com/IE8Ccwq.png'
  },
  {
    id: 'octowatch',
    title: 'OctoWatch',
    description: '👁️‍🗨️🐙🔎 Open source governance tool for GitHub Enterprise. Provides insights, compliance, and automation for organizations. 🏢📊',
    longDescription: `OctoWatch is an open source governance platform for GitHub Enterprise, designed to help organizations manage, monitor, and automate compliance and best practices across all their repositories and teams.

Features:
- Organization-wide insights and dashboards
- Compliance and policy enforcement
- Automated reporting and notifications
- Integration with GitHub APIs and webhooks
- Customizable rules and workflows

I am the lead mantainer (hosted by Xebia)`,
    technologies: ['TypeScript', 'Node.js', 'GitHub API', 'Governance', 'Automation'],
    githubUrl: 'https://github.com/xebia/octowatch',
    featured: true,
    category: 'tool',
    status: 'in-progress',
    startDate: '2025-08',
    imageUrl: 'https://github.com/xebia/octowatch/raw/main/screenshots/4.png'
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
