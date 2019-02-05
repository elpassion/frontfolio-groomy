import React from 'react';
import { number } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { places } from '../../data/places';

import {
  PlaceImage,
  CoverWrapper,
  PlaceDetails,
  PlaceName,
  PlaceAddress,
  FlexWrapper,
  MetaFlexWrapper,
} from './PlaceCoverStyles';

class PlaceCover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlaceDetails: places.find(
        place => place.id === this.props.displayId
      ),
    };
  }

  goToPlace = () => {
    this.props.history.push('/places/' + this.props.displayId);
  };

  render() {
    const { currentPlaceDetails } = this.state;
    const { isHero } = this.props;

    return (
      <CoverWrapper onClick={this.goToPlace}>
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
            <div>
              <PlaceName>{currentPlaceDetails.name}</PlaceName>
              <PlaceAddress>{currentPlaceDetails.address}</PlaceAddress>
            </div>
            <div>Rating</div>
          </FlexWrapper>

          <MetaFlexWrapper>
            <div>
              <p>
                {currentPlaceDetails.distance} - {currentPlaceDetails.price}
              </p>
            </div>
            <div>Rating</div>
          </MetaFlexWrapper>
        </PlaceDetails>
      </CoverWrapper>
    );
  }
}

PlaceCover.propTypes = {
  displayId: number.isRequired,
};

export default withRouter(PlaceCover);
