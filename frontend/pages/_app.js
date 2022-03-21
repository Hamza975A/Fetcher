import React, { useState } from "react";
import Theme from "../styles/theme";
import { Navbar } from "../components/Navbar";
import NProgress from "nprogress";
import Router from "next/router";
import "../styles/nprogress.css";
import Loader from "../components/Loader";

NProgress.configure({ showSpinner: false });

/**
 * Default App component from Next.js
 * @param {*} param0
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => {
    setLoading(false);
    NProgress.done();
  });
  return (
    <>
      <Theme>
        <Navbar />
        {loading && <Loader />}
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
