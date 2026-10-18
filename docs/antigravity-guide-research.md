# Antigravity and Gemini 4 Argon: research and maintenance

Reviewed 18 October 2026. Route: `/resources/antigravity`. Editable facts:
`src/data/antigravity.ts`. The page covers Antigravity access and subscriptions,
plus a separately labeled Gemini Developer API price reference for Argon.

## Source register

| Official source | Use in the guide |
| --- | --- |
| [Antigravity models](https://www.antigravity.google/docs/models/) | The plan access matrix, Pro trial distinction, client support, and scheduled removals. |
| [Antigravity plans](https://www.antigravity.google/docs/plans/) | Baseline refreshes, workload-based limits, and overage pricing boundary. |
| [Antigravity FAQ](https://www.antigravity.google/docs/faq/) | Paid subscriptions versus trials; product-specific eligibility takes precedence over broad launch marketing. |
| [Argon in Antigravity](https://www.antigravity.google/blog/gemini-4-argon-in-google-antigravity) | App and CLI rollout for Pro and Ultra. |
| [Argon model specifications](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon) | API identifier, supported inputs, shared window, output, and consumption options. |
| [Latest-model migration guide](https://ai.google.dev/gemini-api/docs/latest-model) | Thinking levels, long decode, implicit caching, and ignored sampling parameters. |
| [Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing) | Published Standard, Batch, Flex, and Priority rates in both dated periods. Values are transcribed, not inferred by applying discounts. |
| [Google AI plans](https://one.google.com/about/google-ai-plans/) | Regional and storage-tier offers. General Gemini access multipliers are not Antigravity prompt guarantees. |
| [Google One plan prices](https://one.google.com/about/plans) | Published USD monthly Pro reference price. |
| [AI-credit purchases](https://support.google.com/googleone/answer/17103110?hl=en) | Purchased-credit eligibility for Pro and Ultra. |
| [CLI credits](https://www.antigravity.google/docs/cli/credits/) | Credit panel, quota command, and fallback setting. |
| [Enterprise integration](https://www.antigravity.google/docs/enterprise/) | Seat and Cloud-project routes, partner opt-in and token billing, background coordination charges. |

## Editorial and evidence decisions

- One guide contains a dedicated `#gemini-4-argon` section and a `#model-pricing`
  anchor. The user called it "Argon 4"; display Google's official model name.
- The standalone Antigravity IDE and Antigravity IDE extensions are distinct
  products. Keep that distinction when describing Argon support.
- Keep the Pro trial column explicit. Do not infer model access from a generic
  "Pro" launch headline or from the availability of older Claude models.
- Current product-specific model documentation is the access authority. Some
  general launch and translated pages have different eligibility wording;
  do not carry an Ultra-only claim into this page.
- Google One's canonical public AI-plan page rendered price placeholders for
  several tiers in this research session. Indexed locale variants showed
  inconsistent storage and price details. Plus and Ultra therefore link to
  account checkout instead of presenting a guessed universal price. The Pro
  reference is independently visible on the current plan-price page.
- Do not convert Flow credits, Cloud promotional credits, API token prices,
  or Gemini app usage multipliers into Antigravity allowances. No guaranteed
  numeric prompt allowance or credit-to-token conversion is asserted.
- The API price change is announced future pricing. Keep both periods visible
  and dated; do not silently switch figures using the build clock.
- The shared-window example is arithmetic, not a measured output guarantee.
  Thinking consumes part of the remaining window and the output budget.
- Task suggestions are editorial, based on the provider's thinking guidance
  and documented availability. No performance benchmark was run.
- Consumer plans and Enterprise have separate authentication and billing
  paths. This page does not infer Enterprise protections from a personal plan.

## Maintenance

1. Recheck the source register before advancing the explicit review date.
2. Update plan access and lifecycle together. Revisit the three scheduled
   removals on 2 November 2026; past removal dates must not imply continuing
   access after a later review.
3. Recheck the announced API price change on 1 December 2026. Preserve dated
   historical notes if useful, but make the currently applicable period clear.
4. Recheck all four API modes and cache rules directly; never extrapolate
   partner pricing or a new model's modes from another catalog.
5. Keep account-dependent pricing linked to checkout until a stable published
   figure and its region/tier are verified.
6. Run `npm run build` and `git diff --check`. Verify search, plan and status
   intersections, reset, empty state, no-JavaScript HTML, print with a filter
   active, keyboard scrolling, and 320px mobile overflow. Recheck both existing
   guides and the three-entry Resources index.
