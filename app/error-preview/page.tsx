"use client";

import { useEffect } from "react";

// Preview soll zuverlässig den 500-Fallback auslösen – ohne Redirects.
export default function ErrorPreview() {
  useEffect(() => {
    throw new Error("Error-Preview: Simulierter Fehler zum Testen der 500-Seite");
  }, []);

  return null;
}
