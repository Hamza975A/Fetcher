import styled from "styled-components";
import React from "react";
import { Paragraph } from "./GlobalComponents";

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
`;

export const OrderCardLeftItems = styled.div`
  flex-direction: column;
  align-self: center;
  font-size: 20px;
`;

export const OrderCardRightItems = styled.div`
  display: flex;
  align-self: center;
  padding: 25px;
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
`;

export const OrderCard = (props) => {
  return (
    <OrderCardWrapper>
      <OrderCardLeftItems>
        <Paragraph>Order Number: {props.ordernum}</Paragraph>
        <Paragraph>Date: {props.date}</Paragraph>
        <Paragraph>Total: {props.price}</Paragraph>
      </OrderCardLeftItems>
      <OrderCardRightItems>
        <OrderCardViewOrderButton>{props.buttontext}</OrderCardViewOrderButton>
      </OrderCardRightItems>
    </OrderCardWrapper>
  );
};
