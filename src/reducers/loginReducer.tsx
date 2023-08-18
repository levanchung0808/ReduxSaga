import {LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILED} from '../actions/actionType';

const initData = {
  data: {},
  user_name: '',
  isLoading: false,
  error: '',
};

const loginReducers = (user = initData, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log('LOGIN_USER tsx', action.payload);
      
      return {
        ...user,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...user,
        isLoading: false,
        data: action.payload,
        user_name: action.user_name,
        pass_word: action.pass_word,
        error: 'no',
      };
    case LOGIN_FAILED:
      return {
        ...user,
        isLoading: false,
        data: action.payload,
        error: 'Login fail',
      };
    default:
      return user;
  }
};

export default loginReducers;
