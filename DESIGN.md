# Design system

Durable visual decisions for emanuelebartolesi.com. Tokens live in
[`src/styles/global.css`](src/styles/global.css); this file explains the intent
behind them so future work extends the system instead of re-inventing it.

## Voice

Editorial, technical, confident. The site belongs to an engineer who ships
products, so the page should read like a well-set publication rather than a
SaaS template. Large display type, generous rules, real content over ornament.

## Type

| Role | Face | Notes |
| --- | --- | --- |
| Display | Outfit (500/600/700) | Headings, product names, buttons. Geometric, high-contrast at large sizes. |
| Body | IBM Plex Sans (400/500/600) | Humanist, engineered character; replaced Plus Jakarta Sans, which reads as a default. |
| Data | JetBrains Mono (400/500) | Only for measurement, dates, and credential strips — never as decoration for "technical". |

Body measure stays at 52–68ch. Display tracking bottoms out at `-0.04em`.

## Color

One site accent (teal) plus a per-product hue. Two rules matter:

- **Fill and text are different shades.** `--accent` fills; `--accent-text` is
  the deeper shade used whenever the accent carries text. Teal-500 on white is
  2.49:1 and fails AA, so it may never be a text color.
- **Filled buttons declare their own ink.** `--on-accent` for the site accent,
  `--p-solid` / `--p-on` per product. In light themes the fill darkens and the
  ink is white; in dark themes the fill lightens and the ink goes near-black.

### Product hues

Each product owns a hue, applied by putting `data-product="<slug>"` on any
ancestor. Descendants then read `--p` (graphics), `--p-ink` (text), `--p-tint`
(surfaces), `--p-edge` (borders), and the `--p-solid` / `--p-on` button pair.

| Product | Light `--p` | Dark `--p` |
| --- | --- | --- |
| Brainy | `#7c5cff` violet | `#a78bfa` |
| MoneyBrain | `#10b981` emerald | `#34d399` |
| LearnStack | `#f59e0b` amber | `#fbbf24` |
| Needly | `#3b82f6` blue | `#60a5fa` |

## Elevation and shape

Cards use a 1px border at rest and earn a shadow only on hover — never both at
rest. Card radius is `--radius-card` (12px); pills are for small controls only.

## Motion

One authored entrance: `[data-reveal]` elements rise, fade, and un-blur as they
enter the viewport, staggered via `--reveal-delay`. It is opt-in before first
paint (`data-reveal-ready` on `<html>`), so content stays visible without JS and
is skipped entirely under `prefers-reduced-motion`.

## Browser surfaces

Selection, caret, scrollbars, focus rings, underline offset, and tabular
numerals are all themed from the palette rather than left at browser defaults.

## Standing bans

Carried from the Impeccable craft floor; these stay out of the codebase:

- Eyebrows or kickers above a heading.
- Section numbers (01 / 02 / №1) unless the sequence carries information.
- Gradient text; emphasis comes from weight and size.
- Colored side borders thicker than 1px on cards, callouts, or list items.
- Emoji or unicode glyphs standing in for an icon system.
- Monospace used as costume rather than for data.
