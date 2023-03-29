import { CatalogItem } from "./types";

const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
const API_URL = VERCEL_URL ? `https://${VERCEL_URL}` : `http://localhost:3000`;

export const getCatalogList = async (): Promise<CatalogItem[]> => {
  const res = await fetch(`${API_URL}/api/catalog`);
  const data = await res.json();

  if (!data || !data.catalogList.length) {
    throw new Error("Failed to fetch catalog list");
  }

  const catalogList: CatalogItem[] = data.catalogList;

  return catalogList;
};
