import React from "react";
import { GlobalContainer } from "../../components/GlobalComponents";
import { PastOrderCard } from "../../components/PastOrder";

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <GlobalContainer>
      <h2>Past Order</h2>

      <PastOrderCard
        ordernum="123456789"
        driver="Hemal [CONTACTLESS] leave under bench on desk"
        pickuplocation="Walmart, 1706 Preston Ave N"
        dropofflocation="University of Saskatchewan"
        parcelsize="Medium"
        deliveryfee="$19.91"
        tips="$5.00"
        total="$24.91"
      />
    </GlobalContainer>
  );
}
