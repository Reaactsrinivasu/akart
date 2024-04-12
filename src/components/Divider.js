import React from "react";
import Imports from "../common/Imports";
const ReusableDivider = (props) => {
  return (
    <>
      <Imports.Divider
        sx={{
          ...props.sx,
        }}
      >
        {props.children}
      </Imports.Divider>
    </>
  );
};
export default ReusableDivider;
