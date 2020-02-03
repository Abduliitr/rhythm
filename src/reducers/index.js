import { combineReducers } from "redux";

import user from "./user";
import logStatus from "./logStatus.js";

const rootReducer = combineReducers({
  user,
  loggedIn: logStatus
});

export default rootReducer;
