import { CatalogItem } from "./types";

const API_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "development"
    ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}:3000`
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export const getCatalogList = async (): Promise<CatalogItem[]> => {
  const res = await fetch(`${API_URL}/api/catalog`);
  const data = await res.json();

  if (!data || !data.catalogList.length) {
    throw new Error("Failed to fetch catalog list");
  }

  const catalogList: CatalogItem[] = data.catalogList;

  return catalogList;
};
