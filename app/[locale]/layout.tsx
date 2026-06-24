import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Cormorant_Garamond } from "next/font/google";
import { LenisProvider } from "../components/lenis-provider";
import Header from "../components/header/Header";

const editorialSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-editorial-serif",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={editorialSerif.variable}>
        <LenisProvider>
          <NextIntlClientProvider messages={messages}>
            <main id="page-content" className="transition-opacity duration-300">
              <Header />
              {children}
            </main>
          </NextIntlClientProvider>
        </LenisProvider>
      </body>
    </html>
  );
}