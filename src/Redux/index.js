import {Posts as posts} from './Posts';
import { combineReducers } from 'redux'
import configureStore from '../Store/CreateStore'
import rootSaga from '../Sagas/index'
import 'bootstrap/dist/css/bootstrap.css';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    posts:posts,
  })

  return configureStore(rootReducer, rootSaga)
}
