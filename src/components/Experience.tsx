import { CSSProperties } from "react"
import { Building2, Calendar, MapPin, Briefcase, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function Experience() {
  const { t } = useTranslation()
  
  const experiences = [
    {
      title: t('experience.ea.title'),
      company: t('experience.ea.company'),
      location: t('experience.ea.location'),
      period: t('experience.ea.period'),
      achievements: t('experience.ea.achievements', { returnObjects: true })
    },
    {
      title: t('experience.autodesk.title'),
      company: t('experience.autodesk.company'),
      location: t('experience.autodesk.location'),
      period: t('experience.autodesk.period'),
      achievements: t('experience.autodesk.achievements', { returnObjects: true })
    },
    {
      title: t('experience.altenLead.title'),
      company: t('experience.altenLead.company'),
      location: t('experience.altenLead.location'),
      period: t('experience.altenLead.period'),
      achievements: t('experience.altenLead.achievements', { returnObjects: true })
    },
    {
      title: t('experience.altenEngineer.title'),
      company: t('experience.altenEngineer.company'),
      location: t('experience.altenEngineer.location'),
      period: t('experience.altenEngineer.period'),
      achievements: t('experience.altenEngineer.achievements', { returnObjects: true })
    },
    {
      title: t('experience.expleo.title'),
      company: t('experience.expleo.company'),
      location: t('experience.expleo.location'),
      period: t('experience.expleo.period'),
      achievements: t('experience.expleo.achievements', { returnObjects: true })
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-background" data-reveal>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16" data-reveal-item>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            {t('experience.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="rounded-xl border border-border bg-card/70 p-6 card-interactive"
              data-reveal-item
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground bg-surface px-3 py-2 rounded-lg text-sm border border-border">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {(exp.achievements as string[]).map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12" data-reveal-item style={{ "--reveal-delay": "120ms" } as CSSProperties}>
          <Button
            variant="outline"
            className="group px-6"
            onClick={() => {
              const target = document.getElementById('skills')
              target?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t('nav.skills')}
            <ArrowDown className="h-4 w-4 ml-2 transition-transform group-hover:translate-y-0.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
