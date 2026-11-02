---
slug: es/respiracion-cuadrada
final_url: https://tryrefresher.app/es/respiracion-cuadrada
keyword: respiración cuadrada / respiración de caja
locale: es
intent: how-to / product-page (technique page)
serp_format: "Buscado el 2026-11-02 (es): Selecciones México (box breathing, 4-4-4-4), Canal26, BioBioChile (2021), Medical News Today ES ('respiración del cuadrilátero'), wwwhatsnew (2025), un PDF de CHS, havenofheat (guía de sauna); en la investigación del 2026-10-26 también iProfesional y Moncloa. Divulgación de bienestar con el ángulo de estrés y ansiedad; ninguna página une el patrón con un marcador al segundo. Formato: página de técnica ~800-1.100 palabras, HowTo + FAQ."
angle: "Cómo se hace el 4-4-4-4, los nombres que circulan en español, y la decisión de dejar las fases fijas; evitar el encuadre de ansiedad."
author: Yauheni Malashchytski (developer of Refresher)
datePublished: 2026-11-02
judge: "80 PASS (2026-11-02, fresh subagent; fixes applied)"
sources:
  - url: https://health.clevelandclinic.org/box-breathing-benefits
    supports: "fetched 2026-09-02 (register in seo/published.md): alternative name square breathing; 'employed by the United States Navy SEALs'; three to four rounds, once or twice a day; don't strain"
  - url: https://selecciones.com.mx/box-breathing-reducir-el-estres-y-mejorar-el-rendimiento/
    supports: "searched 2026-11-02: 'Inhalar durante 4 segundos, contener la respiración durante 4 segundos, exhalar durante 4 segundos y mantener los pulmones vacíos durante otros 4 segundos'"
  - url: https://www.medicalnewstoday.com/articles/es/respiracion-del-cuadrilatero
    supports: "searched 2026-11-02: the Spanish name 'respiración del cuadrilátero' for box breathing"
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
  - "Box. I fixed box at 4-4-4-4 and left no slider for the phases. The pattern is the technique; a 3-5-3-5 'box' is something else. What you can change is the round count, 1 to 200, and the default is 18 because 18 x 16 s lands at 4:48, close to five minutes without pretending to be exactly five."
  - "Heart rate delta. The completion card needs both endpoints and at least three samples, or it omits the row rather than showing a number built on noise. Tracking is a separate switch from HealthKit permission and starts off."
schema: "TechniqueLayout emits MobileApplication, FAQPage (from faqs), HowTo (from howTo), BreadcrumbList; H1 = query prop; byline and 7-day-trial CTA from the layout; self-canonical, html lang es, no hreflang."
siblings_note: "Same-locale siblings only (the layout resolves siblings in the page's locale and renders prose as plain text); these are the first two es pages, so each links to the other, as with the de pilot."
---

## Page source (src/pages/es/respiracion-cuadrada.astro)
---
import TechniqueLayout from '../../layouts/TechniqueLayout.astro';
---

