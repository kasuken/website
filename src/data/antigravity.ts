// Manually reviewed against the linked Google documentation.
// Review dates describe the source check, not the date of a build.
export const antigravityReviewDate = '2026-10-18';
export const antigravityReviewLabel = '18 October 2026';
export const antigravityDescription =
  'Compare Google Antigravity model access, plans and quotas, with a Gemini 4 Argon reference covering API prices, thinking levels, and token limits.';

export const antigravitySources = {
  models: { title: 'Antigravity model access and retirement dates', url: 'https://www.antigravity.google/docs/models/' },
  plans: { title: 'Antigravity quotas and credit overages', url: 'https://www.antigravity.google/docs/plans/' },
  faq: { title: 'Paid-plan eligibility and free trials', url: 'https://www.antigravity.google/docs/faq/' },
  launch: { title: 'Gemini 4 Argon in the Antigravity App and CLI', url: 'https://www.antigravity.google/blog/gemini-4-argon-in-google-antigravity' },
  argon: { title: 'Gemini 4 Argon API model specifications', url: 'https://ai.google.dev/gemini-api/docs/models/gemini-4-argon' },
  migration: { title: 'Argon thinking levels, caching, and migration', url: 'https://ai.google.dev/gemini-api/docs/latest-model' },
  pricing: { title: 'Gemini Developer API prices and tool charges', url: 'https://ai.google.dev/gemini-api/docs/pricing' },
  subscriptions: { title: 'Google AI plans and regional checkout', url: 'https://one.google.com/about/google-ai-plans/' },
  proPrice: { title: 'Google One published monthly plan prices', url: 'https://one.google.com/about/plans' },
  credits: { title: 'Buying AI credits and purchase eligibility', url: 'https://support.google.com/googleone/answer/17103110?hl=en' },
  cli: { title: 'CLI credit controls and quota tracking', url: 'https://www.antigravity.google/docs/cli/credits/' },
  enterprise: { title: 'Enterprise licensing, models, and billing', url: 'https://www.antigravity.google/docs/enterprise/' },
};

export const antigravityAccessPlans = [
  { id: 'free', label: 'Free / Plus' },
  { id: 'trial', label: 'Pro trial' },
  { id: 'pro', label: 'Paid Pro' },
  { id: 'ultra', label: 'Ultra' },
  { id: 'enterprise', label: 'Enterprise' },
] as const;
export type AntigravityPlanId = typeof antigravityAccessPlans[number]['id'];
type Availability = 'Included' | 'Not included' | 'Admin opt-in';
export interface AntigravityModel {
  name: string;
  provider: 'Google' | 'Anthropic' | 'OpenAI';
  retiring?: boolean;
  argon?: boolean;
  access: Record<AntigravityPlanId, Availability>;
}
const access = (free: boolean, trial: boolean, pro: boolean, ultra: boolean, enterprise: boolean, partner = false): AntigravityModel['access'] => ({
  free: free ? 'Included' : 'Not included',
  trial: trial ? 'Included' : 'Not included',
  pro: pro ? 'Included' : 'Not included',
  ultra: ultra ? 'Included' : 'Not included',
  enterprise: enterprise ? (partner ? 'Admin opt-in' : 'Included') : 'Not included',
});
export const antigravityModels: AntigravityModel[] = [
  { name: 'Gemini 4 Argon', provider: 'Google', argon: true, access: access(false, false, true, true, true) },
  { name: 'Gemini 3.8 Flash', provider: 'Google', access: access(true, true, true, true, true) },
  { name: 'Gemini 3.7 Flash', provider: 'Google', access: access(false, false, false, false, true) },
  { name: 'Gemini 3.6 Flash', provider: 'Google', access: access(false, false, false, false, true) },
  { name: 'Gemini 3.1 Pro', provider: 'Google', access: access(false, false, false, false, true) },
  { name: 'Claude Sonnet 5.5 (thinking)', provider: 'Anthropic', access: access(false, false, true, true, true, true) },
  { name: 'Claude Opus 5.5 (thinking)', provider: 'Anthropic', access: access(false, false, true, true, true, true) },
  { name: 'Claude Sonnet 4.6 (thinking)', provider: 'Anthropic', retiring: true, access: access(true, true, true, false, false) },
  { name: 'Claude Opus 4.6 (thinking)', provider: 'Anthropic', retiring: true, access: access(true, true, true, false, false) },
  { name: 'GPT-OSS-120B', provider: 'OpenAI', retiring: true, access: access(true, true, true, true, false) },
];

