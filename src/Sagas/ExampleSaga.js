import { put, call } from 'redux-saga/effects';
import PostsActions from "../Redux/Posts";

export function * onExampleFetch(api, action) {

  const response = yield call(api.getExampleData, action.data)

  console.log(action.data);
  console.log(response.data);

  if (response.ok) {
    console.log('Profile succesfully updated');
    yield put(PostsActions.postsSuccess(response.data))
  } else {
    console.log('Profile did not update. Backend might be down.');
    yield put(PostsActions.postsFailure())
  }

}
