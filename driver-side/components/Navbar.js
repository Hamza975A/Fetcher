import styled from "styled-components";
import React from "react";

export const MenuLink = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  border-radius: 20px;
  &:hover {
    color: #ff9a42;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #ff9a42;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
export const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Navbar = ({ children }) => {
  return (
    <Nav>
      <Logo href="/">fetcher</Logo>
    </Nav>
  );
};
