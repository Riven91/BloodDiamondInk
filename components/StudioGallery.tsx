'use client';

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { studioImages } from "@/app/_content/studioImages";

type Props = { captions: string[] };

export default function StudioGallery({ captions }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalImages = studioImages.length;

  if (process.env.NODE_ENV !== "production" && captions.length !== totalImages) {
    console.warn("StudioGallery: captions length does not match studio images count.");
  }

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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studioImages.map((img, i) => (
          <figure key={img.src} className="w-full">
            <div
              onClick={() => openLightbox(i)}
              className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            <figcaption className="mt-3 rounded-xl border border-neutral-700 bg-black/30 p-4 text-sm leading-relaxed text-neutral-300">
              {captions[i]}
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
            <img
              src={studioImages[activeIndex].src}
              alt={studioImages[activeIndex].alt}
              className="h-auto w-auto max-h-[90vh] max-w-full rounded-xl object-contain"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
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
