import { Link } from "react-router-dom"

export default function Legal() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-6 py-12 space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">Legal Notice</h1>
          <p className="text-muted-foreground">Professional contact details for this site.</p>
        </header>

        <section className="space-y-3 text-muted-foreground">
          <p><strong>Name:</strong> Ionuț Stănculea</p>
          <p><strong>Country:</strong> Romania</p>
          <p>
            <strong>Contact:</strong>{" "}
            <a className="text-primary underline" href="mailto:stanculea.ionut.93@gmail.com">
              stanculea.ionut.93@gmail.com
            </a>
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
