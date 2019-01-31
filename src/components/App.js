import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/globalStyle';
import { SiteThemeContext } from '../contexts/SiteThemeContext';

const App = () => {
  return (
    <SiteThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyles />

            Content goes here
          </React.Fragment>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  );
};

export default App;
