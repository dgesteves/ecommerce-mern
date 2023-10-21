import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    z-index: 1;
    position: relative;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    background-color:#18181B;
    color: #ffffff;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;
