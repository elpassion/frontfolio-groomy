import React from 'react';

import { SearchWrapper, SearchInput } from './SearchStyles';
import { SearchIcon } from '../_svgAssets/SearchIcon';

export class Search extends React.Component {
  updateValue = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <SearchWrapper>
        <SearchIcon />
        <SearchInput
          onChange={this.updateValue}
          placeholder='Find a Service...'
          spellcheck='false'
        />
      </SearchWrapper>
    );
  }
}

Search.displayName = 'Search';
