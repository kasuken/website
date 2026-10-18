# Claude reference guide

Mode: Read. Add `/resources/claude` to the established Resources section.
The user asked for the same table-based concepts as the Copilot guide, with
independent research into Claude. Preserve the existing visual system.

## Direction contract

THESIS: Compare Claude model costs and task fit without mixing API billing
with app subscription usage.

OWN-WORLD: Reuse the existing resource layout, Outfit headings, IBM Plex Sans
body, semantic theme colors, fine table rules, and monospace token rates.

STORY: Scan current prices first, broaden to older or restricted models when
needed, choose a model for the work, then compare personal and business plans.
Official sources and a fixed review date keep the evidence boundary visible.

FIRST VIEWPORT: Shared header and breadcrumb, left-aligned Claude guide title,
short introduction, review date, contents, and pricing controls. Same hierarchy
as the Copilot reference, with no new visual identity or imagery.

FORM: The user's specified reference-table form, extended with Claude model
scope and pricing-mode filters. seed: none (unavailable). Filtering changes
visible rows without adding motion or hiding the server-rendered fallback.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Verification handoff — 18 October 2026

Documenter inspection covered `PRODUCT.md`, `DESIGN.md`, the resource layout,
shared resource CSS, Claude page and pricing component, the research register,
`checks.json`, and the desktop, 390px, and 320px captures in
`.impeccable/review/claude/`. The extension preserves the incumbent Outfit/IBM
Plex Sans hierarchy, semantic theme colors, fine rules, small control corners,
and monospace data. It reuses the resource tables, navigation, and footer;
Claude-specific CSS adjusts table widths and API IDs. The print override stays
in `@layer base` so filtered rows survive Tailwind's important hidden rule.
No new visual world or shipping raster was introduced.

Fresh finish reviewer verdict: **ship; no material fixes**. Corrected mobile
captures retain neither horizontal scroll nor focus. Builder-reported checks
passed at 1440px, 390px, and 320px; all three themes; scope, mode, search, sort,
reset, empty states, keyboard scrolling, print with all 37 rates, no JavaScript
with all 37 rates and five tables, and the Copilot breadcrumb/32-rate regression.
No console errors or page overflow were reported. Build and whitespace checks
passed, with the existing Amplify Sharp support warning. The documenter read the
saved evidence; neither the documenter nor finish reviewer independently reran
the commercial research or functional checks.

Maintenance sources remain in `docs/claude-guide-research.md`; editable content
is in `src/data/claude.ts`. `DESIGN.md`, global tokens, and
`.impeccable/design.json` remain unchanged. The existing design document's
legacy headings and absent token frontmatter predate this extension and were
left outside its scope.
