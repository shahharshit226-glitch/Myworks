import { useMemo, useState } from "react";
import { categories, posts } from "../data";
import PostItem from "../components/PostItem";
import Chips from "../components/Chips";
export default function Blog() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState("All");
  const shown = useMemo(() => posts.filter(p => (cat === "All" || p.category === cat) && (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase())).sort((a, b) => b.date.localeCompare(a.date)), [q, cat]);
  return <div className="mx-auto max-w-3xl py-16 sm:py-24">
    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Blog</h1><p className="mt-4 text-lg text-slate-600">Notes on building products, AI tools and shipping.</p>
    <div className="mt-10 space-y-5"><label htmlFor="q" className="sr-only">Search posts</label>
      <input id="q" type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search posts…" className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm transition focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-600/10" />
      <Chips items={categories(posts)} value={cat} onChange={setCat} label="Filter posts by category" /></div>
    <div className="mt-10 border-b border-slate-200" aria-live="polite">{shown.length ? shown.map(p => <PostItem key={p.slug} p={p} />) : <p className="border-t border-slate-200 py-12 text-slate-500">No posts match your search.</p>}</div>
  </div>;
}
