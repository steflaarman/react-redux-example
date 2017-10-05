import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [
  // remove for production
  reduxImmutableStateInvariant(),
  thunk
];

export function configureStore(initialState) {
  return createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(...middlewares)
  ));
}
