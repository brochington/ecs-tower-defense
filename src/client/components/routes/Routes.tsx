import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';


const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/about">
          <AboutPage />
        </Route> */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;