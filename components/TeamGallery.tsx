"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

type Fit = "cover" | "contain";
type Pos = "top" | "center" | "bottom";

type TeamImage = {
  src: string;
  alt: string;
  caption: string;
  fit: Fit;
  pos: Pos;
};

const teamImages: readonly TeamImage[] = [
  {
    src: "/Team1.jpeg",
    alt: "Team von Blood Diamond Tattoo Ink. – Gruppenfoto der Artists mit Auszeichnungen.",
    caption:
      "Unser Team – ausgezeichnet auf Conventions, vereint Erfahrung und Präzision.",
    fit: "contain",
    pos: "center",
  },
  {
    src: "/pokale.jpeg",
    alt: "Auszeichnungen und Pokale von Blood Diamond Tattoo Ink. – Best of Show, Best of Color, Best of Blackwork.",
    caption:
      "Awards & Pokale – Best of Show, Best of Color, Best of Blackwork.",
    fit: "cover",
    pos: "center",
  },
];

export default function TeamGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalImages = teamImages.length;

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const prevImage = useCallback(() => {
    setActiveIndex((index) => (index - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const nextImage = useCallback(() => {
    setActiveIndex((index) => (index + 1) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevImage();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, isOpen, nextImage, prevImage]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {teamImages.map((img, index) => (
          <figure key={img.src} className="w-full">
            <div
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl bg-neutral-900"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className={clsx(
                  img.fit === "contain" ? "object-contain p-2" : "object-cover",
                  img.pos === "top"
                    ? "object-top"
                    : img.pos === "bottom"
                      ? "object-bottom"
                      : "object-center",
                )}
              />
            </div>

            <figcaption className="mt-3 rounded-xl border border-neutral-700 bg-black/30 p-4 text-sm leading-relaxed text-neutral-300">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-6 top-6 text-3xl font-bold text-white"
            aria-label="Close lightbox"
            type="button"
          >
            ×
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-4xl text-white"
            aria-label="Previous image"
            type="button"
          >
            ‹
          </button>

          <div
            className="max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={teamImages[activeIndex].src}
              alt={teamImages[activeIndex].alt}
              width={1600}
              height={1066}
              className="h-auto w-auto max-h-[90vh] max-w-full rounded-xl object-contain"
            />
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-4xl text-white"
            aria-label="Next image"
            type="button"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
