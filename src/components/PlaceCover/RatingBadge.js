import React from 'react';
import { number } from 'prop-types';
import { getReviews } from '../../helpers/functions';
import { RatingBadgeWrapper, PawIconBackground } from './PlaceCoverStyles';

class RatingBadge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsCount: getReviews(this.props.placeId).length,
      reviewsRating: 0,
    };
  }

  componentWillMount() {
    this.setState({
      reviewsRating:
        (getReviews(this.props.placeId).reduce(
          (prev, next) => +prev + +next.rating,
          0
        ) / this.state.reviewsCount).toFixed(1),
    });
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
