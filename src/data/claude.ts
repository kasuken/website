// First-party Anthropic pricing, reviewed manually. USD per million tokens.
// Advance the review date only after rechecking the linked sources.
export const claudeReviewDate = '2026-10-18';
export const claudeReviewLabel = '18 October 2026';
export const claudeDescription =
  'Compare Claude API model prices, caching, batch and fast modes, task guidance, and Claude Free, Pro, Max, Team, and Enterprise plans.';

export const claudeSources = {
  pricing: { title: 'API token prices, caching, and pricing modifiers', url: 'https://platform.claude.com/docs/en/about-claude/pricing' },
  models: { title: 'Current models, API IDs, and capabilities', url: 'https://platform.claude.com/docs/en/models/overview' },
  lifecycle: { title: 'Model lifecycle and retirement dates', url: 'https://platform.claude.com/docs/en/about-claude/model-deprecations' },
  selection: { title: 'Anthropic model selection guidance', url: 'https://platform.claude.com/docs/en/about-claude/models/choosing-a-model' },
  plans: { title: 'Claude app and organization pricing', url: 'https://claude.com/pricing' },
  personal: { title: 'Individual plans and Max tier prices', url: 'https://support.claude.com/en/articles/11049762-choose-a-claude-plan' },
  credits: { title: 'Included API credits: eligibility and restrictions', url: 'https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers' },
  code: { title: 'Claude Code subscription limits and API billing', url: 'https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan' },
  retention: { title: 'Fable and Mythos access and retention requirements', url: 'https://platform.claude.com/docs/en/models/fable-5-1/migration-guide' },
  commercialPrivacy: { title: 'Commercial data use and model training', url: 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training' },
  consumerPrivacy: { title: 'Consumer model-improvement choices and exceptions', url: 'https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training' },
};

export interface ClaudeRates {
  input: number;
  read: number;
  write5m: number;
  write1h: number;
  output: number;
}
type ModelScope = 'current' | 'earlier' | 'restricted' | 'deprecated';
export interface ClaudeModel {
  name: string;
  id: string;
  family: 'Haiku' | 'Sonnet' | 'Opus' | 'Fable' | 'Mythos';
  scope: ModelScope;
  rates: ClaudeRates;
  longPrompt?: ClaudeRates;
  fast?: ClaudeRates;
  note?: 'claude-haiku-threshold' | 'claude-retention' | 'claude-restricted' | 'claude-deprecated';
}

export const claudeScopeLabels: Record<ModelScope, string> = {
  current: 'Current lineup · active',
  earlier: 'Earlier version · active',
  restricted: 'Verified organizations only',
  deprecated: 'Deprecated · retires 30 Nov 2026',
};

export const claudeModels: ClaudeModel[] = [
  { name: 'Claude Haiku 5.5', id: 'claude-haiku-5-5', family: 'Haiku', scope: 'current', note: 'claude-haiku-threshold', rates: { input: 0.1, read: 0.01, write5m: 0.125, write1h: 0.2, output: 0.5 }, longPrompt: { input: 0.5, read: 0.05, write5m: 0.625, write1h: 1, output: 2.5 } },
  { name: 'Claude Sonnet 5.5', id: 'claude-sonnet-5-5', family: 'Sonnet', scope: 'current', rates: { input: 2, read: 0.1, write5m: 2.5, write1h: 4, output: 10 } },
  { name: 'Claude Opus 5.5', id: 'claude-opus-5-5', family: 'Opus', scope: 'current', rates: { input: 4, read: 0.2, write5m: 5, write1h: 8, output: 20 }, fast: { input: 8, read: 0.4, write5m: 10, write1h: 16, output: 40 } },
  { name: 'Claude Fable 5.1', id: 'claude-fable-5-1', family: 'Fable', scope: 'current', note: 'claude-retention', rates: { input: 10, read: 0.25, write5m: 12.5, write1h: 20, output: 50 } },
  { name: 'Claude Haiku 4.5', id: 'claude-haiku-4-5-20251001', family: 'Haiku', scope: 'earlier', rates: { input: 1, read: 0.1, write5m: 1.25, write1h: 2, output: 5 } },
  { name: 'Claude Sonnet 5', id: 'claude-sonnet-5', family: 'Sonnet', scope: 'earlier', rates: { input: 2, read: 0.2, write5m: 2.5, write1h: 4, output: 10 } },
  { name: 'Claude Sonnet 4.6', id: 'claude-sonnet-4-6', family: 'Sonnet', scope: 'earlier', rates: { input: 3, read: 0.3, write5m: 3.75, write1h: 6, output: 15 } },
  { name: 'Claude Opus 5', id: 'claude-opus-5', family: 'Opus', scope: 'earlier', rates: { input: 5, read: 0.5, write5m: 6.25, write1h: 10, output: 25 }, fast: { input: 10, read: 1, write5m: 12.5, write1h: 20, output: 50 } },
  { name: 'Claude Opus 4.8', id: 'claude-opus-4-8', family: 'Opus', scope: 'earlier', rates: { input: 5, read: 0.5, write5m: 6.25, write1h: 10, output: 25 }, fast: { input: 10, read: 1, write5m: 12.5, write1h: 20, output: 50 } },
  { name: 'Claude Opus 4.7', id: 'claude-opus-4-7', family: 'Opus', scope: 'earlier', rates: { input: 5, read: 0.5, write5m: 6.25, write1h: 10, output: 25 } },
  { name: 'Claude Opus 4.6', id: 'claude-opus-4-6', family: 'Opus', scope: 'earlier', rates: { input: 5, read: 0.5, write5m: 6.25, write1h: 10, output: 25 } },
  { name: 'Claude Opus 4.5', id: 'claude-opus-4-5-20251101', family: 'Opus', scope: 'earlier', rates: { input: 5, read: 0.5, write5m: 6.25, write1h: 10, output: 25 } },
  { name: 'Claude Fable 5', id: 'claude-fable-5', family: 'Fable', scope: 'earlier', note: 'claude-retention', rates: { input: 10, read: 1, write5m: 12.5, write1h: 20, output: 50 } },
  { name: 'Claude Mythos 5.1', id: 'claude-mythos-5-1', family: 'Mythos', scope: 'restricted', note: 'claude-restricted', rates: { input: 10, read: 0.25, write5m: 12.5, write1h: 20, output: 50 } },
  { name: 'Claude Mythos 5', id: 'claude-mythos-5', family: 'Mythos', scope: 'restricted', note: 'claude-restricted', rates: { input: 10, read: 1, write5m: 12.5, write1h: 20, output: 50 } },
  { name: 'Claude Sonnet 4.5', id: 'claude-sonnet-4-5-20250929', family: 'Sonnet', scope: 'deprecated', note: 'claude-deprecated', rates: { input: 3, read: 0.3, write5m: 3.75, write1h: 6, output: 15 } },
];

export interface ClaudePriceRow {
  model: ClaudeModel;
  mode: 'standard' | 'batch' | 'fast';
  prompt: string;
  rates: ClaudeRates;
}
// Anthropic documents a 50% Batch discount and stacking with prompt caching.
// Batch cache columns and fast-mode cache columns are derived from those rules.
const batchRates = (rates: ClaudeRates): ClaudeRates => ({
  input: rates.input / 2, read: rates.read / 2, write5m: rates.write5m / 2,
  write1h: rates.write1h / 2, output: rates.output / 2,
});
export const claudePriceRows: ClaudePriceRow[] = claudeModels.flatMap(model => {
  const prompt = model.longPrompt ? 'Prompt ≤ 100K tokens' : 'Standard prompt pricing';
  const rows: ClaudePriceRow[] = [
    { model, mode: 'standard', prompt, rates: model.rates },
    { model, mode: 'batch', prompt, rates: batchRates(model.rates) },
  ];
  if (model.longPrompt) {
    rows.push({ model, mode: 'standard', prompt: 'Prompt > 100K tokens', rates: model.longPrompt });
    rows.push({ model, mode: 'batch', prompt: 'Prompt > 100K tokens', rates: batchRates(model.longPrompt) });
  }
  if (model.fast) rows.push({ model, mode: 'fast', prompt: 'Full context window', rates: model.fast });
  return rows;
}).sort((a, b) => a.rates.output - b.rates.output || a.model.name.localeCompare(b.model.name));

export const claudeModes = { standard: 'Standard API', batch: 'Batch API', fast: 'Fast mode' };
export const claudeGroups = [
  { name: 'Haiku 5.5', examples: 'Extraction, routing, and fast responses' },
  { name: 'Sonnet 5.5', examples: 'Everyday coding, writing, and analysis' },
  { name: 'Opus 5.5', examples: 'Complex coding and sustained agent work' },
  { name: 'Fable 5.1', examples: 'Demanding reasoning and long-horizon tasks' },
] as const;
type Fit = 'Start here' | 'Also fits' | 'Not first choice';
export const claudeTasks: { task: string; fits: [Fit, Fit, Fit, Fit] }[] = [
  { task: 'High-volume classification or extraction', fits: ['Start here', 'Also fits', 'Not first choice', 'Not first choice'] },
  { task: 'Quick syntax help and small edits', fits: ['Start here', 'Also fits', 'Not first choice', 'Not first choice'] },
  { task: 'Everyday features, tests, and documentation', fits: ['Also fits', 'Start here', 'Also fits', 'Not first choice'] },
  { task: 'Writing, analysis, and visual understanding', fits: ['Also fits', 'Start here', 'Also fits', 'Also fits'] },
  { task: 'Difficult debugging across a codebase', fits: ['Not first choice', 'Also fits', 'Start here', 'Also fits'] },
  { task: 'Large refactors and autonomous coding', fits: ['Not first choice', 'Also fits', 'Start here', 'Also fits'] },
  { task: 'Demanding reasoning after Opus evaluation falls short', fits: ['Not first choice', 'Not first choice', 'Also fits', 'Start here'] },
  { task: 'Deep research carried through to a finished artifact', fits: ['Not first choice', 'Also fits', 'Also fits', 'Start here'] },
];

export const claudePersonalPlans = [
  { name: 'Free', monthly: '$0', annual: 'Not applicable', usage: 'Limited', models: 'Sonnet and Haiku', code: 'Not included', credits: 'Not included', fable: 'Not included' },
  { name: 'Pro', monthly: '$20', annual: '$200 / year, paid upfront', usage: 'More than Free; session and weekly limits', models: 'Adds Opus', code: 'Included; shared usage limits', credits: 'Not included', fable: 'Paid usage credits' },
  { name: 'Max 5x', monthly: '$100', annual: 'Monthly billing only', usage: '5× Pro session capacity; weekly limits still apply', models: 'Opus, Sonnet, and Haiku', code: 'Included; shared usage limits', credits: '$100 / month after claim', fable: 'Separate limit: 50% of weekly capacity' },
  { name: 'Max 20x', monthly: '$200', annual: 'Monthly billing only', usage: '20× Pro session capacity; weekly limits still apply', models: 'Opus, Sonnet, and Haiku', code: 'Included; shared usage limits', credits: '$200 / month after claim', fable: 'Separate limit: 50% of weekly capacity' },
];
export const claudeOrganizationPlans = [
  { name: 'Team Standard', monthly: '$25 / seat', annual: '$20 / seat / month', minimum: '2 seats; teams up to 150', usage: 'More usage than Pro; limits apply', code: 'Included', fable: 'Check seat eligibility; pricing lists the allowance for Premium seats', credits: '$20 / seat, pooled and capped', controls: 'Central billing, SSO, organization administration' },
  { name: 'Team Premium', monthly: '$125 / seat', annual: '$100 / seat / month', minimum: '2 seats; can mix Team seat types', usage: '5× Standard seat usage; limits apply', code: 'Included', fable: 'Separate limit: 50% of weekly capacity', credits: '$100 / seat, pooled and capped', controls: 'Same Team administration with higher seat usage' },
  { name: 'Enterprise', monthly: 'Annual seat contract + usage', annual: '$20 / seat / month + usage', minimum: '20 seats on published self-serve offer', usage: 'Metered usage at API rates', code: 'Included; usage billed separately', fable: 'Available, subject to organization controls', credits: 'Not included in this credit program', controls: 'Spend controls, SCIM, audit logs, custom retention' },
];
