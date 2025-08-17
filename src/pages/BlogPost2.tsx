import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function BlogPostJiraGrafana() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <article className="container max-w-4xl mx-auto px-6 py-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Button>

        <header className="mb-12 space-y-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="cloud-badge">Observability & Performance</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>April 5, 2024</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Unlocking JIRA Data Center Performance with Grafana
          </h1>
          
          <p className="text-xl text-muted-foreground">
            How we moved from guesswork to data-driven insights: using Grafana dashboards to stabilize JIRA Data Center, cut incident resolution time by 40%, 
            and provide transparency across engineering and business teams.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=500&fit=crop&auto=format"
            alt="Grafana dashboards on large screens in NOC"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>The Challenge</h2>
          <p>
            Our JIRA Data Center (10k+ users, multiple nodes) had grown into the backbone of our development workflow. 
            Yet performance was unpredictable: some days everything was smooth, other days login queues spiked, 
            page loads crawled, and teams lost confidence in the platform.  
          </p>
          <p>
            The biggest pain point? <strong>Lack of visibility.</strong> We had system logs and raw metrics, 
            but no unified view. Incidents often turned into a blame game between infrastructure, DB, and 
            application teams.  
          </p>

          <h2>Why Grafana</h2>
          <p>
            We chose Grafana because it let us combine metrics from <strong>PostgreSQL</strong>, 
            <strong>JVM</strong>, <strong>application logs</strong>, and <strong>system-level exporters</strong> 
            into one place. Instead of sifting through multiple tools, we could finally see the big picture.  
          </p>

          <h2>Building the Dashboards</h2>
          <p>
            We started by defining the key pain points: slow issues search, login queues, 
            and node resource saturation. From there, we created Grafana dashboards with panels such as:
          </p>
          <ul>
            <li><strong>User Experience Panel</strong>: Median/95th percentile page load times (JIRA REST API & web endpoints).</li>
            <li><strong>Node Health Panel</strong>: CPU, heap/non-heap memory, GC pause times, thread counts.</li>
            <li><strong>Database Panel</strong>: Slow queries by type, connection pool usage, locks held.</li>
            <li><strong>Cluster Panel</strong>: Active nodes, replication lag, load distribution per node.</li>
            <li><strong>Throughput Panel</strong>: Issues created/updated/minute, JQL searches per second.</li>
            <li><strong>Incident Panel</strong>: Error rates (HTTP 5xx, DB errors) mapped to time of spikes.</li>
          </ul>

          <p>
            Each panel had thresholds and alerts, so the team didn’t just see problems after the fact 
            — they got early warnings before users escalated.  
          </p>

          <h2>Steps We Took</h2>
          <ol>
            <li>Integrated <strong>Prometheus JMX Exporter</strong> for JVM metrics.</li>
            <li>Connected <strong>PostgreSQL Exporter</strong> for DB-level visibility.</li>
            <li>Parsed JIRA application logs into <strong>Loki</strong> and linked logs directly from Grafana panels.</li>
            <li>Designed role-based dashboards: high-level KPIs for managers, deep-dive panels for engineers.</li>
            <li>Established alerting rules piped into Slack & Opsgenie for real-time response.</li>
          </ol>

          <h2>The Results</h2>
          <p>
            The transformation happened in phases:
          </p>
          <ul>
            <li><strong>Short-term (1 month)</strong>: Reduced mean time to detect issues from ~45 mins to under 10 mins. 
                Teams could pinpoint whether the problem was DB locks, JVM memory, or node imbalance.</li>
            <li><strong>Medium-term (3–6 months)</strong>: Performance incidents dropped by 30%. 
                Database slow query optimization and JVM tuning became targeted efforts, not guesswork.</li>
            <li><strong>Long-term (6–12 months)</strong>: Incident resolution time down 40%, stability improved, 
                and management gained confidence thanks to <em>executive-friendly Grafana dashboards</em> 
                showing uptime, throughput, and user satisfaction scores.</li>
          </ul>

          <h2>Lessons Learned</h2>
          <ul>
            <li>Metrics without context create noise. Correlation across layers is key.</li>
            <li>Dashboards should serve multiple audiences: engineers need detail, 
                leadership needs clarity.</li>
            <li>Alerts are only useful if tuned — avoid “alert fatigue.”</li>
            <li>Sharing dashboards openly increased collaboration across teams.</li>
          </ul>

          <h2>Final Thoughts</h2>
          <p>
            Grafana didn’t just improve observability—it reshaped how we approached platform performance.  
            JIRA Data Center moved from a “black box” to a transparent, predictable system.  
            Most importantly, we stopped arguing about <em>where</em> the problem was and started solving it faster.  
          </p>
        </div>
      </article>
    </div>
  )
}
