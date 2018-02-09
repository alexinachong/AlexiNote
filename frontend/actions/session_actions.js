import * as SessionAPIUtil from '../utils/session_api_util';
import { createNotebook } from './notebook_actions';

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

const defaultNotebook = { title: "Default Notebook" };

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(
    newUser => {
      dispatch(receiveCurrentUser(newUser));
      dispatch(createNotebook(defaultNotebook));
    },
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

export const clearErrors = () => dispatch => (
  () => dispatch(receiveSessionErrors([]))
);
