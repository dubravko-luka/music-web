import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import windowReducer from './reducers/windowReducer';

const rootReducer = combineReducers({
  window: windowReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
