import React from "react";
import { SimpleContainer } from "../components/GlobalComponents";
import { HomePage } from "../components/Home-Page";
import clientPromise from "../lib/mongodb";

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home({ isConnected }) {
  return (
    <SimpleContainer>
      <HomePage />
      {isConnected ? (
        <footer style={{ textAlign: "center", fontSize: "1rem" }}>
          Connected
        </footer>
      ) : (
        <footer style={{ textAlign: "center", fontSize: "1rem" }}>
          Not Connected
        </footer>
      )}
    </SimpleContainer>
  );
}

/**
 * Function to connect with MongoDB.
 */
export async function getServerSideProps() {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
