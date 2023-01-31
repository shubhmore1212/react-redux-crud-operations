import {
  GET_USER,
  SET_USER_LIST,
  ADD_USER,
  SET_EDIT_USER_ID,
  EDIT_USER,
  DELETE_USER,
} from "./constants";

export const getUser = () => ({
  type: GET_USER,
});

export const setUser = (user: any) => ({
  type: SET_USER_LIST,
  user,
});

export const addUser = (user: any) => ({
  type: ADD_USER,
  user,
});

export const setEditId = (id: number) => ({
  type: SET_EDIT_USER_ID,
  payload: id,
});

export const editUser = (user: any) => ({
  type: EDIT_USER,
  user,
});

export const deleteUser = (id: number) => ({
  type: DELETE_USER,
  id,
});
