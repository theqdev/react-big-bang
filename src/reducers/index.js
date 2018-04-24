import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import example from './ExampleReducer';


const rootReducer = combineReducers({
  example,
  routing: routerReducer
});

export default rootReducer;
