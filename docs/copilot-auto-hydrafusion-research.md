# Copilot Auto, HydraFusion, and model refresh

Reviewed 20 October 2026 against official GitHub sources. The user's final
clarification keeps the approved Auto/HydraFusion tables and adds a short note
in Choosing a model. The research below supports both parts.
Route: `/resources/github-copilot`. Facts and table rows: `src/data/copilot.ts`.

## Source register

| Official source | Evidence used |
| --- | --- |
| [Auto model selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection) | Routing signals, three tiers, same eligible pool, client boundaries, policies, response visibility, and 10% paid-plan discount. |
| [Using HydraFusion](https://docs.github.com/en/early-access/copilot/hydrafusion) | Single/Cascade/Critique, per-prompt workflow, standard per-model billing, no Auto discount, workspace edits surviving discarded drafts, no SLA and no production-workload intent. |
| [HydraFusion Max, 14 October](https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/) | Both variants, deeper reasoning, three clients, and explicitly listed Pro/Pro+/Business/Enterprise eligibility with preview settings and model policies. |
| [Model deprecations, 19 October](https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026/) | Six retired models and their replacement guidance. |
| [Models and pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing) | Remaining default/long-context rates, input thresholds, cache-write units, promotions, AI-credit conversion, and unmetered paid completions. |
| [Supported models](https://docs.github.com/en/copilot/reference/ai-models/supported-models) | Current lineup, annual Sonnet 4.6 exception, Codex-extension-only nano exception, and administrator policies. |
| [Model comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison) | Task-selection guidance; editorial examples remain labeled. |
| [Plans](https://docs.github.com/en/copilot/get-started/plans) | Monthly individual/seat prices and plan types. |
| [Individual billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing) | Pro 1,500 / Pro+ 7,000 / Max 20,000 total credits, base/flex splits, reset, extra usage, and Free/Student Auto access. |
| [Organization billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing) | Business 1,900 and Enterprise 3,900 credits per seat, billing-entity pools, resets, and additional-usage policy. |
| [Model hosting](https://docs.github.com/en/copilot/reference/ai-models/model-hosting) | Provider training/retention separation and Fable exemption. |

## Decisions and evidence boundaries

- Remove GPT-5 mini, GPT-5.4, GPT-5.4 mini, GPT-5.5, Gemini 3.7 Flash, and
  Grok 4.5 from the active rate table. The dated 19 October notice is explicit
  about Grok 4.5 even though stale plan/client/hosting matrices still mention it.
- Retain Claude Sonnet 4.6 with its annual-plan restriction and GPT-5.4 nano
  with its Pro+ Codex-extension restriction. Do not confuse nano with mini.
- Remaining numeric rates and plan allowances were checked against current
  documentation. The review date is fixed at 20 October, never build-derived.
- Auto is a routing option and HydraFusion an orchestrator; neither is added
  as a fictitious fixed-price model row. The final note links to their docs.
- The 100-to-90-credit example is arithmetic for identical model/token usage,
  not a task-cost estimate or a claim of savings against another model.
- Prefer current HydraFusion documentation and the 14 October release over
  the launch article's older all-plan/CLI-only description. Do not infer Max
  subscription eligibility from the HydraFusion Max option's name.
- Model pools can change; do not hard-code a HydraFusion pool or advertise
  research benchmark savings as a promise for a reader's workload.
- Task examples are editorial guidance. No live HydraFusion experiment or
  local Copilot-account eligibility test was performed for this content update.
