import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import App from "./App";
import reduxThunkReducer from './reduxLogic/apiReducer';

const middlewares = [thunk];

const store = createStore(reduxThunkReducer, applyMiddleware(...middlewares) );

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);









