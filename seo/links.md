# Backlink tracker

One row per prospect. `/seo links` adds rows and drafts pitches here. Nothing is sent automatically: the owner sends every pitch and fills in the last three columns.

Every page below was opened on 2026-11-25. App facts come from `product.md`, which was verified against 2.0.0. The store serves 3.1.0 since 2026-11-21: check each pitch against the app before sending.

| Prospect | URL | Why it fits | Pitch | Sent | Result | Link won |
|---|---|---|---|---|---|---|
| the5krunner, Indie App Spotlight | https://the5krunner.com/2026/11/12/innerripple-apple-watch-baseline-scores/ | Series on indie Apple Watch apps, written by the developer and edited by the site. Says it is not sponsored. Readers care how HRV is measured | 1 | | | |
| Empirical Health, Brandon Ballinger | https://www.empirical.health/blog/how-wearables-measure-hrv/ | Explains SDNN, RMSSD and Breathe-session readings; sells its own app, so a source link is the only realistic ask | 2 | | | |
| Sano Labs | https://www.sanolabs.eu/en/blog/apple-watch-mindfulness-hrv | Says HRV is measured overnight, not in mindfulness sessions. We already cite it on /apple-watch-breathing-heart-rate. Sells its own app | 3 | | | |
| The Sunrise Digest, Julia Whitford | https://thesunrisedigest.com/morning/best-breathing-apps-2026/ | Six-app test, free-timer pick is iBreathe. No paid coverage, 28 days of use before a review. reviews@thesunrisedigest.com | 4 | | | |
| ToolMenu | https://toolmenu.app/lists/best-breathing-apps | Breathing list with a free suggestion form (https://toolmenu.app/submit) that asks whether you're the maker. Rankings not for sale, some affiliate links | 5 | | | |
| iphone-ticker.de, Nicolas | https://www.iphone-ticker.de/calmaria-2-0-elegante-gratis-app-vermittelt-beruhigende-atemtechniken-233702 | Covered Calmaria twice and Breathing Zone; takes app tips at the address on its Kontakt page. Last breathing article April 2024 | 6 | | | |

Opened and dropped: Othership, Declutter The Mind, Saagara and Pzizz (roundups by makers of competing apps), Choosing Therapy (earns commission from reviewed companies), Laxis (its own product in the list, no breathing section seen), applemag.fr (Apple's own app only). Not readable, so not listed: mindfulsuite.com, appstoretracker.com, freeappsforme.com, watchgeneration.fr.

## Pitches

### 1. the5krunner
Subject: Indie App Spotlight: a breathing app that won't show a per-session HRV number

I read the InnerRipple spotlight. The worked week, where 34 ms looks ordinary until you see the wearer's own 29 nights, is the clearest case for a baseline I've seen.

I make Refresher, a breathing pacer for iPhone and Apple Watch. The decision your readers might argue with: it shows heart rate before and after a session, and refuses to show an HRV change for one. The Watch writes a handful of SDNN samples a day, so that number can't be produced honestly. HRV appears as a 30-day trend, and the chart stays hidden below two days of data.

I'd write a spotlight on that choice, with the sample counts and what I left out. Notes on it are here: https://tryrefresher.app/hrv-breathing-app

### 2. Empirical Health
Subject: Your SDNN vs RMSSD table

Your table is one of the few that separates the older Watches (SDNN, opportunistic plus Breathe sessions) from Series 12 and Ultra 4.

I make Refresher, a breathing app, and hit the practical side of that row. With a handful of SDNN samples a day I couldn't produce an honest before-and-after HRV number for one session, so I left it out. I collected where Apple shows heart rate around a session, and where sources disagree about HRV: https://tryrefresher.app/apple-watch-breathing-heart-rate

If it's useful as a source for that row, link it. If something in it is wrong, I'd like to know.

### 3. Sano Labs
Subject: HRV during Mindfulness sessions, a source that disagrees

I cite your Mindfulness and HRV article on my own page about Apple Watch breathing sessions. One line may need a second look: you say HRV is recorded overnight, not during mindfulness sessions.

Athlytic's help page says a Mindfulness session triggers an HRV reading: https://athlyticapp.helpscoutdocs.com/article/23-using-the-mindfulness-app-for-hrv-in-athlytic

I put both accounts side by side here: https://tryrefresher.app/apple-watch-breathing-heart-rate. I make Refresher, a breathing app. If you update the article, a link to the comparison would help readers who meet both claims.

### 4. The Sunrise Digest
Subject: For the next breathing-app test

Your line about iBreathe, that someone who already knows the pattern just needs a timer that works, describes the person I build for.

I make Refresher, a breathing pacer for iPhone and Apple Watch. Box is fixed at 4-4-4-4 and 4-7-8 stays 4-7-8, because the ratio is the method. You change the rounds. Box, 4-7-8 and coherent breathing are free, with no account and no ads. Other parts are Premium.

I've read your ethics page and I'm not offering anything for coverage. If you retest the category, I'd like it to be in the pile, including for what it gets wrong: https://tryrefresher.app

### 5. ToolMenu (form text)
A breathing timer for iPhone and Apple Watch, for people who already know the technique they want. Box, 4-7-8 and coherent breathing are free, with no account and no ads. With an Apple Watch it shows heart rate before and after a session. I make it.

### 6. iphone-ticker.de
Betreff: Atem-App für iPhone und Apple Watch, mit Puls vorher und nachher

Hallo Nicolas,

ich habe deine beiden Artikel zu Calmaria gelesen. Ich entwickle Refresher, einen Atemtaktgeber für iPhone und Apple Watch, mit deutscher Oberfläche.

Box-Atmung, 4-7-8 und kohärentes Atmen sind kostenlos, ohne Konto und ohne Werbung. Weitere Funktionen gehören zu Premium. Mit Apple Watch zeigt die App den Puls vor und nach der Sitzung. Einen HRV-Wert pro Sitzung zeigt sie bewusst nicht: Die Watch misst dafür am Tag zu selten.

Falls das für eure Leser passt, hier steht mehr: https://tryrefresher.app/de/box-atmung-app
