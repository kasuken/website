// Uses data types and structure
export interface UseItem {
  id: string;
  name: string;
  description: string;
  category: 'hardware' | 'software' | 'development' | 'design' | 'productivity' | 'gaming' | 'audio' | 'mobile';
  subcategory?: string;
  brand?: string;
  model?: string;
  url?: string;
  affiliateUrl?: string;
  price?: {
    amount: number;
    currency: string;
    approximate?: boolean;
  };
  rating?: number; // 1-5 stars
  yearStarted?: number;
  tags: string[];
  featured: boolean;
  stillUsing: boolean;
  reason: string; // Why you use it
  alternatives?: string[];
  imageUrl?: string;
  specs?: {
    [key: string]: string;
  };
}

export interface UseCategory {
  key: string;
  label: string;
  description: string;
  icon: string;
  subcategories?: string[];
}

// Categories for organization
export const useCategories: UseCategory[] = [
  { 
    key: 'all', 
    label: 'All Items', 
    description: 'View all apps and hardware', 
    icon: '🔧' 
  },
  { 
    key: 'hardware', 
    label: 'Hardware', 
    description: 'Physical devices and equipment', 
    icon: '🖥️',
    subcategories: ['Computer', 'Monitor', 'Audio', 'Input Devices', 'Storage', 'Mobile']
  },
  { 
    key: 'software', 
    label: 'Software', 
    description: 'Applications and tools', 
    icon: '💻',
    subcategories: ['Operating System', 'Browser', 'Utilities', 'Security']
  },
  { 
    key: 'development', 
    label: 'Development', 
    description: 'Programming and development tools', 
    icon: '⚡',
    subcategories: ['Editor', 'Terminal', 'Version Control', 'Database', 'API Tools']
  },
  { 
    key: 'design', 
    label: 'Design', 
    description: 'Design and creative tools', 
    icon: '🎨',
    subcategories: ['Graphics', 'UI/UX', 'Prototyping', 'Video']
  },
  { 
    key: 'productivity', 
    label: 'Productivity', 
    description: 'Organization and productivity apps', 
    icon: '📋',
    subcategories: ['Notes', 'Task Management', 'Calendar', 'Communication']
  },
  { 
    key: 'audio', 
    label: 'Audio', 
    description: 'Music and audio equipment', 
    icon: '🎵',
    subcategories: ['Headphones', 'Speakers', 'Microphone', 'Software']
  }
];

