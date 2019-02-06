import React from 'react';
import { number, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getReviews, getPlaceDetails } from '../../helpers/functions';
import {
  PlaceImage,
  CoverWrapper,
  PlaceDetails,
  PlaceName,
  PlaceAddress,
  FlexWrapper,
  MetaFlexWrapper,
  LeftColumn,
  RightColumn,
  MetaLeftColumn,
  StyledLocationIcon,
  StyledPriceIcon,
  MetaItem,
} from './PlaceCoverStyles';
import RatingBadge from './RatingBadge';

class PlaceCover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlaceDetails: getPlaceDetails(this.props.displayId),
      reviewsCount: getReviews(this.props.displayId).length,
    };
  }

  goToPlace = () => {
    this.props.history.push('/places/' + this.props.displayId);
  };

  render() {
    const { currentPlaceDetails, reviewsCount } = this.state;
    const { isHero, displayId } = this.props;

    return (
      <CoverWrapper onClick={isHero ? this.goToPlace : null}>
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

        <PlaceDetails>
          <FlexWrapper>
            <LeftColumn>
              <PlaceName>{currentPlaceDetails.name}</PlaceName>
              <PlaceAddress>{currentPlaceDetails.address}</PlaceAddress>
            </LeftColumn>

            {reviewsCount < 0 && (
              <RightColumn>
                <RatingBadge placeId={displayId} />
              </RightColumn>
            )}
          </FlexWrapper>

          <MetaFlexWrapper>
            <MetaLeftColumn>
              <MetaItem>
                <StyledLocationIcon /> {currentPlaceDetails.distance}
              </MetaItem>
              <MetaItem>
                <StyledPriceIcon /> {currentPlaceDetails.price}
              </MetaItem>
            </MetaLeftColumn>

            <RightColumn>
              {reviewsCount} Review{reviewsCount !== 1 && 's'}
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
