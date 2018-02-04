import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer-outer-container">
        <section className="footer-inner-container">
          <section className="footer-inner-left">&copy; 2018 Alexina Chong</section>
          <section className="footer-inner-right">
            <a href="https://github.com/alexinachong/">GitHub</a> | <a href="https://www.linkedin.com/in/alexinachong/">LinkedIn</a> | <Link to="#">Contact</Link>
          </section>
        </section>
      </footer>
    );
  }
}

export default Footer;
