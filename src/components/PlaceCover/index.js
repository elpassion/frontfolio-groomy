import React from 'react';
import { number, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';

import RatingBadge from './RatingBadge';
import RatingStars from './RatingStars';
import { getReviewsCount, getPlaceDetails } from '../../helpers/functions';
import {
  PlaceImage,
  CoverWrapper,
  PlaceDetails,
  PlaceName,
  FlexWrapper,
  MetaFlexWrapper,
  LeftColumn,
  RightColumn,
  MetaLeftColumn,
} from './PlaceCoverStyles';
import {
  PlaceAddress,
  StyledLocationIcon,
  StyledPriceIcon,
  MetaItem,
} from 'styles/common';

class PlaceCover extends React.Component {
  constructor(props) {
    super(props);
    this.contentBox = React.createRef();

    this.state = {
      currentPlaceDetails: getPlaceDetails(this.props.displayId),
      reviewsCount: getReviewsCount(this.props.displayId),
    };
  }

  goToPlace = () => {
    this.props.history.push('/places/' + this.props.displayId);
  };

  render() {
    const { currentPlaceDetails, reviewsCount } = this.state;
    const { isHero, displayId } = this.props;
    const showRating = reviewsCount > 0 && !isHero;

    return (
      <CoverWrapper onClick={isHero ? null : this.goToPlace}>
        <PlaceImage
          isHero={isHero}
          src={
            process.env.PUBLIC_URL +
            '/images/places/salon-' +
            currentPlaceDetails.id +
            '.jpg'
          }
          alt={currentPlaceDetails.name}
        />
        <PlaceDetails ref={this.contentBox}>
          <FlexWrapper>
            <LeftColumn>
              <PlaceName>{currentPlaceDetails.name}</PlaceName>
              <PlaceAddress>{currentPlaceDetails.address}</PlaceAddress>
            </LeftColumn>
            {showRating && (
              <RightColumn>
                <RatingBadge placeId={displayId} />
              </RightColumn>
            )}
          </FlexWrapper>
          <MetaFlexWrapper>
            <MetaLeftColumn>
              {isHero
                ? [
                    <RatingStars
                      key='rating'
                      placeId={displayId}
                      isPlaceReview
                    />,
                    <span key='reviews-count'>
                      {reviewsCount} Review{reviewsCount !== 1 && 's'}
                    </span>,
                  ]
                : [
                    <MetaItem key='distance'>
                      <StyledLocationIcon /> {currentPlaceDetails.distance}
                    </MetaItem>,
                    <MetaItem key='price'>
                      <StyledPriceIcon /> {currentPlaceDetails.price}
                    </MetaItem>,
                  ]}
            </MetaLeftColumn>
            <RightColumn>
              {isHero ? (
                <React.Fragment>
                  <StyledLocationIcon /> {currentPlaceDetails.distance}
                </React.Fragment>
              ) : (
                `${reviewsCount} Review${reviewsCount !== 1 && 's'}`
              )}
            </RightColumn>
          </MetaFlexWrapper>
        </PlaceDetails>
      </CoverWrapper>
    );
  }

  static defaultProps = {
    isHero: false,
  };
}

PlaceCover.propTypes = {
  displayId: number.isRequired,
  isHero: bool,
};

export default withRouter(PlaceCover);
