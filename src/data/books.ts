// Book data for the books page

export interface Book {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  publisher: string;
  isbn?: string;
  publishedDate?: string;
  pages?: number;
  category: 'technical' | 'programming' | 'cloud' | 'web-development' | 'career' | 'other';
  status: 'published' | 'writing' | 'planning' | 'reviewing';
  technologies: string[];
  purchaseLinks: {
    amazon?: string;
    packt?: string;
    gumroad?: string;
    publisher?: string;
    other?: { name: string; url: string }[];
  };
  featured: boolean;
  language: string;
  authors?: string[]; // For co-authored books
  tableOfContents?: string[];
  reviews?: {
    rating: number;
    comment: string;
    reviewer: string;
    platform: string;
  }[];
}

export const books: Book[] = [
  {
    id: 'mastering-minimal-apis-aspnet-core',
    title: 'Mastering Minimal APIs in ASP.NET Core',
    description: 'Build, test, and prototype web APIs quickly using .NET and C# with this comprehensive guide to minimal APIs in ASP.NET Core.',
    longDescription: 'Dive deep into the world of minimal APIs with ASP.NET Core and learn how to build fast, efficient, and maintainable web APIs. This book covers everything from basic concepts to advanced patterns, including authentication, testing, deployment, and performance optimization.',
    imageUrl: 'https://m.media-amazon.com/images/I/81CLAh1AddL._UF1000,1000_QL80_.jpg',
    publisher: 'Packt Publishing',
    isbn: '9781803237824',
    publishedDate: '2023-11-30',
    pages: 240,
    category: 'programming',
    status: 'published',
    technologies: [
      'ASP.NET Core',
      'C#',
      '.NET 8',
      'Minimal APIs',
      'Entity Framework Core',
      'OpenAPI',
      'Swagger',
      'Docker',
      'Azure',
      'JWT Authentication'
    ],
    purchaseLinks: {
      packt: 'https://www.packtpub.com/en-us/product/mastering-minimal-apis-in-aspnet-core-9781803237824',
      amazon: 'https://www.amazon.com/Mastering-Minimal-APIs-ASP-NET-Core/dp/1803237821',
    },
    featured: true,
    language: 'English',
    tableOfContents: [
      'Introduction to Minimal APIs',
      'Setting up the Development Environment',
      'Creating Your First Minimal API',
      'Routing and HTTP Methods',
      'Model Binding and Validation',
      'Dependency Injection',
      'Authentication and Authorization',
      'Error Handling and Logging',
      'Testing Minimal APIs',
      'Performance and Optimization',
      'Deployment Strategies',
      'Advanced Patterns and Best Practices'
    ],
    reviews: [
      {
        rating: 5,
        comment: 'Excellent comprehensive guide to minimal APIs. Very practical examples and clear explanations.',
        reviewer: 'John D.',
        platform: 'Amazon'
      },
      {
        rating: 4,
        comment: 'Great book for understanding the modern approach to API development with .NET.',
        reviewer: 'Sarah M.',
        platform: 'Goodreads'
      }
    ]
  },
  {
    id: 'mistakes-beginner-developer',
    title: 'The Mistakes I made as a (beginner) developer',
    description: '20 real beginner mistakes explained in plain language with practical advice to avoid falling into the same traps.',
    longDescription: 'When I started coding, I thought writing lines of code was enough. I was wrong. Like many beginners, I fell into the same traps: overplanning, rushing into the first solution, ignoring code quality, reinventing the wheel, and forgetting the end-user experience. This book is my honest reflection on those mistakes — and the lessons I learned the hard way. It\'s not a dry manual. It\'s a guide filled with stories, insights, and colorful illustrations that make every mistake clear, relatable, and (sometimes) funny.',
    publisher: 'Self-Published',
    publishedDate: '2024-09-15',
    imageUrl: 'https://public-files.gumroad.com/2i08awg83lnna1r7q2pofhlz6ih5',
    pages: 88,
    category: 'career',
    status: 'published',
    technologies: [
      'Software Development',
      'Best Practices',
      'Code Quality',
      'Developer Mindset',
      'Career Development',
      'Programming Principles'
    ],
    purchaseLinks: {
      gumroad: 'https://emanuelebartolesi.gumroad.com/l/mistakesasdeveloper',
    },
    featured: false,
    language: 'English',
    tableOfContents: [
      'Introduction: My Journey from Beginner to Developer',
      'Mistake #1: Overplanning Everything',
      'Mistake #2: Rushing to the First Solution',
      'Mistake #3: Ignoring Code Quality',
      'Mistake #4: Reinventing the Wheel',
      'Mistake #5: Forgetting the End-User Experience',
      'Mistake #6: Not Learning from Others',
      'Mistake #7: Avoiding Documentation',
      'Mistake #8: Working in Isolation',
      'Mistake #9: Not Testing Early and Often',
      'Mistake #10: Comparing Yourself to Others',
      '...and 10 more mistakes with solutions'
    ]
  },
  {
    id: 'cloud-automation-ai-packt',
    title: 'Cloud Automation with AI',
    description: 'A comprehensive guide to leveraging artificial intelligence for automating cloud infrastructure, deployments, and operations.',
    longDescription: 'Explore the cutting-edge intersection of cloud computing and artificial intelligence. This book provides practical insights into how AI can revolutionize cloud automation, from intelligent resource provisioning to predictive scaling and automated troubleshooting. Learn to build smarter cloud solutions that adapt, optimize, and self-heal using modern AI techniques.',
    publisher: 'Packt Publishing',
    category: 'cloud',
    status: 'writing',
    imageUrl: 'https://cloudester.com/wp-content/uploads/2025/05/How-AI-and-Cloud-Automation-Are-Defining-the-Future-of-DevOps.webp',
    technologies: [
      'Cloud Computing',
      'Artificial Intelligence',
      'Machine Learning',
      'Azure',
      'AWS',
      'Infrastructure as Code',
      'DevOps',
      'Automation',
      'Kubernetes',
      'Terraform',
      'AI/ML Operations',
      'Predictive Analytics'
    ],
    purchaseLinks: {
      packt: '#', // Will be updated when published
    },
    featured: false,
    language: 'English',
    tableOfContents: [
      'Introduction to Cloud Automation and AI',
      'AI-Driven Infrastructure Provisioning',
      'Intelligent Resource Management',
      'Predictive Scaling with Machine Learning',
      'Automated Monitoring and Alerting',
      'AI-Powered Deployment Strategies',
      'Self-Healing Cloud Systems',
      'Cost Optimization through AI',
      'Security Automation with AI',
      'Compliance and Governance Automation',
      'Building AI-Driven CI/CD Pipelines',
      'Future of Cloud Automation'
    ]
  }
];

