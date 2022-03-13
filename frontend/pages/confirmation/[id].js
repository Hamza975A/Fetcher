import React, { useState, useEffect } from "react";
import { GlobalContainer } from "../../components/GlobalComponents";
import Confirmation from "./index";
import { useRouter } from "next/router";

/**
 * Dynamic route component to render a confirmation page for a successful order.
 * @return {JSX.Element} to be rendered on the page
 */
export default function Home() {
  const [orders, setOrders] = useState([]);

  // get orders from the database
  useEffect(async () => {
    const res = await fetch("/api/current-orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ordersList = await res.json();
    setOrders(ordersList);
  }, []);
  return (
    <GlobalContainer>
      {/* Render the information for the newly added order */}
      {orders.map((order) => {
        const { destinationAddress, extraOrderDetails, orderNumber, _id } =
          order;
        const router = useRouter();
        const id = router.query.id;

        return _id == id ? (
          <Confirmation
            key={orderNumber}
            orderNum={orderNumber}
            destination={
              destinationAddress.address_components[0].long_name +
              " " +
              destinationAddress.address_components[1].long_name
            }
            deliveryTime={
              extraOrderDetails.startTime + "-" + extraOrderDetails.endTime
            }
          />
        ) : (
          <></>
        );
      })}
    </GlobalContainer>
  );
}
