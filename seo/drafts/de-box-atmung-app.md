---
slug: de/box-atmung-app
final_url: https://tryrefresher.app/de/box-atmung-app
keyword: Box-Atmung App
locale: de
intent: how-to / product-page (technique page)
serp_format: "Gesucht 2026-10-24/26 (de): store listings and aggregators (BoxMind, Calma, AtemFlow Studio), fitbook.de Quadratatmung Anleitung, familie.de, utopia.de, kuechenfibel FAQ, nj.gov PDF (EN). No German brand page explains the technique with its pacer. Format: product/technique page ~900-1,200 words, HowTo + FAQPage."
angle: "A German product page for the fixed 4-4-4-4 pacer: the pattern is the technique, so no phase slider; round count is the user's; Watch heart rate before/after."
author: Yauheni Malashchytski (developer of Refresher)
datePublished: 2026-10-26
judge: "81 PASS (2026-10-26, fresh subagent; fixes applied)"
sources:
  - url: https://health.clevelandclinic.org/box-breathing-benefits
    supports: "(verified 2026-09-02, seo/published.md register) alternative names incl. square breathing; 'employed by the United States Navy SEALs'; three to four rounds, once or twice a day; don't strain"
  - url: https://www.fitbook.de/mind-body/quadratatmung-box-breathing-anleitung
    supports: "(3 Dec 2025, Nuno Alves) 'Box Breathing bzw. Quadratatmung'; steps 4 s in, 4 hold, 4 out, 4 hold; 'Idealerweise wird die Quadratatmung etwa fünf Minuten lang ausgeführt'"
product_facts_used:
  note: "Quoted from seo/product.md and the repo's copy rules so the judge can check without the files."
  items:
    - "Platforms: 'iOS: yes, 18.0+. iPhone and iPad'; 'watchOS: yes, 10.0+, a companion Watch app... runs a session without the phone in range. Never call it standalone.'"
    - "Techniques: 'Box 4 · 4 · 4 · 4, default rounds 18, configurable: rounds only'; 'Coherent 5.5 in · 5.5 out, default 27, configurable inhale/exhale 3–10 s'"
    - "'Box, 4-7-8 and coherent are free from the start and never level-gated.' 'Rounds: 1 to 200... Defaults: box 18 (4:48), coherent 27 (4:57). Round count is free for everyone.'"
    - "'Coherent pace: 3 to 10 s per phase, 0.5 s steps, one slider drives both. Free for the first 5 qualifying sessions, then Premium. Free users run at 5.5.'"
    - "'Builder: premium only'. 'Adjustable hold on 4-7-8 or Box' DOES NOT EXIST."
    - "'Heart rate before and after a session, with the delta rendered on the completion screen. Produced from Apple Watch samples; an iPhone alone cannot measure it, and heartRateTrackingEnabled defaults off. Absent data renders as silence, never as a zero.'"
    - "'HRV as a 30-day TREND, not a delta'; only sanctioned sentence 'see your HRV alongside the days you practise'; 'The completion card shows the latest HRV reading from Apple Health with its date, never a session delta.'"
    - "'Voice guidance that counts each phase, in the user's language, and switchable off entirely.'"
    - "'HealthKit mindfulness-minute logging'"
    - "Free tier is counted by qualifying session (>=60 s)."
    - "Visualizations: free tier includes 'the circle and breath-wave visualizations'; the pacer is a shape that expands on the inhale and contracts on the exhale (as on the live English technique pages, verified against the app)."
    - "Experience (Heart rate delta): 'The completion card needs both endpoints and at least three samples, or it omits the row rather than showing a number built on noise. Tracking is a separate switch from HealthKit permission and starts off.'"
    - "Paid: '7-day free trial'. Never: prices, ratings, causal HRV (improve/optimize/boost HRV, any language), medical terms, 'guided', 'journey', 'coach', 'practice' as a noun, 'routine', inventory counts, zero-ceremony install, 'two minutes' never 'four', a closer that echoes the lede, em dashes, 'unlimited'."
experience_quoted:
  - "Box. I fixed box at 4-4-4-4 and left no slider for the phases. The pattern is the technique; a 3-5-3-5 'box' is something else. What you can change is the round count, 1 to 200, and the default is 18 because 18 × 16 s lands at 4:48, close to five minutes without pretending to be exactly five."
siblings: "Same-locale siblings only (the layout resolves siblings in the page's locale); these are the first two de pages, so each links to the other."
schema: "TechniqueLayout emits MobileApplication, FAQPage (from faqs), HowTo (from howTo), BreadcrumbList; H1 = query prop; self-canonical, html lang de-DE, no hreflang."
---

