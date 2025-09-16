// Course data types and structure
export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  duration: string; // e.g., "2 days", "1 week", "4 hours"
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'web-development' | 'javascript' | 'react' | 'backend' | 'devops' | 'ai-ml' | 'mobile' | 'data';
  technologies: string[];
  format: 'workshop' | 'bootcamp' | 'online' | 'hybrid' | 'corporate';
  maxParticipants?: number;
  price?: {
    individual?: number;
    corporate?: number;
    currency: string;
  };
  prerequisites?: string[];
  learningOutcomes: string[];
  syllabus: {
    module: string;
    topics: string[];
    duration: string;
  }[];
  featured: boolean;
  available: boolean;
  nextAvailableDate?: string;
  courseUrl?: string;
  brochureUrl?: string;
  imageUrl?: string;
  testimonials?: {
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface CourseCategory {
  key: string;
  label: string;
  description: string;
  icon: string;
}

// Course categories
export const courseCategories: CourseCategory[] = [
  { key: 'all', label: 'All Courses', description: 'View all available courses', icon: '📚' },
  { key: 'web-development', label: 'Web Development', description: 'Frontend and fullstack web development', icon: '🌐' },
  { key: 'javascript', label: 'JavaScript', description: 'Modern JavaScript and TypeScript', icon: '⚡' },
  { key: 'react', label: 'React', description: 'React and ecosystem', icon: '⚛️' },
  { key: 'backend', label: 'Backend', description: 'Server-side development', icon: '🔧' },
  { key: 'devops', label: 'DevOps', description: 'Deployment and infrastructure', icon: '🚀' },
  { key: 'ai-ml', label: 'AI & ML', description: 'Artificial Intelligence and Machine Learning', icon: '🤖' },
  { key: 'mobile', label: 'Mobile', description: 'Mobile app development', icon: '📱' },
  { key: 'data', label: 'Data', description: 'Data analysis and visualization', icon: '📊' }
];

// Sample courses data
export const courses: Course[] = [
  {
    id: 'learning-github',
    title: 'Learning GitHub',
    description: 'A beginner-friendly introduction to GitHub, covering repositories, collaboration, and workflow basics.',
    longDescription: 'This course provides a comprehensive overview of GitHub for beginners. Learn how to create repositories, manage branches, collaborate with others, and use GitHub features to streamline your development workflow. Hosted on LinkedIn Learning.',
    duration: '1 hours',
    level: 'beginner',
    category: 'web-development',
    technologies: ['GitHub', 'Git'],
    format: 'online',
    imageUrl: '/img/1673552160107.jpeg',
    prerequisites: ['Basic computer knowledge', 'Web browser'],
    learningOutcomes: [
      'Understand GitHub fundamentals',
      'Create and manage repositories',
      'Collaborate using pull requests',
      'Navigate GitHub interface',
      'Integrate GitHub with development tools'
    ],
    syllabus: [
      {
        module: 'Getting Started with GitHub',
        topics: ['Account Setup', 'Repository Creation', 'Basic Git Commands'],
        duration: '15 minutes'
      },
      {
        module: 'Collaboration',
        topics: ['Forks', 'Pull Requests', 'Issues', 'Branching'],
        duration: '30 minutes'
      },
      {
        module: 'Workflow & Integration',
        topics: ['GitHub Actions', 'Integrations', 'Best Practices'],
        duration: '15 minutes'
      }
    ],
    featured: true,
    available: true,
    courseUrl: 'https://www.linkedin.com/learning/learning-github-26923460',
    createdAt: '2023-09-01',
    updatedAt: '2025-09-16'
  },
  {
    id: 'powershell-beginners',
    title: 'PowerShell for Beginners',
    description: 'Learn the basics of PowerShell scripting and automation.',
    longDescription: 'This in-progress course introduces PowerShell fundamentals, including command-line basics, scripting, and automation for Windows environments.',
    duration: '4 hours',
    level: 'beginner',
    category: 'backend',
    technologies: ['PowerShell'],
    format: 'online',
    maxParticipants: 25,
    price: {
      individual: 14.99,
      currency: 'USD'
    },
    prerequisites: ['Basic Windows knowledge'],
    nextAvailableDate: '2025-10-15',
    available: true,
    featured: false,
    courseUrl: '#', // Coming soon - placeholder link
    createdAt: '2025-09-16',
    updatedAt: '2025-09-16',
    learningOutcomes: [
      'Understand PowerShell basics and its role in automation',
      'Navigate and use the PowerShell command-line interface',
      'Write simple scripts to automate tasks',
      'Work with files, folders, and system commands',
      'Use variables, loops, and conditional statements in scripts'
    ],
    syllabus: [
      {
        module: 'Introduction to PowerShell',
        topics: ['What is PowerShell?', 'Installation & Setup', 'Command-Line Basics'],
        duration: '30 minutes'
      },
      {
        module: 'Core Commands & Navigation',
        topics: ['Working with Files & Directories', 'Getting Help', 'Pipelines'],
        duration: '45 minutes'
      },
      {
        module: 'Scripting Fundamentals',
        topics: ['Variables', 'Loops', 'Conditional Statements', 'Functions'],
        duration: '45 minutes'
      },
      {
        module: 'Basic Automation',
        topics: ['Automating Tasks', 'Scheduling Scripts', 'Best Practices'],
        duration: '30 minutes'
      }
    ],
    imageUrl: '/img/PowerShellBeginners.png'
  },
  {
    id: 'powershell-advanced',
    title: 'PowerShell Advanced',
    description: 'Advanced PowerShell scripting and automation techniques.',
    longDescription: 'This in-progress course covers advanced PowerShell topics such as modules, error handling, and integration with external systems.',
    duration: '6 hours',
    level: 'advanced',
    category: 'backend',
    technologies: ['PowerShell'],
    format: 'online',
    maxParticipants: 15,
    price: {
      individual: 29.99,
      currency: 'USD'
    },
    prerequisites: ['PowerShell Basics', 'Windows Administration', 'Scripting Experience'],
    nextAvailableDate: '2025-11-20',
    available: true,
    featured: false,
    courseUrl: '#', // Coming soon - placeholder link
    createdAt: '2025-09-16',
    updatedAt: '2025-09-16',
    learningOutcomes: [
      'Develop advanced PowerShell scripts and functions',
      'Handle errors and debug scripts effectively',
      'Create and use custom modules',
      'Integrate PowerShell with external systems and APIs',
      'Implement security best practices in PowerShell automation'
    ],
    syllabus: [
      {
        module: 'Advanced Scripting Techniques',
        topics: ['Functions & Parameters', 'Script Organization', 'Reusable Code'],
        duration: '45 minutes'
      },
      {
        module: 'Error Handling & Debugging',
        topics: ['Try/Catch/Finally', 'Debugging Tools', 'Logging'],
        duration: '30 minutes'
      },
      {
        module: 'Modules & Advanced Features',
        topics: ['Creating Modules', 'Importing/Exporting', 'Profiles'],
        duration: '30 minutes'
      },
      {
        module: 'Integration & Security',
        topics: ['Working with APIs', 'Remote Management', 'Security Best Practices'],
        duration: '45 minutes'
      }
    ],
    imageUrl: '/img/PowershellAdvanced.png'
  }
];

// Helper functions
export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.featured && course.available);
}

