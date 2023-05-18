import type { NextApiRequest, NextApiResponse } from "next";

const topics: Topic[] = [
  {
    title: "همه دسته‌ها",
    image:
      "https://files.virgool.io/upload/topic/productivity.png?x-img=v1/resize,w_60/optimize,q_100",
    link: "/topics",
  },
  {
    title: "بازی رایانه ای",
    image:
      "https://files.virgool.io/upload/topic/computergame.png?x-img=v1/resize,w_60/optimize,q_100",
    link: "/topic/بازی-رایانه-ای",
  },
  {
    title: "بازی رایانه ای",
    image:
      "https://files.virgool.io/upload/topic/computergame.png?x-img=v1/resize,w_60/optimize,q_100",
    link: "/topic/بازی-رایانه-ای",
  },
  {
    title: "بازی رایانه ای",
    image:
      "https://files.virgool.io/upload/topic/computergame.png?x-img=v1/resize,w_60/optimize,q_100",
    link: "/topic/بازی-رایانه-ای",
  },
  {
    title: "بازی رایانه ای",
    image:
      "https://files.virgool.io/upload/topic/computergame.png?x-img=v1/resize,w_60/optimize,q_100",
    link: "/topic/بازی-رایانه-ای",
  },
  {
    title: "بازی رایانه ای",
    image:
      "https://files.virgool.io/upload/topic/computergame.png?x-img=v1/resize,w_60/optimize,q_100",
    link: "/topic/بازی-رایانه-ای",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Topic[]>
) {
  res.status(200).json(topics);
}
