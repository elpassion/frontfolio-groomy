import React from 'react';
import PropTypes from 'prop-types';
import { themes } from '../theme/globalStyle';

export const SiteThemeContext = React.createContext();

export class SiteThemeProvider extends React.Component {
  state = {
    theme: themes['default']
  };

  render() {
    return (
      <SiteThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SiteThemeContext.Provider>
    );
  }
}

SiteThemeProvider.propTypes = {
  children: PropTypes.any
};
