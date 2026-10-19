# Codex reference guide

Mode: Read. Extend the established Resources section at `/resources/codex`.
The user requested the same maintainable table reference as the Copilot,
Claude, and Antigravity guides, with particular care for Codex.

## Direction contract

THESIS: Help a developer choose a Codex model and plan while keeping included
usage, purchased credits, and API token billing distinct.

OWN-WORLD: Preserve ResourceLayout, Outfit headings, IBM Plex Sans body,
semantic theme colors, fine rules, and monospace numeric rates and model IDs.

STORY: Find the current models, compare credit rates, choose effort and speed,
check plan access, then consult separate API rates and practical workflows.
Every volatile fact has official OpenAI documentation and a fixed review date.

FIRST VIEWPORT: Shared navigation and breadcrumb, Codex guide title, short
introduction, dated review, contents, and a compact model comparison.

FORM: The user's pinned semantic HTML tables, enhanced with separate searchable
credit and API rate tables. Each names its own unit and has independent filters.
All rows remain available without JavaScript and in print. seed: none (unavailable).
No new visual identity, generated imagery, or concept tournament.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Verification handoff

19 October 2026. The Codex extension preserves the incumbent Resources identity:
ResourceLayout, Outfit headings, IBM Plex Sans body, semantic themes, fine rules,
shared navigation/footer, and editable HTML tables. Comparison used the existing
Antigravity guide preview. No new visual world or shipping raster was introduced;
DESIGN.md and its sidecar remain unchanged.

- **Documenter inspection:** read PRODUCT.md, DESIGN.md, this brief, the research
  register, Codex page/data/table component, Resources index, relevant shared CSS,
  and `.impeccable/review/codex/checks.json`. Opened the Codex guide preview, all
  five desktop/mobile top captures, both pricing crops, both Resources captures,
  and `.impeccable/review/antigravity/guide-preview.png`. Captures show consistent
  hierarchy, theme treatment, wrapping, explicit units, and separate billing tables.
- **Independent finish review:** verdict **ship**, `material_fixes: none`. The
  reviewer opened all 15 final Codex captures and the incumbent preview, then
  independently spot-checked official models, plans/pricing, speed, and all three
  current API model pages. Checks covered base rates, plan figures, usage estimates,
  promotion/retirement scope, speed multipliers, long-prompt modifiers, and access
  eligibility. These source spot checks did not repeat the functional run.
- **Builder-reported validation:** `npm run build` exited 0 with the pre-existing
  Amplify sharp warning; `git diff --check` was clean; one UI detector pass returned
  `[]`. Browser checks covered seven models, 16 credit rows, 28 API rows, ten tables,
  1440px light/dark/synthwave and 390/320px mobile; independent table controls,
  empty/reset/Enter states, print restoring all 44 rates, and no-JavaScript access
  to all data. Mobile navigation and keyboard table scrolling passed; main IDs and
  local anchors passed, with no document overflow or page errors. Sampled text
  contrast was at least 4.5:1 and visible keyboard focus was 2px. The three existing
  guides and four-entry Resources index passed regression checks.
- **Evidence scope:** final captures and browser measurements are under
  `.impeccable/review/codex/`; detailed pricing crops hide only the sticky shared
  header. The documenter inspected saved evidence without starting a browser/server
  or rerunning builds, tests, or web research. Existing DESIGN.md schema/ink drift
  and the shared-header duplicate `theme-toggle` ID remain outside this extension;
  the latter was also verified on untouched Antigravity.
- **Maintenance and delivery:** editable facts remain in `src/data/codex.ts`, with
  the fixed source review date and calculated-row disclosures. Follow
  `docs/codex-guide-research.md` before advancing that date; revisit the GPT-5.6 Sol
  promotion by 21 November 2026. Work remains local, uncommitted, and unpushed.