// Sample uses data
export const uses: UseItem[] = [
  // Hardware
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro 16" M3 Max',
    description: 'My primary development machine. The M3 Max chip handles everything I throw at it with incredible performance and battery life.',
    category: 'hardware',
    subcategory: 'Computer',
    brand: 'Apple',
    model: 'MacBook Pro 16" (2023)',
    url: 'https://www.apple.com/macbook-pro/',
    price: {
      amount: 3499,
      currency: 'USD',
      approximate: true
    },
    rating: 5,
    yearStarted: 2024,
    tags: ['laptop', 'apple', 'm3', 'development', 'portable'],
    featured: true,
    stillUsing: true,
    reason: 'Unmatched performance for development, great battery life, excellent display, and seamless integration with the Apple ecosystem.',
    alternatives: ['Dell XPS 15', 'ThinkPad X1 Extreme'],
    specs: {
      'Processor': 'Apple M3 Max',
      'RAM': '64GB Unified Memory',
      'Storage': '2TB SSD',
      'Display': '16.2" Liquid Retina XDR',
      'Ports': '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3'
    }
  },
  {
    id: 'studio-display',
    name: 'Apple Studio Display',
    description: 'Perfect companion to the MacBook Pro. 5K resolution and excellent color accuracy for both development and design work.',
    category: 'hardware',
    subcategory: 'Monitor',
    brand: 'Apple',
    model: 'Studio Display 27"',
    url: 'https://www.apple.com/studio-display/',
    price: {
      amount: 1599,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2024,
    tags: ['monitor', '5k', 'retina', 'usb-c', 'apple'],
    featured: true,
    stillUsing: true,
    reason: 'Crystal clear 5K display, great for code and design. Built-in camera and speakers are convenient for calls.',
    alternatives: ['LG UltraFine 5K', 'Dell UltraSharp U2720Q'],
    specs: {
      'Resolution': '5120 x 2880 (5K)',
      'Size': '27 inches',
      'Brightness': '600 nits',
      'Color Gamut': 'P3 wide color',
      'Connectivity': 'Thunderbolt 3'
    }
  },
  {
    id: 'airpods-pro',
    name: 'AirPods Pro (2nd Gen)',
    description: 'Daily driver for calls, music, and focus sessions. The noise cancellation is incredible for deep work.',
    category: 'audio',
    subcategory: 'Headphones',
    brand: 'Apple',
    model: 'AirPods Pro (2nd Generation)',
    url: 'https://www.apple.com/airpods-pro/',
    price: {
      amount: 249,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2023,
    tags: ['wireless', 'noise-cancellation', 'apple', 'calls', 'music'],
    featured: true,
    stillUsing: true,
    reason: 'Seamless integration with Apple devices, excellent noise cancellation, great for calls and music. Perfect for focus sessions.',
    alternatives: ['Sony WF-1000XM4', 'Bose QuietComfort Earbuds']
  },
  {
    id: 'magic-keyboard',
    name: 'Apple Magic Keyboard',
    description: 'Clean, minimalist keyboard that matches the aesthetic. Great tactile feel for long coding sessions.',
    category: 'hardware',
    subcategory: 'Input Devices',
    brand: 'Apple',
    model: 'Magic Keyboard with Touch ID',
    url: 'https://www.apple.com/shop/product/MK293LL/A/magic-keyboard-with-touch-id-for-mac-models-with-apple-silicon-us-english',
    price: {
      amount: 179,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2024,
    tags: ['keyboard', 'wireless', 'touch-id', 'apple'],
    featured: false,
    stillUsing: true,
    reason: 'Touch ID integration, clean design, reliable wireless connection. Comfortable for extended typing sessions.',
    alternatives: ['Keychron K3', 'Logitech MX Keys']
  },

  // Development Tools
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description: 'My primary code editor. Extensible, fast, and has excellent TypeScript support. The integrated terminal and Git features are fantastic.',
    category: 'development',
    subcategory: 'Editor',
    brand: 'Microsoft',
    url: 'https://code.visualstudio.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2018,
    tags: ['editor', 'typescript', 'javascript', 'extensions', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Best balance of features, performance, and extensibility. Excellent TypeScript support and vast extension ecosystem.',
    alternatives: ['WebStorm', 'Sublime Text', 'Neovim']
  },
  {
    id: 'iterm2',
    name: 'iTerm2',
    description: 'Terminal replacement for macOS with better features, split panes, and customization options.',
    category: 'development',
    subcategory: 'Terminal',
    url: 'https://iterm2.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2019,
    tags: ['terminal', 'macos', 'split-panes', 'customization', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Split panes, better search, customizable themes, and excellent performance. Much better than the default Terminal app.',
    alternatives: ['Hyper', 'Alacritty', 'Default Terminal']
  },
  {
    id: 'github-desktop',
    name: 'GitHub Desktop',
    description: 'Simple, visual Git client that makes version control accessible. Great for reviewing diffs and managing branches.',
    category: 'development',
    subcategory: 'Version Control',
    brand: 'GitHub',
    url: 'https://desktop.github.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2020,
    tags: ['git', 'github', 'version-control', 'visual', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Clean interface for Git operations, great diff viewer, seamless GitHub integration. Perfect for visual learners.',
    alternatives: ['SourceTree', 'GitKraken', 'Command Line Git']
  },
  {
    id: 'postman',
    name: 'Postman',
    description: 'Essential for API development and testing. Collections, environments, and automated testing make API work much easier.',
    category: 'development',
    subcategory: 'API Tools',
    url: 'https://www.postman.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2019,
    tags: ['api', 'testing', 'rest', 'collections', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Comprehensive API testing platform with collections, environments, and automation. Essential for backend development.',
    alternatives: ['Insomnia', 'Thunder Client', 'curl']
  },

  // Design Tools
  {
    id: 'figma',
    name: 'Figma',
    description: 'Primary design tool for UI/UX work. Collaborative features and component systems make design scalable.',
    category: 'design',
    subcategory: 'UI/UX',
    url: 'https://www.figma.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2020,
    tags: ['design', 'ui', 'ux', 'collaborative', 'components', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Best collaborative design tool, excellent component system, works in browser, great for handoff to developers.',
    alternatives: ['Sketch', 'Adobe XD', 'Framer']
  },

  // Productivity
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes, documentation, project management, and knowledge base. Incredibly flexible and powerful.',
    category: 'productivity',
    subcategory: 'Notes',
    url: 'https://www.notion.so/',
    price: {
      amount: 8,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2021,
    tags: ['notes', 'documentation', 'database', 'collaboration', 'flexible'],
    featured: true,
    stillUsing: true,
    reason: 'Ultimate flexibility for organizing information. Great for documentation, project planning, and knowledge management.',
    alternatives: ['Obsidian', 'Roam Research', 'Apple Notes']
  },
  {
    id: 'raycast',
    name: 'Raycast',
    description: 'Spotlight replacement with extensions, clipboard history, and productivity features. Makes macOS much more efficient.',
    category: 'productivity',
    subcategory: 'Utilities',
    url: 'https://www.raycast.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2023,
    tags: ['launcher', 'productivity', 'macos', 'extensions', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Much better than Spotlight with extensions, clipboard history, and quick actions. Essential productivity booster for macOS.',
    alternatives: ['Alfred', 'Spotlight', 'LaunchBar']
  },

  // Software
  {
    id: 'arc-browser',
    name: 'Arc Browser',
    description: 'Modern browser with innovative features like spaces, split view, and excellent tab management.',
    category: 'software',
    subcategory: 'Browser',
    brand: 'The Browser Company',
    url: 'https://arc.net/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2024,
    tags: ['browser', 'modern', 'spaces', 'productivity', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Revolutionary approach to browsing with spaces and split view. Great for organizing different projects and contexts.',
    alternatives: ['Chrome', 'Safari', 'Firefox']
  },
  {
    id: 'cleanmymac',
    name: 'CleanMyMac X',
    description: 'Keeps my Mac running smoothly by cleaning system junk, optimizing performance, and managing storage.',
    category: 'software',
    subcategory: 'Utilities',
    brand: 'MacPaw',
    url: 'https://cleanmymac.com/',
    price: {
      amount: 89,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2023,
    tags: ['cleanup', 'optimization', 'storage', 'maintenance'],
    featured: false,
    stillUsing: true,
    reason: 'Excellent for keeping Mac clean and optimized. User-friendly interface and effective cleaning algorithms.',
    alternatives: ['DaisyDisk', 'AppCleaner', 'Manual cleanup']
  }
];

// Helper functions
export function getFeaturedUses(): UseItem[] {
  return uses.filter(item => item.featured && item.stillUsing);
}

export function getUsesByCategory(category: string): UseItem[] {
  if (category === 'all') return uses.filter(item => item.stillUsing);
  return uses.filter(item => item.category === category && item.stillUsing);
}

export function getUsesBySubcategory(subcategory: string): UseItem[] {
  return uses.filter(item => item.subcategory === subcategory && item.stillUsing);
}

export function getHighestRatedUses(): UseItem[] {
  return uses
    .filter(item => item.stillUsing && item.rating && item.rating >= 5)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0));
}

export function getRecentlyAddedUses(): UseItem[] {
  const currentYear = new Date().getFullYear();
  return uses
    .filter(item => item.stillUsing && item.yearStarted && item.yearStarted >= currentYear - 1)
    .sort((a, b) => (b.yearStarted || 0) - (a.yearStarted || 0));
}

export function getUseById(id: string): UseItem | undefined {
  return uses.find(item => item.id === id);
}

export function getFreeUses(): UseItem[] {
  return uses.filter(item => 
    item.stillUsing && 
    item.price && 
    item.price.amount === 0
  );
}

// Statistics
export function getUsesStats() {
  const totalItems = uses.filter(item => item.stillUsing).length;
  const featuredItems = getFeaturedUses().length;
  const freeItems = getFreeUses().length;
  const ratedItems = uses.filter(item => item.stillUsing && item.rating).length;
  
  const categoryDistribution = useCategories
    .filter(cat => cat.key !== 'all')
    .reduce((acc, category) => {
      acc[category.key] = getUsesByCategory(category.key).length;
      return acc;
    }, {} as Record<string, number>);

  const averageRating = uses
    .filter(item => item.stillUsing && item.rating)
    .reduce((sum, item) => sum + (item.rating || 0), 0) / ratedItems;

  return {
    totalItems,
    featuredItems,
    freeItems,
    ratedItems,
    categoryDistribution,
    averageRating: Math.round(averageRating * 10) / 10
  };
}
