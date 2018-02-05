import { combineReducers } from 'redux';
import notebooksReducer from './notebooks_reducer';

const entitiesReducer = combineReducers({
  notebooks: notebooksReducer
});

export default entitiesReducer;
