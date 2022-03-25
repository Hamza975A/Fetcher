import styled from "styled-components";
import React from "react";
import { Paragraph } from "./GlobalComponents";
import Router from "next/router";

export const OrderCardWrapper = styled.div`
  padding-left: 25px;
  margin-bottom: 10px;
  margin-top: 5px;
  display: flex;
  background: #4f4f4f;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px #4f4f4f;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding: 1rem 1rem;
    margin: 1rem 0;
  }
`;

export const OrderCardLeftItems = styled.div`
  flex-direction: column;
  align-self: center;
  font-size: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;
export const NoOrdersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  display: flex;
  background-color: white;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    font-size: 1.1rem;
  }
`;

export const OrderCardRightItems = styled.div`
  display: flex;
  align-self: center;
  padding: 25px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
`;

export const OrderCardViewOrderButton = styled.button`
  background-color: #ff9a42;
  font-size: 36px;
  line-height: 84px;
  border: none;
  padding: 0px 20px;
  border-width: 0.5px;
  border-radius: 10px;
  &:hover {
    background-color: #ffbe85;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;

export const OrderCard = ({
  ordernum,
  date,
  destination,
  price,
  buttontext,
  id,
  url,
}) => {
  return (
    <OrderCardWrapper>
      <OrderCardLeftItems>
        <Paragraph>Order Number: {ordernum}</Paragraph>
        <Paragraph>Date: {date}</Paragraph>
        <Paragraph>Destination: {destination}</Paragraph>
        <Paragraph>Total: {price}</Paragraph>
      </OrderCardLeftItems>
      <OrderCardRightItems>
        <OrderCardViewOrderButton onClick={() => Router.push(`/${url}/${id}`)}>
          {" "}
          {buttontext}
        </OrderCardViewOrderButton>
      </OrderCardRightItems>
    </OrderCardWrapper>
  );
};
