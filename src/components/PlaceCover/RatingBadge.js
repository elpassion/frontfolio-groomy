import React from 'react';
import { number } from 'prop-types';
import { getReviews, getReviewsRating } from '../../helpers/functions';
import { RatingBadgeWrapper, PawIconBackground } from './PlaceCoverStyles';

class RatingBadge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsCount: getReviews(this.props.placeId).length,
      reviewsRating: getReviewsRating(this.props.placeId, 1),
    };
  }

  render() {
    const { reviewsRating } = this.state;

    return (
      <React.Fragment>
        {reviewsRating > 0 && (
          <RatingBadgeWrapper>
            <PawIconBackground />
            {reviewsRating}
          </RatingBadgeWrapper>
        )}
      </React.Fragment>
    );
  }
}

RatingBadge.propTypes = {
  placeId: number.isRequired,
};

export default RatingBadge;
