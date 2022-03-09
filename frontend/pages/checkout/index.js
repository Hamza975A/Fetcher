import { GlobalContainer } from "../../components/GlobalComponents";
import React, { useEffect, useState } from "react";

import Router from "next/router";
import Post from "./Post";
import {
  DetailsBox,
  InputDetails,
  MovePagesButton,
  PaymentContainer,
  PackageDetailsBox,
  InputPayment,
  CardInfo,
  Select,
  BottomContainer,
} from "../../components/Checkout";
import { SpacedContainer } from "../../components/GlobalComponents";
import {
  DropDownContent,
  Dropbtn,
  DropDownLi,
} from "../../components/Checkout";

let dropOff = "";
let startTime = "1";
let endTime = "1";

/** @return {r}*/
function Package({ checkout, setCheckout, packages, extras }) {
  const copyPostArray = Object.assign([], checkout);
  dropOff = copyPostArray[0].dropoffLocation;
  startTime = extras[0].startTime;
  endTime = extras[0].endTime;
  checkout[0].cost = 1 * 10 + (packages.length - 1) * 5;
  if (checkout[0].priority == "High") {
    checkout[0].cost = 3 * 10 + (packages.length - 1) * 5;
  } else if (checkout[0].priority == "Medium") {
    checkout[0].cost = 2 * 10 + (packages.length - 1) * 5;
  } else {
    checkout[0].cost = 1 * 10 + (packages.length - 1) * 5;
  }

  // Recieve the package instructions from the user
  const changeInstructions = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].instructions = element.target.value;
    setCheckout(copyPostArray);
  };
  // Update the priority and cost from the user
  const setPriorityandCost = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].priority = element.target.value;
    if (element.target.value == "Low") {
      copyPostArray[0].cost = 1 * 10 + (packages.length - 1) * 5;
    } else if (element.target.value == "Medium") {
      copyPostArray[0].cost = 2 * 10 + (packages.length - 1) * 5;
    } else {
      copyPostArray[0].cost = 3 * 10 + (packages.length - 1) * 5;
    }
    setCheckout(copyPostArray);
  };
  // Recieve the email from the user
  const setEmail = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].email = element.target.value;
    setCheckout(copyPostArray);
  };
  // Recieve the credit card number from the user
  const setPaymentNumber = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].number = element.target.value;
    setCheckout(copyPostArray);
  };
  //  Recieve the expiration date from the user
  const setExpirationDate = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].expirationDate = element.target.value;
    setCheckout(copyPostArray);
  };
  // Recieve the CVC from the user
  const setCVC = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].cvc = element.target.value;
    setCheckout(copyPostArray);
  };
  // Recieve the Name on the card from the user
  const setName = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].cardName = element.target.value;
    setCheckout(copyPostArray);
  };

  // Recieve the postal address from the user
  const setPostal = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].postal = element.target.value;
    setCheckout(copyPostArray);
  };

  return (
    <SpacedContainer>
      <DetailsBox>
        Drop Off Location: {dropOff}
        <br></br>
        Delivery Time: {startTime} - {endTime}
        <br></br>
        Priority:{" "}
        <Select onChange={(e) => setPriorityandCost(e)}>
          <option value="" hidden>
            {checkout[0].priority}
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <br></br>
        Cost: ${checkout[0].cost}
        <br></br>
        Drop Off Instructions:{" "}
        <InputDetails onChange={(e) => changeInstructions(e)}></InputDetails>
        <br></br>
        {/* display checkout here */}
        <DropDownLi>
          <Dropbtn>Packages (hover to view)</Dropbtn>
          <DropDownContent>
            <ul>
              {packages.map((post, index) => {
                if (index == 0 && post.Size == null) {
                  return (
                    <Post
                      key={index}
                      id={post.id}
                      size={"Small"}
                      address={post.Address}
                      details={post.Details}
                      importantDetails={post.ImportantDetails}
                    />
                  );
                } else {
                  return (
                    <Post
                      key={post.id}
                      id={post.id}
                      size={post.Size}
                      address={post.Address}
                      details={post.Details}
                      importantDetails={post.ImportantDetails}
                    />
                  );
                }
              })}
            </ul>
          </DropDownContent>
        </DropDownLi>
      </DetailsBox>
      {/* Recieve Payment details */}
      <PaymentContainer>
        <PackageDetailsBox>
          Email: <br />
          <InputPayment onChange={(e) => setEmail(e)}></InputPayment>
        </PackageDetailsBox>
        <PackageDetailsBox>
          Card Information
          <CardInfo>
            <InputPayment
              placeholder="1234 1234 1234 1234"
              onChange={(e) => setPaymentNumber(e)}
            ></InputPayment>
            <InputPayment
              placeholder="MM / YY"
              onChange={(e) => setExpirationDate(e)}
            ></InputPayment>
            <InputPayment
              placeholder="CVC"
              onChange={(e) => setCVC(e)}
            ></InputPayment>
          </CardInfo>
        </PackageDetailsBox>

        <PackageDetailsBox>
          Name on Card: <br />
          <InputPayment onBlur={(e) => setName(e)}></InputPayment>
        </PackageDetailsBox>
        <PackageDetailsBox>
          Postal Code: <br />
          <InputPayment onBlur={(e) => setPostal(e)}></InputPayment>
        </PackageDetailsBox>
      </PaymentContainer>

      {/* Move pages buttons*/}
      <BottomContainer>
        <MovePagesButton onClick={() => Router.push("/orders")}>
          Back To Order
        </MovePagesButton>
        <MovePagesButton onClick={() => Router.push("/confirmation")}>
          Place Order
        </MovePagesButton>
      </BottomContainer>
    </SpacedContainer>
  );
}

/**
 * Place orders page for the website.
 * @return {JSX.Element}
 */
export default function Home() {
  let items = [];
  let extraDetails = [
    { postID: 0, prevAddress: "", startTime: "7:00 AM", endTime: "8:00 PM" },
  ];
  let cart = [
    {
      dropoffLocation: "anywhere",
      priority: "Low",
      instructions: "",
      cost: "",
      email: "",
      number: "",
      expirationDate: "",
      cvc: "",
      cardName: "",
      postal: "",
    },
  ];
  if (typeof window !== "undefined") {
    // Perform localStorage action

    items = JSON.parse(localStorage.getItem("placeOrder"));
    extraDetails = JSON.parse(localStorage.getItem("extraDetails"));
    cart = JSON.parse(localStorage.getItem("checkout"));
    if (items == null) {
      items = [];
    }
    if (extraDetails == null) {
      extraDetails = [
        {
          postID: 0,
          prevAddress: "",
          startTime: "7:00 AM",
          endTime: "8:00 PM",
        },
      ];
    }
    if (cart == null) {
      cart = [
        {
          dropoffLocation: "anywhere",
          priority: "Low",
          instructions: "",
          cost: "",
          email: "",
          number: "",
          expirationDate: "",
          cvc: "",
          cardName: "",
          postal: "",
        },
      ];
    }
  }

  const [packages] = useState(items);
  const [extras] = useState(extraDetails);
  const [checkout, setCheckout] = useState(cart);
  useEffect(() => {
    localStorage.setItem("placeOrder", JSON.stringify(packages));
    localStorage.setItem("extraDetails", JSON.stringify(extras));
    localStorage.setItem("checkout", JSON.stringify(checkout));
  });

  return (
    <GlobalContainer>
      <Package
        checkout={checkout}
        setCheckout={setCheckout}
        packages={packages}
        extras={extras}
      />
    </GlobalContainer>
  );
}
