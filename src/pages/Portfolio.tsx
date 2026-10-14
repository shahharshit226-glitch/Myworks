import { useState } from "react";
import { categories, projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import Chips from "../components/Chips";
export default function Portfolio() {
  const cats = categories(projects); const [cat, setCat] = useState("All");
  const shown = cat === "All" ? projects : projects.filter(p => p.category === cat);
  return <div className="py-16 sm:py-24">
    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Selected work</h1>
    <p className="mt-4 max-w-xl text-lg text-slate-600">Products I've designed and built, from live startups to AI tools.</p>
    <div className="mt-10"><Chips items={cats} value={cat} onChange={setCat} label="Filter projects by category" /></div>
    <p className="sr-only" role="status">{shown.length} projects shown</p>
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map(p => <div key={p.slug} className="motion-safe:animate-[fade_.5s_ease]"><ProjectCard p={p} /></div>)}</div>
    <style>{`@keyframes fade{from{opacity:0;transform:translateY(12px)}}`}</style>
  </div>;
}
