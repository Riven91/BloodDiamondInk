import Image from "next/image";

export default function XmasVoucherBanner() {
  return (
    <section className="mt-10 mb-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/70 p-[2px] shadow-xl">
        <div className="relative overflow-hidden rounded-[22px]">
          <Image
            src="/gut3.jpeg"
            alt="Tattoo-Gutschein Aktion von Blood Diamond Tattoo Ink im Weihnachtsdesign – Geschenke, rote Schleifen und Hinweis auf die Gutschein-Promotion"
            width={1600}
            height={1067}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-white/90 text-center max-w-2xl mx-auto">
        Wenn du dich für einen unserer Tattoo-Gutscheine interessierst, melde dich bitte direkt bei uns, am
        einfachsten über <strong>Instagram</strong> oder per <strong>WhatsApp</strong> beim jeweiligen Studio.
        Dort klärt unser Team alle Fragen persönlich mit dir und stellt dir deinen Gutschein aus.
      </p>
    </section>
  );
}
