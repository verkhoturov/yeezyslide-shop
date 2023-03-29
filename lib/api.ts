import { CatalogItem } from "./types";

const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  "yeezyslide-shop-ptmv9s8ud-verkhoturov.vercel.app";

const IS_LOCAL_DEV = process.env.NEXT_PUBLIC_VERCEL_ENV === "development";
const API_URL = IS_LOCAL_DEV ? `http://localhost:3000` : `https://${VERCEL_URL}`;

export const getCatalogList = async (): Promise<CatalogItem[]> => {
  const res = await fetch(`${API_URL}/api/catalog`);
  const data = await res.json();

  if (!data || !data.catalogList.length) {
    throw new Error("Failed to fetch catalog list");
  }

  const catalogList: CatalogItem[] = data.catalogList;

  return catalogList;
};
