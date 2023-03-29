import { GetStaticProps } from "next";
import { getCatalogList } from "../lib/api";
import { CatalogItem } from "../lib/types";

import { Page } from "../components/page";
import { Welcome } from "../components/welcome";
import { Catalog } from "../components/catalog";

// import { mockItems } from "../mock/mock-items";

interface HomePageProps {
  catalogList: CatalogItem[];
}

const Home = ({ catalogList }: HomePageProps) => {
  return (
    <Page>
      <Welcome />
      <Catalog items={catalogList} />
    </Page>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const catalogList = await getCatalogList();

  return {
    props: { catalogList },
    revalidate: 30,
  };
};
