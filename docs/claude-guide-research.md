# Claude guide: research and maintenance

Reviewed 18 October 2026. Route: `/resources/claude`. Editable content:
`src/data/claude.ts`. This guide covers Anthropic's direct API and Claude plans;
GitHub Copilot, Bedrock, Google Cloud, and other partner billing are separate.

## Source register and decisions

| Source | Evidence used |
| --- | --- |
| [API pricing](https://platform.claude.com/docs/en/about-claude/pricing) | Input, output, 5-minute and 1-hour cache writes, cache reads, Batch discounts, fast-mode premiums, Haiku threshold, and US inference premium. |
| [Model overview](https://platform.claude.com/docs/en/models/overview) | Current lineup: Haiku 5.5, Sonnet 5.5, Opus 5.5, Fable 5.1. API IDs and current model context/output limits. |
| [Model lifecycle](https://platform.claude.com/docs/en/about-claude/model-deprecations) | Earlier active versions stay distinct from the current lineup. Sonnet 4.5 is deprecated, retiring 30 November 2026. Retired models are excluded. |
| [Model choice](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model) | Efficiency-first and capability-first selection; Opus starting point and evaluation before escalating to Fable. Task matrix is an editorial synthesis, not a published benchmark. |
| [App pricing](https://claude.com/pricing) | Free, Pro, Max, Team seat variants, Enterprise seat-plus-usage offer, taxes, model family access, and Fable limits. |
| [Individual plan help](https://support.claude.com/en/articles/11049762-choose-a-claude-plan) | Pro monthly/annual charges and separate Max 5x/20x prices. |
| [API credit program](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers) | Max and Team amounts; claim, seven-day eligibility, Console linking, expiry, excluded products, and Team pool cap. |
| [Claude Code and subscriptions](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan) | Shared session/weekly limits and API-key authentication versus subscription billing. Included promotional API credits exclude Claude Code. |
| [Fable/Mythos migration](https://platform.claude.com/docs/en/models/fable-5-1/migration-guide) | Restricted Mythos access and 30-day retention requirements for Covered Models, with express-authorization exceptions. |
| [Commercial privacy](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training) | No training by default for commercial inputs/outputs; voluntary feedback and permission are exceptions. |
| [Consumer privacy](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training) | Model-improvement choices, feedback, and safety-review exceptions. |

## Material findings reflected in the page

- Standard prices are per million tokens, not per prompt or task. Cache writes
  and reads are different token categories, not fees to add to every input token.
- Haiku 5.5 has two prompt-length bands. The higher band applies to a request
  whose total input exceeds 100,000 tokens, including cached input.
- Batch prices are half the standard rates; the data derives the cache columns
  using the documented stacking rule. Fast cache prices likewise follow the
  documented multipliers. The page labels these derived values.
- Most 4.6-and-later models have no separate long-context premium; do not copy
  GitHub Copilot tiers or outdated 200K-threshold guidance into this API guide.
- Mythos pricing does not imply unrestricted access. Deprecated Sonnet 4.5
  remains visible only when all listed models are selected.
- A subscription is not an unlimited token balance. The current API-credit
  program is a separate claimed benefit on eligible Max and Team plans.
  Statements that all Claude subscriptions exclude API credits are outdated.
- Team credits contribute $20 per Standard seat and $100 per Premium seat,
  pooled to a maximum $500 per month. They expire without rollover and do not
  cover Claude Code, app extra usage, or partner cloud billing.
- The current published Enterprise self-serve offer is $20 per seat per month,
  billed annually with a 20-seat minimum, plus usage at API rates. Negotiated
  sales-assisted contracts can differ; no custom quote is inferred.
- Model training and data retention are separate. Fable and Mythos retention
  requirements do not become zero retention merely because training is off.

## Update process

Recheck the source register and model lifecycle together. Update the explicit
rates, IDs, scopes, notes, plans, and review date in `src/data/claude.ts` only
after content review. Do not assign API limits to app subscriptions, calculate
guaranteed message counts from usage multipliers, or infer partner prices.
Explanatory prose and footnotes live in `src/pages/resources/claude.astro`;
recheck those alongside the data when eligibility or lifecycle rules change.

Run `npm run build` and `git diff --check`. Check pricing-mode and model-scope
filters together, search by API ID, numeric sorting, reset, no-match recovery,
table scrolling at 320px and 390px, themes, print, and no-JavaScript fallback.
The shared resource layout also serves Copilot, so verify both breadcrumbs and
the Resources index after changing it.
