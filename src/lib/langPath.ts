import { LANGUAGE_STORAGE_KEY, Language, supportedLanguages } from '@/i18n';

/**
 * Build a path with the appropriate language prefix
 * @param path - The path to build (e.g., "/blog", "#contact")
 * @param lang - The language code (optional, uses current if not provided)
 * @returns The path with language prefix (e.g., "/es/blog", "/ro#contact")
 */
export function pathWithLang(path: string, lang?: Language): string {
  // Get current language from URL or default to 'en'
  const currentLang = lang || getCurrentLangFromPath();
  
  // For English, keep clean URLs without prefix
  if (currentLang === 'en') {
    return path;
  }
  
  // Handle anchor links
  if (path.startsWith('#')) {
    return `/${currentLang}${path}`;
  }
  
  // Handle root path
  if (path === '/') {
    return `/${currentLang}`;
  }
  
  // Handle other paths
  return `/${currentLang}${path}`;
}

/**
 * Get the current language from the URL path
 * @returns The current language code
 */
export function getCurrentLangFromPath(): Language {
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  
  if (segments.length > 0) {
    const firstSegment = segments[0] as Language;
    if (supportedLanguages.includes(firstSegment)) {
      return firstSegment;
    }
  }
  
  const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
  return savedLang && supportedLanguages.includes(savedLang) ? savedLang : 'en';
}

/**
 * Navigate to a path with the current language
 * @param path - The path to navigate to
 * @param lang - Optional language override
 */
export function navigateWithLang(path: string, lang?: Language) {
  const finalPath = pathWithLang(path, lang);
  window.location.href = finalPath;
}

/**
 * Rebuild the current URL for a target language while preserving the hash
 * and removing any existing language prefix.
 * @param lang - Target language
 * @param path - Current pathname (defaults to window.location.pathname)
 * @param hash - Current hash (defaults to window.location.hash)
 */
export function buildPathForLanguage(
  lang: Language,
  path: string = window.location.pathname,
  hash: string = window.location.hash
): string {
  const langPattern = new RegExp(`^\\/(${supportedLanguages.join("|")})(\\/|$)`);
  const langPrefixMatch = path.match(langPattern);
  const cleanPath = langPrefixMatch
    ? path.substring(langPrefixMatch[0].length - 1) || '/'
    : path || '/';

  return pathWithLang(`${cleanPath}${hash}`, lang);
}
