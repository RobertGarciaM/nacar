"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    function changeLanguage(nextLocale: "es" | "en") {
        if (nextLocale === locale) return;

        document.getElementById("page-content")?.classList.add("opacity-0");

        setTimeout(() => {
            router.replace(pathname, { locale: nextLocale, scroll: false });
        }, 180);
    }

    return (
        <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase">
            <button
                onClick={() => changeLanguage("es")}
                className={`group relative transition-colors duration-500 cursor-pointer ${locale === "es"
                    ? "text-nacar-gold"
                    : "text-walnut hover:text-nacar-gold"
                    }`}
            >
                <span>ES</span>

                <span
                    className={`absolute left-0 -bottom-1 h-px bg-smoked-bronze transition-all duration-500 ${locale === "es" ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                />
            </button>

            <span className="text-mineral">/</span>

            <button
                onClick={() => changeLanguage("en")}
                className={`group relative transition-colors duration-500 cursor-pointer ${locale === "en"
                    ? "text-nacar-gold"
                    : "text-walnut hover:text-nacar-gold"
                    }`}
            >
                <span>EN</span>

                <span
                    className={`absolute left-0 -bottom-1 h-px bg-smoked-bronze transition-all duration-500 ${locale === "en" ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                />
            </button>
        </div>
    );
}