# Antigravity reference guide

Mode: Read. Extend Resources at `/resources/antigravity`, including a dedicated
Gemini 4 Argon reference. The user requested the same table-based concepts as
the Copilot and Claude guides. Preserve the existing visual system.

## Direction contract

THESIS: Make Antigravity model access, plan quotas, and Gemini 4 Argon costs
easy to compare without treating a subscription as an API token balance.

OWN-WORLD: Reuse ResourceLayout, Outfit headings, IBM Plex Sans body, semantic
theme colors, fine table rules, and monospace numeric rates and API identifiers.

STORY: Find which models a plan can use, check Argon's specific limits and API
rates, choose a starting point for a task, then compare plan and overage rules.
Source links and a fixed review date qualify changing product facts.

FIRST VIEWPORT: Existing header and breadcrumb, Antigravity guide title, a short
introduction mentioning Gemini 4 Argon, review date, contents, and model access.

FORM: The user's pinned HTML table reference form. Search and plan/lifecycle
filters enhance the model matrix; all rows remain readable without JavaScript
and in print. seed: none (unavailable). No new imagery or visual identity.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Verification handoff

18 October 2026. This is an ordinary extension in Read mode. The documenter
compared the saved Claude and Antigravity guide previews and Antigravity mobile
top capture, and inspected the route, component, shared layout, styles, and data.
The existing header, breadcrumb, Outfit headings, IBM Plex Sans body, teal text
accent, fine table rules, and wrapped mobile contents are preserved. Source
retains semantic HTML tables, numeric/API monospace, the shared navigation and
footer, and the dedicated `#gemini-4-argon` and `#model-pricing` anchors.

The fresh independent finish reviewer returned **ship**: the full fidelity
matrix passed, with `material_fixes: none`. This verdict is the supplied review
result; the documenter did not rerun the browser or tests.

Builder-reported validation: `npm run build` passed with the pre-existing
Amplify adapter sharp warning; `git diff --check` was clean; the detector ran
once and returned `[]` for all changed UI. Browser checks covered 1440px in all
three themes, 390px and 320px, filtering intersections/reset/empty state/Enter,
print restoring filtered rows, the complete no-JavaScript fallback, mobile menu,
and keyboard table scrolling. Claude, Copilot, and the three-entry Resources
index regression checks passed. Saved `checks.json` records 10 models, eight
API-rate rows, five tables, matching document/viewport widths, no broken anchors,
and no page errors. Evidence is in `.impeccable/review/antigravity/`; the builder
reported no shipping raster was created.

Existing documentation drift remains scoped separately: `DESIGN.md` uses legacy
headings without token frontmatter, and its light-button white-ink sentence
disagrees with the current site accent's `--on-accent: #0b0f19`. No design-system
files were rewritten. The implementation remains uncommitted and unpushed.
