import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  variable: "--poppins-font",
  weight: ["400", "700"],
  subsets: ["latin" ],
  preload: true,
});

const robotoMono = Roboto({
  variable: "--roboto-font",
  weight: ["400",   "700"],
  subsets: ["latin", "cyrillic"],
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --poppins-font: ${poppins.style.fontFamily};
          --roboto-font: ${robotoMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
