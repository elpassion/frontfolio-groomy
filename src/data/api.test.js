import {
  getReviews,
  getReviewsCount,
  getReviewsRating,
  getVenueDetails,
  getPlaces,
} from 'data/api';
import { venues } from 'data/venues';

it('Checking if function return object with reviews', () => {
  expect(typeof getReviews(1)).toBe('object');
});

it('Checking if review counter returns good value', () => {
  expect(typeof getReviewsCount(1)).toBe('number');
  expect(getReviewsCount(1)).toBe(1);
  expect(getReviewsCount(10)).toBe(0);
});

it('Checking rating for specific venue ID', () => {
  expect(typeof getReviewsRating(1)).toBe('string');
  expect(getReviewsRating(1)).toBe('5');
  expect(getReviewsRating(1, 1)).toBe('5.0');
  expect(getReviewsRating('invalid value')).toBe('N/A');
});

it('Getting venue details', () => {
  expect(typeof getVenueDetails(1)).toBe('object');
  expect(getVenueDetails(1)).toBe(venues[1]);
});

it('Getting venues by term', () => {
  expect(typeof getPlaces('dog')).toBe('object');
  expect(typeof getPlaces()).toBe('object');
});
