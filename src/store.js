import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import thunkMiddleware from "redux-thunk";



// reducers 



// main reducer
import rootReducer from "./reducers/mainReducer";



const defaultState = {

  task: {},
  test: {}

}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunkMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;