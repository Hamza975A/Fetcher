import styled from "styled-components";
import React from "react";
import { ColumnsContainer, Paragraph } from "./GlobalComponents";
import { PackageDetails } from "./PlaceOrder";

export const PastOrderWrapper = styled.div`
  padding-left: 25px;
  display: flex;
  background: #4f4f4f;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px #4f4f4f;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
`;

export const PastOrderCardLeftItems = styled.div`
  flex-direction: column;
  align-self: center;
  font-size: 30px;
  gap: 60px;
  padding: 25px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1rem;
    font-size: 1.1rem;
  }
`;

export const OrderCard = ({
  ordernum,
  driver,
  pickuplocations,
  dropofflocation,
  parcelsize,
  deliveryfee,
  tips,
  total,
  details,
  priority,
  time,
  preferredTime,
}) => {
  return (
    <PastOrderWrapper>
      <PastOrderCardLeftItems>
        <Paragraph>Order Number: {ordernum}</Paragraph>
        <Paragraph>Drop-off Location: {dropofflocation}</Paragraph>
        <Paragraph>Total: $ {total}</Paragraph>
        <Paragraph>Details: {details}</Paragraph>
        <Paragraph>Priority: {priority}</Paragraph>
        <Paragraph>Time: {time}</Paragraph>
        <Paragraph>Preferred Time of Delivery: {preferredTime}</Paragraph>
        <br />
        <Paragraph>Pickup Locations and Sizes</Paragraph>
        {pickuplocations.map((location, index) => {
          return (
            <ColumnsContainer key={index}>
              <PackageDetails style={{ background: "white" }}>
                {location.Address.formatted_address}
              </PackageDetails>
              <PackageDetails style={{ background: "white" }}>
                {location.Size}
              </PackageDetails>
            </ColumnsContainer>
          );
        })}
      </PastOrderCardLeftItems>
    </PastOrderWrapper>
  );
};
