import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

type RitualDiarioPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function RitualDiarioPage({
  params,
}: RitualDiarioPageProps) {
  const { locale } = await params;
  const t = await getTranslations("ritualDiario");

  const sensoryNotes = [
    t("profile.notes.chocolate"),
    t("profile.notes.panela"),
    t("profile.notes.walnut"),
    t("profile.notes.caramel"),
  ];

  const profileDetails = [
    {
      label: t("profile.details.sensation.label"),
      value: t("profile.details.sensation.value"),
    },
    {
      label: t("profile.details.acidity.label"),
      value: t("profile.details.acidity.value"),
    },
    {
      label: t("profile.details.body.label"),
      value: t("profile.details.body.value"),
    },
    {
      label: t("profile.details.finish.label"),
      value: t("profile.details.finish.value"),
    },
  ];

  const brewMethods = [
    t("preparation.methods.kalita"),
    t("preparation.methods.v60"),
    t("preparation.methods.chemex"),
    t("preparation.methods.frenchPress"),
    t("preparation.methods.drip"),
  ];

  const recipe = [
    {
      label: t("preparation.recipe.coffee.label"),
      value: t("preparation.recipe.coffee.value"),
    },
    {
      label: t("preparation.recipe.water.label"),
      value: t("preparation.recipe.water.value"),
    },
    {
      label: t("preparation.recipe.temperature.label"),
      value: t("preparation.recipe.temperature.value"),
    },
    {
      label: t("preparation.recipe.grind.label"),
      value: t("preparation.recipe.grind.value"),
    },
    {
      label: t("preparation.recipe.time.label"),
      value: t("preparation.recipe.time.value"),
    },
  ];

  const moments = [
    t("moments.items.morning"),
    t("moments.items.pause"),
    t("moments.items.conversation"),
    t("moments.items.center"),
  ];

  const houseLines = [
    {
      number: "01",
      title: t("house.lines.daily.title"),
      text: t("house.lines.daily.text"),
    },
    {
      number: "02",
      title: t("house.lines.origin.title"),
      text: t("house.lines.origin.text"),
    },
    {
      number: "03",
      title: t("house.lines.reserve.title"),
      text: t("house.lines.reserve.text"),
    },
    {
      number: "04",
      title: t("house.lines.collection.title"),
      text: t("house.lines.collection.text"),
    },
  ];

  return (
    <main className="bg-ritual-cream text-espresso">
      <section className="relative min-h-screen px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-44">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
              {t("hero.eyebrow")}
            </p>

            <h1 className="max-w-3xl text-[56px] leading-[0.88] tracking-[-0.055em] text-espresso md:text-[96px] lg:text-[118px]">
              {t("hero.title")}
            </h1>

            <p className="mt-8 max-w-md text-[15px] leading-7 text-walnut md:text-[16px]">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/private-access`}
                className="inline-flex items-center gap-3 bg-espresso px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-ritual-cream transition-opacity duration-300 hover:opacity-85"
              >
                {t("hero.primaryCta")}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <a
                href="#profile"
                className="inline-flex items-center gap-3 border border-mineral px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-espresso transition-colors duration-300 hover:border-smoked-bronze hover:text-smoked-bronze"
              >
                {t("hero.secondaryCta")}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-nacar-ivory md:min-h-[620px]">
            <div className="absolute inset-8 rounded-t-full bg-mineral/70" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ritual-cream/80 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 border-t border-smoked-bronze/40 pt-6">
              <p className="max-w-sm text-[13px] uppercase leading-6 tracking-[0.24em] text-smoked-bronze">
                {t("hero.visualCaption")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-mineral/70 bg-nacar-ivory px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <p className="text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
            {t("manifesto.eyebrow")}
          </p>

          <div>
            <h2 className="max-w-4xl text-[38px] leading-[1.02] tracking-[-0.04em] md:text-[62px]">
              {t("manifesto.title")}
            </h2>

            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-walnut">
              {t("manifesto.description")}
            </p>
          </div>
        </div>
      </section>

      <section
        id="profile"
        className="bg-espresso px-6 py-24 text-ritual-cream md:px-12 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
              {t("profile.eyebrow")}
            </p>

            <h2 className="max-w-md text-[42px] leading-[0.96] tracking-[-0.04em] md:text-[68px]">
              {t("profile.title")}
            </h2>

            <p className="mt-8 max-w-sm text-[15px] leading-7 text-mineral">
              {t("profile.description")}
            </p>
          </div>

          <div>
            <div className="grid gap-3 md:grid-cols-2">
              {sensoryNotes.map((note) => (
                <div
                  key={note}
                  className="border border-mineral/25 px-6 py-8"
                >
                  <p className="text-[22px] leading-tight tracking-[-0.02em]">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 divide-y divide-mineral/20 border-y border-mineral/20">
              {profileDetails.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-3 py-6 md:grid-cols-[0.45fr_1fr]"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-nacar-gold">
                    {item.label}
                  </p>
                  <p className="max-w-xl text-[16px] leading-7 text-mineral">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1fr] md:items-start">
          <div className="min-h-[520px] bg-nacar-ivory p-8">
            <div className="flex h-full items-end rounded-t-full bg-mineral/70 p-8">
              <p className="max-w-xs text-[12px] uppercase leading-6 tracking-[0.24em] text-smoked-bronze">
                {t("origin.visualCaption")}
              </p>
            </div>
          </div>

          <div>
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
              {t("origin.eyebrow")}
            </p>

            <h2 className="max-w-xl text-[42px] leading-[1] tracking-[-0.04em] md:text-[68px]">
              {t("origin.title")}
            </h2>

            <p className="mt-8 max-w-xl text-[16px] leading-8 text-walnut">
              {t("origin.description")}
            </p>

            <div className="mt-12 grid gap-4 border-y border-mineral py-8 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-nacar-gold">
                  {t("origin.status.label")}
                </p>
                <p className="mt-3 text-[18px] text-espresso">
                  {t("origin.status.value")}
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-nacar-gold">
                  {t("origin.role.label")}
                </p>
                <p className="mt-3 text-[18px] text-espresso">
                  {t("origin.role.value")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nacar-ivory px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
              {t("preparation.eyebrow")}
            </p>

            <h2 className="max-w-lg text-[42px] leading-[1] tracking-[-0.04em] md:text-[68px]">
              {t("preparation.title")}
            </h2>

            <p className="mt-8 max-w-md text-[16px] leading-8 text-walnut">
              {t("preparation.description")}
            </p>
          </div>

          <div>
            <div className="grid gap-3 md:grid-cols-2">
              {brewMethods.map((method) => (
                <div
                  key={method}
                  className="border border-mineral bg-ritual-cream px-6 py-6"
                >
                  <p className="text-[20px] tracking-[-0.02em]">{method}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 border border-mineral bg-ritual-cream p-8 md:p-10">
              <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-nacar-gold">
                {t("preparation.recipe.eyebrow")}
              </p>

              <div className="divide-y divide-mineral">
                {recipe.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-8 py-4"
                  >
                    <p className="text-[13px] uppercase tracking-[0.18em] text-walnut">
                      {item.label}
                    </p>
                    <p className="text-right text-[16px] text-espresso">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
                {t("moments.eyebrow")}
              </p>

              <h2 className="max-w-md text-[42px] leading-[1] tracking-[-0.04em] md:text-[68px]">
                {t("moments.title")}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {moments.map((moment) => (
                <div
                  key={moment}
                  className="min-h-[180px] border border-mineral p-8"
                >
                  <p className="text-[24px] leading-tight tracking-[-0.03em]">
                    {moment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-espresso px-6 py-24 text-ritual-cream md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
              {t("house.eyebrow")}
            </p>

            <h2 className="max-w-md text-[42px] leading-[1] tracking-[-0.04em] md:text-[68px]">
              {t("house.title")}
            </h2>
          </div>

          <div className="divide-y divide-mineral/25 border-y border-mineral/25">
            {houseLines.map((line) => (
              <div
                key={line.number}
                className="grid gap-6 py-8 md:grid-cols-[0.18fr_0.42fr_1fr]"
              >
                <p className="text-[11px] text-nacar-gold">{line.number}</p>
                <p className="text-[26px] leading-tight tracking-[-0.03em]">
                  {line.title}
                </p>
                <p className="max-w-md text-[14px] leading-7 text-mineral">
                  {line.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-nacar-gold">
            {t("closing.eyebrow")}
          </p>

          <h2 className="text-[44px] leading-[1] tracking-[-0.045em] md:text-[76px]">
            {t("closing.title")}
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-8 text-walnut">
            {t("closing.description")}
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={`/${locale}/private-access`}
              className="inline-flex items-center gap-3 bg-espresso px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-ritual-cream transition-opacity duration-300 hover:opacity-85"
            >
              {t("closing.cta")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}