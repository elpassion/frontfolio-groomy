import React from 'react';
import Search from '../Search/Search';
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
      <React.Fragment>
        <Search onChange={this.updateSearchTerm.bind(this)} />
        <SearchResults term={searchInputValue} />
      </React.Fragment>
    );
  }
}

export default PlaceList;
