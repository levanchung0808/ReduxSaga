import {LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_USER} from './actionType';

export const fetchLoginAction = (payload: any) => {
  return {
    type: LOGIN_USER,
    payload: payload,
  };
};

export const fetchLoginSuccessAction = (user: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const fetchLoginFailedAction = (error: any) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};
