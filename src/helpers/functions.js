import { reviews } from '../data/reviews';
import { places } from '../data/places';

export function negativeValue(value) {
  if (value.includes('px')) {
    return `-${value}`;
  }

  return null;
}

export function getReviews(placeId) {
  return reviews.filter(review => review.place_id === placeId);
}

export function getReviewsCount(placeId) {
  return reviews.filter(review => review.place_id === placeId).length;
}

export function getReviewsRating(placeId, fixedValue = 0) {
  const reviewsList = getReviews(placeId);
  const reviewsCount = reviewsList.length;
  const fixedReviewsSummary = (
    reviewsList.reduce((prev, next) => +prev + +next.rating, 0) / reviewsCount
  ).toFixed(fixedValue);

  return fixedReviewsSummary;
}

export function getPlaceDetails(placeId) {
  return places.find(place => place.id === placeId);
}

export default {
  negativeValue,
};
