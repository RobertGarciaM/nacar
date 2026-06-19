"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HousePage() {
    const t = useTranslations("housePage");

    const principles = ["origin", "ritual", "curatorship", "memory"] as const;

    const houseElements = [
        "coffee",
        "objects",
        "journal",
        "harvests",
        "gatherings",
    ] as const;

    return (
        <main className="bg-ritual-cream text-espresso">
            <section className="relative overflow-hidden px-6 pt-44 pb-32 md:pt-52 md:pb-40">
                <div className="pointer-events-none absolute right-[-18%] top-20 h-96 w-96 rounded-full bg-mineral/20 blur-3xl" />

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
                        {t("why.title")}
                    </h2>

                    <div className="max-w-xl space-y-8 text-lg font-light leading-relaxed text-walnut">
                        <p>{t("why.paragraph1")}</p>
                        <p>{t("why.paragraph2")}</p>
                    </div>
                </div>
            </section>

            <section className="bg-ritual-cream px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="relative aspect-[16/8] overflow-hidden bg-mineral">
                        <img
                            src="/house-editorial.png"
                            alt="Nácar"
                            className="h-full w-full object-cover brightness-[0.88] contrast-[1.05] saturate-[0.9]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EF]/20 via-transparent to-[#2B2118]/10" />
                    </div>

                    <div className="mt-8 max-w-xl">
                        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-nacar-gold">
                            {t("pause.eyebrow")}
                        </p>

                        <p className="text-lg font-light leading-relaxed text-walnut">
                            {t("pause.text")}
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y border-mineral px-6 py-28">
                <div className="mx-auto max-w-5xl">
                    {principles.map((principle, index) => (
                        <article
                            key={principle}
                            className="grid gap-8 border-t border-mineral py-12 first:border-t-0 md:grid-cols-[120px_0.8fr_1fr]"
                        >
                            <span className="text-xs tracking-[0.25em] text-nacar-gold">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3 className="text-3xl font-light">
                                {t(`principles.${principle}.title`)}
                            </h3>

                            <p className="max-w-lg leading-relaxed text-walnut">
                                {t(`principles.${principle}.description`)}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-nacar-ivory px-6 py-28">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="mb-8 text-sm uppercase tracking-[0.4em] text-nacar-gold">
                        {t("house.eyebrow")}
                    </p>

                    <h2 className="text-5xl font-light tracking-[-0.035em] md:text-6xl">
                        {t("house.title")}
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-relaxed text-walnut md:text-xl">
                        {t("house.description")}
                    </p>

                    <div className="mt-20 grid gap-8 border-y border-nacar-gold/30 py-10 text-xs uppercase tracking-[0.28em] text-smoked-bronze md:grid-cols-5">
                        {houseElements.map((item) => (
                            <span key={item}>{t(`house.${item}`)}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-32 border-t border-mineral bg-ritual-cream">
                <div className="max-w-6xl mx-auto">

                    <p className="text-sm tracking-[0.35em] uppercase text-nacar-gold mb-6">
                        {t("insideHouse.eyebrow")}
                    </p>

                    <h2 className="max-w-3xl text-4xl md:text-6xl font-light leading-tight text-espresso">
                        {t("insideHouse.title")}
                    </h2>

                    <p className="max-w-2xl mt-8 text-lg text-walnut leading-relaxed">
                        {t("insideHouse.description")}
                    </p>

                    <div className="mt-20 grid md:grid-cols-2 gap-x-20 gap-y-14">

                        {[
                            "coffee",
                            "journal",
                            "objects",
                            "harvests",
                            "gatherings"
                        ].map((item) => (
                            <div
                                key={item}
                                className="border-t border-mineral pt-6"
                            >
                                <h3 className="text-2xl font-light text-espresso mb-3">
                                    {t(`insideHouse.${item}.title`)}
                                </h3>

                                <p className="text-walnut leading-relaxed">
                                    {t(`insideHouse.${item}.description`)}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            <section className="bg-espresso px-6 py-44 text-ritual-cream">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-10 text-sm uppercase tracking-[0.4em] text-nacar-gold">
                        {t("visitor.eyebrow")}
                    </p>

                    <h2 className="max-w-5xl text-5xl font-light leading-[1.02] tracking-[-0.035em] md:text-7xl">
                        {t("visitor.title")}
                    </h2>

                    <div className="mt-16 grid gap-10 text-lg font-light leading-relaxed text-mineral md:grid-cols-3">
                        <p>{t("visitor.paragraph1")}</p>
                        <p>{t("visitor.paragraph2")}</p>
                        <p>{t("visitor.paragraph3")}</p>
                    </div>

                    <blockquote className="mt-24 border-l border-nacar-gold pl-8 md:pl-12">
                        <p className="max-w-3xl text-3xl font-light leading-relaxed md:text-4xl">
                            {t("visitor.highlight")}
                        </p>
                    </blockquote>
                </div>
            </section>

            <section className="bg-ritual-cream px-6 py-36">
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