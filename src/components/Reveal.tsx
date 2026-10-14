import { useEffect, useRef, useState, type ReactNode } from "react";
/** Fades and lifts content in once it scrolls into view (respects reduced motion). */
export default function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const [on, setOn] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: .12 });
    io.observe(el); return () => io.disconnect(); }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`motion-safe:transition-all motion-safe:duration-700 ${on ? "translate-y-0 opacity-100" : "motion-safe:translate-y-6 motion-safe:opacity-0"} ${className}`}>{children}</div>;
}
