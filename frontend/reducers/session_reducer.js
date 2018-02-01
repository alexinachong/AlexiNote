import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _defaultUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _defaultUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      // below is equivalent to { currentUser: action.currentUser }
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
