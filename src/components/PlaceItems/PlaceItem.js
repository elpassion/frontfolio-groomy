import React from 'react';
import { withRouter } from 'react-router-dom';

import { getReviewsRating } from '../../helpers/functions';
import {
  PlaceItemLink,
  PlacePhoto,
  PlaceName,
  PlaceMeta,
  PlaceDetailsWrapper,
  StyledRatingIcon,
  PhotoWrapper,
} from './PlaceItemStyles';
import {
  MetaItem,
  PlaceAddress,
  StyledPriceIcon,
  StyledLocationIcon,
} from 'styles/common';
import { sizes } from 'styles/vars';

class PlaceItem extends React.Component {
  constructor(props) {
    super(props);

    this.placePhoto = React.createRef();
    this.goToPlace = this.goToPlace.bind(this);

    this.state = {
      placeRating: [],
      startTransition: false,
      elementStyles: {
        top: null,
        left: null,
        width: null,
        height: null,
        opacity: null,
        borderRadius: null,
      },
    };
  }

  goToPlace = () => {
    const photoPosition = this.placePhoto.current.getBoundingClientRect();
    const leftPosition = this.placePhoto.current.offsetLeft;
    const topPosition = this.placePhoto.current.offsetTop;

    this.setState(
      {
        elementStyles: {
          top: topPosition,
          left: leftPosition,
          width: photoPosition.width,
          height: photoPosition.height,
          opacity: 1,
        },
      },
      () => {
        setTimeout(
          function() {
            this.startTransitioning();
          }.bind(this),
          100
        );
      }
    );
  };

  startTransitioning = () => {
    this.setState(
      {
        elementStyles: {
          top: 0,
          left: 0,
          width: '100%',
          height: sizes.heroHeight,
          opacity: 1,
          borderRadius: 0,
        },
      },
      () => {
        this.routerPush();
      }
    );
  };

  routerPush = () => {
    this.props.history.push('/places/' + this.props.details.id);
  };

  componentWillMount() {
    this.setState({
      placeRating: getReviewsRating(this.props.details.id, 1),
    });
  }

  render() {
    const { details } = this.props;
    const { placeRating, elementStyles } = this.state;

    return (
      <PlaceItemLink onClick={this.goToPlace}>
        <PhotoWrapper>
          <PlacePhoto
            src={
              process.env.PUBLIC_URL +
              '/images/places/salon-' +
              details.id +
              '.jpg'
            }
            ref={this.placePhoto}
            style={{
              top: elementStyles.top,
              left: elementStyles.left,
              width: elementStyles.width,
              height: elementStyles.height,
              opacity: elementStyles.opacity,
              borderRadius: elementStyles.borderRadius,
            }}
          />
        </PhotoWrapper>
        <PlaceMeta>
          <PlaceName>{details.name}</PlaceName>
          <PlaceAddress>{details.address}</PlaceAddress>

          <PlaceDetailsWrapper>
            {placeRating && (
              <MetaItem>
                <StyledRatingIcon /> {placeRating}
              </MetaItem>
            )}
            <MetaItem>
              <StyledLocationIcon /> {details.distance}
            </MetaItem>
            <MetaItem>
              <StyledPriceIcon /> {details.price}
            </MetaItem>
          </PlaceDetailsWrapper>
        </PlaceMeta>
      </PlaceItemLink>
    );
  }
}

export default withRouter(PlaceItem);
