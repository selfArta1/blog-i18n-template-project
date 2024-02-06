import { Locale } from "@/i18n-config";
import NotFound from "../not-found";

/* export default async function Page(props: any) {
  return <NotFound {...props} />;
}
 */
export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return <NotFound {...{ params: { lang } }} />;
}
