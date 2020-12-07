import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from './config';
import ForgetPassword from './screens/ForgetPassword';
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import Verify from './screens/Verify';
import Application from './screens/Application';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.register.root} render={({ match }) => <Register match={match} />} />
        <Route exact path={Routes.login} render={({ match }) => <Login match={match} />} />
        <Route exact path={Routes.verify} render={({ match }) => <Verify match={match} />} />
        <Route exact path={Routes.forgot} render={({ match }) => <ForgetPassword match={match} />} />
        <Route exact path={Routes.reset} render={({ match }) => <ResetPassword match={match} />} />

        <PrivateRoute exact path={Routes.home}>
          <Application />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

export const PrivateRoute = ({ children, ...rest }) => {
  //Loading
  //Server error
  //return sth
  return (
    <Route {...rest} render={({ location, match }) => React.cloneElement(children, { match: match })} />
  )
}