export function getCoursesByCategory(category: string): Course[] {
  if (category === 'all') return courses;
  return courses.filter(course => course.category === category);
}

export function getCoursesByLevel(level: Course['level']): Course[] {
  return courses.filter(course => course.level === level);
}

export function getAvailableCourses(): Course[] {
  return courses.filter(course => course.available);
}

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getUpcomingCourses(): Course[] {
  const now = new Date();
  return courses.filter(course => {
    if (!course.nextAvailableDate) return false;
    const courseDate = new Date(course.nextAvailableDate);
    return courseDate > now && course.available;
  }).sort((a, b) => {
    const dateA = new Date(a.nextAvailableDate!);
    const dateB = new Date(b.nextAvailableDate!);
    return dateA.getTime() - dateB.getTime();
  });
}

// Course statistics
export function getCourseStats() {
  const totalCourses = courses.length;
  const availableCourses = getAvailableCourses().length;
  const featuredCourses = getFeaturedCourses().length;
  const upcomingCourses = getUpcomingCourses().length;
  
  const levelDistribution = {
    beginner: getCoursesByLevel('beginner').length,
    intermediate: getCoursesByLevel('intermediate').length,
    advanced: getCoursesByLevel('advanced').length
  };

  return {
    totalCourses,
    availableCourses,
    featuredCourses,
    upcomingCourses,
    levelDistribution
  };
}