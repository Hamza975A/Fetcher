import Router from "next/router";
import React, { Component } from "react";
import Post from "./Post";
import {
  PackageDetails,
  Select,
  DetailsBox,
  AddItemsButton,
  BottomContainer,
  AddItemsButtonsContainer,
} from "../../components/PlaceOrder";
import { SpacedContainer } from "../../components/GlobalComponents";

/**
 * Place orders page for the website.
 *
 */
export default class App extends Component {
  /**  constructs a base package with no details*/
  constructor() {
    super();
    this.startTime = "";
    this.endTime = "";
    this.postID = 1;
    this.prevAddress = "";
    this.state = {
      postArray: [],
      Size: "",
      Address: "",
      Details: "",
      ImportantDetails: "",
      id: "",
    };
    // initialize the array with an empty package
    this.state.postArray.push({
      id: this.postID,
      Size: "",
      Address: "",
      Details: "",
      ImportantDetails: "",
    });
  }

  // Delete the package that the user wants to delete, if there is only 1 package remaining then don't delete
  deleteEvent = (index) => {
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.splice(index, 1);
    if (copyPostArray.length > 0) {
      this.setState({
        postArray: copyPostArray,
      });
    }
  };
  // Recieve the package instructions from the user
  setDetails = (element) => {
    this.setState({
      Details: element.target.value,
    });
  };
  // Recieve the package instructions from the user
  setImportantDetails = (element) => {
    this.setState({
      ImportantDetails: element.target.value,
    });
  };

  // Recieve the Address from the user (will also check for validity here later)
  setAddress = (element) => {
    this.prevAddress = element.target.value;
    this.setState({
      Address: element.target.value,
    });
  };

  // Recieve the package size from the user
  setSize = (element) => {
    this.setState({
      Size: element.target.value,
    });
  };
  // Recieve the start time from the user
  setStartTime = (element) => {
    this.startTime = element.target.value;
  };
  // Recieve the end time from the user
  setEndTime = (element) => {
    this.endTime = element.target.value;
  };

  // Create a new blank Package and add it to the array of packages
  addPost = () => {
    this.prevAddress = "";
    this.postID = this.postID + 1;
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.push({
      id: this.postID,
      Size: "",
      Address: "",
      Details: "",
    });
    this.setState({ postArray: copyPostArray });
  };

  // Create a new Package with the same location as the previous set location and add it to the array of packages
  addPostPrev = () => {
    this.postID = this.postID + 1;
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.push({
      id: this.postID,
      Size: "",
      Address: this.prevAddress,
      Details: "",
    });
    this.setState({ postArray: copyPostArray });
  };

  /**
   * Place orders page for the website.
   * @return {JSX.Element}
   */
  render() {
    return (
      <SpacedContainer>
        <ul>
          <SpacedContainer>
            {/* This loops through the list of packages and sets them on the page with action listners*/}
            {this.state.postArray.map((post, index) => {
              return (
                <Post
                  key={post.id}
                  id={post.id}
                  size={post.size}
                  address={post.Address}
                  Details={post.Details}
                  ImportantDetails={post.ImportantDetails}
                  delete={this.deleteEvent.bind(this, index)}
                  setImportantDetails={this.setImportantDetails}
                  setDetail={this.setDetails}
                  setAddress={this.setAddress}
                  setSize={this.setSize}
                />
              );
            })}
          </SpacedContainer>
        </ul>
        {/* The buttons to create new packages and the time/checkout */}
        <AddItemsButtonsContainer>
          <AddItemsButton onClick={this.addPost}>
            New Package and new pickup address
          </AddItemsButton>
          <AddItemsButton onClick={this.addPostPrev}>
            New Package (same pickup address as last modified)
          </AddItemsButton>
        </AddItemsButtonsContainer>
        <BottomContainer>
          <PackageDetails>
            <DetailsBox>
              <div>Preferred Time of Delivery: </div>{" "}
              <Select onBlur={this.setStartTime}>
                <option value="1">12:00 AM</option>
                <option value="2">1:00 AM</option>
                <option value="3">2:00 AM</option>
                <option value="4">3:00 AM</option>
                <option value="5">4:00 AM</option>
                <option value="6">5:00 AM</option>
                <option value="7">6:00 AM</option>
                <option value="8">7:00 AM</option>
                <option value="9">8:00 AM</option>
                <option value="10">9:00 AM</option>
                <option value="11">10:00 AM</option>
                <option value="12">11:00 AM</option>
                <option value="13">12:00 PM</option>
                <option value="14">1:00 PM</option>
                <option value="15">2:00 PM</option>
                <option value="16">3:00 PM</option>
                <option value="17">4:00 PM</option>
                <option value="18">5:00 PM</option>
                <option value="19">6:00 PM</option>
                <option value="20">7:00 PM</option>
                <option value="21">8:00 PM</option>
                <option value="22">9:00 PM</option>
                <option value="23">10:00 PM</option>
                <option value="24">11:00 PM</option>
              </Select>
              to
              <Select onBlur={this.setEndTime}>
                <option value="1">12:00 AM</option>
                <option value="2">1:00 AM</option>
                <option value="3">2:00 AM</option>
                <option value="4">3:00 AM</option>
                <option value="5">4:00 AM</option>
                <option value="6">5:00 AM</option>
                <option value="7">6:00 AM</option>
                <option value="8">7:00 AM</option>
                <option value="9">8:00 AM</option>
                <option value="10">9:00 AM</option>
                <option value="11">10:00 AM</option>
                <option value="12">11:00 AM</option>
                <option value="13">12:00 PM</option>
                <option value="14">1:00 PM</option>
                <option value="15">2:00 PM</option>
                <option value="16">3:00 PM</option>
                <option value="17">4:00 PM</option>
                <option value="18">5:00 PM</option>
                <option value="19">6:00 PM</option>
                <option value="20">7:00 PM</option>
                <option value="21">8:00 PM</option>
                <option value="22">9:00 PM</option>
                <option value="23">10:00 PM</option>
                <option value="24">11:00 PM</option>
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
}
