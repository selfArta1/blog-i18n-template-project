import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { headers } from "next/headers";
import Link from "next/link";

function getLocale(): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  const languageHeaders = headers().get("Accept-language");
  const headersList = headers();
  console.log("languageHeaders: " + languageHeaders);

  headersList.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = match(languages, locales, i18n.defaultLocale);

  return locale;
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  console.log("not found locale: " + lang);
  const dict = await getDictionary(lang);
  return {
    title: "404",
  };
}

//That's a issue from github  see https://github.com/vercel/next.js/issues/50699
export default async function NotFound() {
  const mylocal = getLocale();
  console.log("mylocal: " + mylocal);
  //const dict = await getDictionary(mylocal);

  return (
    <div>
      <h2>404</h2>
      <p>dict.NotFound.content</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
function matchLocale(
  languages: string[],
  locales: string[],
  defaultLocale: string,
) {
  throw new Error("Function not implemented.");
}
