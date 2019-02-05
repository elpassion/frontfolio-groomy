import { createGlobalStyle } from 'styled-components';
import { normalize, fontFace } from 'polished';

import { colors, fontWeight } from '../helpers/vars';

export default createGlobalStyle`
  /* Normalize */
  ${normalize()}
  
  /* Init Fonts */
  ${fontFace({
    fontFamily: 'Gilroy',
    fileFormats: ['woff'],
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFilePath: process.env.PUBLIC_URL + '/fonts/Gilroy-Regular',
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
    line-height: 1.4;
    font-family: 'Gilroy', sans-serif;
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
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
  }
  
  b,
  strong {
    font-weight: ${fontWeight.bold};
  }
`;
