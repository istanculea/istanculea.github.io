import AxeBuilder from "@axe-core/playwright"
import type { Page } from "@playwright/test"

export async function runA11yCheck(page: Page) {
  // Smoke check: only fail on critical accessibility violations.
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze()
  const critical = results.violations.filter((violation) => violation.impact === "critical")
  if (critical.length > 0) {
    throw new Error(
      `Critical a11y violations:\n${critical.map((violation) => violation.id).join(", ")}`
    )
  }
}
