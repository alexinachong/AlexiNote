import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div className="container">
    <header className="top-nav-bar-outer-container">
      <section className="top-nav-bar-inner-container">
        <section className="top-nav-bar-logo">
          <img src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/AlexiNote_Logo_v4_1-72x0-22.png" />
        </section>
        <section className="top-nav-bar-demo">
          <Link to="/notes" className="demo-buttons">Demo</Link>
        </section>
      </section>
    </header>

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
        <section className="footer-inner-right"><Link to="#">GitHub</Link> | <Link to="#">LinkedIn</Link> | <Link to="#">Me</Link></section>

      </section>
    </footer>
  </div>
);

export default App;
