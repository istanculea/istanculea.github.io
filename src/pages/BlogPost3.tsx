import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostServerlessRecaptcha() {
  const navigate = useNavigate()

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
            Back to Home
          </Button>

          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            Back to Blog
          </Button>
        </div>

        <header className="mb-12 space-y-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="cloud-badge">Serverless</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 16, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>13 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            How to Build a Serverless Website with reCAPTCHA on AWS
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Serverless architectures are game changers for developers who want fast deployment, automatic scaling, and minimal infrastructure overhead. Recently, I built a serverless website that integrates Google reCAPTCHA to prevent spam and abuse, and the experience reinforced some key lessons about architecture, security, and observability.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="/lovable-uploads/c561fe0a-dba4-46c4-bc12-60f7d1ae6f5b.png"
            alt="AWS Serverless Architecture with Lambda and reCAPTCHA"
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
          <p>
            In this post, I'll share the full journey, from initial planning to production deployment, including real-world challenges, AWS-specific tips, and things I wish I'd known at the start.
          </p>

          <h2>Why Serverless? My Motivation</h2>
          <p>
            When I first approached this project, the goal was simple: deploy a website quickly, make it scalable, and avoid managing servers. In the past, I had spent countless hours patching servers, resizing EC2 instances, or troubleshooting Nginx configurations—tasks that don't add value for end users.
          </p>
          <p>
            Serverless solves these pain points:
          </p>
          <ul>
            <li>AWS Lambda runs your code on-demand, without provisioning servers.</li>
            <li>Amazon S3 hosts static assets reliably and cost-effectively.</li>
            <li>API Gateway handles routing and request validation automatically.</li>
          </ul>
          <p>
            From experience, this architecture allows me to focus on code quality, UX, and security rather than operations. It also reduces operational overhead while providing automatic scaling during traffic spikes.
          </p>

          <h2>Planning the Architecture: Lessons Learned</h2>
          <p>
            Before writing any code, I spent time mapping the architecture:
          </p>
          <ul>
            <li>Static website hosted on S3, delivered via CloudFront for global, low-latency access.</li>
            <li>Lambda functions behind API Gateway handle form submissions, contact forms, or other dynamic interactions.</li>
            <li>Integration with Google reCAPTCHA v3 to validate user actions and prevent spam.</li>
            <li>DynamoDB as a serverless database to store validated inputs securely.</li>
          </ul>
          <p>
            From previous deployments, I learned that planning upfront prevents operational headaches. For instance, integrating reCAPTCHA later caused extra code refactoring and delayed deployments. Adding it at the start simplified workflows and reduced spam from day one.
          </p>

          <h2>Step-by-Step Implementation: From Personal Experience</h2>
          
          <h3>1. Hosting Static Assets with S3 and CloudFront</h3>
          <p>
            I configured S3 buckets with static website hosting, uploaded HTML/CSS/JS files, and restricted public access.
          </p>
          <p>
            CloudFront distribution ensured low-latency delivery worldwide. I also set up HTTPS with ACM certificates to secure traffic.
          </p>
          <p>
            <strong>Lesson learned:</strong> Always test CloudFront invalidation, especially after frequent updates—bypassing stale cached files is a common pitfall.
          </p>

          <h3>2. Handling Backend Logic with Lambda & API Gateway</h3>
          <p>
            Each form submission triggers a Lambda function via API Gateway.
          </p>
          <p>
            I structured Lambda functions as small, single-purpose units, making debugging and scaling easier.
          </p>
          <p>
            <strong>Challenges I faced:</strong> cold starts during initial testing. I mitigated this by enabling provisioned concurrency for critical endpoints.
          </p>

          <h3>3. Integrating Google reCAPTCHA</h3>
          <p>
            I used reCAPTCHA v3, which evaluates user interactions and provides a risk score.
          </p>
          <p>
            On the backend, Lambda validates the token with Google's API before storing data in DynamoDB.
          </p>
          <p>
            <strong>Lesson learned:</strong> always validate server-side, never rely solely on client-side validation—bots can bypass front-end scripts.
          </p>

          <h3>4. Storing Data in DynamoDB</h3>
          <p>
            I used DynamoDB for storing validated form submissions.
          </p>
          <p>
            Configured on-demand capacity initially, then adjusted read/write capacities based on traffic.
          </p>
          <p>
            <strong>Tips from personal experience:</strong> design partition keys carefully to avoid hot partitions, especially if certain forms receive heavy traffic.
          </p>

          <h2>Security Lessons: Real-World Takeaways</h2>
          <p>
            Security is often underestimated in serverless setups:
          </p>
          <ul>
            <li><strong>S3 bucket policies:</strong> I restricted buckets to allow CloudFront only and denied all public access.</li>
            <li><strong>IAM roles:</strong> Lambda functions ran with least privilege, preventing accidental access to other resources.</li>
            <li><strong>Data encryption:</strong> DynamoDB and S3 encrypted sensitive data at rest; API Gateway and CloudFront ensured HTTPS in transit.</li>
            <li><strong>Throttling:</strong> API Gateway request limits prevented misuse and protected Lambda from being overwhelmed.</li>
          </ul>
          <p>
            From experience, skipping any of these steps can lead to subtle vulnerabilities, even in a serverless environment.
          </p>

          <h2>Observability and Performance</h2>
          <p>
            Monitoring serverless functions is different than traditional servers:
          </p>
          <ul>
            <li>CloudWatch metrics track invocations, errors, and duration.</li>
            <li>I added custom CloudWatch logs for Lambda to capture submission metadata, reCAPTCHA validation outcomes, and error traces.</li>
          </ul>
          <p>
            <strong>Lesson learned:</strong> set alarms for high error rates or unusually long execution times—this caught a misconfigured reCAPTCHA secret before users were impacted.
          </p>

          <h2>Challenges I Encountered and Lessons Learned</h2>
          <ul>
            <li><strong>Cold starts in Lambda:</strong> Critical endpoints needed provisioned concurrency to avoid slow initial responses.</li>
            <li><strong>ReCAPTCHA validation edge cases:</strong> Users with browser privacy restrictions sometimes scored low; I implemented fallback checks.</li>
            <li><strong>Caching & CloudFront:</strong> Early deployments had stale cached pages; invalidation scripts solved this problem.</li>
            <li><strong>Serverless observability:</strong> Without proper logging and metrics, debugging failures in distributed serverless systems is painful—plan logging early.</li>
          </ul>

          <h2>Key Takeaways from Real Deployments</h2>
          <ul>
            <li>Serverless simplifies scaling, but operational discipline is still required: monitoring, logging, and IAM policies matter.</li>
            <li>Integrate security early, including reCAPTCHA, HTTPS, and encryption.</li>
            <li>Automation saves time: S3 deployments, Lambda updates, and CloudFront invalidations should all be scripted.</li>
            <li>Observability is critical: Metrics, logs, and alarms are your first line of defense against silent failures.</li>
            <li>Plan for edge cases: Cold starts, API throttling, and reCAPTCHA exceptions can affect real users.</li>
          </ul>
          <p>
            Deploying a serverless website isn't just about removing servers—it's about building a scalable, secure, and maintainable system that can grow with your users. From my experience, attention to detail, automation, and proactive observability turn serverless from a convenient technology into a reliable production-ready platform.
          </p>
        </div>
      </article>
    </div>
  )
}