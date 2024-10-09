import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background}; // Light Gray
    color: ${({ theme }) => theme.colors.text}; // Dark Slate
    font-family: 'Arial', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary}; // Calm Blue
  }
`;

export default GlobalStyle;
