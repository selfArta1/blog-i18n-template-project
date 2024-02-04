import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Image from "next/image";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>{dict.Homepage.topic}</h3>
      <p> ok that right</p>
      <div className="p-4">
        <div className="... flow-root">
          <div className="... my-4">Well, let me tell you something, ...</div>
        </div>
        <div className="... flow-root">
          <div className="... my-4">Sure, go ahead, laugh if you want...</div>
        </div>
        <p>
          n this approach, we will use the ‘fixed’ class to fix the navbar. When
          an element has a fixed position, it stays in the same position even if
          the user scrolls the page. Fixed elements do not move when scrolling,
          effectively creating a fixed element that remains visible regardless
          of the scroll position.
        </p>
        <p>
          n this approach, we will use the ‘fixed’ class to fix the navbar. When
          an element has a fixed position, it stays in the same position even if
          the user scrolls the page. Fixed elements do not move when scrolling,
          effectively creating a fixed element that remains visible regardless
          of the scroll position.
        </p>
      </div>
    </main>
  );
}
