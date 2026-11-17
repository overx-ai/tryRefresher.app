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
