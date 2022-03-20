import styled from "styled-components";

export const DestinationAddressCard = styled.div`
  display: flex;
  width: 60%;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  background-color: #ffffff;
  flex-direction: column;
  padding: 1.6rem 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const CenterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 50px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 9rem 1rem;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  column-gap: 15px;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    column-gap: 5px;
  }
`;
export const SimpleContainer = styled.div``;

export const SpacedContainer = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    row-gap: 10px;
  }
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
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 0;
    font-size: 1rem;
  }
`;

export const Header = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
`;

export const Paragraph = styled.p`
  color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;
