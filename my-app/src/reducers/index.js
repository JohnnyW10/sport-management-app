import { combineReducers } from "redux";
import users from './users'
import club from "./club";
import finance from './finance'
import magazine from "./magazine";
import injury from "./injury";
import schedule from "./schedule";

export default combineReducers({
  users,
  club,
  finance,
  magazine,
  injury,
  schedule,
})