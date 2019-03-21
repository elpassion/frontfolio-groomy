import styled from 'styled-components';
import { rem } from 'polished';

import RatingIcon from '../_svgAssets/RatingIcon';
import { FlexValignCenter } from 'styles/common';
import {
  gaps,
  colors,
  radii,
  fontSizes,
  fontWeights,
  sizes,
} from 'styles/vars';

export const VenueItemLink = styled.div`
  ${FlexValignCenter};
  margin: 0 0 ${rem(gaps.large)};
  color: ${colors.primaryBlack};
`;

export const PhotoWrapper = styled.div`
  flex: 0 0 ${rem(sizes.venuePhoto)};
  height: ${rem(sizes.venuePhoto)};
  margin: 0 ${rem(gaps.medium)} 0 0;
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
  margin: 0 0 ${rem(gaps.xsmall)} 0;
  font-weight: ${fontWeights.bold};
  font-size: ${rem(fontSizes.medium)};
`;

export const VenueDetailsWrapper = styled.div`
  ${FlexValignCenter};
  margin: ${rem(gaps.small)} 0 0 0;
  color: ${colors.lightGray};
  font-size: ${rem(fontSizes.xsmall)};
`;

export const StyledRatingIcon = styled(RatingIcon)`
  margin: 0 ${rem(gaps.xsmall)} 0 0;
`;
