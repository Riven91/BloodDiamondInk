"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function decodeNextImageUrl(src: string): string {
  try {
    if (!src) return src;
    const u = new URL(src, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    if (u.pathname.startsWith('/_next/image')) {
      const raw = u.searchParams.get('url');
      if (raw) {
        try {
          return decodeURIComponent(decodeURIComponent(raw));
        } catch {
          return decodeURIComponent(raw);
        }
      }
    }
    return src;
  } catch {
    return src;
  }
}

function resolveSrcFromElement(el: HTMLElement): string {
  const explicit = el.getAttribute('data-lightbox-src') || el.getAttribute('data-original') || '';
  if (explicit) return decodeNextImageUrl(explicit);
  if (el instanceof HTMLImageElement) {
    const raw = el.currentSrc || el.src || el.getAttribute('src') || '';
    return decodeNextImageUrl(raw);
  }
  const host = el.closest<HTMLElement>('[data-lightbox-src]');
  if (host) {
    const raw = host.getAttribute('data-lightbox-src') || '';
    return decodeNextImageUrl(raw);
  }
  return '';
}

type Item = {
  src: string;
  alt: string;
};

type LightboxAutoProps = {
  containerSelector?: string;
  gallerySelector?: string;
};

export default function LightboxAuto({ containerSelector, gallerySelector }: LightboxAutoProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const selector = gallerySelector ?? containerSelector ?? null;

  const currentItem = useMemo(() => {
    if (!items.length) return null;
    const safeIndex = ((idx % items.length) + items.length) % items.length;
    return items[safeIndex];
  }, [idx, items]);

  useEffect(() => {
    if (typeof window === "undefined" || !selector) return;
    const root = document.querySelector(selector) as HTMLElement | null;
    if (!root) return;

    const collect = (): Item[] => {
      const imgs = Array.from(root.querySelectorAll<HTMLImageElement>('img'));
      const customEls = Array.from(root.querySelectorAll<HTMLElement>('[data-lightbox-src]'));

      const imgItems = imgs
        .map((img) => {
          const src = resolveSrcFromElement(img as unknown as HTMLElement);
          const alt = img.alt || img.getAttribute('alt') || '';
          return { src, alt };
        })
        .filter((item) => item.src);

      const customItems = customEls
        .map((el) => ({
          src: resolveSrcFromElement(el),
          alt:
            el.getAttribute('data-lightbox-alt') ||
            el.getAttribute('aria-label') ||
            el.getAttribute('title') ||
            '',
        }))
        .filter((item) => item.src);

      return [...imgItems, ...customItems];
    };

    const update = () => {
      const list = collect();
      setItems(list);
    };

    update();

    const mo = new MutationObserver(() => update());
    mo.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "srcset"],
    });

    const clickHandler = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      let el: HTMLElement | null = target;

      while (el && el !== root && !el.matches('img,[data-lightbox-src]')) {
        el = el.parentElement;
      }

      if (!el || el === root) return;

      const src = resolveSrcFromElement(el);

      if (!src) return;

      const list = collect();
      setItems(list);

      const matchIndex = list.findIndex((item) => item.src === src);
      if (matchIndex >= 0) {
        setIdx(matchIndex);
        setOpen(true);
      }
    };

    root.addEventListener("click", clickHandler);

    return () => {
      root.removeEventListener("click", clickHandler);
      mo.disconnect();
    };
  }, [selector]);

  useEffect(() => {
    if (!isOpen || !items.length) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key === "ArrowLeft" && items.length > 1) {
        event.preventDefault();
        setIdx((current) => (current - 1 + items.length) % items.length);
        return;
      }

      if (event.key === "ArrowRight" && items.length > 1) {
        event.preventDefault();
        setIdx((current) => (current + 1) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, items.length]);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement | null;
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.focus({ preventScroll: true });
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      if (previousActiveElement.current) {
        previousActiveElement.current.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  if (!selector || !items.length) {
    return null;
  }

  const close = () => setOpen(false);
  const prev = () => setIdx((current) => (current - 1 + items.length) % items.length);
  const next = () => setIdx((current) => (current + 1) % items.length);

  return (
    <>
      {isOpen && currentItem ? (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            className="absolute right-6 top-6 text-3xl font-bold text-white"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
          >
            ×
          </button>

          {items.length > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-6 text-4xl text-white"
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
            >
              ‹
            </button>
          )}

          <div
            className="max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-h-[90vh] max-w-full rounded-xl object-contain"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>

          {items.length > 1 && (
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-6 text-4xl text-white"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
            >
              ›
            </button>
          )}
        </div>
      ) : null}
    </>
  );
}
