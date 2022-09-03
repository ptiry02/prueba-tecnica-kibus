import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Charlevoix Pro';
        src: url('assets/fonts/CharlevoixPro-Bold.otf');
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
        display: flex;
        justify-content: center;
    }
    #root {
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyle
