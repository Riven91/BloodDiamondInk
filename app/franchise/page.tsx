import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://blooddiamond-tattoo.de/franchise",
  },
};

export default function LegacyNetworkRedirect() {
  redirect("/netzwerk");
}
