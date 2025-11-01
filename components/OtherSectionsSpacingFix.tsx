"use client";

import { useEffect } from "react";

export default function OtherSectionsSpacingFix() {
  useEffect(() => {
    document
      .querySelectorAll(".mt-24")
      .forEach((element) => element.classList.replace("mt-24", "mt-16"));
    document
      .querySelectorAll(".mt-20")
      .forEach((element) => element.classList.replace("mt-20", "mt-14"));
    document
      .querySelectorAll(".mt-16")
      .forEach((element) => element.classList.replace("mt-16", "mt-12"));
  }, []);

  return null;
}
