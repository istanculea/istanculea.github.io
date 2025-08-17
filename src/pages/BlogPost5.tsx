import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostLinuxACL() {
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
            <span className="cloud-badge">Linux</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 15, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>7 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Easy Ways to Manage Access Control List (ACL) on Linux
          </h1>
          
          <p className="text-xl text-muted-foreground">
            In this post, I'll share my hands-on approach, lessons learned, and practical tips for ACLs—perfect for sysadmins, DevOps engineers, or anyone managing multi-user Linux environments.
          </p>
        </header>
        
        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="/lovable-uploads/e98ddacc-29c4-4915-9c1c-3025e3925c7b.png"
            alt="Linux Access Control List Management and Permissions"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>
        
        <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why ACLs?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unix permissions work well for simple setups, but they fall short when:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Multiple users require different access levels in a shared directory.</li>
              <li>• Monitoring or backup services need read-only access.</li>
              <li>• Teams grow and evolve, making static permissions cumbersome.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              ACLs let you grant granular permissions to users and groups, define default permissions for new files, and keep access structured without resorting to repetitive sudo or manual fixes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Install ACL utilities if they're missing:
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4 border border-border">
              <code className="text-foreground"># Ubuntu/Debian<br />
              sudo apt install acl<br /><br />
              # RHEL/CentOS/Fedora<br />
              sudo yum install acl</code>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ensure your filesystem supports ACLs:
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm border border-border">
              <code className="text-foreground">mount | grep acl<br />
              # If not:<br />
              mount -o remount,acl /dev/sda1</code>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Essential Commands</h2>
            <div className="space-y-4">
              <div>
                <strong>View ACLs:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">getfacl /path/to/file</code>
              </div>
              <div>
                <strong>Grant user access:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">setfacl -m u:username:rwx /path/to/file</code>
              </div>
              <div>
                <strong>Grant group access:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">setfacl -m g:groupname:rx /path/to/directory</code>
              </div>
              <div>
                <strong>Remove ACL entry:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">setfacl -x u:username /path/to/file</code>
              </div>
              <div>
                <strong>Remove all ACLs:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">setfacl -b /path/to/file</code>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Real-World Use Cases</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Shared Project Directory:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm border border-border">
                  <code className="text-foreground">mkdir /shared/project<br />
                  setfacl -m d:g:developers:rwx /shared/project   # Default for new files<br />
                  setfacl -m g:developers:rwx /shared/project     # Current ACL</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Log File Access for Monitoring Users:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm border border-border">
                  <code className="text-foreground">setfacl -R -m u:monitor:r /var/log/myapp/</code>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              These setups prevent accidental overwrites while enabling safe collaboration.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Advanced Techniques</h2>
            
            <div className="space-y-4">
              <div>
                <strong>Recursive ACLs:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">setfacl -R -m u:username:rwx /path/to/directory/</code>
              </div>
              <div>
                <strong>Default ACLs:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">setfacl -m d:u:username:rwx /path/to/directory/</code>
              </div>
              <div>
                <strong>Backup ACLs before changes:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">getfacl -R /path &gt; backup.acl</code>
              </div>
              <div>
                Prefer groups over individual users for scalable management
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Troubleshooting ACLs</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div><strong>Filesystem Support:</strong> Confirm ACLs are enabled; remount if necessary.</div>
              <div><strong>Effective Permissions:</strong> Use <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">getfacl -e</code> to check what actually applies.</div>
              <div><strong>Default ACLs:</strong> Only affect new files—verify with <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">getfacl -d</code>.</div>
              <div><strong>Application Behavior:</strong> Some apps ignore ACLs depending on umask—always test.</div>
              <div><strong>Recursive Operations:</strong> Audit with <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">getfacl -R /path</code> to ensure full coverage.</div>
              <div><strong>Conflicts:</strong> Remove redundant entries with <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">setfacl -x</code>.</div>
              <div><strong>NFS Limitations:</strong> ACLs must be supported on both server and client.</div>
              <div><strong>Backup & Restore:</strong> Test your backup ACLs with <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">setfacl --restore</code>.</div>
              <div><strong>Audit & Logging:</strong> Track changes with <code className="bg-muted px-2 py-1 rounded font-mono text-sm text-foreground border border-border">auditctl -w /path/to/dir -p rwa</code>.</div>
              <div><strong>Common Pitfalls:</strong> Mixing chmod and ACLs, missing default ACLs, or granting unnecessary access.</div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-foreground leading-relaxed">
                  Start small and expand gradually.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-foreground leading-relaxed">
                  Default ACLs prevent unexpected gaps in permissions.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-foreground leading-relaxed">
                  Test ACLs with the actual applications using the files.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-foreground leading-relaxed">
                  Document every change—it saves headaches later.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-foreground leading-relaxed">
                  Groups &gt; individual users for maintainable setups.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground leading-relaxed">
              ACLs transform multi-user Linux systems from fragile and error-prone into structured, secure, and reliable environments. With thoughtful planning, proper testing, and documentation, ACLs pay dividends in operational efficiency and peace of mind.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
