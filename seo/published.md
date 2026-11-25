# Published pages

| URL | Target keyword | Published | Last GSC verdict |
|---|---|---|---|
| https://tryrefresher.app/ | breathing pacer app | 2026-09-02 | hold (2026-11-25: 10 imp, 0 clicks, pos 3.0) |
| https://tryrefresher.app/support | brand + support | 2026-09-02 | hold (2026-11-25: not in the top 10 pages; listed as discovered, not inspected) |
| https://tryrefresher.app/privacy | brand + privacy | 2026-09-02 | hold (2026-11-25: 3 imp, pos 2.3) |
| https://tryrefresher.app/terms | brand + terms | 2026-09-02 | hold (2026-11-25: 3 imp, pos 3.3) |
| https://tryrefresher.app/press | brand + press kit | 2026-09-02 | hold (2026-11-25: 3 imp, pos 4.3) |
| https://tryrefresher.app/community | brand + community | 2026-10-19 | hold (2026-11-25: unknown to Google; no search value) |
| https://tryrefresher.app/box-breathing-app | box breathing app | 2026-09-02 | hold (2026-11-25: 4 imp, pos 6.5, too little data) |
| https://tryrefresher.app/coherent-breathing-app | coherent breathing app | 2026-09-02 | learn (2026-11-25: 39 imp, 1 click, CTR 2.6%, pos 6.1, was 16.6; see clusters.md Notes) |
| https://tryrefresher.app/hrv-breathing-app | hrv breathing app | 2026-09-02 | hold (2026-11-25: 15 imp, 0 clicks, pos 10.0, was 14.6; refreshed 2026-11-02, judge 86) |
| https://tryrefresher.app/4-7-8-breathing-app | 4-7-8 breathing app | 2026-09-02 | hold (2026-11-02: 2 imp, pos 9.5, too little data) |
| https://tryrefresher.app/ice-and-fire-power-breathing-app | power breathing app | 2026-09-23 | hold (2026-11-25: indexed; the old /wim-hof-breathing-app URL, now a 308 here, had 40 imp, 1 click, pos 23.1 and should fade after the trademark rename) |
| https://tryrefresher.app/resonance-frequency-breathing | resonance frequency breathing | 2026-10-09 | hold (2026-11-25: 8 imp, pos 7.0, was 26.4; too little data to refresh) |
| https://tryrefresher.app/de/kohaerentes-atmen | kohärentes Atmen (de) | 2026-10-26 | hold (2026-11-25: crawled 10-29, not indexed; home link added) |
| https://tryrefresher.app/de/box-atmung-app | Box-Atmung App (de) | 2026-10-26 | hold (2026-11-25: crawled 10-29, not indexed; home link added) |
| https://tryrefresher.app/es/respiracion-coherente | respiración coherente (es) | 2026-11-02 | hold (2026-11-25: indexed) |
| https://tryrefresher.app/es/respiracion-cuadrada | respiración cuadrada / de caja (es) | 2026-11-02 | hold (2026-11-25: crawled 11-02, not indexed; home link added) |
| https://tryrefresher.app/de/resonanzatmung | Resonanzatmung (de) | 2026-11-23 | hold (2026-11-25: crawled 11-24, not indexed; home link added) |
| https://tryrefresher.app/paced-breathing | paced breathing | 2026-11-09 | hold (2026-11-25: indexed; video not indexed, "not on a watch page") |
| https://tryrefresher.app/5-minute-box-breathing | 5 minute box breathing | 2026-11-18 | hold (2026-11-25: indexed; video not indexed, "not on a watch page"; title now says video) |
| https://tryrefresher.app/4-7-8-breathing-for-sleep | 4-7-8 breathing for sleep | 2026-11-18 | hold (2026-11-25: page and video indexed) |
| https://tryrefresher.app/4-2-6-2-breathing | 4-2-6-2 breathing | 2026-11-18 | hold (2026-11-25: page and video indexed) |
| https://tryrefresher.app/apple-watch-breathing-heart-rate | apple watch breathing heart rate | 2026-11-16 | hold (2026-11-25: discovered, never crawled; home link added) |

Verdicts of 2026-11-25 were read in the Search Console browser UI (the API returns 403 from the
owner's network): 28 days to 2026-11-23, 2 clicks, 103 impressions. The 2026-11-02 verdicts are in
git. Only the top 10 of 12 pages were read, so /4-7-8-breathing-app keeps its 2026-11-02 verdict. Pages in the 5-15 band with under 20 impressions are hold, not refresh. Home links to 7
weakly linked pages were added on 2026-11-25; to revert, drop `reading` in `src/pages/index.astro`.

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
| /paced-breathing | https://mymenoplan.org/paced-breathing/ | fetched 2026-11-09: definition; 4 in, 6 out; "goal is 10 breaths a minute"; 2 then up to 10 minutes; ~6/min helps stress and anxiety, not studied in menopausal women; no effect on hot flashes; sit, lie down if lightheaded |
| /paced-breathing | https://nowmattersnow.org/skill/paced-breathing/ | fetched 2026-11-09: DBT skill; 5 in, 7 out, or any pace with a longer exhale |
| /paced-breathing | https://oxygenadvantage.com/blogs/blog/paced-breathing | fetched 2026-11-09: 3/5 then 4/6 through the nose; 4.5 to 6.5 per minute; may help lower blood pressure; 68 women, nine weeks, twice a day, 58% vs 46%, modest |

| /apple-watch-breathing-heart-rate | https://support.apple.com/en-jo/guide/watch/apd371dfe3d7/26/watchos/26 | fetched 2026-11-16: heart rate appears in the Summary screen after Reflect or Breathe; Health path to Breathe; duration 1 to 5 minutes; Breath Rate; haptics |
| /apple-watch-breathing-heart-rate | https://support.apple.com/en-lb/guide/watch/heart-rate-apda88aefe4c/11/watchos | fetched 2026-11-16: heart rate monitored for Breathe and Reflect by default; clean, dry wrist; skin contact |
| /apple-watch-breathing-heart-rate | https://www.sanolabs.eu/blog/apple-watch-mindfulness-hrv/ | fetched 2026-11-16: HRV overnight via SDNN, "not during mindfulness sessions" |
| /apple-watch-breathing-heart-rate | https://athlyticapp.helpscoutdocs.com/article/23-using-the-mindfulness-app-for-hrv-in-athlytic | fetched 2026-11-16: a Mindfulness session triggers an HRV reading, usually above the sleep average; breathe naturally |

Fetch failures recorded so nobody retries them blind: sleepfoundation.org/sleep-hygiene/4-7-8-breathing (404, 2026-11-18), livestrong.com box-breathing article (301 to everydayhealth.com, not read, 2026-11-18), saprea.org paced-breathing (403, 2026-11-09), drweil.com (403), health.harvard.edu HRV post (404), health.clevelandclinic.org/what-is-heart-rate-variability (404).
