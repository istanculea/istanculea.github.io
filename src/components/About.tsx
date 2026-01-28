import { Zap, Cloud, Wrench, Users, Activity, CheckCircle, MapPin, Heart, Award, Sparkles, Code2, UserRound, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"

export function About() {
  const { t } = useTranslation()
  
  const chipHighlights = [
    { icon: Zap, text: "7+ years in IT Operations, QA, and Cloud Engineering" },
    { icon: Cloud, text: "AWS, Azure, CI/CD, Terraform, Docker, Kubernetes" },
    { icon: Wrench, text: "Incident management, automation, platform reliability" },
    { icon: Users, text: "Agile/Scrum, cross‑functional collaboration" },
    { icon: Activity, text: "Monitoring, observability, performance in hybrid clouds" },
    { icon: CheckCircle, text: "QA automation and DevOps best practices" }
  ]

  const skills = [
    "Terraform", "Azure", "AWS", "CI/CD", "Automation", "Monitoring", "DevOps"
  ]

  const certifications = [
    "Microsoft Azure Fundamentals (AZ-900)",
    "Microsoft Azure Administrator Associate (AZ-104)"
  ]

  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-sm font-medium">
            <Sparkles className="h-4 w-4 text-primary" />
            {t('about.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <UserRound className="h-8 w-8 text-primary" />
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('about.paragraph1')}
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('about.paragraph2')}
              </p>

              <p className="text-base leading-relaxed text-muted-foreground flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                {t('about.paragraph3')}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {chipHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <div 
                    key={index}
                    className="rounded-xl border border-border bg-card/60 p-4 flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground">{highlight.text}</span>
                  </div>
                )
              })}
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t('about.coreSkills')}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-muted text-foreground border-border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t('about.certifications')}</h3>
              </div>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div 
                    key={cert} 
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button 
                size="lg"
                variant="outline"
                className="px-6"
                onClick={() => {
                  const experienceSection = document.getElementById('experience');
                  experienceSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ArrowDown className="h-5 w-5 mr-2" />
                {t('nav.experience')}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="lg:sticky lg:top-24">
              <div className="relative">
                <img
                  src="/lovable-uploads/170f5004-9944-4459-b193-b8cca34127e6.png"
                  alt="Ionuț Stănculea - Cloud & Operations Engineer"
                  className="w-72 h-72 lg:w-80 lg:h-80 object-cover object-[50%_20%] rounded-2xl border border-border shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
