import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './utils/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  // TO DO: implement the following; add whatever else
  const root = document.getElementById("root");
  const store = configureStore();
  // window.store = store;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<Root store={ store } />, root);
});
