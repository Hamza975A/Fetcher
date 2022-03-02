import "../styles/globals.css";
import React from "react";
import Theme from "../styles/theme";

/**
 * Default App component from Next.js
 * @param {*} param0
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />;
      </Theme>
    </>
  );
}

export default MyApp;