## Page source (src/pages/de/box-atmung-app.astro)
---
import TechniqueLayout from '../../layouts/TechniqueLayout.astro';
---

<TechniqueLayout
  slug="box-atmung-app"
  locale="de"
  technique="box"
  crumb="Box-Atmung"
  query="Box-Atmung App"
  title="Box-Atmung App mit festem 4-4-4-4-Takt"
  description="Box-Atmung App für iPhone und Apple Watch: vier Sekunden ein, halten, aus, halten, auf die Sekunde getaktet, mit deiner Herzfrequenz vor und nach der Sitzung."
  lede="Vier Sekunden ein. Vier anhalten. Vier aus. Vier anhalten. In Refresher dauert jede Phase genau vier Sekunden, so viele Runden, wie du einstellst."
  answer="Refresher ist eine Box-Atmung-App für iPhone, iPad und Apple Watch. Sie taktet das Muster 4-4-4-4 sichtbar, eine Phase nach der anderen, so viele Runden, wie du willst. Box ist ab der ersten Sitzung kostenlos. Mit einer Apple Watch und eingeschalteter Herzfrequenzmessung, die anfangs aus ist, siehst du nach der Sitzung, wie sich deine Herzfrequenz verändert hat. Die Minuten landen in Apple Health."
  sections={[
    {
      h2: 'Was Box-Atmung ist',
      paras: [
        "Box-Atmung ist ein einziges Muster: vier Sekunden einatmen, vier Sekunden die Luft anhalten, vier Sekunden ausatmen, vier Sekunden mit leerer Lunge anhalten. Die vier gleichen Seiten ergeben das Quadrat, deshalb heißt die Technik auf Deutsch auch Quadratatmung. Im Englischen sagt man Box Breathing oder Square Breathing. Gemeint ist immer dasselbe.",
        "Bei der Box hältst du nach dem Einatmen und nach dem Ausatmen an. Darin unterscheidet sie sich vom kohärenten Atmen, bei dem du gar nicht anhältst, und von 4-7-8, bei dem du nur einmal anhältst und dann doppelt so lange ausatmest.",
        "Fast jeder Artikel über Box-Atmung beginnt mit den Navy SEALs. Die Cleveland Clinic beschreibt die Technik tatsächlich als von ihnen genutzt. Nützlicher ist etwas anderes: Bis vier zählen kannst du auch dann noch, wenn du aufgeregt bist.",
      ],
    },
    {
      h2: 'Wie Refresher die Box taktet',
      paras: [
        "Der Taktgeber ist eine Form, die beim Einatmen wächst, stillsteht, beim Ausatmen schrumpft und wieder stillsteht. Du schaust hin und atmest mit. Im Kopf mitzählen musst du nicht, die App hält den Takt.",
        "Jede Phase dauert vier Sekunden und bleibt dabei. Einstellen kannst du die Zahl der Runden, von 1 bis 200, kostenlos. Standard sind 18 Runden, das sind 4:48 Minuten. Für zwei Minuten reichen sieben bis acht Runden. Eine Stimme kann die Phasen in deiner Sprache ansagen, oder du schaltest sie ab und atmest nur nach der Form.",
        "Auf der Apple Watch läuft die Sitzung am Handgelenk. Ist die Herzfrequenzmessung in den Einstellungen eingeschaltet, behält die App den ersten und den letzten Wert der Sitzung. Die Differenz steht auf dem Abschlussbildschirm. Fehlen Anfangs- oder Endwert oder gibt es zu wenige Messpunkte, lässt die App die Zeile weg und zeigt nie eine Null.",
      ],
      aside: [
        "Box habe ich auf 4-4-4-4 festgelegt und keinen Regler für die Phasen eingebaut. Das Muster ist die Technik. Eine Box mit 3-5-3-5 ist eine andere Technik mit geliehenem Namen. Verstellen kannst du die Rundenzahl, und der Standard liegt bei 18, weil 18 Runden zu je 16 Sekunden 4:48 ergeben: knapp fünf Minuten, ohne so zu tun, als wären es genau fünf.",
        "Ein eigenes Verhältnis baust du im Builder, der zu Premium gehört. Box bleibt Box.",
      ],
    },
    {
      h2: 'Wann Box-Atmung passt',
      paras: [
        "Vor etwas, für das du einen klaren Kopf brauchst: ein Termin, ein Anruf, den du schon zu lange aufschiebst, die Minute vor einem Vortrag. Das Muster ist kurz genug für die Kaffeeküche und vorbei, bevor es jemand merkt.",
        "Drei bis vier Runden, ein- oder zweimal am Tag, sind die übliche Empfehlung, dazu der Rat, sich nicht zu verkrampfen. FITBOOK schlägt etwa fünf Minuten am Stück vor, das entspricht ungefähr dem Standard in Refresher. Ist dir die Sitzung zu lang, nimm weniger Runden. Die Box selbst bleibt bei vier Sekunden.",
      ],
    },
  ]}
  howTo={{
    name: 'Box-Atmung mit einem Taktgeber',
    description: 'Eine Runde Box-Atmung besteht aus vier Phasen zu je vier Sekunden. Refresher taktet jede Phase und zählt die Runden.',
    totalTime: 'PT4M48S',
    steps: [
      { name: 'Einatmen', seconds: 4, text: 'Atme durch die Nase ein, während die Form wächst. Füllen, nicht pressen.' },
      { name: 'Anhalten', seconds: 4, text: 'Lunge voll, die Form steht still. Der Hals bleibt locker.' },
      { name: 'Ausatmen', seconds: 4, text: 'Lass die Luft raus, während die Form schrumpft. Vier Sekunden, ohne Hast am Ende.' },
      { name: 'Anhalten', seconds: 4, text: 'Lunge leer. Diese Phase lassen viele aus, wenn sie im Kopf zählen. Die App lässt sie nicht aus.' },
      { name: 'Wiederholen', text: 'Die App zählt die Runden und beendet die Sitzung. Zwischen den Runden tippst du nichts an.' },
    ],
  }}
  faqs={[
    {
      q: 'Gibt es eine kostenlose Box-Atmung App?',
      a: 'In Refresher ist Box ab der ersten Sitzung und dauerhaft kostenlos, ohne Level-Sperre. Auch die Rundenzahl stellst du kostenlos ein. Der Builder für eigene Muster gehört zu Premium, das du 7 Tage kostenlos testen kannst.',
    },
    {
      q: 'Ist Box-Atmung dasselbe wie Quadratatmung?',
      a: 'Ja. Quadratatmung, Box Breathing und Square Breathing meinen dasselbe Muster 4-4-4-4: vier Sekunden ein, vier halten, vier aus, vier halten. In Refresher heißt es Box.',
    },
    {
      q: 'Wie lange sollte ich Box-Atmung machen?',
      a: 'Drei bis vier Runden ein- oder zweimal am Tag sind eine übliche Empfehlung, manche Anleitungen nennen fünf Minuten. In Refresher sind 18 Runden der Standard, 4:48 Minuten. Zwei Minuten sind sieben bis acht Runden.',
    },
    {
      q: 'Kann ich die Sekunden bei der Box-Atmung ändern?',
      a: 'Nein. In Refresher bleibt Box bei 4-4-4-4, nur die Rundenzahl bestimmst du. Ein anderes Verhältnis baust du mit dem Builder, der zu Premium gehört.',
    },
    {
      q: 'Funktioniert der Taktgeber auf der Apple Watch?',
      a: 'Ja. Refresher hat eine eigene Watch-App, mit der du eine Sitzung auch ohne iPhone in Reichweite machst. Die Herzfrequenz am Anfang und am Ende misst die Watch, weil ein iPhone keinen Sensor dafür hat. Die Messung schaltest du in den Einstellungen ein, anfangs ist sie aus.',
    },
  ]}
  siblings={[
    { slug: 'kohaerentes-atmen', anchor: 'Kohärentes Atmen mit 5,5 Sekunden ein und aus, ganz ohne Haltephase' },
  ]}
  sources={[
    { url: 'https://health.clevelandclinic.org/box-breathing-benefits', supports: 'die Bezeichnung Square Breathing, die Beschreibung als von den Navy SEALs genutzt, drei bis vier Runden ein- oder zweimal am Tag, der Rat, sich nicht zu verkrampfen' },
    { url: 'https://www.fitbook.de/mind-body/quadratatmung-box-breathing-anleitung', supports: 'der deutsche Name Quadratatmung, die Schritte 4-4-4-4 und die Empfehlung von etwa fünf Minuten (3. Dezember 2025)' },
  ]}
  closeH2="18 Runden. 4:48 Minuten."
  closeP="Der Taktgeber zählt die Runden, du atmest. Mit der Apple Watch siehst du danach deine Herzfrequenz vorher und nachher. Bis zu 200 Runden, wenn du mehr willst."
/>
