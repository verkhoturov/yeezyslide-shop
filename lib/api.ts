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

/*
console.log("VERCEL_URL:", VERCEL_URL);
console.log("API_URL:", API_URL);

console.log("ENV:", process.env.NEXT_PUBLIC_VERCEL_ENV ?? "none");
console.log("URL:", process.env.NEXT_PUBLIC_VERCEL_URL ?? "none");

// console.log("https://yeezyslide-shop-ptmv9s8ud-verkhoturov.vercel.app" === API_URL)
*/

export const getCatalogList = async (): Promise<CatalogItem[]> => {
  const res = await fetch(`${API_URL}/api/catalog`);
  // console.log("RES:", res, typeof res);
  try {
    const textdata = await res.text();
    const data: Data = JSON.parse(textdata);

    console.log(data);

    if (!data || !data.catalogList.length) {
      throw new Error("Failed to fetch catalog list");
    }

    const catalogList: CatalogItem[] = data.catalogList;

    return catalogList;
  } catch (e) {
    console.error("ERR:", e);
    return [];
  }
};
