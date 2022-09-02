import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App'
import GlobalStyle from './styles/globalStyles'
import theme from './styles/themes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
