import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let formType = "Sign up";
  if (ownProps.location.pathname === "/login") {
    formType = "Log in";
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.sessionErrors,
    formType: formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.location.pathname.slice(1) === "login") ? login : signup;
  return {
    processForm: user => dispatch(processForm(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
