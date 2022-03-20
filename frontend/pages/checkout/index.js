import {
  ColumnsContainer,
  DestinationAddressCard,
  GlobalContainer,
  SpacedContainer,
} from "../../components/GlobalComponents";
import React, { useEffect, useState } from "react";
import Maps from "../../components/Maps";
import Router from "next/router";
import Post from "./Post";

import { getFromStorage } from "../../lib/storage-tools";

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
import {
  DropDownContent,
  Dropbtn,
  DropDownLi,
} from "../../components/Checkout";

// variables to hold the time
let startTime = "1";
let endTime = "1";

/**
 * Function to handle the button press of 'Place Order'.
 * This clears localStorage, adds info to the database and redirects to the confirmation page.
 */
export async function handleCheckout() {
  const destinationAddress = getFromStorage("address");
  const checkoutDetails = getFromStorage("checkout");
  const extraDetails = getFromStorage("extraDetails");
  const placedOrderDetails = getFromStorage("placeOrder");

  const data = {
    destinationAddress: destinationAddress,
    checkoutInformation: checkoutDetails[0],
    extraOrderDetails: extraDetails[0],
    mainOrderDetails: placedOrderDetails,
  };

  const rawResponse = await fetch("/api/current-orders", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error("Error:", error);
  });

  const response = await rawResponse.json();
  return response._id;
}

/**
 * A function that contains everything for the checkout page
 * parameters are lists for the local storage and set parameters update it and the local storage
 * @return {r}*/
