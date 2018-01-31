import React from 'react';
import ReactDOM from 'react-dom';
// TO DO: write the below
// import configureStore from './store/store';
// import Root from './components/root';
import { signup, login, logout } from './utils/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  // TO DO: implement the following; add whatever else
  const root = document.getElementById("root");
  // const store = configureStore();
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<h1>Welcome to AlexiNote!</h1>, root);
});
