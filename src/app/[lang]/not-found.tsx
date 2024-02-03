import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";

//That's a issue from github  see https://github.com/vercel/next.js/issues/50699
//https://github.com/vercel/next.js/issues/55313

export default async function NotFound({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div>
      <h2>404</h2>
      <p>{dict.NotFound.content}</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
