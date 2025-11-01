"use client";

import { useEffect } from "react";

export default function OtherSectionsSpacingFix() {
  useEffect(() => {
    // Nur einmal pro Element anpassen
    const selector = ".mt-16,.mt-20,.mt-24";
    const nodes = document.querySelectorAll<HTMLElement>(selector);
    nodes.forEach((el) => {
      if (el.dataset.bdiSpacingNormalized === "1") return;
      const cls = el.className;
      // Reihenfolge: klein → groß, um Kaskaden zu vermeiden
      if (/\bmt-16\b/.test(cls)) {
        el.className = cls.replace(/\bmt-16\b/g, "mt-12");
      } else if (/\bmt-20\b/.test(cls)) {
        el.className = cls.replace(/\bmt-20\b/g, "mt-14");
      } else if (/\bmt-24\b/.test(cls)) {
        el.className = cls.replace(/\bmt-24\b/g, "mt-16");
      }
      el.dataset.bdiSpacingNormalized = "1";
    });
  }, []);

  return null;
}
