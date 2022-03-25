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

export const CurrentOrdersItemsContainer = styled.div`
  display:flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`
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

export const PickupAddressesContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const OrderReviewCardWrapper = styled.div`
  display: flex;
  /* width: 60%; */
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  background-color: #ffffff;
  flex-direction: column;
  padding: 2.6rem 2rem 1.6rem 2rem;
  width: fit-content;
  /* height: fit-content; */
  border-radius: 5px;
  row-gap: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction:column;
  }
`;

export const HorizontalJustifyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 35rem;
`;


export const TimeDisplayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 0.3rem;
  border-radius: 5px;

`;

export const VerticallyPaddedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  row-gap: 0.5rem;
`;

export const LargePackageIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c70039;
  padding: 0.3rem;
  border-radius: 6px;
  color: #ffffff;
  width: 2.5rem;
  height: 2.5rem;
`;
export const MediumPackageIconWrapper = styled(LargePackageIconWrapper)`
  background-color: #ff5733;
`;
export const SmallPackageIconWrapper = styled(LargePackageIconWrapper)`
  background-color: #2ca076;
`;
export const LargePackageIcon = () => {
  return <LargePackageIconWrapper> L </LargePackageIconWrapper>;
};
export const MediumPackageIcon = () => {
  return <MediumPackageIconWrapper> M </MediumPackageIconWrapper>;
};
export const SmallPackageIcon = () => {
  return <SmallPackageIconWrapper> S </SmallPackageIconWrapper>;
};

export const PickupAddressDisplay = (props) => {
  let sizeIcon;
  switch (String(props.size)) {
    case "Small":
      sizeIcon = SmallPackageIcon();
      break;
    case "Medium":
      sizeIcon = MediumPackageIcon();
      break;
    case "Large":
      sizeIcon = LargePackageIcon();
      break;
    default:
      break;
  }
  return (
    <HorizontalJustifyBox>
      <p>{props.address}</p>
      {sizeIcon}
    </HorizontalJustifyBox>
  );
};
export const OrderReviewCard = (props) => {
  return (
    <OrderReviewCardWrapper>
      <HorizontalJustifyBox>
        <h2>Your Order</h2>
        <TimeDisplay
          start={props.startTime}
          end={props.endTime}
        />
      </HorizontalJustifyBox>

      <VerticallyPaddedContainer>
        <hr />
        <h4>Pickups</h4>
        <hr />
      </VerticallyPaddedContainer>

      <PickupAddressesContainer>
        {props.pickuplocations.map((location, index) => {
          const { Size, Details, ImportantDetails, Address } = location;
          return (
            <PickupAddressDisplay
              key={index}
              address={
                Address.address_components[0].long_name +
                " " +
                Address.address_components[1].long_name
              }
              size={Size}
            />
          );
        })}
      </PickupAddressesContainer>
      <VerticallyPaddedContainer>
        <hr />
        <h4>Destination</h4>
        <hr />
      </VerticallyPaddedContainer>
      <p>{props.destination}</p>
    </OrderReviewCardWrapper>
  );
};
export const TimeDisplay = ({ start, end }) => {
  return (
    <TimeDisplayWrapper>
      <p style={{ fontSize: "22px" }}>
        🕒 {start} - {end}
      </p>
    </TimeDisplayWrapper>
  );
};
