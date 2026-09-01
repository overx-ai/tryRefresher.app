# Product definition — Refresher

Single source of truth for every claim the site makes about the app. Update in the same commit
as the product change. Verified against `/Users/user/JACK/0E-extensions/JustBreathe` on
2026-09-02.

## ⚠️ The site describes 2.0.0, which is not on the App Store yet

The store today serves **`Refresher: Breathing & Focus` 1.5.0** (released 2026-08-25): 18 voices,
5 UI languages, and a description still carrying "Optimize heart rate variability". The whole
049/050/052/074–077 body of work is **uncommitted** (last commit `c1f61cb`), so the rename, the
French and Dutch voices, the heart-rate delta and the HRV trend are all real in the repo and
absent from the store.

**Decision (user, 2026-09-02): the site is written for 2.0.0 and deploys before it.** A temporary
mismatch between site and listing is accepted. Everything below describes 2.0.0. When 2.0.0
ships, re-verify this file rather than assuming it aged correctly.

## One-line pitch
A breathing pacer accurate to the second, for people who already know the technique they want.

## Platforms
- iOS: yes, 18.0+. iPhone and iPad, universal (`TARGETED_DEVICE_FAMILY = "1,2"`).
- watchOS: yes, 10.0+, a companion Watch app (`ai.overx.refresher.watchkitapp`, requires the iPhone
  app to install; runs a session without the phone in range). Never call it "standalone".
- Android: no
- Web: no
- macOS / visionOS: no

## Pricing
- Free tier: usage-based gating. The first few qualifying sessions unlock premium surfaces
  (statistics, voices, customization), then gate.
- Paid: "Refresher Premium" via RevenueCat + StoreKit 2. **7-day free trial, live and verified**
  (`FREE_TRIAL` / `ONE_WEEK`, `end_date: null`, active since 2026-05-06, ~170 territories).
- **Never state a price on the site.** Product IDs are versioned (`refresher.monthly.v3`) and
  prices are territory-set by the App Store.

## Features that EXIST
- **Nine techniques in code** (`BreathingTechnique.swift:60-69`), with exact phases from
  `generatePhases`. Not all nine are available to a new user — see Availability below.

  | technique | phases (seconds) | default rounds | configurable |
  |---|---|---|---|
  | Box | 4 · 4 · 4 · 4 | 18 | rounds only |
  | 4-7-8 | 4 · 7 · 8 | 16 | rounds only |
  | Coherent | 5.5 in · 5.5 out | 27 | inhale/exhale, 3–10 s |
  | Wim Hof | **3 rounds × 30 power breaths**, retention **60 / 90 / 90 s**, recovery hold 15 s | 3 | breaths 20–40, speed 2.6–4.0 s, rounds 1–10 |
  | Physiological sigh | 1.8 in · 1.0 sip · 6.0 out | 20 | rounds only |
  | Alternate nostril | 4 · 4 · 4 · 4 · 4 · 4 (24 s/round) | 10 | rounds only |
  | Extended exhale | 4 in · 8 out | 20 | inhale 3–7 s, exhale 4–12 s |
  | Timer | one pause phase, **default 30 s** | 1 | duration |
  | Builder | user-authored | 1 | fully |

- **Availability, and the site must show it.** Spec 052 §5: *"'6 techniques' is defensible; '9'
  is not, for a new reader."* Five are always available (box, 4-7-8, coherent, Wim Hof, timer);
  three are level-gated at Level 10 / 20 qualifying sessions with **one free try each**
  (physiological sigh, alternate nostril, extended exhale); Builder is **premium only**.
  The datasheet carries an availability column rather than a count.
- **A pacer timed to the second**, with per-technique customization of rounds and speed.
- **Heart rate before and after a session**, with the delta rendered on the completion screen
  (`CompletionView.swift:357` `heartRateDeltaRow`, string `session.detail.hr_change`).
  Produced from Apple Watch samples; an iPhone alone cannot measure it, and
  `heartRateTrackingEnabled` **defaults off**. Absent data renders as silence, never as a zero.
  Three-state: drop / flat / rise, because `end == start` is common on short sessions.
- **HRV as a 30-day TREND, not a delta** (spec 046, `HRVReader.swift`, chart fixed 2026-08-30).
  Needs an Apple Watch, `heartRateTrackingEnabled` (**defaults off**), and ≥2 days of data.
  Staleness limit 30 days. The header states why a delta is impossible: *"A before/after HRV
  delta for one breathing session cannot be produced honestly, and inventing one is worse than
  shipping nothing."*
  **The only sanctioned sentence** (`docs/075:55`): *"see your HRV alongside the days you
  practise"* — never *"breathing raises your HRV"*.
- **Siri and App Shortcuts** start a technique by voice (`Template/Core/Services/AppShortcuts.swift`,
  `Shared/BreathingTechniqueAppIntent.swift`).
- **Voice guidance that counts each phase**, in the user's language, and switchable off entirely
  (`UserPreferences.voiceGuidanceEnabled`, a global Bool defaulting true).
- Ambient soundscapes, interval bells, haptics; visualizations; alternate app icons.
- **HealthKit** mindfulness-minute logging; **iCloud** sync of the user's own data.
- **Apple Watch** standalone app, **Live Activities**, **Home Screen widgets**, a Focus Filter.
- Statistics, streaks, badges, leaderboard, a global community feed (consent-gated).
- 7 app UI languages: en, de, es, fr, nl, pt, ru (fr/nl are 2.0.0). 10 App Store locales
  shipped; `nl` metadata exists on disk but is untracked and is **not** an 11th shipped locale.