<TechniqueLayout
  slug="respiracion-cuadrada"
  locale="es"
  technique="box"
  crumb="Respiración cuadrada"
  query="Respiración cuadrada"
  title="Respiración cuadrada (de caja): 4-4-4-4 al segundo"
  description="Respiración cuadrada o de caja: cuatro segundos para inhalar, retener, exhalar y retener. Cómo se hace y cómo marcar el ritmo en iPhone y Apple Watch."
  lede="Cuatro segundos inhalando. Cuatro reteniendo. Cuatro exhalando. Cuatro con los pulmones vacíos. En Refresher cada fase dura exactamente cuatro segundos y no se mueve."
  answer="La respiración cuadrada, también llamada respiración de caja o box breathing, consiste en cuatro fases de cuatro segundos: inhalar, retener el aire, exhalar y retener con los pulmones vacíos. Refresher marca ese 4-4-4-4 en iPhone, iPad y Apple Watch, gratis desde la primera sesión, durante las rondas que elijas."
  sections={[
    {
      h2: 'Qué es la respiración cuadrada',
      paras: [
        "Es un solo patrón con cuatro lados iguales, como un cuadrado. De ahí los nombres que vas a encontrar: respiración cuadrada, respiración de caja, respiración del cuadrilátero o, en inglés, box breathing. Todos son lo mismo.",
        "Lo que la distingue son las dos retenciones, una con los pulmones llenos y otra con los pulmones vacíos. La respiración coherente no tiene ninguna, y la 4-7-8 tiene una sola y una exhalación el doble de larga que la inhalación.",
        "Muchos artículos empiezan por los Navy SEALs, y la Cleveland Clinic cuenta que la usan. A mí me parece más útil otra cosa: contar hasta cuatro sigue siendo fácil cuando estás nervioso.",
      ],
    },
    {
      h2: 'Cómo marca Refresher el cuadrado',
      paras: [
        "El marcador es una figura que crece al inhalar, se queda quieta, se encoge al exhalar y vuelve a quedarse quieta. Miras y respiras con ella, sin contar de cabeza: la app lleva el ritmo.",
        "Cada fase dura cuatro segundos y no cambia. Lo que eliges es el número de rondas, gratis. Para unos dos minutos bastan siete u ocho. Una voz puede ir diciendo cada fase en tu idioma, o la quitas y respiras solo con la figura.",
        "En el Apple Watch la sesión va en la muñeca. Si activas la medición de frecuencia cardíaca, la app se queda con el primer y el último valor de la sesión y te enseña la diferencia en la pantalla final. Si falta el de inicio o el de final, o hay pocas muestras, esa línea no aparece; nunca verás un cero.",
      ],
      aside: [
        "Dejé la caja fija en 4-4-4-4 y no puse ningún control para cambiar las fases. El patrón es la técnica: una caja de 3-5-3-5 ya es otra cosa. Lo que sí cambias es el número de rondas, y por defecto son 18 porque 18 rondas de 16 segundos dan 4:48, cerca de cinco minutos sin fingir que son cinco exactos.",
      ],
    },
    {
      h2: 'Cuándo y cuánto tiempo',
      paras: [
        "La Cleveland Clinic habla de tres o cuatro rondas, una o dos veces al día, y de no forzar las retenciones. Refresher arranca en 18 rondas y puedes bajarlas hasta una, así que si quieres seguir esa pauta, pon cuatro.",
        "Si la retención con los pulmones vacíos se te hace larga, no aprietes: para la sesión y respira con normalidad. Las fases no se acortan, porque el patrón es justo ese.",
        "Solo necesitas sentarte un momento, así que vale casi cualquier sitio: antes de una reunión, en la mesa de trabajo o antes de dormir.",
        "Si notas mareo, para y respira con normalidad.",
      ],
    },
  ]}
  howTo={{
    name: 'Respiración cuadrada con un marcador de ritmo',
    description: 'Cada ronda tiene cuatro fases de cuatro segundos. Refresher lleva el ritmo y cuenta las rondas.',
    totalTime: 'PT4M48S',
    steps: [
      { name: 'Siéntate', text: 'Espalda recta y hombros sueltos. Abre Refresher y elige Respiración Cuadrada.' },
      { name: 'Inhala', seconds: 4, text: 'Toma aire por la nariz mientras la figura crece.' },
      { name: 'Retén', seconds: 4, text: 'Mantén el aire mientras la figura se queda quieta, sin apretar.' },
      { name: 'Exhala', seconds: 4, text: 'Suelta el aire mientras la figura se encoge.' },
      { name: 'Retén con los pulmones vacíos', seconds: 4, text: 'Espera sin aire antes de la siguiente ronda.' },
      { name: 'Repite', text: 'La app repite el ciclo durante las rondas que elegiste, 18 por defecto.' },
    ],
  }}
  faqs={[
    {
      q: '¿Cómo se hace la respiración cuadrada?',
      a: 'Inhalas cuatro segundos, retienes cuatro, exhalas cuatro y esperas cuatro con los pulmones vacíos. Luego repites. Con un marcador de ritmo no tienes que contar: sigues la figura.',
    },
    {
      q: '¿Respiración cuadrada y respiración de caja son lo mismo?',
      a: 'Sí. Respiración cuadrada, de caja, del cuadrilátero y box breathing son nombres del mismo patrón 4-4-4-4 con dos retenciones.',
    },
    {
      q: '¿Puedo cambiar los segundos de cada fase?',
      a: 'En Refresher, no. Las fases son fijas en cuatro segundos porque ese patrón es la técnica. Lo que eliges es el número de rondas, de 1 a 200, siempre gratis.',
    },
    {
      q: '¿Cuánto dura una sesión?',
      a: 'Con las 18 rondas por defecto, 4:48 minutos. Para unos dos minutos, pon siete u ocho rondas.',
    },
    {
      q: '¿Necesito un Apple Watch?',
      a: 'Para respirar, no. La frecuencia cardíaca de antes y después solo la mide el Apple Watch, porque el iPhone no tiene sensor para eso, y la medición viene desactivada hasta que la activas.',
    },
  ]}
  siblings={[
    { slug: 'respiracion-coherente', anchor: 'Respiración coherente, 5,5 segundos sin retenciones' },
  ]}
  sources={[
    { url: 'https://health.clevelandclinic.org/box-breathing-benefits', supports: 'el nombre square breathing, la técnica descrita como usada por los Navy SEALs, de tres a cuatro rondas una o dos veces al día y no forzar' },
    { url: 'https://selecciones.com.mx/box-breathing-reducir-el-estres-y-mejorar-el-rendimiento/', supports: 'el patrón en español: inhalar cuatro segundos, contener cuatro, exhalar cuatro y mantener los pulmones vacíos otros cuatro' },
    { url: 'https://www.medicalnewstoday.com/articles/es/respiracion-del-cuadrilatero', supports: 'el nombre respiración del cuadrilátero para el mismo patrón' },
  ]}
  closeH2="Cuatro lados iguales. Siempre cuatro segundos."
  closeP="Abre Refresher, elige Respiración Cuadrada y respira con la figura. Si quieres más, sube las rondas hasta 200."
/>
