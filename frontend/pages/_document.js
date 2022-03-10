import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

/**
 * Component to wrap all the other components including head. Enables PWA functionality.
 */
class MyDocument extends Document {
  /**
   * Render document component.
   * @return {JSXElement}
   */
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#ff9a42" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
