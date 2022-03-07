import App from "./App";
import React from "react";
import { GlobalContainer } from "../../components/GlobalComponents";

/**
 * Place orders page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <GlobalContainer>
      <App></App>
    </GlobalContainer>
  );
}
