import styled from "styled-components";

export const AddItemsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: ${(props) => props.top || "6.3rem"};
`;

export const AddItemsButton = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  border-radius: 20px;
`;

export const PackageDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: left;
  flex-wrap: wrap;
  position: relative;
  background: #ffeee1;
  border: 1px solid black;
  max-height: 30rem;
  min-height: 6rem;
  left: 0;
  right: 0;
  top: ${(props) => props.top || "6rem"};
`;
export const DetailsBox = styled.div`
  padding: 1rem 3rem;
  margin: 0.8rem;
  color: Black;
  text-decoration: none;
  font-weight: 800;
  background: #c4c4c4;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;
export const InputDetails = styled.input`
  font-size: 1.7rem;
  color: black;
`;

export const RemoveItemButton = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  border-radius: 360px;
  height: 1.5rem;
`;

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
