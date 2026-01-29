import { describe, expect, it, vi } from "vitest"
import { getStoredConsent, openConsentPreferences, setStoredConsent } from "@/lib/consent"

describe("consent storage", () => {
  it("returns null when nothing stored", () => {
    expect(getStoredConsent()).toBeNull()
  })

  it("returns null for invalid stored values", () => {
    window.localStorage.setItem("consent.analytics", "maybe")
    expect(getStoredConsent()).toBeNull()
  })

  it("stores and retrieves consent", () => {
    setStoredConsent("accepted")
    expect(getStoredConsent()).toBe("accepted")
  })

  it("dispatches consent events", () => {
    const changed = vi.fn()
    const opened = vi.fn()
    window.addEventListener("consent:changed", changed)
    window.addEventListener("consent:open", opened)

    setStoredConsent("rejected")
    openConsentPreferences()

    expect(changed).toHaveBeenCalledTimes(1)
    expect(opened).toHaveBeenCalledTimes(1)
  })
})
