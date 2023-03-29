import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Page } from "../../components/page";
import { SneakersInfo } from "../../components/sneakers-info";
import { getCatalogList } from "../../lib/api";
import { CatalogItem } from "../../lib/types";

export default function ProductPage({
  item,
  catalogList,
}: {
  item?: CatalogItem;
  catalogList: CatalogItem[];
}) {
  const router = useRouter();

  React.useEffect(() => {
    if (!item) router.back();
  }, [item]);

  return (
    <Page>
      <SneakersInfo item={item} catalogList={catalogList} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

  const catalogList = id ? await getCatalogList() : [];
  const item = catalogList.find((item) => String(item.id) === id);

  return {
    props: { item, catalogList },
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
