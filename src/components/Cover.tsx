/** High-res image placeholder: swap in <img src> when you have real screenshots. */
export default function Cover({ hue, label, src, className = "" }: { hue: number; label: string; src?: string; className?: string }) {
  if (src) return <img src={src} alt={label} loading="lazy" className={`object-cover ${className}`} />;
  return <div role="img" aria-label={`${label} cover placeholder`} className={`relative overflow-hidden ${className}`}
    style={{ backgroundImage: `radial-gradient(circle at 20% 15%, hsl(${hue} 90% 96%), transparent 55%), linear-gradient(135deg, hsl(${hue} 75% 88%), hsl(${(hue + 45) % 360} 70% 76%))` }}>
    <div className="absolute inset-0 opacity-[.12]" style={{ backgroundImage: "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
    <span className="absolute bottom-4 left-5 text-[11px] font-semibold uppercase tracking-[.2em] text-slate-900/50">{label}</span>
  </div>;
}
