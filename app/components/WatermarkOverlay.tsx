"use client";

type Props = {
  src: string;
  opacity?: number;   // Empfehlung: 0.03–0.08
  size?: string;      // z. B. "55vmin"
  position?: "center" | "top" | "bottom";
};

export default function WatermarkOverlay({
  src,
  opacity = 0.05,
  size = "55vmin",
  position = "center",
}: Props) {
  const pos =
    position === "top" ? "bg-[position:50%_12%]"
    : position === "bottom" ? "bg-[position:50%_88%]"
    : "bg-center";

  return (
    <div
      aria-hidden
      className={`fixed inset-0 pointer-events-none select-none z-[1] ${pos} bg-no-repeat`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: size,
        opacity,
        mixBlendMode: "normal",
      }}
    />
  );
}