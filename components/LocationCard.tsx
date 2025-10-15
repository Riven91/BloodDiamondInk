import Image from "next/image";
import Link from "next/link";

interface LocationCardProps {
  id?: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  openingHours: string;
  funnelUrl: string;
  mapImage: string;
  mapAlt: string;
}

export function LocationCard({
  id,
  name,
  description,
  address,
  phone,
  openingHours,
  funnelUrl,
  mapImage,
  mapAlt,
}: LocationCardProps) {
  return (
    <section id={id} className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-6">
        <h2 className="font-display text-4xl uppercase text-blooddiamond-accent">{name}</h2>
        <p className="text-blooddiamond-text/80">{description}</p>
        <div className="grid gap-4 text-sm text-blooddiamond-text/70 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-lg uppercase text-blooddiamond-text">Adresse</h3>
            <p>{address}</p>
          </div>
          <div>
            <h3 className="font-display text-lg uppercase text-blooddiamond-text">Kontakt</h3>
            <p>
              Telefon: <a href={`tel:${phone}`} className="hover:text-blooddiamond-accent">{phone}</a>
            </p>
            <p>Öffnungszeiten: {openingHours}</p>
          </div>
        </div>
        <Link
          href={funnelUrl}
          className="inline-flex w-fit items-center justify-center rounded-md bg-blooddiamond-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-blooddiamond-text transition hover:bg-blooddiamond-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blooddiamond-accent focus-visible:ring-offset-2 focus-visible:ring-offset-blooddiamond-background"
          aria-label={`Termin buchen für ${name}`}
        >
          Termin buchen
        </Link>
      </div>
      <div className="overflow-hidden rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60">
        <div className="relative h-80 w-full">
          <Image src={mapImage} alt={mapAlt} fill className="object-cover object-center opacity-80" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
