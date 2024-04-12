import React from "react";
import Imports from "../common/Imports";
const ReusableInputLabel = (props) => {
    let htmlFor = props.htmlFor;
  return (
    <>
      <Imports.InputLabel
        htmlFor={htmlFor}
        sx={{
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.InputLabel>
    </>
  );
};
export default ReusableInputLabel;
