import { takeLatest } from "redux-saga/effects";

import {
  handleGetUser,
  handleAddUser,
  handleEditUser,
  handleDeleteUser,
} from "./userSaga";

import { ADD_USER, DELETE_USER, EDIT_USER, GET_USER } from "./constants";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(ADD_USER, handleAddUser);
  yield takeLatest(EDIT_USER, handleEditUser);
  yield takeLatest(DELETE_USER, handleDeleteUser);
}
