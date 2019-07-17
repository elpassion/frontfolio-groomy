import React from 'react';

import { getPlaces } from 'data/api';
import { Search } from '../Search';
import { SearchResults } from './SearchResults';

export class VenueList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: '',
      results: [],
    };
  }

  componentDidMount() {
    this.setState({ results: getPlaces() });
  }

  updateSearchTerm = term => {
    this.setState({ searchInputValue: term });
    this.updateResults(term);
  };

  updateResults = term => {
    this.setState({ results: getPlaces(term) });
  };

  render() {
    const { searchInputValue, results } = this.state;

    return (
      <>
        <Search onChange={this.updateSearchTerm} />
        <SearchResults term={searchInputValue} results={results} />
      </>
    );
  }
}

VenueList.displayName = 'VenueList';
