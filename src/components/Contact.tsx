import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
  honeypot: z.string().optional()
})

type ContactForm = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    // Check honeypot for spam protection
    if (data.honeypot) {
      setIsSubmitting(false)
      return // Silent rejection for bots
    }
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    
    reset()
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "stanculea.ionut.93@gmail.com",
      href: "mailto:stanculea.ionut.93@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "(+40) 775 547 311",
      href: "tel:+40775547311"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bucharest, Romania",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/ionut-stanculea"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/ionut-stanculea"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://twitter.com/ionut_stanculea"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            Open to new opportunities and exciting cloud infrastructure projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <Input
                  {...register("honeypot")}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
              
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="btn-hero w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Professional Network</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="surface-card p-6">
              <h4 className="font-semibold mb-3">Let's collaborate!</h4>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in challenging cloud infrastructure projects 
                and DevOps transformations. Whether you need help with Azure migrations, 
                Kubernetes deployments, or CI/CD optimization, I'd love to discuss how 
                we can work together.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}