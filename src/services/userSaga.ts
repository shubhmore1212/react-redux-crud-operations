import { DELETE, GET, PATCH, POST } from "./axios";
import { toast } from "react-toastify";
import { put } from "redux-saga/effects";

import { setUser } from "./action";

export function* handleGetUser() {
  try {
    let data: any;
    yield GET("/users").then((res) => {
      data = res.data;
      return res;
    });
    yield put(setUser(data));
  } catch (error) {
    toast.error("error");
    return error;
  }
}

export function* handleAddUser(action: any) {
  try {
    yield POST("/users", action.user).then((res) => {
      toast.success(`${action.user.first_name} User Added Successfully`);
      return res;
    });
  } catch (error) {
    toast.error("error");
    return error;
  }
}

export function* handleEditUser(action: any) {
  try {
    yield PATCH(`/users/${action.user.id}`, action.user).then((res) => {
      toast.success(`${action.user.first_name} User Updated Successfully`);
      return res;
    });
  } catch (error) {
    toast.error("error");
    return error;
  }
}

export function* handleDeleteUser(action: any) {
  try {
    yield DELETE(`/users/${action.id}`).then((res) => {
      toast.success("User Deleted Successfully");
    });
  } catch (error) {
    toast.error("error");
  }
}
