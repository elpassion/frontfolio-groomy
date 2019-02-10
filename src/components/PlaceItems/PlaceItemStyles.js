import styled from 'styled-components';
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

export const PlaceItemLink = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 ${rem(gap.medium)};
  color: ${colors.primaryBlack};
`;

export const PhotoWrapper = styled.div`
  flex: 0 0 ${rem(sizes.placePhoto)};
  height: ${rem(sizes.placePhoto)};
  margin: 0 ${rem(gap.regular)} 0 0;
`;

export const PlacePhoto = styled.img.attrs({
  'data-object-fit': 'cover',
})`
  position: absolute;
  display: block;
  width: ${rem(sizes.placePhoto)};
  height: ${rem(sizes.placePhoto)};
  overflow: hidden;
  border-radius: ${rem(misc.regularBorderRadius)};
  object-fit: cover;
  transition: all 0.3s ease-in;
`;

export const PlaceMeta = styled.div`
  flex: 1 1 auto;
  transition: opacity 0.2s ease-in;
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
