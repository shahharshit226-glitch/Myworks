import { Link } from "react-router-dom";
import type { Project } from "../data";
import Cover from "./Cover";
export default function ProjectCard({ p }: { p: Project }) {
  const body = <>
    <div className="overflow-hidden"><Cover hue={p.hue} label={p.category} className="aspect-[16/10] w-full transition duration-700 group-hover:scale-105" /></div>
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
        <span aria-hidden className="text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-600">↗</span></div>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{p.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">{p.tags.map(t => <li key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{t}</li>)}</ul>
    </div></>;
  const cls = "group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5";
  return p.caseStudy ? <Link to={`/work/${p.slug}`} className={cls}>{body}</Link> : <a href={p.href} target="_blank" rel="noreferrer" className={cls}>{body}</a>;
}
