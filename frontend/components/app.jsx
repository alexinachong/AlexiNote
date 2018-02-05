import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import TopNavContainer from './top_nav/top_nav_container';
import MainContainer from './splash/main_container';
import SessionFormContainer from './session_form/session_form_container';
import Footer from './splash/footer';
import NotebooksOverlayContainer from './notebooks/notebooks_overlay_container';
import LeftNavContainer from './left_nav/left_nav_container';

const App = () => (
  <div className="container">
    <ProtectedRoute path="/notebooks" component={NotebooksOverlayContainer} />
    <ProtectedRoute path="/notebooks" component={LeftNavContainer} />

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
