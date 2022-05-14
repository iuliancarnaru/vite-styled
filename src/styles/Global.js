import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit
  }

  html {
    box-sizing: border-box;
  }

  body {
    color: #333;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.body}
  }
`;

export default GlobalStyles;
