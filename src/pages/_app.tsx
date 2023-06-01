import { AuthProvider } from "@/context/AuthContext";
import { LocalStorageProvider } from "@/context/LocalStorageCtx";
import NavbarComponent from "@/components/NavbarComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalStorageProvider>
      <AuthProvider>
        <NavbarComponent />
        <Component {...pageProps} />
      </AuthProvider>
    </LocalStorageProvider>
  );
}
