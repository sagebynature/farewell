(function initCrawlTiming(global) {
  function getViewportHeight(win) {
    const view = win || global;

    if (view && view.visualViewport && typeof view.visualViewport.height === 'number') {
      return view.visualViewport.height;
    }

    if (view && typeof view.innerHeight === 'number') {
      return view.innerHeight;
    }

    return 0;
  }

  function createCrawlTiming({
    startTranslateY,
    contentHeight,
    viewportHeight,
    endTriggerViewport,
    fadeDistanceViewportHeights,
    durationSeconds,
  }) {
    const triggerBottom = viewportHeight * endTriggerViewport;
    const distanceToTrigger = Math.max(0, startTranslateY + contentHeight - triggerBottom);
    const fadeDistance = Math.max(0, viewportHeight * fadeDistanceViewportHeights);
    const totalDistance = distanceToTrigger + fadeDistance;
    const totalDurationMs = Math.max(0, durationSeconds * 1000);
    const triggerDelayMs = totalDistance === 0
      ? 0
      : (distanceToTrigger / totalDistance) * totalDurationMs;

    return {
      distanceToTrigger,
      endTranslateY: startTranslateY - totalDistance,
      fadeDistance,
      totalDistance,
      totalDurationMs,
      triggerBottom,
      triggerDelayMs,
    };
  }

  const api = {
    createCrawlTiming,
    getViewportHeight,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  global.CrawlTiming = api;
})(typeof window !== 'undefined' ? window : globalThis);
