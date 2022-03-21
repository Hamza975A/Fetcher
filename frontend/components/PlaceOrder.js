import styled from "styled-components";

// This component will hold the two add package buttons
export const AddItemsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

// A styled component for adding items buttons
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
export const PackageDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: left;
  flex-wrap: wrap;
  position: relative;
  background: #4f4f4f;
  border: 1px solid black;
  min-height: 6rem;
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

// This container will hold a decription and one more component(a component that recieves information)
export const DetailsBox = styled.div`
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
    font-size: 1rem;
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
  min-width: 10rem;
  max-width: 40rem; ;
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

// This container will hold the preferred time and continue to checkout button
export const BottomContainer = styled.footer`
  display: flex;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
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
export const Dropbtn = styled.div`
  display: inline-block;
  text-align: center;
  text-decoration: none;
`;

// a container to hold the content for the drowndown
export const DropDownContent = styled.a`
  display: none;
  padding: 1rem 1rem;
  position: absolute;
  color:black;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    margin: 1rem 0rem;
    width: 100%;
  }
`;

// A list to display the content
export const DropDownLi = styled.li`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;
// A styled component for adding items buttons
export const DontMoveToCheckout = styled.a`
  padding: 1rem 2rem;
  margin-bottom: 5rem;
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
