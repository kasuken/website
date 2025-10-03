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
    bannerUrl: 'https://petapixel.com/assets/uploads/2020/06/microsoft_feature.jpg',
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
    bannerUrl: 'https://files.refurbed.com/ii/ms-surface-laptop-4-1145g7-13-1695381140.jpg?t=resize&h=630&w=1200',
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
    bannerUrl: 'https://static01.galaxus.com/productimages/7/1/5/4/1/3/3/4/6/3/4/1/5/2/4/8/1/1/3/59e6875f-f529-4a8c-994a-dfaecf8dc33d_cropped.jpg_720.jpeg',
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
    bannerUrl: 'https://www.hoxtonmacs.co.uk/cdn/shop/files/apple-macbook-air-13-inch-macbook-air-13-inch-m2-midnight-2022-fair-41944397218108.jpg?v=1688460815',
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
    bannerUrl: 'https://dlcdnimgs.asus.com/websites/global/products/k5rAY4rTtIydfq4E/img/PICTURE-IN-PICTURE/sec_pic_hot_1.png',
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
    bannerUrl: 'https://static01.galaxus.com/productimages/2/3/7/8/7/3/8/7/5/9/2/1/6/6/9/2/2/0/3/bfc8a713-aaaf-4ec5-b909-32146d94131a_cropped.jpg_720.jpeg',
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
    bannerUrl: 'https://static01.galaxus.com/productimages/5/7/5/0/9/9/4/9/3/2/2/7/6/9/0/8/3/4/e4a25759-0e69-4d9d-996f-41b3bb7d2471_cropped.jpg_720.jpeg',
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
    bannerUrl: 'https://mattstauffer.com/assets/images/content/live-streaming/streamdeck.jpg',
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
    bannerUrl: 'https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-mechanical/gallery/mx-mechanical-mini/mx-mechanical-mini-keyboard-top-side-view-graphite-uk.png',
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
    bannerUrl: 'https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/f913f48e717e0ab529c94272a7f21a23/original.png',
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
    bannerUrl: 'https://sixcolors.com/wp-content/uploads/2019/04/two-kindles-review-6c.jpg',
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
    bannerUrl: 'https://vrlatech.com/wp-content/uploads/2025/02/Phoenix-Teal-RTX-5090-1-scaled.jpg',
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
    bannerUrl: 'https://static01.galaxus.com/productimages/4/0/2/9/4/5/3/6/AirPods_Max_Silver_PDP_Image_Position-2__en-US.jpg_720.jpeg',
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
    bannerUrl: 'https://static01.galaxus.com/productimages/4/7/9/9/2/0/4/1/7/3/4/5/9/9/5/1/8/8/6/503430c4-cd6d-4c57-8812-f8277e09e9a5_cropped.jpg_sea.jpeg',
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
    bannerUrl: 'https://cdn.mos.cms.futurecdn.net/fJoXgS5LbKoZovmaY3daYo.jpg',
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
    name: 'DJI Osmo Pocket 3',
    description: 'Gimbal for vlogging and stable video recording.',
    category: 'hardware',
    icon: '�',
    bannerUrl: 'https://www.cined.com/content/uploads/2023/10/DJI-osmo-Pocket-3-vertical.jpg',
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
  {
    id: 'logitech-brio-4k',
    name: 'Logitech Brio 4K Stream',
    description: '4K Ultra HD streaming webcam used for calls, recordings, and live content.',
    category: 'hardware',
    icon: '📷',
    bannerUrl: 'https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio-stream-4k-hd-webcam/gallery/brio-stream-4k-ultra-hd-webcam-gallery-1.png',
    subcategory: 'Camera',
    brand: 'Logitech',
    model: 'Brio 4K Stream',
    url: 'https://www.logitech.com/it-ch/shop/p/brio-stream-4k-hd-webcam.960-001718',
    price: {
      amount: 199,
      currency: 'USD',
      approximate: true
    },
    rating: 5,
    yearStarted: 2024,
    tags: ['webcam', 'logitech', 'streaming', 'camera', '4k'],
    featured: false,
    stillUsing: true,
    reason: 'High quality 4K sensor and flexible field of view for professional looking video.',
    alternatives: ['Elgato Facecam', 'Razer Kiyo Pro'],
    specs: {
      'Resolution': '4K Ultra HD',
      'Frame Rate': 'Up to 60fps (1080p)',
      'Field of View': '65° / 78° / 90°',
      'HDR': 'Yes',
      'Connectivity': 'USB 3.0'
    }
  },
  {
    id: 'logitech-c920-hd',
    name: 'Logitech C920 HD Pro',
    description: '1080p HD webcam used as a reliable backup and for a secondary angle in calls/recordings.',
    category: 'hardware',
    icon: '📷',
    bannerUrl: 'https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920/gallery/c920-gallery-1.png',
    subcategory: 'Camera',
    brand: 'Logitech',
    model: 'C920 HD Pro',
    url: 'https://www.logitech.com/it-ch/shop/p/c920-pro-hd-webcam.960-001055',
    price: {
      amount: 79,
      currency: 'USD',
      approximate: true
    },
    rating: 4,
    yearStarted: 2024,
    tags: ['webcam', 'logitech', 'camera', '1080p', 'hd'],
    featured: false,
    stillUsing: true,
    reason: 'Dependable 1080p image quality and built-in dual mics make it a solid backup / secondary camera.',
    alternatives: ['Logitech Brio 4K Stream', 'Razer Kiyo'],
    specs: {
      'Resolution': '1080p @30fps',
      'Field of View': '78°',
      'Autofocus': 'Yes',
      'Microphones': 'Dual stereo',
      'Connectivity': 'USB 2.0'
    }
  },
  // Development Tools
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description: 'My primary code editor. Extensible, fast, and has excellent TypeScript support. The integrated terminal and Git features are fantastic.',
    category: 'development',
    icon: '💻',
    bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukIMGzkMQSz2JoAnCKAuilBv6fM-dsfHKNg&s',
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
    bannerUrl: 'https://store-images.s-microsoft.com/image/apps.64156.13926773940052066.16e93a5b-b25f-4aaf-8a38-77375e237879.00013886-8351-473f-9acd-7fcce9ee7388',
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
    bannerUrl: 'https://github.blog/wp-content/uploads/2021/03/multiple-commits.gif',
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
    bannerUrl: 'https://www.krakend.io/images/documentation/postman-collections.png',
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
    bannerUrl: 'https://images.hanselman.com/blog/Windows-Live-Writer/Creating-the-Ultimate-PowerShell-prompt_11CD9/image_9f793bcd-61f2-424b-845b-46b63b2f37eb.png',
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
    bannerUrl: 'https://images.ctfassets.net/8aevphvgewt8/4zdWoJhLRcNgdkRQn7lBG4/3467a5833e1b04ac12fd7f608d26dadb/code-search-hero.webp?fm=webp',
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
    bannerUrl: 'https://images.ctfassets.net/8aevphvgewt8/7xenBC7iqpKfe5tXk9TKby/caf78ec4e1918cf82681613fcb7e9468/hero-poster-lg.webp',
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
    bannerUrl: 'https://i0.wp.com/yoodli.wpcomstaging.com/wp-content/uploads/2023/03/ChatGPT-3.jpg?resize=1446%2C630&ssl=1',
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
    bannerUrl: 'https://images.squarespace-cdn.com/content/v1/631758e1148c0548900ead1a/1662475298736-54B2SC76LCXFD3895EYH/image-asset.png',
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
    bannerUrl: 'https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/6733d43d-dcc0-4764-84b6-e7ba12d0e965/1723374480864/desktop.jpg',
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
    bannerUrl: 'https://blogs.windows.com/wp-content/uploads/prod/sites/2/2019/08/4cac7883632a1fb69454aba7b0b0c3ac.png',
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
    bannerUrl: 'https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/gallery/images/2021-08-27-10-18-32-5f88e7.png',
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
    bannerUrl: 'https://www.geeky-gadgets.com/wp-content/uploads/2014/11/Firefox-Developer-Edition.jpg',
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
    bannerUrl: 'https://i.pcmag.com/imagery/reviews/068mcnb1wutjy2xxnljbxrd-6-hero-image-gallery.fit_lim.size_1050x591.v1569477855.jpg',
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
    bannerUrl: 'https://www.digitaltrends.com/wp-content/uploads/2020/03/discord-friend-list-scaled.jpg?fit=720%2C720&p=1',
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
    bannerUrl: 'https://assets.asana.biz/transform/8b8b3a42-d0d4-4560-a888-6042e02721ff/slack-asana-output',
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
    bannerUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade001_Hero_960x620_x2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=85&fit=constrain',
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
    bannerUrl: 'https://dontpaniclabs.com/wp-content/uploads/2023/08/jetbrains-rider-review-featured.webp',
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
    bannerUrl: 'https://www.gitkraken.com/wp-content/uploads/2025/03/Frame-19847-1024x577.png',
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
    bannerUrl: 'https://miro.medium.com/v2/resize:fit:2000/1*nGQx6m7OSpPjPCvGL6nhPQ.png',
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
    bannerUrl: 'https://octavio.fr/cdn/shop/articles/Design_sans_titre_53_f3a2f660-2069-4488-9173-1af8a2504102.png?v=1756970892&width=2048',
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
    bannerUrl: 'https://endel.io/pages/index/endel-desktop/endel-for-mac.svg',
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
