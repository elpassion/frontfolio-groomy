import {reviews} from '../data/reviews';
import {places} from '../data/places';

export function negativeValue(value) {
  if (value.includes('px')) {
    return `-${value}`;
  }

  return null;
}

export function getReviews(placeId) {
  return reviews.filter(review => review.place_id === placeId);
}

export function getPlaceDetails(placeId) {
  return places.find(place => place.id === placeId);
}

export default {
  negativeValue,
};
