import { merge } from 'lodash';
import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTES:
      return merge({}, action.notes);
    case RECEIVE_NOTE:
      return merge({}, state, {[action.note.id]: action.note});
    case REMOVE_NOTE:
      let newState = merge({}, state);
      delete newState[action.noteId];
      // TO DO (in NotesReducer): Some recursive logic to remove child notes as well?
      return newState;
    // case REMOVE_NOTEBOOK:

    default:
      return state;
  }
};

export default notesReducer;
