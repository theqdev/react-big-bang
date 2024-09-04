import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { Posts as posts } from './Posts';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history), // Integrates the router state into Redux
    posts, // Your other reducers
  });
