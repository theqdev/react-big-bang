import { takeLatest, put, call } from 'redux-saga/effects';
import ExampleActions from "../Redux/Example";

export function * onExampleFetch(api, action) {

  const response = yield call(api.getExampleData, action.data)

  console.log(action.data);
  console.log(response);

  if (response.ok) {
    console.log('Profile succesfully updated');
    yield put(ExampleActions.exampleSuccess())
  } else {
    console.log('Profile did not update. Backend might be down.');
    yield put(ExampleActions.exampleFailure())
  }

}
