import React, { useEffect, useState } from "react";
import { getFromStorage } from "../../lib/storage-tools";

import Post from "./Post";
import {
  PackageDetails,
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

/**
 * A function that contains everything for the packages page
 * parameters are lists for the local storage and set parameters update it and the local storage
 * @return {r}*/
function Package({ packages, setPackages, extras, setExtras }) {
  // Delete the package that the user wants to delete,
  // if there is only 1 package remaining then don't delete
  // if there is more than 20 packages, dont add more
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
  // Recieve the package instructions that are important from the user
  const setImportantDetails = (element, index) => {
    const copyPostArray = Object.assign([], packages);
    copyPostArray[index].ImportantDetails = element.target.value;
    setPackages(copyPostArray);
  };

  // Recieve the Address object from the user
  const setAddress = (element, index) => {
    prevAddress = element;
    const copyArray = Object.assign([], extras);
    copyArray[0].prevAddress = prevAddress;
    setExtras(copyArray);
    const copyPostArray = Object.assign([], packages);
    copyPostArray[index].Address = element;
    setPackages(copyPostArray);
  };
  // set up an initial package
  const setInit = (element, index) => {
    const copyPostArray = Object.assign([], packages);
    copyPostArray[index].Size = element;
    copyPostArray[index].postID = 0;
    copyPostArray[index].Details = "";
    copyPostArray[index].ImportantDetails = "";
    copyPostArray[index].Address = "";
    setPackages(copyPostArray);
    return 0;
  };

  // Recieve the package size from the user and set it to the specific packages data
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
      Address: extras[0].prevAddress,
      Details: "",
      ImportantDetails: "",
    });
    if (copyPostArray.length < 20) {
      setPackages(copyPostArray);
    }
  };

  return (
    <SpacedContainer>
      <ul>
        <SpacedContainer>
          {/* This loops through the list of packages and sets them on the page with action listners*/}
          {packages.map((post, index) => {
            // set the initial package to have data (size will always be null for only the initial package)
            if (post.Size == null) {
              setInit("Small", 0);
              return;
            }

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
          })}
        </SpacedContainer>
      </ul>
      {/* The buttons to create new packages and the time/checkout button */}
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
            {/* require the times, and have the default value for the end time to be atleast the same as the start time so the end time is never before the start time  */}
            <input
              type="time"
              onChange={setStartTime}
              defaultValue={extras[0].startTime}
              min="05:00"
              max="16:00"
              required
            ></input>
            -
            <input
              type="time"
              onChange={setEndTime}
              defaultValue={extras[0].endTime}
              min={extras[0].startTime}
              max="20:00"
              required
            ></input>
          </DetailsBox>
        </PackageDetails>

        <AddItemsButton type="submit">
          {" "}
          {/* this will move to the checkout if all the required items are inputted */}
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
  let items = [{}]; // setup three initial local storages lists
  let extraDetails = [{ postID: 0, prevAddress: "" }];
  let cart = [{}];
  if (typeof window !== "undefined") {
    // if there is currently local storage then just recieve it
    items = JSON.parse(localStorage.getItem("placeOrder"));
    extraDetails = JSON.parse(localStorage.getItem("extraDetails"));
    cart = JSON.parse(localStorage.getItem("checkout"));
    // if any of the local storage keys are missing then make an empty one
    if (items == null) {
      items = [{}];
    }
    if (extraDetails == null) {
      extraDetails = [{ postID: 0, prevAddress: "" }];
    }
    if (cart == null) {
      cart = [{}];
    }
  }

  // the states for the local storage
  const [packages, setPackages] = useState(items);
  const [extras, setExtras] = useState(extraDetails);
  const [checkout] = useState(cart);
  // update the local storage any time any of the states are modified
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
    // display the information to the page
    <GlobalContainer>
      <DestinationAddressCard style={{ marginBottom: "20px" }}>
        <h2>Destination Address</h2>
        {address}
      </DestinationAddressCard>
      <form action="/checkout">
        {" "}
        {/* if the forum requirements are met and the user presses the button, go to the checkout page */}
        <Package
          packages={packages}
          setPackages={setPackages}
          extras={extras}
          setExtras={setExtras}
        />
      </form>
    </GlobalContainer>
  );
}
