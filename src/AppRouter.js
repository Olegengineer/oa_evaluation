import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DASHBOARD_PAGE, HOME_PAGE } from './constants/routes';

import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { HomePage } from './pages/HomePage/HomePage';

import Layout from './components/Layout';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${HOME_PAGE}`} component={HomePage} />
        <Route exact path={`${DASHBOARD_PAGE}`} component={DashboardPage} />
      </Switch>
    </Layout>
  );
};

const AppRouter = () => (
  <Router>
    <Routes />
  </Router>
);

export default AppRouter;
