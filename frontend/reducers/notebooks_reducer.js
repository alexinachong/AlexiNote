import { merge } from 'lodash';
import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';

const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks;
    default:
      return state;
  }
};

export default notebooksReducer;
