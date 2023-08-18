import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/actionType';
const initData = {
    data: {},
    user_name: '',
    isLoading: false,
    error: '',
};

const loginReducer = (state = initData, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                user_name: action.payload.user_name,
                pass_word: action.payload.pass_word,
                error: '',
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: 'Login failed.'
            }
        default:
            return state;
    }
};

export default loginReducer;