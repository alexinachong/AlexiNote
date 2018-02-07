import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';
import TopNavContainer from '../top_nav/top_nav_container';
import MainContainer from '../splash/main_container';
import Footer from '../splash/footer';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopNavContainer />
        <Switch>
          <AuthRoute exact path="/" component={MainContainer} />
          <AuthRoute exact path="/login" component={MainContainer} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default SplashPage;
