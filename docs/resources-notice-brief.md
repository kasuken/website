# Homepage Resources announcement

Mode: Persuade. Add a compact announcement for the new Resources section and
show the user the actual rendered result. This extends the existing homepage.

## Direction contract

THESIS: Make Resources discoverable from the first viewport with one clear link.

OWN-WORLD: Preserve the homepage's editorial typography, semantic theme tokens,
hero, portrait, product links, and navigation. Use a restrained accent tint and
a fine rule rather than introducing a new visual identity.

STORY: Visitors see the new reference material, recognize the tools covered,
and can open Resources before continuing through the existing homepage.

FIRST VIEWPORT: Shared header, a compact Resources announcement, then the
existing hero. The notice names Codex, Copilot, Claude, and Antigravity and
offers an Explore Resources link. On mobile its content stacks naturally.

FORM: One semantic aside with a single full-width link, visible without
JavaScript, keyboard accessible, and present in all three themes. No live-alert
announcement is needed for static content. seed: none (unavailable).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Verification handoff — 19 October 2026

Documentation verdict: complete for this ordinary homepage extension. The
independent finish review returned **ship**, with no material fixes. The
incumbent `DESIGN.md` and `.impeccable/design.json` remain authoritative and
unchanged by this handoff. Earlier reported schema/ink drift is outside this
scope and is not promoted into new design rules.

The reviewed implementation adds `ResourcesNotice.astro` above the homepage
hero and reduces the hero's top spacing. Its semantic aside contains one
`/resources` link, the title “New: Resources for developers,” and copy naming
Codex, GitHub Copilot, Claude, and Antigravity. It uses existing theme, type,
radius, and icon tokens, stacks at 700px and below, and adds no JavaScript or
shipping raster asset.

This documentation pass read the brief, product/design context, focused
homepage diff, component, Resources index, and `checks.json`, and opened the
desktop and mobile top captures. They show the notice above the existing hero
with the incumbent visual language intact. The independent reviewer reported
opening all 12 captures and finding them valid: two light-theme baselines and
ten final captures. Dark and synthwave evidence covers the final state only;
there are no matching before captures for those themes.

Recorded browser checks cover 1440px light/dark/synthwave and 390px/320px light:
no horizontal overflow or browser errors, notice visible in the first viewport,
visible keyboard focus and Enter navigation to the four-guide Resources index,
an 18px arrow, text contrast above 4.5:1, and a visible working link without
JavaScript. The capture note records loaded fonts/portrait and a settled hero.
The builder also reported hover verification, a clean active-hook scan of the
notice, `npm run build` exit 0 (existing Amplify/sharp warning), and final
`git diff --check` exit 0. These checks were not rerun for documentation. The
earlier launcher/seed-unavailable result is builder-reported; its raw output
was not retained.

Evidence is under `.impeccable/review/resources-notice/`: `checks.json`,
`before-desktop.png`, `before-mobile.png`, and final `desktop`, `desktop-dark`,
`desktop-synthwave`, `mobile`, and `mobile-small` captures, each with `.png` and
`-top.png` versions. User-facing screenshot paths are
`.impeccable/review/resources-notice/desktop-top.png` and
`.impeccable/review/resources-notice/mobile-top.png`. These are review evidence,
not site assets. Delivery remains local, uncommitted and unpushed.
