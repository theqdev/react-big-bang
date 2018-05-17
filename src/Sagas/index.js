import { takeLatest, all } from 'redux-saga/effects'
import "regenerator-runtime/runtime";
import API from '../Services/Api'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import {PostsActions} from '../Redux/Posts'


/* ------------- Sagas ------------- */

import { onExampleFetch } from './ExampleSaga'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api =  API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(PostsActions.POSTS_SET, onExampleFetch, api),
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
