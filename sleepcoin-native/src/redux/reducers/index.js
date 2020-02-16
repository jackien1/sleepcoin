import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import SleepReducer from "./sleepReducer";

export default combineReducers({
  auth: AuthReducer,
  sleep: SleepReducer
});
