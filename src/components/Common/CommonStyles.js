import styled, { css } from 'styled-components';
import { gap, colors, fontWeight, fontSize } from '../../helpers/vars';
import { rem } from 'polished';
import LocationIcon from '../SvgAssets/LocationIcon';
import PriceIcon from '../SvgAssets/PriceIcon';

export const IconsSpacing = css`
  margin: 0 ${rem(gap.pico)} 0 0;
`;

export const PlaceAddress = styled.p`
  color: ${colors.darkerGray};
  font-weight: ${fontWeight.regular};
  font-size: ${rem(fontSize.xsmall)};
`;

export const MetaItem = styled.p`
  display: flex;
  align-items: baseline;

  &:not(:last-child) {
    margin: 0 ${rem(gap.xsmall)} 0 0;
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
