import React from "react";

import styled from "styled-components";
import { Navbar } from "./Navbar";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
      <Navbar></Navbar>
    </Container>
  );
};
