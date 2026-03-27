const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');

test('intro and end overlays use responsive horizontal padding', () => {
  assert.match(
    html,
    /#intro-text\s*\{[\s\S]*padding-inline:\s*clamp\(/,
  );

  assert.match(
    html,
    /#end-screen\s*\{[\s\S]*padding-inline:\s*clamp\(/,
  );
});

test('end text keeps responsive font sizing', () => {
  assert.match(
    html,
    /\.end-line\s*\{[\s\S]*font-size:\s*clamp\(/,
  );
});

test('crawl width keeps a responsive viewport-based fallback', () => {
  assert.match(
    html,
    /#crawl-wrap\s*\{[\s\S]*width:\s*var\(--crawl-width,\s*min\(/,
  );
});

test('crawl fade timing is derived from content height and uses the computed delay', () => {
  assert.match(
    html,
    /contentHeight:\s*crawlContentEl\.scrollHeight/,
  );

  assert.match(
    html,
    /await delay\(crawlTiming\.triggerDelayMs\)/,
  );
});
