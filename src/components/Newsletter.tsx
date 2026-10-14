import { useState } from "react";
import Button from "./Button";
/** Front-end only. Connect `onSubmit` to Buttondown, Mailchimp, ConvertKit, etc. */
export default function Newsletter() {
  const [done, setDone] = useState(false);
  return <section aria-labelledby="nl" className="rounded-3xl bg-slate-900 p-8 text-white sm:p-12">
    <h2 id="nl" className="text-2xl font-semibold tracking-tight sm:text-3xl">Get new posts by email</h2>
    <p className="mt-2 max-w-md text-slate-300">Occasional notes on building products. No spam, unsubscribe anytime.</p>
    {done ? <p role="status" className="mt-6 font-medium text-indigo-300">Thanks! You're on the list.</p> :
      <form onSubmit={e => { e.preventDefault(); setDone(true); }} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="nl-email" className="sr-only">Email address</label>
        <input id="nl-email" type="email" required placeholder="you@example.com" className="w-full rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-indigo-400 focus:outline-none sm:max-w-sm" />
        <Button type="submit">Subscribe</Button></form>}
  </section>;
}
