import React from 'react';
import { number, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getReviewsCount, getVenueDetails } from 'data/api';
import RatingBadge from '../RatingBadge';
import RatingStars from '../RatingStars';
import {
  CoverWrapper,
  FlexWrapper,
  LeftColumn,
  MetaFlexWrapper,
  MetaLeftColumn,
  RightColumn,
  VenueDetails,
  VenueImage,
  VenueName,
} from './VenueCoverStyles';
import {
  VenueAddress,
  StyledLocationIcon,
  StyledPriceIcon,
  MetaItem,
} from 'styles/common';

class VenueCover extends React.Component {
  goToVenue = () => {
    this.props.history.push('/venues/' + this.props.displayId);
  };

  render() {
    const { isHero, displayId } = this.props;
    const venueDetails = getVenueDetails(displayId);
    const { id, name, address, distance, price } = venueDetails;
    const reviewsCount = getReviewsCount(displayId);
    const showRating = reviewsCount > 0 && !isHero;

    return (
      <CoverWrapper onClick={isHero ? null : this.goToVenue} isHero={isHero}>
        <VenueImage
          isHero={isHero}
          src={`${process.env.PUBLIC_URL}/images/venues/salon-${id}.jpg`}
          alt={name}
        />
        <VenueDetails>
          <FlexWrapper>
            <LeftColumn>
              <VenueName>{name}</VenueName>
              <VenueAddress>{address}</VenueAddress>
            </LeftColumn>
            {showRating && (
              <RightColumn>
                <RatingBadge venueId={displayId} />
              </RightColumn>
            )}
          </FlexWrapper>
          <MetaFlexWrapper>
            <MetaLeftColumn>
              {isHero ? (
                <>
                  <RatingStars venueId={displayId} isPlaceReview />
                  <span>
                    {reviewsCount} Review{reviewsCount !== 1 && 's'}
                  </span>
                </>
              ) : (
                <>
                  <MetaItem>
                    <StyledLocationIcon /> {distance}
                  </MetaItem>
                  <MetaItem>
                    <StyledPriceIcon /> {price}
                  </MetaItem>
                </>
              )}
            </MetaLeftColumn>
            <RightColumn>
              {isHero ? (
                <>
                  <StyledLocationIcon /> {distance}
                </>
              ) : (
                `${reviewsCount} Review${reviewsCount !== 1 && 's'}`
              )}
            </RightColumn>
          </MetaFlexWrapper>
        </VenueDetails>
      </CoverWrapper>
    );
  }

  static defaultProps = {
    isHero: false,
  };
}

VenueCover.propTypes = {
  displayId: number.isRequired,
  isHero: bool,
};

VenueCover.displayName = 'VenueCover';
export default withRouter(VenueCover);
