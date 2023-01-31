import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DisplayUserComponent from "./components";
import Loader from "../../SharedComponents/Loader";

import { ROUTES } from "../../constants";
import { deleteUser, getUser, setEditId } from "../../services/action";

const DisplayUsersContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const addButtonHandler = () => {
    navigate(ROUTES.ADD_USER);
  };

  const editHandler = (id: number) => {
    navigate(ROUTES.EDIT_USER);
    dispatch(setEditId(id));
  };

  const deleteHandler = (id: number) => {
    dispatch(deleteUser(id));
  };

  if (user.isLoading) {
    return <Loader />;
  }

  return (
    <DisplayUserComponent
      users={user.user}
      addButtonHandler={addButtonHandler}
      editHandler={editHandler}
      deleteHandler={deleteHandler}
    />
  );
};

export default React.memo(DisplayUsersContainer);
