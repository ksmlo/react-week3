import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ROUTE } from './route/index'

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
    {ROUTE.map((route, i) => (
      <Route exact path={route.path} component={route.component} />
    ))}
  </Router>
  );
}

export default App;
