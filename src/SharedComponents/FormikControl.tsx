import React, { ReactElement } from "react";

import InputBox from "./InputBox";

interface IProps {
  control: string;
  name: string;
  label: string;
  className?: string;
  id?: string;
  style?: string;
  disabled?: boolean;
}

const FormikControl = (props: IProps): ReactElement => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <InputBox {...rest} />;
    default:
      return <div>Invalid Entry for Formik</div>;
  }
};

export default React.memo(FormikControl);
