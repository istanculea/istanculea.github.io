import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostDatabaseMongoDB() {
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
            <span className="cloud-badge">Database</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 16, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>10 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Database Setup: MongoDB – Lessons from My Projects
          </h1>
          
          <p className="text-xl text-muted-foreground">
            I've worked on multiple projects where choosing the right database setup was crucial. Time and again, MongoDB has been my go-to for flexible, schema-less storage. In this post, I'll share my approach to setting up a robust MongoDB instance for development and production, including installation, performance, security, backups, and lessons learned along the way.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="/lovable-uploads/aa9dab4a-1c28-4a0e-a6b6-3715a9725d8d.png"
            alt="MongoDB database setup and configuration illustration"
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
          <h2>Why MongoDB?</h2>
          <p>
            MongoDB's document model makes it incredibly flexible for rapidly changing data structures. I often choose it when building APIs that evolve quickly, or when relationships between entities are sparse. Its scalability, replication features, and strong community support make it reliable for production workloads.
          </p>
          
          <p>
            From my experience, MongoDB works best when:
          </p>
          <ul>
            <li>APIs and data structures evolve rapidly</li>
            <li>Relationships between entities are sparse</li>
            <li>High availability and scalability are needed</li>
          </ul>

          <h2>Installation and Initial Setup</h2>
          <p>
            Getting MongoDB right from the start saves headaches later. Here's my approach:
          </p>
          
          <p>
            <strong>Official packages or Docker containers:</strong> Docker ensures reproducibility for dev; packages are preferred for production.
          </p>
          
           <div className="bg-muted p-4 rounded-lg font-mono text-sm my-4 border border-border">
             <code className="text-foreground">docker run -d -p 27017:27017 --name mongodb-dev -v mongo-data:/data/db mongo:7.0</code>
           </div>
          
          <p>
            <strong>Authentication:</strong> Always configure with strong credentials; never leave a blank admin account.
          </p>
          
          <p>
            <strong>Replica Sets:</strong> Even small environments benefit from replica sets for high availability and future scaling:
          </p>
          
           <div className="bg-muted p-4 rounded-lg font-mono text-sm my-4 border border-border">
             <code className="text-foreground">mongod --replSet rs0 --port 27017 --dbpath /data/db</code>
           </div>

          <h2>Performance and Indexing</h2>
          <p>
            Performance is critical. Some lessons I've learned:
          </p>
          
          <ul>
            <li><strong>Indexing:</strong> Analyze query patterns and create compound indexes where needed. Avoid over-indexing, which slows writes.</li>
            <li><strong>Monitoring:</strong> For large collections, monitor slow queries and use MongoDB's explain plan to optimize performance.</li>
            <li><strong>Aggregation & Caching:</strong> Use aggregation pipelines to reduce application-side processing and consider in-memory caching for frequent queries.</li>
          </ul>

          <h2>Backups and Disaster Recovery</h2>
          <p>
            Backups only matter if they can be restored. My approach:
          </p>
          
          <ul>
            <li><strong>Tools:</strong> Use built-in mongodump or managed cloud snapshots.</li>
            <li><strong>Testing:</strong> Regularly test restore procedures.</li>
            <li><strong>Offsite Backups:</strong> Maintain offsite copies for mission-critical apps and monitor replication lag.</li>
          </ul>
          
          <p>Example commands:</p>
          
           <div className="bg-muted p-4 rounded-lg font-mono text-sm my-4 border border-border">
             <code className="text-foreground"># Backup<br/>
             mongodump --db mydb --out /backups/mydb-$(date +%F)<br/><br/>
             # Restore<br/>
             mongorestore /backups/mydb-YYYY-MM-DD</code>
           </div>

          <h2>Security Best Practices</h2>
          <p>
            Security is non-negotiable. I implement:
          </p>
          
          <ul>
            <li>TLS/SSL for data in transit</li>
            <li>Network restrictions via firewalls or VPC peering</li>
            <li>Role-based access control (RBAC) to limit permissions</li>
            <li>Regular audit logs and monitoring for anomalies</li>
          </ul>

          <h2>Development vs Production Setup</h2>
           <div className="overflow-x-auto my-6">
             <table className="min-w-full border border-border">
               <thead>
                 <tr className="bg-muted">
                   <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Aspect</th>
                   <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Development</th>
                   <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Production</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className="border border-border px-4 py-2 font-medium text-foreground">Setup</td>
                   <td className="border border-border px-4 py-2 text-foreground">Docker, lightweight, fast iteration</td>
                   <td className="border border-border px-4 py-2 text-foreground">Official packages, high availability</td>
                 </tr>
                 <tr className="bg-muted">
                   <td className="border border-border px-4 py-2 font-medium text-foreground">Authentication</td>
                   <td className="border border-border px-4 py-2 text-foreground">Optional for local</td>
                   <td className="border border-border px-4 py-2 text-foreground">Mandatory TLS & RBAC</td>
                 </tr>
                 <tr>
                   <td className="border border-border px-4 py-2 font-medium text-foreground">Replica Sets</td>
                   <td className="border border-border px-4 py-2 text-foreground">Single-node or small set</td>
                   <td className="border border-border px-4 py-2 text-foreground">3+ nodes, failover, optional sharding</td>
                 </tr>
                 <tr className="bg-muted">
                   <td className="border border-border px-4 py-2 font-medium text-foreground">Backups</td>
                   <td className="border border-border px-4 py-2 text-foreground">Manual mongodump</td>
                   <td className="border border-border px-4 py-2 text-foreground">Automated snapshots, offsite, incremental</td>
                 </tr>
                 <tr>
                   <td className="border border-border px-4 py-2 font-medium text-foreground">Monitoring</td>
                   <td className="border border-border px-4 py-2 text-foreground">Basic logs</td>
                   <td className="border border-border px-4 py-2 text-foreground">Grafana, Prometheus, cloud-native alerts</td>
                 </tr>
                 <tr className="bg-muted">
                   <td className="border border-border px-4 py-2 font-medium text-foreground">Indexing</td>
                   <td className="border border-border px-4 py-2 text-foreground">Minimal, for testing</td>
                   <td className="border border-border px-4 py-2 text-foreground">Optimized for performance</td>
                 </tr>
               </tbody>
             </table>
           </div>
          
          <p>
            Treating dev and prod separately avoids costly mistakes, especially around security and performance.
          </p>

          <h2>Lessons Learned</h2>
          <p>
            MongoDB can scale beautifully if you plan ahead. Some key takeaways from my experience:
          </p>
          
          <ul>
            <li><strong>Plan for scaling:</strong> Replica sets and indexing pay off in the long run.</li>
            <li><strong>Secure early:</strong> Never leave accounts exposed, use TLS, and implement RBAC.</li>
            <li><strong>Monitor performance:</strong> Regularly check slow queries, replication lag, and resource usage.</li>
            <li><strong>Test backups:</strong> A backup that cannot be restored is useless.</li>
            <li><strong>Separate environments:</strong> Dev ≠ Prod—keep configs, credentials, and monitoring separate.</li>
          </ul>
          
          <p>
            By taking security, indexing, replication, and backups seriously, you create a stable foundation that grows with your applications.
          </p>
          
           <div className="bg-primary/10 border-l-4 border-primary p-4 my-6 rounded-r-lg">
             <p className="font-semibold text-primary">Pro Tip:</p>
             <p className="text-foreground">
               Treat your database as a first-class citizen in your infrastructure. Proper setup and maintenance prevent surprises and let your apps scale reliably.
             </p>
           </div>
        </div>
      </article>
    </div>
  )
}