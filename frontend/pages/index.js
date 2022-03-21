import React from "react";
import { SimpleContainer } from "../components/GlobalComponents";
import { HomePage } from "../components/Home-Page";
import { getFromStorage } from "../lib/storage-tools";

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  if (typeof window !== "undefined") {
    if(getFromStorage("removeAddress")!=null){
      window.localStorage.clear()
    }}
  return (
    <SimpleContainer>
      <HomePage />
    </SimpleContainer>
  );
}

