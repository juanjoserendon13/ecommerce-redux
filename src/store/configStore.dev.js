import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// For development
const loggerMiddleware = createLogger();

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, loggerMiddleware),
);

export default function configStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
