import styled from "styled-components";

export const CenterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 50px;
`;

export const SpacedContainer = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
`;

export const ContainerImage = styled.div`
  background-image: url("asset/home.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Button = styled.button`
  text-align: center;
  padding: 8px 16px;
  color: black;
  background-color: #ff9a42;
  border: 1px solid;
  border-color: #ff9a42;
  border-radius: 20px;
  font-size: 16px;
  width: 100%;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: black;
    border-color: #ffaf69;
    background-color: #ffaf69;
    cursor: pointer;
  }
`;

export const Header = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

export const SearchBar = styled.input`
  width: 100%;
`;

export const Paragraph = styled.p`
  color: white;
`;
