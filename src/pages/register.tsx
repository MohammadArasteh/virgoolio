import Link from "next/link";
import classes from "../styles/register.module.css";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { Button } from "@/components/ui/Button";
import { FaChevronLeft } from "react-icons/fa";

type PageProps = {};

export default function Login(props: PageProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [userInput, setUserInput] = React.useState<string>("");

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 5000));
    setLoading(false);
  };

  return (
    <main className={classes["splash-container"]}>
      <section className={classes["splash--grid"]}>
        <section className={classes["splash-inner"]}>
          <div className={classes["splash-header"]}>
            <div className={classes["splash--logo"]}>
              <Link href={"/"}>
                <Image
                  src={"/logo-bg.svg"}
                  alt="ویرگول"
                  width={99}
                  height={99}
                />
              </Link>
            </div>
            <h1 className={classes["splash--title"]}>
              اینجا هر کسی می‌تونه بنویسه!
            </h1>
            <h1 className={classes["splash--subtitle"]}>
              همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را
              شروع کن.
            </h1>
          </div>
          <div className={classes["splash-content"]}></div>
        </section>
        <section className={classes["splash-footer"]}></section>
      </section>
      <section className={classes["splash--grid"]}>
        <section
          className={`${classes["splash-inner"]} ${classes["form-section-inner"]}`}
        >
          <div className={classes["splash--title"]}>ایجاد حساب کاربری</div>
          <div className={classes["splash--subtitle"]}>
            شماره موبایل یا پست الکترونیک خود را وارد کنید
          </div>
          <div className="mt-5">
            <div className="mb-4">
              <input
                className={classes["input-field"]}
                type="text"
                name="userInput"
                dir="auto"
                placeholder="شماره موبایل یا پست الکترونیک"
                onChange={(e) => setUserInput(e.currentTarget.value)}
                value={userInput}
              />
            </div>
            <div className="mb-4">
              <Button
                isLoading={loading}
                className="rounded-full w-full"
                onClick={onSubmit}
              >
                ایجاد حساب کاربری
                <FaChevronLeft className="mr-2" size={15} />
              </Button>
            </div>
            <div className="mb-4"></div>
          </div>
          <div className={`${classes["text-link"]} ${classes["terms"]}`}>
            ثبت نام در ویرگول به منزله موافقت با
            <Link href={"/terms"}> قوانین </Link>
            است
          </div>
        </section>
        <Link href={"/login"} className={`${classes["signin"]}`}>
          قبلا عضو شده‌اید؟ رفتن به صفحه ورود
        </Link>
      </section>
    </main>
  );
}
