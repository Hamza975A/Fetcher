import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { clearStorage } from "../lib/storage-tools";

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
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 200px;
    max-height: 200px;
    font-size: 0.6rem;
    padding: 1rem 1.5rem;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #ff9a42;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding: 0.5rem;
  }
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
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
    padding: 0.5rem 0;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">fetcher</Logo>
      <MenuContainer>
        <Link href="/#aboutus">
          <a>
            <MenuLink>About Us</MenuLink>
          </a>
        </Link>
        <Link href="/#locations">
          <a>
            <MenuLink>Locations</MenuLink>
          </a>
        </Link>
        <Link href="/orders-list">
          <a>
            <MenuLink>Orders</MenuLink>
          </a>
        </Link>
        <Link href="/">
          <a onClick={() => clearStorage()}>
            <MenuLink>Sign Out</MenuLink>
          </a>
        </Link>
      </MenuContainer>
    </Nav>
  );
};
