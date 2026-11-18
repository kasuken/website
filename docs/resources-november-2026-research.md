# Resource guide review — 18 November 2026

This snapshot updates Claude, Antigravity, and Codex. GitHub Copilot's separate
18 November review remains unchanged. Advance visible dates only after a new
source review. Historical guide research files remain historical evidence.
No live account access, benchmark, billing experiment, or settings change was
performed. Prices are USD reference rates; checkout and negotiated terms vary.

## Claude

- [Current models](https://platform.claude.com/docs/en/models/overview) and
  [API pricing](https://platform.claude.com/docs/en/about-claude/pricing): add
  Fable 5.2 to the current lineup and Mythos 5.2 to verified organizations.
  Both cost $8 input / $0.20 cache read / $10 five-minute cache write /
  $16 one-hour cache write / $40 output per million tokens. Fast doubles these
  rates. Batch is half Standard and stacks with caching; Fast excludes Batch.
- [Migration and retention](https://platform.claude.com/docs/en/models/fable-5-2/migration-guide):
  Fable 5.2 needs no special verification; Mythos 5.2 does. Covered Model
  retention restrictions remain. Keep earlier Fable/Mythos rows separately.
- [Lifecycle](https://platform.claude.com/docs/en/about-claude/model-deprecations):
  keep active earlier API models, including Opus 5 and 4.8. Copilot picker
  retirements do not retire Anthropic's API. Sonnet 4.5 retires 30 November.
  Opus 4.8 Fast is deprecated; Opus 5 Fast is research preview.
- [Plans](https://claude.com/pricing): replace Max 5x / 20x tiers with Max
  $100 and Ultra $200 monthly. Max grants 5x Pro per five-hour window and week;
  Ultra grants 10x weekly and removes the five-hour limit for verified accounts
  only. Fable has its own half-weekly-capacity limit. Pro remains $20 monthly
  or $200 annually. Team and published self-serve Enterprise rates remain.
- [API credits](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers):
  Max $100, Ultra $200 monthly after claim; Team contributions $20 Standard /
  $100 Premium per seat, pooled and capped at $500. Seven-day eligibility,
  linked Console account, cycle expiry, no rollover. Excludes Claude Code,
  app extra usage, and partner-cloud usage. Free/Pro/Enterprise are excluded.
- [Claude Code](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan):
  use the current canonical help URL. Remove the old personal plan help URL,
  which returned 404; link the live pricing source instead. Preserve commercial
  training defaults and consumer settings qualifications from the privacy links.

## Antigravity

- [Model access](https://antigravity.google/docs/models/),
  [plans](https://antigravity.google/docs/plans/), and
  [FAQ](https://antigravity.google/docs/faq/): add Carbon, Hydrogen, and two
  Orchestrator variants. Carbon needs Ultra or Enterprise. Hydrogen needs
  paid Pro, Ultra, or Enterprise. Argon and Orchestrator (Argon) also admit
  Pro trials tied to eligible premium devices; ordinary trials do not.
  Orchestrator (Carbon) needs Ultra. Neither Orchestrator is listed for
  Enterprise. Partner Claude models need Enterprise administrator opt-in.
- The current model source schedules Sonnet 4.6, Opus 4.6, and GPT-OSS-120B
  removal on 18 November. Exclude them from current rows and retain the
  existing removal anchor. Remove the now-empty lifecycle filter. This is a
  documentation snapshot, not a claim that every account was inspected.
- [Hydrogen / Orchestrator launch](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity):
  Orchestrator hands a single conversation between Carbon/Argon planning and
  Hydrogen implementation, with fixed effort. It is separate from parallel
  subagents. App and CLI support are explicit. Hydrogen defaults to High;
  Extra maps to CLI xhigh. Argon remains unavailable in the standalone IDE.
- [Gemini API pricing](https://aistudio.google.com/docs/pricing),
  [Argon](https://aistudio.google.com/docs/models/gemini-4-argon),
  [Carbon](https://aistudio.google.com/docs/models/gemini-4-carbon), and
  [Hydrogen](https://aistudio.google.com/docs/models/gemini-4-hydrogen):
  Argon/Carbon share introductory Standard $2/$0.10/$10 through 30 November,
  then $4/$0.20/$20 from 1 December. Keep Batch/Flex at half and Priority at
  1.8x. Hydrogen paid Standard is $1.50/$0.075/$7.50. Preserve three decimal
  places for its cache price. Its API free tier grants no Antigravity access.
- [Argon migration](https://aistudio.google.com/docs/whats-new-gemini-4-argon):
  preserve the shared 1,048,576-token window, 65,536 default output limit,
  long-decode qualification, implicit-only caching, and medium API default.
  Client defaults differ. Developer API rates do not convert AI credits.
- [Google One prices](https://one.google.com/about/plans) still list Pro
  at $19.99 monthly in USD. Antigravity quotas remain workload-based;
  no guaranteed prompt count. [Enterprise](https://antigravity.google/docs/enterprise/)
  consumption and partner-model billing remain separate from Developer API.

## Codex

- [Models](https://learn.chatgpt.com/docs/models),
  [17 November release](https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol),
  and [workspace access](https://learn.chatgpt.com/docs/enterprise/workspace-model-availability):
  recommend GPT-6.2 Sol/Astra, GPT-6.1 Terra, and GPT-6 Luna. GPT-6.2 is
  documented in App/CLI for Plus, Pro, Business, Enterprise, and Edu;
  Enterprise/Edu models require enablement. Do not promise identical Cloud or
  IDE access. Terra CLI needs 0.159.0+. Keep earlier published credit rows.
- [Credit rates and plans](https://learn.chatgpt.com/docs/pricing): Standard
  input/cache/output credits per million are Astra 6.2 200/10/1000,
  Sol 6.2 50/2.5/250, Terra 6.1 25/1.25/125, Luna 6 2.5/0.25/12.5.
  Fast purchased-credit billing is 2x. Credits are not USD. Shared Work/Codex
  allowances and local-message estimates are separately labeled. Pro currently
  has no five-hour cap, which does not mean unlimited usage.
- [Speed](https://learn.chatgpt.com/docs/agent-configuration/speed): GPT-6.2
  Fast included usage is 2x; earlier supported models use 2.5x. GPT-6.2
  Ultrafast included usage is 6x throughout. Purchased credits and eligible
  Enterprise PAYG use 3x through 28 February 2027, then 6x from 1 March
  (Pacific time). Earlier supported Ultrafast models use 8x included / 6x
  credits. Sol 6.2 Ultrafast needs Pro $200/$500; Astra needs $500.
  Enterprise/Edu need agreement eligibility plus separate admin permission.
- [API prices](https://developers.openai.com/api/docs/pricing) and model
  specifications: Astra 6.2 $8/$0.40/$10/$40; Sol 6.2 $2/$0.10/$2.50/$10;
  Terra 6.1 $1/$0.05/$1.25/$5; Luna 6 $0.10/$0.01/$0.125/$0.50
  (input/read/30-minute write/output). Twelve-hour writes double the write
  price. Above 272K input tokens, the full request uses 2x input/cache and
  1.5x output. Batch is 0.5x, Fast 2x. Flex is listed for Terra/Luna only;
  do not invent GPT-6.2 Flex rows. API GPT-6.2 Ultrafast has its own 3x
  promotion with the same February end date. Background completion discounts
  are another API option outside this comparison table.
- [Astra 6.2](https://developers.openai.com/api/docs/models/gpt-6.2-astra),
  [Sol 6.2](https://developers.openai.com/api/docs/models/gpt-6.2-sol),
  [Terra 6.1](https://developers.openai.com/api/docs/models/gpt-6.1-terra),
  [Luna 6](https://developers.openai.com/api/docs/models/gpt-6-luna): API maxima
  are 1,050,000 context / 128,000 output. Codex defaults are 272K Astra and
  500K Sol. Avoid equating client defaults with API maximum context.
- [Authentication](https://learn.chatgpt.com/docs/auth): API-key billing is
  separate; Cloud needs ChatGPT sign-in. GPT-5.5's 14 October retirement
  applies to ChatGPT-authenticated Codex, not API-key sessions. GPT-5.6 Sol
  credit promotion says through at least 21 November; do not substitute an
  API promotion deadline or another provider's retirement date.

## Maintenance and evidence

Review source payloads and local browser evidence are ignored under
`.impeccable/review/resources-nov18/`. These are review artifacts, not site
assets. Keep current/all-model defaults, source links, semantic captions,
print and no-JavaScript access, filters, sorting, reset, and legacy anchors.
Do not automatically expire prices on build: this is an explicitly dated
snapshot. Recheck all dated offers and removals at the next review.
