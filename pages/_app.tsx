import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
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
            <div className="grid grid-cols-[1fr] grid-rows-[auto,1fr]  lg:grid-cols-[auto,1fr] lg:grid-rows-[auto,1fr] h-screen">
              <Sidebar className="hidden lg:grid row-span-2" />
              <Header className="" />
              <div className="pt-6 px-6">
                <Component {...pageProps} />
              </div>
            </div>
          </SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
