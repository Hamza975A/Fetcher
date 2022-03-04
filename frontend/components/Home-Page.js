import React from "react";

import { CenterContainer, ContainerImage } from "./GlobalComponents";
import styled from "styled-components";
import PropTypes from "prop-types";
import Router from "next/router";

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
`;

const Button = styled.button`
  text-align: center;
  padding: 8px 16px;
  color: ${({ colour }) => colour};
  background-color: #ff9a42;
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

export const HomePage = () => {
  return (
    <>
      <ContainerImage>
        <CenterContainer>
          <SearchText> Schedule a Pickup </SearchText>
          <input placeholder="Enter the address"></input>
          <Button onClick={() => Router.push("/orders")}> Search </Button>
        </CenterContainer>
      </ContainerImage>

      <InfoContainer bg="#f08426" id="aboutus">
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <TopLine colour="white">About Us</TopLine>
              <Heading colour="white">We move packages from A to B.</Heading>
              <Subtitle colour="black">
                Learn more about how our algorithm does the magic.{" "}
              </Subtitle>
              <a href="/orders">
                <Button colour="white">Create a New Order</Button>
              </a>
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
              <a href="mailto:hamza.aziz@usask.ca">
                <Button colour="white">Email</Button>
              </a>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoContainer>
    </>
  );
};
