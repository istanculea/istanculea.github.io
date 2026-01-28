import { getStoredConsent } from "./consent"

const PLAUSIBLE_DOMAIN = "plausible.io"
const PLAUSIBLE_SCRIPT = "https://plausible.io/js/plausible.js"

function shouldBlockAnalytics() {
  const dnt = typeof navigator !== "undefined" && (navigator as any).doNotTrack === "1"
  const consent = getStoredConsent()
  return dnt || consent !== "accepted"
}

export function initAnalytics() {
  if (shouldBlockAnalytics()) return
  if (document.querySelector(`script[src="${PLAUSIBLE_SCRIPT}"]`)) return

  const script = document.createElement("script")
  script.src = PLAUSIBLE_SCRIPT
  script.defer = true
  script.dataset.domain = window.location.hostname
  script.integrity = "sha384-S7N2BXTJvGsQnyz5TH7r8dMSeEq4zHCWV1pod01adN3r5n6sA35wtTDHzNVHgIvz"
  script.crossOrigin = "anonymous"
  document.head.appendChild(script)
}

export function registerConsentListeners() {
  window.addEventListener("consent:changed", () => {
    initAnalytics()
  })
}
