import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from './config';
import Home from './screens/Home';
import Login from './screens/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.register.root} />
        <Route exact path={Routes.login} render={({ match }) => <Login match={match}/>} />
        <PrivateRoute exact path={Routes.home}>
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

const PrivateRoute = ({ children, ...rest }) => {
  //Loading
  //Server error
  //return sth
  return (
    <Route {...rest} render={({ location, match }) => React.cloneElement(children, { match: match })} />
  )
}
