import type { Loader } from 'astro/loaders';
import { config } from 'dotenv';

// Load environment variables
config();

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  cover_image: string | null;
  tag_list: string[];
  slug: string;
  body_markdown: string;
  canonical_url: string;
  social_image: string;
  readable_publish_date: string;
  reading_time_minutes?: number;
  public_reactions_count?: number;
  comments_count?: number;
  page_views_count?: number;
  positive_reactions_count?: number;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}

export function devToLoader(): Loader {
  return {
    name: 'devto-loader',
    load: async ({ store, logger }) => {
      logger.info('Fetching articles from dev.to...');
      
      // Try to get API key from environment variables
      const apiKey = process.env.DEVTO_API_KEY;
      
      if (!apiKey) {
        // Graceful fallback: do not throw so that production build succeeds even without the key.
        logger.warn('[devto-loader] DEVTO_API_KEY not found. Skipping remote fetch and providing placeholder post.');
        store.clear();
        store.set({
          id: 'devto-stats',
          data: {
            totalReactions: 0,
            totalComments: 0,
            totalPosts: 1,
            lastUpdated: new Date().toISOString(),
          },
          body: '',
        });
        store.set({
          id: 'dev-to-missing-key',
          data: {
            title: 'Blog posts unavailable',
            description: 'The DEVTO_API_KEY is not configured on this deployment. Visit my dev.to profile to read articles.',
            pubDate: new Date(),
            heroImage: null,
            tags: ['configuration'],
            url: 'https://dev.to/kasuken',
            canonicalUrl: 'https://dev.to/kasuken',
            socialImage: '',
            readablePublishDate: new Date().toLocaleDateString(),
            devToId: 0,
            readingTimeMinutes: 1,
            publicReactionsCount: 0,
            commentsCount: 0,
            positiveReactionsCount: 0,
          },
          body: `# Blog posts unavailable\n\nThis deployment is missing the DEVTO_API_KEY environment variable.\n\nYou can still read my articles on [dev.to](https://dev.to/kasuken).`,
        });
        return; // Exit early.
      }

      try {
        // Fetch ALL articles from dev.to API for user 'kasuken' using pagination
        let allArticles: DevToArticle[] = [];
        let page = 1;
        const perPage = 100; // Maximum allowed by dev.to API
        
        while (true) {
          logger.info(`Fetching page ${page} of articles...`);
          
          const response = await fetch(`https://dev.to/api/articles?username=kasuken&per_page=${perPage}&page=${page}`, {
            headers: {
              'api-key': apiKey,
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch from dev.to API: ${response.status} ${response.statusText}`);
          }

          const articles: DevToArticle[] = await response.json();
          logger.info(`Fetched ${articles.length} articles from page ${page}`);
          
          if (articles.length === 0) {
            // No more articles to fetch
            break;
          }
          
          allArticles.push(...articles);
          
          // If we got fewer articles than the per_page limit, we've reached the end
          if (articles.length < perPage) {
            break;
          }
          
          page++;
          
          // Add a delay between page requests to avoid rate limiting
          if (page > 2) {
            logger.info('Adding delay between pages to avoid rate limiting...');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }

        logger.info(`Fetched ${allArticles.length} total articles from dev.to`);

        // Calculate total reactions and comments
        const totalReactions = allArticles.reduce(
          (sum, article) => sum + (article.public_reactions_count || 0),
          0
        );
        const totalComments = allArticles.reduce(
          (sum, article) => sum + (article.comments_count || 0),
          0
        );

        // Log the statistics
        logger.info(`Total reactions: ${totalReactions}`);
        logger.info(`Total comments: ${totalComments}`);
        logger.info(`Total posts: ${allArticles.length}`);

        // Clear existing entries
        store.clear();

        // Store the statistics as a special entry
        store.set({
          id: 'devto-stats',
          data: {
            totalReactions,
            totalComments,
            totalPosts: allArticles.length,
            lastUpdated: new Date().toISOString(),
          },
          body: '',
        });

        // Add each article to the store
        for (let i = 0; i < allArticles.length; i++) {
          const article = allArticles[i];
          const id = article.slug;
          
          // Add a small delay between requests to avoid rate limiting
          if (i > 0 && i % 20 === 0) {
            logger.info(`Processed ${i} articles, adding delay to avoid rate limiting...`);
            await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay every 20 articles
          }
          
          // Fetch full article content using the article ID
          let fullBodyMarkdown = '';
          try {
            const fullArticleResponse = await fetch(`https://dev.to/api/articles/${article.id}`, {
              headers: {
                'api-key': apiKey,
                'Content-Type': 'application/json'
              }
            });
            
            if (fullArticleResponse.ok) {
              const fullArticle = await fullArticleResponse.json();
              fullBodyMarkdown = fullArticle.body_markdown || '';
              logger.info(`Fetched full content for article: ${article.title}`);
            } else if (fullArticleResponse.status === 429) {
              logger.warn(`Rate limited when fetching article ${article.id}, using fallback content`);
              fullBodyMarkdown = article.body_markdown || `# ${article.title}\n\n${article.description}\n\n[Read full article on dev.to](${article.url})`;
            } else {
              logger.warn(`Failed to fetch full content for article ${article.id}: ${fullArticleResponse.status}`);
              fullBodyMarkdown = article.body_markdown || `# ${article.title}\n\n${article.description}\n\n[Read full article on dev.to](${article.url})`;
            }
          } catch (fetchError) {
            logger.warn(`Error fetching full content for article ${article.id}: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`);
            fullBodyMarkdown = article.body_markdown || `# ${article.title}\n\n${article.description}\n\n[Read full article on dev.to](${article.url})`;
          }
          
          store.set({
            id,
            data: {
              title: article.title,
              description: article.description,
              pubDate: new Date(article.published_at),
              heroImage: article.cover_image,
              tags: article.tag_list,
              url: article.url,
              canonicalUrl: article.canonical_url,
              socialImage: article.social_image,
              readablePublishDate: article.readable_publish_date,
              devToId: article.id,
              readingTimeMinutes: article.reading_time_minutes,
              publicReactionsCount: article.public_reactions_count,
              commentsCount: article.comments_count,
              positiveReactionsCount: article.positive_reactions_count,
            },
            body: fullBodyMarkdown,
          });
        }

        logger.info('Successfully loaded articles from dev.to');
      } catch (error) {
        logger.error(`Error fetching from dev.to API: ${error}`);
        
        // Fallback: create a single placeholder article if API fails
        logger.info('Creating fallback article...');
        store.clear();
        store.set({
          id: 'dev-to-placeholder',
          data: {
            title: 'Visit my dev.to profile',
            description: 'Check out my latest articles on dev.to',
            pubDate: new Date(),
            heroImage: null,
            tags: ['dev.to'],
            url: 'https://dev.to/kasuken',
            canonicalUrl: 'https://dev.to/kasuken',
            socialImage: '',
            readablePublishDate: new Date().toLocaleDateString(),
            devToId: 0,
            readingTimeMinutes: 5,
            publicReactionsCount: 0,
            commentsCount: 0,
            positiveReactionsCount: 0,
          },
          body: `# Visit my dev.to profile\n\nI write regularly on dev.to. [Check out my latest articles!](https://dev.to/kasuken)`,
        });
      }
    }
  };
}
