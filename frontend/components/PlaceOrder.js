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
`;

// This is a styled component for recieving information via textarea
export const InputDetails = styled.textarea`
  font-size: 1.7rem;
  color: black;
  height: 3rem;
  max-height: 5rem;
  min-height: 3rem;
  width: auto;
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
`;

// This container will hold the preferred time and continue to checkout button
export const BottomContainer = styled.div`
  display: flex;
  bottom: 0;
  min-width: 90%;
  max-width: 1%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
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
`;
