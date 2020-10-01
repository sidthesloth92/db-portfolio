export const GA_TRACKING_ID = "UA-101087503-2";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageView = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
