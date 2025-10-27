'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

type Item = { src: string; alt: string };

// --- Hilfsfunktionen, um immer die Original-/public-URL zu ermitteln ---
function decodeNextImageUrl(src: string): string {
  try {
    if (!src) return src;
    // Next.js Optimizer: /_next/image?url=<ENCODED>&w=...&q=...
    const u = new URL(src, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    if (u.pathname.startsWith('/_next/image')) {
      const raw = u.searchParams.get('url');
      if (raw) {
        // decodeURIComponent 2x, falls doppelt encodiert wurde
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
  // 1) Explizit gesetzte Originalquelle
  const explicit = el.getAttribute('data-lightbox-src') || el.getAttribute('data-original') || '';
  if (explicit) return decodeNextImageUrl(explicit);
  // 2) IMG-Quelle
  if (el instanceof HTMLImageElement) {
    const raw = el.currentSrc || el.src || el.getAttribute('src') || '';
    return decodeNextImageUrl(raw);
  }
  // 3) In Vorfahren nach data-lightbox-src suchen
  const host = el.closest<HTMLElement>('[data-lightbox-src]');
  if (host) {
    const raw = host.getAttribute('data-lightbox-src') || '';
    return decodeNextImageUrl(raw);
  }
  return '';
}

export default function LightboxGlobal({
  scopeSelector = 'main',
  // Exkludiere Hero, Team-Galerien und die Home-Gallery (id/class/data-* Varianten)
  excludeSelector = '#hero, #team-gallery, #gallery, .gallery, [data-gallery], [data-gallery-root], [data-no-lightbox]',
}: { scopeSelector?: string; excludeSelector?: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scope = document.querySelector(scopeSelector) as HTMLElement | null;
    if (!scope) return;

    const isExcluded = (el: Element | null) => !!el?.closest(excludeSelector);

    const collect = (): Item[] => {
      const imgs = Array.from(scope.querySelectorAll<HTMLImageElement>('img'));
      const out: Item[] = [];
      for (const i of imgs) {
        if (isExcluded(i)) continue;
        const src = resolveSrcFromElement(i as unknown as HTMLElement);
        if (!src) continue;
        out.push({ src, alt: i.alt || i.getAttribute('alt') || '' });
      }
      return out;
    };

    const update = () => setItems(collect());
    update();

    const mo = new MutationObserver(update);
    mo.observe(scope, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'srcset'] });

    const onClick = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t || isExcluded(t)) return;
      // Erlaube Klick auf <img> oder Wrapper mit data-lightbox-src
      let el: HTMLElement | null = t;
      while (el && el !== scope && !(el instanceof HTMLImageElement) && !el.hasAttribute('data-lightbox-src')) {
        el = el.parentElement;
      }
      if (!el || el === scope) return;
      const src = resolveSrcFromElement(el);
      if (!src) return;
      const list = collect();
      setItems(list);
      const i = list.findIndex(x => x.src === src);
      if (i >= 0) { setIdx(i); setOpen(true); }
    };
    scope.addEventListener('click', onClick);

    return () => { scope.removeEventListener('click', onClick); mo.disconnect(); };
  }, [scopeSelector, excludeSelector]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % Math.max(items.length, 1));
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + Math.max(items.length, 1)) % Math.max(items.length, 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, items.length]);

  const current = useMemo(() => items[idx] || null, [items, idx]);
  if (!open || !current) return null;

  const prev = () => setIdx(i => (i - 1 + items.length) % items.length);
  const next = () => setIdx(i => (i + 1) % items.length);
  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (dx > 40) prev();
    if (dx < -40) next();
  };

  return (
    <div
      role="dialog" aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button aria-label="Schließen" className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white/80 hover:text-white" onClick={() => setOpen(false)}>✕</button>
      <button aria-label="Vorheriges Bild" className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-2xl text-white/80 hover:text-white" onClick={prev}>‹</button>
      <figure className="mx-3 max-h-[90vh] max-w-[95vw]">
        <img src={current.src} alt={current.alt} className="max-h-[90vh] max-w-[95vw] object-contain" draggable={false} />
        {current.alt ? <figcaption className="mt-2 text-center text-xs text-white/70">{current.alt}</figcaption> : null}
      </figure>
      <button aria-label="Nächstes Bild" className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-2xl text-white/80 hover:text-white" onClick={next}>›</button>
    </div>
  );
}
