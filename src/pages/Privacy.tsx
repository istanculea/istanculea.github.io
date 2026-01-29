import { Link } from "react-router-dom"
import { CONTACT } from "@/config/constants"

const LAST_UPDATED = "2026-01-28"

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl mx-auto px-6 py-12 space-y-8">
        <header className="space-y-2">
          <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            This policy explains how I collect and use personal data when you visit this site.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Who is responsible</h2>
          <p>
            Data Controller: Ionuț Stănculea, Romania. Contact:{" "}
            <a className="text-primary underline" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">What data is collected</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>IP address via hosting/CDN for delivery and security.</li>
            <li>Email and message content when you contact me.</li>
            <li>Privacy-friendly analytics events (page views, device/region metadata without cookies).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Why the data is used</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Respond to inquiries.</li>
            <li>Basic traffic analytics to improve the site.</li>
            <li>Security and abuse prevention.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Legal bases</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Consent for analytics (disabled until accepted).</li>
            <li>Legitimate interest for security and basic site operation.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Retention</h2>
          <p className="text-muted-foreground">Contact inquiries are kept for up to 12 months.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Your rights</h2>
          <p className="text-muted-foreground">
            You may request access, rectification, erasure, restriction, or object to processing. You can also
            lodge a complaint with the Romanian DPA (ANSPDCP):{" "}
            <a className="text-primary underline" href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer">
              https://www.dataprotection.ro/
            </a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">International transfers</h2>
          <p className="text-muted-foreground">
            Analytics may be processed by Plausible; their EU-hosted option is preferred. If data leaves the EU, it is
            protected by standard safeguards from the provider.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            For any privacy request, email{" "}
            <a className="text-primary underline" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            .
          </p>
        </section>

        <div className="pt-6">
          <Link className="text-primary underline" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
