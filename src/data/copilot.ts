// Reviewed against the linked GitHub sources. Change this date only after a
// content review, never from the build clock. All model rates are USD / 1M tokens.
export const copilotReviewDate = '2026-11-18';
export const copilotReviewLabel = '18 November 2026';
export const copilotBillingRules = {
  autoDiscount: 0.1,
  autoDiscountSurfaces: ['Copilot Chat', 'Copilot cloud agent'],
  fusionDiscount: 0.3,
  fusionDiscountUntil: '2026-11-30',
  reviewedAt: '2026-11-18',
  fusion: 'Participating cloud models billed at standard rates before the temporary paid-plan discount; no separate Fusion fee.',
};
export const copilotDescription =
  'Compare GitHub Copilot model prices, choose a model for your task, and understand personal and business plans in searchable reference tables.';

export const copilotSources = {
  pricing: { title: 'Model prices and billing units', url: 'https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing' },
  models: { title: 'Model availability and restrictions', url: 'https://docs.github.com/en/copilot/reference/ai-models/supported-models' },
  comparison: { title: 'GitHub model selection guidance', url: 'https://docs.github.com/en/copilot/reference/ai-models/model-comparison' },
  plans: { title: 'Copilot plans and included credits', url: 'https://docs.github.com/en/copilot/get-started/plans' },
  individual: { title: 'Individual billing and flex credits', url: 'https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing' },
  business: { title: 'Organization billing and credit pooling', url: 'https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing' },
  privacy: { title: 'Model hosting and data use', url: 'https://docs.github.com/en/copilot/reference/ai-models/model-hosting' },
  auto: { title: 'Auto model selection', url: 'https://docs.github.com/en/copilot/concepts/models/auto-model-selection' },
  fusion: { title: 'Copilot Fusion effort, availability, and billing', url: 'https://docs.github.com/en/copilot/concepts/models/copilot-fusion' },
  fusionRelease: { title: 'Universe: Fusion launch and migration', url: 'https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/' },
  fusionUpdate: { title: 'Fusion availability and model updates, 17 November', url: 'https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models/' },
  gpt62: { title: 'GPT-6.2 Astra and Sol availability', url: 'https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available/' },
  fable52: { title: 'Fable 5.2 access and data retention', url: 'https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot/' },
  carbon: { title: 'Gemini 4 Carbon rollout', url: 'https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot/' },
  hydrogen: { title: 'Gemini 4 Hydrogen rollout', url: 'https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot/' },
  mai2: { title: 'MAI Code 2 and Flash rollout', url: 'https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/' },
  enterpriseAccess: { title: 'Enterprise Copilot access and Standalone', url: 'https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot/' },
  terra: { title: 'GPT-6.1 Terra rollout', url: 'https://github.blog/changelog/2026-10-26-gpt-6-1-terra-in-github-copilot/' },
  universe: { title: 'GitHub Universe 2026 overview', url: 'https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/' },
  retirements: { title: 'Copilot model deprecations on 19 October 2026', url: 'https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026/' },
  novemberRetirements: { title: 'Copilot model retirements and fallback exception, 16 November', url: 'https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026/' },
  upcomingRetirements: { title: 'Copilot model retirements scheduled for 14 December', url: 'https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december/' },
  maiRetirement: { title: 'MAI-Code-1.1-Flash retirement scheduled for 18 December', url: 'https://github.blog/changelog/2026-11-17-upcoming-deprecation-of-mai-code-1-1-flash-in-december/' },
  changelog: { title: 'Latest Copilot announcements', url: 'https://github.blog/changelog/label/copilot/' },
};

type Provider = 'OpenAI' | 'Anthropic' | 'Google' | 'Microsoft' | 'xAI' | 'Moonshot AI';
type Access = 'all' | 'premium' | 'annual' | 'extension';
export interface TokenRates {
  input: number;
  cached: number;
  write: number | null;
  output: number;
}
export interface CopilotModel {
  name: string;
  provider: Provider;
  access: Access;
  rates: TokenRates;
  longContext?: TokenRates;
  threshold?: number;
  note?: 'flash-promo' | 'argon-promo' | 'carbon-promo' | 'mai-promo' | 'fable-data' | 'annual-model' | 'annual-opus' | 'extension-model';
}

