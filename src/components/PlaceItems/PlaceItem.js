import React from 'react';
import {
  PlaceItemLink,
  PlacePhoto,
  PlaceName,
  PlaceMeta,
  PlaceDetailsWrapper,
  StyledRatingIcon,
} from './PlaceItemStyles';
import {
  MetaItem,
  PlaceAddress,
  StyledPriceIcon,
  StyledLocationIcon,
} from '../Common/CommonStyles';
import { getReviewsRating } from '../../helpers/functions';

class PlaceItem extends React.Component {
  constructor(props) {
    super(props);

    this.placePhoto = React.createRef();

    this.state = {
      placeRating: [],
    };
  }

  componentWillMount() {
    this.setState({
      placeRating: getReviewsRating(this.props.details.id, 1),
    });
  }

  render() {
    const { details } = this.props;
    const { placeRating } = this.state;

    return (
      <PlaceItemLink to={`places/${details.id}`}>
        <PlacePhoto
          src={
            process.env.PUBLIC_URL +
            '/images/places/salon-' +
            details.id +
            '.jpg'
          }
          ref={this.placePhoto}
        />
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

export default PlaceItem;
