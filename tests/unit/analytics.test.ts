import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

const PLAUSIBLE_SRC = "https://plausible.io/js/plausible.js"

describe("analytics", () => {
  beforeEach(() => {
    document.head.innerHTML = ""
    Object.defineProperty(navigator, "doNotTrack", {
      value: "0",
      configurable: true,
    })
    vi.resetModules()
    window.localStorage.clear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("does not inject script when consent rejected", async () => {
    window.localStorage.setItem("consent.analytics", "rejected")
    const { initAnalytics } = await import("@/lib/analytics")
    initAnalytics()
    expect(document.querySelector(`script[src='${PLAUSIBLE_SRC}']`)).toBeNull()
  })

  it("does not inject script when do not track enabled", async () => {
    Object.defineProperty(navigator, "doNotTrack", {
      value: "1",
      configurable: true,
    })
    window.localStorage.setItem("consent.analytics", "accepted")
    const { initAnalytics } = await import("@/lib/analytics")
    initAnalytics()
    expect(document.querySelector(`script[src='${PLAUSIBLE_SRC}']`)).toBeNull()
  })

  it("injects script once when consent accepted", async () => {
    window.localStorage.setItem("consent.analytics", "accepted")
    const { initAnalytics } = await import("@/lib/analytics")
    const headSpy = vi.spyOn(document.head, "appendChild")
    initAnalytics()
    initAnalytics()
    expect(headSpy).toHaveBeenCalledTimes(1)
    const script = headSpy.mock.calls[0]?.[0] as HTMLScriptElement
    expect(script?.src).toBe(PLAUSIBLE_SRC)
    expect(script?.dataset.domain).toBe(window.location.hostname)
    expect(script?.crossOrigin).toBe("anonymous")
  })

  it("responds to consent changes", async () => {
    window.localStorage.setItem("consent.analytics", "accepted")
    const { registerConsentListeners } = await import("@/lib/analytics")
    const initSpy = vi.spyOn(Document.prototype, "createElement")
    registerConsentListeners()
    window.dispatchEvent(new CustomEvent("consent:changed"))
    expect(initSpy).toHaveBeenCalledWith("script")
  })
})
