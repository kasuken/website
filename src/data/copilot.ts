// Reviewed against the linked GitHub sources. Change this date only after a
// content review, never from the build clock. All model rates are USD / 1M tokens.
export const copilotReviewDate = '2026-11-04';
export const copilotReviewLabel = '4 November 2026';
export const copilotBillingRules = {
  autoDiscount: 0.1,
  autoDiscountSurfaces: ['Copilot Chat', 'Copilot cloud agent'],
  fusionDiscount: 0.3,
  fusionDiscountUntil: '2026-11-30',
  reviewedAt: '2026-11-04',
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
  enterpriseAccess: { title: 'Enterprise Copilot access and Standalone', url: 'https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot/' },
  terra: { title: 'GPT-6.1 Terra rollout', url: 'https://github.blog/changelog/2026-10-26-gpt-6-1-terra-in-github-copilot/' },
  universe: { title: 'GitHub Universe 2026 overview', url: 'https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/' },
  retirements: { title: 'Copilot model deprecations on 19 October 2026', url: 'https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026/' },
  upcomingRetirements: { title: 'Copilot model deprecations scheduled for 16 November 2026', url: 'https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november/' },
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
  note?: 'flash-promo' | 'argon-promo' | 'fable-data' | 'annual-model' | 'extension-model';
}

export const modelAccess: Record<Access, string> = {
  all: 'All paid plans',
  premium: 'Premium plans',
  annual: 'Annual Pro / Pro+',
  extension: 'Codex extension',
};

export const modelNotes = {
  'flash-promo': 'Gemini 3.8 Flash: promotional rates through 31 December 2026.',
  'argon-promo': 'Gemini 4 Argon: promotional rates until 1 December 2026.',
  'fable-data': 'Claude Fable 5 and 5.1: Anthropic retains prompts and outputs for safety checks by default. Eligible enterprises can request a temporary zero-retention exemption through the end of 2026; see the model hosting source.',
  'annual-model': 'Claude Sonnet 4.6: retired for monthly plans; remains available on annual Pro and Pro+ subscriptions.',
  'extension-model': 'GPT-5.4 nano: not in Copilot Chat. GitHub specifies the Codex VS Code extension with Pro+; check current eligibility.',
};

export const copilotModels: CopilotModel[] = [
  { name: 'GPT-5.3-Codex', provider: 'OpenAI', access: 'all', rates: { input: 1.75, cached: 0.175, write: null, output: 14 } },
  { name: 'GPT-5.4 nano', provider: 'OpenAI', access: 'extension', note: 'extension-model', rates: { input: 0.2, cached: 0.02, write: null, output: 1.25 } },
  { name: 'GPT-5.6 Luna', provider: 'OpenAI', access: 'all', threshold: 200000, rates: { input: 0.2, cached: 0.02, write: 0.25, output: 1.2 }, longContext: { input: 0.4, cached: 0.04, write: 0.5, output: 1.8 } },
  { name: 'GPT-5.6 Sol', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 4, cached: 0.4, write: 5, output: 20 }, longContext: { input: 8, cached: 0.8, write: 10, output: 30 } },
  { name: 'GPT-5.6 Terra', provider: 'OpenAI', access: 'all', threshold: 272000, rates: { input: 2, cached: 0.2, write: 2.5, output: 12 }, longContext: { input: 4, cached: 0.4, write: 5, output: 18 } },
  { name: 'GPT-6 Astra', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 10, cached: 1, write: 12.5, output: 50 }, longContext: { input: 20, cached: 2, write: 25, output: 75 } },
  { name: 'GPT-6 Luna', provider: 'OpenAI', access: 'all', threshold: 272000, rates: { input: 0.1, cached: 0.01, write: 0.125, output: 0.5 }, longContext: { input: 0.2, cached: 0.02, write: 0.25, output: 0.75 } },
  { name: 'GPT-6 Sol', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 2, cached: 0.2, write: 2.5, output: 10 }, longContext: { input: 4, cached: 0.4, write: 5, output: 15 } },
  { name: 'GPT-6.1 Sol', provider: 'OpenAI', access: 'premium', threshold: 272000, rates: { input: 2, cached: 0.1, write: 2.5, output: 10 }, longContext: { input: 4, cached: 0.2, write: 5, output: 15 } },
  { name: 'GPT-6.1 Terra', provider: 'OpenAI', access: 'all', threshold: 272000, rates: { input: 1, cached: 0.05, write: 1.25, output: 5 }, longContext: { input: 2, cached: 0.1, write: 2.5, output: 7.5 } },
  { name: 'Claude Haiku 4.5', provider: 'Anthropic', access: 'all', rates: { input: 1, cached: 0.1, write: 1.25, output: 5 } },
  { name: 'Claude Haiku 5.5', provider: 'Anthropic', access: 'all', threshold: 100000, rates: { input: 0.1, cached: 0.01, write: 0.125, output: 0.5 }, longContext: { input: 0.5, cached: 0.05, write: 0.625, output: 2.5 } },
  { name: 'Claude Sonnet 4.6', provider: 'Anthropic', access: 'annual', note: 'annual-model', rates: { input: 3, cached: 0.3, write: 3.75, output: 15 } },
  { name: 'Claude Sonnet 5', provider: 'Anthropic', access: 'all', rates: { input: 2, cached: 0.2, write: 2.5, output: 10 } },
  { name: 'Claude Sonnet 5.5', provider: 'Anthropic', access: 'all', rates: { input: 2, cached: 0.1, write: 2.5, output: 10 } },
  { name: 'Claude Opus 4.8', provider: 'Anthropic', access: 'premium', rates: { input: 5, cached: 0.5, write: 6.25, output: 25 } },
  { name: 'Claude Opus 4.8 (fast mode) (preview)', provider: 'Anthropic', access: 'premium', rates: { input: 10, cached: 1, write: 12.5, output: 50 } },
  { name: 'Claude Opus 5', provider: 'Anthropic', access: 'premium', rates: { input: 5, cached: 0.5, write: 6.25, output: 25 } },
  { name: 'Claude Opus 5.5', provider: 'Anthropic', access: 'premium', rates: { input: 4, cached: 0.2, write: 5, output: 20 } },
  { name: 'Claude Fable 5', provider: 'Anthropic', access: 'premium', note: 'fable-data', rates: { input: 10, cached: 1, write: 12.5, output: 50 } },
  { name: 'Claude Fable 5.1', provider: 'Anthropic', access: 'premium', note: 'fable-data', rates: { input: 10, cached: 0.25, write: 12.5, output: 50 } },
  { name: 'Gemini 3.8 Flash', provider: 'Google', access: 'all', note: 'flash-promo', rates: { input: 0.75, cached: 0.075, write: null, output: 3.75 } },
  { name: 'Gemini 4 Argon', provider: 'Google', access: 'premium', note: 'argon-promo', rates: { input: 2, cached: 0.1, write: null, output: 10 } },
  { name: 'MAI-Code-1.1-Flash', provider: 'Microsoft', access: 'all', rates: { input: 0.2, cached: 0.02, write: null, output: 1.2 } },
  { name: 'Grok 4.6', provider: 'xAI', access: 'all', threshold: 200000, rates: { input: 2, cached: 0.5, write: null, output: 6 }, longContext: { input: 4, cached: 1, write: null, output: 12 } },
  { name: 'Grok 4.7', provider: 'xAI', access: 'all', threshold: 200000, rates: { input: 2, cached: 0.5, write: null, output: 6 }, longContext: { input: 4, cached: 1, write: null, output: 12 } },
  { name: 'Kimi K3', provider: 'Moonshot AI', access: 'all', rates: { input: 3, cached: 0.3, write: null, output: 15 } },
];

