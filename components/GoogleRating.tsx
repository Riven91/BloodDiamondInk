import Image from "next/image";

export default function GoogleRating({ city }: { city: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-white select-none">
      <span className="font-semibold underline text-center text-sm md:text-base">
        Blood Diamond Tattoo Ink. {city}
      </span>
      <div className="flex items-center gap-1">
        <Image
          src="/Google__G__logo.svg.png"
          alt="Google-Logo"
          width={28}
          height={28}
          className="object-contain w-7 h-7 md:w-8 md:h-8"
        />
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.674h4.911c.97 0 1.372 1.24.588 1.81l-3.975 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.979-2.89-3.978 2.89c-.784.57-1.84-.197-1.54-1.118l1.519-4.674-3.975-2.89c-.784-.57-.382-1.81.588-1.81h4.91l1.528-4.674z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
