import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import theme from 'theme'

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
    color: ${theme.black};
    font-family: 'Gilroy', 'Arial', sans-serif;
    font-weight: normal;
    min-width: 320px;
  }

  @font-face {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: normal;
    src: url('assets/fonts/Gilroy-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: bold;
    src: url('assets/fonts/Gilroy-ExtraBold.otf') format('opentype');
  }
`

export default GlobalStyle
