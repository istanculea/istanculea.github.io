import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function Blog() {
  const navigate = useNavigate()
  
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Azure Infrastructure with Terraform",
      excerpt: "A comprehensive guide to implementing Infrastructure as Code on Azure, reducing deployment times by 35% and ensuring consistent environments across teams.",
      date: "March 12, 2024",
      readTime: "10 min read",
      category: "Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=entropy&auto=format",
      slug: "/blog/azure-terraform"
    },
    {
      id: 2, 
      title: "Building Resilient Monitoring with Grafana",
      excerpt: "How to implement comprehensive monitoring solutions that provide real-time insights and reduce incident response times by 40%.",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format",
      slug: "/blog/grafana-monitoring"
    },
    {
      id: 3,
      title: "Container Orchestration Best Practices",
      excerpt: "Lessons learned from managing Kubernetes clusters at scale, including security hardening, resource optimization, and disaster recovery strategies.",
      date: "February 15, 2024", 
      readTime: "12 min read",
      category: "Kubernetes",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop&crop=entropy&auto=format",
      slug: "/blog/kubernetes-best-practices"
    }
  ]

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Technical Insights</h2>
          <p className="text-xl text-muted-foreground">
            Sharing knowledge on cloud infrastructure and DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="surface-card overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => navigate(post.slug)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="cloud-badge">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-dark"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(post.slug)
                  }}
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}