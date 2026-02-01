import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language, supportedLanguages } from "@/i18n";
import { pathWithLang, getCurrentLangFromPath } from "@/lib/langPath";

const langLabels: Record<Language, string> = {
  en: "ENG",
  es: "ESP",
  ro: "RO",
  it: "ITA"
};

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = getCurrentLangFromPath();

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('portfolio-lang', lang);

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    let cleanPath = currentPath;
    const langPrefixMatch = currentPath.match(/^\/(en|es|ro|it)(\/|$)/);
    if (langPrefixMatch) {
      cleanPath = currentPath.substring(langPrefixMatch[0].length - 1) || '/';
    }

    const newPath = pathWithLang(cleanPath + currentHash, lang);
    window.location.href = newPath;
  };

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      <div className="inline-flex rounded-lg bg-muted/60 p-1">
        {supportedLanguages.map((lang) => (
          <Button
            key={lang}
            variant={currentLang === lang ? "default" : "ghost"}
            size="sm"
            className="px-3"
            onClick={() => handleLanguageChange(lang)}
            aria-pressed={currentLang === lang}
          >
            {langLabels[lang]}
          </Button>
        ))}
      </div>
    </div>
  );
}
