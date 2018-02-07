import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './utils/session_api_util';
import { fetchNotebooks } from './actions/notebook_actions';
import { createNote } from './actions/note_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.fetchNotebooks = fetchNotebooks;
  window.createNote = createNote;
  ReactDOM.render(<Root store={ store } />, root);
});
