import React, { useState, useEffect } from "react";
import {
  GlobalContainer,
  SimpleContainer,
} from "../../components/GlobalComponents";
import { OrderCard, NoOrdersContainer } from "../../components/OrdersList";
import { getSession } from "next-auth/react";
import { MovePagesButton } from "../../components/PlaceOrder";
import Router from "next/router";
import { CheckoutInfoContainer } from "../../components/PlaceOrder";
/** @return{1} */
function NoOrders({ head }) {
  return (
    <SimpleContainer style={{ paddingBottom: "2rem" }}>
      <h2>{head} Orders</h2>
      <CheckoutInfoContainer>
        <NoOrdersContainer>
          You have no Orders
          <MovePagesButton onClick={() => Router.push("/")}>
            Place An Order
          </MovePagesButton>
        </NoOrdersContainer>
      </CheckoutInfoContainer>
    </SimpleContainer>
  );
}

/** @return{1} */
function DisplayCurrentOrders({ currentOrders }) {
  return (
    <SimpleContainer style={{ paddingBottom: "2rem" }}>
      <h2>Current Orders</h2>
      {currentOrders.map((order) => {
        const {
          CheckoutInfoContainer,
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
            price={"$" + CheckoutInfoContainer.cost}
            url={"current-orders"}
            buttontext="VIEW ORDER"
          />
        );
      })}
    </SimpleContainer>
  );
}
/** @return{1} */
function DisplayPastOrders({ pastOrders }) {
  return (
    <SimpleContainer>
      <h2>Past Orders</h2>
      {pastOrders.map((order) => {
        const {
          CheckoutInfoContainer,
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
            price={"$" + CheckoutInfoContainer.cost}
            url={"past-orders"}
            buttontext="VIEW ORDER"
          />
        );
      })}
    </SimpleContainer>
  );
}

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
  if ((currentOrders.length != 0) & (pastOrders.length != 0)) {
    return (
      <GlobalContainer>
        <DisplayCurrentOrders
          currentOrders={currentOrders}
        ></DisplayCurrentOrders>
        <DisplayPastOrders pastOrders={pastOrders}></DisplayPastOrders>
      </GlobalContainer>
    );
  } else if ((currentOrders.length != 0) & (pastOrders.length == 0)) {
    return (
      <GlobalContainer>
        <DisplayCurrentOrders
          currentOrders={currentOrders}
        ></DisplayCurrentOrders>
        <NoOrders head="Past"></NoOrders>
      </GlobalContainer>
    );
  } else if ((currentOrders.length == 0) & (pastOrders.length != 0)) {
    return (
      <GlobalContainer>
        <NoOrders head="Current"></NoOrders>
        <DisplayPastOrders pastOrders={pastOrders}></DisplayPastOrders>
      </GlobalContainer>
    );
  } else {
    return (
      <GlobalContainer>
        <NoOrders head="Current"></NoOrders>
        <NoOrders head="Past"></NoOrders>
      </GlobalContainer>
    );
  }
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
