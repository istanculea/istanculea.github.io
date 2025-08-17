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
  Sparkles
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const technicalSkills = [
    {
      category: "Cloud Platforms",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["AWS", "Azure"]
    },
    {
      category: "CI/CD Tools", 
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["GitLab CI", "Jenkins"]
    },
    {
      category: "Containers & Orchestration",
      icon: <Container className="h-5 w-5" />,
      skills: ["Docker", "Kubernetes"]
    },
    {
      category: "Monitoring & Logging",
      icon: <BarChart3 className="h-5 w-5" />,
      skills: ["Grafana"]
    },
    {
      category: "Scripting & Automation",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["PowerShell", "Bash", "Python"]
    },
    {
      category: "Version Control",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["Git"]
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Other Tools",
      icon: <Settings className="h-5 w-5" />,
      skills: ["Jira", "Confluence", "Selenium", "CATIA V5", "Solid Edge", "AutoCAD"]
    }
  ]

  const languageSkills = [
    { language: "Romanian", level: "Native", percentage: 100 },
    { language: "English", level: "Proficient (C2)", percentage: 95 },
    { language: "Spanish", level: "Intermediate (B1)", percentage: 70 },
    { language: "Italian", level: "Basic (A2)", percentage: 45 }
  ]

  const interests = [
    "Smart Home Automation",
    "DIY Tech Projects", 
    "3D Printing"
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container max-w-6xl mx-auto relative space-y-16">
        
        {/* Technical Skills Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Core Capabilities</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hands-on with cloud, CI/CD, containers, and observability—delivering reliable, scalable systems.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {technicalSkills.map((category, index) => (
              <div 
                key={category.category}
                className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover-scale"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium">Communication</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Languages</h2>
            <p className="text-muted-foreground">
              Fluent, business-ready communication.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {languageSkills.map((lang, index) => (
                <div 
                  key={lang.language}
                  className="space-y-3 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{lang.language}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                  <Progress value={lang.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Personal</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Interests</h2>
            <p className="text-muted-foreground">
              What drives my curiosity outside of work.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <Badge 
                  key={interest}
                  variant="outline" 
                  className="text-base py-2 px-4 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}