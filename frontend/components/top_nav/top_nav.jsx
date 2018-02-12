import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.demoSession = this.demoSession.bind(this);
  }

  demoSession(e) {
    e.preventDefault();
    const demoUser = {
      email: 'demouser@gmail.com',
      password: 'password'
    };
    this.props.login(demoUser).then(() => this.props.history.push('/notes'));
  }

  render() {
    return (
      <div>
        <header className="top-nav-bar-outer-container">
          <section className="top-nav-bar-inner-container">
            <section className="top-nav-bar-logo">
              <img src="https://raw.githubusercontent.com/alexinachong/AlexiNote/master/app/assets/images/AlexiNote_Logo_v6.png" />
            </section>
            <section className="top-nav-bar-demo">
              <button onClick={this.demoSession} className="demo-buttons">Demo</button>
            </section>
          </section>
        </header>
      </div>
    );
  }
}

export default TopNav;
