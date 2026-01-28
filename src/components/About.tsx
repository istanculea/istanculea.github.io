import { Zap, Cloud, Wrench, Users, Activity, CheckCircle, MapPin, Heart, Award, Sparkles, Code2 } from "lucide-react"
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
    <section id="about" className="py-20 px-6 scroll-mt-20">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header with Badge */}
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          {/* Section badge with sparkle icon */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              {t('about.badge')}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{t('about.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            {/* Summary */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                {t('about.paragraph1')}
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                {t('about.paragraph2')}
              </p>

              <p className="text-lg leading-relaxed text-foreground flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                {t('about.paragraph3')}
              </p>
            </div>

            {/* Key Highlights with improved cards */}
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {chipHighlights.map((highlight, index) => {
                  const IconComponent = highlight.icon
                  return (
                    <div 
                      key={index}
                      className="group relative p-4 rounded-xl bg-gradient-to-br from-background to-muted/30 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Icon box */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm leading-relaxed pt-2">{highlight.text}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Core Skills in glass card */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-background to-muted/30 border border-border backdrop-blur-sm">
              {/* Icon header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('about.coreSkills')}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Certifications in styled cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('about.certifications')}</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div 
                    key={cert} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA with larger size */}
            <div className="pt-4">
              <Button 
                size="lg"
                variant="outline"
                className="relative overflow-hidden group border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20" 
                onClick={() => {
                  const experienceSection = document.getElementById('experience');
                  experienceSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MapPin className="h-5 w-5 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">{t('about.careerJourney')}</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image with sticky positioning */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="lg:sticky lg:top-24 relative animate-scale-in">
              <div className="relative">
                <img
                  src="/lovable-uploads/170f5004-9944-4459-b193-b8cca34127e6.png"
                  alt="Ionuț Stănculea - Cloud & Operations Engineer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover object-[50%_20%] rounded-full shadow-tech animate-float"
                  loading="lazy"
                  decoding="async"
                />
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-background"></div>
                {/* Gradient overlay effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}