import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import portraitImg from "/lovable-uploads/63e2620a-0d4a-482f-82b4-7df585ec4907.png"

export function Hero() {
  const { t } = useTranslation()
  
  return (
    <section id="home" className="min-h-screen surface-hero flex items-center justify-center px-6 py-12">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="cloud-badge">{t('hero.badge1')}</span>
                <span className="cloud-badge">{t('hero.badge2')}</span>
              </div>
              <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gradient-enhanced">
                {t('hero.name')}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                {t('hero.title')}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>

            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <span>📍</span>
                <span>{t('hero.location')}</span>
              </span>
              <a 
                href="mailto:stanculea.ionut.93@gmail.com"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <span>✉️</span>
                <span>{t('hero.email')}</span>
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
                {t('hero.downloadCV')}
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl rotate-6 floating-element"></div>
              <img
                src={portraitImg}
                alt="Ionuț Stănculea - Cloud Infrastructure Engineer"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl hover-glow"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl shadow-glow opacity-80 pulse-glow"></div>
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