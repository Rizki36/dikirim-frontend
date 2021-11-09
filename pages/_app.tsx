import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store, { persistor } from "@/configs/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import {
  getSession,
  SessionProvider,
  signIn,
  useSession,
} from "next-auth/react";
import React, { useEffect } from "react";
import { AuthInterface } from "index";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider session={session}>
            <Head>
              <title>Dikirim ❤️</title>
            </Head>
            {Component.auth ? (
              <Auth {...Component.auth}>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

const Auth = ({ authenticated, ScreenLoader, children }: AuthInterface) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return; // Do nothing while loading

    if (!isUser && !authenticated) signIn(); // If not authenticated, force log in
  }, [authenticated, isUser, status]);
  console.log(window.location.pathname);
  if (isUser) {
    if (router.asPath === "/login") {
      return window.location.replace("/");
    }

    return children;
  }

  if (router.asPath !== authenticated) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return ScreenLoader || null;
};

export default MyApp;
