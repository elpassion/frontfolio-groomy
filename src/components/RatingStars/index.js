import React from 'react';
import { number } from 'prop-types';

import { getReviewsRating } from 'data/api';
import RatingIcon from '../_svgAssets/RatingIcon';
import { StarsRatingWrapper } from './RatingStarsStyles';

const propTypes = {
  venueId: number.isRequired,
};

const RatingStars = ({ venueId }) => {
  const reviewsRating = getReviewsRating(venueId); // @todo: refactor to reuse on single review
  const maxRating = 5;

  return (
    reviewsRating > 0 && (
      <StarsRatingWrapper>
        {Array(maxRating)
          .fill(0)
          .map((_element, index) => (
            <RatingIcon key={index} isActive={reviewsRating > index} />
          ))}
      </StarsRatingWrapper>
    )
  );
};

RatingStars.propTypes = propTypes;

RatingStars.displayName = 'RatingStars';
export default RatingStars;
