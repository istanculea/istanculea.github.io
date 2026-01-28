import { 
  Cloud, 
  GitBranch, 
  Container,
  BarChart3,
  Terminal,
  Database,
  Settings,
  Languages,
  Heart,
  Sparkles,
  Wrench,
  ArrowDown
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "react-i18next"

export function Skills() {
  const { t } = useTranslation()
  
  const technicalSkills = [
    {
      category: t('skills.cloud'),
      icon: <Cloud className="h-5 w-5" />,
      skills: ["AWS", "Azure"]
    },
    {
      category: "Infrastructure as Code",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["Terraform"]
    },
    {
      category: t('skills.automation'),
      icon: <Container className="h-5 w-5" />,
      skills: ["Kubernetes", "Docker"]
    },
    {
      category: t('skills.cicd'), 
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["Jenkins", "GitHub Actions"]
    },
    {
      category: t('skills.monitoring'),
      icon: <BarChart3 className="h-5 w-5" />,
      skills: ["Grafana", "Prometheus"]
    },
    {
      category: "Scripting",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["Bash", "PowerShell", "Python"]
    },
    {
      category: "Version Control",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["Git"]
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["PostgreSQL", "MySQL"]
    },
    {
      category: "Other Tools",
      icon: <Settings className="h-5 w-5" />,
      skills: ["Jira", "Confluence", "AutoCAD", "CATIA V5", "Revit"]
    }
  ]

  const languageSkills = [
    { language: "Romanian", level: "Native", percentage: 100 },
    { language: "English", level: "Proficient (C2)", percentage: 95 },
    { language: "Spanish", level: "Intermediate (B1)", percentage: 70 }
  ]

  const interests = [
    "Smart Home Automation",
    "DIY Tech Projects", 
    "3D Printing"
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-surface relative overflow-hidden">
      <div className="container max-w-6xl mx-auto relative space-y-14">
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/70 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Core Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <Wrench className="h-8 w-8 text-primary" />
              {t('skills.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('skills.subtitle')}
            </p>
          </div>
          
          <div className="grid gap-5 md:grid-cols-2">
            {technicalSkills.map((category) => (
              <div 
                key={category.category}
                className="rounded-xl border border-border bg-card/70 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-muted text-foreground border-border"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/70 text-accent">
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium">Communication</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Languages</h2>
            <p className="text-muted-foreground text-lg">
              Fluent, business-ready communication.
            </p>
          </div>
          
          <div className="rounded-xl border border-border bg-card/70 p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {languageSkills.map((lang) => (
                <div 
                  key={lang.language}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">{lang.language}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                  <Progress value={lang.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/70 text-red-500">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Personal</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Interests</h2>
            <p className="text-muted-foreground text-lg">
              What drives my curiosity outside of work.
            </p>
          </div>
          
          <div className="rounded-xl border border-border bg-card/70 p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest) => (
                <Badge 
                  key={interest}
                  variant="outline" 
                  className="text-base py-2 px-4 border-border text-foreground"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border hover:border-primary/60 transition-colors bg-background/70"
            onClick={() => {
              const target = document.getElementById('education')
              target?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t('nav.education')}
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  )
}
