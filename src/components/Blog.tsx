import { CSSProperties } from "react"
import { Calendar, Clock, ArrowRight, NotebookPen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

export function Blog() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  
  const blogPosts = [
    {
      id: 1,
      title: "Post Deployment: Monitoring and Error Tracking",
      excerpt: "Learn how to set up effective monitoring and error tracking post-deployment to maintain stable production environments and reduce downtime.",
      date: "August 17, 2025",
      readTime: "15 min read",
      category: "DevOps",
      image: "/lovable-uploads/c1178383-bd7a-40e1-aaba-c8fad01d0123.png",
      slug: "/blog/post-deployment-monitoring",
      featured: true
    },
    {
      id: 2,
      title: "Database Setup: MongoDB – Lessons from My Projects",
      excerpt: "Step-by-step guide on setting up MongoDB for development and production, including indexing, replication, and security best practices.",
      date: "August 16, 2025",
      readTime: "7 min read",
      category: "Database",
      image: "/lovable-uploads/aa9dab4a-1c28-4a0e-a6b6-3715a9725d8d.png",
      slug: "/blog/mongodb-setup"
    },
    {
      id: 3,
      title: "How to Build a Serverless Website with reCAPTCHA on AWS",
      excerpt: "Serverless architectures are game changers for developers who want fast deployment, automatic scaling, and minimal infrastructure overhead.",
      date: "August 15, 2025",
      readTime: "13 min read",
      category: "Cloud Infrastructure",
      image: "/lovable-uploads/c561fe0a-dba4-46c4-bc12-60f7d1ae6f5b.png",
      slug: "/blog/serverless-website-recaptcha"
    },
    {
      id: 4,
      title: "Deploy a Secure OpenVPN Server in Minutes: Step-by-Step Guide",
      excerpt: "Secure remote access is a must in modern infrastructures—whether for remote teams, personal labs, or connecting multiple office sites.",
      date: "August 16, 2025",
      readTime: "10 min read",
      category: "Networking",
      image: "/lovable-uploads/de9e7292-3c71-4a96-a5fb-1ff3991f7846.png",
      slug: "/blog/openvpn-server-setup"
    },
    {
      id: 5,
      title: "Easy Ways to Manage Access Control List (ACL) on Linux",
      excerpt: "Learn simple and efficient methods to manage file and directory permissions on Linux systems using ACLs for enhanced security.",
      date: "August 17, 2025",
      readTime: "6 min read",
      category: "Linux",
      image: "/lovable-uploads/e98ddacc-29c4-4915-9c1c-3025e3925c7b.png",
      slug: "/blog/linux-acl-management"
    }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="py-24 px-6" data-reveal>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16" data-reveal-item>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <NotebookPen className="h-8 w-8 text-primary" />
            {t('blog.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <article 
            className="rounded-xl border border-border overflow-hidden mb-12 group cursor-pointer bg-card/80 transition-all duration-300 card-interactive"
            onClick={() => navigate(featuredPost.slug)}
            data-reveal-item
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            <div className="relative aspect-[16/7] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-6 text-white space-y-3">
                <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-white/15">{featuredPost.category}</span>
                <h3 className="text-2xl font-semibold">{featuredPost.title}</h3>
                <p className="text-sm text-white/80">{featuredPost.excerpt}</p>
                <Button 
                  variant="outline" 
                  className="mt-2 bg-transparent text-white border-white/60 hover:bg-white hover:text-black"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(featuredPost.slug)
                  }}
                >
                  {t('blog.readMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>
        )}

        {/* Grid of other posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-card/80 border border-border overflow-hidden group cursor-pointer rounded-xl transition-all duration-300 card-interactive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => navigate(post.slug)}
              tabIndex={0}
              role="button"
              aria-label={`Read article: ${post.title}`}
              data-reveal-item
              style={{ "--reveal-delay": `${(index + 1) * 90}ms` } as CSSProperties}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full">{post.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-medium text-primary text-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(post.slug)
                  }}
                >
                  {t('blog.readMore')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-reveal-item style={{ "--reveal-delay": "200ms" } as CSSProperties}>
          <Button 
            variant="outline"
            onClick={() => navigate('/blog')}
          >
            {t('blog.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  )
}
