import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import Image from "next/image";
import { MainMenu } from "../components/MainMenu";
import { NewsletterForm } from "../components/forms/newsletter-form";

type ProductLine = {
  name: string;
  description: string;
};

export default function Home() {
  const t = useTranslations("Home");
  const productLines = t.raw("productLines") as ProductLine[];

  return (
    <main className="bg-ritual-cream text-espresso">
      <section id="home"
        className="
    min-h-[100svh]
    overflow-visible
    bg-ritual-cream
    px-6
    pt-28
    pb-5
    md:px-12
    md:pt-32
    md:pb-6
    flex
    flex-col
    [@media(min-height:820px)]:h-[100svh]
    [@media(min-height:820px)]:overflow-hidden
  "
      >
        {/* HERO */}
        <div
          className="
      relative
      mx-auto
      flex
      w-full
      max-w-6xl
      flex-1
      items-center
      overflow-hidden
      px-2
      py-4
      md:px-0
      md:py-6
      [@media(max-height:819px)]:items-start
      [@media(max-height:819px)]:flex-none
    "
        >
          {/* ATMOSPHERIC BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">

            {/* MAIN IMAGE */}
            <div className="absolute left-1/2 top-1/2 h-[72%] w-[135%] -translate-x-1/2 -translate-y-1/2 opacity-[0.24] sm:h-[78%] sm:w-[120%] sm:opacity-[0.26] md:left-auto md:right-[-6%] md:top-[-10%] md:h-[112%] md:w-[92%] md:translate-x-0 md:translate-y-0 md:opacity-[0.30]">
              <img
                src="/hero-nacar.png"
                alt="Nácar Atmosphere"
                className="h-full w-full object-contain blur-[0.2px] brightness-[0.82] contrast-[1.08] saturate-[0.88]"
              />
            </div>
            {/* NOISE */}
            <div className="absolute left-1/2 top-1/2 h-[72%] w-[135%] -translate-x-1/2 -translate-y-1/2 opacity-[0.025] mix-blend-multiply bg-[url('/noise.png')] sm:h-[78%] sm:w-[120%] md:left-auto md:right-[-6%] md:top-[-10%] md:h-[112%] md:w-[92%] md:translate-x-0 md:translate-y-0" />
            {/* LIGHT GLOW */}
            <div className="absolute top-[10%] right-[-16%] h-72 w-72 rounded-full bg-[#F4E7D3]/18 blur-3xl md:right-[8%] md:h-[34rem] md:w-[34rem]" />

            {/* DEPTH SHADOW */}
            <div className="absolute bottom-[-18%] right-[4%] h-64 w-64 rounded-full bg-[#2B2118]/4 blur-3xl md:h-[28rem] md:w-[28rem]" />

            {/* SECONDARY GLOW */}
            <div className="absolute top-[38%] right-[6%] h-52 w-52 rounded-full bg-[#D9C8AE]/10 blur-3xl md:right-[28%] md:h-[18rem] md:w-[18rem]" />

            {/* ATMOSPHERIC FADE */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EF] via-[#FAF6EF]/82 to-[#FAF6EF]/12 md:via-[#FAF6EF]/38 md:via-[58%]" />

            {/* SOFT VIGNETTE */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF6EF]/30" />
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 max-w-[46rem]">

            {/* EYEBROW */}
            <p className="mb-5 text-[11px] tracking-[0.34em] uppercase text-nacar-gold md:mb-8 md:text-sm md:tracking-[0.44em]">
              {t("hero.eyebrow")}
            </p>

            {/* TITLE */}
            <h1 className="font-serif max-w-5xl text-[clamp(2.45rem,6.4vw,5.7rem)] font-light leading-[0.9] tracking-[-0.045em] text-espresso text-shadow-[0_1px_1px_rgba(250,246,239,0.15)] md:leading-[0.94]">
              {t("hero.title")}
            </h1>

            {/* DESCRIPTION + CTA */}
            <div className="mt-7 flex flex-col gap-5 md:mt-9 md:flex-row md:items-center md:gap-10">

              <p className="max-w-xl text-[15px] leading-[1.7] text-walnut md:text-[1.08rem] md:leading-[1.85]">
                {t("hero.description")}
              </p>

              <a
                href="#coleccion"
                className="group inline-flex items-center gap-4 whitespace-nowrap text-[12px] uppercase tracking-[0.16em] text-nacar-gold transition-all duration-500 hover:text-espresso md:text-[14px]"
              >
                <span className="relative">
                  {t("hero.cta")}

                  <span className="absolute left-0 -bottom-2 h-px w-0 bg-smoked-bronze transition-all duration-500 group-hover:w-full" />
                </span>

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="shrink-0 border-t border-mineral pt-3 text-[11px] leading-none text-smoked-bronze md:pt-4 md:text-sm">
          {t("hero.footer")}
        </div>
      </section>

      <section
        id="casa"
        className="px-6 py-28 border-t border-mineral bg-ritual-cream"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.35em] uppercase text-nacar-gold mb-8">
            {t("house.eyebrow")}
          </p>

          <h2 className="text-3xl md:text-5xl xl:text-6xl font-light leading-tight text-espresso">
            {t("house.title")}
          </h2>

          <div className="mt-20 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-walnut font-light">
              {t("house.description")}
            </p>

            <div className="mt-12">
              <a
                href="/house"
                className="group inline-flex items-center gap-4 text-[12px] uppercase tracking-[0.16em] text-nacar-gold transition-all duration-500 hover:text-espresso md:text-[14px]"
              >
                <span className="relative">
                  {t("house.cta")}

                  <span className="absolute left-0 -bottom-2 h-px w-0 bg-smoked-bronze transition-all duration-500 group-hover:w-full" />
                </span>

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section id="coleccion" className="px-6 py-36 bg-espresso text-ritual-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 self-start">
              <p className="text-sm tracking-[0.35em] uppercase text-nacar-gold mb-6">
                {t("architecture.eyebrow")}
              </p>

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight">
                {t("architecture.title")}
              </h2>

              <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-mineral font-light">
                {t("architecture.description")}
              </p>
            </div>

            <div className="border-t border-smoked-bronze/60">
              {productLines.map((line, index) => (
                <article
                  key={line.name}
                  className="group grid gap-8 border-b border-smoked-bronze/60 py-10 md:grid-cols-[80px_1fr] md:py-14 transition-colors duration-700 hover:bg-[#2f241c]/60"
                >
                  <span className="text-xs tracking-[0.25em] text-nacar-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="grid gap-8 md:grid-cols-[0.8fr_1fr] md:items-start">
                    <h3 className="text-3xl md:text-4xl font-light leading-tight">
                      {line.name}
                    </h3>

                    <p className="max-w-sm text-sm leading-relaxed text-mineral font-light">
                      {line.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ritual" className="px-6 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-mineral rounded-t-full" />

          <div>
            <p className="text-sm tracking-[0.35em] uppercase text-nacar-gold mb-6">
              {t("ritual.eyebrow")}
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              {t("ritual.title")}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-walnut">
              {t("ritual.description")}
            </p>

            <div className="mt-10 flex gap-4">
              <a className="bg-espresso text-ritual-cream px-6 py-4 text-sm uppercase tracking-[0.2em] cursor-pointer">
                {t("ritual.primaryCta")}
              </a>

              <a className="border border-nacar-gold px-6 py-4 text-sm uppercase tracking-[0.2em] cursor-pointer">
                {t("ritual.secondaryCta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-12 bg-nacar-ivory ">
        <div className="max-w-6xl mx-auto">
          <div className="border-y border-nacar-gold/30 py-16 md:py-10">
            <p className="mx-auto max-w-3xl text-center text-xl md:text-3xl font-light leading-tight text-espresso">
              {t("statement")}
            </p>
          </div>
        </div>
      </section>

      <section id="journal" className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.35em] uppercase text-nacar-gold mb-6">
            {t("journal.eyebrow")}
          </p>

          <div className="grid md:grid-cols-2 gap-20">
            <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-2xl">
              {t("journal.title")}
            </h2>

            <div className="space-y-8 text-walnut max-w-xl md:pt-4">
              <p className="leading-relaxed">{t("journal.description")}</p>

              <a
                href="#coleccion"
                className="group inline-flex items-center gap-4 whitespace-nowrap text-[12px] uppercase tracking-[0.16em] text-nacar-gold transition-all duration-500 hover:text-espresso md:text-[14px]"
              >
                <span className="relative">
                  {t("journal.cta")}

                  <span className="absolute left-0 -bottom-2 h-px w-0 bg-smoked-bronze transition-all duration-500 group-hover:w-full" />
                </span>

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 bg-charcoal text-ritual-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.35em] uppercase text-nacar-gold mb-6">
            {t("newsletter.eyebrow")}
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            {t("newsletter.title")}
          </h2>

          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}