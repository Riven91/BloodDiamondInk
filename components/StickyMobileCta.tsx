"use client";

import Link from "next/link";

interface StickyMobileCtaProps {
  bookingHref?: string;
  bookingLabel?: string;
  bookingAriaLabel?: string;
  bookingClassName?: string;
  whatsappHref?: string;
  whatsappLabel?: string;
  whatsappAriaLabel?: string;
  whatsappClassName?: string;
  openWhatsappInNewTab?: boolean;
  className?: string;
}

export function StickyMobileCta({
  bookingHref,
  bookingLabel = "Termin buchen",
  bookingAriaLabel,
  bookingClassName = "btn-primary",
  whatsappHref,
  whatsappLabel = "WhatsApp",
  whatsappAriaLabel,
  whatsappClassName,
  openWhatsappInNewTab = false,
  className,
}: StickyMobileCtaProps) {
  const hasBooking = Boolean(bookingHref);
  const hasWhatsapp = Boolean(whatsappHref);
  if (!hasBooking && !hasWhatsapp) return null;

  const isWhatsAppCta =
    typeof whatsappLabel === "string" && whatsappLabel.toLowerCase().includes("whatsapp");

  const whatsappBtnClass =
    whatsappClassName ??
    (isWhatsAppCta
      ? "inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring"
      : "rounded-2xl border px-5 py-3 hover:bg-gray-50");

  return (
    <div
      className={[
        // fixiert am unteren Bildschirmrand, nur Mobile
        "fixed inset-x-0 bottom-[max(env(safe-area-inset-bottom),8px)] z-50 md:hidden",
        // klicks nur im inneren container
        "pointer-events-none px-3",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto max-w-6xl pointer-events-auto flex items-center justify-center gap-3 rounded-xl bg-black/60 px-4 py-3 shadow-lg backdrop-blur-sm">
        {hasBooking ? (
          <Link href={bookingHref!} className={bookingClassName} aria-label={bookingAriaLabel}>
            {bookingLabel}
          </Link>
        ) : null}
        {hasWhatsapp ? (
          <Link
            href={whatsappHref!}
            className={whatsappBtnClass}
            aria-label={whatsappAriaLabel}
            target={openWhatsappInNewTab ? "_blank" : undefined}
            rel={openWhatsappInNewTab ? "noopener noreferrer" : undefined}
          >
            {isWhatsAppCta ? (
              <>
                <svg aria-hidden="true" focusable="false" className="h-5 w-5 fill-current" viewBox="0 0 32 32">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.554.815 4.919 2.207 6.864L4.52 27.48a1 1 0 0 0 1.207 1.29l5.595-1.676A11.89 11.89 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-3.78-.75.999.999 0 0 0-.692-.048l-4.41 1.323 1.335-4.009a1 1 0 0 0-.137-.88A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10Zm-4.18 5a1 1 0 0 0-.81.396c-.476.605-1.042 1.53-1.12 2.4-.18 2.074 1.165 4.395 3.784 6.84 2.64 2.465 5.106 3.61 7.287 3.37.856-.086 1.717-.582 2.276-1.02a1 1 0 0 0 .142-1.44l-1.86-2.02a1 1 0 0 0-1.178-.233l-2.003.9a1 1 0 0 1-1.083-.178l-2.24-2.24a1 1 0 0 1-.138-1.27l.966-1.448a1 1 0 0 0-.01-1.125l-1.34-2.02A1 1 0 0 0 11.82 10Z" />
                </svg>
                {whatsappLabel}
              </>
            ) : (
              whatsappLabel
            )}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

