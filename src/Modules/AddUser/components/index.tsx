import React from "react";
import { Formik, Form } from "formik";
import { OptionalObjectSchema } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";

import Button from "../../../SharedComponents/Button";
import FormikControl from "../../../SharedComponents/FormikControl";

import {
  GetUserResponse,
  PartialGetUserResponse,
} from "../../../services/types";
import { AnyObject } from "yup/lib/types";

type validationSchemaType = OptionalObjectSchema<{
  first_name: RequiredStringSchema<string | undefined, AnyObject>;
  last_name: RequiredStringSchema<string | undefined, AnyObject>;
  email: RequiredStringSchema<any>;
}>;

interface IProps {
  initialValues: PartialGetUserResponse;
  validationSchema: validationSchemaType;
  onSubmit: (values: Partial<GetUserResponse>) => void;
}

const AddUserComponent: React.FC<IProps> = (props) => {
  const { initialValues, validationSchema, onSubmit } = props;

  return (
    <div>
      <div className="add-user-form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {() => (
            <div>
              <Form>
                <h1 id="add-heading">Add User</h1>
                <FormikControl
                  control="input"
                  name="first_name"
                  label="First Name"
                />
                <FormikControl
                  control="input"
                  name="last_name"
                  label="Last Name"
                />
                <FormikControl control="input" name="email" label="Email Id" />
                <Button type="submit" name="Submit" />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default React.memo(AddUserComponent);
