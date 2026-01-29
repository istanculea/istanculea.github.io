import { describe, expect, it } from "vitest"
import { cn } from "@/lib/utils"

describe("cn utility", () => {
  it("merges class names", () => {
    expect(cn("text-sm", "text-sm", "font-bold")).toBe("text-sm font-bold")
  })

  it("filters falsy values", () => {
    expect(cn("text-sm", false && "hidden", undefined, "font-bold")).toBe("text-sm font-bold")
  })

  it("handles empty inputs", () => {
    expect(cn()).toBe("")
    expect(cn("", false, null, undefined)).toBe("")
  })

  it("handles Tailwind class conflicts", () => {
    expect(cn("p-4 p-2")).toBe("p-2")
  })

  it("preserves order for non-conflicting classes", () => {
    expect(cn("flex items-center")).toBe("flex items-center")
  })
})
