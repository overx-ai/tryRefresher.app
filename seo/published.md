# Published pages

| URL | Target keyword | Published | Last GSC verdict |
|---|---|---|---|
| https://tryrefresher.app/ | breathing pacer app | 2026-09-02 | hold (2026-11-02: 16 imp, 0 clicks, pos 5.4) |
| https://tryrefresher.app/support | brand + support | 2026-09-02 | hold (2026-11-02: no impressions) |
| https://tryrefresher.app/privacy | brand + privacy | 2026-09-02 | hold (2026-11-02: 3 imp, pos 5.3) |
| https://tryrefresher.app/terms | brand + terms | 2026-09-02 | hold (2026-11-02: no impressions) |
| https://tryrefresher.app/press | brand + press kit | 2026-09-02 | hold (2026-11-02: 3 imp, pos 4.3) |
| https://tryrefresher.app/box-breathing-app | box breathing app | 2026-09-02 | hold (2026-11-02: 3 imp, pos 8.3, too little data) |
| https://tryrefresher.app/coherent-breathing-app | coherent breathing app | 2026-09-02 | learn (2026-11-02: 20 imp, 2 clicks, CTR 10%, pos 16.6; see clusters.md Notes) |
| https://tryrefresher.app/hrv-breathing-app | hrv breathing app | 2026-09-02 | refresh done 2026-11-02 (16 imp, 0 clicks, pos 14.6; judge 0 (hard fail) -> 86) |
| https://tryrefresher.app/4-7-8-breathing-app | 4-7-8 breathing app | 2026-09-02 | hold (2026-11-02: 2 imp, pos 9.5, too little data) |
| https://tryrefresher.app/wim-hof-breathing-app | wim hof breathing app | 2026-09-23 | hold (2026-11-02: 17 imp, 1 click, pos 19.4) |
| https://tryrefresher.app/resonance-frequency-breathing | resonance frequency breathing | 2026-10-09 | hold (2026-11-02: 10 imp, pos 26.4; judge 86) |
| https://tryrefresher.app/de/kohaerentes-atmen | kohärentes Atmen (de) | 2026-10-26 | hold (2026-11-02: "Crawled - currently not indexed"; inbound 1 -> 3 via cross-locale links; judge 74 -> 84) |
| https://tryrefresher.app/de/box-atmung-app | Box-Atmung App (de) | 2026-10-26 | hold (2026-11-02: "Crawled - currently not indexed"; inbound 1 -> 3 via cross-locale links; judge 81) |
| https://tryrefresher.app/es/respiracion-coherente | respiración coherente (es) | 2026-11-02 | hold (new; inbound 1 -> 3 via cross-locale links; judge 89) |
| https://tryrefresher.app/es/respiracion-cuadrada | respiración cuadrada / de caja (es) | 2026-11-02 | hold (new; inbound 1 -> 3 via cross-locale links; judge 80) |

Verdicts from `gsc.py perf sc-domain:tryrefresher.app 28 page,query` on 2026-11-02. Most
queries are anonymised at this volume; every page except /coherent-breathing-app is under 20
impressions, so most verdicts are hold.

## Sources for external claims (homepage)

Verified by fetch on 2026-09-02. Only claims about breathing in general need a source; app facts
trace to `product.md`.

| Claim | Source | Supports |
|---|---|---|
| Box breathing is also called square breathing, 4-4-4-4 | https://health.clevelandclinic.org/box-breathing-benefits | Lists "square breathing" as an alternative name; describes four counts in, hold, out, hold |
| 4-7-8 is inhale 4, hold 7, exhale 8 | https://health.clevelandclinic.org/4-7-8-breathing | Gives the sequence and attributes it to Dr. Andrew Weil. Does **not** state a design rationale, so the copy says the exhale is twice the inhale and nothing about why |
| Wim Hof: seated or lying down, never in water or while driving; rounds of 30 breaths | https://www.wimhofmethod.com/breathing-exercises | Safety notice verbatim; "Take 30 such breaths" then retention; repeat 3 to 4 cycles |

## Sources for the technique pages (verified by fetch 2026-09-02)

Each page renders its own sources list; this is the register.

| Page | Source | Supports |
|---|---|---|
| /box-breathing-app | https://health.clevelandclinic.org/box-breathing-benefits | alternative names; "employed by the United States Navy SEALs"; three to four rounds, once or twice a day; don't strain |
| /4-7-8-breathing-app | https://health.clevelandclinic.org/4-7-8-breathing | sequence and Weil attribution; nose in, mouth out, whoosh; tongue placement; three cycles twice a day; lightheadedness caution; association with sleep |
| /coherent-breathing-app, /hrv-breathing-app | https://pmc.ncbi.nlm.nih.gov/articles/PMC4104929/ | Lehrer & Gevirtz 2014: resonance ≈0.1 Hz, refined to ≈5.5 breaths/min on average, varies by individual |
| /hrv-breathing-app | https://my.clevelandclinic.org/health/symptoms/21773-heart-rate-variability-hrv | HRV definition; autonomic nervous system; normal varies by person; most wrist trackers usually not sensitive enough |
| /hrv-breathing-app | https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/heartratevariabilitysdnn | fetched 2026-11-02 (docs JSON): HealthKit uses SDNN, std dev of RR intervals between normal beats, ms; Apple Watch records samples automatically |
| /hrv-breathing-app | https://support.apple.com/en-us/120277 | fetched 2026-11-02: Recovery HRV on Series 12 / Ultra 4, possible indicator of stress and recovery, sampled while still |
| /hrv-breathing-app | https://support.apple.com/guide/watch/heart-rate-apda88aefe4c/watchos | fetched 2026-11-02: Health, Browse, Heart, then an entry |
| /wim-hof-breathing-app | https://www.wimhofmethod.com/breathing-exercises | fetched 2026-09-23: 30 deep breaths, retention until the urge to breathe, recovery breath held 15 s, 3–4 rounds; seated or lying down, never near water or driving; rare loss of consciousness; lightheadedness and tingling |

Fetch failures recorded so nobody retries them blind: drweil.com (403), health.harvard.edu HRV post (404), health.clevelandclinic.org/what-is-heart-rate-variability (404).
