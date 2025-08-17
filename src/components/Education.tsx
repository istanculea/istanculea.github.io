import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const certifications = [
    "Microsoft Azure Fundamentals (AZ-900)",
    "Microsoft Azure Administrator Associate (AZ-104)",
    "Test Automation Foundations",
    "Agile Test Automation Training",
    "Scrum: The Basics",
    "Agile Requirements Foundations",
    "Programming Foundations: Software Testing/QA"
  ]

  return (
    <section id="education" className="py-20 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground">
            Academic background and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="surface-card p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-primary">Bachelor of Engineering</h4>
                <p className="text-lg font-medium">Industrial Engineering</p>
                <p className="text-muted-foreground">University Politehnica Bucharest</p>
                <div className="flex items-center space-x-2 mt-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>2012 – 2016</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="surface-card p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Training & Certifications</h3>
            </div>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}