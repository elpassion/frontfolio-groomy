import styled, { css, keyframes } from 'styled-components';

import { lighten, linearGradient } from 'polished';
import { radii, gaps, colors, fontWeights, fontSizes } from './vars';
import { LocationIcon } from '../components/_svgAssets/LocationIcon';
import { PriceIcon } from '../components/_svgAssets/PriceIcon';

export const IconsSpacing = css`
  margin: 0 ${gaps.xsmall} 0 0;
`;

export const VenueAddress = styled.p`
  color: ${colors.darkerGray};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.small};
`;

export const MetaItem = styled.p`
  display: flex;
  align-items: baseline;

  &:not(:last-child) {
    margin: 0 ${gaps.regular} 0 0;
  }
`;

export const StyledLocationIcon = styled(LocationIcon)`
  ${IconsSpacing};
  transform: translateY(10%);
`;

export const StyledPriceIcon = styled(PriceIcon)`
  ${IconsSpacing};
`;

export const PrimaryButton = styled.button`
  text-decoration: none;
  border: none;
  color: ${colors.white};
  background-color: ${colors.primaryViolet};
  border-radius: ${radii.regularBorderRadius};
  padding: ${gaps.regular} ${gaps.large};
  font-weight: ${fontWeights.bold};

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${linearGradient({
    colorStops: [
      `${lighten(0.1, colors.primaryViolet)} 0%`,
      `${colors.primaryViolet} 100%`,
    ],
    toDirection: '180deg',
    fallback: colors.primaryViolet,
  })};
`;

export const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: .2;
  }
  
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  
  100% {
    transform: translateX(100%);
    opacity: .0;
  }
`;

IconsSpacing.displayName = 'IconsSpacing';
VenueAddress.displayName = 'VenueAddress';
MetaItem.displayName = 'MetaItem';
StyledLocationIcon.displayName = 'StyledLocationIcon';
StyledPriceIcon.displayName = 'StyledPriceIcon';
PrimaryButton.displayName = 'ButtonBase';
FlexAlignCenter.displayName = 'FlexAlignCenter';
