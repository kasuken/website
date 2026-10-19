// Official OpenAI documentation reviewed manually; do not advance on build.
export const codexReviewDate = '2026-10-19';
export const codexReviewLabel = '19 October 2026';
export const codexDescription = 'A practical Codex reference: current models, reasoning and speed, ChatGPT plans, credit rates, separate API pricing, and local or cloud workflows.';
export const codexSources = {
  models: { title: 'Codex models, rollout, and GPT-5.5 retirement', url: 'https://learn.chatgpt.com/docs/models' },
  selection: { title: 'Model and reasoning selection guidance', url: 'https://learn.chatgpt.com/docs/model-selection' },
  plans: { title: 'Plans, usage estimates, and credit token rates', url: 'https://learn.chatgpt.com/docs/pricing' },
  speed: { title: 'Fast and Ultrafast eligibility and usage multipliers', url: 'https://learn.chatgpt.com/docs/agent-configuration/speed' },
  workspace: { title: 'Workspace and client model access boundaries', url: 'https://learn.chatgpt.com/docs/enterprise/workspace-model-availability' },
  auth: { title: 'ChatGPT sign-in versus API-key authentication', url: 'https://learn.chatgpt.com/docs/auth' },
  api: { title: 'Direct OpenAI API pricing', url: 'https://developers.openai.com/api/docs/pricing' },
  sol: { title: 'GPT-6.1 Sol API specifications and pricing rules', url: 'https://developers.openai.com/api/docs/models/gpt-6.1-sol' },
  astra: { title: 'GPT-6 Astra API specifications', url: 'https://developers.openai.com/api/docs/models/gpt-6-astra' },
  luna: { title: 'GPT-6 Luna API specifications', url: 'https://developers.openai.com/api/docs/models/gpt-6-luna' },
  ultrafastApi: { title: 'Ultrafast API access and configuration', url: 'https://developers.openai.com/api/docs/guides/ultrafast-mode' },
  cli: { title: 'Codex CLI and local repository workflows', url: 'https://learn.chatgpt.com/docs/codex/cli' },
  ide: { title: 'Codex IDE extension', url: 'https://learn.chatgpt.com/docs/codex/ide' },
  cloud: { title: 'Codex Cloud environments and review workflow', url: 'https://learn.chatgpt.com/docs/cloud' },
  practice: { title: 'OpenAI best practices for working with Codex', url: 'https://learn.chatgpt.com/guides/best-practices' },
  subagents: { title: 'Subagents, delegation, and token usage', url: 'https://learn.chatgpt.com/docs/agent-configuration/subagents' },
};

export interface CodexRates { input: number; cached: number; output: number; write?: number }
export interface CodexModel {
  name: string;
  id?: string;
  scope: 'current' | 'earlier';
  role?: string;
  credits: CodexRates;
  api?: CodexRates;
  ultrafast?: boolean;
}
export const codexModels: CodexModel[] = [
  { name: 'GPT-6 Luna', id: 'gpt-6-luna', scope: 'current', role: 'Focused edits, triage, and frequent repeatable work', credits: { input: 2.5, cached: 0.25, output: 12.5 }, api: { input: 0.1, cached: 0.01, write: 0.125, output: 0.5 } },
  { name: 'GPT-6.1 Sol', id: 'gpt-6.1-sol', scope: 'current', role: 'Complex coding and agent work with attention to time and cost', credits: { input: 50, cached: 2.5, output: 250 }, api: { input: 2, cached: 0.1, write: 2.5, output: 10 }, ultrafast: true },
  { name: 'GPT-6 Astra', id: 'gpt-6-astra', scope: 'current', role: 'Demanding reasoning, ambiguous problems, and difficult code', credits: { input: 250, cached: 25, output: 1250 }, api: { input: 10, cached: 1, write: 12.5, output: 50 }, ultrafast: true },
  { name: 'GPT-6 Sol', id: 'gpt-6-sol', scope: 'earlier', credits: { input: 50, cached: 5, output: 250 } },
  { name: 'GPT-5.6 Sol', scope: 'earlier', credits: { input: 100, cached: 10, output: 500 } },
  { name: 'GPT-5.6 Terra', scope: 'earlier', credits: { input: 50, cached: 5, output: 300 } },
  { name: 'GPT-5.6 Luna', scope: 'earlier', credits: { input: 5, cached: 0.5, output: 30 } },
];
export const codexCurrentModels = codexModels.filter(model => model.scope === 'current');
export const codexModes = { standard: 'Standard', fast: 'Fast', ultrafast: 'Ultrafast', batch: 'Batch', flex: 'Flex' } as const;
export type CodexMode = keyof typeof codexModes;
export interface CodexPriceRow {
  model: CodexModel;
  mode: CodexMode;
  band: 'all' | 'short' | 'long';
  rates: CodexRates;
}
const multiply = (rates: CodexRates, factor: number): CodexRates => ({
  input: rates.input * factor, cached: rates.cached * factor, output: rates.output * factor,
  ...(rates.write === undefined ? {} : { write: rates.write * factor }),
});
// Purchased credits / Enterprise PAYG use these speed multipliers.
// Included subscription allowances use DIFFERENT multipliers, shown separately.
export const codexCreditRows: CodexPriceRow[] = codexModels.flatMap(model => [
  { model, mode: 'standard' as const, band: 'all' as const, rates: model.credits },
  { model, mode: 'fast' as const, band: 'all' as const, rates: multiply(model.credits, 2) },
  ...(model.ultrafast ? [{ model, mode: 'ultrafast' as const, band: 'all' as const, rates: multiply(model.credits, 6) }] : []),
]);
// The three current API model pages publish the same 272K threshold and
// Batch/Flex/Fast multipliers; Ultrafast is limited to Sol 6.1 and Astra.
export const codexApiRows: CodexPriceRow[] = codexCurrentModels.flatMap(model => {
  const base = model.api!;
  const long: CodexRates = { input: base.input * 2, cached: base.cached * 2, write: base.write! * 2, output: base.output * 1.5 };
  const modes: [CodexMode, number][] = [['standard', 1], ['batch', 0.5], ['flex', 0.5], ['fast', 2]];
  if (model.ultrafast) modes.push(['ultrafast', 6]);
  return modes.flatMap(([mode, factor]) => [
    { model, mode, band: 'short' as const, rates: multiply(base, factor) },
    { model, mode, band: 'long' as const, rates: multiply(long, factor) },
  ]);
});

