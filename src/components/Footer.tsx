import { Link } from "react-router-dom";
import { profile } from "../data";
import { Socials } from "./Socials";
export default function Footer() {
  return <footer className="mt-24 border-t border-slate-200"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
    <p className="text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    <div className="flex items-center gap-6 text-sm font-medium text-slate-600">{[["Work", "/work"], ["Blog", "/blog"], ["About", "/about"]].map(([l, t]) => <Link key={t} to={t} className="transition-colors hover:text-indigo-600">{l}</Link>)}</div>
    <Socials /></div></footer>;
}
