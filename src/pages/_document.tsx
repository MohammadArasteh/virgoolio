import NavbarComponent from "@/components/NavbarComponent";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
        <NavbarComponent />
      </Head>
      <body dir="rtl" className="bg-[#f5f5f5]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
