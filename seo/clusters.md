# Topic clusters

## Pillar: the pacer (LIVE)
- **URL:** https://tryrefresher.app/
- **Target:** `breathing pacer app`
- **Why:** the weakest SERP of the seven scanned (almost pure App Store listings, one brand
  site, no listicles, no Calm/Headspace, no Reddit), and "pacer" is literally the product noun.
  The app already ranks #63 for `breathing pacer` and #57 for `paced breathing` in the US store.

Supporting pages (all judged ≥80 before publish):
| slug | target | status |
|---|---|---|
| `/coherent-breathing-app` | coherent breathing app | live 2026-09-02 |
| `/hrv-breathing-app` | hrv breathing app | live 2026-09-02 |
| `/box-breathing-app` | box breathing app | live 2026-09-02 |
| `/4-7-8-breathing-app` | 4-7-8 breathing app | live 2026-09-02 |
| `/wim-hof-breathing-app` | wim hof breathing app | live 2026-09-23 (judge: 76 → 86) |

## Cluster: technique explainers
Informational intent, feeds the pillar. Rendered through `TechniqueLayout` with the `article`
prop: Article schema and a byline, no hero badge or datasheet.
- resonance frequency breathing — what it is, how to find yours → `/resonance-frequency-breathing`
  (writing 2026-10-09; inbound from /coherent-breathing-app, /hrv-breathing-app, /box-breathing-app)
- paced breathing — what it is, the numbers in seconds, the evidence → `/paced-breathing`
  (2026-11-09; inbound from /coherent-breathing-app, /resonance-frequency-breathing, /hrv-breathing-app)
- Apple Watch breathing apps that record heart rate
- box breathing vs 4-7-8 — which for which moment

## Notes
- Format Google rewards here (from the strongest ranking page, vayu-prana.com/box-breathing-app):
  H1 as the exact query noun phrase → what-is explainer → why-this-app feature grid → when/how-to
  with concrete durations → FAQ 4-5 questions → CTA → internal links to sibling technique pages.
  It carries FAQPage + HowTo + SoftwareApplication schema; the others carry far less.
- A competitor ranks with ~400 words and three headings (symbreathing.app). The bar is beatable.
- One-URL-per-query is the architecture that works in this space.
- **Learn, 2026-11-02 (`/coherent-breathing-app`, 10% CTR: 2 clicks / 20 impressions, 28 days,
  position 16.6; next best is /wim-hof-breathing-app at 6%, every other page 0%).** Its title is
  the exact query plus one number the searcher can check against what they already know:
  "Coherent breathing app at 5.5 breaths per minute". The others promise an attitude ("that shows
  what it can measure") or a feature, not a spec. Its short answer then opens with the query noun,
  the platforms and the same number in the first sentence, and states "free from the first
  session" before any condition. Copy that shape: query + a concrete spec in the title, and a
  first sentence that names product, platforms and the number. Applied to /hrv-breathing-app on
  2026-11-02 in part: the title now names iPhone and Apple Watch, the words in its one visible
  query; the 5.5 spec stays in the description and short answer. Re-check its CTR in four weeks.

## de pilot (spec 001)
Native German technique pages at `/de/{slug}`, self-canonical, no hreflang.
| slug | target | status |
|---|---|---|
| `/de/kohaerentes-atmen` | kohärentes Atmen | live 2026-10-26 (judge 74 → 84) |
| `/de/box-atmung-app` | Box-Atmung App | live 2026-10-26 (judge 81) |

- Inbound links: **limit fixed 2026-11-02.** `siblings` still resolve in the page's own locale, but `TOPIC_PEERS` in `src/site-pages.ts` now links every page to its topic equivalents in the other locales (en ↔ de ↔ es), labelled with the target's own H1 and language name. Not hreflang: each page stays self-canonical. Each de/es pilot page went from 1 inbound link to 3. A new de/es page joins an existing `TOPIC_PEERS` group (or starts one with its en equivalent) and adds itself to the same-locale pages' `siblings`.

## es pilot (spec 001)
Native Spanish technique pages at `/es/{slug}`, self-canonical, no hreflang.
| slug | target | status |
|---|---|---|
| `/es/respiracion-coherente` | respiración coherente | live 2026-11-02 (judge 89) |
| `/es/respiracion-cuadrada` | respiración cuadrada / respiración de caja | live 2026-11-02 (judge 80) |

- Inbound links: see the de pilot note; the same `TOPIC_PEERS` fix applies (1 → 3 inbound each).
