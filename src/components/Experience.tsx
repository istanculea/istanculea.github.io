import { Building2, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Operations Engineer",
      company: "Electronic Arts",
      location: "Bucharest",
      period: "Oct 2021 – Present",
      achievements: [
        "Optimized hybrid cloud infrastructure (Azure & AWS) supporting 5,000+ global users, reducing system incidents and downtime by 25%.",
        "Integrated monitoring tools (Grafana, Azure Monitor), improving alert accuracy and incident response time.",
        "Automated deployment workflows using Terraform and Azure DevOps, reducing setup time by 35%.",
        "Led root cause analysis and resolution for high-impact outages, contributing to platform stability.",
        "Administered and maintained Jira Data Center, handling upgrades, performance tuning, plugin lifecycle management, and user access provisioning across multi-node deployments."
      ]
    },
    {
      title: "Senior Quality Assurance Analyst",
      company: "Autodesk",
      location: "Bucharest",
      period: "Nov 2019 – Jan 2021",
      achievements: [
        "Developed automated test cases (Selenium), improving test coverage by 35%.",
        "Collaborated with engineering teams to resolve performance issues, reducing load times by 20%.",
        "Facilitated QA best practices and mentored junior testers."
      ]
    },
    {
      title: "Support Team Lead",
      company: "ALTEN Romania",
      location: "Bucharest",
      period: "Mar 2019 – Nov 2019",
      achievements: [
        "Led a team delivering L2/L3 support, cutting escalation rates by 35% through process optimization.",
        "Improved visibility and accountability with Jira task management."
      ]
    },
    {
      title: "Support Engineer",
      company: "ALTEN Romania",
      location: "Bucharest",
      period: "Oct 2016 – Mar 2019",
      achievements: [
        "Resolved 1,000+ technical issues with a 96% first-time resolution rate.",
        "Streamlined collaboration between support and engineering teams."
      ]
    },
    {
      title: "Mechanical Design Engineer (Part-time)",
      company: "Expleo Group",
      location: "Bucharest",
      period: "May 2016 – Sep 2019",
      achievements: [
        "Designed automotive components in CATIA V5, aligning with OEM specs."
      ]
    },
    {
      title: "Mechanical Technician (Internship)",
      company: "Koyo",
      location: "Alexandria",
      period: "Jul 2015 – Sep 2015",
      achievements: [
        "Built CNC parts in Solid Edge and improved tech documentation accuracy."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">
            My journey through various roles in technology and engineering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="surface-card p-8 hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-muted-foreground">
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
                <div className="flex items-center space-x-2 text-muted-foreground bg-surface/50 px-4 py-2 rounded-lg">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}