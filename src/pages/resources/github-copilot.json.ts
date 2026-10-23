import {
  copilotReviewDate, copilotSources, copilotModels, modelAccess, modelNotes,
  modelGroups, taskGuidance, copilotPlans, copilotSelectionOptions,
  copilotAutoTiers, copilotHydraPatterns, copilotBillingRules,
} from '../../data/copilot';

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify({
    schemaVersion: 1,
    revision: `${copilotBillingRules.reviewedAt}.1`,
    reviewedAt: copilotReviewDate,
    currency: 'USD',
    tokensPerUnit: 1000000,
    creditCostUsd: 0.01,
    sources: copilotSources,
    models: copilotModels.map((model) => ({
      ...model,
      id: model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
      ...(model.note === 'flash-promo' ? { validUntil: '2026-12-31' } : {}),
      ...(model.note === 'argon-promo' ? { validUntil: '2026-11-30' } : {}),
    })),
    access: modelAccess,
    notes: modelNotes,
    groups: modelGroups,
    guidance: taskGuidance,
    plans: copilotPlans,
    selectionOptions: copilotSelectionOptions,
    autoTiers: copilotAutoTiers,
    hydraPatterns: copilotHydraPatterns,
    billingRules: copilotBillingRules,
  }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}