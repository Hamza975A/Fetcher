import React from "react";
import { GlobalContainer } from "../../components/GlobalComponents";
import Confirmation from "../../components/Confirmation";
import { clearStorage } from "../../lib/storage-tools";

/**
 * Dynamic route component to render a confirmation page for a successful order.
 * @return {JSX.Element} to be rendered on the page
 */
export default function ConfirmationPage({ order }) {
  const { _id, orderNumber, destinationAddress, extraOrderDetails } = order;
  clearStorage();
  return (
    <GlobalContainer>
      {/* Render the information for the newly added order */}
      <Confirmation
        key={_id}
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
    </GlobalContainer>
  );
}

/**
 * Function to fetch order details on the server side.
 * @return {props} - order details
 */
export async function getServerSideProps({ params }) {
  const data = { id: params.id, db: "current-orders" };
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
    },
  };
}
