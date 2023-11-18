import { createStore } from "redux";
import { combineReducers } from "redux";
import tabReducer from "../modules/tabReducer";
const rootReducer = combineReducers({
  tabReducer,
});
const store = createStore(rootReducer);

export default store;
