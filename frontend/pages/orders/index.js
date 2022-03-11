import React, { useEffect, useState } from "react";
import { getFromStorage } from "../../lib/storage-tools";

import Router from "next/router";

import Post from "./Post";
import {
  PackageDetails,
  Select,
  DetailsBox,
  AddItemsButton,
  BottomContainer,
  AddItemsButtonsContainer,
} from "../../components/PlaceOrder";
import {
  SpacedContainer,
  DestinationAddressCard,
} from "../../components/GlobalComponents";
// import React from "react";
import { GlobalContainer } from "../../components/GlobalComponents";

let postID = 0;
let prevAddress = "";
/** @return {r}*/
function Package({ packages, setPackages, extras, setExtras }) {
  // Delete the package that the user wants to delete, if there is only 1 package remaining then don't delete
  const deleteEvent = (index) => {
    const copyPostArray = Object.assign([], packages);
    copyPostArray.splice(index, 1);

    if (copyPostArray.length > 0) {
      setPackages(copyPostArray);
    }
  };

  // Recieve the package instructions from the user
  const setDetails = (element, index) => {
    const copyPostArray = Object.assign([], packages);
    copyPostArray[index].Details = element.target.value;
    setPackages(copyPostArray);
  };
  // Recieve the package instructions from the user
  const setImportantDetails = (element, index) => {
    const copyPostArray = Object.assign([], packages);
    copyPostArray[index].ImportantDetails = element.target.value;
    setPackages(copyPostArray);
  };

  // Recieve the Address from the user (will also check for validity here later)
  const setAddress = (element, index) => {
    prevAddress = element;
    const copyArray = Object.assign([], extras);
    copyArray[0].prevAddress = prevAddress;
    setExtras(copyArray);

    const copyPostArray = Object.assign([], packages);
    copyPostArray[index].Address = element;
    setPackages(copyPostArray);
  };

  // Recieve the package size from the user
  const setSize = (element, index) => {
    const copyPostArray = Object.assign([], packages);
    copyPostArray[index].Size = element.target.value;
    setPackages(copyPostArray);
  };
  // Recieve the start time from the user
  const setStartTime = (element) => {
    const copyArray = Object.assign([], extras);
    copyArray[0].startTime = element.target.value;
    setExtras(copyArray);
  };
  // Recieve the end time from the user
  const setEndTime = (element) => {
    const copyArray = Object.assign([], extras);
    copyArray[0].endTime = element.target.value;
    setExtras(copyArray);
  };

  // Create a new blank Package and add it to the array of packages
  const addPost = () => {
    prevAddress = "";
    postID = extras[0].postID + 1;
    const copyArray = Object.assign([], extras);
    copyArray[0].postID = postID;
    copyArray[0].prevAddress = prevAddress;
    setExtras(copyArray);
    const copyPostArray = Object.assign([], packages);
    copyPostArray.push({
      id: extras[0].postID,
      Size: "Small",
      Address: "",
      Details: "",
      ImportantDetails: "",
    });
    if (copyPostArray.length < 20) {
      setPackages(copyPostArray);
    }
  };

  // Create a new Package with the same location as the previous set location and add it to the array of packages
  const addPostPrev = () => {
    postID = extras[0].postID + 1;
    const copyArray = Object.assign([], extras);
    copyArray[0].postID = postID;
    setExtras(copyArray);
    const copyPostArray = Object.assign([], packages);
    copyPostArray.push({
      id: extras[0].postID,
      Size: "Small",
      Address: prevAddress,
      Details: "",
      ImportantDetails: "",
    });
    if (copyPostArray.length < 20) {
      setPackages(copyPostArray);
    }
  };

  return (
    <SpacedContainer>
      {/* <h2>{getFromStorage("address").formatted_address}</h2> placeholder */}
      <ul>
        <SpacedContainer>
          {/* This loops through the list of packages and sets them on the page with action listners*/}
          {packages.map((post, index) => {
            if (index == 0 && post.Address == "" && post.Size == null) {
              return (
                <Post
                  key={post.id}
                  index={index}
                  id={post.id}
                  size={"Small"}
                  address={post.Address.formatted_address}
                  Details={post.Details}
                  ImportantDetails={post.ImportantDetails}
                  delete={() => deleteEvent(index)}
                  setImportantDetails={(e) => setImportantDetails(e, index)}
                  setDetail={(e) => setDetails(e, index)}
                  setAddress={(e) => setAddress(e, index)}
                  setSize={(e) => setSize(e, index)}
                />
              );
            } else if (index == 0 && post.Address == "") {
              return (
                <Post
                  key={post.id}
                  index={index}
                  id={post.id}
                  size={post.Size}
                  address={post.Address.formatted_address}
                  Details={post.Details}
                  ImportantDetails={post.ImportantDetails}
                  delete={() => deleteEvent(index)}
                  setImportantDetails={(e) => setImportantDetails(e, index)}
                  setDetail={(e) => setDetails(e, index)}
                  setAddress={(e) => setAddress(e, index)}
                  setSize={(e) => setSize(e, index)}
                />
              );
            } else if (index == 0 && post.Size == null) {
              return (
                <Post
                  key={post.id}
                  index={index}
                  id={post.id}
                  size={"Small"}
                  address={""}
                  Details={post.Details}
                  ImportantDetails={post.ImportantDetails}
                  delete={() => deleteEvent(index)}
                  setImportantDetails={(e) => setImportantDetails(e, index)}
                  setDetail={(e) => setDetails(e, index)}
                  setAddress={(e) => setAddress(e, index)}
                  setSize={(e) => setSize(e, index)}
                />
              );
            } else {
              return (
                <Post
                  key={post.id}
                  index={index}
                  id={post.id}
                  size={post.Size}
                  address={post.Address.formatted_address}
                  Details={post.Details}
                  ImportantDetails={post.ImportantDetails}
                  delete={() => deleteEvent(index)}
                  setImportantDetails={(e) => setImportantDetails(e, index)}
                  setDetail={(e) => setDetails(e, index)}
                  setAddress={(e) => setAddress(e, index)}
                  setSize={(e) => setSize(e, index)}
                />
              );
            }
          })}
        </SpacedContainer>
      </ul>
      {/* The buttons to create new packages and the time/checkout */}
      <AddItemsButtonsContainer>
        <AddItemsButton onClick={addPost}>
          New Package and new pickup address
        </AddItemsButton>
        <AddItemsButton onClick={addPostPrev}>
          New Package (same pickup address as last modified)
        </AddItemsButton>
      </AddItemsButtonsContainer>
      <BottomContainer>
        <PackageDetails>
          <DetailsBox>
            <div>Preferred Time of Delivery: </div>{" "}
            <Select onChange={setStartTime}>
              <option value="" hidden>
                {extras[0].startTime}
              </option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="1:00 AM">1:00 AM</option>
              <option value="2:00 AM">2:00 AM</option>
              <option value="3:00 AM">3:00 AM</option>
              <option value="4:00 AM">4:00 AM</option>
              <option value="5:00 AM">5:00 AM</option>
              <option value="6:00 AM">6:00 AM</option>
              <option value="7:00 AM">7:00 AM</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="11:00 PM">11:00 PM</option>
            </Select>
            to
            <Select onChange={setEndTime}>
              <option value="" hidden>
                {extras[0].endTime}
              </option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="1:00 AM">1:00 AM</option>
              <option value="2:00 AM">2:00 AM</option>
              <option value="3:00 AM">3:00 AM</option>
              <option value="4:00 AM">4:00 AM</option>
              <option value="5:00 AM">5:00 AM</option>
              <option value="6:00 AM">6:00 AM</option>
              <option value="7:00 AM">7:00 AM</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="11:00 PM">11:00 PM</option>
            </Select>
          </DetailsBox>
        </PackageDetails>
        <AddItemsButton onClick={() => Router.push("/checkout")}>
          Continue to Checkout
        </AddItemsButton>
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
      items = [{}];
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

  const [packages, setPackages] = useState(items);
  const [extras, setExtras] = useState(extraDetails);
  const [checkout] = useState(cart);
  useEffect(() => {
    localStorage.setItem("placeOrder", JSON.stringify(packages));
    localStorage.setItem("extraDetails", JSON.stringify(extras));
    localStorage.setItem("checkout", JSON.stringify(checkout));
  });

  const [address, setAddress] = useState("");
  useEffect(() => {
    setAddress(() => {
      return getFromStorage("address").formatted_address;
    });
  }, []);

  return (
    <GlobalContainer>
      <DestinationAddressCard style={{ marginBottom: "20px" }}>
        <h2>Destination Address</h2>
        {address}
      </DestinationAddressCard>
      <Package
        packages={packages}
        setPackages={setPackages}
        extras={extras}
        setExtras={setExtras}
      />
    </GlobalContainer>
  );
}
