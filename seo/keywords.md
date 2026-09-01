# Keyword backlog

Two different marketplaces, tracked together because they inform each other but rank
independently.

- **App Store columns** (pop / diff / rank) are **measured**, pulled from the Astro MCP for
  app `6759679041`, US store, 2026-09-01. Not estimates.
- **Web verdict** comes from a SERP scan on 2026-09-02. Caveat recorded there: Google, Bing and
  DuckDuckGo all blocked scraping, so result *pools* are real but *rank order* is not verified,
  and no real People Also Ask box was captured.

## Backlog

| keyword | cluster | intent | ASO pop | ASO diff | ASO rank | web SERP verdict | status |
|---|---|---|---|---|---|---|---|
| breathing pacer app | pillar | product-page | 5 | 38 | **#63** | **best target.** Weakest SERP of seven: near-pure App Store listings, one brand site, no listicles, no Calm/Headspace, no Reddit | **pillar (live)** |
| paced breathing | pillar | product-page | 9 | 17 | #57 | supports the pillar | idea |
| coherent breathing app | technique | product-page | 5 | 44 | **#193** ⚠ | strong. symbreathing.app ranks with ~400 words and 3 headings | published 2026-09-02 |
| hrv breathing app | technique | product-page | 5 | 39 | #59 | second wave. Store listings dominate; two weak indie brand sites hold slots | published 2026-09-02 |
| box breathing app | technique | product-page | 7 | 21 | #1000 | winnable but must match vayu-prana's depth: ~1,300 words, HowTo + FAQPage schema | published 2026-09-02 |
| 4-7-8 breathing app iphone | technique | product-page | 5 | 23 | #104 | hardest. 6+ App Store SKUs plus an Othership listicle; "iphone" pulls Google to apps.apple.com | published 2026-09-02 |
| resonance frequency breathing | explainer | definition | 6 | 39 | #69 | **article, not a landing page.** An NCBI paper and a PR release rank. Consider a free in-browser pacer, as allos.app does | idea |
| apple watch breathing heart rate | explainer | how-to | 5 | 40 | #142 | **article.** support.apple.com holds two slots; intent splits between Apple's built-in Breathe app and third-party | idea |
| wim hof method | technique | product-page | 9 | 19 | **#37** | best-owned term in the store. Web SERP not scanned | idea |
| vagus nerve breathing | technique | definition | 14 | 11 | #80 | not scanned | idea |

## What the ASO data says about positioning

The anti-persona terms are measurably dead, which is `docs/074`'s thesis confirmed rather than
asserted: `anxiety relief` pop 31 → rank **#1000**, `calm` pop 68 → **#1000**, `anxiety` pop 8 →
**#1000**, `relax` pop 9 → **#1000**. Meanwhile every term the app actually ranks for is a
technique or a mechanism: `wim` #21, `wim hof method` #37, `paced breathing` #57,
`hrv breathing` #59, `breathing pacer` #63, `vagus` #80.

Two things to watch, both App Store problems rather than website ones:

1. **`coherent breathing` collapsed from #9 to #193** in one cycle (−184). Nothing in the
   website's control. Worth an ASO session.
2. **`hrv` is pop 27, difficulty 51, rank #1000.** `docs/074 §6` argues the name change unlocks
   it, and the top 15 for `hrv` contains apps with 0 ratings, so authority is not the barrier.
   But the rename is **uncommitted** — it cannot move until 2.0.0 ships.

## Rules for this backlog
- Nothing moves to `writing` without a cannibalization check against `published.md`.
- Verify PAA manually in an incognito browser before writing any FAQ. The SERP scan could not
  capture one.
- One URL per query. That is the architecture that works in this space.

## People Also Ask, captured 2026-09-02 (Google, en/US, the user's own browser)

- box breathing app: Do navy SEALs actually use box breathing? · What is the best free breathing app? · Is box breathing healthy? · Is there a free version of Breathwrk?
- coherent breathing app: What is the best free breathwork app? · Is the coherence app free? · Is there an app that can help with resonant breathing? · What is the best app for breathing practice?
- hrv breathing app: What is the best HRV app? · Can a phone app measure HRV? · How to do HRV breathing? · Is there an app that can help with resonant breathing?
- 4-7-8 breathing app: Does the 4-7-8 breathing method work? · What is the 4-7-8 breathing method? · How many times a day should I do 4-7-8 breathing? · What is the best breathing app?

"Best app" questions are answered on-page only as "what is free in Refresher"; never as a superiority claim.
