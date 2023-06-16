import { NextApiRequest, NextApiResponse } from "next";
import { GeneralResponse } from "../GeneralResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneralResponse<unknown[]>>
) {
  if (req.method === "GET")
    res.status(200).json({ result: [], message: "", status: true });
  else
    res
      .status(405)
      .json({ result: null, message: "Method Not Allowed", status: false });
}
