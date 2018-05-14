import {example as example} from './Example';
import { combineReducers } from 'redux'
import configureStore from '../Store/CreateStore'
import rootSaga from '../Sagas/index'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({

    example:example,
  })

  return configureStore(rootReducer, rootSaga)
}
