import Image from "next/image";

export default function SignatureStyles() {
  const styles = [
    { src: "/realistic1.jpeg", alt: "Signature Style – Realistic" },
    { src: "/fineline1.jpeg", alt: "Signature Style – Fineline" },
    { src: "/coverup1.jpeg", alt: "Signature Style – Cover-Up" },
    { src: "/mandala1 (1).jpeg", alt: "Signature Style – Mandala" },
    { src: "/geometric1.jpeg", alt: "Signature Style – Geometric" },
    { src: "/letterworking1.jpeg", alt: "Signature Style – Letterworking" },
  ];

  return (
    <section id="signature" className="mt-16">
      <h2 className="text-center text-3xl font-bold mb-10">
        Unsere Signature Styles
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {styles.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl bg-black/30 aspect-[4/5]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="absolute inset-0 w-full h-full object-cover"
              sizes="(max-width:640px)50vw,(max-width:1024px)33vw,300px"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
