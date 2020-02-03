import {
  SET_USER_LOGGED_IN,
  SET_USER_LOGGED_OUT
} from "../actions/actionTypes";

import initialState from "./initialState";

const loggedIn = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return true;
    case SET_USER_LOGGED_OUT:
      return false;
    default:
      return state;
  }
};

export default loggedIn;
