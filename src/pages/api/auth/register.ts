import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../lib/supabase";
import { GeneralResponse } from "../GeneralResponse";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneralResponse<string>>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const result = await supabase
      .from("users")
      .select("*")
      .eq("user_name", username)
      .single();
    if (result.data) {
      res.status(200).json({
        result: null,
        message: "نام کاربری تکراری است.",
        status: false,
      });
    } else {
      const result = await supabase
        .from("users")
        .insert({ user_name: username, password: password });
      if (result.status === 201)
        res.status(200).json({
          result: null,
          message: "ثبت نام با موفقیت انجام شد.",
          status: true,
        });
      else
        res
          .status(200)
          .json({ result: null, message: result.statusText, status: false });
    }
  } else {
    res
      .status(405)
      .json({ result: null, message: "Method not allowed", status: false });
  }
}
