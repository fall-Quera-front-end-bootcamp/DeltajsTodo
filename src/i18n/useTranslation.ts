import { useCallback } from "react";
import { FALLBACK_MESSAGES } from "./server";
import type { Messages } from "./types";

export const useTranslationBuilder = (messages: Messages | null) => {
  return useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const value = messages?.[key] ?? FALLBACK_MESSAGES[key] ?? key;
      if (!vars) return value;
      return value.replace(/\{(\w+)\}/g, (_, token) => String(vars[token] ?? ""));
    },
    [messages],
  );
};
