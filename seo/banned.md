# Anti-slop patterns (seed for seo/banned.md)

Copy this into `seo/banned.md` on setup. Add one line whenever a new pattern shows up. Editors: remove or rewrite; never just soften.

## Pass 1 — obvious

### Hype words
delve, unlock, unleash, elevate, empower, game-changer, game-changing, revolutionary, cutting-edge, seamless, seamlessly, robust, leverage (verb), harness, supercharge, next-level, transformative, powerful (as filler), effortless, world-class, best-in-class, state-of-the-art, comprehensive (as filler), holistic, synergy, ecosystem (unless literal), journey (unless literal travel), landscape (unless literal), realm, tapestry, testament to, navigate (unless literal), dive into / deep dive, crucial, vital, essential (when stacked), ultimate guide

### Corporate verbs
streamline, optimize (unless technical), facilitate, utilize (→ use), implement (→ set up/add), ensure (when stacked), foster, drive (results), enable (as filler)

### Fake hook questions
"Have you ever wondered…", "What if I told you…", "Are you tired of…", "Looking for…?", "Ever struggled with…", opening a section with a rhetorical question the section immediately answers

### Empty marketing phrases
"in today's fast-paced world", "in the digital age", "whether you're a beginner or a pro", "look no further", "it's no secret that", "at the end of the day", "the bottom line is", "without further ado", "let's face it", "needless to say", "it's worth noting that", "it goes without saying"

### Unsupported claims
"studies show" (no source), "experts agree", "many users report", "it's widely known", any percentage without a source, "the best" without a criterion

### Filler openers / closers
"In conclusion", "To sum up", "In this article we will", "As mentioned above", "As we've seen", "I hope this helps"

## Pass 2 — subtle

- **Repetitive openings**: three consecutive sentences or paragraphs starting the same way (same word, same "X is…" shape)
- **Missing contractions**: "it is", "do not", "you will" where a human would say "it's", "don't", "you'll"
- **Weak transitions**: "Additionally", "Furthermore", "Moreover", "That being said", "With that in mind" → cut or replace with a real logical link
- **Overlong paragraphs**: > 5 lines on desktop → split
- **Em dashes (—)**: replace with a period, comma, colon, or restructure. Also thin out en dashes used as em dashes.
- **Rhythm triads**: "fast, simple, and reliable" three-item lists used for cadence rather than information
- **"Not X, but Y" / "It's not about X, it's about Y"** constructions
- **Colon-headline sentences**: "The result: …", "The catch: …" used more than once per article
- **Anthropomorphized nouns**: "this feature lets you…", "the app empowers…" when "you can…" works
- **Hedged everything**: "may", "might", "can help" stacked in one sentence
- **Perfectly parallel headings**: every H2 the same grammatical shape
- **Summary-of-the-summary**: a closing paragraph that restates the short answer verbatim
- **Emoji in body text** (fine in social posts, not in articles)

## Test after both passes
Read the first sentence of every paragraph in a row. If they sound like one voice with something to say, pass. If they sound like a template filling itself in, go again.

---

## Project-specific bans — Refresher

From `docs/074 §3`, `docs/specs/052-retire-inventory-claims.md §5`, and `docs/claims-ledger.md`.
These are positioning rules, not style preferences.

### Words
`guided` · `journey` · `practice` as a noun · `routine` · `coach` · `daily practice` ·
`relax` / `calm down` as the lede · `mindfulness` as the product category

### Claim shapes
- **Any inventory count**: voices, languages, visualizations, badges, soundscapes. Retired by
  052 §1b because counting inventory sells a relationship with a voice to a buyer who wants a
  metronome. The technique count is also barred as a headline — 052 §5: "'6 techniques' is
  defensible; '9' is not, for a new reader."
- **Causal HRV**: any of optimize / improve / increase / boost / raise / enhance within ~40
  characters of HRV or "heart rate variability", in any language.
  `Scripts/audit_medical_claims.py` hard-fails this.
- **Medical terms**: cure, treat, diagnose, clinical, clinically proven, therapeutic, therapy,
  medicine, medical treatment, anxiety disorder, depression, PTSD.
