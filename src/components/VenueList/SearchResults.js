import React from 'react';

import VenueItem from '../VenueItem';
import EmptyState from './EmptyState';
import { ResultsWrapper } from './SearchResultsStyles';

const SearchResults = ({ results }) => (
  <ResultsWrapper>
    {results.length === 0 ? (
      <EmptyState />
    ) : (
      results.map(venue => <VenueItem key={venue.id} details={venue} />)
    )}
  </ResultsWrapper>
);

SearchResults.displayName = 'SearchResults';
export default SearchResults;
