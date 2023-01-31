import React, { ReactElement } from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

interface IProps {
  name: string;
  label: string;
  className?: string;
  id?: string;
  style?: string;
  disabled?: boolean;
}

const InputBox = (props: IProps): ReactElement => {
  const { name, label, ...rest } = props;

  return (
    <div className="form-container">
      <div className="form-control">
        <label>{label}</label>
        <Field name={name} {...rest} className="input-box" />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default React.memo(InputBox);
