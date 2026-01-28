import { ArrowDown, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Centered, text-focused content */}
        <div className="text-center space-y-8 animate-fade-up">
          <div className="space-y-6">
            {/* Single badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full backdrop-blur-sm">
                Cloud Operations Engineer
              </span>
            </div>
            
            <p className="text-xl text-muted-foreground font-medium">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              {t('hero.name')}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light max-w-3xl mx-auto">
              {t('hero.title')}
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          {/* Pill-style badges for location and email */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300">
              <span>📍</span>
              <span>{t('hero.location')}</span>
            </span>
            <a 
              href="mailto:stanculea.ionut.93@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full text-muted-foreground hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <span>✉️</span>
              <span>{t('hero.email')}</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/cv.pdf'
                link.download = 'Ionut_Stanculea_CV.pdf'
                link.click()
              }}
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              {t('hero.downloadCV')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="group border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-300"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More About Me
              <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}