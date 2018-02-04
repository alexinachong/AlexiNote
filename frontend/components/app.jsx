import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import TopNavContainer from './top_nav/top_nav_container';
import MainContainer from './splash/main_container';
import SessionFormContainer from './session_form/session_form_container';
import Footer from './splash/footer';

const App = () => (
  <div className="container">
    <Switch>
      <AuthRoute exact path="/" component={TopNavContainer} />
      <AuthRoute exact path="/login" component={TopNavContainer} />
    </Switch>

    <Switch>
      <AuthRoute exact path="/" component={MainContainer} />
      <AuthRoute exact path="/login" component={MainContainer} />
    </Switch>

    <Switch>
      <AuthRoute exact path="/" component={Footer} />
      <AuthRoute exact path="/login" component={Footer} />
    </Switch>
  </div>
);

export default App;
