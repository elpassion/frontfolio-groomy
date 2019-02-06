import React from 'react';
import { number, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getReviewsCount, getPlaceDetails } from '../../helpers/functions';
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
import RatingStars from './RatingStars';

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

  renderLocation = () => {
    return (
      <React.Fragment>
        <StyledLocationIcon /> {this.state.currentPlaceDetails.distance}
      </React.Fragment>
    );
  };

  render() {
    const { currentPlaceDetails, reviewsCount } = this.state;
    const { isHero, displayId } = this.props;

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

            {reviewsCount > 0 && !isHero && (
              <RightColumn>
                <RatingBadge placeId={displayId} />
              </RightColumn>
            )}
          </FlexWrapper>

          <MetaFlexWrapper>
            <MetaLeftColumn>
              {isHero ? (
                <React.Fragment>
                  <RatingStars placeId={displayId} />
                  <span>
                    {reviewsCount} Review{reviewsCount !== 1 && 's'}
                  </span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <MetaItem>{this.renderLocation()}</MetaItem>
                  <MetaItem>
                    <StyledPriceIcon /> {currentPlaceDetails.price}
                  </MetaItem>
                </React.Fragment>
              )}
            </MetaLeftColumn>

            <RightColumn>
              {isHero
                ? this.renderLocation()
                : `${reviewsCount} Review${reviewsCount !== 1 && 's'}`}
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
