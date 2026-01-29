import { ArrowDown, Download, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center px-6 py-16 md:py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--accent)/0.08),_transparent_45%)]"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 hero-entrance">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-sm font-medium">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{t('hero.badge')}</span>
          </div>

          <div className="space-y-4">
            <p className="text-base text-muted-foreground">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t('hero.name')}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
              {t('hero.title')}
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-muted-foreground">
              <span>
📍</span>
              <span className="font-medium">{t('hero.location')}</span>
            </span>
            <a 
              href="mailto:stanculea.ionut.93@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Contact via email"
            >
              <span>
✉️</span>
              <span className="font-medium">{t('hero.email')}</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              size="lg"
              className="px-7"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/cv.pdf'
                link.download = 'Ionut_Stanculea_CV.pdf'
                link.click()
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              {t('hero.downloadCV')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-7"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.learnMore')}
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}