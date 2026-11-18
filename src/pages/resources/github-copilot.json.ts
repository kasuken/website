import {
  copilotReviewDate, copilotSources, copilotModels, modelAccess, modelNotes,
  modelGroups, taskGuidance, copilotPlans, copilotSelectionOptions,
  copilotFusionEfforts, copilotFusionPatterns, copilotBillingRules,
  copilotAccessPlans, copilotUniverseUpdates,
} from '../../data/copilot';

export const prerender = true;

const promotionEndDates: Record<string, string> = {
  'flash-promo': '2026-12-31',
  'argon-promo': '2026-11-30',
  'carbon-promo': '2026-11-30',
  'mai-promo': '2027-05-16',
};

export function GET() {
  return new Response(JSON.stringify({
    schemaVersion: 2,
    revision: `${copilotBillingRules.reviewedAt}.1`,
    reviewedAt: copilotReviewDate,
    currency: 'USD',
    tokensPerUnit: 1000000,
    creditCostUsd: 0.01,
    sources: copilotSources,
    models: copilotModels.map((model) => ({
      ...model,
      id: model.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
      ...(model.note && promotionEndDates[model.note] ? { validUntil: promotionEndDates[model.note] } : {}),
    })),
    access: modelAccess,
    notes: modelNotes,
    groups: modelGroups,
    guidance: taskGuidance,
    plans: copilotPlans,
    selectionOptions: copilotSelectionOptions,
    fusionEfforts: copilotFusionEfforts,
    fusionPatterns: copilotFusionPatterns,
    billingRules: copilotBillingRules,
    accessPlans: copilotAccessPlans,
    universeUpdates: copilotUniverseUpdates,
  }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
