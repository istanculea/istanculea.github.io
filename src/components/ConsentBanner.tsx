import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { getStoredConsent, setStoredConsent } from "@/lib/consent"

export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) setVisible(true)

    const reopen = () => setVisible(true)
    const hideOnChange = () => setVisible(false)
    window.addEventListener("consent:open", reopen)
    window.addEventListener("consent:changed", hideOnChange)
    return () => {
      window.removeEventListener("consent:open", reopen)
      window.removeEventListener("consent:changed", hideOnChange)
    }
  }, [])

  const handle = (value: "accepted" | "rejected") => {
    setStoredConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-4xl rounded-t-2xl border border-border bg-background/95 shadow-sm backdrop-blur px-6 py-4 gap-4 flex flex-col md:flex-row md:items-center md:justify-between" data-reveal>
        <div className="space-y-1">
          <p className="font-semibold">Privacy choices</p>
          <p className="text-sm text-muted-foreground">
            I use a privacy-friendly analytics tool. It loads only if you accept. You can change this anytime.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => handle("rejected")} aria-label="Reject analytics">
            Reject
          </Button>
          <Button onClick={() => handle("accepted")} aria-label="Accept analytics">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
