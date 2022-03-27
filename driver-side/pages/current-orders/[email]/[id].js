import React from "react";
import { GlobalContainer, Button } from "../../../components/GlobalComponents";
import {
  CurrentOrdersItemsContainer,
  OrderReviewCard,
} from "../../../components/OrderDetails";
import MapOrders from "../../../components/Maps-Orders";
import Router from "next/router";

/**
 * This function marks the order as delivered and moves it from the
 * users current orders to past orders.
 * @param {*} id : document id to move from current orders to past orders
 * @param {*} email : email id of the user
 */
async function completeOrder(id, email) {
  const data = {
    id: id,
    email: email,
  };
  await fetch("/api/complete-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

/**
 * Component to render current order details for a specific order.
 * @return {JSX.Element}
 */
export default function CurrentOrderDetails({ order, data: { id, email } }) {
  const { orderNumber, destinationAddress, mainOrderDetails } = order;
  return (
    <GlobalContainer>
      <CurrentOrdersItemsContainer>
        <OrderReviewCard
          ordernum={orderNumber}
          pickuplocations={mainOrderDetails}
          destination={
            destinationAddress.address_components[0].long_name +
            " " +
            destinationAddress.address_components[1].long_name
          }
          startTime={order.extraOrderDetails.startTime}
          endTime={order.extraOrderDetails.endTime}
        />
        <MapOrders destination={destinationAddress} orders={mainOrderDetails} />
      </CurrentOrdersItemsContainer>
      <Button
        onClick={(event) => {
          completeOrder(id, email).then(() => {
            event.preventDefault();
            Router.push("/");
          });
        }}
      >
        Mark This Order As Delivered!
      </Button>
    </GlobalContainer>
  );
}

/**
 * Function to fetch order details on the server side.
 * @return {props} - order details
 */
export async function getServerSideProps({ params, req }) {
  const data = {
    id: params.id,
    email: params.email,
  };

  const res = await fetch(
    `${process.env.URL_START}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return {
    props: {
      order: await res.json(),
      data: data,
    },
  };
}
