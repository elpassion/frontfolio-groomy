import { venues } from './venues';
import { reviews } from './reviews';

export function getReviews(venueId) {
  return reviews.filter(review => review.venue_id === venueId);
}

export function getReviewsCount(venueId) {
  return reviews.filter(review => review.venue_id === venueId).length;
}

export function getReviewsRating(venueId, fixedValue = 0) {
  const reviewsList = getReviews(venueId);
  const reviewsCount = reviewsList.length;
  const fixedReviewsSummary = (
    reviewsList.reduce((prev, next) => +prev + +next.rating, 0) / reviewsCount
  ).toFixed(fixedValue);

  if (isNaN(fixedReviewsSummary)) {
    return 'N/A';
  } else {
    return fixedReviewsSummary;
  }
}

export function getVenueDetails(venueId) {
  return venues.find(venue => venue.id === venueId);
}

export function getPlaces(term) {
  if (term) {
    return venues.filter(venue =>
      venue.name.toLowerCase().includes(term.toLowerCase())
    );
  }
  return venues;
}
