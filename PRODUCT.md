# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Product Purpose

Emanuele Bartolesi's personal website presents his products, writing, speaking,
training, and mentoring. Its existing implementation uses Astro and TypeScript.

## Capabilities and Constraints

- Add a GitHub Copilot reference page covering the concepts in
  https://ba4bes.com/sheets/: model costs, task selection, and plan comparison.
- Use editable HTML tables instead of images for the reference material.
- Keep the Copilot Auto/HydraFusion comparison tables and add a short note for
  unsure readers. Keep the model reference current with dated retirements.
- Extend Resources with a researched Claude model and plan guide, keeping
  Anthropic's direct API billing separate from app subscription usage.
- Add a matching Antigravity guide, including Gemini 4 Argon, with model
  access, task guidance, plan quotas, and separately labeled direct API rates.
- Add a researched Codex guide with models, effort and speed choices, plans,
  workflows, credit billing, and separate API token prices and limits.
- Make Resources discoverable through a compact announcement above the homepage
  hero, with a direct link and the guide topics it covers.
- Preserve the existing site design and shared navigation, themes, and footer.
- Resource content must link to official documentation and carry an explicit
  review date. Updating a build must not silently advance that date.

## Resources

Resources groups the GitHub Copilot, Claude, Antigravity, and Codex guides. Each uses
the same maintainable table-based reference format. The Antigravity guide
includes a dedicated Gemini 4 Argon section.

## Evidence on Hand

The current site, `DESIGN.md`, `src/styles/global.css`, and the user-supplied
Ba4bes reference. Commercial figures require current documentation from the
provider being described: GitHub for Copilot, Anthropic for Claude, and Google
for Antigravity and Gemini, and OpenAI for Codex.
