import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../lib/supabase";
import { GeneralResponse } from "../GeneralResponse";
import { User } from "@/types/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneralResponse<User>>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const result = await supabase
      .from("users")
      .select("*")
      .eq("user_name", username)
      .single();
    if (result.data && result.data.password === password) {
      res.status(200).json({
        result: result.data,
        message: "ورود با موفقیت انجام شد.",
        status: true,
      });
    } else {
      res.status(200).json({
        result: null,
        message: "نام کاربری یا رمز عبور اشتباه است.",
        status: false,
      });
    }
  } else {
    res
      .status(405)
      .json({ result: null, message: "Method not allowed", status: false });
  }
}
