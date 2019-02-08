import { createGlobalStyle } from 'styled-components';
import { normalize, fontFace, rem, transparentize } from 'polished';
import { colors, fontWeight, sizes, gap } from '../helpers/vars';

export default createGlobalStyle`
  /* Normalize */
  ${normalize()}
  
  /* Init Fonts */
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

  /* Reset Defaults */
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
  }
  
  html,
  body {
    height: 100%;
    font-weight: ${fontWeight.regular};
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
    margin: 0 auto;
    overflow: hidden;
    
    @media (min-width: 376px) {
      margin: ${rem(gap.medium)} auto;
      box-shadow: 0 ${rem(gap.pico)} ${rem(gap.regular)} ${rem(
  gap.pico
)} ${transparentize(0.7, colors.lightGray)};
    }
  }
  
  b,
  strong {
    font-weight: ${fontWeight.bold};
  }
`;
