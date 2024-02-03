import type { Metadata } from "next";
import { syhFont, sysFont } from "@/fonts/fonts";
import "../globals.css";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  console.log("which locale: " + lang);
  const dict = await getDictionary(lang);
  return {
    title: dict.Homepage.title,
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} data-theme="cupcake">
      <body className={syhFont.className}>{children}</body>
    </html>
  );
}