export const modelAccess: Record<Access, string> = {
  all: 'All paid plans',
  premium: 'Premium plans',
  annual: 'Eligible annual plans',
  extension: 'Codex extension',
};

export const modelNotes = {
  'flash-promo': 'Gemini 3.8 Flash: promotional rates through 31 December 2026.',
  'argon-promo': 'Gemini 4 Argon: promotional rates until 1 December 2026.',
  'carbon-promo': 'Gemini 4 Carbon: promotional rates until 1 December 2026. From that date: input $4, cached input $0.20, output $20 per million tokens.',
  'mai-promo': 'MAI Code 2 and Flash: promotional rates until 17 May 2027. From that date, Code 2 input/cached/output rates are $1/$0.05/$5; Flash rates are $0.10/$0.01/$0.50 per million tokens. No separate cache-write rate is listed.',
  'fable-data': 'Claude Fable 5, 5.1, and 5.2: Anthropic retains prompts and outputs for safety checks by default. Organization policies are off by default. Eligible enterprises can request a temporary zero-retention exemption through the end of 2026; approval and model enablement are separate. See the model hosting source for use restrictions.',
  'annual-model': 'Claude Sonnet 4.6: retired for monthly plans; remains available on annual Pro and Pro+ subscriptions.',
  'annual-opus': 'Claude Opus 4.8: retired for monthly plans on 16 November 2026; retained for eligible individual annual subscribers (currently listed under Pro+). Its separately listed fast-mode variant has different eligibility.',
  'extension-model': 'GPT-5.4 nano: not in Copilot Chat. GitHub specifies the Codex VS Code extension with Pro+; check current eligibility.',
};

