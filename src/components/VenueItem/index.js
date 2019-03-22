import React from 'react';
import { withRouter } from 'react-router-dom';

import { getReviewsRating } from 'data/api';
import {
  VenueItemLink,
  VenuePhoto,
  VenueName,
  VenueMeta,
  VenueDetailsWrapper,
  StyledRatingIcon,
  PhotoWrapper,
} from './VenueItemStyles';
import {
  MetaItem,
  VenueAddress,
  StyledPriceIcon,
  StyledLocationIcon,
} from 'styles/common';
import { sizes } from 'styles/vars';
import { getRoutePath } from 'helpers/getRoutePath';

class VenueItem extends React.Component {
  constructor(props) {
    super(props);
    this.venuePhoto = React.createRef();
    this.state = {
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

  goToVenue = () => {
    const photoPosition = this.venuePhoto.current.getBoundingClientRect();
    const leftPosition = this.venuePhoto.current.offsetLeft;
    const topPosition = this.venuePhoto.current.offsetTop;

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
        setTimeout(() => {
          this.startTransitioning();
        }, 100);
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
    const { details, history } = this.props;
    history.push(getRoutePath('VENUE', details.id));
  };

  render() {
    const { id, name, address, distance, price } = this.props.details;
    const { elementStyles } = this.state;
    const venueRating = getReviewsRating(id, 1);

    return (
      <VenueItemLink onClick={this.goToVenue}>
        <PhotoWrapper>
          <VenuePhoto
            src={`${process.env.PUBLIC_URL}/images/venues/salon-${id}.jpg`}
            ref={this.venuePhoto}
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
        <VenueMeta>
          <VenueName>{name}</VenueName>
          <VenueAddress>{address}</VenueAddress>

          <VenueDetailsWrapper>
            {venueRating && (
              <MetaItem>
                <StyledRatingIcon /> {venueRating}
              </MetaItem>
            )}
            <MetaItem>
              <StyledLocationIcon /> {distance}
            </MetaItem>
            <MetaItem>
              <StyledPriceIcon /> {price}
            </MetaItem>
          </VenueDetailsWrapper>
        </VenueMeta>
      </VenueItemLink>
    );
  }
}

VenueItem.displayName = 'VenueItem';
export default withRouter(VenueItem);
