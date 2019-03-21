import styled from 'styled-components';

import RatingIcon from '../_svgAssets/RatingIcon';
import { FlexAlignCenter } from 'styles/common';
import {
  gaps,
  colors,
  radii,
  fontSizes,
  fontWeights,
  sizes,
} from 'styles/vars';

export const VenueItemLink = styled.div`
  ${FlexAlignCenter};
  margin: 0 0 ${gaps.large};
  color: ${colors.primaryBlack};
`;

export const PhotoWrapper = styled.div`
  flex: 0 0 ${sizes.venuePhoto};
  height: ${sizes.venuePhoto};
  margin: 0 ${gaps.medium} 0 0;
`;

export const VenuePhoto = styled.img.attrs({
  'data-object-fit': 'cover',
})`
  position: absolute;
  display: block;
  width: ${sizes.venuePhoto};
  height: ${sizes.venuePhoto};
  overflow: hidden;
  border-radius: ${radii.regularBorderRadius};
  object-fit: cover;
  transition: all 0.3s ease-in;
`;

export const VenueMeta = styled.div`
  flex: 1 1 auto;
  transition: opacity 0.2s ease-in;
`;

export const VenueName = styled.h3`
  margin: 0 0 ${gaps.xsmall} 0;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.medium};
`;

export const VenueDetailsWrapper = styled.div`
  ${FlexAlignCenter};
  margin: ${gaps.small} 0 0 0;
  color: ${colors.lightGray};
  font-size: ${fontSizes.xsmall};
`;

export const StyledRatingIcon = styled(RatingIcon)`
  margin: 0 ${gaps.xsmall} 0 0;
`;

VenueItemLink.displayName = 'VenueItemLink';
PhotoWrapper.displayName = 'PhotoWrapper';
VenuePhoto.displayName = 'VenuePhoto';
VenueMeta.displayName = 'VenueMeta';
VenueName.displayName = 'VenueName';
VenueDetailsWrapper.displayName = 'VenueDetailsWrapper';
StyledRatingIcon.displayName = 'StyledRatingIcon';
