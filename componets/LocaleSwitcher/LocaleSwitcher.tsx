"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LocaleSwitcher = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] ?? "en";

  const locales = ["en", "ua"];

  const changeLocale = (newLocale: string) => {
    setOpen(false);
    const newPath = pathname.replace(/^\/(en|ua)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-[10px]"
      >
        <span className="font--raleway text-white font-bold text-[0.88rem] leading-[1.42857]">
          {currentLocale.toUpperCase()}
        </span>
        <div className="">
          <svg className="stroke-white w-[17px] h-[17px] ml-[10px]">
            <use href="/sprite.svg#icon-arrow"></use>
          </svg>
        </div>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 bg-transparent backdrop-blur-md rounded z-50 min-w-full">
          {locales
            .filter((l) => l !== currentLocale)
            .map((l) => (
              <button
                key={l}
                onClick={() => changeLocale(l)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-white/10"
              >
                {l.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
