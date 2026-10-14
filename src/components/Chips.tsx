export default function Chips({ items, value, onChange, label }: { items: string[]; value: string; onChange: (v: string) => void; label: string }) {
  return <div role="group" aria-label={label} className="flex flex-wrap gap-2">{items.map(i => <button key={i} aria-pressed={value === i} onClick={() => onChange(i)}
    className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 active:scale-95 ${value === i ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-slate-900"}`}>{i}</button>)}</div>;
}
