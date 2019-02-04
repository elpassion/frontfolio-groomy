import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

import Navigation from './Navigation/Navigation';
import Home from '../components/views/Home';
import Place from '../components/views/Place';
import GlobalStyles from '../theme/globalStyle';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyles />

        <Route
          render={({ location }) => (
            <React.Fragment>
              <Navigation route={location} />

              <PageTransition timeout={500}>
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/places/:id' component={Place} />
                  <Route component={Home} />
                </Switch>
              </PageTransition>
            </React.Fragment>
          )}
        />
      </React.Fragment>
    </Router>
  );
};

export default App;
