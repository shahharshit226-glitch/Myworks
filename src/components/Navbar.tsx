import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../data";
const links = [["Work", "/work"], ["Blog", "/blog"], ["About & Contact", "/about"]];
export default function Navbar() {
  const [open, setOpen] = useState(false); const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, [open]);
  const item = ({ isActive }: { isActive: boolean }) => `relative py-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-indigo-600 after:transition-transform after:duration-300 ${isActive ? "text-slate-900 after:scale-x-100" : "text-slate-600 after:scale-x-0 hover:text-slate-900 hover:after:scale-x-100"}`;
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-stone-50/85 backdrop-blur">
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
    <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <Link to="/" className="text-lg font-bold tracking-tight">{profile.name.split(" ")[0]}<span className="text-indigo-600">.</span></Link>
      <div className="hidden items-center gap-8 md:flex">{links.map(([l, t]) => <NavLink key={t} to={t} className={item}>{l}</NavLink>)}</div>
      <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-slate-200/70 md:hidden">
        <span className="sr-only">Menu</span>
        <span aria-hidden className="relative block h-3.5 w-5">
          <span className={`absolute left-0 h-0.5 w-5 rounded bg-slate-900 transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-slate-900 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 h-0.5 w-5 rounded bg-slate-900 transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
        </span></button>
    </nav>
    <div id="mobile-menu" className={`fixed inset-0 top-16 bg-stone-50 transition-all duration-300 md:hidden ${open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
      <ul className="flex flex-col gap-2 px-5 pt-8">{[["Home", "/"], ...links].map(([l, t], i) => <li key={t} style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }} className={`transition duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
        <NavLink to={t} end={t === "/"} className={({ isActive }) => `block border-b border-slate-200 py-4 text-3xl font-semibold tracking-tight ${isActive ? "text-indigo-600" : ""}`}>{l}</NavLink></li>)}</ul>
    </div>
  </header>;
}
