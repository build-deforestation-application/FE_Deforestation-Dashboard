import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// reducers
import search from './search.reducer';

const rootReducer = combineReducers({
  search,
});

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleware);

export default store;
