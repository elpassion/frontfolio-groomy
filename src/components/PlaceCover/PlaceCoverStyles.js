import styled from 'styled-components';
import { rem, transparentize } from 'polished';

import { gap, colors, misc, fontWeight, fontSize } from '../../helpers/vars';
import { negativeValue } from '../../helpers/functions';

export const CoverWrapper = styled.div`
  position: relative;
  margin: 0 ${rem(negativeValue(gap.regular))};
`;

export const PlaceImage = styled.img.attrs({
  'data-object-fit': 'cover',
})`
  display: block;
  width: 100%;
  height: ${props => (props.isHero ? rem('348px') : rem('204px'))};
  object-fit: cover;
  overflow: hidden;
`;

export const PlaceDetails = styled.div`
  position: absolute;
  right: ${rem(gap.regular)};
  bottom: 0;
  left: ${rem(gap.regular)};
  padding: ${rem(gap.xsmall)};
  background: ${colors.white};
  border-radius: ${misc.regularBorderRadius};
  box-shadow: 0 ${rem(gap.tiny)} ${rem(gap.medium)} 0
    ${transparentize(0.7, colors.lightGray)};
  transform: translateY(75%);
`;

export const PlaceName = styled.h2`
  margin: 0;
  color: ${colors.primaryBlack};
  font-weight: ${fontWeight.extraBold};
  font-size: ${rem(fontSize.large)};
`;

export const PlaceAddress = styled.p`
  color: ${colors.darkerGray};
  font-weight: ${fontWeight.regular};
  font-size: ${rem(fontSize.xsmall)};
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: 0 0 ${gap.xsmall};
`;

export const MetaFlexWrapper = styled(FlexWrapper)`
  margin: 0;
  color: ${colors.lightGray};
  font-size: ${fontSize.xxsmall};
`;
