import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

export default function Input({ label, hint, className, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1 text-sm text-slate-200">
      {label && <span className="text-xs font-semibold text-slate-300">{label}</span>}
      <input
        {...props}
        className={`rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-slate-100 outline-none ring-amber-400/70 focus:border-amber-400/60 focus:ring-2 ${className ?? ""}`}
      />
      {hint && <span className="text-[11px] text-slate-500">{hint}</span>}
    </label>
  );
}
