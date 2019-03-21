import React from 'react';
import { number, object, bool } from 'prop-types';

import { getReviewsRating } from 'data/api';
import RatingIcon from '../_svgAssets/RatingIcon';
import { StarsRatingWrapper } from './RatingStarsStyles';

class RatingStars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsRating: getReviewsRating(this.props.venueId), // @todo: refactor to reuse on single review
    };
  }

  render() {
    const { reviewsRating } = this.state;
    const maxRating = 5;

    return (
      reviewsRating > 0 && (
        <StarsRatingWrapper>
          {Array(maxRating)
            .fill(0)
            .map((element, index) => {
              return (
                <RatingIcon key={index} isActive={reviewsRating > index} />
              );
            })}
        </StarsRatingWrapper>
      )
    );
  }
}

RatingStars.propTypes = {
  isPlaceReview: bool,
  venueId: number,
  singleReview: object,
};

export default RatingStars;
