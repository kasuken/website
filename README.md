
# Portfolio Website (Astro)

A fast, modern, SEO-friendly portfolio and blog built with [Astro](https://astro.build/).

## ✨ Features

- Minimal, customizable styling
- 100/100 Lighthouse performance
- SEO: canonical URLs, OpenGraph, sitemap, RSS
- Markdown & MDX support
- Dynamic blog refresh script
- Responsive, accessible design
- Theme toggle (light/dark/retrowave)
- Dev.to integration for blog posts

## 🗂️ Project Structure

```
public/           # Static assets (favicon, fonts, images)
src/
	assets/         # Images for blog and about
	components/     # Reusable UI components
	data/           # Data files (courses, projects, uses)
	layouts/        # Page layouts
	lib/            # Utility scripts (devto-loader)
	pages/          # Site pages (about, blog, courses, etc.)
	styles/         # Global CSS
scripts/          # Utility scripts (refresh-blog.mjs)
astro.config.mjs  # Astro configuration
package.json      # Project metadata and scripts
tsconfig.json     # TypeScript config
```

## 🚀 Getting Started

Install dependencies:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

Refresh blog content from Dev.to:

```sh
npm run refresh-blog
```

## 🧩 Integrations

- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [date-fns](https://date-fns.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [marked](https://www.npmjs.com/package/marked)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [sharp](https://www.npmjs.com/package/sharp)

## 📄 Pages

- `/` Home
- `/blog` Blog (with Dev.to integration)
- `/portfolio` Portfolio
- `/courses` Courses
- `/about` About
- `/mentor` Mentor
- `/newsletter` Newsletter
- `/uses` Uses
- `/live` Live

## 📝 Credit

Theme inspired by [Elio Struyf](https://www.eliostruyf.com/).
