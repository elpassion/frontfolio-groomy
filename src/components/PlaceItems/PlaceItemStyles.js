import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from 'polished';
import RatingIcon from '../SvgAssets/RatingIcon';
import {
  gap,
  colors,
  misc,
  fontSize,
  fontWeight,
  sizes,
} from '../../helpers/vars';

export const PlaceItemLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 0 ${rem(gap.medium)};
  color: ${colors.primaryBlack};
  text-decoration: none;
`;

export const PlacePhoto = styled.img.attrs({
  'data-object-fit': 'cover',
})`
  display: block;
  width: ${rem(sizes.placePhoto)};
  height: ${rem(sizes.placePhoto)};
  margin: 0 ${rem(gap.regular)} 0 0;
  overflow: hidden;
  border-radius: ${rem(misc.regularBorderRadius)};
  object-fit: cover;
`;

export const PlaceMeta = styled.div`
  flex: 1 1 auto;
`;

export const PlaceName = styled.h3`
  margin: 0 0 ${rem(gap.pico)} 0;
  font-weight: ${fontWeight.bold};
  font-size: ${rem(fontSize.medium)};
`;

export const PlaceDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(gap.tiny)} 0 0 0;
  color: ${colors.lightGray};
  font-size: ${rem(fontSize.xxsmall)};
`;

export const StyledRatingIcon = styled(RatingIcon)`
  margin: 0 ${rem(gap.pico)} 0 0;
`;
