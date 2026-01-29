import { describe, expect, it } from "vitest"
import { cn } from "@/lib/utils"

describe("cn utility", () => {
  it("merges class names", () => {
    expect(cn("text-sm", "text-sm", "font-bold")).toBe("text-sm font-bold")
  })

  it("filters falsy values", () => {
    expect(cn("text-sm", false && "hidden", undefined, "font-bold")).toBe("text-sm font-bold")
  })
})
