import styled from "styled-components";

// This container will contain the payment information
export const PaymentInfoContainer = styled.div`
  position: relative;
  background: #4f4f4f;
  border: 1px solid black;
  min-height: 10rem;
  box-shadow: 6px 6px 4px #4f4f4f;
  border-radius: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
  }
`;

// This container will contain the card information (to group the card information together)
export const CardDetailsContainer = styled.div`
  position: relative;
`;

// This is a styled component for receiving the drop-off details via textarea
export const InputDropOffDetails = styled.textarea`
  font-size: 1.7rem;
  color: black;
  max-height: 10rem;
  min-height: 30%;
  width: 100%;
`;
// This is a styled component for receiving payment information via input
export const InputPaymentInformation = styled.input`
  font-size: 1.7rem;
  color: black;
  max-height: 10rem;
  min-height: 10%;
  min-width: 10rem;
  max-width: 100%;
  border-radius: 10px;
`;

// a dropdown container
export const DropDown = styled.div`
  display: inline-block;
  text-align: center;
  text-decoration: none;
`;

// the content for the dropdown
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
`;

// A list to display the content
export const DropDownList = styled.li`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;
