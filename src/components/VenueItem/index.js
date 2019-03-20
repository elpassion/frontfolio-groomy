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

class VenueItem extends React.Component {
  constructor(props) {
    super(props);

    this.venuePhoto = React.createRef();
    this.goToVenue = this.goToVenue.bind(this);

    this.state = {
      venueRating: [],
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
    this.props.history.push('/venues/' + this.props.details.id);
  };

  componentWillMount() {
    this.setState({
      venueRating: getReviewsRating(this.props.details.id, 1),
    });
  }

  render() {
    const { details } = this.props;
    const { venueRating, elementStyles } = this.state;

    return (
      <VenueItemLink onClick={this.goToVenue}>
        <PhotoWrapper>
          <VenuePhoto
            src={
              process.env.PUBLIC_URL +
              '/images/venues/salon-' +
              details.id +
              '.jpg'
            }
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
          <VenueName>{details.name}</VenueName>
          <VenueAddress>{details.address}</VenueAddress>

          <VenueDetailsWrapper>
            {venueRating && (
              <MetaItem>
                <StyledRatingIcon /> {venueRating}
              </MetaItem>
            )}
            <MetaItem>
              <StyledLocationIcon /> {details.distance}
            </MetaItem>
            <MetaItem>
              <StyledPriceIcon /> {details.price}
            </MetaItem>
          </VenueDetailsWrapper>
        </VenueMeta>
      </VenueItemLink>
    );
  }
}

export default withRouter(VenueItem);
