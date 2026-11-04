# Copilot guide review — 4 November 2026

Official sources checked: the current GitHub Docs models-and-pricing, supported
models, plans, individual billing, organization billing, model hosting, Auto, and
[Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion) pages.
Source URLs are retained in `copilotSources` and each workflow-table row.

## Changes and evidence

- [Fusion launch, 28 October](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/): GA; combines Auto and HydraFusion; existing selections migrate. Preserve the old guide anchors as aliases. Replace research-preview claims about HydraFusion with the current product, without removing comparison concepts or the unsure-reader note.
- Current Fusion docs: Standard selects one model per task; High/Max may orchestrate multiple passes. Fast is product-selected for VS Code inline chat. Parallel critics inform revision. Local routing is a separate public preview with supported models, platforms, and experimental settings. Do not equate Fusion Max with the Max subscription or promise every effort on every plan.
- Billing docs: Fusion paid-plan promotion is 30% through 30 November 2026; standard model rates apply before discount. Auto still has 10% on supported Chat/cloud-agent surfaces. Remove expired 28 October Max Auto promotion and never assume the post-promotion Fusion discount. No fixed per-task price or universal savings claim.
- [GPT-6.1 Terra](https://github.blog/changelog/2026-10-26-gpt-6-1-terra-in-github-copilot/): all paid plans, gradual rollout and policies. Rates per million tokens: default input 1, cached .05, write 1.25, output 5 USD; >272K input: 2/.1/2.5/7.5. Remaining coding rates and personal/base/flex and Business/Enterprise figures match the checked tables.
- Preserve annual Sonnet 4.6 and extension-only nano restrictions. Do not restore already-retired Grok 4.5 or Sonnet 4 from stale pricing/client matrices. Dated retirement notices take precedence over lingering rows.
- [Enterprise access](https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot/): eligible account-team arrangements, staged self-service. Enterprise Cloud licensed users have no additional Copilot seat charge; Standalone is $10/user/month. Both have no included credits and meter from first usage. Existing Business/Enterprise plans remain available. Budgets must be configured before usage; inline completions/NES remain available at zero budget.
- Reviewed workflow sources: app Projects/public preview; app computer use/public preview versus VS Code/experimental; cloud session continuity; VS Code Judge/synthesis preview; shared Automations rollout and repository-owner billing; GitHub intelligence with GA paid Memory and capability-specific settings; image generation preview with separate billing; code review Max preview versus GA approvals; paid/policy-bound Agent Merge; 3 November JetBrains Air and separate Air Teams requirements. Each row links to its announcement. This is a selected Copilot workflow reference, not an exhaustive Universe changelog.
- Coding model rates exclude image-tool rates: clearly disclose separate image-token billing. Preserve the code-review AI-credit plus Actions-minute distinction from current pricing docs. Provider retention exceptions remain separate from training commitments.

## Catalog and verification boundaries

`/resources/github-copilot.json` advances to schema 2 because `autoTiers` and
`hydraPatterns` are replaced by `fusionEfforts` and `fusionPatterns`, and expired
Max Auto fields are removed. New billing fields include Fusion's dated promotion.
Consumers must evaluate the expiry, not apply a discount indefinitely. Access
arrangements and workflow rows are exported from the same data as the page.

No Copilot account-specific availability, local-model install, or live Fusion
experiment was performed. Announced benchmarks are not republished as guarantees.
Sources were checked on the explicit review date; builds do not advance it.

Upcoming retirement: the 15 October notice schedules Opus 4.8, Opus 5, and GPT-5.6 Terra for 16 November. Keep them in the 4 November snapshot; preserve the individual annual Opus 4.8 exception. Prefer Opus 5.5 in editorial examples. Source: https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november/
