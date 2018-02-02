import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div className="container">
    <section className="top-nav-bar-container">
      <section className="top-nav-bar-logo">

      </section>
      <section className="top-nav-bar-demo">
        <Link to="/notes">DEMO</Link>
      </section>
    </section>

    <Route exact path="/" component={SessionFormContainer} />
    <Route path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