- Zen Mode (no gamification) and Growth Mode (XP, badges, challenges, leaderboard), chosen by
  the onboarding quiz and switchable in Settings.
- Free tier, by qualifying session (≥60 s): all five always-available techniques unlimited; one
  free voice per language; the circle and breath-wave visualizations; Watch, widgets, Live
  Activities, iCloud sync, Community, heart rate and HRV surfaces. Premium voices free for 3
  sessions, premium visualizations 5, customization 5, advanced statistics through 10.

## Features that DO NOT exist (the hallucination fence)
Never mention these as available, planned, or hedged:
- **Zero-ceremony first run.** A NEW user gets welcome → a 5-question quiz with no skip → mode
  result → medical disclaimer before their first breath (`Template/Features/Onboarding/`,
  confirmed by spec 052 §1a on 2026-09-01). Spec 048 removed ceremony from *starting a session*;
  it did not remove first-run onboarding. A returning user is one tap from a session. **Never
  write "no introduction", "no setup screen", or anything that reads as an install-time claim.**
- **A before/after HRV number.** HRV is a trend only. See above.
- Android, a web app, a desktop app.
- Any account, login, or server-side profile. (There IS an optional email opt-in on the welcome
  screen, disclosed in `/privacy`, so say "no account", never "nothing to sign up for".)
- Cloud sync through our servers. Sync is the user's own iCloud.
- Any medical, diagnostic or treatment function.
- **A 14-day trial.** The Premium Preview (a local 14-day Keychain trial) was removed. Only the
  7-day StoreKit offer exists. Never describe the free usage window as a timed trial.
- Any iPhone-only heart-rate path. No camera PPG, no manual entry.
- Any Apple Watch or widget usage statistic. Spec 051 Gaps 1–2: both targets emit zero analytics.

## Things we never claim
- **Causal HRV.** Never "improves", "optimizes", "boosts" heart rate variability.
  `Scripts/audit_medical_claims.py` enforces a `CAUSAL_HRV` rule. Accurate: *"paces you at
  approximately 5.5 breaths per minute"*, *"your latest HRV reading, from Apple Health"*.
- **Inventory counts of voices or visualizations.** Retired by spec 052 §1b: counting inventory
  "sells a relationship with a voice to a buyer who wants a metronome". The technique count (nine)
  is fine, because the techniques are the product.
- **Competitor superiority.** `docs/029:655` once said live in-session heart rate was unique.
  That is stale: Flow Breath (id6756208822) and Breathing Trainer: HRV Calm (id6790003073) both
  now ship before/after heart rate. No superiority claim without a current, cited source.
- Prices, ratings, download or user counts. `userRatingCount` is **0** and `averageUserRating`
  is **0** in the live listing; the worldwide total is one unprompted review. There is no social
  proof to cite, and no aggregate outcome stat ("users drop N bpm") is computed anywhere.
- **Any inventory count at all** — voices, languages, visualizations (24, not the 22 I first
  wrote), badges (53 in code; the live description wrongly says 24), soundscapes. The rule that
  generalises: a claim that cannot go stale the next time a voice ships.
- "Backed by science" in our own voice. The two allowlisted research strings survive only
  because they are hedged, cited education inside an article, not a product promise.
- "Two minutes", never "four" (resolved 2026-08-28).
- Medical outcomes, guaranteed results, "the best app".

- **Wim Hof tuning outside Premium.** `WimHofSettings` (breaths 20–40, speed 2.6–4.0 s, recovery
  hold 10–20 s, per-round retention, rounds 1–10) is fully tunable, but
  `effectiveWimHofSettings(isPremium:)` returns defaults for free users. Say "with Premium".
- **Adjustable hold on 4-7-8 or Box.** `customPhaseDurations` is nil for every technique except
  coherent and extended exhale. Only the round count is the user's.

## Per-technique facts for the landing pages (verified 2026-09-02)
- Box, 4-7-8 and coherent are **free from the start and never level-gated**. Only sigh, nostril
  and extended exhale carry the level gate (`BreathingTechnique.swift:96-101`).
- Rounds: 1 to 200 on all three. Defaults: box 18 (4:48), 4-7-8 16 (5:04), coherent 27 (4:57).
  Round count is free for everyone; there is also an infinite toggle (`StandardCustomizationView.swift:392-394`).
- Coherent pace: 3 to 10 s per phase, 0.5 s steps, one slider drives both. Free for the first 5
  qualifying sessions, then Premium. Free users run at 5.5 (`UserPreferences.swift:823-828`).
- The completion card shows the **latest HRV reading from Apple Health with its date** (`CompletionView.swift:395-419`),
  never a session delta. Never write "the app shows no HRV after a session".
- The 30-day HRV chart is **inside the advanced-statistics gate**: free through the 10th qualifying
  session, then Premium (`StatisticsView.swift:85-275`, `AppState.swift:199,227-229`). The completion-card
  HRV row is not gated. Never write "the HRV chart is free".
- The HRV chart is 30 days from HealthKit, hidden below two days of data. HRV is device-only,
  not in the iCloud store. The HR delta needs ≥3 samples at both ends or the row is omitted.
- Never write "resets to 5.5": the in-sheet reset sets 5.0 while the model default is 5.5.
- Never reuse `technique_coherent_info_benefits` ("Maximizes heart rate variability"): it is a
  causal claim the audit script would fail.
- Navy SEALs: the in-app box overview says it. On the site, only with a source, and not as
  the lede.

## Author
- Name: Yauheni Malashchytski
- Bio line: Developer of Refresher. Publisher: OverX AI.
- URL: https://overx.ai
