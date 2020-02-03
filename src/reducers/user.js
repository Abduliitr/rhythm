import {
  FETCH_USER_FROM_API,
  CLEAN_USER_FROM_STATE,
  SET_USER_UID
} from "../actions/actionTypes";

import initialState from "./initialState";

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER_UID:
      return { ...state, ...action.data };
    case FETCH_USER_FROM_API:
      return { ...state, ...action.user };
    case CLEAN_USER_FROM_STATE:
      return Object.assign({}, {});
    default:
      return state;
  }
};

export default user;
