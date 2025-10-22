"use client";
import { useEffect } from "react";

export default function LegalFooterRouter() {
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const { pathname } = window.location;
      if (!pathname.startsWith("/boeblingen")) return;

      // Ziel-Impressum bevorzugt /boeblingen/impressum, sonst /impressum
      const impressumTarget = (document.querySelector('link[data-route-exists="/boeblingen/impressum"]') ? "/boeblingen/impressum" : "/impressum");
      const anchors = Array.from(document.querySelectorAll("footer a, a"));
      anchors.forEach((a) => {
        const text = (a.textContent || "").trim().toLowerCase();
        if (text === "impressum") a.setAttribute("href", impressumTarget);
        if (text === "datenschutz") a.setAttribute("href", "/boeblingen/datenschutz");
      });
    } catch {}
  }, []);
  return null;
}