export const modelGroups = [
  { name: 'Fast', examples: 'GPT-6 Luna, Claude Haiku 5.5, Gemini 3.8 Flash' },
  { name: 'Everyday', examples: 'GPT-6.1 Terra, Claude Sonnet 5.5' },
  { name: 'Deep reasoning', examples: 'GPT-6.1 Sol, Claude Opus 5.5' },
  { name: 'Long-running agent', examples: 'GPT-6 Astra, Claude Fable 5.1, Claude Opus 5.5' },
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
  { name: 'Fusion High', priority: 'Use orchestration when additional model passes are worthwhile.', use: 'Complex bugs and well-scoped changes across files.' },
  { name: 'Fusion Max', priority: 'Favor deeper reasoning and thorough analysis.', use: 'The most demanding tasks; model policies may restrict access.' },
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
export const copilotUniverseUpdates = [
  { name: 'Projects in the Copilot app', detail: 'Coordinate context and agent work across repositories and sessions.', status: 'Public preview; focused repository sessions remain available.', url: release + 'github-copilot-app-universe-releases/' },
  { name: 'Computer use', detail: 'Work with desktop apps after granting approval.', status: 'App: public preview on Windows/macOS. VS Code: experimental; admin policies apply.', url: release + 'github-copilot-in-vs-code-universe-releases/' },
  { name: 'Connected cloud sessions', detail: 'Start and continue the same cloud session across supported Copilot clients.', status: 'Cloud infrastructure keeps running when the local computer closes.', url: release + 'github-copilot-in-vs-code-universe-releases/' },
  { name: 'Parallel comparisons and Judge', detail: 'Compare model or harness attempts; ask Judge to recommend a result or synthesize ideas.', status: 'Preview in the VS Code Agents window.', url: release + 'github-copilot-in-vs-code-universe-releases/' },
  { name: 'Shared Automations', detail: 'Repository-owned workflows combine prompts, triggers, and permitted tools.', status: 'Rolling out on paid plans. Repository owner pays AI credits; organization policy is required.', url: release + 'build-shared-workflows-for-your-team-with-copilot-automations/' },
  { name: 'GitHub intelligence', detail: 'Memory, context improvement, and code search help agents reuse relevant knowledge.', status: 'Memory is GA on paid plans; availability/settings differ for other capabilities.', url: release + 'github-intelligence-puts-your-code-context-and-history-to-work/' },
  { name: 'Image generation', detail: 'Generate and edit workspace assets from chat through a separate image tool.', status: 'Public preview on listed eligible plans in VS Code, app, and CLI. Image tokens are billed separately from the chat model.', url: release + 'generate-and-edit-images-directly-in-copilot/' },
  { name: 'Code review Max and approvals', detail: 'Max combines independent reviews; Copilot approvals can count toward repository requirements when enabled.', status: 'Max review is public preview; approvals are GA. Review effort is separate from Fusion effort.', url: release + 'copilot-code-review-merge-with-confidence-with-max-and-approvals/' },
  { name: 'Agent Merge', detail: 'Watch and fix selected CI failures and merge conflicts in cloud environments.', status: 'Paid plans, subject to policies. Auto-merge is a separate repository setting.', url: release + 'agent-merge-watches-and-fixes-pull-requests-in-the-cloud/' },
  { name: 'JetBrains Air (3 November)', detail: 'Use a Copilot subscription for local and cloud coding tasks through Air.', status: 'Cloud tasks also require Air Teams access and administrator enablement; Copilot usage is not JetBrains AI credits.', url: 'https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air/' },
] as const;
