import localFont from "next/font/local";

const syhFont = localFont({
  src: "./SourceHanSansSC-VF.otf.woff2",
  weight: "Regular",
  style: "normal",
  display: "swap",
});

const sysFont = localFont({
  src: "./SourceHanSerifSC-VF.otf.woff2",
  weight: "Regular",
  style: "normal",
  display: "swap",
});

export { syhFont, sysFont };
