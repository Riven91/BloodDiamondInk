import Image from "next/image";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Seite nicht gefunden
      </h1>
      <p className="mx-auto mb-10 max-w-xl text-white/70">
        Diese Seite ist im Dunkel der Tinte verschwunden. Vielleicht wurde sie überstochen oder sie hat nie existiert.
      </p>

      <div className="mt-2 flex justify-center">
        <Image
          src="/brand/bdi-logo-transparent.webp"
          alt="Blood Diamond Tattoo Ink. Logo"
          width={200}
          height={200}
          className="opacity-30 brightness-110 [filter:drop-shadow(0_0_10px_rgba(16,185,129,0.75))_drop-shadow(0_0_16px_rgba(16,185,129,0.45))]"
          sizes="200px"
        />
      </div>
    </main>
  );
}
