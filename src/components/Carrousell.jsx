import { useLayoutEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carrousell = () => {
  const [isMobile, setIsMobile] = useState(true)

  useLayoutEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(false)
    }
  }, [])
  return (
    <SlideBackground>
      {isMobile ? (
        <Swiper centeredSlides={true} slidesPerView={1.2} spaceBetween={7}>
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
      ) : (
        <Carousel indicators={false} wrap={false} interval={null}>
          <Carousel.Item>
            <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
          </Carousel.Item>
          <Carousel.Item>
            <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
          </Carousel.Item>
          <Carousel.Item>
            <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
          </Carousel.Item>
          <Carousel.Item>
            <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
          </Carousel.Item>
        </Carousel>
      )}
    </SlideBackground>
  )
}

export default Carrousell

const SlideBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url('assets/images/Ellipse_8.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 50px 0;
  .carousel {
    width: 90%;
  }
`
const Img = styled.img`
  width: 100%;
  border-radius: 15px;
`
