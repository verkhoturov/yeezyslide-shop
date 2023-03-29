/*
import { GetStaticProps } from "next";
import { getCatalogList } from "../lib/api";
import { CatalogItem } from "../lib/types";
*/
import { Page } from "../components/page";
import { Welcome } from "../components/welcome";
import { Catalog } from "../components/catalog";

import { mockItems } from "../mock/mock-items";

/*
interface HomePageProps {
  catalogList: CatalogItem[];
}
*/

const Home = (// { catalogList }: HomePageProps
  ) => {
  return (
    <Page>

      <p>ENV: {process.env.NEXT_PUBLIC_VERCEL_ENV ?? "none"}</p>
      <p>URL: {process.env.NEXT_PUBLIC_VERCEL_URL ?? "none"}</p>
      <Welcome />
      <Catalog items={mockItems} />
    </Page>
  );
};

export default Home;

/*
export const getStaticProps: GetStaticProps = async () => {
  const catalogList = await getCatalogList();

  return {
    props: { catalogList },
    revalidate: 30,
  };
};
*/
