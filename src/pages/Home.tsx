import { Link } from "react-router-dom";
import { posts, profile, projects } from "../data";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import PostItem from "../components/PostItem";
export default function Home() {
  return <>
    <section className="pb-20 pt-16 sm:pt-28">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />Open to internships & collaborations</p>
      <h1 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Hi, I'm <span className="text-indigo-600">{profile.name}</span>, a {profile.role} building {profile.value}.</h1>
      <p className="mt-6 max-w-xl text-lg text-slate-600">{profile.intro}</p>
      <div className="mt-10 flex flex-wrap gap-3"><Button to="/work">View Portfolio</Button><Button to="/blog" variant="secondary">Read Blog</Button></div>
    </section>
    <section aria-labelledby="fw" className="py-16">
      <Reveal className="mb-10 flex items-end justify-between gap-4"><h2 id="fw" className="text-3xl font-bold tracking-tight">Featured work</h2>
        <Link to="/work" className="text-sm font-semibold text-indigo-600 hover:underline">All projects →</Link></Reveal>
      <div className="grid gap-6 md:grid-cols-3">{projects.slice(0, 3).map((p, i) => <Reveal key={p.slug} delay={i * 100}><ProjectCard p={p} /></Reveal>)}</div>
    </section>
    <section aria-labelledby="li" className="grid gap-10 py-16 lg:grid-cols-[1fr_2fr]">
      <Reveal><h2 id="li" className="text-3xl font-bold tracking-tight">Latest insights</h2><p className="mb-6 mt-3 max-w-xs text-slate-600">Notes on building products, AI tools and shipping.</p><Button to="/blog" variant="secondary">Read Blog</Button></Reveal>
      <Reveal delay={100}><div className="border-b border-slate-200">{posts.slice(0, 2).map(p => <PostItem key={p.slug} p={p} />)}</div></Reveal>
    </section></>;
}
