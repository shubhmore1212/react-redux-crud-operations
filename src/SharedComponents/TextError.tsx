import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const TextError = (props: IProps) => {
  return <div className="error-form-msg">{props.children}</div>;
};

export default React.memo(TextError);
