import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/Index';
import thunk from 'redux-thunk'; 

const middlewares = [thunk/*, another middlewares */]; 
// Browser configuration
const composeEnhancers = compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);

export const store = createStore(reducers, enhancer);