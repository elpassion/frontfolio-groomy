import { createGlobalStyle, css } from 'styled-components';
import { normalize, fontFace, rem, transparentize } from 'polished';

import { colors, fontWeights, sizes, gaps } from './vars';

const Normalize = css`
  ${normalize()}
`;

const InitFonts = css`
${fontFace({
  fontFamily: 'Gilroy',
  fileFormats: ['woff'],
  fontWeight: 500,
  fontStyle: 'normal',
  fontFilePath: process.env.PUBLIC_URL + '/fonts/Gilroy-Medium',
  fontDisplay: 'swap',
})}

${fontFace({
  fontFamily: 'Gilroy',
  fileFormats: ['woff'],
  fontWeight: 700,
  fontStyle: 'normal',
  fontFilePath: process.env.PUBLIC_URL + '/fonts/Gilroy-Bold',
  fontDisplay: 'swap',
})}

${fontFace({
  fontFamily: 'Gilroy',
  fileFormats: ['woff'],
  fontWeight: 800,
  fontStyle: 'normal',
  fontFilePath: process.env.PUBLIC_URL + '/fonts/Gilroy-ExtraBold',
  fontDisplay: 'swap',
})}
`;

export default createGlobalStyle`
  ${Normalize};
  ${InitFonts};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    background-color: ${colors.white};
  }
  
  body {
    color: ${colors.darkGray};
    
    @media (min-width: ${sizes.deviceWidth}) {
      padding:  ${rem(gaps.medium)} 0;
    }
  }
  
  html,
  body {
    height: 100%;
    font-weight: ${fontWeights.regular};
    font-family: 'Gilroy', sans-serif;
    line-height: 1.2;
  }
  
  p,
  span,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  
  ul,
  li {
    list-style: none;
  }
  
  .root {
    position: relative;
    width: 100%;
    max-width: ${sizes.deviceWidth};
    height: 100%;
    max-height: ${sizes.deviceHeight};
    margin: 0 auto;
    overflow: auto;
    
    @media (min-width: ${sizes.deviceWidth}) {
      box-shadow: 0 ${rem(gaps.pico)} ${rem(gaps.regular)} ${rem(
  gaps.pico
)} ${transparentize(0.7, colors.lightGray)};
    }
  }
  
  b,
  strong {
    font-weight: ${fontWeights.bold};
  }
`;
