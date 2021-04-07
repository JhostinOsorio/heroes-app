import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <PrivateRouter path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
