import React from 'react';
import { number, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getReviewsCount, getVenueDetails } from 'data/api';
import { RatingBadge } from '../RatingBadge';
import { RatingStars } from '../RatingStars';
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
  ReservationButton,
  VenueInformation,
  VenueTestimonial,
  VenueTestimonialHeading,
  VenueTestimonialName,
} from './VenueCoverStyles';
import {
  VenueAddress,
  StyledLocationIcon,
  StyledPriceIcon,
  MetaItem,
} from 'styles/common';
import { getRoutePath } from 'helpers/getRoutePath';

const propTypes = {
  displayId: number.isRequired,
  isHero: bool,
};

const defaultProps = {
  isHero: false,
};

export class VenueCover extends React.Component {
  goToVenue = () => {
    const { displayId, history } = this.props;
    history.push(getRoutePath('VENUE', displayId));
  };

  render() {
    const { isHero, displayId } = this.props;
    const venueDetails = getVenueDetails(displayId);
    const { id, name, address, distance, price } = venueDetails;
    const reviewsCount = getReviewsCount(displayId);
    const isRatingVisible = reviewsCount > 0 && !isHero;

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
            {isRatingVisible && (
              <RightColumn>
                <RatingBadge venueId={displayId} />
              </RightColumn>
            )}
          </FlexWrapper>
          <MetaFlexWrapper>
            <MetaLeftColumn>
              {isHero ? (
                <>
                  <RatingStars venueId={displayId} />
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

        {isHero && (
          <VenueInformation>
            <ReservationButton block>Book a visit</ReservationButton>
            <VenueTestimonial>
              <VenueTestimonialHeading>
                <VenueTestimonialName>Jenny & Tobi</VenueTestimonialName>
                <RatingStars fixedRating={3} />
              </VenueTestimonialHeading>
              Pala is such a fantastic groomer! My Tobi literally gets stopped
              on the street all the time by people because of how cute he looks
              when he comes out! Most important is to have a great goomer that
              can take care of everything.
            </VenueTestimonial>
          </VenueInformation>
        )}
      </CoverWrapper>
    );
  }
}

VenueCover.propTypes = propTypes;
VenueCover.defaultProps = defaultProps;

VenueCover.displayName = 'VenueCover';
export default withRouter(VenueCover);
