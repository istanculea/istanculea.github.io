import { GraduationCap, Award, BookOpen, GraduationCap as LearningIcon, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function Education() {
  const { t } = useTranslation()
  
  const certifications = [
    "Agile Test Automation - Learning Tree International",
    "API Testing Foundations - LinkedIn",
    "Scrum: The Basics - LinkedIn",
    "Scrum: Advanced - LinkedIn",
    "Agile Requirements Foundations - LinkedIn",
    "Business Analysis Foundations - LinkedIn",
    "Programming Foundations: Software Testing/QA - LinkedIn"
  ]

  return (
    <section id="education" className="py-24 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <LearningIcon className="h-8 w-8 text-primary" />
            {t('education.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-border bg-card/70 p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{t('education.education')}</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-semibold text-foreground">{t('education.degree')}</h4>
                <p className="text-base font-medium text-foreground">{t('education.field')}</p>
                <p className="text-muted-foreground">{t('education.university')}</p>
                <div className="flex items-center space-x-2 mt-2 text-muted-foreground text-sm">
                  <BookOpen className="h-4 w-4" />
                  <span>{t('education.period')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/70 p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{t('education.certifications')}</h3>
            </div>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="group px-6"
            onClick={() => {
              const target = document.getElementById('blog')
              target?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t('nav.blog')}
            <ArrowDown className="h-4 w-4 ml-2 transition-transform group-hover:translate-y-0.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
