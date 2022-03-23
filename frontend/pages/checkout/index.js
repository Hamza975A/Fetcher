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

import { getFromStorage, pushToStorage } from "../../lib/storage-tools";

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
import { getSession, signIn } from "next-auth/react";

// variables to hold the time
let startTime = "1";
let endTime = "1";

/**
 * Function to handle the button press of 'Place Order'.
 * This clears localStorage, adds info to the database and redirects to the confirmation page.
 */
export async function handleCheckout() {
  const session = await getSession();
  if (!session) {
    signIn();
  }
  const destinationAddress = getFromStorage("address");
  const checkoutDetails = getFromStorage("checkout");
  const extraDetails = getFromStorage("extraDetails");
  const placedOrderDetails = getFromStorage("placeOrder");
  const time = new Date().toLocaleString("en-US", {
    timeZone: "America/Regina",
  });

  const data = {
    destinationAddress: destinationAddress,
    checkoutInformation: checkoutDetails[0],
    extraOrderDetails: extraDetails[0],
    mainOrderDetails: placedOrderDetails,
    timestamp: time.toString(),
  };

  const rawResponse = await fetch("/api/post-current-order", {
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
function Package({
  checkout,
  setCheckout,
  packages,
  extras,
  address,
  paymentInfo,
  setPaymentInfo,
}) {
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
    const copyPostArray = Object.assign([], paymentInfo);
    copyPostArray[0].email = element.target.value;
    setPaymentInfo(copyPostArray);
  };
  // Receive the credit card number from the user
  const setPaymentNumber = (element) => {
    const copyPostArray = Object.assign([], paymentInfo);
    copyPostArray[0].number = element.target.value;
    setPaymentInfo(copyPostArray);
  };
  //  Receive the expiration date from the user
  const setExpirationDate = (element) => {
    const copyPostArray = Object.assign([], paymentInfo);
    copyPostArray[0].expirationDate = element.target.value;
    setPaymentInfo(copyPostArray);
  };
  // Receive the CVC from the user
  const setCVC = (element) => {
    const copyPostArray = Object.assign([], paymentInfo);
    copyPostArray[0].cvc = element.target.value;
    setPaymentInfo(copyPostArray);
  };
  // Receive the Name on the card from the user
  const setName = (element) => {
    const copyPostArray = Object.assign([], paymentInfo);
    copyPostArray[0].cardName = element.target.value;
    setPaymentInfo(copyPostArray);
  };
  // Receive the postal address from the user
  const setPostal = (element) => {
    const copyPostArray = Object.assign([], paymentInfo);
    copyPostArray[0].postal = element.target.value;
    setPaymentInfo(copyPostArray);
  };

  // initialize the base checkout local storage
  const setInit = (element, index) => {
    const copyPostArray = Object.assign([], checkout);
    copyPostArray[index].priority = element;
    copyPostArray[index].tip = 0;
    copyPostArray[index].instructions = "";
    setCheckout(copyPostArray);
    return 0;
  };
  // initialize the base payment session storage
  const setPaymentInit = (element, index) => {
    const copyPayArray = Object.assign([], paymentInfo);
    copyPayArray[index].cardName = "";
    copyPayArray[index].cvc = element;
    copyPayArray[index].expirationDate = "";
    copyPayArray[index].number = "";
    copyPayArray[index].email = "";
    copyPayArray[index].postal = "";
    setPaymentInfo(copyPayArray);
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
            if (paymentInfo[0].email == null) {
              /* initialize the local storage */
              setPaymentInit("", 0);
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
            value={paymentInfo[0].email}
          ></InputPayment>
        </PackageDetailsBox>
        <PackageDetailsBox>
          Card Information
          <CardInfo>
            <InputPayment
              placeholder={"1234 1234 1234 1234"}
              onChange={(e) => setPaymentNumber(e)}
              value={paymentInfo[0].number}
            ></InputPayment>
            <InputPayment
              placeholder={"MM / YY"}
              onChange={(e) => setExpirationDate(e)}
              value={paymentInfo[0].expirationDate}
            ></InputPayment>
            <InputPayment
              placeholder={"CVC"}
              onChange={(e) => setCVC(e)}
              value={paymentInfo[0].cvc}
            ></InputPayment>
          </CardInfo>
        </PackageDetailsBox>

        <PackageDetailsBox>
          Name on Card: <br />
          <InputPayment
            onChange={(e) => setName(e)}
            placeholder={"Name On Card"}
            value={paymentInfo[0].cardName}
          ></InputPayment>
        </PackageDetailsBox>
        <PackageDetailsBox>
          Postal Code: <br />
          <InputPayment
            onChange={(e) => setPostal(e)}
            placeholder={"postal"}
            value={paymentInfo[0].postal}
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
  let paymentInformation = [{}];
  let noError = true;
  if (typeof window !== "undefined") {
    // if there is currently local storage then just recieve it
    items = getFromStorage("placeOrder");
    extraDetails = getFromStorage("extraDetails");
    cart = getFromStorage("checkout");
    paymentInformation = JSON.parse(window.sessionStorage.getItem("payment"));
    // if any of the local storage keys are missing then make an empty one
    if (items == null) {
      noError = false;
    }
    if (extraDetails == null) {
      noError = false;
    }
    if (cart == null) {
      cart = [{}];
    }
    if (paymentInformation == null) {
      paymentInformation = [{}];
    }
    if (JSON.parse(localStorage.getItem("address")) == null) {
      noError = false;
    }
  }
  // the states for the local storage
  const [packages] = useState(items);
  const [extras] = useState(extraDetails);
  const [checkout, setCheckout] = useState(cart);
  const [paymentInfo, setPaymentInfo] = useState(paymentInformation);
  // update the local storage any time any of the states are modified
  useEffect(() => {
    pushToStorage("placeOrder", packages);
    pushToStorage("extraDetails", extras);
    pushToStorage("checkout", checkout);
    sessionStorage.setItem("payment", JSON.stringify(paymentInfo));
  });

  const [address, setAddress] = useState("");
  useEffect(() => {
    setAddress(() => {
      return getFromStorage("address");
    });
  }, []);
  if (noError == true) {
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
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
        />
      </GlobalContainer>
    );
  } else {
    Router.push("/");
    return <div></div>;
  }
}
