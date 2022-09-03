import styled, { useTheme } from 'styled-components'

import Button from './Button'
import Carrousell from './Carrousell'
import { CleanIcon, DevicesIcon, FoodIcon, HistoryIcon, ProgramableIcon, WaterIcon } from './icons/Icons'
import Recipes from './Recipes'

const Details = () => {
  const theme = useTheme()
  return (
    <Wrapper>
      <Container>
        <Recipes />
      </Container>
      <DetailsInfo>
        <Carrousell />
        <Title>Mejor para ellos, más fácil y cómodo para ti</Title>
        <Paragraph>
          Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta sana y natural a tu perro de forma cómoda y
          rápida. Nuestro dispositivo cocina automáticamente la cantidad exacta en cada comida y hasta lo puedes
          programar a distancia a través de la App. Tu perro aprovechará comida de calidad casera, con el mínimo
          esfuerzo.
        </Paragraph>
        <ButtonGroup>
          <Button text='Reserva Ahora' textColor={theme.colors.white} bgColor={theme.colors.primary} />
          <Button text='Quiero Saber Más' textColor={theme.colors.primary} arrow />
        </ButtonGroup>
      </DetailsInfo>
      <ProductInfo>
        <ProductImg src='assets/images/product_display_mobile.png' alt='kibuco-product' />
        <IconsGrid>
          <IconGroup>
            <ProgramableIcon />
            <Text>Programmable 24h</Text>
          </IconGroup>
          <IconGroup>
            <WaterIcon />
            <Text>Agua siempre disponible</Text>
          </IconGroup>
          <IconGroup>
            <FoodIcon />
            <Text>Cantidad personalizable</Text>
          </IconGroup>
          <IconGroup>
            <HistoryIcon />
            <Text>Historial de las comidas</Text>
          </IconGroup>
          <IconGroup>
            <CleanIcon />
            <Text>Fácil de usar y lavar</Text>
          </IconGroup>
          <IconGroup>
            <DevicesIcon />
            <Text>App para iOS y Android</Text>
          </IconGroup>
        </IconsGrid>
      </ProductInfo>
    </Wrapper>
  )
}

export default Details

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secBack};
  background-image: url('assets/images/bgIcons.png');
  background-size: contain;
  background-position: center;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  position: relative;
  top: -140px;
  overflow-x: auto;
  padding: 30px 6.5% 60px 6.5%;
`
const DetailsInfo = styled.div`
  position: relative;
  top: -100px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  ${({ theme }) => theme.text.mobile.h1}
  padding: 25px 6.5% 14px;
`
const Paragraph = styled.p`
  ${({ theme }) => theme.text.mobile.body}
  padding: 0 6.5%;
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  margin-top: 40px;
  padding: 0 6.5%;
`
const ProductInfo = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${({ theme }) => theme.devices.tablet}) {
    flex-direction: row-reverse;
  }
`
const ProductImg = styled.img`
  padding-top: 100px;
  width: 100%;
  @media (${({ theme }) => theme.devices.tablet}) {
    width: 50%;
  }
`
const IconsGrid = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(158px, 1fr));
  column-gap: 16px;
  row-gap: 95px;
  margin: 100px 0;
  padding: 0 4.5%;
  @media (${({ theme }) => theme.devices.tablet}) {
    row-gap: 30px;
    padding: 0;
  }
`
const IconGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  width: 158px;
  text-align: center;
`
const Text = styled.h2`
  ${({ theme }) => theme.text.mobile.h2}
`