export const getFeaturedBooks = () => {
  return books.filter(book => book.featured);
};

export const getPublishedBooks = () => {
  return books.filter(book => book.status === 'published');
};

export const getUpcomingBooks = () => {
  return books.filter(book => book.status === 'writing' || book.status === 'reviewing');
};

export const bookCategories = [
  { key: 'all', label: 'All Categories', icon: '📚' },
  { key: 'technical', label: 'Technical', icon: '⚙️' },
  { key: 'programming', label: 'Programming', icon: '💻' },
  { key: 'cloud', label: 'Cloud', icon: '☁️' },
  { key: 'web-development', label: 'Web Development', icon: '🌐' },
  { key: 'career', label: 'Career & Development', icon: '🚀' },
  { key: 'other', label: 'Other', icon: '📖' }
];

export const getBookStats = () => {
  return {
    totalBooks: books.length,
    publishedBooks: getPublishedBooks().length,
    upcomingBooks: getUpcomingBooks().length,
    featuredBooks: getFeaturedBooks().length,
    averageRating: books
      .filter(book => book.reviews && book.reviews.length > 0)
      .reduce((acc, book) => {
        const bookAvgRating = book.reviews!.reduce((sum, review) => sum + review.rating, 0) / book.reviews!.length;
        return acc + bookAvgRating;
      }, 0) / books.filter(book => book.reviews && book.reviews.length > 0).length || 0
  };
};