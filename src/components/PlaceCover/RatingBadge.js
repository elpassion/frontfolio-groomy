import React from 'react';
import { number } from 'prop-types';
import { getReviewsRating } from '../../helpers/functions';
import { RatingBadgeWrapper, PawIconBackground } from './PlaceCoverStyles';

class RatingBadge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsRating: getReviewsRating(this.props.placeId, 1),
    };
  }

  render() {
    const { reviewsRating } = this.state;

    return (
      reviewsRating > 0 && (
        <RatingBadgeWrapper>
          <PawIconBackground />
          {reviewsRating}
        </RatingBadgeWrapper>
      )
    );
  }
}

RatingBadge.propTypes = {
  placeId: number.isRequired,
};

export default RatingBadge;
