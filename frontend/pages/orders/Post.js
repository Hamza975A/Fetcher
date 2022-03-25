import React, { Component } from "react";
import {
  RemoveItemButton,
  PackageDetailsContainer,
  IndividualDetailsContainer,
  InputDetails,
  Select,
  DropDownContent,
  DropDownList,
  ImportantDetailsDropDownButton,
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
   * Place orders packages place orders page.
   * @return {JSX.Element}
   */
  render() {
    return (
      <PackageDetailsContainer>
        <IndividualDetailsContainer>
          {/* retrieve an address and it is required */}
          <div>Address: </div>
          <Autocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(e) => this.props.setAddress(e)}
            options={options}
            defaultValue={this.props.address}
            required
          />
        </IndividualDetailsContainer>
        <IndividualDetailsContainer>
          {/* retrieve sizes from the user for a package */}
          <div>Size: </div>
          <Select onChange={this.props.setSize} defaultValue={this.props.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </Select>
        </IndividualDetailsContainer>
        <IndividualDetailsContainer>
          <div>
            Important Details
            <DropDownList>
              <ImportantDetailsDropDownButton type="button">
                {" "}
                I{" "}
              </ImportantDetailsDropDownButton>
              <DropDownContent>
                Please Input any details that the driver might need to know to
                pick the package up. Like Order Number, Whos name the package is
                under, where the package can be found etc.
              </DropDownContent>
            </DropDownList>
          </div>
          {/* retrieve the important required details from the user for a package */}
          <InputDetails
            defaultValue={this.props.ImportantDetails}
            type="text"
            onChange={this.props.setImportantDetails}
            required
          />
        </IndividualDetailsContainer>
        {/* retrieve the lesser details from the user for a package */}
        <IndividualDetailsContainer>
          <div>Extra Details: </div>{" "}
          <InputDetails
            defaultValue={this.props.Details}
            type="text"
            onChange={this.props.setDetail}
          />
        </IndividualDetailsContainer>
        {/* delte the package */}
        <RemoveItemButton onClick={this.props.delete}>X</RemoveItemButton>
      </PackageDetailsContainer>
    );
  }
}
