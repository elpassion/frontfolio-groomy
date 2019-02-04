import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { colors, fontWeight } from '../helpers/vars';

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
    background-color: ${colors.lightBackground};
  }
  
  body {
    color: ${colors.darkGray};
  }
  
  html,
  body {
    height: 100%;
    line-height: 1.4;
    font-family: 'Khula, sans';
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
