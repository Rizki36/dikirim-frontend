import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store, { persistor } from "@/configs/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider session={session} refetchInterval={5 * 60}>
            <Head>
              <title>Dikirim ❤️</title>
            </Head>
            <Component {...pageProps} />
          </SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
