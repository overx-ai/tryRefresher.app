---
slug: de/kohaerentes-atmen
final_url: https://tryrefresher.app/de/kohaerentes-atmen
keyword: kohärentes Atmen
locale: de
intent: how-to / product-page (technique page)
serp_format: "Gesucht am 2026-10-26 (de): Uni Würzburg PDF-Handout, IWW-Praxisangebot (Paywall, 'sechs Atemzüge in der Minute'), dsebastien concept page (EN), tredition book, adnaturam substack, blackroll (EN), Casio-Handbuch. Informational, thin, no German page pairs the technique with a pacer. Format: technique page ~900-1,200 words, HowTo + FAQ."
angle: "Explain the 5.5/5.5 rhythm and why 5.5 vs 6 (Lehrer & Gevirtz), then the pacer that keeps the tempo; honest about what the app shows (HR delta on Watch, HRV only as a 30-day trend)."
author: Yauheni Malashchytski (developer of Refresher)
datePublished: 2026-10-26
judge: "74 FAIL -> 84 PASS (2026-10-26, fresh subagents; fixes applied)"
sources:
  - url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4104929/
    supports: "Lehrer & Gevirtz 2014: 'This frequency varied from individual to individual, but was ∼0.1 Hz'; 'refined the average frequency ... at about 0.09 Hz, or 5.5 breaths per minute'; 'approximately 0.1 Hz (six breaths per minute)'"
  - url: https://www.iww.de/pp/perspektiven/praxisangebot-fuenf-atemzuege-zur-ruhe-die-wirkung-der-kohaerenten-atemtechnik-f172177
    supports: "(12.02.2026) 'Maximale Resonanz entsteht bei sechs Atemzügen in der Minute'"
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
    - "Visualizations: free tier includes 'the circle and breath-wave visualizations'; the pacer is a shape that expands on the inhale and contracts on the exhale (as on the live English technique pages, verified against the app)."
    - "Experience (Heart rate delta): 'The completion card needs both endpoints and at least three samples, or it omits the row rather than showing a number built on noise. Tracking is a separate switch from HealthKit permission and starts off.'"
    - "Paid: '7-day free trial'. Never: prices, ratings, causal HRV (improve/optimize/boost HRV, any language), medical terms, 'guided', 'journey', 'coach', 'practice' as a noun, 'routine', inventory counts, zero-ceremony install, 'two minutes' never 'four', a closer that echoes the lede, em dashes, 'unlimited'."
experience_quoted:
  - "Coherent. The default is 5.5 s in, 5.5 s out because Lehrer and Gevirtz put the average resonance frequency at about 5.5 breaths a minute, and the slider runs 3 to 10 s in half-second steps because resonance varies by person. The pace is the one phase setting I made adjustable, and it goes Premium after five sessions; the round count never does."
  - "HRV. ... a before/after HRV number for one session can't be produced honestly. I refused to fake one. The app charts 30 days of HRV straight from HealthKit"
siblings: "Same-locale siblings only (the layout resolves siblings in the page's locale); these are the first two de pages, so each links to the other."
schema: "TechniqueLayout emits MobileApplication, FAQPage (from faqs), HowTo (from howTo), BreadcrumbList; H1 = query prop; self-canonical, html lang de-DE, no hreflang."
---

## Page source (src/pages/de/kohaerentes-atmen.astro)
---
import TechniqueLayout from '../../layouts/TechniqueLayout.astro';
---

