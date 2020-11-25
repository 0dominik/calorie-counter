import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
  }
`;
