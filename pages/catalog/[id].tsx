import { GetStaticPaths, GetStaticProps } from "next";
import { Page } from "../../components/page";
import { getCatalogList } from "../../lib/api";
import { CatalogItem } from "../../lib/types";

export default function ProductPage({ product }: { product?: CatalogItem }) {
  return <Page>{product ? product.title : "not found"}</Page>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const catalogList = await getCatalogList();
    const product = id
      ? catalogList.find((item) => item.id === +id)
      : undefined;
    return {
      props: { product },
      revalidate: 30,
    };
  }

  return {
    props: { product: undefined },
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
