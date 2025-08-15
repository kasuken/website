# Copilot Instructions My website based on Astro

## Project Overview
This is an Astro-based website that dynamically loads content from Dev.to API (user: kasuken). The project follows Astro best practices and integrates with external APIs for content management.
I also have other pages like Mentor page, Projects page, Uses page and much more.

## Tech Stack
- **Framework**: Astro v5.12.9
- **Content**: Dev.to API integration with custom loaders
- **Styling**: CSS with CSS custom properties (CSS variables)
- **Markdown**: marked library for parsing Dev.to markdown content
- **Integrations**: MDX, Sitemap, RSS
- **Image Handling**: Sharp for optimization

## Project Structure
```
src/
├── components/          # Reusable Astro components
├── content/            # Content collections (now API-driven)
├── layouts/            # Page layouts
├── pages/              # File-based routing
├── styles/             # Global styles
├── utils/              # Utility functions (Dev.to API)
├── loaders/            # Custom content loaders
└── consts.ts           # Global constants
```

## Key Features
- **Dynamic Content Loading**: Uses custom Astro loader to fetch from Dev.to API
- **Rate Limiting**: Implements proper API rate limiting to avoid 429 errors
- **Markdown Rendering**: Converts Dev.to markdown to HTML using marked
- **SEO Optimized**: Includes sitemap, RSS feed, and proper meta tags
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Rich Metadata**: Shows reading time, reactions, comments, and tags

## Code Style Guidelines

### Astro Components (.astro files)
- Use TypeScript in frontmatter sections
- Prefer server-side rendering for data fetching
- Use slots for flexible component composition
- Follow the script-style-markup order
- Use proper TypeScript interfaces for props

```astro
---
// ✅ Good: TypeScript interface for props
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<style>
  /* Component-scoped styles */
</style>

<div>
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>
```

### CSS Guidelines
- Use CSS custom properties for theming
- Follow BEM-like naming conventions
- Prefer component-scoped styles
- Use `:global()` sparingly for markdown content
- Mobile-first responsive design

```css
/* ✅ Good: CSS custom properties */
:root {
  --accent: 136, 58, 234;
  --gray: 96, 115, 159;
  --gray-light: 229, 233, 240;
}

/* ✅ Good: Component-scoped with global for content */
:global(.prose p) {
  margin-bottom: 1rem;
  font-size: 0.9rem;
}
```

### TypeScript/JavaScript
- Use ES modules (`import`/`export`)
- Prefer `const` over `let`
- Use proper error handling with try-catch
- Implement proper TypeScript interfaces
- Use array methods over for loops

```typescript
// ✅ Good: Proper interface and error handling
export interface BlogPost {
  id: string;
  data: {
    title: string;
    pubDate: Date;
    tags: string[];
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    throw error;
  }
}
```

## API Integration Best Practices

### Dev.to API Usage
- Always implement rate limiting (current: avoid concurrent requests)
- Use proper error handling for API failures
- Implement fallback content for missing data
- Validate API responses before processing

```typescript
// ✅ Good: Rate limiting and validation
export async function fetchDevToPosts(): Promise<DevToPost[]> {
  const response = await fetch(`${API_BASE}/articles?username=${USERNAME}`);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  const posts = await response.json();
  return Array.isArray(posts) ? posts : [];
}
```

### Content Loading
- Use Astro's content collections with custom loaders
- Implement proper data transformation
- Handle missing or malformed data gracefully
- Use build-time data fetching when possible

## Content Collection Patterns

### Custom Loaders
- Implement the Loader interface properly
- Provide meaningful logging
- Handle errors gracefully
- Clear and set collection data correctly

```typescript
// ✅ Good: Proper loader implementation
export function devtoLoader(): Loader {
  return {
    name: 'devto-loader',
    load: async ({ store, logger }) => {
      try {
        logger.info('Loading posts from Dev.to...');
        const posts = await getAllBlogPosts();
        
        store.clear();
        posts.forEach(post => {
          store.set({
            id: post.slug,
            data: post.data,
            body: post.body,
          });
        });
        
        logger.info(`Loaded ${posts.length} posts`);
      } catch (error) {
        logger.error(`Failed to load posts: ${error}`);
        throw error;
      }
    },
  };
}
```

### Schema Validation
- Define proper Zod schemas for content validation
- Handle optional fields appropriately
- Use coercion for date fields
- Validate array fields properly

```typescript
// ✅ Good: Comprehensive schema
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()),
  url: z.string().url(),
  readingTime: z.number(),
  reactions: z.number(),
  comments: z.number(),
});
```

## Performance Considerations

### Build Optimization
- Use static generation where possible
- Implement proper image optimization
- Minimize API calls during build
- Use proper caching strategies

### Runtime Performance
- Lazy load images with `loading="lazy"`
- Use proper font loading strategies
- Minimize JavaScript bundle size
- Implement proper error boundaries

## SEO and Accessibility

### Meta Tags
- Use proper Open Graph tags
- Implement Twitter Card meta
- Include canonical URLs
- Use structured data when appropriate

### Accessibility
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Proper contrast ratios
- Keyboard navigation support

## Development Workflow

### File Naming
- Use kebab-case for files and directories
- Use PascalCase for component names
- Use camelCase for variables and functions
- Prefix utility functions appropriately

### Git and Deployment
- Use conventional commit messages
- Test builds before deployment
- Implement proper environment configuration
- Use staging environments for testing

## Common Patterns

### Error Handling
```astro
---
let posts: BlogPost[] = [];
try {
  posts = await getCollection('blog');
} catch (error) {
  console.error('Failed to load posts:', error);
  // Handle gracefully with fallback content
}
---

{posts.length > 0 ? (
  <!-- Render posts -->
) : (
  <p>No posts available at the moment.</p>
)}
```

### Responsive Images
```astro
{heroImage && (
  <img 
    src={heroImage} 
    alt={title} 
    width="720" 
    height="360"
    loading="lazy"
  />
)}
```

### Conditional Rendering with Safety
```astro
{Array.isArray(tags) && tags.length > 0 && (
  <div class="tags">
    {tags.slice(0, 3).map(tag => (
      <span class="tag">#{tag}</span>
    ))}
  </div>
)}
```

## Environment Variables
- Use `.env` files for configuration
- Never commit sensitive API keys
- Use proper environment validation
- Document required environment variables

## Testing Considerations
- Test API integration with proper mocking
- Validate content rendering across devices
- Test error scenarios and fallbacks
- Verify build performance regularly

## Deployment
- Build with `npm run build`
- Preview with `npm run preview`
- Verify all routes work correctly
- Test external API connectivity in production

Remember: Always prioritize user experience, performance, and maintainability when making changes to this codebase.
