import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCookie } from "../lib/actions";

//That's a issue from github  see https://github.com/vercel/next.js/issues/50699
//https://github.com/vercel/next.js/issues/55313

export default async function NotFound({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="card m-auto w-96 bg-orange-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">404</h2>
        <p>{dict.NotFound.content}</p>
        <div className="card-actions justify-end">
          <Link href="/" className="btn-gost btn">
            {dict.NotFound.return}
          </Link>
        </div>
      </div>
    </div>
  );
}
