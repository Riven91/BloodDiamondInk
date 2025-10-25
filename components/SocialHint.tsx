export default function SocialHint() {
  return (
    <div className="mt-6 text-gray-300 text-sm md:text-base">
      Gefallen dir die Arbeiten? Schau für weitere Bilder auf{" "}
      <a
        href="https://www.facebook.com/profile.php?id=61557864394966"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-gray-400 hover:decoration-white"
      >
        Facebook
      </a>
      {" "}vorbei – und wirf einen Blick in unsere{" "}
      <a href="/galerie" className="underline decoration-gray-400 hover:decoration-white">
        Galerie
      </a>
      .
    </div>
  );
}
