import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import windowReducer from './reducers/windowReducer';
import globalReducer from './reducers/globalReducer';
import mediaReducer from './reducers/mediaReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  global: globalReducer,
  media: mediaReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
