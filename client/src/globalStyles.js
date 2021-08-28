import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
    line-height: 1.5;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 0;
  }

  body {
    color: #fff;
    font-family: 'Gilroy', 'Arial', sans-serif;
    min-width: 320px;
  }
  
  @font-face {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: normal;
    src: url('assets/fonts/Gilroy-Light.otf') format('opentype');
  }
  @font-face {
    font-family: 'Gilroy-ExtraBold';
    font-style: normal;
    font-weight: normal;
    src: url('assets/fonts/Gilroy-ExtraBold.otf') format('opentype');
  }
`;

export default GlobalStyle;
