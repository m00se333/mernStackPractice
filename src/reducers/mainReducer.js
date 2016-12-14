import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// smaller reducers

import task from "./taskReducer";
import test from "./testReducer";

const rootReducer = combineReducers({test, task, routing: routerReducer});

export default rootReducer;