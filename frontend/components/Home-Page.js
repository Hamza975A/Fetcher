import React from "react";
import Autocomplete from "react-google-autocomplete";
import { CenterContainer, ContainerImage } from "./GlobalComponents";
import styled from "styled-components";
import PropTypes from "prop-types";
import Router from "next/router";
import { pushToStorage } from "../lib/storage-tools";

import {
  InfoContainer,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./Home-Info-Styled";

const SearchText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1em;
  }
`;

const Button = styled.button`
  text-align: center;
  padding: 8px 16px;
  color: ${({ colour }) => colour};
  border: 1px solid;
  border-color: #ff9a42;
  border-radius: 20px;
  font-size: 16px;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: ${({ colour }) => colour};
    border-color: #ffaf69;
    background-color: #ffaf69;
    cursor: pointer;
  }
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const options = {
  types: ["address"],
  location: { lat: 52.130406, lng: -106.65982 },
  componentRestrictions: { country: ["ca"] },
  radius: 11000,
  strictbounds: true,
};

const handleHomeButton = () => {
  if (!currentPlace) {
    Router.push("/");
    return;
  }
  if(currentPlace.formatted_address.includes("Saskatoon")){
    pushToStorage("address", currentPlace);
    Router.push("/orders");
  }
  else{
    alert("Enter a Saskatoon Address.")
  }
  
};

let currentPlace = null;

export const HomePage = () => {
  return (
    <>
      <ContainerImage>
        <CenterContainer>
          <SearchText> Schedule a Pickup </SearchText>
          <Autocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(place) => {
              currentPlace = place;
            }}
            options={options}
            placeholder="Enter a destination address"
          />
          <Button
            onClick={handleHomeButton}
            style={{ backgroundColor: "#ff9a42" }}
          >
            Search
          </Button>
        </CenterContainer>
      </ContainerImage>

      <InfoContainer bg="#ff9a42" id="aboutus">
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <TopLine colour="white">About Us</TopLine>
              <Heading colour="white">We move packages from A to B.</Heading>
              <Subtitle colour="black">Try fetcher today!</Subtitle>

              <Button
                colour="black"
                onClick={handleHomeButton}
                style={{ backgroundColor: "white" }}
              >
                Create a New Order
              </Button>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper>
              <Img src="/asset/package.svg" />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoContainer>
      <InfoContainer bg="white" id="locations">
        <InfoRow>
          <InfoColumn>
            <ImgWrapper flex="flex-start">
              <Img src="/asset/saskatoon.png" />
            </ImgWrapper>
          </InfoColumn>
          <InfoColumn>
            <TextWrapper>
              <TopLine colour="#f08426">Now Serving</TopLine>
              <Heading colour="#f08426">Saskatoon</Heading>
              <Subtitle colour="black">
                Contact us for special pricing.{" "}
              </Subtitle>
              <a href="mailto:contact@fetcher.live">
                <Button colour="white" style={{ backgroundColor: "#f08426" }}>
                  Email
                </Button>
              </a>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoContainer>
    </>
  );
};
