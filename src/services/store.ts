import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./rootSaga";

import userData from "./userReducer";

const reducer = combineReducers({
  user: userData,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({ reducer, middleware: () => middleware });

sagaMiddleware.run(watcherSaga);

export default store;
