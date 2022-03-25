import styled from "styled-components";

// This component will hold the two add package buttons
export const AddItemsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;
// A styled button for adding items
export const AddItemsButton = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  border-radius: 20px;
  background-color: #ff9a42;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    margin: 1rem 0rem;
    width: 100%;
  }
`;

// This container will contain the packages information
export const PackageDetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: left;
  flex-wrap: wrap;
  position: relative;
  background: #4f4f4f;
  border: 1px solid black;
  left: 0;
  box-shadow: 6px 6px 4px #4f4f4f;
  border-radius: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
// This container will hold a decription and one more component
export const IndividualDetailsContainer = styled.div`
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
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

// This container will hold all of the users checkout information
export const CheckoutInfoContainer = styled.div`
  line-height: 200%;
  padding: 1rem 1rem;
  text-decoration: none;
  font-size: 1.7rem;
  background-color: white;
  height: 100%;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1rem;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

// This is a styled component for recieving information via textarea
export const InputDetails = styled.textarea`
  font-size: 1.7rem;
  color: black;
  height: 3rem;
  max-height: 5rem;
  min-height: 3rem;
  width: 100%;
  max-width: 40rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: 0.5rem;
  }
`;

// This is a styled component for deleting a package
export const RemoveItemButton = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  border-radius: 360px;
  height: 3rem;
  width: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 2rem;
    width: 2rem;
    font-size: 1rem;
    margin-top: 0;
    border-radius: 100px;
  }
`;
// This container will stay below all the other content
export const BottomContainer = styled.footer`
  display: flex;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
`;

// A styled component for the moving pages
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
// A styled component for a button that dosnt allow the user to move pages without using autocorrect
export const DontMoveToCheckout = styled.button`
  padding: 1rem 2rem;
  background-color: #ff9a42;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  border-radius: 20px;
`;
// A styled component for recieving a choice from the user
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
  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 0.5rem;
    min-width: 0.5rem;
  }
`;

// a dropdown container
export const ImportantDetailsDropDownButton = styled.button`
  margin-left: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: blue;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;
  border-radius: 100px;
  height: 2rem;
  width: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 2rem;
    width: 2rem;
    font-size: 1rem;
    margin-top: 0;
    border-radius: 100px;
  }
`;
// the content for the drowndown
export const DropDownContent = styled.a`
  display: none;
  padding: 1rem 1rem;
  position: absolute;
  color: black;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 1;
  z-index: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    margin: 1rem 0rem;
    width: 100%;
  }
`;

// A list to display the content
export const DropDownList = styled.li`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;
