import React from "react";
import { SimpleContainer } from "../components/GlobalComponents";
import { HomePage } from "../components/Home-Page";

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <SimpleContainer>
      <HomePage />
    </SimpleContainer>
  );
}
