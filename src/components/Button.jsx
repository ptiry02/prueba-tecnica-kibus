import { IoChevronForwardCircleOutline } from 'react-icons/io5/index'
import styled from 'styled-components'

const Button = ({ text, bgColor = 'none', textColor, arrow = false }) => {
  return (
    <Btn bgColor={bgColor} textColor={textColor}>
      {text}
      {arrow && <IoChevronForwardCircleOutline size={18} />}
    </Btn>
  )
}

export default Button

const Btn = styled.div.attrs(({ bgColor, textColor }) => ({
  bgColor,
  textColor
}))`
  ${({ theme }) => theme.text.button}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  column-gap: 16px;
  border-radius: 28px;
  background: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border: 1px solid ${({ textColor }) => textColor};
  :hover {
    cursor: pointer;
    transition: all 300ms ease-in;
    background: ${({ bgColor, theme }) =>
      bgColor === theme.colors.primary ? theme.colors.secondary : theme.colors.primary};
    color: ${({ bgColor, theme }) => (bgColor === 'none' ? theme.colors.white : theme.colors.primary)};
  }
`
