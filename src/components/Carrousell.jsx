import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carrousell = () => {
  return (
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
  )
}

export default Carrousell

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
