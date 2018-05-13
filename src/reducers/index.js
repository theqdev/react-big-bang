import {example as example} from '../Redux/Example';
import { combineReducers } from 'redux'
import configureStore from '../store/CreateStore'
import rootSaga from '../Sagas/index'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({

    example:example,
    // app: require('./UserRedux').reducer,
    // users: require('./UsersRedux').reducer,
    // settings: require('./UserSettings').reducer,
    // profile: require('./UserProfile').reducer,
    // matches: require('./MatchesRedux').reducer,
    // location: require('./LocationRedux').reducer,
    // conversations: require('./UserMessages').reducer,
    // messages: require('./ChatRoomRedux').reducer,
    // report: require('./UserReportRedux').reducer,
    // notification: require('./NotificationRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
