import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <img src='assets/images/logos/footer-logo.png' alt='k-logo' />
          <h2>Sobre KIBUS</h2>
          <p>
            Lorem ipsum dolor sit amet, to create consectetur adipiscing elit, sed do the eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </Section>
        <Section>
          <h2 style={{ paddingBottom: '6px' }}>Políticas</h2>
          <p>Políticas de Privacidad</p>
          <p>Condiciones de uso</p>
          <p>Cookies</p>
        </Section>
        <Contact>
          <Section>
            <h2>Contáctenos</h2>
            <p>Location</p>
            <p>Teléfono</p>
          </Section>
          <Socials>
            <FiFacebook size={23} />
            <FiInstagram size={23} />
            <FiYoutube size={23} />
          </Socials>
        </Contact>
        <Section>
          <h2>Métods de pago</h2>
          <Methods>
            <Card>
              <img src='assets/images/logos/mc_logo.png' alt='master-card' />
            </Card>
            <Card>
              <img src='assets/images/logos/visa_logo.png' alt='master-card' />
            </Card>
            <Card>
              <img src='assets/images/logos/applepay_logo.png' alt='master-card' />
            </Card>
            <Card>
              <img src='assets/images/logos/gpay_logo.png' alt='master-card' />
            </Card>
          </Methods>
        </Section>
      </Container>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 6.5%;
  color: ${({ theme }) => theme.colors.white};
  row-gap: 36px;
  padding-bottom: 200px;
  align-self: center;
  max-width: 1280px;
  @media (${({ theme }) => theme.devices.laptop}) {
    flex-direction: row;
    column-gap: 5%;
  }
`
const Section = styled.div`
  h2 {
    ${({ theme }) => theme.text.mobile.h2}
    padding-bottom: 12px;
  }
  p {
    ${({ theme }) => theme.text.mobile.body}
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 12px;
  }
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  @media (${({ theme }) => theme.devices.laptop}) {
    row-gap: 0;
  }
`
const Socials = styled.div`
  display: flex;
  column-gap: 40px;
  align-items: center;
`
const Methods = styled.div`
  display: flex;
  column-gap: 8px;
`
const Card = styled.div`
  width: 58px;
  height: 36px;
  border: 0.8px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