export const copilotModels: CopilotModel[] = [
  { name: 'GPT-5.3-Codex', provider: 'OpenAI', access: 'all', rates: { input: 1.75, cached: 0.175, write: null, output: 14 } },
  { name: 'GPT-5.4 nano', provider: 'OpenAI', access: 'extension', note: 'extension-model', rates: { input: 0.2, cached: 0.02, write: null, output: 1.25 } },
  { name: 'GPT-5.6 Luna', provider: 'OpenAI', access: 'all', threshold: 200000, rates: { input: 0.2, cached: 0.02, write: 0.25, output: 1.2 }, longContext: { input: 0.4, cached: 0.04, write: 0.5, output: 1.8 } },
  { name: 'GPT-5.6 Sol', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 4, cached: 0.4, write: 5, output: 20 }, longContext: { input: 8, cached: 0.8, write: 10, output: 30 } },
  { name: 'GPT-6 Astra', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 10, cached: 1, write: 12.5, output: 50 }, longContext: { input: 20, cached: 2, write: 25, output: 75 } },
  { name: 'GPT-6 Luna', provider: 'OpenAI', access: 'all', threshold: 272000, rates: { input: 0.1, cached: 0.01, write: 0.125, output: 0.5 }, longContext: { input: 0.2, cached: 0.02, write: 0.25, output: 0.75 } },
  { name: 'GPT-6 Sol', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 2, cached: 0.2, write: 2.5, output: 10 }, longContext: { input: 4, cached: 0.4, write: 5, output: 15 } },
  { name: 'GPT-6.1 Sol', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 2, cached: 0.1, write: 2.5, output: 10 }, longContext: { input: 4, cached: 0.2, write: 5, output: 15 } },
  { name: 'GPT-6.1 Terra', provider: 'OpenAI', access: 'all', threshold: 272000, rates: { input: 1, cached: 0.05, write: 1.25, output: 5 }, longContext: { input: 2, cached: 0.1, write: 2.5, output: 7.5 } },
  { name: 'GPT-6.2 Astra', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 8, cached: 0.4, write: 10, output: 40 }, longContext: { input: 16, cached: 0.8, write: 20, output: 60 } },
  { name: 'GPT-6.2 Sol', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 2, cached: 0.1, write: 2.5, output: 10 }, longContext: { input: 4, cached: 0.2, write: 5, output: 15 } },
  { name: 'Claude Haiku 4.5', provider: 'Anthropic', access: 'all', rates: { input: 1, cached: 0.1, write: 1.25, output: 5 } },
  { name: 'Claude Haiku 5.5', provider: 'Anthropic', access: 'all', threshold: 100000, rates: { input: 0.1, cached: 0.01, write: 0.125, output: 0.5 }, longContext: { input: 0.5, cached: 0.05, write: 0.625, output: 2.5 } },
  { name: 'Claude Sonnet 4.6', provider: 'Anthropic', access: 'annual', note: 'annual-model', rates: { input: 3, cached: 0.3, write: 3.75, output: 15 } },
  { name: 'Claude Sonnet 5', provider: 'Anthropic', access: 'all', rates: { input: 2, cached: 0.2, write: 2.5, output: 10 } },
  { name: 'Claude Sonnet 5.5', provider: 'Anthropic', access: 'all', rates: { input: 2, cached: 0.1, write: 2.5, output: 10 } },
  { name: 'Claude Opus 4.8', provider: 'Anthropic', access: 'annual', note: 'annual-opus', rates: { input: 5, cached: 0.5, write: 6.25, output: 25 } },
  { name: 'Claude Opus 4.8 (fast mode) (preview)', provider: 'Anthropic', access: 'premium', rates: { input: 10, cached: 1, write: 12.5, output: 50 } },
  { name: 'Claude Opus 5.5', provider: 'Anthropic', access: 'premium', rates: { input: 4, cached: 0.2, write: 5, output: 20 } },
  { name: 'Claude Fable 5', provider: 'Anthropic', access: 'premium', note: 'fable-data', rates: { input: 10, cached: 1, write: 12.5, output: 50 } },
  { name: 'Claude Fable 5.1', provider: 'Anthropic', access: 'premium', note: 'fable-data', rates: { input: 10, cached: 0.25, write: 12.5, output: 50 } },
  { name: 'Claude Fable 5.2', provider: 'Anthropic', access: 'premium', note: 'fable-data', rates: { input: 8, cached: 0.2, write: 10, output: 40 } },
  { name: 'Gemini 3.8 Flash', provider: 'Google', access: 'all', note: 'flash-promo', rates: { input: 0.75, cached: 0.075, write: null, output: 3.75 } },
  { name: 'Gemini 4 Argon', provider: 'Google', access: 'premium', note: 'argon-promo', rates: { input: 2, cached: 0.1, write: null, output: 10 } },
  { name: 'Gemini 4 Carbon', provider: 'Google', access: 'premium', note: 'carbon-promo', rates: { input: 2, cached: 0.1, write: null, output: 10 } },
  { name: 'Gemini 4 Hydrogen', provider: 'Google', access: 'all', rates: { input: 1.5, cached: 0.075, write: null, output: 7.5 } },
  { name: 'MAI-Code-1.1-Flash', provider: 'Microsoft', access: 'all', rates: { input: 0.2, cached: 0.02, write: null, output: 1.2 } },
  { name: 'MAI Code 2', provider: 'Microsoft', access: 'all', note: 'mai-promo', rates: { input: 0.5, cached: 0.025, write: null, output: 2.5 } },
  { name: 'MAI Code 2 Flash', provider: 'Microsoft', access: 'all', note: 'mai-promo', rates: { input: 0.05, cached: 0.005, write: null, output: 0.25 } },
  { name: 'Grok 4.6', provider: 'xAI', access: 'all', threshold: 200000, rates: { input: 2, cached: 0.5, write: null, output: 6 }, longContext: { input: 4, cached: 1, write: null, output: 12 } },
  { name: 'Grok 4.7', provider: 'xAI', access: 'all', threshold: 200000, rates: { input: 2, cached: 0.5, write: null, output: 6 }, longContext: { input: 4, cached: 1, write: null, output: 12 } },
  { name: 'Kimi K3', provider: 'Moonshot AI', access: 'all', rates: { input: 3, cached: 0.3, write: null, output: 15 } },
];

