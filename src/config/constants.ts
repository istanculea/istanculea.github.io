/**
 * Application Constants
 * 
 * Central configuration file for application-wide constants.
 * Values can be overridden using environment variables in production.
 */

// Contact Information
export const CONTACT = {
  email: 'stanculea.ionut.93@gmail.com',
  location: 'Bucharest, Romania',
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/istanculea',
  linkedin: 'https://www.linkedin.com/in/ionut-stanculea',
} as const;

// External Services
export const SERVICES = {
  formspreeEndpoint: 'https://formspree.io/f/xanypape',
  calendlyUrl: 'https://calendly.com/ionut-stanculea',
  plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || window.location.hostname,
} as const;

// SEO & Meta Information
export const META = {
  siteName: 'Ionuț Stănculea',
  siteUrl: 'https://ionut-stanculea.dev',
  title: 'Ionuț Stănculea - Cloud Infrastructure & Operations Engineer',
  description: 'Cloud Infrastructure & Operations Engineer with 5+ years of experience on Azure and AWS. Specializing in Infrastructure as Code, CI/CD optimization, and scalable cloud solutions.',
  author: 'Ionuț Stănculea',
} as const;
