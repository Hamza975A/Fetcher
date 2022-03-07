import React, { Component } from "react";
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

/**
 * Checkout page for the website.
 *
 */
export default class App extends Component {
  /**  construct a checkout with all the necesary components*/
  constructor() {
    super();

    this.packages = [];
    this.dropoffLocation = "514 pezer cres";
    this.startTime = "";
    this.endTime = "";
    this.state = {
      priority: 1,
      instructions: "",
      cost: "",
      email: "",
      number: "",
      expirationDate: "",
      cvc: "",
      cardName: "",
      postal: "",
    };
    // this is creating 2 dummy packages to view the list and cost
    this.packages.push({
      id: 1,
      Size: "Small",
      Address: "123 street",
      ImportantDetails: "fragile",
      Details: "idk",
    });
    this.packages.push({
      id: 2,
      Size: "Large",
      Address: "123 crescent",
      ImportantDetails: "Order number 1111111",
      Details: " Music am i right",
    });
    this.state.cost = this.packages.length * 5 + this.state.priority * 10;
  }
  // Recieve the package instructions from the user
  changeInstructions = (element) => {
    this.setState({
      instructions: element.target.value,
    });
  };
  // Update the priority and cost from the user
  setPriorityandCost = (element) => {
    this.setState({
      priority: element.target.value,
      cost: this.packages.length * 5 + element.target.value * 10,
    });
  };
  // Recieve the email from the user
  setEmail = (element) => {
    this.setState({
      email: element.target.value,
    });
  };
  // Recieve the credit card number from the user
  setPaymentNumber = (element) => {
    this.setState({
      number: element.target.value,
    });
  };
  //  Recieve the expiration date from the user
  setExpirationDate = (element) => {
    this.setState({
      expirationDate: element.target.value,
    });
  };
  // Recieve the CVC from the user
  setCVC = (element) => {
    this.setState({
      cvc: element.target.value,
    });
  };
  // Recieve the Name on the card from the user
  setName = (element) => {
    this.setState({
      cardName: element.target.value,
    });
  };

  // Recieve the postal address from the user
  setPostal = (element) => {
    this.setState({
      postal: element.target.value,
    });
  };

  /**
   * Checkout page for the website.
   * @return {JSX.Element}
   */
  render() {
    return (
      <SpacedContainer>
        <DetailsBox>
          Drop Off Location: {this.dropoffLocation}
          <br></br>
          Pickup Time: {this.startTime}
          <br></br>
          Delivery Time: {this.endTime}
          <br></br>
          Priority:{" "}
          <Select onChange={this.setPriorityandCost}>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </Select>
          <br></br>
          Cost: ${this.state.cost}
          <br></br>
          Drop Off Instructions:{" "}
          <InputDetails onBlur={this.changeInstructions}></InputDetails>
          <br></br>
          {/* display packages here */}
          <DropDownLi>
            <Dropbtn>Packages (hover to view)</Dropbtn>
            <DropDownContent>
              <ul>
                {this.packages.map((post, index) => {
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
                })}
              </ul>
            </DropDownContent>
          </DropDownLi>
        </DetailsBox>
        {/* Recieve Payment details */}
        <PaymentContainer>
          <PackageDetailsBox>
            Email: <br />
            <InputPayment onBlur={this.setEmail}></InputPayment>
          </PackageDetailsBox>
          <PackageDetailsBox>
            Card Information
            <CardInfo>
              <InputPayment
                placeholder="1234 1234 1234 1234"
                onBlur={this.setPaymentNumber}
              ></InputPayment>
              <InputPayment
                placeholder="MM / YY"
                onBlur={this.setExpirationDate}
              ></InputPayment>
              <InputPayment
                placeholder="CVC"
                onBlur={this.setCVC}
              ></InputPayment>
            </CardInfo>
          </PackageDetailsBox>

          <PackageDetailsBox>
            Name on Card: <br />
            <InputPayment onBlur={this.setName}></InputPayment>
          </PackageDetailsBox>
          <PackageDetailsBox>
            Postal Code: <br />
            <InputPayment onBlur={this.setPostal}></InputPayment>
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
}
