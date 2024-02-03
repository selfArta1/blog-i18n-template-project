import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";
import { match } from "@formatjs/intl-localematcher";
import { constants } from "buffer";
import Negotiator from "negotiator";
import { headers } from "next/headers";
import Link from "next/link";

function getLocale(): string {
  // Negotiator expects plain object so we need to transform headers
  const headersList = headers();
  const referer = headersList.get("referer");

  if (referer !== null) {
    const url = new URL(referer);
    const host = url.host;
    const path = url.pathname;
    const locale = path.split("/")[1];
    // console.log("host: " + host);
    // console.log("path: " + path);
    // console.log("local: " + path.split("/")[1]);
    return locale;
  } else {
    return "en";
  }
}

//That's a issue from github  see https://github.com/vercel/next.js/issues/50699
export default async function NotFound() {
  const mylocal = getLocale() as Locale;
  console.log("mylocal: " + mylocal);
  const dict = await getDictionary(mylocal);

  return (
    <div>
      <h2>404</h2>
      <p>{dict.NotFound.content}</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
