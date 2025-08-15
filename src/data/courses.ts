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
  bookingUrl?: string;
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
    id: 'modern-react-development',
    title: 'Modern React Development',
    description: 'Learn to build modern, scalable React applications with hooks, context, and best practices.',
    longDescription: 'This comprehensive React course covers everything from fundamentals to advanced patterns. Students will learn modern React development including hooks, context API, state management, testing, and performance optimization. Perfect for developers looking to master React in 2025.',
    duration: '3 days',
    level: 'intermediate',
    category: 'react',
    technologies: ['React', 'TypeScript', 'React Router', 'React Query', 'Jest', 'Testing Library'],
    format: 'workshop',
    maxParticipants: 20,
    price: {
      individual: 1299,
      corporate: 2499,
      currency: 'USD'
    },
    prerequisites: ['Basic JavaScript knowledge', 'Understanding of HTML/CSS', 'Node.js basics'],
    learningOutcomes: [
      'Build complex React applications with confidence',
      'Master React hooks and custom hooks',
      'Implement effective state management strategies',
      'Write comprehensive tests for React components',
      'Optimize React app performance',
      'Deploy React applications to production'
    ],
    syllabus: [
      {
        module: 'React Fundamentals',
        topics: ['Components and JSX', 'Props and State', 'Event Handling', 'Conditional Rendering'],
        duration: '4 hours'
      },
      {
        module: 'Modern React Patterns',
        topics: ['React Hooks', 'Context API', 'Custom Hooks', 'Error Boundaries'],
        duration: '6 hours'
      },
      {
        module: 'State Management',
        topics: ['React Query', 'Zustand', 'State Architecture', 'Data Fetching'],
        duration: '4 hours'
      },
      {
        module: 'Testing & Deployment',
        topics: ['Unit Testing', 'Integration Testing', 'E2E Testing', 'CI/CD Pipeline'],
        duration: '4 hours'
      }
    ],
    featured: true,
    available: true,
    nextAvailableDate: '2025-09-15',
    bookingUrl: 'https://example.com/book/react-development',
    imageUrl: '/images/courses/react-course.jpg',
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'Frontend Developer',
        company: 'TechCorp',
        quote: 'This course transformed my React skills. The instructor\'s approach to teaching modern patterns was exceptional.',
        rating: 5
      }
    ],
    createdAt: '2025-01-15',
    updatedAt: '2025-08-01'
  },
  {
    id: 'fullstack-javascript',
    title: 'Full-Stack JavaScript Development',
    description: 'Complete web development bootcamp covering frontend, backend, and database technologies.',
    longDescription: 'An intensive bootcamp covering the entire JavaScript ecosystem. From React frontends to Node.js backends, MongoDB databases, and modern deployment strategies. Students will build multiple full-stack projects and learn industry best practices.',
    duration: '2 weeks',
    level: 'intermediate',
    category: 'web-development',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'AWS'],
    format: 'bootcamp',
    maxParticipants: 15,
    price: {
      individual: 3999,
      corporate: 6999,
      currency: 'USD'
    },
    prerequisites: ['JavaScript fundamentals', 'Basic Git knowledge', 'HTML/CSS proficiency'],
    learningOutcomes: [
      'Build complete full-stack web applications',
      'Design and implement RESTful APIs',
      'Work with NoSQL databases',
      'Deploy applications to cloud platforms',
      'Implement authentication and authorization',
      'Follow modern development workflows'
    ],
    syllabus: [
      {
        module: 'Frontend Development',
        topics: ['React Ecosystem', 'State Management', 'Routing', 'UI Libraries'],
        duration: '3 days'
      },
      {
        module: 'Backend Development',
        topics: ['Node.js', 'Express.js', 'API Design', 'Middleware', 'Authentication'],
        duration: '4 days'
      },
      {
        module: 'Database & Storage',
        topics: ['MongoDB', 'Mongoose', 'Database Design', 'File Storage'],
        duration: '2 days'
      },
      {
        module: 'Deployment & DevOps',
        topics: ['Docker', 'AWS', 'CI/CD', 'Monitoring', 'Performance'],
        duration: '3 days'
      }
    ],
    featured: true,
    available: true,
    nextAvailableDate: '2025-10-01',
    bookingUrl: 'https://example.com/book/fullstack-js',
    createdAt: '2025-02-01',
    updatedAt: '2025-08-05'
  },
  {
    id: 'typescript-mastery',
    title: 'TypeScript Mastery',
    description: 'Master TypeScript from basics to advanced patterns for large-scale applications.',
    duration: '2 days',
    level: 'intermediate',
    category: 'javascript',
    technologies: ['TypeScript', 'JavaScript', 'Node.js', 'React'],
    format: 'workshop',
    maxParticipants: 25,
    price: {
      individual: 899,
      corporate: 1699,
      currency: 'USD'
    },
    prerequisites: ['Strong JavaScript knowledge', 'ES6+ features understanding'],
    learningOutcomes: [
      'Write type-safe TypeScript applications',
      'Use advanced TypeScript features',
      'Migrate JavaScript projects to TypeScript',
      'Configure TypeScript for different environments',
      'Debug TypeScript compilation issues'
    ],
    syllabus: [
      {
        module: 'TypeScript Fundamentals',
        topics: ['Basic Types', 'Interfaces', 'Classes', 'Generics'],
        duration: '4 hours'
      },
      {
        module: 'Advanced TypeScript',
        topics: ['Utility Types', 'Conditional Types', 'Template Literals', 'Decorators'],
        duration: '4 hours'
      },
      {
        module: 'Real-World Applications',
        topics: ['React with TypeScript', 'Node.js APIs', 'Testing', 'Migration Strategies'],
        duration: '4 hours'
      }
    ],
    featured: false,
    available: true,
    nextAvailableDate: '2025-09-20',
    bookingUrl: 'https://example.com/book/typescript-mastery',
    createdAt: '2025-03-01',
    updatedAt: '2025-07-20'
  },
  {
    id: 'cloud-deployment-aws',
    title: 'Cloud Deployment with AWS',
    description: 'Learn to deploy and scale web applications using Amazon Web Services.',
    duration: '1 week',
    level: 'intermediate',
    category: 'devops',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    format: 'hybrid',
    maxParticipants: 18,
    price: {
      individual: 1899,
      corporate: 3299,
      currency: 'USD'
    },
    prerequisites: ['Basic Linux knowledge', 'Web development experience', 'Git proficiency'],
    learningOutcomes: [
      'Deploy applications to AWS cloud',
      'Configure auto-scaling and load balancing',
      'Implement CI/CD pipelines',
      'Monitor and optimize cloud infrastructure',
      'Manage costs and security in the cloud'
    ],
    syllabus: [
      {
        module: 'AWS Fundamentals',
        topics: ['EC2', 'S3', 'RDS', 'VPC', 'IAM'],
        duration: '2 days'
      },
      {
        module: 'Containerization',
        topics: ['Docker', 'ECS', 'ECR', 'Container Best Practices'],
        duration: '1 day'
      },
      {
        module: 'Infrastructure as Code',
        topics: ['Terraform', 'CloudFormation', 'Infrastructure Management'],
        duration: '1 day'
      },
      {
        module: 'DevOps Practices',
        topics: ['CI/CD', 'Monitoring', 'Logging', 'Security'],
        duration: '1 day'
      }
    ],
    featured: false,
    available: true,
    nextAvailableDate: '2025-11-01',
    bookingUrl: 'https://example.com/book/aws-deployment',
    createdAt: '2025-04-01',
    updatedAt: '2025-08-10'
  },
  {
    id: 'ai-web-development',
    title: 'AI-Powered Web Development',
    description: 'Integrate AI and machine learning capabilities into modern web applications.',
    longDescription: 'Explore the intersection of AI and web development. Learn to integrate OpenAI APIs, build AI-powered features, implement recommendation systems, and create intelligent user experiences. Perfect for developers looking to add AI capabilities to their applications.',
    duration: '3 days',
    level: 'advanced',
    category: 'ai-ml',
    technologies: ['OpenAI API', 'LangChain', 'Vector Databases', 'Python', 'JavaScript', 'React'],
    format: 'workshop',
    maxParticipants: 16,
    price: {
      individual: 1599,
      corporate: 2999,
      currency: 'USD'
    },
    prerequisites: ['Strong programming background', 'Web development experience', 'Basic Python knowledge'],
    learningOutcomes: [
      'Build AI-powered web applications',
      'Integrate with OpenAI and other AI APIs',
      'Implement semantic search and recommendations',
      'Create conversational interfaces',
      'Handle AI model deployment and scaling'
    ],
    syllabus: [
      {
        module: 'AI Fundamentals for Developers',
        topics: ['AI/ML Basics', 'APIs vs Models', 'Prompt Engineering', 'Ethics'],
        duration: '4 hours'
      },
      {
        module: 'Building AI Features',
        topics: ['OpenAI Integration', 'Chat Interfaces', 'Content Generation', 'Image Processing'],
        duration: '8 hours'
      },
      {
        module: 'Advanced AI Applications',
        topics: ['Vector Databases', 'Semantic Search', 'RAG Systems', 'Fine-tuning'],
        duration: '6 hours'
      }
    ],
    featured: true,
    available: true,
    nextAvailableDate: '2025-10-15',
    bookingUrl: 'https://example.com/book/ai-web-dev',
    testimonials: [
      {
        name: 'Michael Chen',
        role: 'CTO',
        company: 'StartupXYZ',
        quote: 'This course opened up entirely new possibilities for our product. The AI integration techniques were game-changing.',
        rating: 5
      }
    ],
    createdAt: '2025-05-01',
    updatedAt: '2025-08-11'
  },
  {
    id: 'mobile-react-native',
    title: 'React Native Mobile Development',
    description: 'Build cross-platform mobile applications using React Native and Expo.',
    duration: '1 week',
    level: 'intermediate',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Firebase'],
    format: 'online',
    maxParticipants: 30,
    price: {
      individual: 1199,
      corporate: 2199,
      currency: 'USD'
    },
    prerequisites: ['React experience', 'JavaScript proficiency', 'Mobile development interest'],
    learningOutcomes: [
      'Develop cross-platform mobile apps',
      'Navigate React Native ecosystem',
      'Implement native device features',
      'Deploy apps to app stores',
      'Optimize mobile app performance'
    ],
    syllabus: [
      {
        module: 'React Native Basics',
        topics: ['Setup', 'Components', 'Navigation', 'Styling'],
        duration: '1 day'
      },
      {
        module: 'Advanced Features',
        topics: ['Native Modules', 'Animations', 'Push Notifications', 'Camera'],
        duration: '2 days'
      },
      {
        module: 'State and Data',
        topics: ['Redux Toolkit', 'API Integration', 'Offline Storage', 'Sync'],
        duration: '1 day'
      },
      {
        module: 'Deployment',
        topics: ['App Store', 'Google Play', 'OTA Updates', 'Analytics'],
        duration: '1 day'
      }
    ],
    featured: false,
    available: true,
    nextAvailableDate: '2025-09-30',
    bookingUrl: 'https://example.com/book/react-native',
    createdAt: '2025-06-01',
    updatedAt: '2025-08-01'
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
