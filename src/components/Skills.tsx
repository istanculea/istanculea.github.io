import { 
  Cloud, 
  Database, 
  GitBranch, 
  Settings, 
  Monitor,
  Server,
  Container,
  Shield
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Azure", "AWS", "Azure DevOps", "Azure Monitor", "CloudFormation", "ARM Templates"]
    },
    {
      title: "Infrastructure & Automation", 
      icon: <Server className="h-6 w-6" />,
      skills: ["Terraform", "Infrastructure as Code", "PowerShell", "Bash", "Python", "Jenkins"]
    },
    {
      title: "Containers & Orchestration",
      icon: <Container className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "Container Registry", "Helm", "Docker Compose", "Microservices"]
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["Grafana", "Azure Monitor", "Log Analytics", "Application Insights", "Prometheus", "AlertManager"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "Azure SQL", "Blob Storage", "Redis", "MongoDB"]
    },
    {
      title: "DevOps & Collaboration",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["GitHub", "CI/CD Pipelines", "Jira", "Confluence", "Selenium", "Agile"]
    }
  ]

  const additionalSkills = [
    { name: "CAD & Design", skills: ["CATIA V5", "Solid Edge", "AutoCAD"] },
    { name: "Languages", skills: ["Romanian (Native)", "English (C2)", "Spanish (B1)", "Italian (A2)"] }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Cloud infrastructure and DevOps technologies I work with daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="surface-card p-8 group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Additional Skills */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {additionalSkills.map((category) => (
            <div key={category.name} className="surface-card p-6">
              <h4 className="text-lg font-semibold mb-4">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}