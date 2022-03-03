import React from "react";

import { CenterContainer, ContainerImage } from "./GlobalComponents";
import styled from "styled-components";
import PropTypes from "prop-types";
import Router from "next/router";

const SearchText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Button = styled.button`
  text-align: center;
  padding: 8px 16px;
  color: black;
  background-color: #ff9a42;
  border: 1px solid;
  border-color: #ff9a42;
  border-radius: 20px;
  font-size: 16px;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: black;
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
    </>
  );
};
