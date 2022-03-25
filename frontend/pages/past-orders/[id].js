import React from "react";
import {
  CenterContainer,
  GlobalContainer,
} from "../../components/GlobalComponents";
import { OrderCard } from "../../components/OrderDetails";
import MapOrders from "../../components/Maps-Orders";
import { getSession } from "next-auth/react";

/**
 * Component to render past order details for a specific order.
 * @return {JSX.Element}
 */
export default function PastOrderDetails({ order }) {
  const { orderNumber, destinationAddress, mainOrderDetails } = order;
  return (
    <GlobalContainer>
      <CenterContainer>
        <h1>Past Order Details</h1>
      </CenterContainer>
      <MapOrders destination={destinationAddress} orders={mainOrderDetails} />
      <OrderCard
        ordernum={orderNumber}
        pickuplocations={mainOrderDetails}
        dropofflocation={destinationAddress.formatted_address}
        parcelsize={mainOrderDetails}
        deliveryfee={""}
        tips={""}
        total={order.CheckoutInfoContainer.cost}
        details={order.CheckoutInfoContainer.instructions}
        priority={order.CheckoutInfoContainer.priority}
        time={order.timestamp}
        preferredTime={
          order.extraOrderDetails.startTime +
          "-" +
          order.extraOrderDetails.endTime
        }
      />
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
    email: `${session.user.email + "-past-orders"}`,
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