export const modelGroups = [
  { name: 'Fast', examples: 'MAI Code 2 Flash, GPT-6 Luna, Claude Haiku 5.5' },
  { name: 'Everyday', examples: 'GPT-6.1 Terra, Claude Sonnet 5.5' },
  { name: 'Deep reasoning', examples: 'GPT-6.2 Sol, Claude Opus 5.5, Gemini 4 Carbon' },
  { name: 'Long-running agent', examples: 'GPT-6.2 Astra, Claude Fable 5.2, Claude Opus 5.5' },
] as const;

// Editorial starting points, not benchmark rankings or GitHub's official matrix.
type Fit = 'Start here' | 'Also fits' | 'Not first choice';
export const taskGuidance: { task: string; fits: [Fit, Fit, Fit, Fit] }[] = [
  { task: 'Syntax questions and short explanations', fits: ['Start here', 'Also fits', 'Not first choice', 'Not first choice'] },
  { task: 'Boilerplate and repetitive edits', fits: ['Start here', 'Also fits', 'Not first choice', 'Not first choice'] },
  { task: 'Documentation and routine tests', fits: ['Also fits', 'Start here', 'Not first choice', 'Not first choice'] },
  { task: 'A feature with a clear, local scope', fits: ['Also fits', 'Start here', 'Also fits', 'Not first choice'] },
  { task: 'Debugging across several files', fits: ['Not first choice', 'Also fits', 'Start here', 'Also fits'] },
  { task: 'Architecture and difficult trade-offs', fits: ['Not first choice', 'Also fits', 'Start here', 'Also fits'] },
  { task: 'A coordinated codebase refactor', fits: ['Not first choice', 'Also fits', 'Also fits', 'Start here'] },
  { task: 'A long task with planning, tools, and verification', fits: ['Not first choice', 'Also fits', 'Also fits', 'Start here'] },
];

// Task examples are editorial starting points, not comparative benchmark results.
export const copilotSelectionOptions = [
  { name: 'Manual selection', behavior: 'You choose a specific model.', use: 'Compare models or use one whose behavior you already know.' },
  { name: 'Copilot Fusion', behavior: 'Routes requests and selects an execution pattern, with additional model passes when useful.', use: 'Start with Standard for everyday work; evaluate High or Max for harder tasks.' },
  { name: 'Auto', behavior: 'Selects a model on surfaces that have not moved to Fusion.', use: 'Use where the model picker still offers Auto, including supported web, mobile, and IDE experiences.' },
] as const;

export const copilotFusionEfforts = [
  { name: 'Fusion Standard', priority: 'Balance quality, cost, and response time with one selected model per task.', use: 'Everyday coding.' },
  { name: 'Fusion High', priority: 'Use orchestration when additional model passes are worthwhile.', use: 'Complex bugs and well-scoped changes across files. Pro+, Max, Business, or Enterprise.' },
  { name: 'Fusion Max', priority: 'Favor deeper reasoning and thorough analysis.', use: 'The most demanding tasks. Pro+, Max, Business, or Enterprise; model policies may restrict access.' },
  { name: 'Fusion Fast', priority: 'Fast-model routing for VS Code inline chat.', use: 'Chosen by the product; not a user-selectable effort level.' },
] as const;

export const copilotFusionPatterns = [
  { name: 'Single', behavior: 'One model handles the task.' },
  { name: 'Cascade', behavior: 'An initial solution is inspected and can be accepted or escalated to a stronger model.' },
  { name: 'Critique', behavior: 'Several models review a draft independently in parallel; their feedback is combined for revision.' },
] as const;

