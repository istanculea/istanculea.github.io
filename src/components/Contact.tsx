import { CSSProperties, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, MapPin, Github, Linkedin, Send, MessageSquare, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useTranslation, TFunction } from "react-i18next"
import { CONTACT, SOCIAL_LINKS, SERVICES } from "@/config/constants"

const buildContactSchema = (t: TFunction) => z.object({
  name: z.string().min(2, t('contact.validation.nameMin')).max(100, "Name must be less than 100 characters"),
  email: z.string().email(t('contact.validation.emailInvalid')).max(255, "Email must be less than 255 characters"),
  subject: z.string().min(3, t('contact.validation.subjectMin')).max(150, "Subject must be less than 150 characters"),
  message: z.string().min(10, t('contact.validation.messageMin')).max(2000, "Message must be less than 2000 characters"),
  honeypot: z.string().optional()
})

export function Contact() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const contactSchema = buildContactSchema(t)
  type ContactForm = z.infer<typeof contactSchema>
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    // Check honeypot for spam protection
    if (data.honeypot) {
      setIsSubmitting(false)
      return // Silent rejection for bots
    }
    
    try {
      // Submit to Formspree
      const response = await fetch(SERVICES.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        })
      })
      
      if (response.ok) {
        toast({
          title: t('contact.toast.success'),
          description: t('contact.toast.successDescription'),
        })
        reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      toast({
        title: t('contact.toast.error'),
        description: t('contact.toast.errorDescription'),
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t('contact.info.email'),
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t('contact.info.location'),
      value: CONTACT.location,
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      href: SOCIAL_LINKS.linkedin
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: SOCIAL_LINKS.github
    }
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-surface" data-reveal>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16" data-reveal-item>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <MessageSquare className="h-8 w-8 text-primary" />
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-card/70 p-6 sm:p-8 card-interactive" data-reveal-item style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <h3 className="text-xl font-semibold mb-6">{t('contact.form.send')}</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <Input
                  {...register("honeypot")}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
              
              <div>
                <Label htmlFor="name" className="sr-only">{t('contact.form.namePlaceholder')}</Label>
                <Input
                  id="name"
                  placeholder={t('contact.form.namePlaceholder')}
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="sr-only">{t('contact.form.emailPlaceholder')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject" className="sr-only">{t('contact.form.subjectPlaceholder')}</Label>
                <Input
                  id="subject"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  {...register("subject")}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="sr-only">{t('contact.form.messagePlaceholder')}</Label>
                <Textarea
                  id="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={5}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="btn-hero w-full group min-h-[48px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8" data-reveal-item style={{ "--reveal-delay": "200ms" } as CSSProperties}>
            <div>
              <h3 className="text-xl font-semibold mb-6">{t('footer.contact')}</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border border-border bg-card/70 transition-colors group card-interactive min-h-[56px]"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm sm:text-base">{item.label}</div>
                      <div className="text-muted-foreground text-xs sm:text-sm truncate">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">{t('contact.info.social')}</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all min-h-[48px] min-w-[48px] flex items-center justify-center"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">{t('contact.schedule.title')}</h3>
              <div className="p-4 sm:p-6 rounded-xl border border-border bg-card/70 card-interactive">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  {t('contact.schedule.description')}
                </p>
                <Button
                  onClick={() => window.open(SERVICES.calendlyUrl, '_blank')}
                  className="w-full group min-h-[48px]"
                  variant="outline"
                  aria-label={t('contact.schedule.buttonAriaLabel')}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {t('contact.schedule.button')}
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
