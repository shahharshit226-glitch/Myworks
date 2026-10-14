import { useState } from "react";
import { profile } from "../data";
import { Socials } from "../components/Socials";
import Button from "../components/Button";
const field = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm transition focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-600/10";
export default function About() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); const d = new FormData(e.currentTarget);
    // Opens the visitor's email app. Swap for an API call (Formspree, Resend, …) when ready.
    location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Message from " + d.get("name"))}&body=${encodeURIComponent(`${d.get("message")}\n\nFrom: ${d.get("name")} (${d.get("email")})`)}`; setSent(true); };
  return <div className="grid gap-16 py-16 sm:py-24 lg:grid-cols-2 lg:gap-24">
    <section aria-labelledby="ab"><h1 id="ab" className="text-4xl font-bold tracking-tight sm:text-6xl">About</h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">{profile.bio.map(b => <p key={b}>{b}</p>)}</div>
      <h2 className="mb-5 mt-14 text-sm font-semibold uppercase tracking-[.16em] text-slate-500">Skills</h2>
      <dl className="space-y-6">{Object.entries(profile.skills).map(([g, s]) => <div key={g}><dt className="mb-2 text-sm font-semibold">{g}</dt><dd><ul className="flex flex-wrap gap-2">{s.map(x => <li key={x} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200 transition hover:bg-indigo-50 hover:ring-indigo-300">{x}</li>)}</ul></dd></div>)}</dl></section>
    <section aria-labelledby="ct" className="lg:pt-4"><div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
      <h2 id="ct" className="text-2xl font-semibold tracking-tight">Let's talk</h2><p className="mb-8 mt-2 text-slate-600">Open to internships, freelance work and startup collaborations.</p>
      <form onSubmit={submit} className="space-y-5">
        <div><label htmlFor="n" className="mb-1.5 block text-sm font-medium">Name</label><input id="n" name="name" required autoComplete="name" className={field} /></div>
        <div><label htmlFor="e" className="mb-1.5 block text-sm font-medium">Email</label><input id="e" name="email" type="email" required autoComplete="email" className={field} /></div>
        <div><label htmlFor="m" className="mb-1.5 block text-sm font-medium">Message</label><textarea id="m" name="message" rows={5} required className={field} /></div>
        <Button type="submit" className="w-full sm:w-auto">Send message</Button>
        {sent && <p role="status" className="text-sm text-emerald-700">Opening your email app…</p>}</form>
      <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6"><span className="text-sm text-slate-500">Or find me on</span><Socials /></div></div></section>
  </div>;
}
