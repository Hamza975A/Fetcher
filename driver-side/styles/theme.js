import { ThemeProvider } from "styled-components";
import React from "react";
import theme from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
