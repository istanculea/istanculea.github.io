import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import portraitImg from "/lovable-uploads/63e2620a-0d4a-482f-82b4-7df585ec4907.png"

export function Hero() {
  return (
    <section id="home" className="min-h-screen surface-hero flex items-center justify-center px-6 py-12">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="cloud-badge">Azure Certified</span>
                <span className="cloud-badge">7+ Years</span>
              </div>
              <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Ionuț <span className="text-gradient">Stănculea</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Cloud & Operations Engineer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Cloud & Operations Engineer, with 7+ years of experience across IT Operations, Software Testing, and Support. 
              Currently focused on hybrid cloud environments in Azure and AWS, with expertise in incident management, automation, and monitoring. Hands-on experience in cloud service administration and ensuring platform reliability. Skilled at streamlining workflows and collaborating across teams to deliver stable, scalable, and high-performing infrastructure.
            </p>

            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <span>📍</span>
                <span>Remote / Europe</span>
              </span>
              <a 
                href="mailto:stanculea.ionut.93@gmail.com"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <span>✉️</span>
                <span>stanculea.ionut.93@gmail.com</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-outline group"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/cv.pdf'
                  link.download = 'Ionut_Stanculea_CV.pdf'
                  link.click()
                }}
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl rotate-6 animate-float"></div>
              <img
                src={portraitImg}
                alt="Ionuț Stănculea - Cloud Infrastructure Engineer"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl shadow-glow opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}