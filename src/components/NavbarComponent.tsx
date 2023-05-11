import { useAuth } from "@/context/AuthContext";
import VirgoolIcon from "./VirgoolIcon";
import Link from "next/link";
import { Button } from "./ui/Button";

function NavbarComponent() {
  const user = useAuth();
  return (
    <section className="navbar">
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
              {!!user ? (
                <>user profile</>
              ) : (
                <>
                  <Button variant={"text"}>
                    <Link href={"/login"}>ورود</Link>
                  </Button>
                  <Button>
                    <Link href={"/register"}>ثبت نام</Link>
                  </Button>
                </>
              )}
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default NavbarComponent;
