import { takeLatest, all } from 'redux-saga/effects';
import "regenerator-runtime/runtime";
import API from '../Services/Api';

/* ------------- Types ------------- */
import { PostsActions } from '../Redux/Posts';

/* ------------- Sagas ------------- */
import { onExampleFetch } from './PostsSaga';

/* ------------- API ------------- */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* rootSaga() {
  yield all([
    // some sagas only receive an action
    takeLatest(PostsActions.POSTS_GET, onExampleFetch, api),
  ]);
}
