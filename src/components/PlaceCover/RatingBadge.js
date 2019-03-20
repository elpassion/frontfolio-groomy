import React from 'react';
import { number } from 'prop-types';

import { RatingBadgeWrapper, PawIconBackground } from './PlaceCoverStyles';
import { getReviewsRating } from 'helpers/functions';

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
