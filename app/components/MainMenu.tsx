"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function MainMenu() {
    const t = useTranslations("Home");
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        { href: "/#casa", label: t("nav.house") },
        { href: "/#coleccion", label: t("nav.collection") },
        { href: "/#ritual", label: t("nav.ritual") },
        { href: "/#journal", label: t("nav.journal") },
    ];

    const mobilePanel =
        open && mounted
            ? createPortal(
                <div className="fixed inset-0 z-[9999] overflow-hidden bg-ritual-cream px-6 py-6 md:hidden">
                    <div className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-multiply bg-[url('/noise.png')]" />
                    <div className="pointer-events-none absolute bottom-[-12%] right-[-18%] h-80 w-80 rounded-full bg-[#D9C8AE]/20 blur-3xl" />
                    <div className="pointer-events-none absolute top-[18%] left-[-24%] h-64 w-64 rounded-full bg-[#F4E7D3]/25 blur-3xl" />

                    <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.28em] uppercase text-nacar-gold">
                            Nácar
                        </span>

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="text-walnut transition-colors duration-300 hover:text-espresso"
                            aria-label={t("nav.closeMenu")}
                        >
                            <X className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                    </div>

                    <nav className="relative z-10 mt-28 flex flex-col gap-6 font-serif text-[2.45rem] font-light leading-none tracking-[-0.035em] text-espresso">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="transition-opacity duration-500 hover:opacity-70"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <p className="relative z-10 mt-8 text-[12px] tracking-[0.4em] uppercase text-smoked-bronze">
                        {t("hero.eyebrow")}
                    </p>

                    <div className="absolute bottom-8 left-6 z-10">
                        <LanguageSwitcher />
                    </div>
                </div>,
                document.body
            )
            : null;

    return (
        <>
            <div className="hidden md:flex items-center gap-12">
                <nav className="flex items-center gap-11 text-[12px] tracking-[0.08em] uppercase text-walnut">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group relative transition-colors duration-500 hover:text-nacar-gold"
                        >
                            <span>{link.label}</span>
                            <span className="absolute left-0 -bottom-2 h-px w-0 bg-nacar-gold transition-all duration-500 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="h-4 w-px bg-mineral" />
                <LanguageSwitcher />
            </div>

            <button
                type="button"
                onClick={() => setOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-walnut transition-colors duration-300 hover:text-espresso"
                aria-label={t("nav.openMenu")}
            >
                {t("nav.menu")}
                <Menu className="h-3 w-3 opacity-70" strokeWidth={1.4} />
            </button>

            {mobilePanel}
        </>
    );
}