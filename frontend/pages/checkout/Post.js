import React, { Component } from "react";
import { PackageDetails, PackageDetailsBox } from "../../components/Checkout";

/**
 * Checkout page for the website.
 * @return {JSX.Element}
 */
export default class Post extends Component {
  /**
   * Checkout page for the website.
   * @return {JSX.Element}
   */
  render() {
    return (
      <PackageDetails>
        <PackageDetailsBox>
          Pickup Location: {this.props.address}
        </PackageDetailsBox>
        <PackageDetailsBox>Size: {this.props.size}</PackageDetailsBox>
        <PackageDetailsBox>
          Important Details: {this.props.importantDetails}
        </PackageDetailsBox>
        <PackageDetailsBox>
          Package Instructions: {this.props.details}
        </PackageDetailsBox>
      </PackageDetails>
    );
  }
}
