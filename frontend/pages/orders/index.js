import React from "react";
import {
  AddItemsButton,
  AddItemsButtonsContainer,
  BottomContainer,
  PlaceOrderCard,
  SetTimeCard,
} from "../../components/PlaceOrder";
import {
  GlobalContainer,
  SpacedContainer,
} from "../../components/GlobalComponents";
/**
 * Place orders page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <GlobalContainer>
      <SpacedContainer>
        {/* Place Order Page */}
        <PlaceOrderCard address="123 street name"></PlaceOrderCard>
        <PlaceOrderCard></PlaceOrderCard>

        <AddItemsButtonsContainer>
          <AddItemsButton href="">
            New Package and new pickup address
          </AddItemsButton>
          <AddItemsButton href="">
            New Package and same pickup address
          </AddItemsButton>
        </AddItemsButtonsContainer>

        <BottomContainer>
          <SetTimeCard></SetTimeCard>
          <AddItemsButton href="">Continue to Checkout</AddItemsButton>
        </BottomContainer>
      </SpacedContainer>
    </GlobalContainer>
  );
}
