"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function RitualPage() {
    const t = useTranslations("ritualPage");

    const steps = ["moment", "space", "brew", "slow", "memory"] as const;

    return (
        <main className="bg-ritual-cream text-espresso">
            <section className="relative overflow-hidden px-6 pt-44 pb-32 md:pt-52 md:pb-40">
                <div className="pointer-events-none absolute right-[-16%] top-20 h-96 w-96 rounded-full bg-mineral/20 blur-3xl" />

                <div className="mx-auto max-w-6xl">
                    <p className="mb-10 text-sm uppercase tracking-[0.45em] text-nacar-gold">
                        {t("hero.eyebrow")}
                    </p>

                    <h1 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.045em] md:text-7xl">
                        {t("hero.title")}
                    </h1>

                    <p className="mt-14 max-w-2xl text-lg font-light leading-relaxed text-walnut md:text-xl">
                        {t("hero.description")}
                    </p>
                </div>
            </section>

            <section className="border-y border-mineral px-6 py-28">
                <div className="mx-auto grid max-w-6xl gap-20 md:grid-cols-[0.9fr_1.1fr]">
                    <h2 className="text-4xl font-light leading-tight md:text-5xl">
                        {t("meaning.title")}
                    </h2>

                    <div className="max-w-xl space-y-8 text-lg font-light leading-relaxed text-walnut">
                        <p>{t("meaning.paragraph1")}</p>
                        <p>{t("meaning.paragraph2")}</p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-28 bg-nacar-ivory">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-8 text-sm uppercase tracking-[0.4em] text-nacar-gold">
                        {t("steps.eyebrow")}
                    </p>

                    <h2 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
                        {t("steps.title")}
                    </h2>

                    <div className="mt-20">
                        {steps.map((step, index) => (
                            <article
                                key={step}
                                className="grid gap-8 border-t border-nacar-gold/30 py-12 md:grid-cols-[120px_0.8fr_1fr]"
                            >
                                <span className="text-xs tracking-[0.25em] text-nacar-gold">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="text-3xl font-light">
                                    {t(`steps.${step}.title`)}
                                </h3>

                                <p className="max-w-lg leading-relaxed text-walnut">
                                    {t(`steps.${step}.description`)}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-espresso px-6 py-44 text-ritual-cream">
                <div className="mx-auto grid max-w-6xl gap-20 md:grid-cols-2 md:items-center">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-mineral">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2B2118]/10 to-[#2B2118]/25" />
                    </div>

                    <div>
                        <p className="mb-8 text-sm uppercase tracking-[0.4em] text-nacar-gold">
                            {t("daily.eyebrow")}
                        </p>

                        <h2 className="text-5xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
                            {t("daily.title")}
                        </h2>

                        <p className="mt-10 text-lg font-light leading-relaxed text-mineral">
                            {t("daily.description")}
                        </p>

                        <div className="mt-12 grid gap-8 border-y border-nacar-gold/30 py-10 md:grid-cols-3">
                            <div>
                                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-nacar-gold">
                                    {t("daily.notesLabel")}
                                </p>
                                <p className="text-mineral">{t("daily.notes")}</p>
                            </div>

                            <div>
                                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-nacar-gold">
                                    {t("daily.momentLabel")}
                                </p>
                                <p className="text-mineral">{t("daily.moment")}</p>
                            </div>

                            <div>
                                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-nacar-gold">
                                    {t("daily.methodLabel")}
                                </p>
                                <p className="text-mineral">{t("daily.method")}</p>
                            </div>
                        </div>

                        <Link
                            href={`/collection/daily-ritual`}
                            className="group mt-12 inline-flex items-center gap-4 text-sm uppercase tracking-[0.22em] text-nacar-gold transition-colors duration-500 hover:text-mineral"
                        >
                            <span className="relative">
                                {t("daily.cta")}
                                <span className="absolute left-0 -bottom-2 h-px w-0 bg-nacar-gold transition-all duration-500 group-hover:w-full" />
                            </span>

                            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-6 py-36">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-5xl font-light tracking-[-0.035em] md:text-7xl">
                        {t("closing.title")}
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-walnut md:text-xl">
                        {t("closing.description")}
                    </p>

                    <Link
                        href="/#coleccion"
                        className="group mt-14 inline-flex items-center gap-4 text-sm uppercase tracking-[0.24em] text-nacar-gold transition-colors duration-500 hover:text-smoked-bronze"
                    >
                        <span className="relative">
                            {t("closing.cta")}
                            <span className="absolute left-0 -bottom-2 h-px w-0 bg-smoked-bronze transition-all duration-500 group-hover:w-full" />
                        </span>

                        <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </main>
    );
}