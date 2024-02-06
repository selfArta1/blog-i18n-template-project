import type { Metadata } from "next";
import { syhFont, sysFont } from "@/fonts/fonts";
import "../globals.css";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import NavBar from "./components/Navbar";
import { setCookie } from "../lib/actions";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
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
      <body className={syhFont.className}>
        <NavBar />
        <main className="m-auto w-full min-w-[300px] p-4">{children}</main>
      </body>
    </html>
  );
}
