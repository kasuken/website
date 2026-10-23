# Maintaining the GitHub Copilot guide

The guide lives at `/resources/github-copilot`, linked from `/resources`, the
desktop More menu, the mobile menu, and the footer. It is a reference page,
independent of the Dev.to blog feed.

## Content source

Edit `src/data/copilot.ts`. No screenshots need to be regenerated.

- `copilotModels`: USD rates per one million tokens, provider, plan access,
  optional long-context rates and their input threshold, and note references.
- `modelNotes`: promotions, eligibility exceptions, and retention notes.
- `modelGroups` and `taskGuidance`: editorial task recommendations. These must
  remain explicitly distinguished from official GitHub rankings.
- `copilotPlans`: monthly prices, base and flex allowances, and plan differences.
- `copilotSelectionOptions`, `copilotAutoTiers`, and `copilotHydraPatterns`:
  the selection, tier, and workflow tables, including editorial task examples.
- `copilotSources`: the official documentation supporting the reference.
- `copilotReviewDate` and `copilotReviewLabel`: advance both only after checking
  the content. The index and guide share these values.

## Review process

1. Check GitHub's model pricing and supported-model pages together. A priced
   model can be retired or restricted to an annual subscription or extension.
2. Check every published default and long-context rate, cache-write fee, input
   threshold, and promotion expiry. `null` means no separate write rate is
   listed; it must not be converted into a claim that the model is free.
3. Check individual and organization billing separately. Individual flex
   credits are variable. Business and Enterprise credits are pooled. Legacy
   annual request billing must not be described using the monthly table.
4. Recheck model examples and task guidance after removing or adding models.
   Compare the dated retirement announcements with the supported-model page;
   a stale client or plan matrix must not keep a retired model in current rates.
5. Review training and provider retention separately. A no-training commitment
   does not imply every model has zero retention.
6. Update the explicit review date after the review, then run `npm run build`
   and `git diff --check`. In the preview, check search, all tier options,
   numeric sorting, no-match recovery, mobile table scrolling, and site themes.
7. Keep the Auto/HydraFusion comparison tables and the short Choosing a model
   note. Review Auto's discount separately from HydraFusion's standard per-model
   billing. Recheck tiers, preview eligibility, and workspace caveats against the
   linked documentation; neither option bypasses plan or administrator settings.

The 20 October 2026 source review and retirement decisions are recorded in
`docs/copilot-auto-hydrafusion-research.md`.

## Implementation

### Shared JSON catalog

`src/pages/resources/github-copilot.json.ts` prerenders
`/resources/github-copilot.json` from the same `src/data/copilot.ts` exports as
the guide. This is the public versioned catalog consumed by Copilot Insights;
do not maintain a second copy of rates in JSON by hand. The response contains
explicit USD-per-million-token units, credit conversion, sources, access notes,
plan references, editorial guidance, promotion expiry dates, and billing rules.
No account or usage information is exposed. Consumers may bundle/cache snapshots.

`schemaVersion` changes only for incompatible contract changes. Advance `revision`
for every data change, including corrections on the same review day. Update the
revision expression in the endpoint when changing content independently of the
billing-rule review date. Model and billing-rule review dates are independent;
neither should advance without an actual source review. Model IDs are public
identifiers: preserve existing IDs when correcting display names. Current IDs
are derived from names; add explicit overrides before renaming existing models.

Promotion `validUntil` dates are inclusive UTC days. The Gemini Argon promotion
ends before December 1. The Max Auto discount ends after October 28; standard
Auto discounts apply afterward. Check these dates against the official sources.

After building, confirm the JSON response has 26 models (or the intentionally
updated count) and that each ID is unique. From the extension repository run
`npm run sync-model-catalog -- --website ../website`, then its compile and catalog
tests. Deploying the website publishes the endpoint; extension releases ship a
validated offline snapshot and do not require the website at build time.

`src/components/CopilotPricingTable.astro` renders the rates as semantic HTML
before adding client-side filters. Without JavaScript, every rate remains
visible. Printing includes all rows, even if the screen table is filtered.

`src/layouts/ResourceLayout.astro` and `src/styles/resources.css` reuse the
site's header, footer, typography, and theme tokens for both resource routes.
