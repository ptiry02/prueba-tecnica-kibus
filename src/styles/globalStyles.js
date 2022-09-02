import { createGlobalStyle } from 'styled-components'

import CharlevoixPro from './fonts/CharlevoixPro-FullFamily-Free/CharlevoixPro-Bold.otf'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Charlevoix Pro';
        src: url(${CharlevoixPro});
    }
    html {
        box-sizing: border-box;
    }
    * {
        font-family: 'Montserrat';
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        ::before, ::after {
            box-sizing: inherit;
        }

    }
    body {
        width: 100vw;
    }
`
export default GlobalStyle
