import React from 'react'
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./src/reducers";
import rootSaga from "./src/sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

sagaMiddleware.run(rootSaga);

export default App;