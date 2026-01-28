import { ArrowDown, Download, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient orbs with IT/DevOps focused colors */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/30 via-blue-500/25 to-sky-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-500/25 via-teal-500/20 to-green-400/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-gradient-to-tr from-sky-500/20 via-cyan-500/15 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Centered, text-focused content */}
        <div className="text-center space-y-8">
          <div className="space-y-6 animate-fade-up">
            {/* Elegant badge with gradient effect */}
            <div className="flex justify-center" style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 text-primary border border-primary/25 rounded-full backdrop-blur-md shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-500 cursor-default">
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                {t('hero.badge')}
              </span>
            </div>
            
            <p className="text-xl text-muted-foreground font-medium tracking-wide animate-fade-up" style={{ animationDelay: '0.2s' }}>Hello, I'm</p>
            
            {/* Name with IT/DevOps focused gradient */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {t('hero.name')}
            </h1>
            
            {/* Subtitle with elegant styling */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <span className="bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/90 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h2>
          </div>
          
          {/* Description with glass effect card */}
          <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-6 py-4 bg-background/40 backdrop-blur-sm rounded-2xl border border-border/50">
              {t('hero.description')}
            </p>
          </div>

          {/* Pill-style badges for location and email with IT/DevOps hover effects */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-md border border-border/50 rounded-full text-muted-foreground hover:border-cyan-500/50 hover:text-foreground hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-default group">
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">📍</span>
              <span className="font-medium">{t('hero.location')}</span>
            </span>
            <a 
              href="mailto:stanculea.ionut.93@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-md border border-border/50 rounded-full text-muted-foreground hover:border-emerald-500/50 hover:text-primary hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
              aria-label="Contact via email"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">✉️</span>
              <span className="font-medium">{t('hero.email')}</span>
            </a>
          </div>

          {/* CTA Buttons with IT/DevOps gradients */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <Button 
              size="lg"
              className="group relative bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 hover:from-cyan-500 hover:via-blue-500 hover:to-teal-500 text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-0.5 px-8"
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
              className="group border-2 border-cyan-500/30 bg-background/50 backdrop-blur-sm hover:bg-cyan-500/10 hover:border-cyan-500/60 font-semibold transition-all duration-500 hover:-translate-y-0.5 px-8"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.learnMore')}
              <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator with gradient */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm border border-cyan-500/20">
          <ArrowDown className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        </div>
      </div>
    </section>
  )
}
