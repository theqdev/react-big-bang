import { takeLatest, all } from 'redux-saga/effects'
import "regenerator-runtime/runtime";
import API from '../Services/Api'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { ExampleActions } from '../Redux/Example'
// import { UserActions } from '../Redux/UserRedux'
// import { SettingsActions } from '../Redux/UserSettings'
// import { ProfileActions } from '../Redux/UserProfile'
// import { UsersActions } from '../Redux/UsersRedux'
// import { MatchesActions } from '../Redux/MatchesRedux'
// import { LocationActions } from '../Redux/LocationRedux'
// import { ConversationActions } from '../Redux/UserMessages' // TODO: Add redux to name
// import { MessagesActions } from '../Redux/ChatRoomRedux'
// import { UserReportActions } from '../Redux/UserReportRedux'
// import {NotificationActions} from "../Redux/NotificationRedux";

/* ------------- Sagas ------------- */

import { onExampleFetch } from './ExampleSaga'
// import { onFetchRecords } from './UserSaga'
// import { onSettingsSet } from './SettingsSaga'
// import { onProfileUpdate } from './ProfileSaga'
// import { onUsersFetch  } from './UsersSaga'
// import { onActionSent  } from './MatchesSaga'
// import { onLocationUpdate  } from './LocationSaga'
// import { onConversationsFetch  } from './ConvesationsSaga'
// import { onNewMessage, onMessagesFetched  } from './MessagesSaga'
// import { onReportSent } from './UserReportSaga'
// import { onDeviceTokenUpdate } from './NotificationSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api =  API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(ExampleActions.EXAMPLE_SET, onExampleFetch, api),
    //
    // takeLatest(UserActions.USER_REQUEST, onFetchRecords),
    // takeLatest(SettingsActions.SETTINGS_SET, onSettingsSet, api),
    // takeLatest(ProfileActions.PROFILE_SET, onProfileUpdate, api),
    //
    // takeLatest(UsersActions.GENERAL_REQUEST, onUsersFetch, api),
    //
    //
    // takeLatest(MatchesActions.MATCH_REQUEST, onActionSent, api),
    //
    // takeLatest(ConversationActions.CONVERSATIONS_REQUEST, onConversationsFetch, api),
    //
    // //TODO: Not really needing these ones
    // takeLatest(MessagesActions.MESSAGE_ADD, onNewMessage, api),
    // takeLatest(MessagesActions.MESSAGES_REQUEST,  onMessagesFetched, api),
    //
    // takeLatest(LocationActions.LOCATION_REQUEST, onLocationUpdate, api),
    // takeLatest(NotificationActions.NOTIFICATION_REQUEST, onDeviceTokenUpdate, api),
    //
    // takeLatest(UserReportActions.REPORT_SEND, onReportSent, api),

  ])
}
