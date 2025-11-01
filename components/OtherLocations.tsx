import Link from "next/link";

type City = "pforzheim" | "heilbronn" | "boeblingen";

const LABELS: Record<City, { title: string; prompt: string; links: { href: string; label: string }[] }> = {
  pforzheim: {
    title: "Weitere Tattoo-Standorte",
    prompt: "Du suchst unser Tattoo-Studio in Heilbronn oder Böblingen?",
    links: [
      { href: "/heilbronn", label: "→ Studio Heilbronn" },
      { href: "/boeblingen", label: "→ Studio Böblingen" },
    ],
  },
  heilbronn: {
    title: "Weitere Tattoo-Standorte",
    prompt: "Du suchst unser Tattoo-Studio in Pforzheim oder Böblingen?",
    links: [
      { href: "/pforzheim", label: "→ Studio Pforzheim" },
      { href: "/boeblingen", label: "→ Studio Böblingen" },
    ],
  },
  boeblingen: {
    title: "Weitere Tattoo-Standorte",
    prompt: "Du suchst unser Tattoo-Studio in Pforzheim oder Heilbronn?",
    links: [
      { href: "/pforzheim", label: "→ Studio Pforzheim" },
      { href: "/heilbronn", label: "→ Studio Heilbronn" },
    ],
  },
};

export default function OtherLocations({ current }: { current: City }) {
  const c = LABELS[current];
  return (
    <section className="mt-6 text-center">
      <h3 className="mb-2 text-lg font-semibold text-white">{c.title}</h3>
      <p className="mb-4 text-neutral-400">{c.prompt}</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {c.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded px-1 text-emerald-500 hover:text-emerald-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
