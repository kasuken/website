import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { projects } from '../data/projects';

export const prerender = false;

export const GET: APIRoute = async () => {
	const articles = (await getCollection('blog'))
		.filter((article) => article.data.devToId > 0)
		.map((article) => `/blog/${encodeURIComponent(article.id)}`);
	const projectPages = projects.map((project) => `/portfolio#${encodeURIComponent(project.id)}`);
	const pools = [articles, projectPages].filter((pool) => pool.length > 0);
	const pool = pools[Math.floor(Math.random() * pools.length)];
	const destination = pool?.[Math.floor(Math.random() * pool.length)] ?? '/portfolio';

	return new Response(null, {
		status: 302,
		headers: {
			Location: destination,
			'Cache-Control': 'no-store, max-age=0',
		},
	});
};
