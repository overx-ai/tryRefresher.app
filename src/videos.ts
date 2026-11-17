// Channel sessions embedded on the site. Names and descriptions are written here, never
// copied from YouTube: the channel's own titles carry words seo/banned.md forbids.
// `uploadDate` is the exact publish time from YouTube; Google wants the timezone.
const EMBED_BASE = 'https://www.youtube-nocookie.com/embed/';
const WATCH_BASE = 'https://www.youtube.com/watch?v=';

export interface Video { id: string; name: string; description: string; duration: string; uploadDate: string }

export const VIDEOS = {
  box5: {
    id: '1rgjbiqi4N0',
    name: 'Box breathing 4-4-4-4, 5 minutes, singing bowls',
    description: 'Five minutes of box breathing at 4-4-4-4. A ball rides a line that rises for four seconds, stays level for four, falls for four and stays level for four. A singing bowl marks each phase. No voice.',
    duration: 'PT5M1S',
    uploadDate: '2026-07-05T19:03:56Z',
  },
  box10: {
    id: 'NPN9oBbp_sQ',
    name: 'Box breathing 4-4-4-4, 10 minutes, handpan',
    description: 'Ten minutes of box breathing at 4-4-4-4, with a handpan marking each phase. No voice.',
    duration: 'PT10M1S',
    uploadDate: '2026-07-24T18:04:35Z',
  },
  p478_10: {
    id: 'jidkbBLZi7Q',
    name: '4-7-8 breathing, 10 minutes, crystal bowl',
    description: 'Ten minutes of 4-7-8 breathing over a mountain lake. A ball rides a line that rises for four seconds, runs flat for seven and falls for eight, with the phase name, a short instruction and a count on screen. A crystal bowl marks each phase.',
    duration: 'PT10M1S',
    uploadDate: '2026-11-02T00:01:06Z',
  },
  p478_3: {
    id: '4agi_YNJLXM',
    name: '4-7-8 breathing, 3 minutes, spoken prompts',
    description: 'Three minutes of 4-7-8 breathing beside a forest stream, with brief spoken prompts for each phase and the count on screen.',
    duration: 'PT3M1S',
    uploadDate: '2026-10-08T01:00:57Z',
  },
  p4262_10: {
    id: 'jp6RX7Bi4qA',
    name: '4-2-6-2 breathing, 10 minutes, duduk',
    description: 'Ten minutes of 4-2-6-2 breathing in front of a waterfall. A ball rides a line that climbs for four seconds, runs flat for two, falls for six and runs flat for two, with the phase name, a short instruction and a count on screen. A duduk marks each phase.',
    duration: 'PT10M1S',
    uploadDate: '2026-10-31T23:00:58Z',
  },
  p4262_30: {
    id: '5dxbM5NB_7Q',
    name: '4-2-6-2 breathing, 30 minutes',
    description: 'Thirty minutes of 4-2-6-2 breathing under willow branches, with the phase name, a short instruction and a count on screen.',
    duration: 'PT30M1S',
    uploadDate: '2026-10-10T23:02:35Z',
  },
  paced10: {
    id: '4P5RPpx4yfA',
    name: 'Paced breathing 5-5, 10 minutes',
    description: 'Ten minutes of paced breathing at five seconds in and five out, six breaths a minute, in a misty forest. A ball rides a wave that rises for the inhale and falls for the exhale.',
    duration: 'PT10M1S',
    uploadDate: '2026-06-20T15:00:06Z',
  },
} as const satisfies Record<string, Video>;

export type VideoKey = keyof typeof VIDEOS;

export const embedUrl = (v: Video) => `${EMBED_BASE}${v.id}`;
export const watchUrl = (v: Video) => `${WATCH_BASE}${v.id}`;
export const posterPath = (v: Video) => `/video/${v.id}.jpg`;

const DURATION = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
const pad = (n: string) => n.padStart(2, '0');

/** PT5M1S -> 5:01, PT1H2M3S -> 1:02:03 */
export const clock = (v: Video) => {
  const match = v.duration.match(DURATION);
  if (!match) throw new Error(`videos.ts: ${v.id} duration "${v.duration}" is not ISO 8601 PT#H#M#S`);
  const [, h, m = '0', s = '0'] = match;
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
};
