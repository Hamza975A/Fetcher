import "../styles/globals.css";
import React from "react";

/**
 * Default App component from Next.js
 * @param {*} param0
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
