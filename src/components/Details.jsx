import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

import Recipes from './Recipes'

const Details = () => {
  return (
    <Wrapper>
      <Container>
        <Recipes />
      </Container>

      <SlideBackground>
        <Swiper
          pagination={{
            clickable: true
          }}
          centeredSlides={true}
          slidesPerView={1.2}
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
    </Wrapper>
  )
}

export default Details

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1200px;
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
  position: absolute;
  top: 370px;
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
