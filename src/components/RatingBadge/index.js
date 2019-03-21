import React from 'react';
import { number } from 'prop-types';

import { getReviewsRating } from 'data/api';
import {
  RatingBadgeWrapper,
  PawIconBackground,
} from '../VenueCover/VenueCoverStyles';

const RatingBadge = ({ venueId }) => {
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

RatingBadge.propTypes = {
  venueId: number.isRequired,
};

RatingBadge.displayName = 'RatingBadge';
export default RatingBadge;
