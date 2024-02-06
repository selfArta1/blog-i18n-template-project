"use server";

import { cookies } from "next/headers";

export async function setCookie(lang: string) {
  await cookies().set("NEXT_LOACALE", lang);
}

export async function getCookie() {
  return cookies().get("NEXT_LOACALE");
}
