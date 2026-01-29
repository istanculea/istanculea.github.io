import { afterEach, describe, expect, it, vi } from "vitest"
import { getCurrentLangFromPath, navigateWithLang, pathWithLang } from "@/lib/langPath"

describe("language path helpers", () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("keeps English paths unprefixed", () => {
    expect(pathWithLang("/blog", "en")).toBe("/blog")
  })

  it("prefixes non-English paths", () => {
    expect(pathWithLang("/blog", "ro")).toBe("/ro/blog")
  })

  it("prefixes anchors for non-English", () => {
    expect(pathWithLang("#contact", "es")).toBe("/es#contact")
  })

  it("returns English for unknown path segment", () => {
    window.history.pushState({}, "", "/unknown")
    expect(getCurrentLangFromPath()).toBe("en")
  })

  it("detects language from path", () => {
    window.history.pushState({}, "", "/it/blog")
    expect(getCurrentLangFromPath()).toBe("it")
  })

  it("navigates with language", () => {
    const locationStub = { ...window.location, href: "" }
    vi.stubGlobal("location", locationStub)
    navigateWithLang("/privacy", "es")
    expect(locationStub.href).toBe("/es/privacy")
  })

  it("uses current language when lang missing", () => {
    window.history.pushState({}, "", "/ro/blog")
    expect(pathWithLang("/legal")).toBe("/ro/legal")
  })
})
