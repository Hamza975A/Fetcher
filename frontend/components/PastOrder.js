import styled from "styled-components";
import React from "react";
import { Paragraph } from "./GlobalComponents";

export const PastOrderWrapper = styled.div`
  padding-left: 25px;
  display: flex;
  background: #4f4f4f;

  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px #4f4f4f;
`;

export const PastOrderCardLeftItems = styled.div`
  flex-direction: column;
  align-self: center;
  font-size: 30px;
  gap: 60px;
  padding: 25px;
`;

export const PastOrderCard = (props) => {
  return (
    <PastOrderWrapper>
      <PastOrderCardLeftItems>
        <Paragraph>Order Number: {props.ordernum}</Paragraph>
        <Paragraph>Driver: {props.driver}</Paragraph>
        <Paragraph>Pickup Location: {props.pickuplocation}</Paragraph>
        <Paragraph>Drop-off Location: {props.dropofflocation}</Paragraph>
        <Paragraph>Parcel Size: {props.parcelsize}</Paragraph>
        <Paragraph>Delivery Fee: {props.deliveryfee}</Paragraph>
        <Paragraph>Tip: {props.tips}</Paragraph>
        <Paragraph>Total(CAD): {props.total}</Paragraph>
        <Paragraph>Details: {props.details}</Paragraph>
      </PastOrderCardLeftItems>
    </PastOrderWrapper>
  );
};
