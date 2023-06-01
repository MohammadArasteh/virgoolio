import { useAuth } from "@/context/AuthContext";
import VirgoolIcon from "./VirgoolIcon";
import Link from "next/link";
import { Button } from "./ui/Button";
import { HiSearch } from "react-icons/hi";
import { useRouter } from "next/router";

function NavbarComponent() {
  const user = useAuth();
  const router = useRouter();

  if (["/register", "/login"].includes(router.pathname)) return null;

  return (
    <section className="navbar mb-8">
      <section className="topbar py-[1rem] relative">
        <div id="App_Search" className="App_Search"></div>
        <div className="px-[0.9375em] m-auto relative max-w-[100%] w-[1000px]">
          <section className="topbar-inner flex flex-row items-center justify-between w-full">
            <div className="py-3 flex flex-row items-center justify-center gap-[0.5rem] p-1 ">
              <Link href={"/"}>
                <VirgoolIcon />
              </Link>
              <Link href={"/about-us"} style={{ color: "rgb(16, 122, 190)" }}>
                ویرگول چیست؟
              </Link>
            </div>
            <div className="py-3 flex flex-row items-center justify-center gap-[0.5rem] p-1">
              <div
                className="cursor-pointer"
                onClick={() => alert("under construction 👨‍🔧")}
              >
                <HiSearch size={30} color="#8e8e8e" />
              </div>
              {!!user ? (
                <>user profile</>
              ) : (
                <>
                  <Button variant={"text"} className="py-1 px-5">
                    <Link href={"/login"}>ورود</Link>
                  </Button>
                  <Button>
                    <Link href={"/register"} className="py-1 px-5">
                      ثبت نام
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </section>
        </div>
      </section>
      <nav className="bg-[#107abe] text-sm">
        <div className="max-w-[100%] w-[1000px] relative mx-auto px-[0.9375em]">
          <ul className="inline overflow-x-hidden p-0 list-none m-0">
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={"https://virgool.io"}
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                جدیدترین پست‌ها
              </Link>
            </li>
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={"https://virgool.io/feeds"}
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                پست‌های دوستان
              </Link>
            </li>
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={
                  "https://virgool.io/tag/%D8%A7%D8%B3%D8%AA%D8%A7%D8%B1%D8%AA%D8%A7%D9%BE"
                }
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                استارتاپ
              </Link>
            </li>
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={
                  "https://virgool.io/tag/%DA%A9%D8%B3%D8%A8-%D9%88-%DA%A9%D8%A7%D8%B1"
                }
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                کسب و کار
              </Link>
            </li>
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={"https://virgool.io/tag/%D8%B2%D9%86%D8%AF%DA%AF%DB%8C"}
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                زندگی
              </Link>
            </li>
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={"https://virgool.io/tag/%DA%A9%D8%AA%D8%A7%D8%A8"}
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                کتاب
              </Link>
            </li>
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={
                  "https://virgool.io/tag/%D8%AE%D9%84%D8%A7%D9%82%DB%8C%D8%AA"
                }
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                خلاقیت
              </Link>
            </li>
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={
                  "https://virgool.io/tag/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C"
                }
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                برنامه نویسی
              </Link>
            </li>
            <li className="py-[15px] pl-[15px] pr-0 inline-block whitespace-nowrap">
              <Link
                href={
                  "https://virgool.io/tag/%D8%AD%D8%A7%D9%84-%D8%AE%D9%88%D8%A8%D8%AA%D9%88-%D8%A8%D8%A7-%D9%85%D9%86-%D8%AA%D9%82%D8%B3%DB%8C%D9%85-%DA%A9%D9%86"
                }
                className="text-[hsla(0,0%,100%,.84)] transition-all text-base"
              >
                حال خوبتو با من تقسیم کن
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default NavbarComponent;
