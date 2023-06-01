import Link from "next/link";
import classes from "../styles/login.module.css";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { Button } from "@/components/ui/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PageProps = {};

export default function Register(props: PageProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [isSubmittedUsername, setIsSubmittedUsername] =
    React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    if (isSubmittedUsername) {
    } else setIsSubmittedUsername(true);
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
          <div
            className={classes["splash--title"]}
            style={{ textAlign: isSubmittedUsername ? "center" : "unset" }}
          >
            {isSubmittedUsername
              ? "رمز عبور را وارد نمایید"
              : "ایجاد حساب کاربری"}
          </div>
          {!isSubmittedUsername && (
            <div className={classes["splash--subtitle"]}>
              شماره موبایل یا پست الکترونیک خود را وارد کنید
            </div>
          )}
          <div className="mt-5">
            <div className="mb-4">
              {isSubmittedUsername ? (
                <input
                  className={classes["input-field"]}
                  type="text"
                  name="userPassword"
                  dir="auto"
                  placeholder="رمز عبور"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  value={password}
                />
              ) : (
                <input
                  className={classes["input-field"]}
                  type="text"
                  name="userInput"
                  dir="auto"
                  placeholder="شماره موبایل یا پست الکترونیک"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                  value={username}
                />
              )}
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
          {!isSubmittedUsername && (
            <div className={`${classes["text-link"]} ${classes["terms"]}`}>
              ثبت نام در ویرگول به منزله موافقت با
              <Link href={"/terms"}> قوانین </Link>
              است
            </div>
          )}
          {isSubmittedUsername && (
            <Button
              variant={"text"}
              isLoading={loading}
              className="rounded-full w-full"
              onClick={() => {
                setIsSubmittedUsername(false);
                setPassword("");
              }}
            >
              <FaChevronRight className="ml-2" size={15} />
              برگشت به مرحله قبل
            </Button>
          )}
        </section>
        {!isSubmittedUsername && (
          <Link href={"/login"} className={`${classes["signup"]}`}>
            عضو نیستید؟ ثبت نام کنید{" "}
          </Link>
        )}
      </section>
    </main>
  );
}
