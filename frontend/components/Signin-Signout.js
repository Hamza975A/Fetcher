import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { MenuLink } from "./Navbar";
import { clearStorage } from "../lib/storage-tools";

/**
 * Function to export "Sign In" button when user is not signed in else "Sign Out".
 * @return {JSXComponent}
 */
export default function Account() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <a
          onClick={() => {
            signOut();
            clearStorage();
          }}
        >
          <MenuLink>Sign Out</MenuLink>
        </a>
      </>
    );
  }
  return (
    <>
      <a
        onClick={() => {
          signIn();
        }}
      >
        <MenuLink>Sign In</MenuLink>
      </a>
    </>
  );
}
