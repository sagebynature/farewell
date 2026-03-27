const test = require('node:test');
const assert = require('node:assert/strict');

const {
  createCrawlTiming,
} = require('../crawlTiming.js');

test('extends trigger timing when content is taller', () => {
  const baseInput = {
    startTranslateY: 40,
    viewportHeight: 800,
    endTriggerViewport: 0.5,
    fadeDistanceViewportHeights: 2,
    durationSeconds: 120,
  };

  const shortContentTiming = createCrawlTiming({
    ...baseInput,
    contentHeight: 900,
  });

  const tallContentTiming = createCrawlTiming({
    ...baseInput,
    contentHeight: 1500,
  });

  assert.equal(shortContentTiming.totalDurationMs, 120000);
  assert.equal(tallContentTiming.totalDurationMs, 120000);
  assert.ok(tallContentTiming.distanceToTrigger > shortContentTiming.distanceToTrigger);
  assert.ok(tallContentTiming.triggerDelayMs > shortContentTiming.triggerDelayMs);
});

test('starts fading immediately when content has already passed the trigger line', () => {
  const timing = createCrawlTiming({
    startTranslateY: 24,
    contentHeight: 300,
    viewportHeight: 800,
    endTriggerViewport: 0.5,
    fadeDistanceViewportHeights: 2,
    durationSeconds: 90,
  });

  assert.equal(timing.distanceToTrigger, 0);
  assert.equal(timing.triggerDelayMs, 0);
  assert.equal(timing.endTranslateY, 24 - (800 * 2));
});
