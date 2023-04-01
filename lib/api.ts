import { CatalogItem, Model } from "./types";

const formatterWPDataToCatalogItem = (wpData: any[]): CatalogItem[] => {
  return wpData.map((item) => {
    return {
      id: item.id,
      slug: item.slug,
      article: item.acf.article,
      releaseDate: item.acf.releaseDate,
      composition: item.acf.composition,
      // @ts-ignore
      colors: item.acf.colors.map((c) => c.colorName),
      title: item.title.rendered,
      // @ts-ignore
      prewImg: item.acf.colors.map((c) => c.images[0].sizes.medium_large)[0],
      // @ts-ignore
      pageImg: item.acf.colors.map((c) => c.images[0].sizes.large)[0],
      price: Number(item.acf.price),
      discount: item.acf.discount ? Number(item.acf.discount) : null,
      inStock: item.acf.inStock,
      model: item.acf.model as Model,
      sizes: item.acf.sizes,
    };
  });
};

const API_URL = `${process.env.WORDPRESS_URL}/wp-json/wp/v2`;

export const getCatalogList = async (): Promise<CatalogItem[]> => {
  try {
    const res = await fetch(`${API_URL}/posts`);
    const data = await res.json();

    // console.log(data[0].acf.colors[0].images);

    const catalogList = formatterWPDataToCatalogItem(data);

    return catalogList;
  } catch (e) {
    console.error("ERR:", e);
    return [];
  }
};
