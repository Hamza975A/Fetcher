import React, { useState, useEffect } from "react";
import {
  GlobalContainer,
  SimpleContainer,
} from "../../components/GlobalComponents";
import { OrderCard } from "../../components/OrdersList";

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home({ curOrders, pasOrders }) {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);

  useEffect(() => {
    setCurrentOrders(curOrders);
  }, [curOrders]);
  useEffect(() => {
    setPastOrders(pasOrders);
  }, [pasOrders]);

  return (
    <GlobalContainer>
      <SimpleContainer style={{ paddingBottom: "2rem" }}>
        <h2>Current Orders</h2>
        {currentOrders.map((order, index) => {
          return (
            <OrderCard
              key={index}
              ordernum={order.number}
              date={order.date}
              price={order.price}
              buttontext="VIEW ORDER"
            />
          );
        })}
      </SimpleContainer>

      <SimpleContainer>
        <h2>Past Orders</h2>
        {pastOrders.map((order, index) => {
          return (
            <OrderCard
              key={index}
              ordernum={order.number}
              date={order.date}
              price={order.price}
              buttontext="VIEW ORDER"
            />
          );
        })}
      </SimpleContainer>
    </GlobalContainer>
  );
}

/**
 * Function to fetch current and past orders for the user via API calls.
 */
export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/current-orders`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const curOrders = await res.json();

  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/past-orders`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const pasOrders = await res1.json();

  return {
    props: { curOrders, pasOrders },
  };
}
