import { combineReducers } from "redux";
import usersData from "./usersData.js";
import loginUser from "./loginUserData.js";

const reducers = combineReducers({
  usersData,
  loginUser
});
export default reducers;
