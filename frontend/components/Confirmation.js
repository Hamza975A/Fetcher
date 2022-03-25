import { Router } from "next/router";
import React from "react";
import Link from "next/link";
import {
  GlobalContainer,
  CenterContainer,
  Paragraph,
  Header,
  Button,
} from "./GlobalComponents";
import { PackageDetailsContainer } from "./PlaceOrder";

const ConfirmationPage = ({ orderNum, destination, deliveryTime }) => {
  return (
    <GlobalContainer>
      <PackageDetailsContainer style={{ paddingBottom: "1.5rem" }}>
        <CenterContainer style={{ textAlign: "center" }}>
          <Header style={{ color: "white" }}>Your Order is Confirmed!</Header>
          <Paragraph>Order #{orderNum}</Paragraph>
          <Paragraph>Destination: {destination}</Paragraph>
          <Paragraph>Preferred Time of Delivery: {deliveryTime}</Paragraph>
          <Link href={"/"}>
            <a>
              <Button
                style={{ margin: "0 auto", marginTop: "20px" }}
                onclick={() => Router.push("/")}
              >
                Home
              </Button>
            </a>
          </Link>
        </CenterContainer>
      </PackageDetailsContainer>
    </GlobalContainer>
  );
};

export default ConfirmationPage;
