import { useLayoutEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { recipes } from '../helpers/constants'
import Button from './Button'

const Recipes = () => {
  const [isMobile, setIsMobile] = useState(true)
  const { colors } = useTheme()

  useLayoutEffect(() => {
    if (window.innerWidth >= 1280) {
      setIsMobile(false)
    }
  }, [])
  return (
    <Wrapper>
      {recipes.map((item, index) => (
        <Recipe key={index}>
          <img style={{ width: '90%' }} src={item.img} alt={item.name.mobile} />
          <Name>{isMobile ? item.name.mobile : item.name.desktop}</Name>
          <Descr>{item.description}</Descr>
        </Recipe>
      ))}
      <Recipe>
        <img style={{ width: '90%' }} src='assets/images/pollo.png' alt='' />
        <Button text='Tu Receta' textColor={colors.white} bgColor={colors.buttonGrey} arrow />
        <Descr>Ayúdanos a decidir nuestra nueva receta</Descr>
      </Recipe>
    </Wrapper>
  )
}

export default Recipes

const Wrapper = styled.div`
  width: fit-content;
  height: 398px;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url('assets/images/recipes_background.png');
  box-shadow: 0px 14px 37px 19px rgba(126, 126, 126, 0.04);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  column-gap: 32px;
  @media (${({ theme }) => theme.devices.laptop}) {
    width: 100%;
  }
`
const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 202px;
  text-align: center;
  @media (${({ theme }) => theme.devices.desktop}) {
    width: 270px;
  }
`
const Name = styled.h2`
  ${({ theme }) => theme.text.mobile.h2}
`
const Descr = styled.p`
  ${({ theme }) => theme.text.mobile.body}
  margin-top: 24px;
`
