import { Link, useParams } from "react-router-dom";
import { fmtDate, posts } from "../data";
import Cover from "../components/Cover";
import Newsletter from "../components/Newsletter";
import Button from "../components/Button";
export default function PostPage() {
  const { slug } = useParams(); const p = posts.find(x => x.slug === slug);
  if (!p) return <div className="py-32"><h1 className="mb-6 text-4xl font-bold">Post not found</h1><Button to="/blog">All posts</Button></div>;
  return <article className="py-12 sm:py-20">
    <div className="mx-auto max-w-2xl"><Link to="/blog" className="text-sm font-medium text-slate-600 hover:text-indigo-600">← All posts</Link>
      <p className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[.2em] text-indigo-600">{p.category} · {p.readTime} read</p>
      <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{p.title}</h1>
      <p className="mt-4 text-slate-500"><time dateTime={p.date}>{fmtDate(p.date)}</time></p></div>
    <Cover hue={p.hue} label="Featured image" className="mx-auto my-12 aspect-[16/8] w-full max-w-4xl rounded-3xl" />
    <div className="mx-auto max-w-2xl text-lg leading-8 text-slate-700">{p.body.map((l, i) => l.startsWith("## ") ? <h2 key={i} className="mb-3 mt-12 text-2xl font-semibold tracking-tight text-slate-900">{l.slice(3)}</h2> : <p key={i} className="mb-6">{l}</p>)}</div>
    <div className="mx-auto mt-16 max-w-2xl"><Newsletter /></div>
  </article>;
}
