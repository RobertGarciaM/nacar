import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

type JournalRitualDiarioPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function JournalRitualDiarioPage({
  params,
}: JournalRitualDiarioPageProps) {
  const { locale } = await params;
  const t = await getTranslations("journalRitualDiario");

  const reflections = [
    t("reflections.items.pause"),
    t("reflections.items.repetition"),
    t("reflections.items.origin"),
  ];

  return (
    <main className="bg-ritual-cream text-espresso">
      <article>
        <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/${locale}`}
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-smoked-bronze transition-colors duration-300 hover:text-espresso"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              {t("navigation.back")}
            </Link>

            <div className="mt-20 grid gap-14 md:grid-cols-[0.78fr_1.22fr] md:items-end">
              <div>
                <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
                  {t("hero.category")}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-walnut">
                  <span>{t("hero.date")}</span>
                  <span>{t("hero.readingTime")}</span>
                </div>
              </div>

              <div>
                <h1 className="max-w-4xl text-[52px] leading-[0.92] tracking-[-0.055em] md:text-[88px] lg:text-[108px]">
                  {t("hero.title")}
                </h1>

                <p className="mt-8 max-w-2xl text-[17px] leading-8 text-walnut md:text-[18px]">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-12 md:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="relative min-h-[420px] overflow-hidden bg-nacar-ivory md:min-h-[620px]">
              <div className="absolute inset-8 rounded-t-full bg-mineral/70" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ritual-cream/90 to-transparent" />
              <div className="absolute bottom-10 left-10 max-w-md border-t border-smoked-bronze/40 pt-6">
                <p className="text-[12px] uppercase leading-6 tracking-[0.28em] text-smoked-bronze">
                  {t("hero.visualCaption")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.78fr_1.22fr]">
            <aside className="hidden md:block">
              <div className="sticky top-32 border-t border-mineral pt-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-nacar-gold">
                  {t("aside.eyebrow")}
                </p>

                <p className="mt-6 max-w-xs text-[24px] leading-tight tracking-[-0.03em] text-espresso">
                  {t("aside.quote")}
                </p>
              </div>
            </aside>

            <div className="max-w-3xl">
              <p className="text-[26px] leading-[1.45] tracking-[-0.025em] text-espresso md:text-[34px]">
                {t("intro.lead")}
              </p>

              <div className="mt-14 space-y-8 text-[17px] leading-8 text-walnut">
                <p>{t("intro.paragraphOne")}</p>
                <p>{t("intro.paragraphTwo")}</p>
              </div>

              <div className="my-20 border-y border-mineral py-12">
                <p className="text-center text-[34px] leading-[1.08] tracking-[-0.04em] text-espresso md:text-[54px]">
                  {t("pullQuote")}
                </p>
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-walnut">
                <p>{t("body.paragraphOne")}</p>
                <p>{t("body.paragraphTwo")}</p>
                <p>{t("body.paragraphThree")}</p>
              </div>

              <div className="my-20 grid gap-4 md:grid-cols-3">
                {reflections.map((item) => (
                  <div
                    key={item}
                    className="min-h-[180px] border border-mineral bg-nacar-ivory p-6"
                  >
                    <p className="text-[22px] leading-tight tracking-[-0.03em] text-espresso">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-8 text-[17px] leading-8 text-walnut">
                <p>{t("closing.paragraphOne")}</p>
                <p>{t("closing.paragraphTwo")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-espresso px-6 py-24 text-ritual-cream md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
                {t("productCta.eyebrow")}
              </p>

              <h2 className="max-w-2xl text-[42px] leading-[1] tracking-[-0.045em] md:text-[72px]">
                {t("productCta.title")}
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-[16px] leading-8 text-mineral">
                {t("productCta.description")}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/collection/daily-ritual`}
                  className="inline-flex items-center gap-3 bg-ritual-cream px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-espresso transition-opacity duration-300 hover:opacity-85"
                >
                  {t("productCta.primaryCta")}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href={`/${locale}/collection/daily-ritual#profile`}
                  className="inline-flex items-center gap-3 border border-mineral/40 px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-ritual-cream transition-colors duration-300 hover:border-nacar-gold hover:text-nacar-gold"
                >
                  {t("productCta.secondaryCta")}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}