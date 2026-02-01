import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import ro from './locales/ro.json';
import it from './locales/it.json';

export type Language = 'en' | 'es' | 'ro' | 'it';

export const supportedLanguages: Language[] = ['en', 'es', 'ro', 'it'];

export const languageNames = {
  en: 'English',
  es: 'Español',
  ro: 'Română',
  it: 'Italiano'
};

export const LANGUAGE_STORAGE_KEY = 'portfolio-lang';

const resources = {
  en: { translation: en },
  es: { translation: es },
  ro: { translation: ro },
  it: { translation: it }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    supportedLngs: supportedLanguages,
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    
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