- **Zero-ceremony install**: "no introduction", "no setup screen", "get started in seconds",
  "30 seconds to set up". False — the first run is welcome + terms checkbox + a 5-question quiz
  with no skip + mode result + medical disclaimer.
- **Competitor superiority** without a current cited source. "No competitor reads heart rate
  live" is stale: Flow Breath (id6756208822) and Breathing Trainer: HRV Calm (id6790003073) both
  ship before/after heart rate.
- **Social proof of any kind.** Zero ratings.
- **Prices.** Territory-set.
- **"4 minutes."** Resolved to two on 2026-08-28.
- **HRV before/after.** Impossible; HRV is a 30-day trend.
- **iPhone-only heart rate.** Requires Apple Watch.

### Imagery
No lotus (including the `dreamLotus` visualization), candles, sofas, closed eyes, mugs, stock
serenity, or bright pastel grounds. 074 §3 rule 4: if a slide could sit unchanged in Calm's
listing, it is wrong. Rule 6: the dark UI is an asset, it reads as instrumentation.

### Verbatim retired strings — never resurrect
`4 Breathing Techniques` · `10 premium voices, 3 languages` · `6 techniques. Guided voice.
Real-time heart rate. Your pace.` · `Real-time Apple Watch integration` · `Find calm through
guided breathing` · `A Voice to Guide You` · `Close your eyes and follow along.` ·
`see how breathing improves your heart rate over time` · `Coherent Breathing — Optimize heart
rate variability` · `Struggling with anxiety, racing thoughts, or poor sleep?`

### Allowed literals (do not flag)
- `mindfulness minutes` / `mindfulness-minute logging` — HealthKit's own API term for what the
  app writes. The ban is on "mindfulness" as the product *category*, not on naming an Apple API.

## Added 2026-09-02 (judge revision 1)

- **"No trackers" / "we track nothing".** The site's own `/privacy` discloses IDFV, anonymous
  usage events to `analytics.overx.ai` and an Apple Search Ads attribution token. The defensible
  wording is **"No ads and no ad SDKs"** and **"no account required"**. Never assert an absolute
  the same domain contradicts two clicks away.
- **A price in structured data.** `offers.price` is a price statement in machine-readable form,
  and it is territory-set. Use `isAccessibleForFree` and let the App Store quote the number.
- **Refrain.** One positioning phrase carrying the H1, a section H2, the short answer and the
  schema `featureList` reads as a template, not a voice. Own it in one place.
- **A closer that echoes the lede.** Restating the opening line at the bottom is a
  summary-of-the-summary. The close earns its own sentence.
- **Efficacy assertions stated as fact.** "Two minutes is enough for a reset" is a physiological
  claim with no source. Say what the app is built around, not what breathing does to you.
- **Bar charts that are not to scale.** `TECHNIQUES.ratio` is a schematic, not data: Wim Hof's
  three bars cannot represent 3 rounds of 30 breaths. Label it "relative", never "to scale".

## Added 2026-09-02 (technique pages, four judge rounds)

- **Denying a shipped feature to sound principled.** "The app shows no HRV after a session" was
  false: the completion card shows the latest Apple Health reading with its date. Check the
  screen before writing what it doesn't do.
- **Hedged causality is still causality.** "Slow breathing may move your HRV over time" and
  "what it does for you over weeks is what the chart shows" pass the regex and fail the fence.
  The chart draws two series on one axis and computes no correlation; say that instead.
- **Efficacy in sibling anchors.** "the one for staying sharp", "the one for winding down" are
  outcome claims. Anchor on structure: "equal phases with a hold at both ends".
- **A negated banned word is still the word.** "does not treat anything" ships `treat`.
- **"before the first inhale / after the last exhale."** The code keeps the first and last
  sample of the session window. Say that.
- **Quoting one source by name in every paragraph.** Cite it once in the body and in the sources
  list; the third "The Cleveland Clinic says" reads as a crutch.
- **"Premium adds X, Y and Z after five sessions"** reads as if all three are gated at five.
  Only the coherent pace slider is.
- **Step timing that lives in the UI but not in the HowTo schema.** Fold seconds into the step
  name so the machine copy matches the visible one.
