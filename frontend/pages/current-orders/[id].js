import React from "react";
import {
  GlobalContainer,
} from "../../components/GlobalComponents";
import { CurrentOrdersItemsContainer, OrderReviewCard} from "../../components/OrderDetails";
import MapOrders from "../../components/Maps-Orders";
import { getSession } from "next-auth/react";

/**
 * Component to render current order details for a specific order.
 * @return {JSX.Element}
 */
export default function CurrentOrderDetails({ order }) {
  const { orderNumber, CheckoutInfoContainer, destinationAddress, mainOrderDetails, timestamp, timestampDelivered } = order;
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
          priority={CheckoutInfoContainer.priority}
          timePlaced={timestamp}
          timeDelivered={timestampDelivered}
          taxCost = {CheckoutInfoContainer.tax}
          tipCost = {CheckoutInfoContainer.tip}
          subTotalCost={CheckoutInfoContainer.costBeforeTax}
          totalCost={CheckoutInfoContainer.cost}
          dropoffInstructions={CheckoutInfoContainer.instructions}
        />
        <MapOrders destination={destinationAddress} orders={mainOrderDetails} />
      </CurrentOrdersItemsContainer>
    </GlobalContainer>
  );
}

/**
 * Function to fetch order details on the server side.
 * @return {props} - order details
 */
export async function getServerSideProps({ params, req }) {
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
    id: params.id,
    db: "current-orders",
    email: `${session.user.email + "-current-orders"}`,
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
      session,
    },
  };
}