<TechniqueLayout
  slug="kohaerentes-atmen"
  locale="de"
  technique="coherent"
  crumb="Kohärentes Atmen"
  query="Kohärentes Atmen"
  title="Kohärentes Atmen: 5,5 Sekunden ein, 5,5 aus"
  description="Kohärentes Atmen heißt 5,5 Sekunden ein und 5,5 Sekunden aus, ohne Pause. So funktioniert die Technik und so hält ein Taktgeber das Tempo für dich."
  lede="5,5 Sekunden ein, 5,5 Sekunden aus, ohne Pause dazwischen. Das sind etwa fünfeinhalb Atemzüge pro Minute, und mehr steckt in der Technik nicht. Schwierig ist nur, das Tempo zu halten."
  answer="Kohärentes Atmen ist langsames, gleichmäßiges Atmen: 5,5 Sekunden ein, 5,5 Sekunden aus, ohne den Atem anzuhalten, ruhig durch die Nase und ohne zu pressen. Das ergibt etwa 5,5 Atemzüge pro Minute. Refresher hält dieses Tempo als Taktgeber auf iPhone, iPad und Apple Watch, kostenlos ab der ersten Sitzung."
  sections={[
    {
      h2: 'Was kohärentes Atmen ist',
      paras: [
        "Kohärentes Atmen hat zwei Phasen: einatmen, ausatmen. Beide sind gleich lang, meist 5,5 Sekunden, und dazwischen hältst du die Luft nicht an. Ein Atemzug dauert damit 11 Sekunden, eine Minute hat gut fünf davon.",
        "Die Zahl 5,5 stammt aus der Forschung zur sogenannten Resonanzfrequenz, einem langsamen Atemtempo, bei dem Atmung und Herzschlag im Gleichtakt schwingen. Lehrer und Gevirtz (2014) beschreiben, dass die Resonanzfrequenz zuerst auf etwa 0,1 Hz geschätzt wurde, also sechs Atemzüge pro Minute. Später kamen sie im Mittel auf etwa 0,09 Hz, also rund 5,5 Atemzüge. Ein Fachbeitrag bei IWW (2026) nennt sechs Atemzüge pro Minute. Beide Zahlen beschreiben denselben Bereich, 5,5 ist der spätere Durchschnittswert.",
        "Entscheidend ist das Wort durchschnittlich: Die Resonanzfrequenz unterscheidet sich von Mensch zu Mensch. 5,5 Sekunden sind ein guter Startwert, keine Regel für jeden.",
      ],
    },
    {
      h2: 'Warum ein Taktgeber hilft',
      paras: [
        "Wer im Kopf mitzählt, wird leicht schneller, sobald die Gedanken abschweifen. Beim kohärenten Atmen ist das Tempo aber die ganze Technik, also lohnt es sich, das Zählen der App zu überlassen.",
        "In Refresher folgst du einer Form, die beim Einatmen wächst und beim Ausatmen schrumpft, und die App hält den Takt. Eine Stimme kann die Phasen in deiner Sprache ansagen, oder du schaltest sie ab und atmest einfach mit der Form mit.",
        "Die Zahl der Runden stellst du selbst ein, von 1 bis 200, und das bleibt kostenlos. Standard sind 27 Runden, das ergibt 4:57 Minuten. Für zwei Minuten stellst du elf Runden ein.",
      ],
      aside: [
        "Die Voreinstellung habe ich auf 5,5 Sekunden ein und 5,5 Sekunden aus gesetzt, weil Lehrer und Gevirtz die durchschnittliche Resonanzfrequenz bei etwa 5,5 Atemzügen pro Minute ansetzen. Weil sie sich aber von Person zu Person unterscheidet, läuft der Regler von 3 bis 10 Sekunden in Schritten von einer halben Sekunde. Ein Regler steuert beide Phasen, damit sie gleich lang bleiben.",
        "Das Tempo ist die einzige Phaseneinstellung, die ich verstellbar gemacht habe. In deinen ersten fünf Sitzungen von mindestens einer Minute kannst du sie ohne Premium nutzen, danach gehört sie zu Premium. Ohne Premium atmest du im 5,5-Sekunden-Takt. Die Rundenzahl bleibt immer kostenlos.",
      ],
    },
    {
      h2: 'Mit Apple Watch: Herzfrequenz vor und nach der Sitzung',
      paras: [
        "Mit einer Apple Watch und eingeschalteter Herzfrequenzmessung zeigt Refresher deine Herzfrequenz vor und nach der Sitzung, die Differenz steht auf dem Abschlussbildschirm. Fehlt ein Wert, lässt die App die Zeile weg und zeigt nie eine Null. Ein iPhone allein hat keinen Sensor dafür, und die Messung ist anfangs ausgeschaltet.",
        "Eine HRV-Zahl vor und nach einer einzelnen Sitzung lässt sich nicht seriös berechnen, also habe ich keine erfunden. Stattdessen siehst du deine HRV über 30 Tage aus Apple Health, zusammen mit den Tagen, an denen du geübt hast. Der Abschlussbildschirm zeigt dazu den letzten HRV-Wert aus Apple Health mit Datum.",
      ],
    },
    {
      h2: 'Wann und wie lange',
      paras: [
        "Kohärentes Atmen hat keine Haltephase, deshalb lässt es sich fast überall machen: am Schreibtisch, vor dem Einschlafen, im Zug. Mit den voreingestellten Runden sind es knapp fünf Minuten am Stück.",
        "Fühlt es sich unangenehm an, atme weniger tief oder hör auf. Refresher ist ein Taktgeber für die Atmung, mehr nicht.",
      ],
    },
  ]}
  howTo={{
    name: 'Kohärentes Atmen mit einem Taktgeber',
    description: 'Eine Runde besteht aus zwei Phasen von je 5,5 Sekunden. Refresher hält das Tempo und zählt die Runden.',
    totalTime: 'PT4M57S',
    steps: [
      { name: 'Hinsetzen', text: 'Aufrecht, die Schultern locker. Öffne Refresher und wähle Kohärent.' },
      { name: 'Einatmen', seconds: 5.5, text: 'Atme durch die Nase ein, während die Form wächst. Ruhig, nicht so tief wie möglich.' },
      { name: 'Ausatmen', seconds: 5.5, text: 'Lass die Luft gleichmäßig raus, während die Form schrumpft. Ohne Pause danach.' },
      { name: 'Wiederholen', text: 'Die App zählt die Runden mit, bis die eingestellte Zahl erreicht ist.' },
    ],
  }}
  faqs={[
    {
      q: 'Wie funktioniert kohärentes Atmen?',
      a: 'Du atmest 5,5 Sekunden ein und 5,5 Sekunden aus, ohne den Atem anzuhalten. Das ergibt etwa 5,5 Atemzüge pro Minute. Am besten durch die Nase und ohne zu pressen. Ein Taktgeber hält das Tempo, damit du nicht mitzählen musst.',
    },
    {
      q: 'Sind es 5,5 oder 6 Atemzüge pro Minute?',
      a: 'Beide Zahlen sind im Umlauf. Die Resonanzfrequenz wurde zuerst bei etwa sechs Atemzügen pro Minute beschrieben und später auf durchschnittlich etwa 5,5 präzisiert. Sie unterscheidet sich von Person zu Person, deshalb lässt sich das Tempo in Refresher in halben Sekunden verstellen.',
    },
    {
      q: 'Wie lange sollte ich kohärent atmen?',
      a: 'In Refresher dauert eine Sitzung mit den voreingestellten Runden 4:57 Minuten. Wer weniger Zeit hat, stellt elf Runden ein, das sind etwa zwei Minuten.',
    },
    {
      q: 'Ist kohärentes Atmen in Refresher kostenlos?',
      a: 'Ja, von der ersten Sitzung an, und die Rundenzahl ebenfalls. Den Tempo-Regler kannst du in deinen ersten fünf Sitzungen von mindestens einer Minute ohne Premium nutzen, danach gehört er zu Premium. Premium kannst du 7 Tage kostenlos testen.',
    },
    {
      q: 'Brauche ich eine Apple Watch?',
      a: 'Für die Atmung nicht. Die Herzfrequenz vor und nach der Sitzung misst nur die Apple Watch, weil ein iPhone keinen Sensor dafür hat. Zu Refresher gehört eine Watch-App, mit der du eine Sitzung auch ohne iPhone in Reichweite startest.',
    },
  ]}
  siblings={[
    { slug: 'box-atmung-app', anchor: 'Box-Atmung mit festem 4-4-4-4-Takt' },
  ]}
  sources={[
    { url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4104929/', supports: 'Lehrer und Gevirtz 2014: Resonanzfrequenz etwa 0,1 Hz (sechs Atemzüge pro Minute), später auf durchschnittlich etwa 5,5 Atemzüge pro Minute präzisiert, von Person zu Person verschieden' },
    { url: 'https://www.iww.de/pp/perspektiven/praxisangebot-fuenf-atemzuege-zur-ruhe-die-wirkung-der-kohaerenten-atemtechnik-f172177', supports: 'deutscher Fachartikel (12.02.2026): maximale Resonanz bei sechs Atemzügen in der Minute' },
  ]}
  closeH2="Zähl nicht mit. Folge der Form."
  closeP="Öffne Refresher, wähle Kohärent und atme mit. Bis zu 200 Runden, wenn du länger willst."
/>
