---
title: "Resonance frequency breathing: finding your rate"
slug: resonance-frequency-breathing
keyword: resonance frequency breathing
cluster: technique explainers (feeds the pillar, sits next to /coherent-breathing-app and /hrv-breathing-app)
intent: definition (with a how-to tail: "How to find your resonance breathing frequency?" is a live PAA)
serp_format: >
  Google en/US, 2026-10-09, the user's browser. Mixed informational SERP, no App Store listings.
  Top: an NCBI/PMC paper (Chaitanya 2022), then blog explainers (Ohm Health, HRV4Biofeedback,
  BreathYoga, Insight Timer, Runner's World, 2 days old), Frontiers (Steffen 2017), a Nature
  Scientific Reports RCT (Sumińska 2026), a YouTube video, two Reddit threads. Off the first page
  but ranking for the topic: allos.app (~400 words, 3 H2, no FAQ, no first-person, no DIY method),
  breathingfrequency.com (~2,100 words, an interactive 5-pace test with a comfort self-report
  fallback, FAQ x5). The keywords.md "PR release" note did not reproduce. Target length
  ~1,600 to 1,900 words: between the 400-word explainers and the 2,100-word test page.
paa: >
  Captured 2026-10-09 (Google, en/US): What is resonance frequency breathing? · Why don't doctors
  use HRV? (skipped: medical framing) · How to do resonance breathing? · How to find your resonance
  breathing frequency? People also search: resonance breathing vs box breathing, resonance
  frequency breathing app free, how to find resonance frequency breathing. Carried over from
  2026-09-02: Is there an app that can help with resonant breathing?
angle: >
  Every ranking page either defines the term (allos, BreathYoga, Ohm) or sells a test
  (breathingfrequency.com). None says how unstable the number is (Capdevila 2021: it moved for
  two thirds of people within a week), none cites the May 2026 RCT that found no meaningful
  difference between measured-RF and fixed 6/min breathing, and none converts the lab's breaths
  per minute into the seconds-per-phase a phone pacer actually takes. This page does all three,
  and says plainly what Refresher can't do here (find your rate) and why, from the developer's
  own HRV decision.
meta_description: Resonance frequency breathing is slow breathing at the pace where your heart rate swings most, often 4.5 to 7 a minute. How to find yours, and whether to.
sources:
  - url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4104929/
    supports: Lehrer & Gevirtz 2014. Resonance ~0.1 Hz (6/min), refined to ~5.5/min average with an ~11 s breath; varies by individual; taller people and men have lower resonance frequencies (greater blood supply). Fetched 2026-10-09.
  - url: https://www.frontiersin.org/articles/10.3389/fnins.2020.570400/full
    supports: Shaffer & Meehan 2020. Adult range 4.5 to 6.5/min; protocol 6.5 down to 4.5 in 0.5 steps, 2 min each, 2 min rest; six weighted criteria with phase synchrony heaviest, then peak-trough HR, then LF power; practice at 5.5 to 6 before trials; Fuller et al. (2011): stable in 21 undergraduates, test-retest r = 0.73 two weeks apart, needs replication; longer exhale recommended, 1:1 vs 1:2 no significant difference. Fetched 2026-10-09.
  - url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5575449/
    supports: Steffen et al. 2017. Individual RF typically 4.5 to 7.0/min; heart rate and breathing synchronize at ~6/min (0.1 Hz). Fetched 2026-10-09.
  - url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8052415/
    supports: Capdevila et al. 2021, Sci Rep 11:8400. 21 participants, test and retest 6 to 8 days apart, rates 7 to 5/min for 2 min each; RF changed in 66.7%; SDNN and RMSSD highest at RF vs 6/min and free slow breathing; recommend assessing RF before each session. Fetched 2026-10-09.
  - url: https://www.nature.com/articles/s41598-026-53333-6
    supports: Sumińska, Rynkiewicz & Szulczewski, Sci Rep 16:22630, published 19 May 2026. Randomized, N = 88, RF vs fixed 0.1 Hz vs waitlist control, four weeks; both breathing groups reduced self-reported stress vs control with no meaningful difference between them; "does not permit firm conclusions", larger samples needed; RF determination is time-consuming, prone to error, needs careful ECG or PPG analysis; ~35% of HRVB studies used a fixed rate and still reported benefits (citing Lalanza 2023); 4:6 inhale:exhale; stop if hyperventilating. Fetched 2026-10-09 via the user's browser (WebFetch hits a cookie wall).
  - url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13381940/
    supports: PMC full text of Sumińska et al. 2026; "Participants were instructed to discontinue practice if they experienced any symptoms of hyperventilation". Fetched 2026-10-09.
  - url: https://my.clevelandclinic.org/health/symptoms/21773-heart-rate-variability-hrv
    supports: Already in the register. Most wrist trackers are not sensitive enough for HRV; chest bands are the more accurate consumer option.
fetch_failures: >
  boris.unibe.ch / boris-portal.unibe.ch (Vukojević et al. 2024 systematic review): Anubis bot
  wall. doaj.org record for the same review: 403. Not cited.
experience_used:
  - experience.md "Decisions per technique" > Coherent (5.5 default from Lehrer & Gevirtz; 3 to 10 s slider in half-second steps because resonance varies; box and 4-7-8 get no slider)
  - experience.md "Decisions per technique" > HRV (a handful of SDNN samples a day, not a stream; refused to fake a per-session HRV number)
original_data: >
  The seconds-per-phase to breaths-per-minute table is arithmetic on product.md facts (equal
  phases, 0.5 s steps, 1 to 200 rounds): bpm = 30 / seconds per phase; rounds = 120 / (2 x seconds).
internal_links:
  - /coherent-breathing-app (Coherent breathing at 5.5 breaths per minute, the fixed-pace version)
  - /hrv-breathing-app (HRV breathing, and what the app will and will not show you)
  - /box-breathing-app (Box breathing at 4-4-4-4, equal phases with a hold at both ends)
  - / (Every technique, on one pacer; rendered by the layout)
inbound_links:
  - /coherent-breathing-app siblings -> "Resonance frequency breathing, and how to find your own pace"
  - /hrv-breathing-app siblings -> "Resonance frequency breathing: the test that finds your pace, and its limits"
  - /box-breathing-app siblings -> "Resonance frequency breathing, the slow pace with no holds"
schema: Article + FAQPage + HowTo + BreadcrumbList + MobileApplication (shared appSchema)
hero_prompt: >
  None generated. The page uses the shared og-image.jpg like every other page; the site has no
  per-page hero images and the image MCP ("hero") failed to connect. If one is wanted later: a
  dark instrument-style chart, five short heart-rate traces stacked, one per breathing pace, the
  middle one swinging widest, IBM Plex Mono labels "4.5 s" to "6.5 s". No people, no lotus.
judge: 86/100 PASS (round 1); fixes 1-10 applied 2026-10-09
status: draft
---

# Resonance frequency breathing

Between 4.5 and 7 breaths a minute, there's one pace where your heart rate rises and falls the most with each breath. That pace is your resonance frequency, and finding it exactly takes more equipment than most people own.

> Resonance frequency breathing is slow, even breathing at the personal rate where your heart rate swings most with each breath. For adults that rate usually falls between 4.5 and 7 breaths a minute, and averages about 5.5. Finding your exact rate takes a stepped test, two minutes at each pace, with a sensor that records every heartbeat.

## What resonance frequency breathing is

Your heart rate isn't steady across a breath. It climbs a little as you inhale and drops as you exhale.

Slow your breathing down and those swings grow, until somewhere near six breaths a minute they fall into step with the slower rhythm your body uses to hold blood pressure steady. The two then reinforce each other, and the heart rate swing reaches its largest. The breathing rate where that happens is your resonance frequency.

Lehrer and Gevirtz, reviewing the biofeedback research in 2014, placed it at about 0.1 Hz, or six breaths a minute, then refined the average to about 5.5 breaths a minute, an 11-second breath. They also found that taller people and men tend to have lower resonance frequencies, which they put down to a greater blood supply.

The average hides a spread. A 2017 study by Steffen and colleagues gives the typical individual range as 4.5 to 7 breaths a minute, and a 2020 assessment guide puts adults at 4.5 to 6.5. That spread is why the protocol measures each person instead of prescribing one number. Coherent breathing, at a fixed 5.5 or 6, is the same idea with the measuring step left out.

## How the resonance frequency test works

The standard test is a staircase. Shaffer and Meehan's protocol starts at 6.5 breaths a minute and steps down by half a breath to 4.5, two minutes at each pace with a rest between. Some labs start higher: a 2021 study ran 7, 6.5, 6, 5.5 and 5. Five two-minute trials plus the rests take the better part of 20 minutes.

During each trial a sensor records every heartbeat, and the paces get compared afterwards. The guide weights six criteria. Heaviest is phase synchrony, whether heart rate rises and falls in step with the breath. Next is the gap between the highest and lowest heart rate inside each breath, then the power in the low-frequency band around 0.1 Hz. Whichever pace scores best is the one you train at.

That sensor is the hard part. The authors of a 2026 trial call finding someone's resonance frequency time-consuming and prone to error, because it needs careful analysis of an ECG or an optical pulse signal. Apple Watch's HRV reading, a summary number written a few times a day, can't rank five two-minute trials. The test needs every beat inside each one.

## Why your number can move

Capdevila and colleagues tested 21 people twice, six to eight days apart. For two thirds of them (66.7%), the resonance frequency came out different the second time. They recommend measuring it again before each biofeedback session, since in their data the HRV measures were highest at the measured rate, above both six a minute and self-paced slow breathing.

Not everyone found it that unstable. Shaffer and Meehan's guide cites Fuller and colleagues (2011), also 21 people, with acceptable test-retest reliability over two weeks, and says it needs replicating. Either way, a single test gives you a starting estimate. Run it again on a different day before you trust it.

## Fixed six a minute against your measured rate

A randomized trial published in Scientific Reports in May 2026 split 88 people three ways: breathing at their measured resonance frequency, breathing at a fixed six a minute, or waiting. After four weeks both breathing groups reported less stress than the waiting group, with no meaningful difference between the two.

Its authors say the study doesn't settle whether resonance adds anything, and that spotting a small difference would take a larger sample. The same paper cites a review finding that about 35% of HRV biofeedback studies already use one fixed rate for everyone, and still report benefits.

My read: if you own a chest strap and like the data, run the staircase two or three times on different days and use the pace that wins most often. If you don't, breathe at 5.5 to 6 a minute and spend those 20 minutes breathing instead of testing. If a professional is running biofeedback with you, use their equipment and their number.

## Turning breaths per minute into seconds

Phone pacers, Refresher included, set each phase in seconds, so the lab's paces need converting. With an equal inhale and exhale, seconds per phase is 30 divided by breaths per minute. Refresher's coherent slider moves in half-second steps, which hits some test paces exactly and falls between others.

| Seconds per phase | Breaths per minute | Rounds for about 2 min |
|---|---|---|
| 4.5 | 6.7 | 13 (1:57) |
| 5.0 | 6.0 | 12 (2:00) |
| 5.5 | 5.45 | 11 (2:01) |
| 6.0 | 5.0 | 10 (2:00) |
| 6.5 | 4.6 | 9 (1:57) |

*Equal inhale and exhale. Breaths per minute is 30 divided by the seconds per phase.*

## Close enough for a home test

So 5.0 and 6.0 seconds land on the lab's 6 and 5 exactly, and 5.5 seconds is within a twentieth of a breath of 5.5. The 4.5 and 6.5 second steps miss the lab's 6.5 and 4.5, landing at 6.7 and 4.6. For a home staircase that's close enough, because you're comparing the trials with each other.

The 2020 guide recommends a longer exhale than inhale, though it reports that studies comparing 1:1 with 1:2 found no significant difference. The 2026 trial used a 4:6 inhale-to-exhale ratio, which at six a minute is 4 seconds in and 6 out. Coherent in Refresher is always 1:1.

Extended exhale has its own inhale slider (3 to 7 s) and exhale slider (4 to 12 s), so 4 in and 6 out, six a minute, is a setting there. It opens as you level up, with one free try before that, and its timings follow the same rule as the coherent slider: free for your first five qualifying sessions, then Premium.

## What Refresher does here, and what it can't

Refresher paces coherent breathing at 5.5 seconds in and 5.5 out by default, and the slider goes from 3 to 10 seconds per phase in half-second steps, which covers 10 breaths a minute down to 3. The round count is always free, 1 to 200. The slider is free for your first five qualifying sessions of a minute or longer, then part of Premium, which has a 7-day free trial.

It won't find your resonance frequency. With an Apple Watch and heart rate tracking switched on, it keeps the first and last heart rate reading of each session and shows the difference. That's a before-and-after reading. The test ranks the swing inside each breath, which two numbers can't show. You can see your HRV alongside the days you practise, as a 30-day trend from Apple Health. The chart is free through your tenth qualifying session, then part of Premium.

For the staircase itself, pair a chest strap with an app that shows heart rate beat by beat. The Cleveland Clinic notes that most wrist trackers aren't sensitive enough for HRV and that chest bands do better.

> **Yauheni Malashchytski, developer of Refresher**
>
> I set the coherent default at 5.5 seconds each way because that's where Lehrer and Gevirtz put the average resonance frequency, and I let the slider run from 3 to 10 in half-second steps because resonance varies by person. Box and 4-7-8 don't get a slider, because their ratio is the technique. On coherent, the pace is exactly what people disagree about.
>
> Apple Watch writes a handful of SDNN samples a day, not a stream, so I refused to build a before-and-after HRV number for one session out of them. The same limit rules out a resonance test: ranking five two-minute trials on those samples would be the same invention five times over.

## How to find your resonance frequency at home

A staircase of five slow paces, two minutes each, with a chest strap recording every beat. Allow about 20 minutes.

1. **Put on a chest strap.** Pair it with an app that shows heart rate beat by beat. Sit comfortably and breathe normally for a minute.
2. **Warm up at 5.5 seconds a phase.** The 2020 guide has people breathe at 5.5 to 6 a minute before the trials. A couple of minutes on Coherent at the default does it.
3. **Breathe two minutes at each pace.** Work through the table: 4.5, 5.0, 5.5, 6.0, then 6.5 seconds per phase, about 6.7 down to 4.6 breaths a minute. Set the rounds from the table so each trial lasts about two minutes. Changing the pace is free for your first five qualifying sessions, then Premium (7-day free trial). One full staircase uses six sessions with the warm-up, so skip the warm-up on a first run or plan on the trial.
4. **Rest one to two minutes between trials.** Breathe normally. If you feel you're overbreathing, stop.
5. **Compare the trials.** In the strap's app, find the pace where heart rate rises and falls most regularly with each breath, with the biggest gap between peak and trough. That's your estimate.
6. **Repeat on another day.** Run it again within a week or two. If the winner moves, use the pace that wins most often, or settle at 5.5 to 6.

## FAQ

**What is resonance frequency breathing?**
Slow, even breathing at the personal rate where your heart rate rises and falls most with each breath. For most adults it sits between 4.5 and 7 breaths a minute, averaging about 5.5, which is roughly an 11-second breath. It's the pace HRV biofeedback trains at.

**How do you find your resonance breathing frequency?**
Breathe two minutes at each of several slow paces, usually 6.5 down to 4.5 breaths a minute in half-breath steps, resting between, while a chest strap or ECG records every beat. The pace with the largest, most regular heart rate swing is your estimate. Test again on another day: in one study it moved for two thirds of people.

**How do you do resonance breathing?**
Use your measured pace, or 5.5 to 6 breaths a minute if you haven't tested. Breathe in and out evenly with no holds, following a pacer so you don't have to count. At 5.5 breaths a minute that's about 5.5 seconds in and 5.5 seconds out.

**Is resonance breathing the same as coherent breathing?**
Close. Coherent breathing fixes one pace for everyone, usually 5.5 or 6 breaths a minute. Resonance frequency breathing measures your own rate first and trains there. A 2026 randomized trial found no meaningful difference between the two over four weeks, and its authors say a larger study is needed to settle it.

**How is resonance breathing different from box breathing?**
Box breathing holds for four seconds after both the inhale and the exhale, which works out to 3.75 breaths a minute. Resonance breathing has no holds, just one continuous, even breath at a pace chosen for your heart rate rhythm. They're separate techniques with separate timings.

**Can I run the staircase free in Refresher?**
Changing the pace is free for your first five qualifying sessions, then Premium (7-day free trial). One full staircase uses six sessions with the warm-up, so skip the warm-up on a first run or plan on the trial. The round count stays free.

**Can Refresher find my resonance frequency?**
No. It paces 3 to 10 seconds per phase in half-second steps, so it can pace a home version of the test, and with an Apple Watch it shows heart rate before and after a session. Ranking the paces needs beat-by-beat heart rate during each one, from a chest strap and its own app.

## Close

**undefined** Refresher holds whichever pace you set while the strap does the measuring. Pace changes are free for five sessions, enough for the trials without the warm-up; the 7-day trial covers the rest.

Related: Coherent breathing at 5.5 breaths per minute, the fixed-pace version · HRV breathing, and what the app will and will not show you · Box breathing at 4-4-4-4, equal phases with a hold at both ends · Every technique, on one pacer.

## Sources (as rendered)

- https://pmc.ncbi.nlm.nih.gov/articles/PMC4104929/: Lehrer and Gevirtz, 2014: resonance at about 0.1 Hz, refined to about 5.5 breaths per minute on average with an 11-second breath, varying by individual; taller people and men have lower resonance frequencies
- https://www.frontiersin.org/articles/10.3389/fnins.2020.570400/full: Shaffer and Meehan, 2020, citing Fuller and colleagues (2011) for reliability: adult range 4.5 to 6.5 breaths per minute; the 6.5 to 4.5 staircase in half-breath steps, two minutes each; the six weighted criteria; breathing at 5.5 to 6 before the trials; test-retest reliability in 21 people; longer exhale recommended, 1:1 and 1:2 not significantly different
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5575449/: Steffen and colleagues, 2017: individual resonance frequency typically 4.5 to 7 breaths per minute
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8052415/: Capdevila and colleagues, 2021: 21 people retested six to eight days apart, resonance frequency changed in 66.7%; HRV measures highest at the measured rate; assess before each session
- https://www.nature.com/articles/s41598-026-53333-6: Sumińska, Rynkiewicz and Szulczewski, 2026: randomized, 88 people, measured rate vs fixed 0.1 Hz vs waitlist over four weeks, no meaningful difference between the breathing groups; finding the rate is time-consuming and error-prone; about 35% of studies use a fixed rate; 4:6 inhale to exhale; participants told to stop at signs of hyperventilation
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13381940/: the same 2026 trial, full text on PubMed Central
- https://my.clevelandclinic.org/health/symptoms/21773-heart-rate-variability-hrv: most wrist-worn trackers are not sensitive enough to detect HRV accurately; chest-band devices are the more accurate consumer option
