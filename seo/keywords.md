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
| resonance frequency breathing | explainer | definition | 6 | 39 | #69 | **article, not a landing page.** An NCBI paper and a PR release rank. Consider a free in-browser pacer, as allos.app does. Re-scanned 2026-10-09 (Google en/US, user's browser): PMC paper first, then blog explainers, Frontiers, a May 2026 Nature RCT, YouTube, Reddit; no PR release seen. PAA in `seo/drafts/resonance-frequency-breathing.md`. In-browser pacer skipped: the site ships no client JS | published 2026-10-09 |
| apple watch breathing heart rate | explainer | how-to | 5 | 40 | #142 | **article.** support.apple.com holds two slots; intent splits between Apple's built-in Breathe app and third-party | idea |
| wim hof method | technique | product-page | 9 | 19 | **#37** | best-owned term in the store. SERP 2026-09-23 (`wim hof breathing app`): official WHM app + App Store, one indie page (vayu-prana, ~1,200 words). Target `wim hof breathing app` | published 2026-09-23 |
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

## de research (2026-10-24, `/seo research --lang de`)

Native seed terms, searched in German: Box-Atmung, 4-7-8 Atemtechnik, kohärentes Atmen, Resonanzatmung, HRV Atmung,
Atemtrainer App, Wim Hof Atmung. Not seeded from the English backlog. Volumes are **estimated** from SERP shape only (no
keyword tool, no ASO pull for the DE store yet). Caveat: the search tool runs from the US, so pools are indicative and rank
order is not verified; no German People Also Ask box was captured.

What the German SERP looks like: App Store listings and app aggregators (mwm.ai, appfollow, similarweb) dominate the
"App" queries; editorial content is iphone-ticker.de app news, the wandernundmehr.at FAQ farm, health magazines
(Zentrum der Gesundheit) and university handouts (Uni Würzburg, ZHAW PDFs) for the techniques. No German brand site
explains a technique and its pacer on one page, which is the shape the English technique pages rank with.

| keyword | Locale | cluster | intent | volume (estimated) | competition note | status |
|---|---|---|---|---|---|---|
| Box-Atmung App | de | technique | product-page | low (est.) | Pure store listings and aggregators (BoxMind, Calma, AtemFlow Studio, coddykit) plus Othership's English list; no German explainer page with a pacer. Experience fit: "Box. I fixed box at 4-4-4-4" | idea |
| kohärentes Atmen | de | technique | how-to / definition | med (est.) | Uni Würzburg handout (5,5 s ein, 5,5 s aus, 10-20 Wiederholungen, "Stoppuhr oder App"), ZHAW PDF, IWW Praxisangebot, a tredition book, Garmin manual. Informational, thin, no app page. Strongest fit: the 5.5 s default decision (Lehrer and Gevirtz) | idea |
| Resonanzatmung | de | explainer | definition | low (est.) | Mostly English papers (PubMed 2017, 2025) and vendor pages (Aria Breath, Polar Serene, triagemethod). A German explainer would face almost no native competition. Must not cannibalise `kohärentes Atmen`: pick one page per intent (definition of the personal rate vs how-to) | idea |
| 4-7-8 Atemtechnik App | de | technique | product-page | low-med (est.) | iphone-ticker.de app news (Calmaria), wandernundmehr FAQs, Zentrum der Gesundheit ("Evidenz noch begrenzt"), indie listings (478 Breathe, four seven eight). Fit: "4-7-8. the ratio is the method" | idea |
| Atemübung Apple Watch Herzfrequenz | de | explainer | how-to | low (est.) | support.apple.com (Achtsamkeit app, Atemfrequenz 4-10), macwelt, appgefahren HRV tag, store listings. Intent splits between Apple's built-in Breathe and third-party apps. Needs the heart-rate delta facts from product.md (Watch only) | idea |
| Wim Hof Atmung App | de | technique | product-page | low (est.) | Official "Wim Hof Methode: Atmung, Kälte" DE listing owns it, plus spam/APK pages. Low priority: the official app is the answer most searchers want | idea |

Suggested first pick for a de write slot: `kohärentes Atmen` (most informational demand, thinnest native competition,
strongest experience fit), then `Box-Atmung App`.

