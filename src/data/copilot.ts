// Reviewed against the linked GitHub sources. Change this date only after a
// content review, never from the build clock. All model rates are USD / 1M tokens.
export const copilotReviewDate = '2026-10-20';
export const copilotReviewLabel = '20 October 2026';
export const copilotBillingRules = {
  autoDiscount: 0.1,
  autoDiscountAccess: ['all', 'premium'],
  maxAutoDiscount: 0.3,
  maxAutoDiscountUntil: '2026-10-28',
  reviewedAt: '2026-10-23',
  hydraFusion: 'Each participating model is charged at standard rates; no Auto discount.',
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
  hydrafusion: { title: 'HydraFusion research preview', url: 'https://docs.github.com/en/early-access/copilot/hydrafusion' },
  hydrafusionRelease: { title: 'HydraFusion Max release and plan eligibility', url: 'https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/' },
  retirements: { title: 'Copilot model deprecations on 19 October 2026', url: 'https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026/' },
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
  { name: 'Everyday', examples: 'GPT-5.6 Terra, Claude Sonnet 5.5' },
  { name: 'Deep reasoning', examples: 'GPT-6.1 Sol, Claude Opus 5' },
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
  { name: 'Auto', behavior: 'Routes requests using task complexity, model availability, and system health.', use: 'Everyday work where you want Copilot to handle model selection.' },
  { name: 'HydraFusion', behavior: 'Chooses a workflow and can coordinate several models within one turn.', use: 'Substantial, well-scoped changes where additional review may be worth the time and usage.' },
  { name: 'HydraFusion Max', behavior: 'Uses the same orchestration approach with deeper reasoning for demanding work.', use: 'Difficult tasks where more thorough analysis justifies additional time and usage.' },
] as const;

export const copilotAutoTiers = [
  { name: 'Efficiency', priority: 'Keep costs down.', use: 'Small edits, explanations, and routine changes.' },
  { name: 'Balance', priority: 'Weigh quality, cost, and response time together.', use: 'General development work.' },
  { name: 'Intelligence', priority: 'Favor response quality.', use: 'More demanding debugging or implementation tasks.' },
] as const;

export const copilotHydraPatterns = [
  { name: 'Single', behavior: 'One model handles the task.' },
  { name: 'Cascade', behavior: 'An initial solution is inspected and can be accepted or escalated to a stronger model.' },
  { name: 'Critique', behavior: 'A draft receives independent model review, followed by revision.' },
] as const;

export const copilotPlans = [
  { name: 'Pro', audience: 'Individual', monthly: 10, base: 1000, flex: 500, models: 'Selected models', ownership: 'Personal allowance', management: 'Personal settings', extra: 'Set an extra-usage budget or upgrade', training: 'May be used; opt-out available' },
  { name: 'Pro+', audience: 'Individual', monthly: 39, base: 3900, flex: 3100, models: 'Premium models', ownership: 'Personal allowance', management: 'Personal settings', extra: 'Set an extra-usage budget or upgrade', training: 'May be used; opt-out available' },
  { name: 'Max', audience: 'Individual', monthly: 100, base: 10000, flex: 10000, models: 'Priority access to premium models', ownership: 'Personal allowance', management: 'Personal settings', extra: 'Set an extra-usage budget', training: 'May be used; opt-out available' },
  { name: 'Business', audience: 'Organization', monthly: 19, base: 1900, flex: null, models: 'Premium models, subject to policy', ownership: 'Pooled at the billing entity', management: 'Central policies and seat management', extra: 'Continues if additional usage is allowed', training: 'Not used by GitHub for model training' },
  { name: 'Enterprise', audience: 'Organization', monthly: 39, base: 3900, flex: null, models: 'Priority access to premium models, subject to policy', ownership: 'Pooled at the billing entity', management: 'Enterprise controls; requires Enterprise Cloud', extra: 'Continues if additional usage is allowed', training: 'Not used by GitHub for model training' },
];
