import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body dir="rtl" className="bg-[#f5f5f5]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
