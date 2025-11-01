import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ORIGIN } from "../config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: `${ORIGIN}/franchise`,
  },
};

export default function LegacyNetworkRedirect() {
  redirect("/netzwerk");
}
