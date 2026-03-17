import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { fetchTranslations } from "./server";
import { useTranslationBuilder } from "./useTranslation";
import type { Lang, Messages } from "./types";

type Vars = Record<string, string | number>;

type I18nContextValue = {
  lang: Lang | null;
  dir: "ltr" | "rtl";
  t: (key: string, vars?: Vars) => string;
  setLanguage: (lang: Lang) => Promise<void>;
  loading: boolean;
  ready: boolean;
  hasSelection: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fa");
  const [messages, setMessages] = useState<Messages | null>(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [hasSelection, setHasSelection] = useState<boolean>(true);

  // Hydrate language preference on client to keep SSR/CSR markup aligned.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored) {
      setLang(stored);
      setHasSelection(true);
    }
  }, []);

  useEffect(() => {
    if (!lang) return;

    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const bundle = await fetchTranslations(lang);
        if (!cancelled) {
          setMessages(bundle);
          localStorage.setItem("lang", lang);
          setHasSelection(true);
          setReady(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [lang]);

  useEffect(() => {
    const dir = lang === "fa" ? "rtl" : "ltr";
    if (typeof document !== "undefined") {
      document.documentElement.dir = dir;
      document.documentElement.lang = lang ?? "en";
    }
  }, [lang]);

  const t = useTranslationBuilder(messages);

  const setLanguage = async (next: Lang) => {
    setLang(next);
    setHasSelection(true);
  };

  const resolvedDir: "ltr" | "rtl" = lang === "fa" ? "rtl" : "ltr";

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      dir: resolvedDir,
      t,
      setLanguage,
      loading,
      ready: ready && Boolean(messages),
      hasSelection,
    }),
    [lang, loading, ready, hasSelection, t, messages, resolvedDir],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