// Editorial starting points based on official model-selection guidance.
export const codexTasks = [
  { task: 'Small fixes, extraction, and routine edits', start: 'GPT-6 Luna · low', check: 'Keep scope narrow; move up if it misses constraints or needs repeated corrections.' },
  { task: 'Triage and repeatable tasks with clear constraints', start: 'GPT-6 Luna · extra high', check: 'Compare accuracy and total effort with Sol on the same representative task.' },
  { task: 'Features, debugging, and coordinated changes', start: 'GPT-6.1 Sol · medium', check: 'A useful starting point for complex coding; check the diff and relevant tests.' },
  { task: 'Cross-cutting refactors or conflicting evidence', start: 'GPT-6.1 Sol · extra high', check: 'Increase effort when planning or consistency is the weak point.' },
  { task: 'Ambiguous architecture or demanding analysis', start: 'GPT-6 Astra · medium / extra high', check: 'Evaluate when the quality improvement justifies its higher usage.' },
];
export const codexSpeeds = [
  { name: 'Standard', included: '1x', credits: '1x', access: 'Baseline speed for the selected model' },
  { name: 'Fast', included: '2.5x', credits: '2x', access: 'Supported models and clients with ChatGPT sign-in' },
  { name: 'Ultrafast', included: '8x', credits: '6x', access: 'Astra / Sol 6.1; Pro $500 or eligible Enterprise / Edu' },
];
export const codexPersonalPlans = [
  { name: 'Free', price: '$0/month', access: 'Luna at Standard speed in desktop; rollout dependent', limits: 'Limited access; check your current allowance' },
  { name: 'Go', price: '$8/month', access: 'Luna at Standard speed in desktop; rollout dependent', limits: 'Light coding use; check your current allowance' },
  { name: 'Plus', price: '$20/month', access: 'Broader Codex clients and cloud features', limits: '5-hour allowance; weekly limits may apply; extra credits available' },
  { name: 'Pro', price: '$100 / $200 / $500 per month', access: 'Plus features; Ultrafast on the $500 tier', limits: 'Currently no 5-hour cap; allowance still applies. Check your dashboard.' },
];
export const codexOrganizationPlans = [
  { name: 'Business', price: '$20/user/month, billed annually; $25 monthly', detail: '2+ users; dedicated workspace, SAML SSO, and MFA. Standard seats have usage allowances; credits can extend usage.' },
  { name: 'Enterprise / Edu', price: 'Contact sales / agreement', detail: 'Flexible pricing uses credits; legacy allowance-based plans differ. Model and Ultrafast access require workspace eligibility and admin controls.' },
];
export const codexUsageEstimates = [
  { model: 'GPT-6 Astra', range: '5–45' },
  { model: 'GPT-6.1 Sol', range: '15–160' },
  { model: 'GPT-6 Luna', range: '350–3,000' },
];
export const codexWorkflows = [
  { surface: 'Desktop · local work', where: 'Your selected local checkout or connected execution host', use: 'Work on a repository while reviewing files, changes, and results in the app.' },
  { surface: 'CLI', where: 'The local project directory', use: 'Terminal work and scripted runs with codex exec; choose model, effort, and permissions.' },
  { surface: 'IDE extension', where: 'Your editor workspace for local tasks', use: 'Work alongside source files and use editor context. Check supported client and sign-in options.' },
  { surface: 'Codex Cloud', where: 'A configured hosted environment with its own task workspace', use: 'Delegate work that can continue while your computer sleeps, then inspect changes and checks.' },
];
export const codexCommands = [
  { command: '/model', purpose: 'Choose an available model and reasoning effort.' },
  { command: '/status', purpose: 'Inspect session configuration and current usage information.' },
  { command: '/permissions', purpose: 'Set what Codex is allowed to do.' },
  { command: '/review', purpose: 'Review changes for issues; a local review uses general allowance.' },
  { command: '/fast', purpose: 'Toggle Fast mode where supported.' },
  { command: 'codex exec', purpose: 'Run a non-interactive task from a script or CI workflow.' },
];
