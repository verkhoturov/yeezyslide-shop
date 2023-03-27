// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { CatalogItem } from "../../lib/types";
import { mockItems } from "../../mock/mock-items";

type Data = {
  status: "success" | "error";
  catalogList: CatalogItem[];
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ status: "success", catalogList: mockItems });
}
