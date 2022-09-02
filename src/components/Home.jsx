import { useLayoutEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import Button from './Button'

const Home = () => {
  const [isMobile, setIsMobile] = useState(true)
  const theme = useTheme()

  useLayoutEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(false)
    }
  }, [])
  return (
    <Header>
      {isMobile ? (
        <img src='assets/images/logos/secColor_mobileLogo.png' alt='logo' />
      ) : (
        <img style={{ marginTop: '68px' }} src='assets/images/logos/secColor_logo.png' alt='logo' />
      )}
      <div>
        <Img src='assets/images/header_image.png' alt='header-image' />
      </div>
      <Content>
        <Title>
          Alimentar bien a tu perro es más fácil que nunca<span>.</span>
        </Title>
        <Description>
          La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a tu compañero comida sana, rica y recién
          cocinada de una forma fácil y cómoda
        </Description>
        <ButtonGroup>
          <Button text='Reserva Ahora' textColor={theme.colors.white} bgColor={theme.colors.primary} />
          <Button text='Quiero Saber Más' textColor={theme.colors.primary} arrow />
        </ButtonGroup>
      </Content>
    </Header>
  )
}

export default Home

const Header = styled.div`
  width: 100%;
  padding: 25px 6.5% 200px;
`
const Img = styled.img`
  width: 100%;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  margin: 16px 0 8px;
  ${({ theme }) => theme.text.mobile.title}
  > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`
const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  margin-top: 40px;
`
