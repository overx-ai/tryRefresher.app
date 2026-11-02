---
slug: es/respiracion-coherente
final_url: https://tryrefresher.app/es/respiracion-coherente
keyword: respiración coherente
locale: es
intent: how-to / product-page (technique page)
serp_format: "Buscado el 2026-11-02 (es): Tua Saúde (noticia), BBC Mundo vía teletica (2020, respirar más despacio), páginas en inglés (blackroll, dsebastien, declutterthemind timer), un proyecto finlandés. Informativo y escaso; ninguna página en español une el ritmo de 5,5 s con un marcador. Formato: página de técnica de ~900-1.200 palabras, HowTo + FAQ."
angle: "Explicar el ritmo 5,5/5,5 y por qué 5,5 o 6 (Lehrer y Gevirtz), luego el marcador que sostiene el ritmo; honesto sobre lo que muestra la app (pulso antes/después con Apple Watch, VFC solo como tendencia de 30 días)."
author: Yauheni Malashchytski (developer of Refresher)
datePublished: 2026-11-02
judge: "89 PASS (2026-11-02, fresh subagent; fixes applied)"
sources:
  - url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4104929/
    supports: "Lehrer & Gevirtz 2014: 'This frequency varied from individual to individual, but was ~0.1 Hz'; 'refined the average frequency ... at about 0.09 Hz, or 5.5 breaths per minute'; 'approximately 0.1 Hz (six breaths per minute)'"
product_facts_used:
  note: "Quoted from seo/product.md and the repo's copy rules so the judge can check without the files."
  items:
    - "Platforms: 'iOS: yes, 18.0+. iPhone and iPad'; 'watchOS: yes, 10.0+, a companion Watch app... runs a session without the phone in range. Never call it standalone.'"
    - "Techniques: 'Box 4 · 4 · 4 · 4, default rounds 18, configurable: rounds only'; 'Coherent 5.5 in · 5.5 out, default 27, configurable inhale/exhale 3-10 s'. In-app Spanish names: 'Respiración Cuadrada', 'Respiración Coherente'."
    - "'Box, 4-7-8 and coherent are free from the start and never level-gated.' 'Rounds: 1 to 200... Defaults: box 18 (4:48), coherent 27 (4:57). Round count is free for everyone.'"
    - "'Coherent pace: 3 to 10 s per phase, 0.5 s steps, one slider drives both. Free for the first 5 qualifying sessions (>=60 s), then Premium. Free users run at 5.5.'"
    - "'Adjustable hold on 4-7-8 or Box' DOES NOT EXIST."
    - "'Heart rate before and after a session, with the delta rendered on the completion screen. Produced from Apple Watch samples; an iPhone alone cannot measure it, and heartRateTrackingEnabled defaults off. Absent data renders as silence, never as a zero.' The code keeps the first and last sample of the session window."
    - "'HRV as a 30-day TREND, not a delta' from Apple Health (HealthKit); sanctioned sentence 'see your HRV alongside the days you practise'; 'The completion card shows the latest HRV reading from Apple Health with its date, never a session delta.'"
    - "'Voice guidance that counts each phase, in the user's language, and switchable off entirely.'"
    - "The pacer is a shape that expands on the inhale and contracts on the exhale (holds: it stays still), as on the live technique pages."
    - "Paid: 'Premium', '7-day free trial'. Never: prices, ratings, causal HRV (improve/optimize/boost/raise HRV, any language, hedged or not), medical terms (cure, treat, therapy, anxiety, depression...), efficacy stated as fact, 'guided'/'guiada', 'journey', 'coach', 'practice'/'práctica' as a noun, 'routine'/'rutina', 'relax' as the lede, inventory counts, zero-ceremony install, 'two minutes' never 'four', a closer that echoes the lede, em dashes, 'unlimited'."
experience_quoted:
  - "Coherent. The default is 5.5 s in, 5.5 s out because Lehrer and Gevirtz put the average resonance frequency at about 5.5 breaths a minute, and the slider runs 3 to 10 s in half-second steps because resonance varies by person. The pace is the one phase setting I made adjustable, and it goes Premium after five sessions; the round count never does."
  - "HRV. Apple Watch writes a handful of SDNN samples a day, not a stream, so a before/after HRV number for one session can't be produced honestly. I refused to fake one. The app charts 30 days of HRV straight from HealthKit"
