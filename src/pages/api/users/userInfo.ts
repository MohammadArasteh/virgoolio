import { NextApiRequest, NextApiResponse } from "next";
import { GeneralResponse } from "../GeneralResponse";
import { UserInfo } from "@/types/users";
import { supabase } from "../lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneralResponse<UserInfo>>
) {
  if (req.method === "GET") {
    const { username } = req.query;
    supabase
      .from("users")
      .select("*")
      .eq("user_name", username)
      .single()
      .then((response) => {
        if (response.data) {
          res.status(200).json({
            result: {
              first_name: response.data.first_name,
              last_name: response.data.last_name,
              profile_url: response.data.profile_url,
              user_id: response.data.user_id,
              user_name: response.data.user_name,
              description: response.data.description,
            },
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