Sources (de):
- https://www.uni-wuerzburg.de/fileadmin/ext00216/2022/Atemuebungen_Petko_Schenk.pdf
- https://www-ub22.zhaw.ch/storage/psychologie/upload/forschung/beratung/Atemuebungen.pdf
- https://www.iww.de/pp/perspektiven/praxisangebot-fuenf-atemzuege-zur-ruhe-die-wirkung-der-kohaerenten-atemtechnik-f172177
- https://www.iphone-ticker.de/4-7-8-atemtechnik-calmaria-will-bei-angst-unruhe-und-stress-helfen-232679
- https://www.wandernundmehr.at/faq/was-ist-die-4-7-8-methode
- https://www.zentrum-der-gesundheit.de/news/gesundheit/allgemein-gesundheit/4-7-8-atemtechnik
- https://apps.appfollow.io/ios/atemubungen-boxmind/6473701182?country=de
- https://apps.apple.com/de/app/atemflow-studio/id6467029838
- https://othership.us/resources/best-box-breathing-apps
- https://pubmed.ncbi.nlm.nih.gov/28890890/
- https://pubmed.ncbi.nlm.nih.gov/39864026/
- https://support.polar.com/de/serene-guided-breathing-exercise
- https://support.apple.com/de-de/guide/watch-ultra/apd371dfe3d7/9.0/watchos
- https://www.macwelt.de/article/986455/apple-watch-warum-sie-uns-ans-atmen-erinnert.html
- https://apps.apple.com/DE/app/id890471578

---

## es research (2026-10-24, `/seo research --lang es`)

Native seed terms, searched in Spanish: respiración cuadrada, respiración de caja, respiración 4-7-8, respiración
coherente, variabilidad de la frecuencia cardiaca (VFC) Apple Watch, método Wim Hof. Locale is es-ES (`LOCALES.es`), but
the pools mix Spain, Mexico and Argentina. Volumes are **estimated** from SERP shape only; the search tool runs from the US,
so rank order is not verified and no Spanish PAA box was captured.

What the Spanish SERP looks like: App Store listings (mostly non-Spanish developers with an es listing) and mwm.ai
aggregator pages for the "app" queries; news and lifestyle media (iProfesional, Moncloa, Tua Saúde) for the techniques,
often framed as "the Navy SEAL trick" or anxiety relief, which product.md and docs/074 keep us away from. Italian pages
(my-personaltrainer.it) leak into "respiración cuadrada", a sign of thin native supply.

| keyword | Locale | cluster | intent | volume (estimated) | competition note | status |
|---|---|---|---|---|---|---|
| respiración coherente | es | technique | how-to / definition | med (est.) | Tua Saúde news, English blogs (blackroll, sunway), a Finnish project page. No Spanish page pairs the 5,5 s rhythm with a pacer. Strongest fit: the 5.5 s default decision (Lehrer and Gevirtz) | idea |
| respiración cuadrada / respiración de caja | es | technique | how-to | med (est.) | iProfesional (Jul 2026), Moncloa ("método de los militares"), a Spanish PDF, Italian my-personaltrainer pages, store listings (Stamina & Box Breathing Zone, a freediving app). Write as how-to with the fixed 4-4-4-4 decision; avoid the anxiety framing | idea |
| app respiración 4-7-8 | es | technique | product-page | low-med (est.) | Store listings with es pages (Ejercicios de respiración, YourBreath, 478 Breathe) and mwm.ai. Product intent; a native landing page would be one of very few non-listing results | idea |
| variabilidad de la frecuencia cardiaca respiración Apple Watch | es | explainer | how-to | low-med (est.) | PMC validity study (Series 6 vs lab ECG), mwm.ai (HRV Tracker), livity-app.com/es blog, watchgeneration.fr. Must use the sanctioned HRV sentence only ("30-day trend", never a per-session delta) | idea |
| método Wim Hof app | es | technique | product-page | low (est.) | Official "Método Wim Hof: Respiración" MX listing, getfitcraft.com/es guide (safety warnings), APK sites. Low priority | idea |

Suggested first pick for an es write slot: `respiración coherente`, then `respiración cuadrada`.

Sources (es):
- https://www.tuasaude.com/es/news/?p=3856
- https://blackroll.com/eu/en/article/coherent-breathing
- https://www.iprofesional.com/salud/439180-la-tecnica-de-meditacion-que-recomiendan-para-eliminar-el-estres-diario
- https://www.moncloa.com/2025/08/18/ansiedad-redujo-respiracion-3255887/
- https://cdn.document360.io/06daeaa7-7f41-443e-bcc0-1934f99876f8/Images/Documentation/Box%20Breathing%20%5BSp%5D.pdf
- https://apps.apple.com/es/app/ejercicios-de-respiraci%C3%B3n/id1510785436
- https://mwm.ai/es/apps/yourbreath/6754709063
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12031371/
- https://livity-app.com/es/blog/how-to-track-stress-on-apple-watch
- https://apps.apple.com/MX/app/id890471578
- https://getfitcraft.com/es/guides/wim-hof-breathing-method