schema: "TechniqueLayout emits MobileApplication, FAQPage (from faqs), HowTo (from howTo), BreadcrumbList; H1 = query prop; byline and 7-day-trial CTA from the layout; self-canonical, html lang es, no hreflang."
siblings_note: "Same-locale siblings only (the layout resolves siblings in the page's locale and renders prose as plain text); these are the first two es pages, so each links to the other, as with the de pilot."
---

## Page source (src/pages/es/respiracion-coherente.astro)
---
import TechniqueLayout from '../../layouts/TechniqueLayout.astro';
---

<TechniqueLayout
  slug="respiracion-coherente"
  locale="es"
  technique="coherent"
  crumb="Respiración coherente"
  query="Respiración coherente"
  title="Respiración coherente: inhala 5,5 segundos, exhala 5,5"
  description="Respiración coherente: inhalar 5,5 segundos y exhalar otros 5,5, sin pausa. Cómo se hace, de dónde sale el 5,5 y cómo mantener el ritmo."
  lede="5,5 segundos para inhalar, 5,5 para exhalar y ninguna pausa entre medias. La técnica no tiene más secreto: lo difícil es no acelerarse."
  answer="La respiración coherente es respirar lento y regular: 5,5 segundos para inhalar y 5,5 para exhalar, sin retener el aire, por la nariz y sin forzar. Son unas 5,5 respiraciones por minuto. Refresher marca ese ritmo en iPhone, iPad y Apple Watch, gratis desde la primera sesión."
  sections={[
    {
      h2: 'En qué consiste',
      paras: [
        "Tiene solo dos fases, inhalar y exhalar, las dos igual de largas, normalmente 5,5 segundos. No hay retención en ningún momento. Cada respiración completa dura 11 segundos, así que en un minuto caben algo más de cinco.",
        "El número viene de los estudios sobre la llamada frecuencia de resonancia: un ritmo de respiración lento en el que la respiración y el pulso suben y bajan acompasados. En su revisión de 2014, Lehrer y Gevirtz cuentan que primero se situó en torno a 0,1 Hz, es decir, seis respiraciones por minuto, y que después se afinó a una media de unos 0,09 Hz, unas 5,5 respiraciones por minuto.",
        "Por eso vas a ver las dos cifras, seis y 5,5. Se refieren al mismo rango, y 5,5 es la media que dan Lehrer y Gevirtz. Ojo, que es un promedio: la frecuencia de resonancia cambia de una persona a otra, así que 5,5 segundos es un buen punto de partida y no una regla para todos.",
      ],
    },
    {
      h2: 'Por qué usar un marcador de ritmo',
      paras: [
        "Si cuentas de cabeza, en cuanto te distraes empiezas a ir más rápido sin darte cuenta. En la respiración coherente el ritmo es toda la técnica, así que tiene sentido dejarle la cuenta a la app.",
        "En Refresher sigues una figura que crece al inhalar y se encoge al exhalar, y la app lleva el ritmo. Una voz cuenta cada fase en tu idioma, o la quitas y respiras solo con la figura.",
        "Tú eliges cuántas rondas, de 1 a 200, y eso siempre es gratis. Por defecto son 27 rondas, que dan 4:57. Si solo tienes dos minutos, pon once rondas.",
      ],
      aside: [
        "Dejé el ritmo por defecto en 5,5 segundos para inhalar y 5,5 para exhalar porque Lehrer y Gevirtz sitúan la frecuencia de resonancia media en unas 5,5 respiraciones por minuto. Como cambia de una persona a otra, el control va de 3 a 10 segundos en pasos de medio segundo, y un único control mueve las dos fases para que sigan siendo iguales.",
        "Es el único ajuste de fases que hice configurable. Lo puedes usar sin Premium durante tus primeras cinco sesiones de al menos un minuto; después pasa a Premium y, sin él, respiras a 5,5 segundos. El número de rondas no se paga nunca.",
      ],
    },
    {
      h2: 'Con Apple Watch: pulso antes y después',
      paras: [
        "Si tienes un Apple Watch y activas la medición de frecuencia cardíaca, Refresher te enseña tu pulso al empezar y al terminar la sesión, con la diferencia en la pantalla final. Si falta algún dato, esa línea no aparece; nunca verás un cero inventado. El iPhone por sí solo no tiene sensor para esto, y la medición viene desactivada.",
        "Con una sola sesión no se puede sacar honestamente una variabilidad de la frecuencia cardíaca (VFC) de antes y otra de después: el Apple Watch solo guarda unas pocas muestras al día. Así que no me la invento. Lo que tienes es tu VFC de los últimos 30 días desde la app Salud, junto a los días en que respiraste con Refresher. La pantalla final enseña además tu última lectura de VFC en Salud, con su fecha.",
      ],
    },
    {
      h2: 'Cuándo y cuánto tiempo',
      paras: [
        "Como no tiene retenciones, la puedes hacer casi en cualquier sitio: en la mesa de trabajo, antes de dormir, en el tren. Con las rondas por defecto son casi cinco minutos seguidos.",
        "Ante cualquier molestia, respira menos hondo o para.",
      ],
    },
  ]}
  howTo={{
    name: 'Respiración coherente con un marcador de ritmo',
    description: 'Cada ronda tiene dos fases de 5,5 segundos. Refresher lleva el ritmo y cuenta las rondas.',
    totalTime: 'PT4M57S',
    steps: [
      { name: 'Siéntate', text: 'Espalda recta y hombros sueltos. Abre Refresher y elige Respiración Coherente.' },
      { name: 'Inhala', seconds: 5.5, text: 'Toma aire por la nariz mientras la figura crece. Con calma, sin llenarte al máximo.' },
      { name: 'Exhala', seconds: 5.5, text: 'Suelta el aire de forma uniforme mientras la figura se encoge. Sin pausa al final.' },
      { name: 'Repite', text: 'La app cuenta las rondas hasta llegar a las que elegiste.' },
    ],
  }}
  faqs={[
    {
      q: '¿Cómo se hace la respiración coherente?',
      a: 'Inhalas 5,5 segundos y exhalas 5,5 segundos, sin retener el aire. Salen unas 5,5 respiraciones por minuto. Mejor por la nariz y sin forzar. Con un marcador de ritmo no tienes que contar.',
    },
    {
      q: '¿Son 5,5 o 6 respiraciones por minuto?',
      a: 'Circulan las dos. La frecuencia de resonancia se describió primero en unas seis respiraciones por minuto y después se afinó a una media de unas 5,5. Cambia de una persona a otra, y por eso en Refresher el ritmo se ajusta en pasos de medio segundo.',
    },
    {
      q: '¿Cuánto tiempo hay que hacerla?',
      a: 'En Refresher, una sesión con las rondas por defecto dura 4:57. Si tienes menos tiempo, pon once rondas y serán unos dos minutos.',
    },
    {
      q: '¿La respiración coherente es gratis en Refresher?',
      a: 'Sí, desde la primera sesión, y el número de rondas también. El control del ritmo lo puedes usar sin Premium durante tus primeras cinco sesiones de al menos un minuto; después pasa a Premium. Premium tiene una prueba gratis de 7 días.',
    },
    {
      q: '¿Necesito un Apple Watch?',
      a: 'Para respirar, no. El pulso de antes y después solo lo mide el Apple Watch, porque el iPhone no tiene sensor para eso. Refresher tiene una app para el reloj con la que puedes empezar una sesión aunque el iPhone no esté cerca.',
    },
  ]}
  siblings={[
    { slug: 'respiracion-cuadrada', anchor: 'Respiración cuadrada, fija en 4-4-4-4' },
  ]}
  sources={[
    { url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4104929/', supports: 'Lehrer y Gevirtz 2014: la frecuencia de resonancia se situó en torno a 0,1 Hz (seis respiraciones por minuto) y después en una media de unas 5,5 por minuto; cambia de una persona a otra' },
  ]}
  closeH2="No cuentes. Sigue la figura."
  closeP="Abre Refresher, elige Respiración Coherente y respira con la figura. Hasta 200 rondas si quieres una sesión más larga."
/>
