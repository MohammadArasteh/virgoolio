import { PostSummary } from "@/types/posts";
import { NextApiRequest, NextApiResponse } from "next";

const posts: PostSummary[] = [
  {
    title: "پوچی سفید 1",
    thumbnail:
      "https://files.virgool.io/upload/users/2278629/posts/evvqxa6jbmgb/9n4fsbfhlfti.jpg?x-img=v1/resize,w_700/optimize,q_100?x-img=v1/resize,w_850/optimize,q_100",
    profile_url:
      "https://files.virgool.io/upload/users/19539/avatar/7r2or6.jpg?x-img=v1/resize,h_120,w_120/optimize,q_100",
    body: "آنگاه که جهنم یخی شکم ها را گرسنه ساخت، چگونه می‌توانم انسان ها را قانع کنم که قلب برای عشق خلق  شد و نه وعده غذایی شبانه‌شان ؟",
    created_at: 0,
    fancy_time: "3 روز پیش",
    like_count: 26,
    is_saved: false,
    created_by: "El cucuy",
    comment_count: 3,
    link: "virgool.io",
  },
  {
    title: "داستان طراحی محصول تپسی",
    thumbnail:
      "https://files.virgool.io/upload/users/5891/posts/gfbrm8sjyvrq/egwrckuyac7j.png?x-img=v1/resize,w_700/optimize,q_100?x-img=v1/resize,w_850/optimize,q_100",
    profile_url:
      "https://files.virgool.io/upload/users/19539/avatar/7r2or6.jpg?x-img=v1/resize,h_120,w_120/optimize,q_100",
    body: "این داستان (Case-Study) برشی از دوره همکاری من با تپسی به عنوان سرپرست تیم دیزاین‌محصول هست و به شکلی تاریخچه شکل‌گیری سرویس‌های تاکسی اینت…",
    created_at: 0,
    fancy_time: "1 هفته پیش",
    like_count: 143,
    is_saved: false,
    created_by: "آرین مقبلی",
    comment_count: 2,
    link: "virgool.io",
  },
  {
    title: "شغل مناسب شما؟",
    thumbnail:
      "https://files.virgool.io/upload/users/2381858/posts/mj9bbky2rkpd/ytsehimsjlkh.jpg?x-img=v1/resize,w_700/optimize,q_100?x-img=v1/resize,w_850/optimize,q_100",
    profile_url:
      "https://files.virgool.io/upload/users/19539/avatar/7r2or6.jpg?x-img=v1/resize,h_120,w_120/optimize,q_100",
    body: "معرفی و خلاصه کتاب شغل مناسب شما : نوشته: پاول تایگر کتابِ «شغلِ مناسبِ شما» اولین بار سالِ 1992 چاپ شد و سالِ  2014 متناسب با تغییراتِ جدی…",
    created_at: 0,
    fancy_time: "3 روز پیش",
    like_count: 20,
    is_saved: false,
    created_by: "Amin Javad",
    comment_count: 1,
    link: "virgool.io",
  },
  {
    title: "داستان طراحی محصول تپسی",
    thumbnail:
      "https://files.virgool.io/upload/users/5891/posts/gfbrm8sjyvrq/egwrckuyac7j.png?x-img=v1/resize,w_700/optimize,q_100?x-img=v1/resize,w_850/optimize,q_100",
    profile_url:
      "https://files.virgool.io/upload/users/19539/avatar/7r2or6.jpg?x-img=v1/resize,h_120,w_120/optimize,q_100",
    body: "این داستان (Case-Study) برشی از دوره همکاری من با تپسی به عنوان سرپرست تیم دیزاین‌محصول هست و به شکلی تاریخچه شکل‌گیری سرویس‌های تاکسی اینت…",
    created_at: 0,
    fancy_time: "1 هفته پیش",
    like_count: 143,
    is_saved: false,
    created_by: "آرین مقبلی",
    comment_count: 2,
    link: "virgool.io",
  },
];

export { posts };
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostSummary[]>
) {
  res.status(200).json([...posts, ...posts, ...posts]);
}
