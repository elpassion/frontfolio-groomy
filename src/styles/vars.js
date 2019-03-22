import { transparentize } from 'polished';

export const colors = {
  white: '#fff',
  almostWhite: '#f2f2f2',
  lightBackground: '#fcfbfc',
  lightGray: '#bababa',
  mediumGray: '#9b9b9b',
  darkGray: '#5a5a5a',
  grayTransparent: transparentize(0.8, '#202020'),
  lightGrayTransparent: transparentize(0.7, '#bababa'),
  darkerGray: '#504d5d',
  primaryViolet: '#9963ff',
  primaryVioletAccent: '#8955ec',
  granite: '#3a3a57',
  darkGranite: '#31314d',
  primaryBlack: '#202020',
  black: '#000',
};

export const gradients = {
  gray: `linear-gradient(to right bottom, ${
    colors.grayTransparent
  }, transparent 25%)`,
};

export const fontSizes = {
  xsmall: '12px',
  small: '14px',
  regular: '16px',
  medium: '18px',
  large: '20px',
  xlarge: '24px',
};

export const fontWeights = {
  regular: 500,
  bold: 700,
  extraBold: 800,
};

export const gaps = {
  xsmall: '3px',
  small: '6px',
  regular: '12px',
  medium: '18px',
  large: '24px',
  xlarge: '36px',
};

export const sizes = {
  inputHeight: '30px',
  buttonHeight: '44px',
  navHeight: '54px',
  navHeightPadding: '62px',
  ratingBadgeSize: '74px',
  venuePhoto: '84px',
  coverHeight: '204px',
  heroHeight: '348px',
  deviceWidth: '420px',
  deviceHeight: '820px',
};

export const radii = {
  regularBorderRadius: '10px',
  mediumBorderRadius: '15px',
};

export const durations = {
  regular: '0.2s',
  extended: '0.3s',
};
