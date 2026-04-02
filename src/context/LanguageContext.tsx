import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import type { ReactNode } from "react";
import type { Locale, TranslationKeys } from "../i18n";
import { translations, getTranslationProxy } from "../i18n";

const STORAGE_KEY = "amr_eye_center_lang";

/**
 * Interface for the Language Context State
 */
interface LanguageContextType {
  /** The currently active locale (e.g., 'EN' or 'BN') */
  language: Locale;
  /** Function to switch the active language */
  setLanguage: (lang: Locale) => void;
  /** 
   * The translation object for the currently active language.
   * This provides type-safe access to all keys defined in en.ts.
   */
  t: TranslationKeys;
}

/**
 * Internal React Context for Language
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * LanguageProvider Component
 * Wrap your application (usually in App.tsx or main.tsx) with this provider
 * to enable multi-language support across all components.
 * 
 * Default Language: 'EN' (English) or from LocalStorage
 */
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available, otherwise default to "EN"
  const [language, setLanguage] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored === "EN" || stored === "BN") ? (stored as Locale) : "EN";
  });

  // Persist language choice to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  // Memoize the context value to prevent unnecessary re-renders
  // when the language hasn't changed.
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: getTranslationProxy(translations[language], translations["EN"], language),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * useLanguage Custom Hook
 * Provides access to the current language, the switch function,
 * and the translation dictionary (t).
 * 
 * @example
 * const { language, setLanguage, t } = useLanguage();
 * return <h1>{t.hero.heading.doctorName}</h1>;
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  
  return context;
};
