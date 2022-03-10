import styled from "styled-components";

// A styled component for the moving pages buttons
export const MovePagesButton = styled.button`
  padding: 1rem 1rem;

  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  border-radius: 20px;
  background-color: #ff9a42;
  max-width: 25%;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 50%;
    font-size: 1.5rem;
    padding: 0.5 0.5;
  }
`;
// This container will hold a description and one more component(a component that displays information)
export const PackageDetailsBox = styled.div`
  padding: 1rem 1rem;
  margin: 0.8rem;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

// This container will hold the move pages buttons
export const BottomContainer = styled.footer`
  display: flex;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
`;

// This container will contain the packages information
export const PackageDetails = styled.div`
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;

  background: #4f4f4f;
  border: 1px solid black;
  min-height: 6rem;

  box-shadow: 6px 6px 4px #4f4f4f;
  border-radius: 10px;
  margin-right: 1rem;
`;
// This container will contain the payment information
export const PaymentContainer = styled.div`
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

// This container will contain the payment information (to group the card information together)
export const CardInfo = styled.div`
  position: relative;
`;

// This container will hold a description and one more component(a component that displays information)
export const DetailsBox = styled.div`
  line-height: 200%;
  padding: 1rem 1rem;
  text-decoration: none;
  font-size: 1.7rem;
  background-color: white;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
`;

// This is a styled component for receiving information via textarea
export const InputDetails = styled.textarea`
  font-size: 1.7rem;
  color: black;
  max-height: 10rem;
  min-height: 30%;
  width: 100%;
`;
// This is a styled component for receiving payment information via input
export const InputPayment = styled.input`
  font-size: 1.7rem;
  color: black;
  max-height: 10rem;
  min-height: 10%;
  min-width: 10rem;
  max-width: 100%;
  border-radius: 10px;
`;

// A styled component for receiving a choice from the user
export const Select = styled.select`
  max-height: 5rem;
  min-height: 3rem;
  min-width: 10rem;
  max-width: 40rem;
  background: white;
  color: black;
  font-size: 1.7rem;
  border: none;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
  }
`;

// a dropdown container
export const Dropbtn = styled.div`
  display: inline-block;
  text-align: center;
  text-decoration: none;
`;

// a container to hold the content for the dropdown
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
`;

// A list to display the content
export const DropDownLi = styled.li`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;
