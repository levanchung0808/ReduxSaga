import {combineReducers} from 'redux';
import loginReducers from '../reducers/loginReducer';

const appReducers = combineReducers({
  loginReducers,
  
});

const rootReducers = (state: any, action: any) => {
  return appReducers(state, action);
};

export default rootReducers;
