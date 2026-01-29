/**
 * Application Constants
 * 
 * Central configuration file for application-wide constants.
 * Values can be overridden using environment variables in production.
 */

// Contact Information
export const CONTACT = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'stanculea.ionut.93@gmail.com',
  location: 'Bucharest, Romania',
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/istanculea',
  linkedin: 'https://www.linkedin.com/in/ionut-stanculea',
} as const;

// External Services
export const SERVICES = {
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xanypape',
  calendlyUrl: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/ionut-stanculea',
  // Note: plausibleDomain should be accessed via getPlausibleDomain() to ensure window is defined
  getPlausibleDomain: () => {
    if (typeof window !== 'undefined') {
      return import.meta.env.VITE_PLAUSIBLE_DOMAIN || window.location.hostname;
    }
    return import.meta.env.VITE_PLAUSIBLE_DOMAIN || 'ionut-stanculea.dev';
  },
} as const;

// SEO & Meta Information
export const META = {
  siteName: 'Ionuț Stănculea',
  siteUrl: 'https://ionut-stanculea.dev',
  title: 'Ionuț Stănculea - Cloud Infrastructure & Operations Engineer',
  description: 'Cloud Infrastructure & Operations Engineer with 5+ years of experience on Azure and AWS. Specializing in Infrastructure as Code, CI/CD optimization, and scalable cloud solutions.',
  author: 'Ionuț Stănculea',
} as const;
