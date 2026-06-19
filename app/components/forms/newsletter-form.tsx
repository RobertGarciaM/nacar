"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";


export function NewsletterForm() {
    const t = useTranslations("Home");

    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

    const isValidEmail = (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isValidEmail(email)) {
            setStatus("error");
            return;
        }

        setStatus("success");

        // Aquí luego conectas tu API / newsletter service
    };

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-14 flex flex-col gap-4 max-w-xl mx-auto"
        >
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    inputMode="email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setStatus("idle");
                    }}
                    placeholder={t("newsletter.placeholder")}
                    className={`flex-1 bg-transparent border px-6 py-5 text-sm text-ritual-cream placeholder:text-mineral/70 outline-none transition-colors duration-500 ${status === "error"
                        ? "border-nacar-gold"
                        : "border-smoked-bronze/70 focus:border-nacar-gold/60"
                        }`}
                />

                <button className="cursor-pointer bg-nacar-gold px-7 py-5 text-sm uppercase tracking-[0.2em] text-charcoal transition-colors duration-500 hover:bg-smoked-bronze">
                    {t("newsletter.button")}
                </button>
            </div>

            {status === "error" && (
                <p className="text-left text-sm leading-relaxed text-mineral">
                    {t("newsletter.invalidEmail")}
                </p>
            )}

            {status === "success" && (
                <p className="text-left text-sm leading-relaxed text-mineral">
                    {t("newsletter.success")}
                </p>
            )}
        </form>
    );
}