export const argonPeriods = [
  { id: 'intro', label: 'Through 30 Nov 2026', detail: 'Introductory rate' },
  { id: 'announced', label: 'From 1 Dec 2026', detail: 'Announced rate' },
] as const;
export const argonApiModes = [
  { name: 'Standard', rates: [{ input: 2, cached: 0.1, output: 10 }, { input: 4, cached: 0.2, output: 20 }] },
  { name: 'Batch', rates: [{ input: 1, cached: 0.05, output: 5 }, { input: 2, cached: 0.1, output: 10 }] },
  { name: 'Flex', rates: [{ input: 1, cached: 0.05, output: 5 }, { input: 2, cached: 0.1, output: 10 }] },
  { name: 'Priority', rates: [{ input: 3.6, cached: 0.18, output: 18 }, { input: 7.2, cached: 0.36, output: 36 }] },
] as const;
export const argonPriceRows = argonPeriods.flatMap((period, index) =>
  argonApiModes.map(mode => ({ period, mode: mode.name, ...mode.rates[index] })),
);

export const argonFacts = [
  { label: 'API model ID', value: 'gemini-4-argon', code: true },
  { label: 'Inputs / output', value: 'Text, images, video, audio, and PDF in; text out.' },
  { label: 'Shared token window', value: '1,048,576 tokens across input, thinking, and output.' },
  { label: 'Default output limit', value: '65,536 tokens, including thinking.' },
  { label: 'Long decode', value: 'Beyond 65,536 requires background execution and a higher output limit; the shared window still applies.' },
  { label: 'Thinking levels', value: 'Low, medium (default), and high in the Gemini API.' },
  { label: 'Caching', value: 'Implicit only, from 4,096 prompt tokens; cache hits receive a 95% input discount. Explicit caches are unsupported.' },
] as const;

// Editorial starting points, not measured benchmark results.
export const antigravityTasks = [
  { task: 'Small edits and quick iterations', start: 'Gemini 3.8 Flash', reason: 'Try the broadly available fast option first, then compare quality on your own code.' },
  { task: 'Complex features and agent workflows', start: 'Gemini 4 Argon · medium', reason: 'Google recommends medium as the API starting level for most tasks, including complex code.' },
  { task: 'Difficult debugging, math, or science', start: 'Gemini 4 Argon · high', reason: 'Evaluate deeper thinking when medium falls short; allow for more tokens and slower first output.' },
  { task: 'Compare a second model provider', start: 'Claude Sonnet 5.5 or Opus 5.5', reason: 'Run the same acceptance checks. Access needs paid Pro, Ultra, or an enabled Enterprise project.' },
];

export const antigravityPlans = [
  { name: 'Free / Google AI Plus', price: 'Free: $0; Plus: local tier price', quota: 'Weekly refresh', allowance: 'Baseline weekly quota', argon: 'Not included', overage: 'No purchased-credit fallback' },
  { name: 'Google AI Pro · paid', price: '$19.99/month (US reference)', quota: 'Every 5 hours, until the weekly cap', allowance: 'Higher weekly quota', argon: 'Included; trial excluded', overage: 'Purchased or one-time promotional AI credits' },
  { name: 'Google AI Ultra', price: 'Check current tier and local price', quota: 'Every 5 hours', allowance: 'Highest weekly quota', argon: 'Included', overage: 'Purchased or one-time promotional AI credits' },
] as const;
