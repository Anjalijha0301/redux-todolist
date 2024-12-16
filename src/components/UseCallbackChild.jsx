import React, { memo } from "react";

const UseCallbackChild = ({ text }) => {
  console.log("component rendered");
  return <div>{text}</div>;
};

export default memo(UseCallbackChild);
