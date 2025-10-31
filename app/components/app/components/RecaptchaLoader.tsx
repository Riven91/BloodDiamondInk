"use client";
import { useEffect } from "react";

export default function RecaptchaLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const manager = window.klaro?.getManager?.();
    const consent = manager?.getConsent?.("recaptcha");

    if (consent && !document.getElementById("recaptcha-script")) {
      const s = document.createElement("script");
      s.id = "recaptcha-script";
      s.src = "https://www.google.com/recaptcha/api.js?render=6Lfe5P0rAAAAADWHlszBWg1tt-3-t34BDuDh4anE;
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return null;
}
