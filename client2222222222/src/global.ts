import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        line-height: 24px;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 400;
    }

    ol,
    ul {
        list-style: none;
    }
  
    @font-face {
        font-family: 'Inter';
        src: url('./assets/fonts/Inter-Regular.eot');
        src: local('Inter Regular'), local('./assets/fonts/Inter-Regular'),
        url('./assets/fonts/Inter-Regular.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/Inter-Regular.woff2') format('woff2'),
        url('./assets/fonts/Inter-Regular.woff') format('woff'),
        url('./assets/fonts/Inter-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Inter';
        src: url('./assets/fonts/Inter-Medium.eot');
        src: local('Inter Medium'), local('./assets/fonts/Inter-Medium'),
        url('./assets/fonts/Inter-Medium.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/Inter-Medium.woff2') format('woff2'),
        url('./assets/fonts/Inter-Medium.woff') format('woff'),
        url('./assets/fonts/Inter-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Inter';
        src: url('./assets/fonts/Inter-SemiBold.eot');
        src: local('Inter Semi Bold'), local('./assets/fonts/Inter-SemiBold'),
        url('./assets/fonts/Inter-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/Inter-SemiBold.woff2') format('woff2'),
        url('./assets/fonts/Inter-SemiBold.woff') format('woff'),
        url('./assets/fonts/Inter-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Inter';
        src: url('./assets/fonts/Inter-Bold.eot');
        src: local('Inter Bold'), local('./assets/fonts/Inter-Bold'),
        url('./assets/fonts/Inter-Bold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/Inter-Bold.woff2') format('woff2'),
        url('./assets/fonts/Inter-Bold.woff') format('woff'),
        url('./assets/fonts/Inter-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
`

export default GlobalStyle
