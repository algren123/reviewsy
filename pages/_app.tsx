import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ModalProvider } from "../context/modalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </UserProvider>
  );
}

export default MyApp;
