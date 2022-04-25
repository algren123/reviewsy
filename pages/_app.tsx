import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ModalProvider } from "../context/modalContext";
import { ReviewsProvider } from "../context/reviewsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ReviewsProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ReviewsProvider>
    </UserProvider>
  );
}

export default MyApp;
