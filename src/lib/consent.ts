const STORAGE_KEY = "consent.analytics"
type ConsentValue = "accepted" | "rejected" | null

export function getStoredConsent(): ConsentValue {
  const value = localStorage.getItem(STORAGE_KEY)
  return value === "accepted" || value === "rejected" ? value : null
}

export function setStoredConsent(value: Exclude<ConsentValue, null>) {
  localStorage.setItem(STORAGE_KEY, value)
  window.dispatchEvent(new CustomEvent("consent:changed", { detail: value }))
}

export function openConsentPreferences() {
  window.dispatchEvent(new CustomEvent("consent:open"))
}
