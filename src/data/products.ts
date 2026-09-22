/**
 * The five SaaS products.
 *
 * Every claim here traces back to the public README of the matching repo on
 * github.com/kasuken. No invented metrics, pricing, or testimonials.
 *
 * `screenshots` are copied from each repo's own marketing screenshots into
 * public/products/<slug>/; products without published screenshots omit the field.
 */

export type ProductStatus = 'Live' | 'In development' | 'Coming soon';

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
	/** Product screenshots, served from public/products/<slug>/. Optional.
	 *  `w`/`h` are the intrinsic pixel dimensions, set so the browser reserves
	 *  space and the page doesn't shift as images load (which broke #anchor jumps). */
	screenshots?: { src: string; alt: string; w: number; h: number }[];
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
		screenshots: [
			{ src: '/products/brainy/today.png', alt: 'Brainy Today dashboard showing current work, deadlines and project progress', w: 1440, h: 900 },
			{ src: '/products/brainy/project-detail.png', alt: 'Brainy project detail view with tasks and linked notes', w: 1440, h: 900 },
			{ src: '/products/brainy/tasks-calendar.png', alt: 'Brainy tasks calendar with priorities and recurrence', w: 1440, h: 900 },
			{ src: '/products/brainy/pulse-analytics.png', alt: 'Brainy pulse analytics summarizing activity over time', w: 1440, h: 900 },
		],
	},
	{
		slug: 'moneybrain',
		name: 'MoneyBrain',
		tagline: 'Your personal finance system, under your control.',
		summary:
			'A self-hosted personal finance app for tracking accounts and transactions, running a monthly envelope budget, and reconciling against statements. No bank sync, no telemetry, no financial advice — by design.',
		problem: 'Every budgeting app wants your bank credentials and sells the data behind them.',
		status: 'Coming soon',
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
		screenshots: [
			{ src: '/products/learnstack/landing.png', alt: 'LearnStack landing page', w: 1440, h: 4028 },
			{ src: '/products/learnstack/resources.png', alt: 'LearnStack resources list organized by type, status and priority', w: 1440, h: 1771 },
			{ src: '/products/learnstack/content-ideas.png', alt: 'LearnStack content ideas created from the learning backlog and linked to sources', w: 1440, h: 2149 },
			{ src: '/products/learnstack/pulse.png', alt: 'LearnStack pulse view tracking learning progress', w: 1440, h: 1029 },
		],
	},
	{
		slug: 'needly',
		name: 'Needly',
		tagline: 'The action inbox for GitHub.',
		summary:
			'Needly receives GitHub webhooks and turns relevant activity into durable actions — Review, Respond, Fix, Resolve, Merge — then applies visibility, risk, and lifecycle rules per user. An inbox organized around decisions, not an undifferentiated notification stream.',
		problem: 'GitHub produces events all day; your team needs a clear queue of what to actually do.',
		status: 'Live',
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
	{
		slug: 'passwordify',
		name: 'Passwordify',
		tagline: 'Privacy-first password tools, and an API for everything else.',
		summary:
			'Passwordify gives people three free, entirely client-side tools for checking and generating passwords — no password ever leaves the browser — and gives developers a small, fast API for the same checks. Strength scoring, breach screening, policy validation and secure generation, all aligned with NIST 800-63B.',
		problem: 'Password checks are either sloppy character-class rules or a service you have to trust with the password itself.',
		status: 'Live',
		site: 'https://passwordify.xyz',
		repo: 'https://github.com/kasuken/Passwordify',
		features: [
			'Real-time strength scoring with zxcvbn, not character-class rules',
			'Breach check against Have I Been Pwned via k-anonymity — only a SHA-1 prefix leaves the device',
			'CSPRNG password and passphrase generator with an EFF diceware wordlist',
			'POST /v1/strength — score, guesses, entropy bits, and crack time',
			'POST /v1/breach — k-anonymity breach lookup by password or hash prefix',
			'POST /v1/validate — combined strength and breach against a policy, NIST 800-63B aligned',
			'POST /v1/generate — server-side secure password and passphrase generation',
			'Stateless JSON over HTTPS, bearer-key auth, structured error bodies',
		],
		stack: ['Astro', 'React', 'TypeScript', 'Azure Functions', 'Azure Static Web Apps'],
		bestFor: 'Adding trustworthy password checks without sending passwords anywhere.',
		screenshots: [
			{ src: '/products/passwordify/home.png', alt: 'Passwordify home page with the live password strength analyzer', w: 2560, h: 1600 },
			{ src: '/products/passwordify/password-strength.png', alt: 'Password strength analyzer showing a very strong result with entropy and crack-time estimates', w: 2560, h: 2480 },
			{ src: '/products/passwordify/breach-check.png', alt: 'Breach check result showing a compromised password and the k-anonymity hash prefix that was sent', w: 2560, h: 2480 },
			{ src: '/products/passwordify/generator.png', alt: 'Secure password generator with a generated password, entropy meter and character-set options', w: 2560, h: 2480 },
			{ src: '/products/passwordify/developers.png', alt: 'Developer API page with a live playground showing a validate request and JSON response', w: 2560, h: 1600 },
		],
	},
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
