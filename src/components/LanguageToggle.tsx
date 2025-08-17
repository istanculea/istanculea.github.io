import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, ChevronDown, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Language, languageNames, supportedLanguages } from "@/i18n";
import { pathWithLang, getCurrentLangFromPath } from "@/lib/langPath";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  
  const currentLang = getCurrentLangFromPath();

  const handleLanguageChange = (lang: Language) => {
    // Update i18next language
    i18n.changeLanguage(lang);
    
    // Save to localStorage
    localStorage.setItem('portfolio-lang', lang);
    
    // Navigate to the same page in the new language
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Remove current language prefix if exists
    let cleanPath = currentPath;
    if (currentPath.startsWith('/es') || currentPath.startsWith('/ro')) {
      cleanPath = currentPath.substring(3) || '/';
    }
    
    // Build new path with selected language
    const newPath = pathWithLang(cleanPath + currentHash, lang);
    
    // Navigate to new URL
    window.location.href = newPath;
    
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 px-3 font-medium"
          aria-label="Select language"
        >
          <Languages className="h-4 w-4 mr-2" />
          {languageNames[currentLang]}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-1" align="end">
        <div className="space-y-1">
          {supportedLanguages.map((lang) => (
            <Button
              key={lang}
              variant="ghost"
              size="sm"
              className="w-full justify-between h-8 px-2 font-normal"
              onClick={() => handleLanguageChange(lang)}
            >
              <span>{languageNames[lang]}</span>
              {currentLang === lang && <Check className="h-4 w-4" />}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}