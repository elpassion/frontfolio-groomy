import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

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
            <PageTransition timeout={500}>
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/places/:id' component={Place} />
              </Switch>
            </PageTransition>
          )}
        />
      </React.Fragment>
    </Router>
  );
};

export default App;
