import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

// -------------------- Reusable Components --------------------

function BackButton() {
  const navigate = useNavigate()
  return (
    <Button
      variant="ghost"
      onClick={() => navigate('/')}
      className="mb-8 group"
    >
      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
      Back to Home
    </Button>
  )
}

function PostMeta({ category, date, readTime }) {
  return (
    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
      <span className="cloud-badge">{category}</span>
      <span className="flex items-center space-x-1">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
      </span>
      <span className="flex items-center space-x-1">
        <Clock className="h-4 w-4" />
        <span>{readTime}</span>
      </span>
    </div>
  )
}

function PostHeader({ title, description }) {
  return (
    <header className="mb-12 space-y-6">
      <PostMeta category="Cloud Infrastructure" date="March 12, 2024" readTime="12 min read" />
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
      <p className="text-xl text-muted-foreground">{description}</p>
    </header>
  )
}

function PostImage({ src, alt }) {
  return (
    <div className="aspect-video mb-12 overflow-hidden rounded-lg">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}

// -------------------- Main Blog Post --------------------

export default function BlogPost1() {
  return (
    <div className="min-h-screen bg-background">
      <article className="container max-w-4xl mx-auto px-6 py-20">
        
        <BackButton />

        <PostHeader
          title="Optimizing Azure Infrastructure with Terraform and Grafana"
          description="A detailed journey of how we automated Azure deployments using Terraform, monitored them with Grafana, and achieved measurable improvements in efficiency, reliability, and observability."
        />

        <PostImage
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=entropy&auto=format"
          alt="Azure Infrastructure with Terraform"
        />

        <div className="prose prose-lg max-w-none">

          <h2>Why Treat Infrastructure Like Code?</h2>
          <p>
            Manual cloud provisioning leads to inconsistencies, downtime, and operational stress. Treating infrastructure as code makes deployments reproducible, auditable, and version-controlled.
          </p>
          <ul>
            <li>Inconsistent environments between dev, staging, and production</li>
            <li>Time-consuming manual deployments</li>
            <li>Configuration drift causing unexpected failures</li>
            <li>Rollbacks that were risky and unreliable</li>
          </ul>

          <h2>Terraform: Simplifying Azure Deployments</h2>
          <p>
            We switched from ARM templates to Terraform. HCL provided readability, modularity, and reusability. Our infrastructure became declarative, enabling reliable replication of environments.
          </p>

          <h2>Step 1: Start Small, Build Confidence</h2>
          <p>
            We began with a single project—a web app, database, and storage account. This limited scope allowed experimentation without production risk, while teaching the team Terraform basics and workflows.
          </p>

          <h2>Step 2: Build Reusable Modules</h2>
          <p>
            Repeating patterns for VMs, storage, networking, and monitoring were modularized:
          </p>
          <ul>
            <li><strong>web-app module:</strong> deploys app server, DB, storage, networking, monitoring</li>
            <li><strong>network module:</strong> reusable VNet/subnet/security rules</li>
            <li><strong>monitoring module:</strong> sets up Grafana dashboards and alerting</li>
          </ul>

          <h2>Step 3: Observability with Grafana</h2>
          <p>
            Terraform deployment success is great—but without monitoring, you don’t know if resources perform optimally. Grafana dashboards became our single source of truth:
          </p>
          <ul>
            <li><strong>Resource Utilization:</strong> CPU, memory, disk per VM, scaling patterns</li>
            <li><strong>Deployment Metrics:</strong> deployment duration, success/failure, drift checks</li>
            <li><strong>Environment Consistency:</strong> comparing dev/staging/prod in one view</li>
            <li><strong>Alerts:</strong> misconfigured or failed deployments trigger notifications in Slack/Teams</li>
          </ul>

          <h2>Step 4: Short-, Medium-, and Long-Term Impact</h2>
          <h3>Short-term (Weeks)</h3>
          <ul>
            <li>Reduced deployment time from 3–4 hours to 15–20 minutes</li>
            <li>Immediate visibility into failed deployments</li>
            <li>Team confidence in Terraform modules increased</li>
          </ul>

          <h3>Medium-term (Months)</h3>
          <ul>
            <li>Zero configuration drift between dev/staging/prod</li>
            <li>Rapid creation of new environments (minutes instead of days)</li>
            <li>Improved capacity planning with Grafana metrics</li>
            <li>Fewer operational incidents and faster root cause analysis</li>
          </ul>

          <h3>Long-term (6+ Months)</h3>
          <ul>
            <li>Stable, predictable infrastructure with versioned deployments</li>
            <li>Cost optimization informed by utilization dashboards</li>
            <li>Self-service infrastructure for developers reduces bottlenecks</li>
            <li>Proactive alerting prevents downtime before users notice</li>
          </ul>

          <h2>Lessons Learned</h2>
          <ul>
            <li>Start small, iterate gradually</li>
            <li>Use remote state for collaboration</li>
            <li>Modularize everything; treat modules as code</li>
            <li>Tag all resources for cost and tracking</li>
            <li>Secure state files containing sensitive info</li>
            <li>Dashboards and alerts must evolve with the environment</li>
          </ul>

          <h2>Final Thoughts</h2>
          <p>
            Terraform combined with Grafana transformed our Azure operations. Deployments became fast, predictable, and observable. Teams now focus on improving systems, not firefighting deployments.
          </p>

        </div>
      </article>
    </div>
  )
}