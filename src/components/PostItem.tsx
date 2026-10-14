import { Link } from "react-router-dom";
import { fmtDate, type Post } from "../data";
export default function PostItem({ p }: { p: Post }) {
  return <article><Link to={`/blog/${p.slug}`} className="group grid gap-2 border-t border-slate-200 py-8 transition-colors hover:border-slate-900 sm:grid-cols-[150px_1fr] sm:gap-8">
    <p className="text-sm text-slate-500"><time dateTime={p.date}>{fmtDate(p.date)}</time></p>
    <div><p className="mb-2 text-xs font-semibold uppercase tracking-[.16em] text-indigo-600">{p.category} · {p.readTime}</p>
      <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-indigo-600">{p.title}</h3>
      <p className="mt-2 max-w-2xl text-slate-600">{p.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">Read more <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span></span></div>
  </Link></article>;
}
