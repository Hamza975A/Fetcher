import React from "react";
import { GlobalContainer } from "../../components/GlobalComponents";
import { OrderCard } from "../../components/OrdersList";

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <GlobalContainer>
      <h2>Current Orders</h2>

      <OrderCard
        ordernum="123456789"
        date="Thu, Feb. 10"
        price="60.50"
        buttontext="VIEW ORDER"
      />

      <br></br>

      <OrderCard
        ordernum="66666666"
        date="Tue, Jan. 9"
        price="44.44"
        buttontext="VIEW ORDER"
      />

      <br></br>
      <br></br>

      <h2>Past Orders</h2>

      <OrderCard
        ordernum="987654321"
        date="Wed, Mar. 2"
        price="20.30"
        buttontext="SHOW RECEIPT"
      />
    </GlobalContainer>
  );
}
