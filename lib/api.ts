import { CatalogItem } from "./types";

interface Data {
  status: string;
  catalogList: CatalogItem[];
}

const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  "yeezyslide-shop-ptmv9s8ud-verkhoturov.vercel.app";

const IS_LOCAL_DEV = process.env.NEXT_PUBLIC_VERCEL_ENV === "development";
const API_URL = IS_LOCAL_DEV
  ? `http://localhost:3000`
  : `https://${VERCEL_URL}`;

export const getCatalogList = async (): Promise<CatalogItem[]> => {
  console.log("API LINK", `${API_URL}/api/catalog`);
  const res = await fetch(`${API_URL}/api/catalog`);
  const restext = await res.text();
  console.log("res.text()", restext);

  try {
    const data: Data = await res.json();

    const catalogList: CatalogItem[] = data.catalogList;

    return catalogList;
  } catch (e) {
    console.error("ERR:", e);
    return [];
  }
};
