import styled from 'styled-components'

import Recipes from './Recipes'

const Details = () => {
  return (
    <Testing>
      <Container>
        <Recipes />
      </Container>
    </Testing>
  )
}

export default Details

const Testing = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.secBack};
`
const Container = styled.div`
  overflow-x: auto;
  padding: 40px 6.5% 40px 6.5%;
  transform: translateY(-120px);
`
