import React, { Component } from "react";
import {
  RemoveItemButton,
  PackageDetails,
  DetailsBox,
  InputDetails,
  Select,
} from "../../components/PlaceOrder";

/**
 * Place orders page for the website.
 * @return {JSX.Element}
 */
export default class Post extends Component {
  /**
   * Place orders page for the website.
   * @return {JSX.Element}
   */
  render() {
    return (
      <PackageDetails>
        <DetailsBox>
          <div>Address: </div>
          <InputDetails
            defaultValue={this.props.address}
            type="text"
            onBlur={this.props.setAddress}
          />
        </DetailsBox>
        <DetailsBox>
          <div>Size: </div>
          <Select onBlur={this.props.setSize}>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
          </Select>
        </DetailsBox>
        <DetailsBox>
          <div>Details: </div>{" "}
          <InputDetails
            defaultValue=""
            type="text"
            onBlur={this.props.setDetail}
          />
        </DetailsBox>
        <RemoveItemButton onClick={this.props.delete}>X</RemoveItemButton>
      </PackageDetails>
    );
  }
}
