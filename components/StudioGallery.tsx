import Image from "next/image";

import { studioImages } from "@/app/_content/studioImages";

type Props = { captions: string[] };

export default function StudioGallery({ captions }: Props) {
  if (process.env.NODE_ENV !== "production" && captions.length !== studioImages.length) {
    console.warn("StudioGallery: captions length does not match studio images count.");
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {studioImages.map((img, i) => (
        <figure key={img.src} className="w-full">
          <Image
            src={img.src}
            alt={img.alt}
            width={1280}
            height={853}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-auto object-cover rounded-xl"
          />
          <figcaption className="mt-3 rounded-xl border border-neutral-700 bg-black/30 p-4 text-sm leading-relaxed text-neutral-300">
            {captions[i]}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
