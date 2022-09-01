const theme = {
  colors: {
    primary: '#EE7333',
    primGradient: 'linear-gradient(180deg, #FCA070 0%, #F0651C 80.82%)',
    secondary: '#1D1D11',
    secGradient: 'linear-gradient(180deg, #515151 0%, #1D1D11 49.32%)',
    secBack: '#FEF9F7',
    lightGrey: '#F9F9F9',
    white: '#FFFFFF'
  },
  devices: {
    desktop: 'min-width: 1180px',
    tablet: 'min-width: 768px',
    mobile: 'min-width: 375px'
  },
  text: {
    desktop: {
      title: `
        font-family: 'Charlevoix Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 72px;
    `,
      h1: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 43px;
    `,
      h2: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;
    `,
      h3: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: rgba(0, 0, 0, 0.55);
    `,
      body: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.6);
    `
    },
    mobile: {
      title: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 32px;
    `,
      h1: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
    `,
      h2: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
    `,
      h3: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        color: rgba(0, 0, 0, 0.55);
    `,
      body: `
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.6);
    `
    }
  }
}
export default theme
