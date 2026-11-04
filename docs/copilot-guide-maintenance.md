# Maintaining the GitHub Copilot guide

The guide lives at `/resources/github-copilot`, linked from `/resources`, the
desktop More menu, the mobile menu, and the footer. It is a reference page,
independent of the Dev.to blog feed.

## Content source

Edit `src/data/copilot.ts`. No reference images need to be regenerated.

- `copilotModels`: USD rates per one million tokens, provider, plan access,
  optional long-context rates and their input threshold, and note references.
- `modelNotes`: promotions, eligibility exceptions, and retention notes.
- `modelGroups` and `taskGuidance`: editorial task recommendations. These must
  remain explicitly distinguished from official GitHub rankings.
- `copilotPlans`: monthly prices, base and flex allowances, and plan differences.
- `copilotSelectionOptions`, `copilotFusionEfforts`, and `copilotFusionPatterns`:
  the selection, effort, and workflow tables, including editorial task examples.
- `copilotAccessPlans` and `copilotUniverseUpdates`: enterprise access arrangements
  and dated, sourced workflow changes with release and billing boundaries.
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
7. Keep the selection, Fusion-effort, and execution-pattern tables and the short Choosing a model
   note. Review Auto's discount separately from Fusion's dated promotion and
   per-model billing. Recheck efforts, preview eligibility, and workspace caveats against the
   linked documentation; neither option bypasses plan or administrator settings.

The 20 October 2026 source review and retirement decisions are recorded in
`docs/copilot-auto-hydrafusion-research.md`.

The current Universe review is `docs/copilot-universe-2026-research.md`.
Keep the unsure-reader note and all comparison concepts when refreshing product
names. Fusion's dated promotion is separate from Auto discounts; remove expired
promotions rather than infer renewal. Preserve old anchor aliases. The JSON
catalog is now schema 2: Fusion efforts/patterns replace the old tier/pattern
fields; access arrangements and Universe rows share the page's data module.

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
ends before December 1. The paid Fusion discount ends after November 30;
`billingRules.fusionDiscountUntil` must be checked before applying it. No later
Fusion discount is assumed. Remaining Auto surfaces have separate rules. Check
these dates against the official sources.

After building, confirm the JSON response has 27 models (or the intentionally
updated count) and that each ID is unique. From the extension repository run
`npm run sync-model-catalog -- --website ../website`, then its compile and catalog
tests. Update consumers for schema 2 before syncing: renamed Fusion fields and
removed expired billing fields are incompatible changes. The extension repository
has not been changed or validated as part of this website refresh.
Deploying the website publishes the endpoint; extension releases ship a
validated offline snapshot and do not require the website at build time.

`src/components/CopilotPricingTable.astro` renders the rates as semantic HTML
before adding client-side filters. Without JavaScript, every rate remains
visible. Printing includes all rows, even if the screen table is filtered.

`src/layouts/ResourceLayout.astro` and `src/styles/resources.css` reuse the
site's header, footer, typography, and theme tokens for both resource routes.
