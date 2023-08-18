import {LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_USER} from '../actions/actionType';
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

interface DataUser {
  results: string;
}

interface FetchUserAction {
  type: typeof LOGIN_USER;
  payload: {
    username: string;
    password: string;
    machine_id: string;
  };
}

function* fetchUser(action: FetchUserAction) {
  try {
    const {username, password, machine_id} = action.payload;
    const dataUser: DataUser = yield Api.logintUserFromApi(
      username,
      password,
      machine_id,
    );
    if (dataUser.results === 'S') {
      console.log("dataUser.results === 'S'");
      yield put({
        type: LOGIN_SUCCESS,
        payload: dataUser,
        username: username,
        password: password,
      });
    } else if (dataUser.results === 'F') {
      console.log("dataUser.results === 'F'");
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
