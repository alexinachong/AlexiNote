import { merge } from 'lodash';
import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';

const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      return merge({}, action.notebooks);
    case RECEIVE_NOTEBOOK:
      const notebookId = Object.keys(action.notebook)[0];
      return merge({}, state, {[notebookId]: action.notebook[notebookId]});
    case REMOVE_NOTEBOOK:
      let newState = merge({}, state);
      delete newState[action.notebookId];
      // TO DO (in NotesReducer): Some recursive logic to remove child notes as well?
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;
