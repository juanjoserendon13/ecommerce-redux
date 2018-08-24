import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, createLogger()),
);
const middleware = [thunk];

export default function configStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
