import React, { useEffect, useState } from "react";

import Package from "./Packages";

/** @return {r}*/
function App() {
  let items = [
    {},{ id: 0, Size: "Small", Address: "", Details: "", ImportantDetails: "" },
  ];
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
      items = [
        {},
        { id: 0, Size: "Small", Address: "", Details: "", ImportantDetails: "" },
      ];
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

  return (
    <Package
      packages={packages}
      setPackages={setPackages}
      extras={extras}
      setExtras={setExtras}
    />
  );
}

export default App;
