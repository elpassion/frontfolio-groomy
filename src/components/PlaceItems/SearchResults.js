import React from 'react';
import { getPlaces } from '../../helpers/functions';
import PlaceItem from './PlaceItem';
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
          results.map(place => <PlaceItem key={place.id} details={place} />)
        )}
      </ResultsWrapper>
    );
  }
}

export default SearchResults;
