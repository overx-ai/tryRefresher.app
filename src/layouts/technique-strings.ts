import type { TECHNIQUES } from '../app';
import type { Locale } from '../site-pages';

type Access = (typeof TECHNIQUES)[number]['access'];

export interface TechniqueStrings {
  breadcrumbLabel: string;
  home: string;
  byline: (developer: string, app: string) => string;
  minRead: (minutes: number) => string;
  developerOf: (developer: string, app: string) => string;
  freeTrial: string;
  closeFine: string;
  specTechnique: string;
  specPattern: string;
  specPhases: string;
  specAccess: string;
  access: Record<Access, string>;
  stepByStep: string;
  seconds: string;
  defaultTools: string[];
  questions: string;
  faqH2: string;
  alsoIn: string;
  everyTechnique: string;
  sources: string;
}

export const TECHNIQUE_STRINGS: Record<Locale, TechniqueStrings> = {
  en: {
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    byline: (developer, app) => `By ${developer}, developer of ${app}`,
    minRead: (minutes) => `${minutes} min read`,
    developerOf: (developer, app) => `${developer}, developer of ${app}`,
    freeTrial: '7-day free trial',
    closeFine: '7-day free trial · No ads · No account',
    specTechnique: 'Technique',
    specPattern: 'Pattern',
    specPhases: 'Phases',
    specAccess: 'Access',
    access: { Included: 'Included', Premium: 'Premium', '1 free try': '1 free try' },
    stepByStep: 'Step by step',
    seconds: 'seconds',
    defaultTools: ['Refresher for iPhone', 'Apple Watch, for the heart rate reading'],
    questions: 'Questions',
    faqH2: 'What people ask.',
    alsoIn: 'Also in Refresher',
    everyTechnique: 'Every technique, on one pacer',
    sources: 'Sources',
  },
  de: {
    breadcrumbLabel: 'Brotkrümelnavigation',
    home: 'Startseite',
    byline: (developer, app) => `Von ${developer}, Entwickler von ${app}`,
    minRead: (minutes) => `${minutes} Min. Lesezeit`,
    developerOf: (developer, app) => `${developer}, Entwickler von ${app}`,
    freeTrial: '7 Tage kostenlos testen',
    closeFine: '7 Tage kostenlos testen · Keine Werbung · Kein Konto',
    specTechnique: 'Technik',
    specPattern: 'Muster',
    specPhases: 'Phasen',
    specAccess: 'Zugang',
    access: { Included: 'Inklusive', Premium: 'Premium', '1 free try': '1 Gratis-Versuch' },
    stepByStep: 'Schritt für Schritt',
    seconds: 'Sekunden',
    defaultTools: ['Refresher für iPhone', 'Apple Watch, für die Herzfrequenzmessung'],
    questions: 'Fragen',
    faqH2: 'Was oft gefragt wird.',
    alsoIn: 'Außerdem in Refresher',
    everyTechnique: 'Alle Techniken im Überblick',
    sources: 'Quellen',
  },
  es: {
    breadcrumbLabel: 'Ruta de navegación',
    home: 'Inicio',
    byline: (developer, app) => `Por ${developer}, desarrollador de ${app}`,
    minRead: (minutes) => `${minutes} min de lectura`,
    developerOf: (developer, app) => `${developer}, desarrollador de ${app}`,
    freeTrial: 'Prueba gratis de 7 días',
    closeFine: 'Prueba gratis de 7 días · Sin anuncios · Sin cuenta',
    specTechnique: 'Técnica',
    specPattern: 'Patrón',
    specPhases: 'Fases',
    specAccess: 'Acceso',
    access: { Included: 'Incluida', Premium: 'Premium', '1 free try': '1 prueba gratis' },
    stepByStep: 'Paso a paso',
    seconds: 'segundos',
    defaultTools: ['Refresher para iPhone', 'Apple Watch, para medir la frecuencia cardíaca'],
    questions: 'Preguntas',
    faqH2: 'Lo que más se pregunta.',
    alsoIn: 'También en Refresher',
    everyTechnique: 'Todas las técnicas, de un vistazo',
    sources: 'Fuentes',
  },
};
