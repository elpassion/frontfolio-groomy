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
    this.contentBox = React.createRef();

    this.state = {
      currentVenueDetails: getVenueDetails(this.props.displayId),
      reviewsCount: getReviewsCount(this.props.displayId),
    };
  }

  goToPlace = () => {
    this.props.history.push('/venues/' + this.props.displayId);
  };

  render() {
    const { currentVenueDetails, reviewsCount } = this.state;
    const { isHero, displayId } = this.props;
    const showRating = reviewsCount > 0 && !isHero;

    return (
      <CoverWrapper onClick={isHero ? null : this.goToPlace}>
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
        <VenueDetails ref={this.contentBox}>
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
              {isHero
                ? [
                    <RatingStars
                      key='rating'
                      venueId={displayId}
                      isPlaceReview
                    />,
                    <span key='reviews-count'>
                      {reviewsCount} Review{reviewsCount !== 1 && 's'}
                    </span>,
                  ]
                : [
                    <MetaItem key='distance'>
                      <StyledLocationIcon /> {currentVenueDetails.distance}
                    </MetaItem>,
                    <MetaItem key='price'>
                      <StyledPriceIcon /> {currentVenueDetails.price}
                    </MetaItem>,
                  ]}
            </MetaLeftColumn>
            <RightColumn>
              {isHero ? (
                <React.Fragment>
                  <StyledLocationIcon /> {currentVenueDetails.distance}
                </React.Fragment>
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

export default withRouter(VenueCover);
