import { createStore } from "redux";
import { combineReducers } from "redux";
import data from "../modules/Data";
const rootReducer = combineReducers({
  data,
});
const store = createStore(rootReducer);

export default store;
