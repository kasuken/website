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
    imageUrl: 'https://user-images.githubusercontent.com/2757486/156436683-2378256d-8943-426e-9546-fa83ad297009.png?raw=true'
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
    imageUrl: 'https://private-user-images.githubusercontent.com/2757486/476085182-a50b619c-01d6-4903-a342-4036deb7105f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk0NDA2ODcsIm5iZiI6MTc1OTQ0MDM4NywicGF0aCI6Ii8yNzU3NDg2LzQ3NjA4NTE4Mi1hNTBiNjE5Yy0wMWQ2LTQ5MDMtYTM0Mi00MDM2ZGViNzEwNWYucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MTAwMiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTEwMDJUMjEyNjI3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9N2IxZGJmN2E5ZDFiNTNhMTM0YTllN2Y2OTM5OWFlM2UzZTkxNTY3MjYwNjgzOGY4ZDU4Mzk2MDQ2NThiMmU4NCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.fmcET0cbBPPD6oavoaKoZEt2gn2s1IPlA_K0By1Pcvg'
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
    id: 'vscode-copilot-insights',
    title: 'Copilot Insights',
    description: '💡🤖 VS Code extension to visualize your GitHub Copilot plan, quotas, and limits at a glance, with sidebar and status bar UI.',
    longDescription: `Copilot Insights is a Visual Studio Code extension that surfaces your GitHub Copilot entitlement/quota information and presents it in a VS Code-friendly UI.\n\nFeatures:\n- Sidebar view with quota cards and pacing guidance\n- Status bar indicator for Premium Interactions (remaining / total + %)\n- One-time warning when Premium usage exceeds 85% of your monthly quota\n- Auto-refresh and manual refresh\n- Local Snapshot History: Track premium interactions over time\n- Visual line chart showing usage trends\n- Status badges and quota mood indicator\n- Copy Summary to Clipboard for easy sharing\n- Advanced error reporting and accessibility enhancements\n\nAll data is stored locally and authentication is handled via VS Code’s GitHub auth provider.`,
    technologies: ['TypeScript', 'VS Code Extension', 'GitHub API'],
    githubUrl: 'https://github.com/kasuken/vscode-copilot-insights',
    featured: true,
    category: 'vscode',
    status: 'in-progress',
    startDate: '2024-12',
    imageUrl: 'https://github.com/kasuken/vscode-copilot-insights/blob/main/img/screen1.png?raw=true'
  },
  {
    id: 'vscode-shipit',
    title: 'ShipIt',
    description: '📦🤖 Autonomous PRD-to-code workflow for VS Code. Reads your PRD, generates user stories, and implements them using GitHub Copilot SDK.',
    longDescription: `ShipIt is a Visual Studio Code extension that orchestrates the GitHub Copilot SDK to implement your Product Requirements Document (PRD) in a structured, autonomous workflow.\n\nFeatures:\n- Autonomous Task Loop: Continuously works through your PRD until complete\n- User Stories Workflow: Breaks complex tasks into smaller, implementable pieces\n- Sidebar Control Panel: Real-time status, control buttons, and activity log\n- Smart Progress Tracking: Watches files and automatically detects task completion\n- Error Recovery: Built-in retry logic with exponential backoff\n- PRD Generation: Create structured task lists from descriptions\n- Progress Logging: Maintains a record of all completed work\n- Inactivity Detection: Alerts you if Copilot seems stuck\n\nRequires GitHub Copilot CLI and a valid Copilot subscription.`,
    technologies: ['TypeScript', 'VS Code Extension', 'GitHub Copilot SDK'],
    githubUrl: 'https://github.com/kasuken/vscode-shipit',
    featured: true,
    category: 'vscode',
    status: 'in-progress',
    startDate: '2025-01',
    imageUrl: 'https://private-user-images.githubusercontent.com/2757486/540261026-aad5b973-4f3b-4d15-8156-62e741050dd1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzI3MTAxMDMsIm5iZiI6MTc3MjcwOTgwMywicGF0aCI6Ii8yNzU3NDg2LzU0MDI2MTAyNi1hYWQ1Yjk3My00ZjNiLTRkMTUtODE1Ni02MmU3NDEwNTBkZDEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDMwNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjAzMDVUMTEyMzIzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MWY1Njg3YjM1ODkzNDQxMDQzMjdlZjQ4ZGM5ODQyMTkzYTM5MmRkYjBhNzBiODRkZmM4YjJhMjE2ZDYyMzE1OCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.kBn3HjdzUAmKaQ2_W-BdG31QVDyPMRh0tsO_mwrcTTE'
  },
  {
    id: 'octowatch',
    title: 'OctoWatch',
    description: '👁️‍🗨️🐙🔎 Open source governance tool for GitHub Enterprise. Provides insights, compliance, and automation for organizations. 🏢📊',
    longDescription: `OctoWatch is an open source governance platform for GitHub Enterprise, designed to help organizations manage, monitor, and automate compliance and best practices across all their repositories and teams.\n\nFeatures:\n- Organization-wide insights and dashboards\n- Compliance and policy enforcement\n- Automated reporting and notifications\n- Integration with GitHub APIs and webhooks\n- Customizable rules and workflows\n\nI am the lead mantainer (hosted by Xebia)`,
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
