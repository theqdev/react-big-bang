import { put, call } from 'redux-saga/effects';
import PostsActions from "../Redux/Posts";

export function * onExampleFetch(api, action) {
  const response = yield call(api.getPosts, action.data)
  if (response.ok) {
    console.log('API Data fetched');
    yield put(PostsActions.postsSuccess(response.data))
  } else {
    console.log('API Data fetched. Backend might be down.');
    yield put(PostsActions.postsFailure())
  }
}
