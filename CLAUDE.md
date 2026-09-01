# refresher (tryRefresher.app)

Marketing site for **Refresher: Breathing & HRV** (`ai.overx.refresher`, App Store
`6759679041`). Astro 4, static output, no client JavaScript, deployed on Vercel.

The app source lives at `../../0E-extensions/JustBreathe` — that repo is the source of
truth for copy, colours and claims.

## Tech Stack
- Astro 4, `output: 'static'`, `trailingSlash: 'never'`. **One dependency: `astro`.**
- **Zero client JavaScript.** No exceptions currently. Theme switching is pure CSS.
- Deploy: `git push origin master` → Vercel auto-builds. Config is `vercel.json`, two keys
  plus the `/download` redirect.

## Critical Conventions
- **Register every page in `src/site-pages.ts`.** It drives the sitemap and the canonical
  tag. An unregistered page is invisible to crawlers.
- **Canonical URLs are non-trailing** (`/support`, not `/support/`). Never link one.
- **App facts live in `src/app.ts`.** The App Store ID, URLs, and the nine techniques with
  their patterns. Do not hardcode any of them in a page.
- **Legal and support copy is generated, not written.** `src/data/{privacy,terms,support}.json`
  are extracted from `overx.ai/overx-ai/sites/refresher/src/content/*.ts`, English branch.
  To update, re-extract — do not hand-edit the JSON, it will drift from the app's own copy.
- English only. When a second locale lands, widen `SITE_PAGES` from `string[]` to
  `{ slug, locales[] }` and restore hreflang in `BaseLayout` — do not add an i18n library.

## Copy rules — these are not stylistic, they are the positioning

**`seo/product.md` is the source of truth for every product claim, and `seo/banned.md` for
every forbidden word and claim shape. Read both before touching marketing copy.** The rules
below are the summary, not the authority.

From `JustBreathe/docs/074-positioning-the-instrument.md` and
`docs/specs/052-retire-inventory-claims.md`. Refresher sells an *instrument*, not a practice.

- **Lead with a metric, a technique, or a span of time in the first four words.** Never
  "relax".
- **Banned words: `guided`, `journey`, `daily practice`, `coach`.** "Guided" is a liability —
  to this buyer it means "someone will talk at me first".
- **Never write "improves/optimizes heart rate variability".** `Scripts/audit_medical_claims.py`
  in the app repo enforces a `CAUSAL_HRV` rule. Accurate phrasings: *"paces you at
  approximately 5.5 breaths per minute"*, *"heart rate before and after every session"*.
- **Two minutes, never four.** The promo/screenshot contradiction was resolved to 2 on
  2026-08-28.
- **No prices, no ratings, no download counts. This includes `offers.price` in JSON-LD.** Prices are territory-set; `userRatingCount`
  is 0 in all ten storefronts. Say "7-day free trial" and let the App Store quote the price.
- **No lotus, no candles, no sofas, no closed eyes.** `05_Completion` is excluded from the
  screenshot set on exactly these grounds, and stays excluded until its hero is replaced.
- **No inventory counts.** Not voices, languages, visualizations, badges or soundscapes. Spec
  052 §1b retired the *shape* of the claim, not just the stale number: counting inventory sells
  a relationship with a voice to a buyer who wants a metronome. This includes the technique
  count as a headline. 052 §5: *"'6 techniques' is defensible; '9' is not, for a new reader."*
  The datasheet shows all nine with an **Access** column instead of counting.
- **Never claim a zero-ceremony install.** No "no introduction", "no setup screen", "get started
  in seconds". A new user gets welcome, a terms checkbox, a 5-question quiz with no skip, a mode
  result and a medical disclaimer. Spec 048 removed ceremony from *starting a session*, not from
  first run.
- **HRV is a 30-day trend, never a per-session delta.** The only sanctioned sentence is
  *"see your HRV alongside the days you practise"*.
- **Never write "no trackers".** `/privacy` discloses IDFV, anonymous events to
  `analytics.overx.ai` and an ASA attribution token. Say "no ads, no ad SDKs, no account".
- **Heart rate is measured on Apple Watch.** An iPhone has no sensor, and the in-app switch
  defaults off.
- **No competitor-superiority claims** without a current cited source. The old "no competitor
  reads heart rate live" line is stale.
- **No em dashes in published copy.** The `/seo` rubric scores this under its 35-point
  human-sounding dimension. Periods, commas, or restructure.

## Design
- **Dark and light are both first-class**, selected by `prefers-color-scheme`, no JS.
  `docs/074` rule 6 says the dark UI *is* the positioning — dark is the intended default,
  light is a designed equal rather than an inversion.
- Surfaces and the eight technique colours are the app's own values from
  `JustBreathe/Template/Core/Constants/AppColors.swift`, dark and `*Light` variants.
- **The four phase colours are derived, not shipped.** The app has no light variant for
  inhale/hold/exhale/pause; the light values in `global.css` were darkened from the dark
  ones. If the app ever ships real light variants, replace them.
- Type: system rounded stack (the app is SF Pro `design: .rounded`, 74 call sites) for
  display, IBM Plex Mono for every label, value and table cell. One webfont.
- Never declare a colour only inside a media or `[data-theme]` block — it would be undefined
  in the un-stamped default state. Tokens first, always.
- `og:image:width/height` in `BaseLayout` are hardcoded to match `public/og-image.jpg`
  (1200×675). Change both together.
- **No `favicon.svg`.** An `image/svg+xml` icon wins over PNG everywhere that supports it, so
  a stale one would silently override every other icon.

## Relationship to refresher.overx.ai
`refresher.overx.ai` is still live and is **not** to be touched. It serves the App Store
Connect URLs (`fastlane/Deliverfile`), the AASA file, and the `/r/<code>` referral deep link.
This site replaces it eventually. Before that switch: all four of `/`, `/privacy`, `/terms`,
`/support` must return 200 here, and AASA plus `/r/[code]` must move in the same step or
universal links break.

## The site describes 2.0.0, which is not on the App Store yet
The store serves `Refresher: Breathing & Focus` 1.5.0. The rename to `Breathing & HRV`, the
French and Dutch voices, the heart-rate delta and the HRV trend are all real in the app repo and
**uncommitted**. User decision 2026-09-02: write for 2.0.0 and accept the temporary mismatch.
Re-verify `seo/product.md` against the store when 2.0.0 ships.

## Workflows
- Copy changes go through `/seo`: ground against `seo/product.md`, two anti-slop passes against
  `seo/banned.md`, then an independent score with the skill's rubric. Threshold 80.
- Verify: `npm run build`, then the greps in README "Verification".
- Preview: `npm run preview`, read every page at 320px and 1440px in both colour schemes.
