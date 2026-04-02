/**
 * AMR Eye Center — i18n Index
 * Central export for all translation objects and the active language hook.
 */

import en from "./en";
import bn from "./bn";

export type Locale = "EN" | "BN";
export type { TranslationKeys } from "./en";
import type { TranslationKeys } from "./en";

export const translations: Record<Locale, TranslationKeys> = { EN: en, BN: bn };

/**
 * Creates a recursive proxy for the translation dictionary.
 * Features:
 * - Safely returns fallback English strings if a Bengali key is missing.
 * - Throws a runtime console.warn if a key is completely missing to aid development.
 * - Zero code changes required for UI components (supports t.hero.heading.line1 format).
 */
export function getTranslationProxy(
  currentLevelObj: any = {}, 
  fallbackObj: any = {}, 
  locale: Locale = "EN", 
  path: string[] = []
): any {
  return new Proxy(currentLevelObj || {}, {
    get(target, prop: string | symbol) {
      // Passthrough for React internals and standard object methods
      if (typeof prop === "symbol" || prop === "$$typeof" || prop === "toJSON" || prop === "valueOf") {
        return Reflect.get(target, prop);
      }

      const nextPath = [...path, prop];
      const val = target[prop];

      // If missing in current language
      if (val === undefined) {
        const fallbackVal = fallbackObj ? fallbackObj[prop] : undefined;

        if (fallbackVal !== undefined) {
          if (import.meta.env?.DEV && locale !== "EN") {
            console.warn(`[i18n] Missing translation for key: "${nextPath.join('.')}" in locale "${locale}". Falling back to EN.`);
          }
          // Recursively proxy the fallback object so nested misses continue to warn
          if (typeof fallbackVal === "object" && fallbackVal !== null) {
            return getTranslationProxy({}, fallbackVal, locale, nextPath);
          }
          return fallbackVal;
        }

        // Absolutely missing everywhere
        if (import.meta.env?.DEV) {
          console.warn(`[i18n] Completely missing translation key: "${nextPath.join('.')}"`);
        }
        return nextPath.join('.'); // Return stringified path safely to prevent crashes
      }

      // If it exists and is an object, proxy the nested object
      if (typeof val === "object" && val !== null) {
        const nextFallbackObj = fallbackObj ? fallbackObj[prop] : undefined;
        return getTranslationProxy(val, nextFallbackObj, locale, nextPath);
      }

      return val;
    }
  });
}

export { en, bn };
