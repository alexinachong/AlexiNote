import { combineReducers } from 'redux';
import notebooksReducer from './notebooks_reducer';
import notesReducer from './notes_reducer';

const entitiesReducer = combineReducers({
  notebooks: notebooksReducer,
  notes: notesReducer
});

export default entitiesReducer;
