import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import ro from './locales/ro.json';

export type Language = 'en' | 'es' | 'ro';

export const supportedLanguages: Language[] = ['en', 'es', 'ro'];

export const languageNames = {
  en: 'English',
  es: 'Español',
  ro: 'Română'
};

const resources = {
  en: { translation: en },
  es: { translation: es },
  ro: { translation: ro }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
    },

    interpolation: {
      escapeValue: false,
    },
  });

// Update document language when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;