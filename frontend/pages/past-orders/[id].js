import React, { useState, useEffect } from "react";
import {
  CenterContainer,
  GlobalContainer,
} from "../../components/GlobalComponents";
import { OrderCard } from "../../components/OrderDetails";
import { useRouter } from "next/router";

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  const [pastOrders, setPastOrders] = useState([]);

  // get orders from the database
  useEffect(async () => {
    const res = await fetch("/api/past-orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ordersList = await res.json();
    setPastOrders(ordersList);
  }, []);
  return (
    <GlobalContainer>
      <CenterContainer>
        <h1>Past Order Details</h1>
      </CenterContainer>

      {pastOrders.map((order, index) => {
        const {
          checkoutInformation,
          destinationAddress,
          extraOrderDetails,
          mainOrderDetails,
          orderNumber,
          timestamp,
          _id,
        } = order;
        const router = useRouter();
        const id = router.query.id;
        return _id == id ? (
          <OrderCard
            key={index}
            ordernum={orderNumber}
            pickuplocations={mainOrderDetails}
            dropofflocation={destinationAddress.formatted_address}
            parcelsize={mainOrderDetails}
            deliveryfee={""}
            tips={""}
            total={checkoutInformation.cost}
            details={checkoutInformation.instructions}
            priority={checkoutInformation.priority}
            time={timestamp}
            preferredTime={
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
