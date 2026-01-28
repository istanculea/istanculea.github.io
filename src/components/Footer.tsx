import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { pathWithLang } from "@/lib/langPath"
import { openConsentPreferences } from "@/lib/consent"

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.experience'), href: "#experience" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.education'), href: "#education" },
    { name: t('nav.blog'), href: pathWithLang("/blog") },
    { name: t('nav.getInTouch'), href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ionut-stanculea",
      icon: Linkedin
    },
    {
      name: "GitHub", 
      href: "https://github.com/ionut-stanculea",
      icon: Github
    }
  ]

  const scrollToSection = (href: string) => {
    if (href.includes("/blog")) {
      window.location.href = href
      return
    }
    
    if (href.startsWith('#')) {
      // Check if we're not on the home page
      if (!window.location.pathname.includes('#') && window.location.pathname !== '/' && !window.location.pathname.match(/^\/(es|ro)$/)) {
        window.location.href = pathWithLang(`/${href}`)
        return
      }
      
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      window.location.href = href
    }
  }

  return (
    <footer className="py-16 px-6 border-t border-border bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div className="space-y-4">
            <div className="text-2xl font-semibold text-foreground">Ionuț Stănculea</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
            <Button 
              variant="cta"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection('#contact')}
            >
              {t('footer.getInTouch')}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm hover:translate-x-1 transition-transform duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 text-left">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm" href="/privacy">
                Privacy
              </a>
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm" href="/legal">
                Legal
              </a>
              <button
                onClick={openConsentPreferences}
                className="text-muted-foreground hover:text-primary transition-colors text-sm text-left hover:translate-x-1 transition-transform duration-200"
              >
                Change consent
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <a 
                href="mailto:stanculea.ionut.93@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm group"
              >
                <Mail className="h-4 w-4 group-hover:text-primary transition-colors" />
                <span>stanculea.ionut.93@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>Remote / Europe</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.social')}</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm group"
                  >
                    <Icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                    <span>{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('footer.buildStatus')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
