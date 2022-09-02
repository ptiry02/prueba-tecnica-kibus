import styled, { useTheme } from 'styled-components'

import Button from './components/Button'

const App = () => {
  const { colors } = useTheme()
  return (
    <>
      <Title>HELLO!!!</Title>
      <Button text='Reservar ahora' textColor={colors.secondary} arrow />
    </>
  )
}

export default App

const Title = styled.h1`
  ${({ theme }) => theme.text.mobile.h2}
  @media (${({ theme }) => theme.devices.desktop}) {
    ${({ theme }) => theme.text.desktop.h2}
  }
`
