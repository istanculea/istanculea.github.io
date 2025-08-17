export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
          <p className="text-xl text-muted-foreground">
            Building resilient cloud infrastructure with expertise and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate Cloud, Infrastructure & Operations Engineer with over 7 years 
              of experience building, managing, and automating scalable infrastructure on Azure 
              and AWS. Currently working at Electronic Arts, I specialize in optimizing hybrid 
              cloud environments and implementing robust DevOps practices.
            </p>
            
            <p className="text-lg leading-relaxed">
              My expertise spans from Infrastructure as Code with Terraform to implementing 
              comprehensive monitoring solutions with Grafana. I have a proven track record 
              of reducing system incidents by 25% and deployment times by 35% through 
              automation and process optimization.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not optimizing cloud infrastructure, you'll find me working on smart 
              home automation projects, 3D printing prototypes, or exploring the latest 
              developments in cloud technologies.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="surface-card p-6 text-center">
                <div className="text-3xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground mt-2">Global Users Supported</div>
              </div>
              <div className="surface-card p-6 text-center">
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </div>
              <div className="surface-card p-6 text-center">
                <div className="text-3xl font-bold text-primary">25%</div>
                <div className="text-sm text-muted-foreground mt-2">Incident Reduction</div>
              </div>
              <div className="surface-card p-6 text-center">
                <div className="text-3xl font-bold text-primary">35%</div>
                <div className="text-sm text-muted-foreground mt-2">Deployment Optimization</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="cert-badge">Microsoft Azure Fundamentals (AZ-900)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="cert-badge">Microsoft Azure Administrator Associate (AZ-104)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Infrastructure as Code</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Automation & Efficiency</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Continuous Learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Incident Prevention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}