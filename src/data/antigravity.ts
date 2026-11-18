// Manually reviewed against the linked Google documentation.
// Review dates describe the source check, not the date of a build.
export const antigravityReviewDate = '2026-11-18';
export const antigravityReviewLabel = '18 November 2026';
export const antigravityDescription =
  'Compare Google Antigravity model access, Carbon, Hydrogen and Orchestrator, plans and quotas, with a separate Gemini 4 Argon API reference.';

export const antigravitySources = {
  models: { title: 'Antigravity model access and retirement dates', url: 'https://www.antigravity.google/docs/models/' },
  plans: { title: 'Antigravity quotas and credit overages', url: 'https://www.antigravity.google/docs/plans/' },
  faq: { title: 'Paid-plan eligibility and free trials', url: 'https://www.antigravity.google/docs/faq/' },
  launch: { title: 'Gemini 4 Argon in the Antigravity App and CLI', url: 'https://www.antigravity.google/blog/gemini-4-argon-in-google-antigravity' },
  argon: { title: 'Gemini 4 Argon API model specifications', url: 'https://ai.google.dev/gemini-api/docs/models/gemini-4-argon' },
  carbon: { title: 'Gemini 4 Carbon API specifications', url: 'https://aistudio.google.com/docs/models/gemini-4-carbon' },
  hydrogen: { title: 'Gemini 4 Hydrogen API specifications', url: 'https://aistudio.google.com/docs/models/gemini-4-hydrogen' },
  orchestrator: { title: 'Hydrogen and Orchestrator launch', url: 'https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity' },
  migration: { title: 'Argon thinking levels, caching, and migration', url: 'https://aistudio.google.com/docs/whats-new-gemini-4-argon' },
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
type Availability = 'Included' | 'Not included' | 'Admin opt-in' | 'Eligible device only';
export interface AntigravityModel {
  name: string;
  provider: 'Google' | 'Anthropic' | 'OpenAI';
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
  { name: 'Gemini 4 Carbon', provider: 'Google', access: access(false, false, false, true, true) },
  { name: 'Gemini 4 Argon', provider: 'Google', argon: true, access: { ...access(false, false, true, true, true), trial: 'Eligible device only' } },
  { name: 'Gemini 4 Hydrogen', provider: 'Google', access: access(false, false, true, true, true) },
  { name: 'Orchestrator (Carbon)', provider: 'Google', access: access(false, false, false, true, false) },
  { name: 'Orchestrator (Argon)', provider: 'Google', access: { ...access(false, false, true, true, false), trial: 'Eligible device only' } },
  { name: 'Gemini 3.8 Flash', provider: 'Google', access: access(true, true, true, true, true) },
  { name: 'Gemini 3.7 Flash', provider: 'Google', access: access(false, false, false, false, true) },
  { name: 'Gemini 3.6 Flash', provider: 'Google', access: access(false, false, false, false, true) },
  { name: 'Gemini 3.1 Pro', provider: 'Google', access: access(false, false, false, false, true) },
  { name: 'Claude Sonnet 5.5 (thinking)', provider: 'Anthropic', access: access(false, false, true, true, true, true) },
  { name: 'Claude Opus 5.5 (thinking)', provider: 'Anthropic', access: access(false, false, true, true, true, true) },
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
export const hydrogenApiStandard = { input: 1.5, cached: 0.075, output: 7.5 };

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
  { task: 'Small edits and quick iterations', start: 'Gemini 4 Hydrogen; Gemini 3.8 Flash on Free / Plus', reason: 'Evaluate the fast standalone option. Hydrogen requires paid Pro, Ultra, or Enterprise in Antigravity.' },
  { task: 'Features, refactors, and multi-file debugging', start: 'Orchestrator (Argon); Carbon variant on Ultra', reason: 'A planner explores and reviews; Hydrogen implements and verifies in the same conversation. Available in App and CLI; no adjustable effort.' },
  { task: 'Work needing deep reasoning at every step', start: 'Gemini 4 Carbon or Argon directly', reason: 'Use a single model when reasoning depth matters throughout. Carbon requires Ultra or Enterprise; Argon also supports eligible Pro access.' },
  { task: 'Increase reasoning on a fast model', start: 'Gemini 4 Hydrogen · Extra', reason: 'High is the default; Extra maps to xhigh in the CLI. Compare quality and total token use before making it your default.' },
  { task: 'Compare a second model provider', start: 'Claude Sonnet 5.5 or Opus 5.5', reason: 'Run the same acceptance checks. Access needs paid Pro, Ultra, or an enabled Enterprise project.' },
];

export const antigravityPlans = [
  { name: 'Free / Google AI Plus', price: 'Free: $0; Plus: local tier price', quota: 'Weekly refresh', allowance: 'Baseline weekly quota', argon: 'Not included', overage: 'No purchased-credit fallback' },
  { name: 'Google AI Pro · paid', price: '$19.99/month (US reference)', quota: 'Every 5 hours, until the weekly cap', allowance: 'Higher weekly quota', argon: 'Included; eligible premium-device trials also qualify', overage: 'Purchased or one-time promotional AI credits' },
  { name: 'Google AI Ultra', price: 'Check current tier and local price', quota: 'Every 5 hours', allowance: 'Highest weekly quota', argon: 'Included', overage: 'Purchased or one-time promotional AI credits' },
] as const;
