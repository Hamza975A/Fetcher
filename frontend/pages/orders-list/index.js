import React, { useState, useEffect } from "react";
import {
  GlobalContainer,
  SimpleContainer,
} from "../../components/GlobalComponents";
import { OrderCard } from "../../components/OrdersList";
import { getSession } from "next-auth/react";

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
        {currentOrders.map((order) => {
          const {
            checkoutInformation,
            destinationAddress,
            orderNumber,
            timestamp,
            _id,
          } = order;

          return (
            <OrderCard
              key={orderNumber}
              id={_id}
              ordernum={orderNumber}
              destination={destinationAddress.formatted_address}
              date={timestamp}
              price={"$" + checkoutInformation.cost}
              url={"current-orders"}
              buttontext="VIEW ORDER"
            />
          );
        })}
      </SimpleContainer>

      <SimpleContainer>
        <h2>Past Orders</h2>
        {pastOrders.map((order) => {
          const {
            checkoutInformation,
            destinationAddress,
            orderNumber,
            timestamp,
            _id,
          } = order;
          return (
            <OrderCard
              key={orderNumber}
              id={_id}
              ordernum={orderNumber}
              destination={destinationAddress.formatted_address}
              date={timestamp}
              price={"$" + checkoutInformation.cost}
              url={"past-orders"}
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
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }
  const data = {
    email: `${session.user.email + "-current-orders"}`,
  };

  const res = await fetch(
    `${process.env.URL_START}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-list-orders`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const curOrders = await res.json();

  const data1 = {
    email: `${session.user.email + "-past-orders"}`,
  };
  const res1 = await fetch(
    `${process.env.URL_START}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-list-orders`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    }
  );
  const pasOrders = await res1.json();

  return {
    props: { curOrders, pasOrders },
  };
}