export const copilotPlans = [
  { name: 'Pro', audience: 'Individual', monthly: 10, base: 1000, flex: 500, models: 'Selected models', ownership: 'Personal allowance', management: 'Personal settings', extra: 'Set an extra-usage budget or upgrade', training: 'May be used; opt-out available' },
  { name: 'Pro+', audience: 'Individual', monthly: 39, base: 3900, flex: 3100, models: 'Premium models', ownership: 'Personal allowance', management: 'Personal settings', extra: 'Set an extra-usage budget or upgrade', training: 'May be used; opt-out available' },
  { name: 'Max', audience: 'Individual', monthly: 100, base: 10000, flex: 10000, models: 'Priority access to premium models', ownership: 'Personal allowance', management: 'Personal settings', extra: 'Set an extra-usage budget', training: 'May be used; opt-out available' },
  { name: 'Business', audience: 'Organization', monthly: 19, base: 1900, flex: null, models: 'Premium models, subject to policy', ownership: 'Pooled at the billing entity', management: 'Central policies and seat management', extra: 'Continues if additional usage is allowed', training: 'Not used by GitHub for model training' },
  { name: 'Enterprise', audience: 'Organization', monthly: 39, base: 3900, flex: null, models: 'Priority access to premium models, subject to policy', ownership: 'Pooled at the billing entity', management: 'Enterprise controls; requires Enterprise Cloud', extra: 'Continues if additional usage is allowed', training: 'Not used by GitHub for model training' },
];

export const copilotAccessPlans = [
  { name: 'Copilot access with GitHub Enterprise Cloud', seat: '$0 additional Copilot seat charge for licensed Enterprise Cloud users', usage: 'No included AI credits; metered from first use. Available through account teams; self-serve rollout is staged.' },
  { name: 'Copilot Standalone', seat: '$10 per user / month for users without an Enterprise Cloud license', usage: 'Same feature/model eligibility as Copilot Enterprise, with no included AI credits. For eligible enterprise arrangements.' },
] as const;

