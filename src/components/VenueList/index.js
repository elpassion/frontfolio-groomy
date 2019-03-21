import React from 'react';

import Search from '../Search';
import SearchResults from './SearchResults';

class PlaceList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: [],
    };
  }

  updateSearchTerm = term => {
    this.setState({
      searchInputValue: term,
    });
  };

  render() {
    const { searchInputValue } = this.state;

    return (
      <>
        <Search onChange={this.updateSearchTerm.bind(this)} />
        <SearchResults term={searchInputValue} />
      </>
    );
  }
}

export default PlaceList;
