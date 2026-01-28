import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function PostDeploymentMonitoring() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <article className="container max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8 flex space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t('blogPost.backToHome')}
          </Button>

          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            {t('blogPost.backToBlog')}
          </Button>
        </div>

        <header className="mb-12 space-y-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="cloud-badge">DevOps</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 17, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>15 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Post Deployment: Monitoring and Error Tracking
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Deploying new features is exciting—but in DevOps, deployment is just the starting line. The real challenge begins after the code hits production. How do you know your system is performing as expected? How quickly can you detect and resolve errors before they affect users? From managing hybrid cloud environments and large-scale systems, I've learned that post-deployment monitoring and error tracking are core pillars of reliability.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="/lovable-uploads/c1178383-bd7a-40e1-aaba-c8fad01d0123.png"
            alt="Post-deployment monitoring dashboards illustration"
            className="w-full h-full object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1024px"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>

        <div className="prose prose-xl max-w-none dark:prose-invert">
          <div className="bg-primary/10 border-l-4 border-primary p-4 my-6 rounded-r-lg">
            <p className="text-primary italic font-medium">
              "In DevOps, deployment isn't the finish line; resilience and observability are."
            </p>
          </div>

          <h2>Why Post-Deployment Monitoring Matters</h2>
          <p>
            Early in my career, I deployed a major update confidently—only to watch a minor bug ripple into multiple user-facing issues. That moment drove home a lesson I now live by: if you can't see it, you can't fix it.
          </p>
          <p>
            Post-deployment monitoring provides:
          </p>
          <ul>
            <li><strong>Visibility into system behavior:</strong> Understand how services interact and perform under load.</li>
            <li><strong>Insights into user impact:</strong> Detect issues that affect end-user experience before they become complaints.</li>
            <li><strong>Proactive problem detection:</strong> Identify trends that could lead to outages, rather than reacting after the fact.</li>
          </ul>
          <p>
            Monitoring is not just about metrics; it's about using those metrics to drive operational decisions and inform the team's next actions.
          </p>

          <h2>Observability vs. Monitoring in DevOps</h2>
          <p>
            In DevOps, I treat these as complementary but distinct concepts:
          </p>
          <ul>
            <li><strong>Monitoring:</strong> Collect metrics, logs, and traces to detect anomalies and identify issues quickly.</li>
            <li><strong>Observability:</strong> Understand why issues occur by analyzing outputs to infer internal system state.</li>
          </ul>
          <p>
            A well-observed system allows teams to diagnose complex production issues faster, maintain confidence in continuous delivery, and optimize operations across services.
          </p>

          <h2>Tools and Setup: Building a DevOps Monitoring Stack</h2>
          <p>
            A layered monitoring stack is critical for reliability and fast feedback. Over the years, I've built monitoring stacks combining multiple layers:
          </p>
          <ul>
            <li><strong>Metrics:</strong> Prometheus collects system-level metrics (CPU, memory, disk, network) and custom business KPIs such as API response success rates or queue processing times.</li>
            <li><strong>Visualization:</strong> Grafana dashboards allow trend analysis and anomaly detection. Correlating multiple metrics helps identify root causes, e.g., a CPU spike causing increased error rates in API endpoints.</li>
            <li><strong>Error Tracking:</strong> Sentry captures exceptions with stack traces, affected users, and environment context, enabling rapid debugging before errors affect end users.</li>
            <li><strong>Cloud-Native Monitoring:</strong> CloudWatch, Azure Monitor, or GCP Stackdriver provide telemetry for cloud infrastructure components. Combining these with Prometheus/Grafana gives full-stack insights across services.</li>
          </ul>
          
          <div className="bg-muted border-l-4 border-primary p-4 my-6 rounded-r-lg">
            <p className="text-muted-foreground italic font-medium">
              "Metrics without context are noise. Observability transforms numbers into actionable insights."
            </p>
          </div>

          <p>
            I configure monitoring to answer critical DevOps questions:
          </p>
          <ul>
            <li>Are response times within SLA for critical endpoints?</li>
            <li>Are error rates trending upward over time?</li>
            <li>Are there early indicators of performance degradation?</li>
          </ul>

          <h2>Defining Alerts That Actually Work</h2>
          <p>
            Alerting is essential, but it must enable quick response without overwhelming the team. Alerts should enable fast response without creating alert fatigue. Here's how I handle them in practice:
          </p>

          <h3>1. Realistic Thresholds</h3>
          <p>
            Instead of arbitrary limits, I base alerts on historical system behavior and SLA expectations:
          </p>
          <ul>
            <li><strong>CPU usage:</strong> Alert only if usage exceeds 90% sustained for 5 minutes, rather than on every spike.</li>
            <li><strong>Error rates:</strong> Trigger alerts when errors exceed 2% of requests over 5 minutes, instead of a single 500 error.</li>
            <li><strong>Response time:</strong> Alert when average API latency exceeds 300ms over 10 minutes.</li>
          </ul>
          <p>
            Realistic thresholds reduce false positives and ensure that alerts indicate genuine operational issues.
          </p>

          <h3>2. Integrated Communication</h3>
          <p>
            Alerts must reach the team promptly and include escalation rules:
          </p>
          <ul>
            <li><strong>Slack:</strong> Post actionable alerts in a dedicated channel (#alerts-production).</li>
            <li><strong>Teams:</strong> Route critical Azure Monitor alerts to a monitored channel.</li>
            <li><strong>Opsgenie/PagerDuty:</strong> Escalate high-priority alerts to on-call engineers if unresolved within a set time.</li>
          </ul>
          
          <div className="bg-muted p-4 rounded-lg my-4 border border-border">
            <p className="font-semibold mb-2 text-foreground">Example workflow:</p>
            <p className="text-muted-foreground">Prometheus detects high error rate → alert posted to Slack → Opsgenie escalates to on-call if unresolved → engineer follows runbook to resolve.</p>
          </div>

          <h3>3. Runbooks</h3>
          <p>
            Runbooks provide step-by-step guidance to ensure consistent, confident responses. Examples:
          </p>
          <ul>
            <li><strong>Service outage:</strong> Check logs, verify database connectivity, restart failing services, confirm system health.</li>
            <li><strong>High error rate:</strong> Identify affected endpoints, roll back recent deployments if necessary, notify stakeholders.</li>
            <li><strong>Performance degradation:</strong> Analyze CPU/memory metrics, scale resources, adjust alert thresholds as needed.</li>
          </ul>
          <p>
            Runbooks reduce cognitive load during high-pressure incidents and standardize response across the team, regardless of who is on call.
          </p>

          <h2>Turning Incidents into Continuous Improvement</h2>
          <p>
            Every incident, minor or major, is an opportunity to improve reliability. After each incident, I conduct a post-mortem—even for minor glitches. We review:
          </p>
          <ul>
            <li>What went wrong?</li>
            <li>Why did it happen?</li>
            <li>How can recurrence be prevented?</li>
          </ul>
          <p>
            This feedback loop:
          </p>
          <ul>
            <li>Refines dashboards and metrics based on lessons learned</li>
            <li>Adjusts alert thresholds to reduce noise and increase accuracy</li>
            <li>Enhances team confidence by sharing insights and improving processes</li>
          </ul>
          <p>
            Over time, monitoring evolves from a reactive safety net into a proactive tool for optimizing system reliability.
          </p>

          <h2>Key DevOps Takeaways</h2>
          <ul>
            <li>Monitoring and observability are integral parts of the product</li>
            <li>Combine metrics, logs, and traces for full system insight</li>
            <li>Design alerts to be actionable and reduce unnecessary noise</li>
            <li>Treat incidents as feedback loops to continuously improve reliability</li>
            <li>Invest in observability early—it scales with both your systems and team maturity</li>
          </ul>

          <p>
            In DevOps, deploying code is only half the journey. Real value comes from ensuring systems are resilient, observable, and continuously improving, giving users a stable experience and teams the confidence to respond efficiently. By prioritizing monitoring and error tracking, you ensure that your users get a stable experience and your team can respond with confidence.
          </p>
        </div>
      </article>
    </div>
  )
}