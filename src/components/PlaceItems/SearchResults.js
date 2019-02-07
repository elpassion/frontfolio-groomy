import React from 'react';
import { getPlaces } from '../../helpers/functions';

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
      <ul>
        {results.map(place => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    );
  }
}

export default SearchResults;
