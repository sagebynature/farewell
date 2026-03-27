# Starcrawl

A cinematic Star Wars-style text crawl for any occasion — farewells, tributes, announcements, launch reveals, dedications. Served as a static site via GitHub Pages with zero build step.

**Live demo:** https://sagebynature.github.io/starcrawl/

## How it works

- `MESSAGE.md` — write your message here in Markdown
- `config.js` — control all visual and sequence settings
- `crawlTiming.js` — shared timing math for the crawl
- `index.html` — the engine (no build step, no dependencies to install)

The page renders a Star Wars perspective crawl with an animated starfield, optional cinematic intro sequence, and YouTube background music.

## Customizing the message

Edit `MESSAGE.md` with standard Markdown. Headings (`#`, `##`) and paragraphs are styled automatically for the crawl.

## Configuration

All options live in `config.js`:

| Option | Type | Default | Description |
|---|---|---|---|
| `messageFile` | `string` | `"MESSAGE.md"` | Markdown file to load as the crawl content |
| `youtubeVideoId` | `string\|null` | `null` | YouTube video ID for background music (the part after `?v=`) |
| `scrollDuration` | `number` | `100` | Crawl duration in seconds |
| `crawlTitle` | `string` | `"FAREWELL"` | Title shown on start screen and in the title reveal |
| `crawlSubtitle` | `string` | `""` | Subtitle shown above the title during reveal |
| `crawlTextSize` | `string\|null` | `null` | Body paragraph font size, any CSS value (`"2rem"`, `"24px"`) |
| `crawlWidth` | `string\|null` | `null` | Width of the text column (`"75%"`, `"900px"`) |
| `crawlStartOffsetVh` | `number` | `5` | Starting vertical offset for the crawl in viewport-height units |
| `crawlEndTriggerViewport` | `number` | `0.5` | Starts the end fade when the last line reaches this viewport fraction |
| `crawlFadeDistanceViewportHeights` | `number` | `2` | Extra distance the crawl keeps moving during the fade, in viewport heights |
| `crawlPerspective` | `number` | `400` | Perspective depth for the crawl scene in pixels |
| `crawlPerspectiveOrigin` | `string` | `"50% 90%"` | Perspective origin for the crawl scene |
| `crawlTiltDegrees` | `number` | `22` | Tilt angle applied to the crawl text |
| `showStartScreen` | `boolean` | `true` | Show click-to-begin screen; `false` auto-starts |
| `startPromptText` | `string` | `"Click anywhere to begin"` | Label on the start screen |
| `showIntro` | `boolean` | `true` | Show the blue intro text (e.g. "A long time ago...") |
| `introLines` | `string[]` | `[...]` | Lines of text for the intro screen |
| `showTitleReveal` | `boolean` | `true` | Show the title zoom-out before the crawl |
| `endText` | `string` | `"May the Force be with you."` | Final screen message |
| `fadeMs` | `number` | `1300` | Base fade duration used for overlay hide transitions |
| `fadeSettleMs` | `number` | `1400` | Delay after a fade before the next phase starts |
| `introDurationMs` | `number` | `5000` | Time the blue intro text stays on screen |
| `titleHoldMs` | `number` | `1200` | Time the title reveal stays still before zooming |
| `titleZoomMs` | `number` | `4800` | Duration of the title zoom-out |
| `endFadeDurationSeconds` | `number` | `3` | Duration of the crawl fade-out |
| `endScreenDelayMs` | `number\|null` | `null` | Delay before the end screen appears; `null` matches the fade duration |

## Sequence

```
[Start screen] → [Intro text] → [Title reveal] → [Crawl] → [End screen]
```

Each phase can be independently disabled via the `show*` flags in `config.js`.

## Deploying

Push to `main` — GitHub Pages serves from the repo root automatically.
