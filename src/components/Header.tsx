import React, { useState, useEffect, useRef } from "react"
import { Menu, X, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { NavLink, useLocation } from "react-router-dom"
import { LanguageToggle } from "./LanguageToggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const ctaButtonRef = useRef<HTMLButtonElement>(null)

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Learning" }
  ]

  // Scroll spy for active section
  useEffect(() => {
    if (!isHomePage) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0.1
      }
    )

    const sections = document.querySelectorAll('#about, #experience, #skills, #education')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [isHomePage])

  // Scroll detection for header shrinking
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Magnetic effect for CTA button
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ctaButtonRef.current) return
    
    const rect = ctaButtonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    const maxMove = 3
    const moveX = Math.max(-maxMove, Math.min(maxMove, x * 0.1))
    const moveY = Math.max(-maxMove, Math.min(maxMove, y * 0.1))
    
    ctaButtonRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
  }

  const handleMouseLeave = () => {
    if (ctaButtonRef.current) {
      ctaButtonRef.current.style.transform = 'translate(0px, 0px)'
    }
  }

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      window.location.href = `/${href}`
      return
    }
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleGetInTouch = () => {
    if (!isHomePage) {
      window.location.href = '/#contact'
      return
    }
    scrollToSection('#contact')
  }

  return (
    <header className={`fixed top-0 w-full z-50 header-transition ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 py-3 shadow-sm' 
        : 'bg-background/95 backdrop-blur-md border-b border-border/40 py-4'
    }`}>
      <nav className="container">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline ${
                  activeSection === item.href.slice(1) ? 'text-foreground underline underline-offset-8' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-medium flex items-center gap-2 transition-colors link-underline ${
                  isActive ? 'text-foreground underline underline-offset-8' : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              <PenLine className="h-4 w-4" />
              Blog
            </NavLink>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              ref={ctaButtonRef}
              variant="cta"
              size="sm"
              onClick={handleGetInTouch}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="hidden md:inline-flex transition-transform duration-200 px-4 h-10"
            >
              Get in Touch
            </Button>
            
            <LanguageToggle />
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            {/* Quick Access Row */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
              <NavLink
                to="/blog"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <PenLine className="h-4 w-4" />
                Blog
              </NavLink>
              <Button
                variant="cta"
                size="sm"
                onClick={() => {
                  handleGetInTouch()
                  setIsMenuOpen(false)
                }}
                className="ml-auto"
              >
                Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            
            {/* Section Links */}
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href)
                    setIsMenuOpen(false)
                  }}
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200 font-medium text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
