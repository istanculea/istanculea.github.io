import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function Blog() {
  const navigate = useNavigate()
  
  const blogPosts = [
    {
      id: 1,
      title: "Post Deployment: Monitoring and Error Tracking",
      excerpt: "Learn how to set up effective monitoring and error tracking post-deployment to maintain stable production environments and reduce downtime.",
      date: "August 17, 2025",
      readTime: "9 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1591696331114-ef848d2c0a58?w=800&h=400&fit=crop&crop=entropy&auto=format",
      slug: "/blog/post-deployment-monitoring",
      featured: true
    },
    {
      id: 2,
      title: "Database Setup: MongoDB",
      excerpt: "Step-by-step guide on setting up MongoDB for development and production, including indexing, replication, and security best practices.",
      date: "August 16, 2025",
      readTime: "7 min read",
      category: "Database",
      image: "https://images.unsplash.com/photo-1581090700227-6a04a4b1789f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      slug: "/blog/mongodb-setup"
    },
    {
      id: 3,
      title: "How to Build a Serverless Website with reCAPTCHA on AWS",
      excerpt: "A practical guide to deploying a fully serverless website using AWS Lambda, API Gateway, S3, and integrating Google reCAPTCHA for security.",
      date: "August 15, 2025",
      readTime: "12 min read",
      category: "Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=600&h=400&fit=crop&crop=entropy&auto=format",
      slug: "/blog/serverless-website-recaptcha"
    },
    {
      id: 4,
      title: "Create an OpenVPN Server in Seconds",
      excerpt: "Quickly set up a secure OpenVPN server on any cloud provider to safely connect remote teams and ensure encrypted communication.",
      date: "August 16, 2025",
      readTime: "8 min read",
      category: "Networking",
      image: "https://images.unsplash.com/photo-1558898410-773aee6e22b0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      slug: "/blog/openvpn-server-setup"
    },
    {
      id: 5,
      title: "Easy Ways to Manage Access Control List (ACL) on Linux",
      excerpt: "Learn simple and efficient methods to manage file and directory permissions on Linux systems using ACLs for enhanced security.",
      date: "August 17, 2025",
      readTime: "6 min read",
      category: "Linux",
      image: "https://images.unsplash.com/photo-1612831455548-769c57c35c90?w=600&h=400&fit=crop&crop=entropy&auto=format",
      slug: "/blog/linux-acl-management"
    }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured)

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    })
  }

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Technical Insights</h2>
          <p className="text-xl text-muted-foreground">
            Sharing knowledge on cloud infrastructure and DevOps practices
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.article 
            className="surface-card overflow-hidden mb-12 group cursor-pointer rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            onClick={() => navigate(featuredPost.slug)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={cardVariants}
          >
            <div className="relative aspect-[16/7] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <span className="cloud-badge bg-white/30 text-white">{featuredPost.category}</span>
                <h3 className="text-3xl font-bold mt-2">{featuredPost.title}</h3>
                <p className="mt-2 text-lg">{featuredPost.excerpt}</p>
                <Button 
                  variant="outline" 
                  className="mt-4 text-white border-white hover:bg-white hover:text-black"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(featuredPost.slug)
                  }}
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.article>
        )}

        {/* Grid of other posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="surface-card overflow-hidden group cursor-pointer rounded-lg shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1} // stagger after featured post
              variants={cardVariants}
              onClick={() => navigate(post.slug)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="cloud-badge">{post.category}</span>
                  <div className="flex items-center space-x-3">
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

                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-dark text-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(post.slug)
                  }}
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}