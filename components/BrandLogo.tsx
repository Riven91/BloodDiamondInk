import React from "react";

/**
 * Brand-Logo mit SVG-Primärquelle und PNG-Fallback.
 * Erfordert:
 *   /public/brand/logo-blooddiamond.svg  (mit viewBox)
 *   /public/brand/logo-blooddiamond.png  (Fallback)
 * Wenn die SVG noch nicht existiert, rendert der Browser automatisch die PNG.
 */
export default function BrandLogo({
  width = 160,
  height = 64,
  className = "",
  alt = "Blood Diamond Tattoo Ink – Logo",
}: {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}) {
  return (
    <picture>
      <source srcSet="/brand/logo-blooddiamond.svg" type="image/svg+xml" />
      <img
        src="/brand/logo-blooddiamond.png"
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </picture>
  );
}
