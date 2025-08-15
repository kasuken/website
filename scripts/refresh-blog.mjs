#!/usr/bin/env node

import { config } from 'dotenv';
import fetch from 'node-fetch';

// Load environment variables
config();

async function refreshBlogContent() {
  const apiKey = process.env.DEVTO_API_KEY;
  
  if (!apiKey) {
    console.error('❌ DEVTO_API_KEY environment variable is required');
    process.exit(1);
  }

  try {
    console.log('🔄 Fetching latest articles from dev.to...');
    
    const response = await fetch('https://dev.to/api/articles?username=kasuken&per_page=100', {
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from dev.to API: ${response.status} ${response.statusText}`);
    }

    const articles = await response.json();
    console.log(`✅ Successfully fetched ${articles.length} articles from dev.to`);
    console.log('\nLatest 5 articles:');
    
    articles.slice(0, 5).forEach((article, index) => {
      console.log(`${index + 1}. ${article.title}`);
      console.log(`   📅 ${new Date(article.published_at).toLocaleDateString()}`);
      console.log(`   🔗 ${article.url}`);
      console.log('');
    });
    
    console.log('💡 Tip: Run "npm run build" to regenerate your site with the latest content');
    
  } catch (error) {
    console.error('❌ Error fetching from dev.to API:', error.message);
    process.exit(1);
  }
}

refreshBlogContent();
