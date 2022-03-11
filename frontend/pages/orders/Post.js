import React, { Component } from "react";
import {
  RemoveItemButton,
  PackageDetails,
  DetailsBox,
  InputDetails,
  Select,
  DropDownContent,
  DropDownLi,
  Dropbtn,
} from "../../components/PlaceOrder";

import Autocomplete from "react-google-autocomplete";

const options = {
  types: ["address"],
  location: { lat: 52.130406, lng: -106.65982 },
  componentRestrictions: { country: ["ca"] },
  radius: 11000,
  strictbounds: true,
};

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
          <Autocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={this.props.setAddress}
            options={options}
            defaultValue={this.props.address}
          />
        </DetailsBox>
        <DetailsBox>
          <div>Size: </div>
          <Select onChange={this.props.setSize}>
            <option value="" hidden>
              {this.props.size}
            </option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </Select>
        </DetailsBox>
        <DetailsBox>
          <div>
            <DropDownLi>
              <Dropbtn>Important Details (hover to view)</Dropbtn>
              <DropDownContent>
                Please Input any details that the driver might need to know. Ex:
                Order Number, Whos name the package is under, etc.
              </DropDownContent>
            </DropDownLi>
          </div>

          <InputDetails
            defaultValue={this.props.ImportantDetails}
            type="text"
            onChange={this.props.setImportantDetails}
          />
        </DetailsBox>
        <DetailsBox>
          <div>Details: </div>{" "}
          <InputDetails
            defaultValue={this.props.Details}
            type="text"
            onChange={this.props.setDetail}
          />
        </DetailsBox>
        <RemoveItemButton onClick={this.props.delete}>X</RemoveItemButton>
      </PackageDetails>
    );
  }
}
