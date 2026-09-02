# tryRefresher.app

Marketing site for **Refresher: Breathing & HRV** — an iPhone, iPad and Apple Watch app that
runs nine breathing techniques on a pacer accurate to the second and records heart rate
before and after every session.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Wave spine + technique datasheet + session readout |
| `/support` | `src/pages/support.astro` | FAQ + contact. Required by App Store Connect |
| `/privacy` | `src/pages/privacy.astro` | Required by App Store Connect |
| `/terms` | `src/pages/terms.astro` | Includes §19 Apple-specific terms (the EULA rider) |
| `/press` | `src/pages/press.astro` | Boilerplate, app facts, icon, screenshots |
| `/download` | `vercel.json` redirect | → the App Store. No page file |
| `/404` | `src/pages/404.astro` | noindex |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` | Generated from `src/site-pages.ts` |

## Architecture

Three files carry the weight:

- **`src/site-pages.ts`** — every indexable route. The sitemap and the canonical tag both
  read it, so they cannot drift.
- **`src/app.ts`** — App Store ID, URLs, and the nine techniques with their exact patterns
  and phase ratios. The home page and the press kit both render from it.
- **`src/styles/global.css`** — the token system. Light palette on bare `:root`, dark
  swapped under `prefers-color-scheme`, with `[data-theme]` reserved for a future toggle.

`src/data/*.json` began as an extraction from the overx.ai refresher site's English legal and
support content, but this repo owns it as of 2026-09-03 — it names `tryrefresher.app` and carries
an HRV clause the old site lacks. Edit it here; re-extracting would undo both.

**`seo/` is the copy pipeline's config**, and `seo/product.md` is the source of truth for every
product claim on the site. Marketing copy changes go through `/seo`: ground against
`product.md`, two anti-slop passes against `banned.md`, then an independent score against the
skill's rubric with a threshold of 80. `keywords.md` carries measured App Store popularity,
difficulty and rank from the Astro MCP alongside the web SERP verdict for each term.

## Verification

```bash
npm run build

# technique pages: the words that have failed a judge round
for p in box-breathing-app coherent-breathing-app hrv-breathing-app 4-7-8-breathing-app; do
  f=dist/$p/index.html
  grep -c '—' $f                                                   # 0
  grep -oiE '\b(guided|journey|coach|unlock|treat|clinical|practice days|no trackers|standalone)\b' $f
  grep -oiE '(improve|optimi[sz]|rais|boost|increas)[a-z]* (your )?(hrv|heart rate variability)' $f
  grep -oiE 'the one for (staying|winding)|HRV chart (is|are) free' $f
done

# every registered page built
for p in index 404 press/index privacy/index support/index terms/index box-breathing-app/index coherent-breathing-app/index hrv-breathing-app/index 4-7-8-breathing-app/index; do
  test -f "dist/$p.html" || echo "MISSING $p"
done

# sitemap matches the manifest, no trailing-slash URLs
grep -c '<loc>' dist/sitemap.xml                  # expect 5
grep -o '<loc>[^<]*/</loc>' dist/sitemap.xml | grep -v 'app/</loc>'   # expect nothing

# head gates
grep -c 'rel="canonical"' dist/index.html         # expect 1
grep -r 'hreflang' dist/ && echo "FAIL: single-locale site"
grep -c 'noindex, nofollow' dist/404.html         # expect 1

# real App Store link, not a placeholder
grep -r 'href="#"' dist/ && echo "FAIL: placeholder"
grep -o 'id6759679041' dist/index.html | head -1

# claims discipline (see CLAUDE.md and seo/banned.md)
grep -rioE '(improve|optimi[sz]|boost|raise|enhance)[a-z]* (your )?(hrv|heart rate variability)' dist/ && echo "FAIL: CAUSAL_HRV"
grep -rioE '\b(guided|journey|daily practice|coach|routine)\b' dist/index.html dist/press/index.html && echo "REVIEW: banned word"
grep -ri '4 minutes' dist/ && echo "FAIL: should be 2 minutes"
grep -roE '\$[0-9]+\.[0-9]{2}' dist/index.html dist/press/index.html && echo "REVIEW: no prices"

# the three claims retired on 2026-09-02 (spec 052 + a stale competitor line)
grep -ri "no introduction\|no setup screen\|already started" dist/ && echo "FAIL: zero-ceremony claim"
grep -rioE "[0-9]+ (voices|visualizations|badges|languages)" dist/ && echo "FAIL: inventory count"
grep -ri "no competitor" dist/ && echo "FAIL: unsourced superiority claim"

# anti-slop: no em dashes in published copy
grep -o '\u2014' dist/index.html dist/press/index.html dist/llms.txt | wc -l   # expect 0
grep -rioE '\b(unlock|unleash|elevate|empower|seamless|robust)\b' dist/index.html dist/press/index.html dist/llms.txt

# schema: the homepage carries four types
grep -o '"@type":"[A-Za-z]*"' dist/index.html | sort -u   # MobileApplication, WebSite, FAQPage, HowTo

# meta lengths
node -e 'const fs=require("fs");
  for (const f of ["dist/index.html","dist/support/index.html","dist/privacy/index.html","dist/terms/index.html","dist/press/index.html"]) {
    const h=fs.readFileSync(f,"utf8");
    const t=h.match(/<title>(.*?)<\/title>/)[1], d=h.match(/name="description" content="(.*?)"/)[1];
    console.log(f, "title", t.length, "desc", d.length, (t.length>60||d.length>155)?"OVER":"");
  }'
```

Then read `/`, `/support`, `/privacy`, `/terms`, `/press` at 320px and 1440px in both colour
schemes, and confirm no page scrolls horizontally.

## Deploy

Push to `master`; Vercel builds. Point `tryrefresher.app` at the project and confirm `/`,
`/privacy`, `/terms` and `/support` all return 200 — that is the precondition for ever
repointing the App Store Connect URLs away from `refresher.overx.ai`.

## Not in scope (yet)

Blog · the five SEO landing pages from the overx.ai site · locales beyond English · a support
contact form · a price table.

(AASA and `/r/<code>` landed 2026-09-03.)
