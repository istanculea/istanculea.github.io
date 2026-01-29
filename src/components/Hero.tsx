import React from 'react';
import { Button } from '@/components/ui/button';
import { Cloud, Code, Server, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Cloud className="absolute top-24 left-[15%] w-8 h-8 text-primary/20 animate-float" />
        <Server className="absolute bottom-32 right-[20%] w-10 h-10 text-primary/15 animate-float" style={{ animationDelay: '1s' }} />
        <Code className="absolute top-1/3 right-[15%] w-7 h-7 text-primary/20 animate-float" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-1/4 left-[20%] w-6 h-6 text-primary/15 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 hero-entrance">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Cloud Infrastructure & DevOps Expert</span>
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
              Ionuț Stănculea
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building reliable, scalable cloud infrastructure with{' '}
            <span className="text-primary font-semibold">AWS</span>,{' '}
            <span className="text-primary font-semibold">Azure</span>, and{' '}
            <span className="text-primary font-semibold">DevOps</span> best practices
          </p>

          {/* Key highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>5+ years of experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Hybrid Cloud Specialist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Infrastructure as Code</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary-dark min-h-[48px]"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 hover:bg-primary/5 transition-all duration-300 min-h-[48px]"
              onClick={() => scrollToSection('experience')}
            >
              View Experience
            </Button>
          </div>

          {/* Tech stack preview */}
          <div className="pt-12 flex flex-wrap justify-center gap-4 opacity-60">
            {['Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'AWS', 'Azure', 'Python', 'CI/CD'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1.5 text-xs font-medium bg-card border border-border rounded-md hover:border-primary/50 hover:text-primary transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}