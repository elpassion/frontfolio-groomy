import React from 'react';
import { number } from 'prop-types';

import { getReviewsRating } from 'data/api';
import {
  RatingBadgeWrapper,
  PawIconBackground,
} from '../VenueCover/VenueCoverStyles';

const propTypes = {
  venueId: number.isRequired,
};

export const RatingBadge = ({ venueId }) => {
  const reviewsRating = getReviewsRating(venueId, 1);

  return (
    reviewsRating > 0 && (
      <RatingBadgeWrapper>
        <PawIconBackground />
        {reviewsRating}
      </RatingBadgeWrapper>
    )
  );
};

RatingBadge.propTypes = propTypes;

RatingBadge.displayName = 'RatingBadge';
