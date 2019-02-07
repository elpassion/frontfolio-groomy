import styled, { css } from 'styled-components';
import { rem, transparentize } from 'polished';
import {
  gap,
  colors,
  misc,
  fontWeight,
  fontSize,
  sizes,
} from '../../helpers/vars';
import { negativeValue } from '../../helpers/functions';

export const PlaceDetails = styled.div`
  width: calc(100% - ${rem(gap.xbig)});
  margin: 0 auto;
  padding: ${rem(gap.xsmall)};
  background: ${colors.white};
  border-radius: ${misc.regularBorderRadius};
  box-shadow: 0 ${rem(gap.tiny)} ${rem(gap.medium)} 0
    ${transparentize(0.7, colors.lightGray)};
  transform: translateY(-25%);
`;
