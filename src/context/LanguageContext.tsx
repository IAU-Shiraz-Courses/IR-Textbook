import { createContext, useContext, useMemo, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang, type TranslationShape } from "../i18n/translations";

interface LanguageContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: TranslationShape;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fa");

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "fa" ? "en" : "fa";
      document.documentElement.lang = next;
      document.documentElement.dir = next === "fa" ? "rtl" : "ltr";
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: lang === "fa" ? "rtl" : "ltr",
      t: translations[lang],
      toggleLang,
    }),
    [lang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
