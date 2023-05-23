import { CatalogItem } from "./types";
import { formatterWPDataToCatalogItem } from "./formatter";

const API_URL = `${process.env.WORDPRESS_URL}/wp-json/wp/v2`;

export const getCatalogList = async (): Promise<CatalogItem[]> => {
  try {
    const res = await fetch(`${API_URL}/posts?per_page=100`);
    const data = await res.json();

    // console.log(data[0].acf);

    const catalogList = formatterWPDataToCatalogItem(data);

    return catalogList;
  } catch (e) {
    console.error("ERR:", e);
    return [];
  }
};
