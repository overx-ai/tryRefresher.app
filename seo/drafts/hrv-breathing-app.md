---
title: HRV breathing app for iPhone and Apple Watch
slug: hrv-breathing-app
keyword: hrv breathing app
mode: refresh (2026-11-02)
cluster: pillar supporting page (the pacer)
intent: product-page
serp_format: unchanged from the 2026-09-02 brief (store listings and two thin indie brand sites); this run is a refresh, Steps 3-8 only
gsc_verdict: >
  28 days to 2026-11-02: 16 impressions, 0 clicks, position 14.6 (verdict refresh: position 5-15).
  Visible queries: "heart rate variability iphone app" (2 imp, pos 23.5), "hrv breathing app"
  (1, pos 49), one French navigational query. Most impressions are anonymised.
angle: >
  The visible query is "heart rate variability iphone app". The page explained what Refresher
  reads but not where an iPhone's HRV comes from at all. Added: SDNN in ms (HealthKit's only HRV
  method), sampled by the Watch while you're still, where to find it in Health, and the new
  Recovery HRV on Series 12 / Ultra 4, plus the developer's own test for any HRV app.
changes:
  - title "HRV breathing app that shows what it can measure" -> "HRV breathing app for iPhone and Apple Watch" (platform words from the live query; see clusters.md learn note on /coherent-breathing-app)
  - new section "Where an iPhone gets your HRV" (3 paragraphs)
  - FAQ "Does Refresher claim breathing changes HRV?" (duplicated the "What it will not claim" section) -> "Where do I see my HRV on iPhone?"
  - three Apple sources added; lastmod 2026-11-02
meta_description: unchanged (An HRV breathing app for iPhone and Apple Watch: paced breathing at 5.5 a minute, heart rate before and after, and a 30-day HRV trend from Apple Health.)
sources:
  - url: https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/heartratevariabilitysdnn
    supports: "HealthKit uses SDNN heart rate variability, the standard deviation of the inter-beat (RR) intervals between normal heartbeats (typically measured in milliseconds). The system automatically records samples on Apple Watch." Fetched 2026-11-02 via the docs JSON.
  - url: https://support.apple.com/en-us/120277
    supports: "Recovery HRV ... Apple Watch Series 12 or Apple Watch Ultra 4 ... can be an indicator of stress and recovery. HRV is sampled while you're still, so the number of measurements you see will vary according to your activity level." Fetched 2026-11-02.
  - url: https://support.apple.com/guide/watch/heart-rate-apda88aefe4c/watchos
    supports: "go to the Health app on your iPhone, tap Browse, tap Heart, then tap an entry." Fetched 2026-11-02.
  - url: https://my.clevelandclinic.org/health/symptoms/21773-heart-rate-variability-hrv
    supports: already in the register (definition; wrist trackers less accurate than chest straps)
  - url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4104929/
    supports: already in the register (Lehrer & Gevirtz 2014, ~5.5/min)
experience_used:
  - experience.md "Decisions per technique" > HRV (a handful of SDNN samples a day; refused to fake a per-session HRV number; chart hidden below two days; HRV never leaves the device)
  - experience.md "Opinions I'll defend" > refusing a per-session HRV delta
internal_links: unchanged (resonance-frequency-breathing, coherent-breathing-app, box-breathing-app, 4-7-8-breathing-app, /)
judge:
  - round 1: 0/100 (table 67), hard fail. The aside said "the one sentence I let the app say about it is the caption on the chart", not in experience.md and contradicted by two allowlisted causal science strings in the app (technique_coherent_info_science, technique_alternate_nostril_info_science). Also: "never says what breathing does to your HRV" (false app-wide), "where the heart rate swings most" (causal physiology), refusal refrain, self-reference, stretched chest-strap claim, "no drift" in featureList.
  - revision 1: removed all of the above; H2 "What it will not claim" became "What the chart leaves to you"; featureList now "A pacer timed to the second" (product.md); five new banned.md lines.
  - round 2: 86/100 PASS. Post-pass accuracy fixes applied (claims narrowed only): "sampled while still" tied to Recovery HRV as the source says, "doctor" -> "a professional running biofeedback", "usually" restored, the 30-day "which is why" reason and the unsourced "resting pulse of 60" example cut, one self-referential sentence cut.
  - not acted on: shared MobileApplication dateModified (2026-09-02) is the app entity's, not this page's.
status: published
---

The full copy is the page itself: `src/pages/hrv-breathing-app.astro`.
