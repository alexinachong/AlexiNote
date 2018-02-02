import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="splash-body">
        <section className="splash-main-left">
          <h1>Meet AlexiNote. Lorem ipsum dolor sit amet.</h1>
        </section>
        <section className="splash-main-right">
          <Route exact path="/" component={SessionFormContainer} />
          <Route path="/login" component={SessionFormContainer} />
        </section>
      </main>
    );
  }
}

export default Main;
