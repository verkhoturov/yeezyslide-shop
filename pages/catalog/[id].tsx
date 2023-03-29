import { GetStaticPaths, GetStaticProps } from "next";
import { Page } from "../../components/page";
import { getCatalogList } from "../../lib/api";
import { CatalogItem } from "../../lib/types";

export default function ProductPage({ product }: { product?: CatalogItem }) {
  return <Page>{product ? product.title : "not found"}</Page>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

  const catalogList = id ? await getCatalogList() : [];
  const product = catalogList.find((item) => String(item.id) === id);

  return {
    props: { product },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const catalogList = await getCatalogList();

  return {
    paths: catalogList.map(({ id }) => `/catalog/${id}`) || [],
    fallback: true,
  };
};
