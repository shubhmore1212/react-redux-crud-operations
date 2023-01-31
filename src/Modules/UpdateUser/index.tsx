import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import UpdateUserComponent from "./components";

import { ROUTES } from "../../constants";

import { editUser } from "../../services/action";
import { PartialGetUserResponse } from "../../services/types";

const UpdateUserContainer = () => {
  const { user } = useSelector((state: any) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUser = () => {
    return user.user.find((u: any) => u.id === user.editUserId);
  };

  useEffect(() => {
    if (getUser() === undefined) {
      navigate(ROUTES.HOME);
    }
  }, []);

  const initialValues: PartialGetUserResponse = {
    id: getUser()?.id,
    first_name: getUser()?.first_name,
    last_name: getUser()?.last_name,
    email: getUser()?.email,
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().trim().required(),
    last_name: Yup.string().trim().required(),
    email: Yup.string().trim().required(),
  });

  const onSubmit = (values: any) => {
    dispatch(editUser({ ...values }));
    navigate(ROUTES.HOME);
  };

  return (
    <UpdateUserComponent
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(UpdateUserContainer);
