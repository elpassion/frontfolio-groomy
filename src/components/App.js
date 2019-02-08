import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navigation from './Navigation/Navigation';
import Home from '../components/Views/Home';
import Place from '../components/Views/Place';
import GlobalStyles from '../theme/globalStyle';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyles />

        <Route
          render={({ location }) => {
            return (
              <React.Fragment>
                <Navigation route={location} />

                <TransitionGroup component={null}>
                  <CSSTransition
                    timeout={1000}
                    classNames='page'
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/places/:id' component={Place} />
                      <Route component={Home} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </React.Fragment>
            );
          }}
        />
      </React.Fragment>
    </Router>
  );
};

export default App;
