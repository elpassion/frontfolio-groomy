import styled from 'styled-components';
import { rem } from 'polished';

import RatingIcon from '../SvgAssets/RatingIcon';
import { FlexValignCenter } from 'styles/common';
import { gap, colors, misc, fontSize, fontWeight, sizes } from 'styles/vars';

export const VenueItemLink = styled.div`
  ${FlexValignCenter};
  margin: 0 0 ${rem(gap.medium)};
  color: ${colors.primaryBlack};
`;

export const PhotoWrapper = styled.div`
  flex: 0 0 ${rem(sizes.venuePhoto)};
  height: ${rem(sizes.venuePhoto)};
  margin: 0 ${rem(gap.regular)} 0 0;
`;

export const VenuePhoto = styled.img.attrs({
  'data-object-fit': 'cover',
})`
  position: absolute;
  display: block;
  width: ${rem(sizes.venuePhoto)};
  height: ${rem(sizes.venuePhoto)};
  overflow: hidden;
  border-radius: ${rem(misc.regularBorderRadius)};
  object-fit: cover;
  transition: all 0.3s ease-in;
`;

export const VenueMeta = styled.div`
  flex: 1 1 auto;
  transition: opacity 0.2s ease-in;
`;

export const VenueName = styled.h3`
  margin: 0 0 ${rem(gap.pico)} 0;
  font-weight: ${fontWeight.bold};
  font-size: ${rem(fontSize.medium)};
`;

export const VenueDetailsWrapper = styled.div`
  ${FlexValignCenter};
  margin: ${rem(gap.tiny)} 0 0 0;
  color: ${colors.lightGray};
  font-size: ${rem(fontSize.xxsmall)};
`;

export const StyledRatingIcon = styled(RatingIcon)`
  margin: 0 ${rem(gap.pico)} 0 0;
`;
