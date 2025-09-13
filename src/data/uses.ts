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
  imageUrl?: string; // Small icon/logo image
  bannerUrl?: string; // Larger banner/product image
  icon?: string; // Emoji icon for the item
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
    id: 'surface-book-3',
    name: 'Surface Book 3',
    description: 'Personal laptop for projects, travel, and events. Versatile and reliable for everyday use.',
    category: 'hardware',
    icon: '💻',
    bannerUrl: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX425_.jpg',
    subcategory: 'Computer',
    brand: 'Microsoft',
    model: 'Surface Book 3',
    url: 'https://www.microsoft.com/en-us/d/surface-book-3/8xbw9g3z71f1',
    price: {
      amount: 2000,
      currency: 'USD',
      approximate: true
    },
    rating: 4,
    yearStarted: 2021,
    tags: ['laptop', 'personal', 'travel', 'windows', 'surface'],
    featured: false,
    stillUsing: true,
    reason: 'Great for personal projects and travel. Detachable screen is handy for events.',
    alternatives: ['Surface Laptop', 'MacBook Pro'],
    specs: {
      'Processor': 'Intel Core i7',
      'RAM': '32GB',
      'Storage': '1TB SSD',
      'Display': '15" PixelSense',
      'GPU': 'NVIDIA GeForce GTX 1660 Ti'
    }
  },
  {
    id: 'surface-laptop-4',
    name: 'Surface Laptop 4',
    description: 'Old company laptop, now used for studying and experimenting with Parrot OS.',
    category: 'hardware',
    icon: '💻',
    bannerUrl: 'https://m.media-amazon.com/images/I/61Vx7dKoYnL._AC_SX425_.jpg',
    subcategory: 'Computer',
    brand: 'Microsoft',
    model: 'Surface Laptop 4',
    url: 'https://www.microsoft.com/en-us/d/surface-laptop-4/946627fb12t1',
    price: {
      amount: 1300,
      currency: 'USD',
      approximate: true
    },
    rating: 3,
    yearStarted: 2022,
    tags: ['laptop', 'study', 'linux', 'parrot-os', 'surface'],
    featured: false,
    stillUsing: true,
    reason: 'Good for experiments and learning with Parrot OS.',
    alternatives: ['Dell XPS 13', 'ThinkPad'],
    specs: {
      'Processor': 'Intel Core i5',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Display': '13.5" PixelSense'
    }
  },
  {
    id: 'surface-laptop-6',
    name: 'Surface Laptop 6',
    description: 'Work laptop. Reliable, though I wish it had more power.',
    category: 'hardware',
    icon: '💻',
    bannerUrl: 'https://m.media-amazon.com/images/I/61Vx7dKoYnL._AC_SX425_.jpg',
    subcategory: 'Computer',
    brand: 'Microsoft',
    model: 'Surface Laptop 6',
    url: 'https://www.microsoft.com/en-us/d/surface-laptop-6/8v9n8j2c7h2b',
    price: {
      amount: 1600,
      currency: 'USD',
      approximate: true
    },
    rating: 4,
    yearStarted: 2024,
    tags: ['laptop', 'work', 'surface', 'windows'],
    featured: false,
    stillUsing: true,
    reason: 'Solid work laptop, but could use more performance for heavy tasks.',
    alternatives: ['MacBook Pro', 'Dell Latitude'],
    specs: {
      'Processor': 'Intel Core Ultra 7',
      'RAM': '32GB',
      'Storage': '1TB SSD',
      'Display': '15" PixelSense'
    }
  },
  {
    id: 'macbook-air-2022',
    name: 'MacBook Air (2022)',
    description: 'Personal laptop for non-development tasks.',
    category: 'hardware',
    icon: '🍎',
    bannerUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
    subcategory: 'Computer',
    brand: 'Apple',
    model: 'MacBook Air (2022)',
    url: 'https://www.apple.com/macbook-air/',
    price: {
      amount: 1200,
      currency: 'USD',
      approximate: true
    },
    rating: 4,
    yearStarted: 2022,
    tags: ['laptop', 'personal', 'apple', 'macos'],
    featured: false,
    stillUsing: true,
    reason: 'Lightweight and portable for personal use, not used for development.',
    alternatives: ['Surface Laptop Go', 'iPad Pro'],
    specs: {
      'Processor': 'Apple M2',
      'RAM': '8GB',
      'Storage': '512GB SSD',
      'Display': '13.6" Retina'
    }
  },
  {
    id: 'asus-rog-49',
    name: 'Asus ROG 49"',
    description: 'Main monitor on my desk. Huge screen real estate for multitasking.',
    category: 'hardware',
    icon: '🖥️',
    bannerUrl: 'https://m.media-amazon.com/images/I/81MbxJY8LnL._AC_SX425_.jpg',
    subcategory: 'Monitor',
    brand: 'Asus',
    model: 'ROG Strix XG49VQ',
    url: 'https://rog.asus.com/monitors/curved/rog-strix-xg49vq-model/',
    price: {
      amount: 900,
      currency: 'USD',
      approximate: true
    },
    rating: 5,
    yearStarted: 2023,
    tags: ['monitor', 'asus', 'gaming', 'ultrawide', 'desk'],
    featured: true,
    stillUsing: true,
    reason: 'Massive ultrawide display, perfect for multitasking and immersive experiences.',
    alternatives: ['Samsung Odyssey G9', 'LG UltraWide'],
    specs: {
      'Resolution': '3840 x 1080',
      'Size': '49 inches',
      'Refresh Rate': '144Hz',
      'Panel': 'VA Curved',
      'Connectivity': 'HDMI, DisplayPort, USB'
    }
  },
  {
    id: 'mx-master-3s',
    name: 'Logitech MX Master 3S',
    description: 'Best mouse ever. Ergonomic, precise, and packed with features for productivity.',
    category: 'hardware',
    icon: '🖱️',
    bannerUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,f_auto,q_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png',
    subcategory: 'Input Devices',
    brand: 'Logitech',
    model: 'MX Master 3S',
    url: 'https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006556.html',
    price: {
      amount: 99,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2023,
    tags: ['mouse', 'logitech', 'ergonomic', 'wireless', 'productivity'],
    featured: true,
    stillUsing: true,
    reason: 'Unmatched comfort and productivity features. Customizable buttons and smooth scroll.',
    alternatives: ['MX Master 2S', 'Apple Magic Mouse'],
    specs: {
      'Connectivity': 'Bluetooth/USB',
      'Battery': 'Rechargeable',
      'Buttons': '7'
    }
  },
  {
    id: 'mx-master-2s',
    name: 'Logitech MX Master 2S',
    description: 'Travel mouse. Reliable and comfortable for use on the go.',
    category: 'hardware',
    icon: '🖱️',
    bannerUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,f_auto,q_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-2s/gallery/mx-master-2s-mouse-top-view.png',
    subcategory: 'Input Devices',
    brand: 'Logitech',
    model: 'MX Master 2S',
    url: 'https://www.logitech.com/en-us/products/mice/mx-master-2s.910-005131.html',
    price: {
      amount: 79,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2020,
    tags: ['mouse', 'travel', 'logitech', 'wireless'],
    featured: false,
    stillUsing: true,
    reason: 'Great for traveling. Comfortable and reliable.',
    alternatives: ['MX Anywhere 2', 'Apple Magic Mouse'],
    specs: {
      'Connectivity': 'Bluetooth/USB',
      'Battery': 'Rechargeable'
    }
  },
  {
    id: 'stream-deck-16',
    name: 'Elgato Stream Deck (16 buttons)',
    description: 'Used for streaming and daily automation tasks.',
    category: 'hardware',
    icon: '🎯',
    bannerUrl: 'https://m.media-amazon.com/images/I/71Wp+6aTgRL._AC_SX425_.jpg',
    subcategory: 'Input Devices',
    brand: 'Elgato',
    model: 'Stream Deck MK.2',
    url: 'https://www.elgato.com/en/stream-deck',
    price: {
      amount: 149,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2022,
    tags: ['streaming', 'automation', 'input', 'elgato'],
    featured: true,
    stillUsing: true,
    reason: 'Essential for streaming and automating daily workflows.',
    alternatives: ['Loupedeck Live', 'Touch Portal'],
    specs: {
      'Buttons': '16',
      'Connectivity': 'USB'
    }
  },
  {
    id: 'mx-mechanical',
    name: 'Logitech MX Mechanical',
    description: 'Best keyboard ever. Tactile, quiet, and wireless.',
    category: 'hardware',
    icon: '⌨️',
    bannerUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,f_auto,q_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-mechanical/gallery/mx-mechanical-keyboard-top-view-us-graphite.png',
    subcategory: 'Input Devices',
    brand: 'Logitech',
    model: 'MX Mechanical',
    url: 'https://www.logitech.com/en-us/products/keyboards/mx-mechanical.920-010797.html',
    price: {
      amount: 169,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2023,
    tags: ['keyboard', 'mechanical', 'logitech', 'wireless', 'tactile'],
    featured: true,
    stillUsing: true,
    reason: 'Best typing experience, wireless, and great battery life.',
    alternatives: ['Keychron K3', 'Microsoft Surface Keyboard'],
    specs: {
      'Switches': 'Tactile Quiet',
      'Connectivity': 'Bluetooth/USB',
      'Battery': 'Rechargeable'
    }
  },
  {
    id: 'ms-keyboard-65',
    name: 'Microsoft Keyboard 65%',
    description: 'Compact keyboard for traveling.',
    category: 'hardware',
    icon: '⌨️',
    bannerUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,f_auto,q_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-4k-pro-webcam/gallery/brio-4k-pro-webcam-gallery-1.png',
    subcategory: 'Input Devices',
    brand: 'Microsoft',
    model: 'Designer Compact Keyboard',
    url: 'https://www.microsoft.com/en-us/d/designer-compact-keyboard/8r2c8n6z5g7b',
    price: {
      amount: 69,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2022,
    tags: ['keyboard', 'compact', 'travel', 'microsoft'],
    featured: false,
    stillUsing: true,
    reason: 'Small form factor, easy to carry for travel.',
    alternatives: ['Logitech MX Keys Mini', 'Keychron K6'],
    specs: {
      'Layout': '65%',
      'Connectivity': 'Bluetooth'
    }
  },
  {
    id: 'kindle-paperwhite',
    name: 'Kindle Paperwhite',
    description: 'E-reader for books and articles.',
    category: 'hardware',
    icon: '📚',
    bannerUrl: 'https://m.media-amazon.com/images/I/61CBpsm-AgL._AC_SL1000_.jpg',
    subcategory: 'Mobile',
    brand: 'Amazon',
    model: 'Kindle Paperwhite',
    url: 'https://www.amazon.com/kindle-paperwhite/',
    price: {
      amount: 139,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2021,
    tags: ['ereader', 'kindle', 'amazon', 'reading'],
    featured: false,
    stillUsing: true,
    reason: 'Perfect for reading books and articles anywhere.',
    alternatives: ['Kobo Clara', 'Kindle Oasis'],
    specs: {
      'Display': '6.8" Paperwhite',
      'Storage': '8GB',
      'Battery': 'Weeks'
    }
  },
  {
    id: 'gaming-pc',
    name: 'Gaming PC',
    description: 'Main desktop for personal projects. Powerful specs for development and gaming.',
    category: 'hardware',
    icon: '🖥️',
    bannerUrl: 'https://m.media-amazon.com/images/I/81jTCFtx7gL._AC_SX425_.jpg',
    subcategory: 'Computer',
    brand: 'Custom Build',
    model: 'Gaming PC',
    price: {
      amount: 2000,
      currency: 'USD',
      approximate: true
    },
    rating: 5,
    yearStarted: 2019,
    tags: ['desktop', 'gaming', 'development', 'windows', 'custom'],
    featured: false,
    stillUsing: true,
    reason: 'High performance for personal projects and gaming.',
    alternatives: ['Alienware Aurora', 'Corsair One'],
    specs: {
      'Processor': 'Intel Core i9',
      'RAM': '64GB',
      'Storage': '4TB SSD/HDD',
      'GPU': 'NVIDIA RTX 1070'
    }
  },
  {
    id: 'apple-max-headphones',
    name: 'Apple AirPods Max',
    description: 'High-end headphones for music and focus.',
    category: 'audio',
    icon: '🎧',
    bannerUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604021221000',
    subcategory: 'Headphones',
    brand: 'Apple',
    model: 'AirPods Max',
    url: 'https://www.apple.com/airpods-max/',
    price: {
      amount: 549,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2023,
    tags: ['headphones', 'apple', 'wireless', 'music', 'focus'],
    featured: true,
    stillUsing: true,
    reason: 'Amazing sound quality and noise cancellation.',
    alternatives: ['Sony WH-1000XM5', 'Bose 700'],
    specs: {
      'Connectivity': 'Bluetooth',
      'Battery': '20 hours'
    }
  },
  {
    id: 'apple-pro-headphones',
    name: 'Apple AirPods Pro',
    description: 'Wireless earbuds for calls and music.',
    category: 'audio',
    icon: '🎧',
    bannerUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1660925797000',
    subcategory: 'Headphones',
    brand: 'Apple',
    model: 'AirPods Pro',
    url: 'https://www.apple.com/airpods-pro/',
    price: {
      amount: 249,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2022,
    tags: ['earbuds', 'apple', 'wireless', 'calls', 'music'],
    featured: false,
    stillUsing: true,
    reason: 'Great for calls and music, portable and comfortable.',
    alternatives: ['Sony WF-1000XM4', 'Bose QuietComfort Earbuds'],
    specs: {
      'Connectivity': 'Bluetooth',
      'Battery': '6 hours'
    }
  },
  {
    id: 'logitech-g432',
    name: 'Logitech G432 Headphones',
    description: 'Used for recording videos and gaming.',
    category: 'audio',
    icon: '🎧',
    bannerUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,f_auto,q_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/gaming-audio/g432-gaming-headset/gallery/g432-gaming-headset-gallery-1.png',
    subcategory: 'Headphones',
    brand: 'Logitech',
    model: 'G432',
    url: 'https://www.logitechg.com/en-us/products/gaming-audio/g432-7-1-surround-sound-gaming-headset.981-000769.html',
    price: {
      amount: 49,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2021,
    tags: ['headphones', 'logitech', 'gaming', 'recording'],
    featured: false,
    stillUsing: true,
    reason: 'Good sound and mic quality for recording and gaming.',
    alternatives: ['HyperX Cloud II', 'SteelSeries Arctis 5'],
    specs: {
      'Connectivity': 'Wired',
      'Microphone': 'Yes'
    }
  },
  {
    id: 'dji-osmo-3',
    name: 'DJI Osmo Mobile 3',
    description: 'Gimbal for vlogging and stable video recording.',
    category: 'hardware',
    icon: '�',
    bannerUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,f_auto,q_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-4k-pro-webcam/gallery/brio-4k-pro-webcam-gallery-1.png',
    subcategory: 'Camera',
    brand: 'DJI',
    model: 'Osmo Mobile 3',
    url: 'https://www.dji.com/osmo-mobile-3',
    price: {
      amount: 99,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2022,
    tags: ['gimbal', 'vlogging', 'video', 'dji'],
    featured: false,
    stillUsing: true,
    reason: 'Great for vlogging and capturing stable videos.',
    alternatives: ['Zhiyun Smooth 4', 'DJI OM 5'],
    specs: {
      'Battery': '15 hours',
      'Weight': '405g'
    }
  },

  // Development Tools
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description: 'My primary code editor. Extensible, fast, and has excellent TypeScript support. The integrated terminal and Git features are fantastic.',
    category: 'development',
    icon: '💻',
    bannerUrl: 'https://code.visualstudio.com/assets/images/code-stable.png',
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
    id: 'windows-terminal',
    name: 'Windows Terminal',
    description: 'Modern terminal for Windows with tabs, split panes, and customization.',
    category: 'development',
    icon: '🖥️',
    bannerUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    subcategory: 'Terminal',
    brand: 'Microsoft',
    url: 'https://aka.ms/terminal',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2022,
    tags: ['terminal', 'windows', 'customization', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Tabs, split panes, and great customization. My daily driver for command line work.',
    alternatives: ['ConEmu', 'Alacritty', 'Default Terminal']
  },
  {
    id: 'github-desktop',
    name: 'GitHub Desktop',
    description: 'Simple, visual Git client that makes version control accessible. Great for reviewing diffs and managing branches.',
    category: 'development',
    icon: '🌳',
    bannerUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
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
    icon: '🚀',
    bannerUrl: 'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8',
    subcategory: 'API Tools',
    url: 'https://www.postman.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2019,
    tags: ['api', 'testing', 'rest', 'collections', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Comprehensive API testing platform with collections, environments, and automation. Essential for backend development.',
    alternatives: ['Insomnia', 'Thunder Client', 'curl']
  },
  {
    id: 'oh-my-posh',
    name: 'Oh My Posh',
    description: 'Prompt theme engine for any shell. I live in the terminal with this!',
    category: 'development',
    icon: '✨',
    bannerUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    subcategory: 'Utilities',
    brand: 'Jan De Dobbeleer',
    url: 'https://ohmyposh.dev/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2023,
    tags: ['terminal', 'prompt', 'customization', 'shell', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Makes my terminal beautiful and productive. Works with PowerShell, Bash, and more.',
    alternatives: ['Starship', 'Powerlevel10k']
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'All my code for work and side projects is hosted here.',
    category: 'development',
    icon: '🐙',
    bannerUrl: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png',
    subcategory: 'Version Control',
    brand: 'GitHub',
    url: 'https://github.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2015,
    tags: ['git', 'hosting', 'version-control', 'github', 'collaboration', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Central place for all my code, collaboration, and open source.',
    alternatives: ['GitLab', 'Bitbucket']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'I cannot work anymore without it. AI pair programmer for code completion and suggestions.',
    category: 'development',
    icon: '🤖',
    bannerUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    subcategory: 'Utilities',
    brand: 'GitHub',
    url: 'https://github.com/features/copilot',
    price: {
      amount: 10,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2022,
    tags: ['ai', 'copilot', 'code-completion', 'productivity', 'github'],
    featured: true,
    stillUsing: true,
    reason: 'Essential for productivity and code quality. Speeds up development.',
    alternatives: ['Amazon CodeWhisperer', 'Tabnine']
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Nothing to add here. Everyone uses it. I use it for everything: work and personal things.',
    category: 'development',
    icon: '🤖',
    bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    subcategory: 'Utilities',
    brand: 'OpenAI',
    url: 'https://chat.openai.com/',
    price: {
      amount: 20,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2022,
    tags: ['ai', 'chatgpt', 'assistant', 'openai', 'productivity'],
    featured: false,
    stillUsing: true,
    reason: 'Universal AI assistant for work, coding, and personal tasks.',
    alternatives: ['Gemini', 'Claude', 'Copilot Chat']
  },

  // Design Tools
  {
    id: 'canva',
    name: 'Canva',
    description: 'My main tool for quick design, social media graphics, and presentations.',
    category: 'design',
    icon: '🎨',
    bannerUrl: 'https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg',
    subcategory: 'Graphics',
    brand: 'Canva',
    url: 'https://www.canva.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2020,
    tags: ['design', 'graphics', 'social-media', 'presentations', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Fast, easy, and collaborative for all kinds of design work.',
    alternatives: ['Adobe Express', 'Crello']
  },

  // Productivity
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes, documentation, project management, and knowledge base. Incredibly flexible and powerful.',
    category: 'productivity',
    icon: '📓',
    bannerUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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

  // Software
  {
    id: 'ms-edge',
    name: 'Microsoft Edge',
    description: 'My main browser for daily work and personal browsing.',
    category: 'software',
    icon: '🌐',
    bannerUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategory: 'Browser',
    brand: 'Microsoft',
    url: 'https://www.microsoft.com/edge',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2022,
    tags: ['browser', 'edge', 'microsoft', 'web', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Fast, secure, and integrates well with my workflow.',
    alternatives: ['Chrome', 'Firefox', 'Arc Browser']
  },
  {
    id: 'mozilla-firefox',
    name: 'Mozilla Firefox',
    description: 'Secondary browser for privacy and testing.',
    category: 'software',
    icon: '🦊',
    bannerUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategory: 'Browser',
    brand: 'Mozilla',
    url: 'https://www.mozilla.org/firefox/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2018,
    tags: ['browser', 'firefox', 'mozilla', 'privacy', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Great privacy features and developer tools.',
    alternatives: ['Chrome', 'Edge', 'Safari']
  },
  {
    id: 'mozilla-developer-edition',
    name: 'Mozilla Firefox Developer Edition',
    description: 'Advanced debugging and web development browser.',
    category: 'software',
    icon: '🔧',
    bannerUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategory: 'Browser',
    brand: 'Mozilla',
    url: 'https://www.mozilla.org/firefox/developer/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2020,
    tags: ['browser', 'developer', 'debugging', 'mozilla', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Best for advanced web debugging and dev tools.',
    alternatives: ['Chrome DevTools', 'Edge DevTools']
  },
  {
    id: 'chrome',
    name: 'Google Chrome',
    description: 'Used for compatibility testing and some web apps.',
    category: 'software',
    icon: '🌐',
    bannerUrl: 'https://www.google.com/chrome/static/images/chrome-logo-m100.svg',
    subcategory: 'Browser',
    brand: 'Google',
    url: 'https://www.google.com/chrome/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2015,
    tags: ['browser', 'chrome', 'google', 'testing', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Industry standard for web compatibility.',
    alternatives: ['Edge', 'Firefox', 'Safari']
  },

  // Productivity & Communication
  {
    id: 'discord',
    name: 'Discord',
    description: 'My main platform for community and work-related communication.',
    category: 'productivity',
    icon: '💬',
    bannerUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategory: 'Communication',
    brand: 'Discord',
    url: 'https://discord.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2017,
    tags: ['community', 'chat', 'voice', 'discord', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Central hub for my communities and work groups.',
    alternatives: ['Slack', 'Teams', 'Telegram']
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Used for work and professional communities.',
    category: 'productivity',
    icon: '#️⃣',
    bannerUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategory: 'Communication',
    brand: 'Slack',
    url: 'https://slack.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2018,
    tags: ['chat', 'work', 'slack', 'communication', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Great for work and professional networking.',
    alternatives: ['Discord', 'Teams']
  },
  {
    id: 'ms-teams',
    name: 'Microsoft Teams',
    description: 'Main communication tool for work. Spend much time on it.',
    category: 'productivity',
    icon: '📹',
    bannerUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategory: 'Communication',
    brand: 'Microsoft',
    url: 'https://www.microsoft.com/en/microsoft-teams/group-chat-software',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2020,
    tags: ['chat', 'work', 'teams', 'microsoft', 'video', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Essential for work meetings and collaboration.',
    alternatives: ['Slack', 'Zoom', 'Discord']
  },

  // Development Tools
  {
    id: 'jetbrains-rider',
    name: 'JetBrains Rider',
    description: 'My first choice for C# and .NET related projects.',
    category: 'development',
    icon: '�️',
    bannerUrl: 'https://resources.jetbrains.com/storage/products/rider/img/meta/rider_logo_300x300.png',
    subcategory: 'Editor',
    brand: 'JetBrains',
    url: 'https://www.jetbrains.com/rider/',
    price: {
      amount: 149,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2021,
    tags: ['editor', 'csharp', '.net', 'jetbrains', 'paid'],
    featured: true,
    stillUsing: true,
    reason: 'Best IDE for C# and .NET development.',
    alternatives: ['Visual Studio', 'VS Code']
  },
  {
    id: 'gitkraken',
    name: 'GitKraken',
    description: 'My favorite software for Git version control.',
    category: 'development',
    icon: '🐙',
    bannerUrl: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategory: 'Version Control',
    brand: 'GitKraken',
    url: 'https://www.gitkraken.com/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2022,
    tags: ['git', 'version-control', 'gui', 'gitkraken', 'free'],
    featured: true,
    stillUsing: true,
    reason: 'Intuitive interface and powerful Git features.',
    alternatives: ['GitHub Desktop', 'SourceTree', 'Command Line Git']
  },
  // Postman already exists in the list
  {
    id: 'lm-studio',
    name: 'LM Studio',
    description: 'Local LLM runner for experimenting with AI models.',
    category: 'development',
    icon: '🤖',
    bannerUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategory: 'Utilities',
    brand: 'LM Studio',
    url: 'https://lmstudio.ai/',
    price: {
      amount: 0,
      currency: 'USD'
    },
    rating: 4,
    yearStarted: 2024,
    tags: ['ai', 'llm', 'local', 'utilities', 'free'],
    featured: false,
    stillUsing: true,
    reason: 'Easy way to run and test local LLMs.',
    alternatives: ['Ollama', 'GPT4All']
  },

  // Audio & Focus
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Cannot live without music. My daily soundtrack.',
    category: 'audio',
    icon: '🎵',
    bannerUrl: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png',
    subcategory: 'Software',
    brand: 'Spotify',
    url: 'https://www.spotify.com/',
    price: {
      amount: 10,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2015,
    tags: ['music', 'audio', 'spotify', 'streaming'],
    featured: false,
    stillUsing: true,
    reason: 'Music for every moment, everywhere.',
    alternatives: ['Apple Music', 'YouTube Music']
  },
  {
    id: 'endel',
    name: 'Endel',
    description: 'Focus and relaxation app for work and personal use.',
    category: 'audio',
    icon: '🧘',
    bannerUrl: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png',
    subcategory: 'Software',
    brand: 'Endel',
    url: 'https://endel.io/',
    price: {
      amount: 7,
      currency: 'USD'
    },
    rating: 5,
    yearStarted: 2023,
    tags: ['focus', 'relaxation', 'audio', 'endel', 'personal'],
    featured: true,
    stillUsing: true,
    reason: 'Helps me focus and relax during the day.',
    alternatives: ['Noisli', 'Brain.fm']
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
