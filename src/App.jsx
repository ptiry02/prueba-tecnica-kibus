import styled from 'styled-components'

const App = () => {
  return <Title>HELLO!!!</Title>
}

export default App

const Title = styled.h1`
  ${({ theme }) => theme.text.mobile.h1}
  @media (${({ theme }) => theme.devices.desktop}) {
    ${({ theme }) => theme.text.desktop.h1}
  }
`
