import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
// import { Provider } from "react-redux";
// import { store } from "@/configs/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Provider store={store}> */}
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
      {/* </Provider> */}
    </>
  );
}

export default MyApp;
