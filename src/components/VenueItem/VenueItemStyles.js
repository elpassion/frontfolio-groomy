import styled from 'styled-components';
import { rem } from 'polished';

import RatingIcon from '../SvgAssets/RatingIcon';
import { FlexValignCenter } from 'styles/common';
import { gaps, colors, radii, fontSizes, fontWeights, sizes } from 'styles/vars';

export const VenueItemLink = styled.div`
  ${FlexValignCenter};
  margin: 0 0 ${rem(gaps.medium)};
  color: ${colors.primaryBlack};
`;

export const PhotoWrapper = styled.div`
  flex: 0 0 ${rem(sizes.venuePhoto)};
  height: ${rem(sizes.venuePhoto)};
  margin: 0 ${rem(gaps.regular)} 0 0;
`;

export const VenuePhoto = styled.img.attrs({
  'data-object-fit': 'cover',
})`
  position: absolute;
  display: block;
  width: ${rem(sizes.venuePhoto)};
  height: ${rem(sizes.venuePhoto)};
  overflow: hidden;
  border-radius: ${rem(radii.regularBorderRadius)};
  object-fit: cover;
  transition: all 0.3s ease-in;
`;

export const VenueMeta = styled.div`
  flex: 1 1 auto;
  transition: opacity 0.2s ease-in;
`;

export const VenueName = styled.h3`
  margin: 0 0 ${rem(gaps.pico)} 0;
  font-weight: ${fontWeights.bold};
  font-size: ${rem(fontSizes.medium)};
`;

export const VenueDetailsWrapper = styled.div`
  ${FlexValignCenter};
  margin: ${rem(gaps.tiny)} 0 0 0;
  color: ${colors.lightGray};
  font-size: ${rem(fontSizes.xxsmall)};
`;

export const StyledRatingIcon = styled(RatingIcon)`
  margin: 0 ${rem(gaps.pico)} 0 0;
`;
