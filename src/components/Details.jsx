import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from './Button'
import Recipes from './Recipes'

const Details = () => {
  const theme = useTheme()
  return (
    <Wrapper>
      <Container>
        <Recipes />
      </Container>
      <DetailsInfo>
        <SlideBackground>
          <Swiper
            pagination={{
              clickable: true
            }}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={7}
          >
            <SwiperSlide>
              <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
            </SwiperSlide>
          </Swiper>
        </SlideBackground>
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
const SlideBackground = styled.div`
  width: 100%;
  background-image: url('assets/images/Ellipse_8.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 25px 0;
`
const Img = styled.img`
  width: 100%;
  border-radius: 15px;
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
`
const ProductImg = styled.img`
  padding-top: 100px;
  width: 100%;
`
