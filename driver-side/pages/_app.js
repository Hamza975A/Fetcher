import React from "react";
import Theme from "../styles/theme";
import { Navbar } from "../components/Navbar";

/**
 * Default App component from Next.js
 * @param {*} param0
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Theme>
        <Navbar />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
