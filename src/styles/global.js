import { createGlobalStyle, css } from 'styled-components';
import { normalize, fontFace } from 'polished';

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
  fontDisplay: 'block',
})}

${fontFace({
  fontFamily: 'Gilroy',
  fileFormats: ['woff'],
  fontWeight: 700,
  fontStyle: 'normal',
  fontFilePath: process.env.PUBLIC_URL + '/fonts/Gilroy-Bold',
  fontDisplay: 'block',
})}

${fontFace({
  fontFamily: 'Gilroy',
  fileFormats: ['woff'],
  fontWeight: 800,
  fontStyle: 'normal',
  fontFilePath: process.env.PUBLIC_URL + '/fonts/Gilroy-ExtraBold',
  fontDisplay: 'block',
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
      padding:  ${gaps.large} 0;
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
  
  #root {
    position: relative;
    width: 100%;
    max-width: ${sizes.deviceWidth};
    height: 100%;
    max-height: ${sizes.deviceHeight};
    margin: 0 auto;
    overflow: auto;
    
    @media (min-width: ${sizes.deviceWidth}) {
      box-shadow: 0 ${gaps.xsmall} ${gaps.medium} ${gaps.xsmall} ${
  colors.lightGrayTransparent
};
    }
  }
  
  b,
  strong {
    font-weight: ${fontWeights.bold};
  }
`;
