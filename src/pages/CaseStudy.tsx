import { Link, useParams } from "react-router-dom";
import { projects } from "../data";
import Cover from "../components/Cover";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
const Section = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) =>
  <Reveal><section className="grid gap-4 border-t border-slate-200 py-10 md:grid-cols-[200px_1fr] md:gap-12"><h2 className="text-sm font-semibold uppercase tracking-[.16em] text-slate-500"><span className="text-indigo-600">{n}</span> {title}</h2><div>{children}</div></section></Reveal>;
export default function CaseStudyPage() {
  const { slug } = useParams(); const i = projects.findIndex(p => p.slug === slug); const p = projects[i];
  if (!p?.caseStudy) return <div className="py-32"><h1 className="mb-6 text-4xl font-bold">Case study not found</h1><Button to="/work">All work</Button></div>;
  const c = p.caseStudy; const next = projects.filter(x => x.caseStudy)[(projects.filter(x => x.caseStudy).indexOf(p) + 1) % projects.filter(x => x.caseStudy).length];
  return <article className="py-12 sm:py-20">
    <Link to="/work" className="text-sm font-medium text-slate-600 hover:text-indigo-600">← All work</Link>
    <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-[.2em] text-indigo-600">Case study · {p.category}</p>
    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{p.title}</h1><p className="mt-5 max-w-2xl text-lg text-slate-600">{p.summary}</p>
    <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4 text-sm"><div><dt className="text-slate-500">Role</dt><dd className="font-medium">{c.role}</dd></div>
      {p.href && <div><dt className="text-slate-500">Link</dt><dd><a href={p.href} target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:underline">Visit project ↗</a></dd></div>}</dl>
    <Cover hue={p.hue} label={p.title} className="my-12 aspect-[16/8] w-full rounded-3xl" />
    <Section n="01" title="Problem"><p className="max-w-2xl text-lg leading-8">{c.problem}</p></Section>
    <Section n="02" title="Process"><ol className="space-y-5">{c.process.map((s, k) => <li key={k} className="flex gap-4"><span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">{k + 1}</span><span className="leading-7">{s}</span></li>)}</ol></Section>
    <Section n="03" title="Tools"><ul className="flex flex-wrap gap-2">{c.tools.map(t => <li key={t} className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium">{t}</li>)}</ul></Section>
    <Section n="04" title="Results"><ul className="grid gap-4 sm:grid-cols-2">{c.results.map(r => <li key={r} className="rounded-2xl border border-slate-200 bg-white p-5 leading-7 transition hover:border-indigo-300">{r}</li>)}</ul></Section>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-10"><p className="text-slate-500">Next case study</p><Button to={`/work/${next.slug}`}>{next.title}</Button></div>
  </article>;
}
