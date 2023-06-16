import { NextApiRequest, NextApiResponse } from "next";
import { GeneralResponse } from "../GeneralResponse";
import { PostSummary } from "@/types/posts";
import { supabase } from "../lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneralResponse<PostSummary[]>>
) {
  if (req.method === "GET") {
    const { username } = req.query;
    supabase
      .from("posts")
      .select("*")
      .eq("created_by", username)
      .then((response) => {
        if (response.data) {
          res.status(200).json({
            result: response.data.map((post) => ({
              body: post.body || "",
              comment_count: post.comment_ids?.length,
              created_at: post.created_at || "",
              created_by: post.created_by,
              fancy_time: "",
              is_saved: false,
              like_count: post.liked_by?.length,
              link: "",
              profile_url: post.created_by || "",
              thumbnail: post.thumbnail_url || "",
              title: post.title,
            })),
            message: "",
            status: true,
          });
        } else
          res.status(200).json({
            result: null,
            message: response.statusText,
            status: false,
          });
      });
  } else
    res
      .status(405)
      .json({ result: null, message: "Method Not Allowed", status: false });
}
