export default function GoogleRating({ city }: { city: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-white select-none">
      <span className="font-semibold underline text-center text-sm md:text-base">
        Blood Diamond Tattoo Ink. {city}
      </span>
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-5 h-5 fill-current text-[#4285F4]"
          aria-label="Google logo"
        >
          <path d="M24 9.5c3.1 0 5.2 1.3 6.4 2.4l4.6-4.6C31.7 4.9 28.2 3 24 3 14.9 3 7.3 8.9 4.5 17.1l5.9 4.6C11.9 15.2 17.4 9.5 24 9.5z" />
          <path d="M46.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.8h12.6c-.3 2.1-1.7 5.2-4.8 7.3l7.4 5.7c4.3-4 6.9-9.9 6.9-16.7z" />
          <path d="M10.4 28.5c-.8-2.4-1.3-5-1.3-7.5s.5-5.1 1.3-7.5l-5.9-4.6C2.5 13.2 1 18.3 1 24s1.5 10.8 3.5 15.1l5.9-4.6z" />
          <path d="M24 46c6.5 0 12-2.2 16-6.1l-7.4-5.7c-2 1.3-4.7 2.1-8.6 2.1-6.6 0-12.1-5.7-13.6-13.1l-5.9 4.6C7.2 40.5 14.8 46 24 46z" />
        </svg>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.674h4.911c.97 0 1.372 1.24.588 1.81l-3.975 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.979-2.89-3.978 2.89c-.784.57-1.84-.197-1.54-1.118l1.519-4.674-3.975-2.89c-.784-.57-.382-1.81.588-1.81h4.91l1.528-4.674z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
