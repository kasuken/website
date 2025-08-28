import { defineCollection, z } from 'astro:content';
import { devToLoader } from './lib/devto-loader';
import { loadRescueTimeData } from './lib/rescuetime-loader';

const blog = defineCollection({
	// Load articles from dev.to API
	loader: devToLoader(),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		heroImage: z.string().url().nullable().optional(),
		tags: z.array(z.string()).optional(),
		url: z.string().url(),
		canonicalUrl: z.string().url(),
		socialImage: z.string().url().optional(),
		readablePublishDate: z.string(),
		devToId: z.number(),
		readingTimeMinutes: z.number().optional(),
		publicReactionsCount: z.number().optional(),
		commentsCount: z.number().optional(),
		positiveReactionsCount: z.number().optional(),
	}),
});

const productivity = defineCollection({
	loader: async () => {
		const data = await loadRescueTimeData();
		return data.map((day, index) => ({
			id: `day-${index}`,
			...day
		}));
	},
	schema: z.object({
		date: z.string(),
		seconds: z.number(),
		hours: z.number(),
		productivity: z.number(),
	}),
});

export const collections = { blog, productivity };
