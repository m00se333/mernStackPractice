import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from "react-router";

// Router dependencies
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

// Components

import App from "./components/App";
import Main from "./components/Main";
import NotFound from "./components/NotFound";



// store
import store, { history } from "./store.js";

const router = (

    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Main}></IndexRoute>
          <Route path="/*" component={NotFound}></Route>
        </Route>
      </Router>
  </Provider>

  )

render(router, document.querySelector("#root"));