function Package({ checkout, setCheckout, packages, extras, address }) {
  // initialize the time variables
  startTime = extras[0].startTime;
  endTime = extras[0].endTime;

  // set the cost and tax of the order
  if (checkout[0].priority == "High") {
    checkout[0].cost = 30 + packages.length * 5 + checkout[0].tip * 1;
  } else if (checkout[0].priority == "Medium") {
    checkout[0].cost = 20 + packages.length * 5 + checkout[0].tip * 1;
  } else {
    checkout[0].cost = 10 + packages.length * 5 + checkout[0].tip * 1;
  }
  checkout[0].tax = checkout[0].cost * 0.06;
  checkout[0].cost += checkout[0].tax;

  // Receive the package instructions from the user
  const changeInstructions = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].instructions = element.target.value;
    setCheckout(copyPostArray);
  };
  // Receive the tip from the user
  const changeTip = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].tip = element.target.value;
    setCheckout(copyPostArray);
  };
  // Update the priority from the user
  const setPriorityandCost = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].priority = element.target.value;
    setCheckout(copyPostArray);
  };
  // Receive the email from the user
  const setEmail = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].email = element.target.value;
    setCheckout(copyPostArray);
  };
  // Receive the credit card number from the user
  const setPaymentNumber = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].number = element.target.value;
    setCheckout(copyPostArray);
  };
  //  Receive the expiration date from the user
  const setExpirationDate = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].expirationDate = element.target.value;
    setCheckout(copyPostArray);
  };
  // Receive the CVC from the user
  const setCVC = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].cvc = element.target.value;
    setCheckout(copyPostArray);
  };
  // Receive the Name on the card from the user
  const setName = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].cardName = element.target.value;
    setCheckout(copyPostArray);
  };
  // Receive the postal address from the user
  const setPostal = (element) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[0].postal = element.target.value;
    setCheckout(copyPostArray);
  };

  // initialize the base checkout local storage
  const setInit = (element, index) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[index].priority = element;
    copyPostArray[index].tip = 0;
    copyPostArray[index].instructions = "";
    copyPostArray[index].cardName = "";
    copyPostArray[index].cvc = "";
    copyPostArray[index].expirationDate = "";
    copyPostArray[index].number = "";
    copyPostArray[index].email = "";
    copyPostArray[index].postal = "";
    setCheckout(copyPostArray);
    return 0;
  };

  //  a function to format numbers to be only 2 decimals
  const format = (num, decimals) =>
    num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return (
    <SpacedContainer>
      <ColumnsContainer>
        {/* display the address's on the map */}
        <Maps markers={address} />
        <DetailsBox>
          {/* display and recieve the orders information */}
          Delivery Time: {startTime} - {endTime}
          {checkout.map((post, index) => {
            if (post.priority == null) {
              {
                /* initialize the local storage */
              }
              setInit("Low", 0);
              return;
            }
            return (
              <div key={index}>
                Priority:
                <Select
                  onChange={(e) => setPriorityandCost(e)}
                  defaultValue={post.priority}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
                <br></br>
                Tip: $
                <input
                  type="number"
                  min="0"
                  max="1000"
                  step="0.50"
                  placeholder={format(post.tip)}
                  onChange={(e) => changeTip(e)}
                ></input>
              </div>
            );
          })}
          Tax: ${format(checkout[0].tax)}
          <br></br>
          Cost: ${format(checkout[0].cost)}
          <br></br>
          Drop Off Instructions:{" "}
          <InputDetails onChange={(e) => changeInstructions(e)}></InputDetails>
          <br></br>
          {/* display packages list here */}
          <DropDownLi>
            <Dropbtn>Packages (hover to view)</Dropbtn>
            <DropDownContent>
              <ul>
                {packages.map((post, index) => {
                  return (
                    <Post
                      key={post.id}
                      id={post.id}
                      size={post.Size}
                      address={post.Address.formatted_address}
                      details={post.Details}
                      importantDetails={post.ImportantDetails}
                    />
                  );
                })}
              </ul>
            </DropDownContent>
          </DropDownLi>
        </DetailsBox>
      </ColumnsContainer>
      {/* Recieve Payment details */}

      <PaymentContainer>
        <PackageDetailsBox>
          Email: <br />
          <InputPayment
            onChange={(e) => setEmail(e)}
            type="email"
            placeholder={"example@gmail.com"}
          ></InputPayment>
        </PackageDetailsBox>
        <PackageDetailsBox>
          Card Information
          <CardInfo>
            <InputPayment
              placeholder={"1234 1234 1234 1234"}
              onChange={(e) => setPaymentNumber(e)}
            ></InputPayment>
            <InputPayment
              placeholder={"MM / YY"}
              onChange={(e) => setExpirationDate(e)}
            ></InputPayment>
            <InputPayment
              placeholder={"CVC"}
              onChange={(e) => setCVC(e)}
            ></InputPayment>
          </CardInfo>
        </PackageDetailsBox>

        <PackageDetailsBox>
          Name on Card: <br />
          <InputPayment
            onChange={(e) => setName(e)}
            placeholder={"Name On Card"}
          ></InputPayment>
        </PackageDetailsBox>
        <PackageDetailsBox>
          Postal Code: <br />
          <InputPayment
            onChange={(e) => setPostal(e)}
            placeholder={"postal"}
          ></InputPayment>
        </PackageDetailsBox>
      </PaymentContainer>

      {/* Move pages buttons*/}
      <BottomContainer>
        <MovePagesButton onClick={() => Router.push("/orders")}>
          Back To Order
        </MovePagesButton>
        <MovePagesButton
          onClick={(event) => {
            handleCheckout().then((id) => {
              event.preventDefault();
              Router.push(`/confirmation/${id}`);
            });
          }}
        >
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
  let extraDetails = [{ postID: 0, prevAddress: "" }];
  let cart = [{}];
  if (typeof window !== "undefined") {
    // if there is currently local storage then just recieve it
    items = JSON.parse(localStorage.getItem("placeOrder"));
    extraDetails = JSON.parse(localStorage.getItem("extraDetails"));
    cart = JSON.parse(localStorage.getItem("checkout"));
    // if any of the local storage keys are missing then make an empty one
    if (items == null) {
      items = [];
    }
    if (extraDetails == null) {
      extraDetails = [{ postID: 0, prevAddress: "" }];
    }
    if (cart == null) {
      cart = [{}];
    }
  }
  // the states for the local storage
  const [packages] = useState(items);
  const [extras] = useState(extraDetails);
  const [checkout, setCheckout] = useState(cart);
  // update the local storage any time any of the states are modified
  useEffect(() => {
    localStorage.setItem("placeOrder", JSON.stringify(packages));
    localStorage.setItem("extraDetails", JSON.stringify(extras));
    localStorage.setItem("checkout", JSON.stringify(checkout));
  });

  const [address, setAddress] = useState("");
  useEffect(() => {
    setAddress(() => {
      return getFromStorage("address");
    });
  }, []);

  return (
    // display the information to the page
    <GlobalContainer>
      <DestinationAddressCard>
        <h2>Destination Address</h2>
        {address.formatted_address}
      </DestinationAddressCard>

      <Package
        checkout={checkout}
        setCheckout={setCheckout}
        packages={packages}
        extras={extras}
        address={address}
      />
    </GlobalContainer>
  );
}
