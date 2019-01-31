import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { colors } from '../helpers/colors';
import { fontSizes, breakpoints } from '../helpers/variables';

export const themes = {
  default: {
    colors,
    fontSizes,
    breakpoints,
    primaryFont: 'sans, sans-serif',
  }
};

export default createGlobalStyle`
  /* Normalize */
  ${normalize()}

  /* Reset Defaults */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    background-color: ${colors.black};
    font-size: 10px;
  }
  
  body {
    color: ${colors.white};
  }
  
  html,
  body {
    height: 100%;
    line-height: 1;
    font-family: ${themes.default.primaryFont};
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
  
  strong {
    font-weight: 800;
  }
`;
