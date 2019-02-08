import React from 'react';
import { withRouter } from 'react-router-dom';
import { getPlaces } from '../../helpers/functions';
import PlaceItem from './PlaceItem';
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

    return (
      <ResultsWrapper>
        {results.map(place => (
          <PlaceItem key={place.id} details={place} />
        ))}
      </ResultsWrapper>
    );
  }
}

export default withRouter(SearchResults);
