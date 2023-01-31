import { SET_EDIT_USER_ID, SET_USER_LIST } from "./constants";

import { GetUserResponse } from "./types";

interface initialStateType {
  user: GetUserResponse[];
  editUserId: number;
  isLoading: boolean;
}

const initialState: initialStateType = {
  user: [],
  editUserId: -1,
  isLoading: true,
};

const userData = (state = initialState, action: any) => {
  const { user, type, payload } = action;
  switch (type) {
    case SET_USER_LIST:
      return { ...state, user, isLoading: false };
    case SET_EDIT_USER_ID:
      return { ...state, editUserId: payload };
    default:
      return { ...state };
  }
};

export default userData;
