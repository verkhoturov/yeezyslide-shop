import { ReactNode } from "react";
import Head from "next/head";
import { Main } from "../layout";
import { Header } from "../header";
import { Footer } from "../footer";

interface PageProps {
  children?: ReactNode;
  title?: string;
}

export const Page = ({ children, title }: PageProps) => {
  return (
    <>
      <Head>
        <title>
          {title ? `yeezyslide russia | ${title}` : "yeezyslide russia"}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
