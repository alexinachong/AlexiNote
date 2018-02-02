import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSession = this.demoSession.bind(this);
  }

  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user).then(() => this.props.history.push('/notes'));
  }

  demoSession(e) {
    e.preventDefault();
    const demoUser = {
      email: 'ac@gmail.com',
      password: 'password'
    };
    this.props.processForm(demoUser).then(() => this.props.history.push('/notes'));
  }

  navLink() {
    if (this.props.formType === "Log in") {
      return <p>First time here? <Link to="/" onClick={this.props.clearErrors()}>Sign up!</Link></p>;
    } else {
      return <p>Been here before? <Link to="/login" onClick={this.props.clearErrors()}>Log in!</Link></p>;
    }
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return (
        []
      );
    } else {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="error-view">
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    // console.log(this.props.loggedIn, this.props.errors, this.props.formType);
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h3>{this.props.formType}</h3>
          {this.navLink()}<br />
          {this.renderErrors()}
          <div className="session-form">
            <br />
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
              />
            </label>

            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            <br />
            <input type="submit" value="Submit" />

            <button onClick={this.demoSession}>Demo</button>
          </div>

        </form>
      </div>
    );
  }
}

export default SessionForm;
