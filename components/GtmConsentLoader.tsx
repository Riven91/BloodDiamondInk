"use client";

import { useEffect } from "react";
import { loadGTM } from "@/lib/gtmLoader";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const isGtmEnabled = process.env.NEXT_PUBLIC_ENABLE_GTM === "true";

export function GtmConsentLoader() {
  useEffect(() => {
    if (!isGtmEnabled || !gtmId) {
      return;
    }

    const handleConsentGranted = () => {
      void loadGTM(gtmId);
    };

    window.addEventListener("consent:granted", handleConsentGranted);

    try {
      if (localStorage.getItem("consent") === "granted") {
        void loadGTM(gtmId);
      }
    } catch (error) {
      // Access to localStorage can fail (Safari private mode, disabled storage, etc.)
    }

    return () => {
      window.removeEventListener("consent:granted", handleConsentGranted);
    };
  }, []);

  return null;
}
