import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navigation from './Navigation/Navigation';
import Home from '../components/Views/Home';
import Place from '../components/Views/Place';
import GlobalStyles from '../styles/global';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet
        titleTemplate={`${process.env.REACT_APP_PAGE_TITLE} | %s`}
        defaultTitle={process.env.REACT_APP_PAGE_TITLE}
        htmlAttributes={{ lang: 'en' }}
      >
        <meta
          name='description'
          content='Groomy helps you find the best groomer in town, book a visit and
          pay online - all in one mobile application'
        />
      </Helmet>
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
                      timeout={300}
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
    </>
  );
};

export default App;
