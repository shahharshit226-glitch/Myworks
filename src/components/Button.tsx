import { Link } from "react-router-dom";
import type { ReactNode } from "react";
const base = "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 active:scale-[.97] motion-safe:hover:-translate-y-0.5";
const styles = { primary: "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/25", secondary: "border border-slate-300 text-slate-900 hover:border-slate-900 hover:bg-white" };
export default function Button({ to, children, variant = "primary", type, onClick, className = "" }: { to?: string; children: ReactNode; variant?: keyof typeof styles; type?: "submit" | "button"; onClick?: () => void; className?: string }) {
  const cls = `${base} ${styles[variant]} ${className}`;
  const inner = <>{children}<span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span></>;
  return to ? <Link to={to} className={cls}>{inner}</Link> : <button type={type ?? "button"} onClick={onClick} className={cls}>{inner}</button>;
}
