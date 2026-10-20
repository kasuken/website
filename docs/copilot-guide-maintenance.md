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

`src/components/CopilotPricingTable.astro` renders the rates as semantic HTML
before adding client-side filters. Without JavaScript, every rate remains
visible. Printing includes all rows, even if the screen table is filtered.

`src/layouts/ResourceLayout.astro` and `src/styles/resources.css` reuse the
site's header, footer, typography, and theme tokens for both resource routes.
