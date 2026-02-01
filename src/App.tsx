import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useTranslation } from "react-i18next";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./i18n";
import { LANGUAGE_STORAGE_KEY, Language, supportedLanguages } from "./i18n";
import { getCurrentLangFromPath } from "./lib/langPath";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogIndex from "./pages/BlogIndex";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import PostLinuxACL from "./pages/PostLinuxACL";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";

const queryClient = new QueryClient();

// Language guard component
function LanguageGuard({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = getCurrentLangFromPath();

    // Validate and set language
    if (lang && supportedLanguages.includes(lang as Language)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang as Language);
    } else if (!lang) {
      // For routes without language prefix, use saved language if available
      const savedLang = (localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language) || currentLang;
      if (i18n.language !== savedLang) {
        i18n.changeLanguage(savedLang);
      }
    }

    // Update document language
    document.documentElement.lang = i18n.language;
  }, [lang, i18n]);

  // Redirect invalid language codes
  if (lang && !supportedLanguages.includes(lang as Language)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              {/* Routes without language prefix (default English) */}
              <Route path="/" element={<LanguageGuard><Index /></LanguageGuard>} />
              <Route path="/blog" element={<LanguageGuard><BlogIndex /></LanguageGuard>} />
              <Route path="/blog/post-deployment-monitoring" element={<LanguageGuard><BlogPost1 /></LanguageGuard>} />
              <Route path="/blog/mongodb-setup" element={<LanguageGuard><BlogPost2 /></LanguageGuard>} />
              <Route path="/blog/serverless-website-recaptcha" element={<LanguageGuard><BlogPost3 /></LanguageGuard>} />
              <Route path="/blog/openvpn-server-setup" element={<LanguageGuard><BlogPost4 /></LanguageGuard>} />
              <Route path="/blog/linux-acl-management" element={<LanguageGuard><PostLinuxACL /></LanguageGuard>} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/legal" element={<Legal />} />
              
              {/* Routes with language prefix */}
              <Route path="/:lang" element={<LanguageGuard><Index /></LanguageGuard>} />
              <Route path="/:lang/blog" element={<LanguageGuard><BlogIndex /></LanguageGuard>} />
              <Route path="/:lang/blog/post-deployment-monitoring" element={<LanguageGuard><BlogPost1 /></LanguageGuard>} />

              {/* Catch-all */}
              <Route path="*" element={<LanguageGuard><NotFound /></LanguageGuard>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
