import React from "react";
import {
  GlobalContainer,
  CenterContainer,
  Paragraph,
  Header,
  Button,
} from "../../components/GlobalComponents";
import { PackageDetails } from "../../components/PlaceOrder";

const ConfirmationPage = () => {
  const [orderNum, setOrderNum] = React.useState(1001);
  return (
    <GlobalContainer>
      <PackageDetails style={{ paddingBottom: "1.5rem" }}>
        <CenterContainer style={{ textAlign: "center" }}>
          <Header style={{ color: "white" }}>Your Order is Confirmed!</Header>
          <Paragraph>Order #{orderNum}</Paragraph>
          <a href="/">
            <Button
              style={{ width: "20%", margin: "0 auto", marginTop: "20px" }}
              onclick={setOrderNum}
            >
              Home
            </Button>
          </a>
        </CenterContainer>
      </PackageDetails>
    </GlobalContainer>
  );
};

export default ConfirmationPage;