const release = 'https://github.blog/changelog/2026-10-28-';
const ignite = 'https://github.blog/changelog/2026-11-17-';
export const copilotUniverseUpdates = [
  { name: 'Browser use (17 November)', detail: 'Use a signed-in Chromium browser for web tasks, testing, and debugging.', status: 'Public preview in app, CLI, VS Code, and JetBrains. Requires the Copilot browser extension and client opt-in; permission controls apply.', url: ignite + 'let-github-copilot-interact-with-your-browser/' },
  { name: 'Azure DevOps and GHES in the app (17 November)', detail: 'Work with repositories, issues, and pull requests hosted outside GitHub.com.', status: 'Azure DevOps integration: public preview. GHES: GA in app 1.2.0+. Both require account setup and have no cloud sessions.', url: ignite + 'github-copilot-app-microsoft-ignite-releases/' },
  { name: 'Copilot Evals (17 November)', detail: 'Create and rerun checks for skills, custom agents, and MCP tools; compare behavior after changes.', status: 'Public preview in VS Code, CLI, and app via extension/plugin. Each run requires approval.', url: ignite + 'github-copilot-evals-is-now-in-public-preview/' },
  { name: 'JetBrains sessions (17 November)', detail: 'Use cloud sandboxes and opt-in remote session access; dictate editable chat drafts on supported packages.', status: 'Cloud sandbox, remote access, and on-device dictation are public previews with phased rollout or setup requirements.', url: ignite + 'github-copilot-in-jetbrains-ignite-releases/' },
  { name: 'Entra sign-in in CLI (17 November)', detail: 'Sign in with Microsoft Entra for eligible EMU SSO or Microsoft 365 Copilot access.', status: 'Public preview; CLI 1.0.113+, Windows/macOS. EMU uses GitHub inference and eligible licenses; Frontier Microsoft 365 access uses separate inference, limits, and billing.', url: ignite + 'github-copilot-cli-adds-microsoft-entra-sign-in-as-a-preview/' },
  { name: 'Agent 365 monitoring (17 November)', detail: 'Stream Copilot agent activity into Microsoft Agent 365 for enterprise auditing.', status: 'GitHub Enterprise Cloud with Enterprise Managed Users. Configure audit streaming; session data can include prompts, responses, and tool calls.', url: ignite + 'monitor-github-copilot-activity-through-microsoft-agent-365/' },
  { name: 'VS Code harness transition (16 November)', detail: 'Move older Local-harness agent workflows to the Copilot harness before February 2027.', status: 'Local harness deprecated in VS Code 1.146; removal in February 2027. Copilot harness can still run commands locally; sandboxing is configured separately.', url: 'https://github.blog/changelog/2026-11-16-vs-code-retires-the-local-harness-in-february-2027/' },
  { name: 'Xcode coding assistant (4 November)', detail: 'Use Copilot inside Xcode’s built-in coding assistant alongside the separate extension option.', status: 'Public preview from Xcode 27.3 beta on macOS Tahoe 26.6+. All Copilot plans supported.', url: 'https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant/' },
  { name: 'Projects in the Copilot app', detail: 'Coordinate context and agent work across repositories and sessions.', status: 'Public preview; focused repository sessions remain available.', url: release + 'github-copilot-app-universe-releases/' },
  { name: 'Computer use', detail: 'Work with desktop apps after granting approval.', status: 'App: public preview on Windows/macOS. VS Code: experimental; admin policies apply.', url: release + 'github-copilot-in-vs-code-universe-releases/' },
  { name: 'Connected cloud sessions', detail: 'Start and continue the same cloud session across supported Copilot clients.', status: 'Cloud infrastructure keeps running when the local computer closes.', url: release + 'github-copilot-in-vs-code-universe-releases/' },
  { name: 'Parallel comparisons and Judge', detail: 'Compare model or harness attempts; ask Judge to recommend a result or synthesize ideas.', status: 'Preview in the VS Code Agents window.', url: release + 'github-copilot-in-vs-code-universe-releases/' },
  { name: 'Shared Automations', detail: 'Repository-owned workflows combine prompts, triggers, and permitted tools.', status: 'Rolling out on paid plans. Repository owner pays AI credits; organization policies apply.', url: release + 'build-shared-workflows-for-your-team-with-copilot-automations/' },
  { name: 'GitHub intelligence', detail: 'Memory, context improvement, and code search help agents reuse relevant knowledge.', status: 'Memory is GA on paid plans; availability/settings differ for other capabilities.', url: release + 'github-intelligence-puts-your-code-context-and-history-to-work/' },
  { name: 'Image generation', detail: 'Generate and edit workspace assets from chat through a separate image tool.', status: 'Public preview on listed eligible plans in VS Code, app, and CLI. Image tokens are billed separately from the chat model.', url: release + 'generate-and-edit-images-directly-in-copilot/' },
  { name: 'Adaptive code review (17 November)', detail: 'Select Lite, Balanced, or Max automatically; add public cross-repository context and secret detection.', status: 'These additions are public previews on paid plans. Adaptive respects the configured maximum; Balanced remains default. Azure Repos review is now GA.', url: ignite + 'copilot-code-review-adaptive-effort-secret-detection-and-more/' },
  { name: 'Agent Merge', detail: 'Watch and fix selected CI failures and merge conflicts in cloud environments.', status: 'Paid plans, subject to policies. Auto-merge is a separate repository setting.', url: release + 'agent-merge-watches-and-fixes-pull-requests-in-the-cloud/' },
  { name: 'JetBrains Air (3 November)', detail: 'Use a Copilot subscription for local and cloud coding tasks through Air.', status: 'Cloud tasks also require Air Teams access and administrator enablement; Copilot usage is not JetBrains AI credits.', url: 'https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air/' },
] as const;
