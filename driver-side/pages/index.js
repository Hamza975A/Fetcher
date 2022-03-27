import React, { useState, useEffect } from "react";
import {
  GlobalContainer,
  SimpleContainer
} from "../components/GlobalComponents";
import { CheckoutInfoContainer } from "../components/PlaceOrder";
import { OrderCard, NoOrdersContainer } from "../components/OrdersList";

/** @return{1} */
function NoOrder() {
  return (
    <SimpleContainer style={{ paddingBottom: "2rem" }}>
      <h2>Current Delivery Requests</h2>
      <CheckoutInfoContainer>
        <NoOrdersContainer>
          There are currently no orders to be delivered.
        </NoOrdersContainer>
      </CheckoutInfoContainer>
    </SimpleContainer>
  );
}

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home({ order: orders }) {
  const [currentOrders, setCurrentOrders] = useState([]);
  useEffect(() => {
    setCurrentOrders(orders);
  }, [orders]);

  if (currentOrders.length == 0) {
    return (
      // This would be for when there is no current orders
      <GlobalContainer>
        <NoOrder></NoOrder>
      </GlobalContainer>
    );
  } else {
    return (
      // There are current orders waiting to be delivered, so they are displayed
      <GlobalContainer>
        <SimpleContainer style={{ paddingBottom: "2rem" }}>
          <h2>Current Delivery Requests</h2>
          {currentOrders.map((order) => {
            const {
              CheckoutInfoContainer,
              destinationAddress,
              orderNumber,
              timestamp,
              _id,
              users
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
                email={users.user.email}
                buttontext="VIEW ORDER"
              />
            );
          })}
        </SimpleContainer>
      </GlobalContainer>
    );
  }
}

/**
 * Function to fetch current orders for the user via API calls.
 */
export async function getServerSideProps({ req }) {
  const res = await fetch(
    `${process.env.URL_START}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-driver-order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const order = await res.json();

  return {
    props: { order }
  };
}
