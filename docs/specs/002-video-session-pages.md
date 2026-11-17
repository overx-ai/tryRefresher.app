---
id: 002
title: "Session pages built around the YouTube videos"
status: done
priority: p1
created: 2026-11-18
updated: 2026-11-18
repo: refresher
release:
story:
depends_on: []
conflicts_with: []
tasks: [T1, T2, T3, T4]
source: owner request 2026-11-18, plan approved the same day
---

# 002 - Session pages built around the YouTube videos

> **TL;DR** - Shipped 2026-11-18: click-to-play YouTube sessions with `VideoObject`, zero client
> JS and no YouTube request before the click, on `/5-minute-box-breathing`, `/4-7-8-breathing-for-sleep`,
> `/4-2-6-2-breathing` and `/paced-breathing`. Posters are frames of each video. Nothing to do;
> check impressions for the three queries in four weeks.

## Why

The channel "Refresher: Breathing & HRV" (`UCPZrsHvG-XxorsXWtC3i6AA`) has 36 long paced sessions.
The site has no video, no YouTube link and no `VideoObject`. Its pages target "... app" queries;
nothing answers the "do it now" queries the videos answer (vidIQ, monthly YouTube searches,
2026-11-18: `box breathing 5 minutes` 12,190, `5 minute box breathing` 7,559,
`4-7-8 breathing sleep` 4,374).

## Requirements

1. **T1 Plumbing.** `APP.youtubeUrl`; `src/videos.ts` (only the videos in use, with our own
   names and descriptions, because the channel's titles carry words `seo/banned.md` forbids);
   `videoSchema()` in `src/schema.ts` and the channel in `appSchema.sameAs`;
   `src/components/VideoEmbed.astro`; an optional `video` prop on `TechniqueLayout`, rendered
   directly under the short answer; UI strings for en, de and es; a YouTube link in the footer.
2. **T2 The embed loads nothing until the click.** An `<iframe>` on `youtube-nocookie.com` with
   a `srcdoc` poster and play link, poster self-hosted in `public/video/<id>.jpg`. No client
   JavaScript. Known cost: on a phone the first tap loads the player and a second tap starts it.
3. **T3 Pages, each through `/seo`** (SERP check, `product.md` grounding, two anti-slop passes,
   independent judge at 80 or more):

   | Page | Query | Main video | Other length |
   |---|---|---|---|
   | `/5-minute-box-breathing` | 5 minute box breathing | `1rgjbiqi4N0` | `NPN9oBbp_sQ` |
   | `/4-7-8-breathing-for-sleep` | 4-7-8 breathing for sleep | `jidkbBLZi7Q` | `4agi_YNJLXM` |
   | `/4-2-6-2-breathing` | 4-2-6-2 breathing | `jp6RX7Bi4qA` | `5dxbM5NB_7Q` |
   | `/paced-breathing` (refresh) | unchanged | `4P5RPpx4yfA` | |

   Posters are frames of the session itself, never the channel thumbnail (owner, 2026-11-18):
   the thumbnails carry banned words. Old-name watermarks are cropped out.
4. **T4 Records and checks.** `seo/experience.md` gets a "YouTube channel" section;
   `keywords.md`, `clusters.md`, `published.md` get the "sessions with video" cluster; the README
   verification battery gets the video greps and the corrected sitemap count; one line each in
   `CLAUDE.md` and `README.md` on the click-to-play rule.

## Gate

The owner approves `/5-minute-box-breathing` on a local preview (320 and 1440 px, dark and
light) before anything is pushed and before the other pages are written.

## Out of scope

- Editing video titles, descriptions or thumbnails on YouTube.
- A `/privacy` line about YouTube (owner's decision).
- de and es video pages, 7-7 breathing, `5 minute breathing exercise`,
  `breathing exercise for sleep`: backlog rows only.
- Video on `/coherent-breathing-app`: the video paces 5.0 s and the page's number is 5.5.
