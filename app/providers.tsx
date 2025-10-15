"use client";

import type { ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import { defaultSeo } from "@/lib/seo";

export function Providers({
  children
}: {
  children: ReactNode;
}) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      {children}
    </>
  );
}
