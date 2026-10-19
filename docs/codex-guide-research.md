# Codex guide: research and maintenance

Reviewed 19 October 2026. Route: `/resources/codex`. Editable facts and rates:
`src/data/codex.ts`. The guide follows the existing Resources table format.
This review used current official OpenAI documentation, not bundled model
snapshots, app model-picker metadata, or third-party price comparisons.

## Source register

| Official source | Evidence used |
| --- | --- |
| [Models](https://learn.chatgpt.com/docs/models) | Current recommendations, rollout, earlier versions, Power controls, and product-specific retirement. |
| [Model selection](https://learn.chatgpt.com/docs/model-selection) | Editorial task/effort starting points and evaluation on the same inputs. |
| [Plans and pricing](https://learn.chatgpt.com/docs/pricing) | Subscription prices, credit rates, usage estimates, shared limits, and review usage. |
| [Speed](https://learn.chatgpt.com/docs/agent-configuration/speed) | Separate allowance/credit multipliers and Ultrafast plan requirements. |
| [Workspace model availability](https://learn.chatgpt.com/docs/enterprise/workspace-model-availability) | Model defaults versus permissions, separate product surfaces, and administrator enablement. |
| [Authentication](https://learn.chatgpt.com/docs/auth) | ChatGPT and API-key sign-in, local execution, and hosted eligibility. |
| [API pricing](https://developers.openai.com/api/docs/pricing) | Direct token rates, processing modes, regional premiums, and additional tool charges. |
| [Sol 6.1 API model](https://developers.openai.com/api/docs/models/gpt-6.1-sol) | Base rates, cache-write billing, long-prompt threshold, context/output limits, and processing multipliers. |
| [Astra API model](https://developers.openai.com/api/docs/models/gpt-6-astra) | Model limits and pricing modifiers independently checked. |
| [Luna API model](https://developers.openai.com/api/docs/models/gpt-6-luna) | Model limits and pricing modifiers independently checked. |
| [Ultrafast API](https://developers.openai.com/api/docs/guides/ultrafast-mode) | API eligibility is separate from ChatGPT plan requirements. |
| [CLI](https://learn.chatgpt.com/docs/codex/cli) | Local repository work, command controls, and scripted execution. |
| [IDE extension](https://learn.chatgpt.com/docs/codex/ide) | Editor context, local work, and hosted handoffs. |
| [Cloud](https://learn.chatgpt.com/docs/cloud) | Hosted environments, task workspaces, and review before delivery. |
| [Best practices](https://learn.chatgpt.com/guides/best-practices) | Verifiable task briefs, reusable repository instructions, and scoped validation/review. |
| [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) | Parallel work consumes tokens for each agent; Ultra reasoning is distinct from speed tiers. |

## Research decisions

- Current Codex documentation redirects to ChatGPT Learn. Save canonical
  `learn.chatgpt.com` links. API facts use `developers.openai.com`; no general
  web result or product marketing slogan is used as a rate authority.
- Search results included older cached pricing pages naming GPT-6 Sol as the
  current flagship. Opened current pages establish GPT-6.1 Sol separately.
  Do not substitute a search snippet for the actual model rollout page.
- Three billing concepts remain separate: included plan usage, purchased or
  Enterprise credit billing, and API-key billing in USD. Credit purchase
  discounts and negotiated agreements prevent a universal USD conversion.
- The credit table includes seven coding models. Restricted cyber/research
  models and image-tool rates are excluded rather than treated as generally
  available Codex choices. Earlier model identifiers are omitted where the
  inspected rate source only established the display name.
- Fast/Ultrafast credit rows derive from documented multipliers. These apply
  to credit billing, not included plan allowances. The speed table carries the
  separate allowance multipliers. No task count is calculated from token rates.
- API rows cover the three current recommendations, both prompt-length bands,
  and supported processing modes. Batch/Flex/Fast and Ultrafast rows derive
  from model-specific documented rules, including the full-request long-prompt
  multiplier. No Ultrafast Luna row is generated.
- Cache writes appear only in the API table. Codex credit billing explicitly
  has no separate write charge. Formatting retains small fractional rates.
- API context and output limits do not describe a Codex client's effective
  context, repository loading, or included allowance. Keep that scope visible.
- Ultrafast API access and Codex subscription access are different eligibility
  paths. Buying personal credits does not unlock an unsupported plan feature.
- Published local-message ranges are estimates for a named plan and time
  window. They must not become fixed prompt quotas or an unlimited-Pro claim.
- The recent GPT-5.5 retirement applies to ChatGPT sign-in. Do not imply that
  the same event retires the API model or breaks API-key-authenticated sessions.
- Task choices and practical habits are editorial adaptations, not measured
  performance results. Higher effort and more agents are not automatic quality
  guarantees. Review relevant checks and the resulting diff.

## Maintenance

1. Reopen the official sources before changing the fixed review date. Check
   canonical redirects and rollout details as well as rate values.
2. Recheck current/earlier model scope, model identifiers, promotions, and any
   subsequent retirement. Revisit the GPT-5.6 Sol promotion by 21 November 2026.
3. Review included allowance rules, credit billing, and API pricing separately;
   preserve their different units and eligibility constraints.
4. Recheck both input-length bands, cache categories, speed factors, and API
   mode support. Update generator assumptions when models diverge.
5. Keep regional subscription checkout, API organization access, Enterprise
   agreements, and administrator controls qualified. Do not infer entitlement
   from selecting a model in configuration.
6. Build and check whitespace. Verify both tables independently: search, model
   or prompt scope, processing/speed, sorting, empty state, reset, and Enter.
   Print with filters active must reveal every row; no-JavaScript HTML must
   retain all reference data. Inspect desktop in every theme and 390/320px
   mobile, including keyboard table scrolling and source anchors.
7. Recheck the four-guide index and the three existing guides after shared CSS
   changes. Preserve the incumbent design system and unrelated repository work.
