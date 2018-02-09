import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="splash-body">
        <section className="splash-main-left">
          <h1>Meet AlexiNote, your second brain.</h1>
        </section>
        <section className="splash-main-right">
          <Switch>
            <AuthRoute exact path="/" component={SessionFormContainer} />
            <AuthRoute exact path="/login" component={SessionFormContainer} />
          </Switch>
        </section>
      </main>
    );
  }
}

export default Main;
