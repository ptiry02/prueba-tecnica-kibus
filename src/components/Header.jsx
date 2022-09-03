import { useLayoutEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import Button from './Button'

const Header = () => {
  const [isMobile, setIsMobile] = useState(true)
  const theme = useTheme()

  useLayoutEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(false)
    }
  })
  return (
    <Container>
      {isMobile ? (
        <Logo src='assets/images/logos/secColor_mobileLogo.png' alt='logo' />
      ) : (
        <Logo src='assets/images/logos/secColor_logo.png' alt='logo' />
      )}
      <Wrapper>
        <ImgContainer>
          <img style={{ width: '100%' }} src='assets/images/header_image.png' alt='header-image' />
        </ImgContainer>
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
      </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 1280px;
`

const Logo = styled.img`
  margin: 25px 6.5%;
  width: 72px;
  @media (${({ theme }) => theme.devices.laptop}) {
    width: 120px;
    margin: 68px 3%;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6.5% 150px;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 1280px;
  @media (${({ theme }) => theme.devices.laptop}) {
    padding: 0 3% 150px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  text-align: center;
  @media (${({ theme }) => theme.devices.tablet}) {
    width: 70%;
  }
  @media (${({ theme }) => theme.devices.laptop}) {
    width: 40%;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (${({ theme }) => theme.devices.laptop}) {
    width: 60%;
  }
`
const Title = styled.h1`
  margin: 16px 0 8px;
  ${({ theme }) => theme.text.mobile.title}
  > span {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (${({ theme }) => theme.devices.laptop}) {
    ${({ theme }) => theme.text.desktop.title}
    font-size: 58px;
  }
  @media (${({ theme }) => theme.devices.desktop}) {
    ${({ theme }) => theme.text.desktop.title}
  }
`
const Description = styled.p`
  ${({ theme }) => theme.text.mobile.body}
  color: ${({ theme }) => theme.colors.grey};
  @media (${({ theme }) => theme.devices.laptop}) {
    ${({ theme }) => theme.text.desktop.body}
    color: ${({ theme }) => theme.colors.grey};
  }
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  margin-top: 40px;
  @media (${({ theme }) => theme.devices.laptop}) {
    flex-direction: row;
    column-gap: 20px;
  }
`
