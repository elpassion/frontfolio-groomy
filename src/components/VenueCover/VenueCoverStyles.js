import styled from 'styled-components';

import { PawIcon } from '../_svgAssets/PawIcon';
import { invertPixelValue } from 'helpers/invertPixelValue';
import {
  colors,
  fontSizes,
  fontWeights,
  gaps,
  gradients,
  radii,
  sizes,
  durations,
} from 'styles/vars';
import { FlexAlignCenter } from 'styles/common';

export const CoverWrapper = styled.div`
  position: relative;
  margin: 0 ${invertPixelValue(gaps.medium)};
  transition: opacity ${durations.regular} ease-in;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => (props.isHero ? gradients.gray : 'none')};
  }
`;

export const VenueImage = styled.img.attrs({
  'data-object-fit': 'cover',
})`
  display: block;
  width: 100%;
  height: ${props => (props.isHero ? sizes.heroHeight : sizes.coverHeight)};
  object-fit: cover;
  overflow: hidden;
`;

export const VenueDetails = styled.div`
  width: calc(100% - ${gaps.xlarge});
  margin: 0 auto;
  padding: ${gaps.regular};
  background: ${colors.white};
  border-radius: ${radii.regularBorderRadius};
  box-shadow: 0 ${gaps.small} ${gaps.large} 0 ${colors.lightGrayTransparent};
  transform: translateY(-25%);
  transition: opacity ${durations.regular} ease-in,
    transform ${durations.regular} ease-in;
`;

export const VenueName = styled.h2`
  margin: 0;
  overflow: hidden;
  color: ${colors.primaryBlack};
  font-weight: ${fontWeights.extraBold};
  font-size: ${fontSizes.large};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: 0 0 8px;
`;

export const LeftColumn = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  margin: 0 ${gaps.regular} 0 0;
`;

export const RightColumn = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 ${sizes.ratingBadgeSize};
  justify-content: center;
  margin: 0 0 0 auto;
`;

export const MetaFlexWrapper = styled(FlexWrapper)`
  margin: 0;
  color: ${colors.lightGray};
  font-size: ${fontSizes.xsmall};
`;

export const MetaLeftColumn = styled(LeftColumn)`
  ${FlexAlignCenter};
`;

export const RatingBadgeWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${sizes.ratingBadgeSize};
  height: ${sizes.ratingBadgeSize};
  color: ${colors.white};
  font-weight: ${fontWeights.extraBold};
  font-size: 36px;
  line-height: 78px;
  background: ${colors.primaryVioletAccent};
  border-radius: ${radii.regularBorderRadius};
  pointer-events: none;
`;

export const PawIconBackground = styled(PawIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
`;

CoverWrapper.displayName = 'CoverWrapper';
VenueImage.displayName = 'VenueImage';
VenueDetails.displayName = 'VenueDetails';
VenueName.displayName = 'VenueName';
LeftColumn.displayName = 'LeftColumn';
RightColumn.displayName = 'RightColumn';
MetaFlexWrapper.displayName = 'MetaFlexWrapper';
MetaLeftColumn.displayName = 'MetaLeftColumn';
RatingBadgeWrapper.displayName = 'RatingBadgeWrapper';
PawIconBackground.displayName = 'PawIconBackground';
