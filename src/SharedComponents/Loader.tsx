import React from "react";

import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="rgb(132, 132, 226)"
        wrapperClass={"user-loader"}
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default React.memo(Loader);
