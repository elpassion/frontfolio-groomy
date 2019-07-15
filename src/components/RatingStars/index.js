import React from 'react';
import { number } from 'prop-types';

import { getReviewsRating } from 'data/api';
import { RatingIcon } from '../_svgAssets/RatingIcon';
import { StarsRatingWrapper } from './RatingStarsStyles';

const RatingStars = ({ venueId, maxRating }) => {
  const reviewsRating = getReviewsRating(venueId); // @todo: refactor to reuse on single review

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

RatingStars.propTypes = {
  venueId: number,
};

RatingStars.defaultProps = {
  maxRating: 5,
};

RatingStars.displayName = 'RatingStars';
