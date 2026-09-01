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
