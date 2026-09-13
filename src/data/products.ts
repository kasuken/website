/**
 * The four SaaS products.
 *
 * Every claim here traces back to the public README of the matching repo on
 * github.com/kasuken. No invented metrics, pricing, or testimonials.
 */

export type ProductStatus = 'Live' | 'In development';

export interface Product {
	/** URL-safe id, also used as the CSS `data-product` hook for brand color. */
	slug: string;
	name: string;
	/** Short positioning line. One sentence, sentence case. */
	tagline: string;
	/** Two or three sentences of what it actually does. */
	summary: string;
	/** The problem it exists to solve, in the visitor's words. */
	problem: string;
	status: ProductStatus;
	/** Public site, when the product has one. */
	site?: string;
	repo: string;
	/** Primary capabilities — each one present in the README feature list. */
	features: string[];
	/** Shipping stack, for the engineers reading this. */
	stack: string[];
	/** One-line answer to "is this for me?", used in the comparison table. */
	bestFor: string;
}

export const products: Product[] = [
	{
		slug: 'brainy',
		name: 'Brainy',
		tagline: 'A second brain that pushes work forward instead of storing it.',
		summary:
			'Brainy organizes notes, projects, and goals with the PARA method and the CODE workflow, then keeps the emphasis on actionability rather than passive storage. Captured knowledge gets distilled into outputs you can reuse in real work.',
		problem: 'Notes pile up in five different apps and none of them turn into finished work.',
		status: 'Live',
		site: 'https://www.brainy-me.com',
		repo: 'https://github.com/kasuken/Brainy',
		features: [
			'Today dashboard for current work, deadlines, and project progress',
			'PARA organization across projects, areas, resources, and archives',
			'Notes distilled with highlights, summaries, sources, and related notes',
			'Action items promoted straight into project tasks',
			'Tasks with priorities, subtasks, recurrence, and prerequisites',
			'Outputs that turn stored knowledge into reusable Markdown',
			'Search across notes, outputs, projects, tasks, areas, and goals',
			'Versioned JSON export of everything you own',
		],
		stack: ['.NET 10', 'Blazor', 'MudBlazor', 'EF Core', 'SQL Server'],
		bestFor: 'Turning scattered notes and research into finished deliverables.',
	},
	{
		slug: 'moneybrain',
		name: 'MoneyBrain',
		tagline: 'Your personal finance system, under your control.',
		summary:
			'A self-hosted personal finance app for tracking accounts and transactions, running a monthly envelope budget, and reconciling against statements. No bank sync, no telemetry, no financial advice — by design.',
		problem: 'Every budgeting app wants your bank credentials and sells the data behind them.',
		status: 'In development',
		repo: 'https://github.com/kasuken/MoneyBrain',
		features: [
			'Accounts and balances for assets, liabilities, and manual adjustments',
			'Transactions with search, filters, and safe bulk edits',
			'Transfers between accounts that never count as income or expense',
			'Split transactions allocated across multiple categories',
			'Envelope-style monthly budgeting, plan against activity',
			'Statement reconciliation that locks reconciled rows',
			'Reports for cashflow, net worth, and budget vs actual',
			'CSV import with column mapping, plus CSV export',
		],
		stack: ['.NET 10', 'Blazor Server', 'MudBlazor', 'EF Core', 'PostgreSQL', 'Docker'],
		bestFor: 'Owning your financial data on your own infrastructure.',
	},
	{
		slug: 'learnstack',
		name: 'LearnStack',
		tagline: 'A learning queue that ends in published work.',
		summary:
			'LearnStack collects articles, videos, podcasts, and courses in one place, tracks them from to-learn through completed, and turns what you read into structured content ideas linked back to their sources.',
		problem: 'The reading list grows forever and nothing you learn ever ships.',
		status: 'Live',
		site: 'https://learnstack.cloud',
		repo: 'https://github.com/kasuken/LearnStack',
		features: [
			'Capture any resource by URL with automatic metadata enrichment',
			'Organize by type, status, priority, tags, and notes',
			'Track progress across to-learn, in-progress, completed, and archived',
			'Create content ideas from your backlog, linked to their sources',
			'Move ideas from draft to published',
			'Public shared collections with unique share links',
			'Friendships and selective sharing between users',
			'Localized in English, German, Spanish, French, and Italian',
		],
		stack: ['.NET 10', 'Blazor Server', 'MudBlazor', 'EF Core', 'SQL Server', 'Azure'],
		bestFor: 'Creators who want their reading list to produce content.',
	},
	{
		slug: 'needly',
		name: 'Needly',
		tagline: 'The action inbox for GitHub.',
		summary:
			'Needly receives GitHub webhooks and turns relevant activity into durable actions — Review, Respond, Fix, Resolve, Merge — then applies visibility, risk, and lifecycle rules per user. An inbox organized around decisions, not an undifferentiated notification stream.',
		problem: 'GitHub produces events all day; your team needs a clear queue of what to actually do.',
		status: 'In development',
		site: 'https://needly.today',
		repo: 'https://github.com/kasuken/Needly',
		features: [
			'Webhook ingestion that turns activity into durable actions',
			'Actions typed as Review, Respond, Fix, Resolve, and Merge',
			'Visibility, risk, and lifecycle rules applied per user',
			'An inbox built around decisions and outcomes',
			'Runs locally with GitHub integration switched off',
		],
		stack: ['.NET 10', 'Blazor Web App', 'GitHub App', 'Webhooks'],
		bestFor: 'Teams drowning in GitHub notifications that hide the real work.',
	},
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
