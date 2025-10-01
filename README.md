
# 🚀 Emanuele Bartolesi's Portfolio Website

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=flat-square&logo=lighthouse)](https://web.dev/measure/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Deployment](https://img.shields.io/badge/Deployed%20on-AWS%20Amplify-FF9900?style=flat-square&logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)

A blazing-fast, modern, and SEO-optimized portfolio website showcasing expertise in software development, technical writing, speaking, and education. Built with cutting-edge web technologies and optimized for performance and accessibility.

## ✨ Key Features

### 🎯 **Performance & SEO**
- **100/100 Lighthouse Performance** - Optimized for speed and user experience
- **SEO Optimized** - Canonical URLs, OpenGraph, structured data, sitemap, and RSS feed
- **Web Accessibility** - WCAG compliant with semantic HTML and proper ARIA labels
- **Progressive Enhancement** - Works without JavaScript, enhanced with it

### 🎨 **Modern Design & UX**
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **Dark/Light Theme Toggle** - Automatic system preference detection with manual override
- **Smooth Animations** - Subtle micro-interactions and hover effects
- **Typography Excellence** - Carefully chosen fonts and spacing for optimal readability

### 📚 **Content Management**
- **Dynamic Blog Integration** - Automatic synchronization with Dev.to articles
- **Books Showcase** - Dedicated section for published and upcoming books
- **Portfolio Projects** - Interactive project gallery with filtering capabilities
- **Course Catalog** - Professional training programs and workshops
- **Speaking Engagements** - Sessionize integration for conference talks

### 🛠 **Developer Experience**
- **TypeScript Support** - Full type safety across the entire codebase
- **Hot Module Replacement** - Lightning-fast development with instant updates
- **Modular Architecture** - Clean component structure and separation of concerns
- **Git Hooks & Linting** - Code quality enforcement and consistent formatting

## 🏗️ Architecture & Tech Stack

### **Frontend Framework**
- **[Astro](https://astro.build/)** - Modern static site generator with islands architecture
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better developer experience
- **[MDX](https://mdxjs.com/)** - Markdown with JSX components for rich content

### **Styling & Design**
- **CSS Custom Properties** - Modern CSS with design tokens for consistency
- **Mobile-First Responsive Design** - Optimized for all screen sizes
- **CSS Grid & Flexbox** - Modern layout techniques for flexible designs

### **Integrations & APIs**
- **[Dev.to API](https://developers.forem.com/api)** - Automatic blog post synchronization
- **[Sessionize API](https://sessionize.com/)** - Speaking engagement management
- **[RescueTime API](https://www.rescuetime.com/)** - Productivity tracking and stats

### **Deployment & Infrastructure**
- **[AWS Amplify](https://aws.amazon.com/amplify/)** - Serverless deployment with CI/CD
- **Static Site Generation** - Pre-rendered pages for optimal performance
- **Edge Distribution** - Global CDN for fast content delivery

## 📁 Project Structure

```
📦 website/
├── 🎨 public/                    # Static assets
│   ├── 🖼️  img/                   # Images and graphics
│   └── 📝 fonts/                 # Custom web fonts
│
├── 📂 src/
│   ├── 🧩 components/            # Reusable UI components
│   │   ├── BaseHead.astro        # SEO and meta tags
│   │   ├── Header.astro          # Navigation header
│   │   ├── Footer.astro          # Site footer
│   │   ├── ThemeToggle.astro     # Dark/light mode toggle
│   │   └── ...                   # Other components
│   │
│   ├── 📊 data/                  # Content data and configuration
│   │   ├── books.ts              # Books and publications
│   │   ├── courses.ts            # Training courses and workshops
│   │   ├── projects.ts           # Portfolio projects
│   │   └── uses.ts               # Tools and technologies
│   │
│   ├── 🎯 layouts/               # Page layouts and templates
│   │   └── BlogPost.astro        # Blog post layout
│   │
│   ├── 📚 lib/                   # Utility functions and helpers
│   │   ├── devto-loader.ts       # Dev.to API integration
│   │   └── rescuetime-loader.ts  # RescueTime API integration
│   │
│   ├── 📄 pages/                 # Site pages and routes
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About page
│   │   ├── blog/                 # Blog pages
│   │   ├── books.astro           # Books showcase
│   │   ├── courses.astro         # Course catalog
│   │   ├── portfolio.astro       # Project portfolio
│   │   ├── speaking.astro        # Speaking engagements
│   │   ├── mentor.astro          # Mentoring services
│   │   └── ...                   # Other pages
│   │
│   ├── 🎨 styles/                # Global styles and CSS
│   │   └── global.css            # Global CSS variables and base styles
│   │
│   └── ⚙️  consts.ts              # Site configuration constants
│
├── 📋 scripts/                   # Build and utility scripts
│   └── refresh-blog.mjs          # Blog content refresh script
│
├── ⚙️  astro.config.mjs           # Astro configuration
├── 📦 package.json               # Dependencies and scripts
├── 🔧 tsconfig.json              # TypeScript configuration
└── 📖 README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kasuken/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and configure your API keys:
   ```env
   # Dev.to integration (optional)
   DEVTO_API_KEY=your_devto_api_key
   
   # RescueTime integration (optional)
   RESCUETIME_API_KEY=your_rescuetime_api_key
   
   # AWS Amplify deployment (production)
   AWS_AMPLIFY=true
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:4321`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |
| `npm run refresh-blog` | Sync blog posts from Dev.to |

## 🌟 Key Pages & Features

### 🏠 **Homepage** (`/`)
- Hero section with professional introduction
- Featured content and latest blog posts
- GitHub activity calendar and productivity stats
- Quick links to key sections

### 📝 **Blog** (`/blog`)
- Automatic synchronization with Dev.to articles
- Category filtering and search functionality
- RSS feed generation
- SEO-optimized article pages

### 📚 **Books** (`/books`)
- Showcase of published and upcoming books
- Purchase links for multiple platforms (Amazon, Packt, Gumroad)
- Book reviews and ratings display
- Category filtering by topic

### 💼 **Portfolio** (`/portfolio`)
- Interactive project gallery
- Technology filtering and categorization
- Live demos and GitHub repository links
- Project case studies and descriptions

### 🎓 **Courses** (`/courses`)
- Professional training catalog
- Course filtering by skill level and category
- Enrollment information and pricing
- Student testimonials and reviews

### 🎤 **Speaking** (`/speaking`)
- Sessionize integration for conference talks
- Upcoming and past speaking engagements
- Session abstracts and presentation materials
- Event location and date information

### 👨‍🏫 **Mentoring** (`/mentor`)
- Mentoring services and approach
- Booking information and availability
- Success stories and testimonials
- Contact and scheduling links

## 🔧 Customization Guide

### **Adding New Content**

#### 📖 Adding a New Book
```typescript
// src/data/books.ts
{
  id: 'your-book-id',
  title: 'Your Book Title',
  description: 'Brief description',
  publisher: 'Publisher Name',
  category: 'programming', // or 'cloud', 'career', etc.
  status: 'published', // or 'writing', 'planning'
  imageUrl: 'https://example.com/book-cover.jpg',
  purchaseLinks: {
    amazon: 'https://amazon.com/...',
    packt: 'https://packtpub.com/...'
  }
  // ... other properties
}
```

#### 🚀 Adding a New Project
```typescript
// src/data/projects.ts
{
  id: 'project-id',
  title: 'Project Name',
  description: 'Project description',
  category: 'web-app', // or 'library', 'tool', etc.
  status: 'completed',
  technologies: ['React', 'TypeScript', 'Node.js'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://demo.example.com'
  // ... other properties
}
```

### **Styling Customization**

The site uses CSS custom properties for theming. Modify `/src/styles/global.css`:

```css
:root {
  --accent: 0, 102, 204;          /* Primary brand color */
  --accent-light: 51, 153, 255;  /* Lighter variant */
  --accent-dark: 0, 82, 164;     /* Darker variant */
  
  /* Update other CSS variables as needed */
}
```

## 🚀 Deployment

### **AWS Amplify (Recommended)**

1. **Connect your repository** to AWS Amplify
2. **Set environment variables** in Amplify console
3. **Deploy automatically** on every push to main branch

The site is configured to use AWS Amplify adapter for server-side rendering when deployed.

### **Other Platforms**

The site can also be deployed to:
- **Netlify** - Static site hosting
- **Vercel** - Edge functions support
- **GitHub Pages** - Free hosting for public repos
- **Cloudflare Pages** - Global edge deployment

## 🧪 Testing & Quality Assurance

- **Lighthouse Audits** - Performance, SEO, and accessibility testing
- **TypeScript Compilation** - Type safety validation
- **Cross-browser Testing** - Compatibility across modern browsers
- **Mobile Responsiveness** - Testing on various device sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ and lots of 🍵 by [Emanuele Bartolesi](https://github.com/kasuken)*
