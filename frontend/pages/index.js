import React from "react";
import { HomePage } from "../components/Home-Page";
import { Layout } from "../components/Layout";

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
