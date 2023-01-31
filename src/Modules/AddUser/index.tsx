import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AddUserComponent from "./components";

import { ROUTES } from "../../constants";

import { addUser } from "../../services/action";

import { PartialGetUserResponse } from "../../services/types";

const AddUserContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: PartialGetUserResponse = {
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().trim().required("Required"),
    last_name: Yup.string().trim().required("Required"),
    email: Yup.string().email().trim().required("Required"),
  });

  const onSubmit = (values: PartialGetUserResponse) => {
    dispatch(addUser({ ...values }));
    navigate(ROUTES.HOME);
  };

  return (
    <AddUserComponent
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(AddUserContainer);
