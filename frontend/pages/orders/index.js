import styles from "../../styles/Home.module.css";
import React from "react";

import { Nav, Logo, MenuLink, MenuContainer } from "../../components/Navbar";
import {
  AddItemsButton,
  AddItemsButtonsContainer,
  PackageDetails,
  DetailsBox,
  InputDetails,
  RemoveItemButton,
  BottomContainer,
} from "../../components/PlaceOrder";
/**
 * Place orders page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <Nav>
        <Logo href="../">fetcher</Logo>
        <MenuContainer>
          <MenuLink href="#">About Us</MenuLink>
          <MenuLink href="#">Sign In</MenuLink>
        </MenuContainer>
      </Nav>
      {/* Place Order Page */}
      <PackageDetails>
        <DetailsBox href="">
          Address: <InputDetails defaultValue="" type="text" />{" "}
        </DetailsBox>
        <DetailsBox href="">
          Size: <InputDetails defaultValue="" type="text" />{" "}
        </DetailsBox>
        <DetailsBox href="">Cost: $0.00 </DetailsBox>
        <RemoveItemButton href="">X</RemoveItemButton>
      </PackageDetails>

      <PackageDetails top="6rem">
        <DetailsBox href="">
          Address: <InputDetails defaultValue="" type="text" />{" "}
        </DetailsBox>
        <DetailsBox href="">
          Size: <InputDetails defaultValue="" type="text" />{" "}
        </DetailsBox>
        <DetailsBox href="">Cost: $0.00 </DetailsBox>
        <RemoveItemButton href="">X</RemoveItemButton>
      </PackageDetails>

      <AddItemsButtonsContainer>
        <AddItemsButton href="">
          New Package and new pickup address
        </AddItemsButton>
        <AddItemsButton href="">
          New Package and same pickup address
        </AddItemsButton>
      </AddItemsButtonsContainer>

      <BottomContainer>
        <DetailsBox href="">
          Time: <InputDetails defaultValue="ASAP" type="text" />{" "}
        </DetailsBox>
        <AddItemsButton href="">Continue to Checkout</AddItemsButton>
      </BottomContainer>
    </div>
  );
}
