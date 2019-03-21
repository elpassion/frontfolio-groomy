import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';

import { gaps, colors, fontWeights, fontSizes } from './vars';
import LocationIcon from '../components/SvgAssets/LocationIcon';

import PriceIcon from '../components/SvgAssets/PriceIcon';

export const IconsSpacing = css`
  margin: 0 ${rem(gaps.xsmall)} 0 0;
`;

export const VenueAddress = styled.p`
  color: ${colors.darkerGray};
  font-weight: ${fontWeights.regular};
  font-size: ${rem(fontSizes.small)};
`;

export const MetaItem = styled.p`
  display: flex;
  align-items: baseline;

  &:not(:last-child) {
    margin: 0 ${rem(gaps.regular)} 0 0;
  }
`;

export const StyledLocationIcon = styled(LocationIcon)`
  ${IconsSpacing};
  transform: translateY(10%);
`;

export const StyledPriceIcon = styled(PriceIcon)`
  ${IconsSpacing};
`;

export const ButtonBase = css`
  text-decoration: none;
`;

export const FlexValignCenter = css`
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
    opacity: .2;
  }
`;
