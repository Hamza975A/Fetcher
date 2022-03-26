import React, { Component } from "react";
import { PackagePreviewContainer } from "../../components/PlaceOrder";

/** @return{1} */
function DisplayExtraInstructions({ instructions }) {
  if (instructions != "") {
    return <div> Extra Instructions: {instructions}</div>;
  } else {
    return <div></div>;
  }
}

/**
 * Checkout page for the website.
 * @return {JSX.Element}
 */
export default class Post extends Component {
  /**
   * Checkout page's packages list for the website.
   * @return {JSX.Element}
   */
  render() {
    if (this.props.index % 2 == 0) {
      return (
        <PackagePreviewContainer>
          Pickup Location: {this.props.address}
          <br></br>
          Size: {this.props.size}
          <br></br>
          Important Details: {this.props.importantDetails}
          <br></br>
          <DisplayExtraInstructions instructions={this.props.details} />
        </PackagePreviewContainer>
      );
    } else {
      return (
        <PackagePreviewContainer backgroundColour="#FFEEE1">
          Pickup Location: {this.props.address}
          <br></br>
          Size: {this.props.size}
          <br></br>
          Important Details: {this.props.importantDetails}
          <br></br>
          <DisplayExtraInstructions instructions={this.props.details} />
        </PackagePreviewContainer>
      );
    }
  }
}
