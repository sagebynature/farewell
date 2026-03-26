# Farewell

A cinematic Star Wars-style farewell page, served via GitHub Pages.

**Live:** https://sagebynature.github.io/farewell/

## How it works

- `FAREWELL.md` — write the farewell message here in Markdown
- `config.js` — control all visual and sequence settings
- `index.html` — the SPA engine (no build step needed)

The page renders a Star Wars perspective crawl with an animated starfield, optional intro sequence, and YouTube background music.

## Customizing the message

Edit `FAREWELL.md` with standard Markdown. Headings (`#`, `##`) and paragraphs are styled automatically for the crawl.

## Configuration

All options live in `config.js`:

| Option | Type | Default | Description |
|---|---|---|---|
| `youtubeVideoId` | `string\|null` | `null` | YouTube video ID for background music (the part after `?v=`) |
| `scrollDuration` | `number` | `100` | Crawl duration in seconds |
| `crawlTitle` | `string` | `"FAREWELL"` | Title shown on start screen and in the title reveal |
| `crawlSubtitle` | `string` | `""` | Subtitle shown above the title during reveal |
| `crawlTextSize` | `string\|null` | `null` | Body paragraph font size, any CSS value (`"2rem"`, `"24px"`) |
| `crawlWidth` | `string\|null` | `null` | Width of the text column (`"75%"`, `"900px"`) |
| `showStartScreen` | `boolean` | `true` | Show click-to-begin screen; `false` auto-starts |
| `startPromptText` | `string` | `"Click anywhere to begin"` | Label on the start screen |
| `showIntro` | `boolean` | `true` | Show the blue "A long time ago..." intro text |
| `introLines` | `string[]` | `[...]` | Lines of text for the intro screen |
| `showTitleReveal` | `boolean` | `true` | Show the title zoom-out before the crawl |
| `endText` | `string` | `"May the Force be with you."` | Final screen message |

## Sequence

```
[Start screen] → [Intro text] → [Title reveal] → [Crawl] → [End screen]
```

Each phase can be independently disabled via the `show*` flags in `config.js`.

## Deploying

Push to `main` — GitHub Pages serves from the repo root automatically.
