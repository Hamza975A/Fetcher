import React, { Component } from "react";
import {
  PackageDetailsContainer,
  IndividualDetailsContainer,
} from "../../components/PlaceOrder";

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
    return (
      <PackageDetailsContainer>
        <IndividualDetailsContainer>
          Pickup Location: {this.props.address}
        </IndividualDetailsContainer>
        <IndividualDetailsContainer>
          Size: {this.props.size}
        </IndividualDetailsContainer>
        <IndividualDetailsContainer>
          Important Details: {this.props.importantDetails}
        </IndividualDetailsContainer>
        <IndividualDetailsContainer>
          Package Instructions: {this.props.details}
        </IndividualDetailsContainer>
      </PackageDetailsContainer>
    );
  }
}
