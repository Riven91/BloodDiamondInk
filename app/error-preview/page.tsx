"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ErrorPreviewContent() {
  const sp = useSearchParams();
  const token = sp.get("token");
  const required = process.env.NEXT_PUBLIC_ERROR_PREVIEW_TOKEN;

  if (!required || token !== required) {
    // Kein Token oder falsch → diskrete 404, damit niemand die Route „entdeckt“.
    if (typeof window !== "undefined") {
      window.location.replace("/404");
    }
    return null;
  }

  // Token korrekt → absichtlich Fehler werfen → app/error.tsx greift
  throw new Error("Error-Preview: Simulierter Fehler zum Testen der 500-Seite");
}

export default function ErrorPreview() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorPreviewContent />
    </Suspense>
  );
}
