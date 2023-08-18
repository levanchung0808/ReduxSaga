import {call, all} from 'redux-saga/effects';
import {watchFetchUser} from './loginSaga';

export default function* rootSaga() {
  yield all([
    call(watchFetchUser),
  ]);

}
