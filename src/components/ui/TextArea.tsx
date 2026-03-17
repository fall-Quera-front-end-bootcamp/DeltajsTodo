import type { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default function TextArea({ label, className, ...props }: Props) {
  return (
    <label className="flex flex-col gap-1 text-sm text-slate-200">
      {label && <span className="text-xs font-semibold text-slate-300">{label}</span>}
      <textarea
        {...props}
        className={`min-h-[90px] rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-slate-100 outline-none ring-amber-400/70 focus:border-amber-400/60 focus:ring-2 ${className ?? ""}`}
      />
    </label>
  );
}
