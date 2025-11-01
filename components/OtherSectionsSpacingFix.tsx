"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Zuordnung, welche Margin-Utilities auf welchen Standard vereinheitlicht werden sollen
const MARGIN_MAP = new Map<string, string>([
  ["mt-16", "mt-16"],
  ["mt-20", "mt-16"],
  ["mt-24", "mt-16"],
]);

function normalizeNode(el: Element) {
  if (!(el instanceof HTMLElement)) return;
  const classes = el.classList;
  if (!classes) return;

  const toRemove: string[] = [];
  let toAdd: string | null = null;

  for (const c of classes) {
    if (MARGIN_MAP.has(c)) {
      toRemove.push(c);
      toAdd = MARGIN_MAP.get(c)!;
    }
  }

  if (toRemove.length) {
    toRemove.forEach((c) => classes.remove(c));
    if (toAdd) classes.add(toAdd);
  }
}

function normalizeAll(root: ParentNode) {
  const nodes = (root as Document | Element).querySelectorAll<HTMLElement>(
    "main section, main .section, main [data-section]"
  );
  nodes.forEach(normalizeNode);
}

export default function OtherSectionsSpacingFix() {
  const pathname = usePathname();
  const search = useSearchParams();
  const navKey = useMemo(
    () => `${pathname}?${search?.toString() ?? ""}`,
    [pathname, search]
  );

  useEffect(() => {
    // 1) Sofort nach jeder Navigation normalisieren
    normalizeAll(document);

    // 2) DOM-Änderungen beobachten, um neue Sections ebenfalls zu erfassen
    const main = document.querySelector("main") ?? document.body;
    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n instanceof HTMLElement) {
            normalizeNode(n);
            normalizeAll(n);
          }
        });
      }
    });

    obs.observe(main, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, [navKey]);

  return null;
}
