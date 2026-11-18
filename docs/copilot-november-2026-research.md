# Copilot review — 18 November 2026

Reviewed GitHub's current models/pricing, supported-model and plan tables, model
comparison, hosting, individual/organization billing, Fusion and Auto docs.
Canonical URLs are in `copilotSources`; each workflow row links to its primary
announcement. GitHub's Copilot changelog was screened through 17 November.

## Model and pricing decisions

- Add GPT-6.2 Astra/Sol (17 November), Fable 5.2 (9 November), Gemini 4 Carbon
  (10 November), Hydrogen (13 November), and MAI Code 2/Flash (17 November).
  Dates and plan eligibility come from their linked GitHub announcements.
- Per million tokens, input/cached/cache-write/output: Astra 8/.4/10/40;
  >272K 16/.8/20/60. Sol 2/.1/2.5/10; >272K 4/.2/5/15.
  Fable 5.2 8/.2/10/40. Carbon 2/.1/N/A/10. Hydrogen 1.5/.075/N/A/7.5.
  MAI Code 2 .5/.025/N/A/2.5; Flash .05/.005/N/A/.25.
  All retained coding rates and thresholds were compared with current tables.
- Carbon promotion ends before 1 December; published subsequent rates are
  4/.2/N/A/20. MAI promotions end before 17 May 2027; subsequent rates double.
  Catalog `validUntil` days are inclusive: 30 November and 16 May respectively.
  Existing Flash/Argon promotions and Fusion's 30% paid promotion through
  30 November remain current. Never infer later Fusion/Argon prices.
- [16 November retirement](https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026/): remove GPT-5.6 Terra and Opus 5 from the selectable catalog. Opus 5 can still be used for authorized runtime refusal fallback. Base Opus 4.8 remains for eligible annual individual subscribers; the current plan matrix lists Pro+. Keep its separately listed fast-mode entry and eligibility, rather than infer that it was also retired.
- [14 December notice](https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december/) covers Fable 5, Haiku 4.5, Gemini 3.8 Flash, Argon, Grok 4.6, and Kimi K3. Haiku has an individual annual-plan exception. [MAI 1.1 Flash](https://github.blog/changelog/2026-11-17-upcoming-deprecation-of-mai-code-1-1-flash-in-december/) follows on 18 December. Keep these entries in the current snapshot.
- Current price/availability matrices still contain retired Sonnet 4 and Grok
  4.5; dated retirement notices take precedence. Preserve the Sonnet 4.6 annual
  and extension-only nano exceptions. Do not change surviving model IDs.
- Fable retention and default-disabled model policies also cover Fable 5.2.
  Temporary ZDR approval, administrator enablement, and internal-use restrictions
  are separate. See the linked hosting documentation; no blanket privacy claim.

## Fusion, plans, and workflows

- [17 November Fusion](https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models/) adds web, Visual Studio, and Mobile beta; production mobile is forthcoming. Older Auto docs list overlapping surfaces, so explain the rollout and direct readers to their picker. Do not present beta mobile as production GA.
- Fusion docs' actual availability matrix (including icon labels) gives Standard
  to all plans; High/Max to Pro+, Max, Business, Enterprise. Policies still apply.
  The dated update adds Sonnet 5.5 to Max, Terra 6.1 to High, MAI Code 2 to Standard.
  Local MAI/Qwen routing remains a separate experimental public preview.
- Monthly prices and base/flex allowances are unchanged: Pro 10/1000/500,
  Pro+ 39/3900/3100, Max 100/10000/10000; Business 19/1900 and Enterprise 39/3900.
  Dollar prices and AI credit quantities are separate units. Included credits
  reset at 00:00 UTC on calendar-month day 1, independently of billing dates.
  Business/Enterprise paid usage is enabled by default; admins must disable it
  to stop at the included pool. Enterprise access arrangements still have no
  included credits. No entitlement or billing settings were changed.
- Rechecked personal training opt-out versus Business/Enterprise protections in
  [GitHub's current policy documentation](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies).
  These remain separate from provider retention and Fable exceptions.
- Existing workflow concepts remain. Added browser-use preview; app Azure DevOps
  preview versus GHES GA 1.2.0+ (neither supports cloud sessions); Evals preview;
  JetBrains sandbox/remote/dictation previews; Entra CLI preview with distinct
  GitHub versus Microsoft 365 inference and billing; EMU-only Agent 365 audit
  streaming; VS Code Local-harness February 2027 removal; Xcode assistant preview.
  These are selected reference entries, not an exhaustive release feed.
- [Adaptive review](https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more/) is preview with paid-plan eligibility, maximum-effort policy, and Balanced default. Cross-repo context is preview for public repositories, secret detection is preview, Azure Repos review is GA. Preserve separate opt-in GA approvals. Review costs include AI credits and Actions minutes; estimates are not guarantees.
- Benchmarks and vendor performance comparisons are not republished as promises.

## Compatibility and validation scope

Schema 2 and existing JSON keys remain; `universeUpdates` also includes current
Ignite rows. Revision/review dates advance explicitly. Promotion expiries are
exported from the same model-note associations. No consumer repository sync,
account-specific feature check, local inference setup, or live Copilot experiment.
Research HTML and parsed tables are local review evidence under the ignored
`.impeccable/review/copilot-nov18/` directory, not website assets.
