import { useLayoutEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
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
        <CustomCarousel
          animation='slide'
          duration={500}
          navButtonsAlwaysVisible
          indicators={false}
          cycleNavigation={false}
          autoPlay={false}
          height={517.5}
        >
          <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
          <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
          <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
          <Img src='assets/images/043-kibus.jpeg' alt='kibus' />
        </CustomCarousel>
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
  padding: 25px 0;
`
const CustomCarousel = styled(Carousel)`
  width: 680px;
`
const Img = styled.img`
  width: 100%;
  border-radius: 15px;
  @media (${({ theme }) => theme.devices.tablet}) {
    height: 517.5px;
    width: 680px;
  }
`
