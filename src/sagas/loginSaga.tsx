import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_USER } from '../actions/actionType';
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

interface DataUser {

  results: string,
  errorData: string,
  totalTable: number,
  table: {},
  totalRow: number,
  data: {}

};

interface FetchUserAction {
  payload: {
    username: string;
    pw: string;
    machine_id: string;
  };
}


function* fetchUser({payload: {username, pw, machine_id}}: FetchUserAction) {
  try {
    console.log('fetchUser: ', username, pw, machine_id);
    const dataUser: DataUser = yield Api.logintUserFromApi(
      username,
      pw,
      machine_id,
    );
    if (dataUser.results === 'S') {
      yield put({
        type: LOGIN_SUCCESS,
        payload: dataUser,
        username: username,
        pw: pw,
      });
    } else if (dataUser.results === 'F') {
      yield put({
        type: LOGIN_FAILED,
        payload: dataUser,
      });
    }
  } catch (err) {
    console.log('err', err);
  }
}

export function* watchFetchUser() {
  yield takeLatest(LOGIN_USER, fetchUser);
}
