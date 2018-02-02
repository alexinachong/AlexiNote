import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default TopNav;
