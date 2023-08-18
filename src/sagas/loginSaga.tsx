import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_USER } from '../actions/actionType';
import { put, takeLatest, call } from 'redux-saga/effects';
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
    password: string;
    machine_id: string;
  };
}
interface IUser {
  username: string;
  password: string;
  machine_id: string;
}


function* fetchUser(payload: IUser) {
  try {
    console.log('fetchUser: ', payload.username, payload.password, payload.machine_id);

    const dataUser: DataUser = yield Api.logintUserFromApi(
      payload.username,
      payload.password,
      payload.machine_id,
    );
    console.log('dataUser: ', dataUser);
    if (dataUser.results === 'S') {
      //console.log("dataUser.results === 'S'");
      yield put({
        type: LOGIN_SUCCESS,
        payload: dataUser,
        username: payload.username,
        password: payload.password,
      });
    } else if (dataUser.results === 'F') {
      //console.log("dataUser.results === 'F'");
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
  console.log('watchFetchUser');

  yield takeLatest(LOGIN_USER, fetchUser);
}
