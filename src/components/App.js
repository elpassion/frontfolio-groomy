import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { routes } from '../data/routes';
import Home from '../components/views/Home';
import Login from '../components/views/Login';
import GlobalStyles from '../theme/globalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <GlobalStyles />

        <Route exact path={routes.login} component={Login} />
        <Route path={routes.dashboard} component={Home} />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
