import React from 'react';
import { number } from 'prop-types';

import { getReviewsRating } from 'data/api';
import { RatingIcon } from '../_svgAssets/RatingIcon';
import { StarsRatingWrapper } from './RatingStarsStyles';

export const RatingStars = ({ venueId, fixedRating, maxRating }) => {
  const reviewsRating = venueId ? getReviewsRating(venueId) : fixedRating; // @todo: refactor to reuse on single review

  return (
    reviewsRating > 0 && (
      <StarsRatingWrapper>
        {Array.from({ length: maxRating }, (_, index) => (
          <RatingIcon key={index} isActive={reviewsRating > index} />
        ))}
      </StarsRatingWrapper>
    )
  );
};

RatingStars.propTypes = {
  venueId: number,
  fixedRating: number,
};

RatingStars.defaultProps = {
  maxRating: 5,
};

RatingStars.displayName = 'RatingStars';
