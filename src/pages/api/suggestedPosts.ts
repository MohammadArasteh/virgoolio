import { PostSummary } from "@/types/posts";
import { NextApiRequest, NextApiResponse } from "next";
import { posts } from "./posts";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostSummary[]>
) {
  res.status(200).json(posts);
}
