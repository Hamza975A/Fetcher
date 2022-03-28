import styled from "styled-components";
import React from "react";
import { ColumnsContainer, Paragraph } from "./GlobalComponents";
import { PackageDetailsContainer } from "./PlaceOrder";

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
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
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
              <PackageDetailsContainer style={{ background: "white" }}>
                {location.Address.formatted_address}
              </PackageDetailsContainer>
              <PackageDetailsContainer style={{ background: "white" }}>
                {location.Size}
              </PackageDetailsContainer>
            </ColumnsContainer>
          );
        })}
      </PastOrderCardLeftItems>
    </PastOrderWrapper>
  );
};

export const OrderReviewCardWrapper = styled.div`
  display: flex;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  background-color: #ffffff;
  flex-direction: column;
  padding: 2.6rem 2rem 1.6rem 2rem;
  width: fit-content;

  border-radius: 5px;
  

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const HorizontalJustifyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 35rem;
`;

/**
 * 
 */
class PackageInfo extends React.Component {
  state = {
    left: 0,
    top: 0
  }
  /**
   * 
   */
  componentDidMount() {
    document.addEventListener('mousemove', (e) => {
      this.setState({ left: e.pageX, top: e.pageY });
    });
  }
  /**
   * @return {component}
   */
  render() {
    return (
      <PackageInfoView style={{ display: this.props.shown ? "flex" : "none", left: this.state.left, top: this.state.top }}>
        {this.props.children}
      </PackageInfoView>

    )
  }
}

/**
 * 
 */
class PackageDisplay extends React.Component {
  state = {
    showChild: false
  }
  /**
   * 
   */

  showDetails = () => {
    this.setState({ showChild: true });
  }
  hideDetails = () => {
    this.setState({ showChild: false });
  }
  /**
   * @return {component}
   */
  render() {
    return (
      <HorizontalJustifyBox onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails} >
        {this.props.children}
        <PackageInfo shown={this.state.showChild}>{this.props.details}</PackageInfo>
      </HorizontalJustifyBox>

    )
  }
}

export default PackageInfo;

export const PackageInfoView = styled.div`
  display:flex;
  background-color:#eeeeee;
  position:absolute;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  flex-direction:column;
  padding: 1rem;
  border-radius: 6px;
  z-index: 1001;
`;

export const InnerDetailsDisplay = (props) => {
  let extraDetails;
  if (props.details) {
    extraDetails = <p>{props.details}</p>
  }
  else {
    extraDetails = <p>None</p>
  }
  return (
    <div>
      <h4>Pickup Instructions</h4>
      <p>{props.importantDetails}</p>
      <br />
      <h4>Extra Details</h4>
      {extraDetails}
    </div>
  )
}

export const InnerDropoffDisplay = (props) => {
  const instructions = props.dropoffInstructions ? props.dropoffInstructions : "None"
  return (
    <div>
      <h4>Drop-off Instructions</h4>
      <p>{instructions}</p>
    </div>
  )
}

export const TimeDisplayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 0.3rem;
  border-radius: 5px;
`;

export const SimpleVerticalBox = styled.div`
  display:flex;
  flex-direction:column;
  row-gap: 10px;
`

export const VerticalJustifyBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  min-height: 100%;
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

export const HighPriorityLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e0da8;
  padding: 0.3rem;
  border-radius: 6px;
  color: #ffffff;
  width: fit-content;
`;
export const MediumPriorityLabelWrapper = styled(HighPriorityLabelWrapper)`
  background-color: #483dad;
`;
export const LowPriorityLabelWrapper = styled(HighPriorityLabelWrapper)`
  background-color: #5f54c4;
`

export const HighPriorityLabel = () => {
  return <HighPriorityLabelWrapper> High Priority </HighPriorityLabelWrapper>;
};

export const MediumPriorityLabel = () => {
  return <MediumPriorityLabelWrapper> Medium Priority </MediumPriorityLabelWrapper>;
};

export const LowPriorityLabel = () => {
  return <LowPriorityLabelWrapper> Low Priority </LowPriorityLabelWrapper>;
};

export const DeliveredTimestamp = (props) => {
  return props.timeDelivered ? <p>Delivered {props.timeDelivered.replace(",", " at")}</p> : null
}
export const GetPriorityLabel = (priority) => {
  let priorityLabel;
  switch (String(priority)) {
    case "Low":
      priorityLabel = LowPriorityLabel();
      break;
    case "Medium":
      priorityLabel = MediumPriorityLabel();
      break;
    case "High":
      priorityLabel = HighPriorityLabel();
      break;
    default:
      break;
  }
  return priorityLabel;
}
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
    <PackageDisplay details={<InnerDetailsDisplay details={props.details} importantDetails={props.importantDetails} />}>
      <p>{props.address}</p>
      {sizeIcon}
    </PackageDisplay>
  );
};
export const OrderReviewCard = (props) => {
  return (
    <OrderReviewCardWrapper>
      <VerticalJustifyBox>
        <SimpleVerticalBox>
          <HorizontalJustifyBox>
            <h2>Your Order</h2>
            <TimeDisplay start={props.startTime} end={props.endTime} />
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
                  priority={Details.priority}
                  details={Details}
                  importantDetails={ImportantDetails}
                />
              );
            })}
          </PickupAddressesContainer>
          <VerticallyPaddedContainer>
            <hr />
            <h4>Destination</h4>
            <hr />
          </VerticallyPaddedContainer>
          <PackageDisplay details={<InnerDropoffDisplay dropoffInstructions={props.dropoffInstructions} />}>
            <p>{props.destination}</p>
          </PackageDisplay>

          <VerticallyPaddedContainer>
            <hr />
            <h4>Details</h4>
            <hr />
          </VerticallyPaddedContainer>
          {GetPriorityLabel(props.priority)}
          <p>Placed {props.timePlaced.replace(",", " at")}</p>
          <DeliveredTimestamp timeDelivered = {props.timeDelivered}/>

        </SimpleVerticalBox>

        <SimpleVerticalBox>

          <br></br>
          <hr></hr>
          <HorizontalJustifyBox>

            <p>Subtotal</p>
            <p>${parseFloat(props.subTotalCost).toFixed(2)}</p>
          </HorizontalJustifyBox>
          <HorizontalJustifyBox>
            <p>Driver Tip</p>
            <p>${parseFloat(props.tipCost).toFixed(2)}</p>
          </HorizontalJustifyBox>
          <HorizontalJustifyBox>
            <p>Tax</p>
            <p>${parseFloat(props.taxCost).toFixed(2)}</p>
          </HorizontalJustifyBox>
          <HorizontalJustifyBox>
            <h3>Total</h3>
            <h3>${parseFloat(props.totalCost).toFixed(2)}</h3>
          </HorizontalJustifyBox>
        </SimpleVerticalBox>
      </VerticalJustifyBox>
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
