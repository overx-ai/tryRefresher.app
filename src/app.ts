// App facts that appear in more than one place. Changing a number here changes
// it everywhere, which is the point — the listing and the site must not drift.
export const APP = {
  name: 'Refresher',
  fullName: 'Refresher: Breathing & HRV',
  subtitle: 'Wim Hof, Box, Vagus & Coherent',
  appStoreId: '6759679041',
  appStoreUrl: 'https://apps.apple.com/app/id6759679041',
  supportEmail: 'support@overx.ai',
  developer: 'Yauheni Malashchytski',
  publisher: 'OverX AI',
  publisherUrl: 'https://overx.ai',
} as const;

// Nine techniques, with the phases `generatePhases` actually produces.
// `access` matters: spec 052 §5 forbids a bare "nine techniques" headline because a new
// reader sees five. The datasheet shows every technique and states its gate instead.
// Colours are the dark-mode values; global.css maps each to a light variant.
export const TECHNIQUES = [
  { key: 'box', page: '/box-breathing-app',      name: 'Box',                pattern: '4 · 4 · 4 · 4',        access: 'Included',    ratio: [['inhale',4],['hold',4],['exhale',4],['pause',4]],   when: 'Equal phases, a hold at both ends' },
  { key: '478', page: '/4-7-8-breathing-app',      name: '4-7-8',              pattern: '4 · 7 · 8',            access: 'Included',    ratio: [['inhale',4],['hold',7],['exhale',8]],               when: 'The longest exhale of the fixed patterns' },
  { key: 'coherent', page: '/coherent-breathing-app', name: 'Coherent',           pattern: '5.5 in · 5.5 out',     access: 'Included',    ratio: [['inhale',55],['exhale',55]],                        when: 'Adjustable from 3 to 10 seconds per phase' },
  { key: 'wim',      name: 'Wim Hof',            pattern: '3 × 30 + 60/90/90s',   access: 'Included',    ratio: [['inhale',3],['exhale',3],['hold',14]],              when: 'Seated or lying down, never in water. Every number tunable with Premium' },
  { key: 'timer',    name: 'Timer',              pattern: 'Your duration',        access: 'Included',    ratio: [['pause',1]],                                        when: 'No pacer, just a bell' },
  { key: 'sigh',     name: 'Physiological sigh', pattern: '1.8 · 1.0 sip · 6.0',  access: '1 free try',  ratio: [['inhale',2],['inhale-soft',1],['exhale',7]],        when: 'One breath, right now' },
  { key: 'nostril',  name: 'Alternate nostril',  pattern: '4 · 4 · 4, both sides', access: '1 free try', ratio: [['inhale',4],['hold',2],['exhale',4],['hold',2]],   when: 'A longer, deliberate sit' },
  { key: 'extended', name: 'Extended exhale',    pattern: '4 in · 8 out',         access: '1 free try',  ratio: [['inhale',4],['exhale',8]],                          when: 'The exhale is the whole point' },
  { key: 'builder',  name: 'Builder',            pattern: 'Your pattern',         access: 'Premium',     ratio: [['inhale',3],['hold',5],['exhale',6],['pause',2]],   when: 'You already know the numbers' },
] as const;
