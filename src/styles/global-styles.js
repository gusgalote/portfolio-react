import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

    min-height: 100vh;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};

    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.large} 0;
    padding: ${({ theme }) => theme.spacings.large} 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor}
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;

export { GlobalStyles };
