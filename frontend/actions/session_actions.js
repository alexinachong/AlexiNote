import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(
    newUser => (dispatch(receiveCurrentUser(newUser))),
    err => (dispatch(receiveSessionErrors(err.responseJSON)))
  )
);

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user).then(
    currentUser => (dispatch(receiveCurrentUser(currentUser))),
    err => (dispatch(receiveSessionErrors(err.responseJSON)))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(
    user => (dispatch(receiveCurrentUser(null)))
  )
);
