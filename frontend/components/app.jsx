import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import TopNavContainer from './top_nav/top_nav_container';

const App = () => (
  <div className="container">
    <Route exact path="/" component={TopNavContainer} />
    <Route exact path="/login" component={TopNavContainer} />

    <main className="splash-body">
      <section className="splash-main-left">
        <h1>Meet AlexiNote. Lorem ipsum dolor sit amet.</h1>
      </section>
      <section className="splash-main-right">
        <Route exact path="/" component={SessionFormContainer} />
        <Route path="/login" component={SessionFormContainer} />
      </section>

    </main>

    <footer className="footer-outer-container">
      <section className="footer-inner-container">
        <section className="footer-inner-left">(c) 2018 Alexina Chong</section>
        <section className="footer-inner-right">
          <a href="https://github.com/alexinachong/">GitHub</a> | <a href="https://www.linkedin.com/in/alexinachong/">LinkedIn</a> | <Link to="#">Me</Link>
        </section>

      </section>
    </footer>
  </div>
);

export default App;
