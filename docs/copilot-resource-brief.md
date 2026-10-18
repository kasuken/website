# Resources and GitHub Copilot guide

Mode: Read. Readers compare Copilot costs, select a model for a task, and
understand individual versus organization plans. Scope: `/resources` and
`/resources/github-copilot`, plus links in existing navigation and footer.

## Direction contract

THESIS: A reference people can search, compare, and maintain as text. Preserve
the reference's three topics, with official sources rather than diagram copies.

OWN-WORLD: Inherit the site's Outfit headings, IBM Plex Sans body, teal text
accent, semantic theme tokens, and fine table rules. Mono is reserved for rates.

STORY: Find the guide through Resources, scan its contents, compare prices,
then consult task guidance and plans. Sources and a fixed review date expose
the evidence boundary.

FIRST VIEWPORT: Existing site header, large left-aligned title, short
introduction, review date, and horizontal contents links. The first table's
heading and controls follow immediately; no decorative image or oversized hero.

FORM: User-specified reference tables inside the established world. No concept
roll is needed for this pinned form. seed: none (unavailable). Search is the
signature interaction; filtering changes rows without animated movement.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Verification handoff

Disposition: ship; the finish review required no material fixes. The Resources
index and Copilot guide extend the incumbent system: Outfit headings, IBM Plex
Sans body and table labels, JetBrains Mono for rates and numeric plan data,
semantic theme colors, existing small-radius controls, and fine 1px table rules.
Resource styles load through `ResourceLayout.astro`; the shared header, footer,
and theme behavior remain in use. Tables retain captions and row/column headers,
and their scroll regions and filtering controls have accessible names.

The completed browser review covered 1440px desktop, 390px and 320px mobile,
light/dark/synthwave themes, filtering, sorting, reset, empty state, print, and
no-JavaScript behavior. Review captures live in `.impeccable/review/`; they are
verification evidence, not shipping artwork. No shipping raster was created.

`DESIGN.md` and the global tokens were preserved; no system sidecar was created
or regenerated. Existing documentation drift remains outside this extension:
`DESIGN.md` describes white ink on light-theme accent buttons, while
`global.css` currently defines dark `--on-accent` ink. This handoff records the
difference without changing either source.
