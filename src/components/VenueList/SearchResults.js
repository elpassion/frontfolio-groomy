import React from 'react';

import { getPlaces } from 'data/api';
import VenueItem from '../VenueItem';
import EmptyState from './EmptyState';
import { ResultsWrapper } from './SearchResultsStyles';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: getPlaces(),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.term !== this.props.term) {
      this.setState({
        results: getPlaces(nextProps.term),
      });
    }
  }

  render() {
    const { results } = this.state;
    const { term } = this.props;

    return (
      <ResultsWrapper>
        {results.length === 0 ? (
          <EmptyState term={term} />
        ) : (
          results.map(venue => <VenueItem key={venue.id} details={venue} />)
        )}
      </ResultsWrapper>
    );
  }
}

SearchResults.displayName = 'SearchResults';
export default SearchResults;
