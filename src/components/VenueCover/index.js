import React from 'react';
import { number, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getReviewsCount, getVenueDetails } from 'data/api';
import RatingBadge from './RatingBadge';
import RatingStars from './RatingStars';
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
  constructor(props) {
    super(props);

    this.state = {
      currentVenueDetails: getVenueDetails(this.props.displayId),
      reviewsCount: getReviewsCount(this.props.displayId),
    };
  }

  goToVenue = () => {
    this.props.history.push('/venues/' + this.props.displayId);
  };

  render() {
    const { currentVenueDetails, reviewsCount } = this.state;
    const { isHero, displayId } = this.props;
    const showRating = reviewsCount > 0 && !isHero;

    return (
      <CoverWrapper onClick={isHero ? null : this.goToVenue}>
        <VenueImage
          isHero={isHero}
          src={
            process.env.PUBLIC_URL +
            '/images/venues/salon-' +
            currentVenueDetails.id +
            '.jpg'
          }
          alt={currentVenueDetails.name}
        />
        <VenueDetails>
          <FlexWrapper>
            <LeftColumn>
              <VenueName>{currentVenueDetails.name}</VenueName>
              <VenueAddress>{currentVenueDetails.address}</VenueAddress>
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
                    <StyledLocationIcon /> {currentVenueDetails.distance}
                  </MetaItem>
                  <MetaItem>
                    <StyledPriceIcon /> {currentVenueDetails.price}
                  </MetaItem>
                </>
              )}
            </MetaLeftColumn>
            <RightColumn>
              {isHero ? (
                <>
                  <StyledLocationIcon /> {currentVenueDetails.distance}
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
