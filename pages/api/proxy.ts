import type { NextApiRequest, NextApiResponse } from "next";

const apiUrl =
  "http://admin.yeezyslide.ru/wp-json/contact-form-7/v1/contact-forms/268/feedback";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  const parsedBody = JSON.parse(body);

  // Convert JSON body to FormData
  const formData = new FormData();
  Object.keys(parsedBody).forEach((key) => {
    formData.append(key, parsedBody[key]);
  });

  if (method === "POST") {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          // Add any other necessary headers here
        },
        body: formData,
      });

      const data = await response.json();

      res.status(response.status).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while processing the request." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
