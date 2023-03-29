import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["400", "700", "900"],
  subsets: ["latin", "cyrillic"],
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
