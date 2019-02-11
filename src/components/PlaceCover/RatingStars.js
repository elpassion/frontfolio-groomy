import React from 'react';
import { number } from 'prop-types';
import { getReviewsRating } from '../../helpers/functions';
import RatingIcon from '../SvgAssets/RatingIcon';
import { StarsRatingWrapper } from './RatingStarsStyles';

class RatingStars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsRating: getReviewsRating(this.props.placeId),
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
  placeId: number.isRequired,
};

export default RatingStars;
