# Experience assets — things only I could know

The originality gate (Step 4) pulls from here. Every page needs at least one item, written in
first person, placed where it strengthens an argument.

**Publication fence:** the App Store Connect funnel numbers (impressions, page views, downloads,
conversion) are in `docs/074` and are **internal**. They never appear on the site.

## Metrics I've measured
- [2026-08] Icon legibility. The old mark was a purple plasma orb with an empty centre. Rendered
  at 40px it read as a glow around nothing, which says "space" or "energy", never "breathing" or
  "measurement". Four candidates were built and judged at 40px: dial ticks, dial plus trace, a
  box trace, and a breath wave. (`docs/specs/050`)
- [2026-09] Light-mode phase colours. The app's shipped inhale/hold/exhale/pause colours
  (`#60A5FA` `#4ADE80` `#A78BFA` `#94A3B8`) are unreadable on the app's own light background
  `#F5F7FA`. I darkened all four for the site and flagged them, because the app ships no light
  variant for these four while it does ship one for all eight technique colours.

## Experiments / tests I ran
- [2026-09] Ran the site at 320, 390, 768, 1024 and 1440 px in both colour schemes and found
  three real bugs: a glow with `inset: -14%` widened the page past the container; the header nav
  did not wrap at 320px; and the privacy policy's rights table forced a horizontal scroll.

## Decisions I made and why
- [2026-08] The breath wave won the icon test. It is the most legible mark at 40px, still reads
  as a wave at 29px, and it generalises across every technique. A dial would have implied one.
- [2026-09] I excluded the completion screenshot from the site. Its hero is a lotus, which is
  the retired persona's imagery, and its headline promises a heart-rate drop while the shot shows
  one static figure. I used the active session and statistics captures instead.
- [2026-09] I dropped the CSS-drawn orb from the site and embedded the real icon. At 26px the
  hand-built gradient passed. At 320px it read as a flat donut, nothing like the artwork.
- [2026-09] Screenshots on the site are unretouched captures, never AI repaints. Repainted UI
  garbles its own text, and this app's screens are mostly numbers. (`docs/065`)

## Decisions per technique (for the technique pages, 2026-09-02)
All from the app repo. Each names its source so the judge can check it.

- **Box.** I fixed box at 4-4-4-4 and left no slider for the phases. The pattern is the
  technique; a 3-5-3-5 "box" is something else. What you can change is the round count, 1 to
  200, and the default is 18 because 18 × 16 s lands at 4:48, close to five minutes without
  pretending to be exactly five. (`BreathingTechnique.swift:176`, `:188-205`, `:387-394`;
  `UserPreferences.swift:846-850` returns no custom durations for box.)
- **4-7-8.** Same decision: the ratio is the method, so the phases don't move. 16 rounds by
  default, which is 5:04. The in-app info text still says "repeat for 4-8 cycles", inherited
  from the method's own instructions, and the default disagrees with it. I've left the default
  at 16 and the text as is until I decide which one is right. (`BreathingTechnique.swift:177`,
  `:396-402`; `Localizable.xcstrings` `technique_478_info_steps`.)
- **Coherent.** The default is 5.5 s in, 5.5 s out because Lehrer and Gevirtz put the average
  resonance frequency at about 5.5 breaths a minute, and the slider runs 3 to 10 s in half-second
  steps because resonance varies by person. The pace is the one phase setting I made adjustable,
  and it goes Premium after five sessions; the round count never does.
  (`BreathingTechnique.swift:404-411`, `StandardCustomizationView.swift:262-263`, `:392-394`;
  `AppState.swift:196-197`.) I also rewrote the coherent description to remove a causal HRV
  claim; the audit script now blocks a release if one comes back
  (`Scripts/audit_medical_claims.py:92-101`).
- **HRV.** Apple Watch writes a handful of SDNN samples a day, not a stream, so a before/after
  HRV number for one session can't be produced honestly. I refused to fake one. The app charts
  30 days of HRV straight from HealthKit, and the chart doesn't render at all until there are
  two days of data: no empty state, no "connect your Watch" nag. HRV never leaves the device;
  it isn't in the iCloud-synced store. (`docs/specs/046-hrv-and-the-proof-moment.md` §R1, R2,
  R5; `HRVTrendChart.swift:12-17`; `CompletionView.swift:323-345`.)
- **Heart rate delta.** The completion card needs both endpoints and at least three samples,
  or it omits the row rather than showing a number built on noise. Tracking is a separate
  switch from HealthKit permission and starts off. (`CompletionView.swift:323-328`,
  `SessionHeartRateStore.swift:44`, `UserPreferences.swift:318`.)

## Screenshots / recordings
- `public/screenshots/01-session.png` — an active coherent breathing session
- `public/screenshots/02-techniques.png` — the technique picker, all nine
- `public/screenshots/03-statistics.png` — streaks, practice hours, technique distribution
- `public/screenshots/04-builder.png` — a custom pattern being built

## Things that broke and how I fixed them
- [2026-09] `.hero-orb` was styled in `index.astro` but the element is rendered by `Orb.astro`,
  so Astro's style scoping made both rules dead with no error. `:global()` fixed it. This fails
  silently and is worth watching for in every Astro component boundary.

## Opinions I'll defend
- A breathing app that opens with "calm your nervous system" is competing with Calm on Calm's
  terms, and loses. Every ranking page in this category does exactly that.
- Refusing to invent a per-session HRV delta was the right call. A number that cannot be produced
  honestly is worse than no number, and the buyer who wants HRV is exactly the buyer who would
  catch it.
